"use client";
import type {
  FormFieldBlock,
  Form as FormType,
} from "@payloadcms/plugin-form-builder/types";
// import { usePathname } from 'next/navigation'
import RichText from "@/components/RichText";
import { Button } from "@/components/ui/button";
import type { DefaultTypedEditorState } from "@payloadcms/richtext-lexical";
import { useRouter } from "next/navigation";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";

// import { ArrowRight } from '@/components/Icons/ArrowRight'
import { getClientSideURL } from "@/utilities/getURL";
import { CheckCircle2, Loader2 } from "lucide-react";
import { fields } from "./fields";

export type FormBlockType = {
  blockName?: string;
  blockType?: "formBlock";
  enableIntro: boolean;
  form: FormType;
  introContent?: DefaultTypedEditorState;
};

declare global {
  interface Window {
    grecaptcha: any;
    onReCAPTCHA: (token: string) => void;
  }
}

export const FormBlock: React.FC<
  {
    id?: string;
  } & FormBlockType
> = (props) => {
  const {
    enableIntro,
    form: formFromProps,
    form: {
      id: formID,
      confirmationMessage,
      confirmationType,
      redirect,
      submitButtonLabel,
    } = {},
    introContent,
  } = props;

  const formMethods = useForm({
    defaultValues: formFromProps.fields,
  });
  const {
    control,
    formState: { errors },
    handleSubmit,
    register,
  } = formMethods;

  const [isLoading, setIsLoading] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState<boolean>();
  const [error, setError] = useState<
    { message: string; status?: string } | undefined
  >();
  const router = useRouter();
  // const pathname = usePathname() || '';
  const widgetIdRef = useRef<number | null>(null);
  const recaptchaContainerRef = useRef<HTMLDivElement | null>(null);

  // Extracted submitForm so it's available to both handleSubmit & onReCAPTCHA
  const submitForm = useCallback(
    async (token: string, data: FormFieldBlock[]) => {
      setError(undefined);

        const dataToSend = Object.entries(data).map(([name, value]) => ({
          field: name,
          value,
        }));

        const loadingTimerID = setTimeout(() => {
          setIsLoading(true);
        }, 1000);

        try {
          const req = await fetch(
            `${getClientSideURL()}/api/form-submissions`,
            {
              body: JSON.stringify({
                form: formID,
                submissionData: dataToSend,
                "g-recaptcha-response": token,
              }),
              headers: { "Content-Type": "application/json" },
              method: "POST",
            }
          );
          const res = await req.json();
          clearTimeout(loadingTimerID);

          if (req.status >= 400) {
            setIsLoading(false);
            console.error("Form submission error:", res);
            setError({
              message:
                res.error ||
                res.errors?.[0]?.message ||
                "Internal Server Error",
              status: req.status.toString(),
            });
            return;
          }

          setIsLoading(false);
          setHasSubmitted(true);
          if (confirmationType === "redirect" && redirect?.url) {
            router.push(redirect.url);
          }
        } catch (err) {
          clearTimeout(loadingTimerID);
          setIsLoading(false);
          console.error("Form submission exception:", err);
          setError({
            message:
              err instanceof Error ? err.message : "Something went wrong.",
          });
        }
      
    },
    [formID, confirmationType, redirect, router]
  );
// Check if the pathname starts with `/career/` (optional example)
// const isCareerDetailPage = pathname.startsWith('/career/')
  
  // Global callback used by reCAPTCHA when it resolves
  useEffect(() => {
    window.onReCAPTCHA = (token: string) => {
      handleSubmit((data) => submitForm(token, data))();
      try {
        if (window.grecaptcha && widgetIdRef.current !== null) {
          window.grecaptcha.reset(widgetIdRef.current);
        }
      } catch {}
    };
  }, [handleSubmit, submitForm]);

  // Render invisible reCAPTCHA widget explicitly once API is ready
  useEffect(() => {
    const interval = setInterval(() => {
      try {
        if (
          window.grecaptcha &&
          recaptchaContainerRef.current &&
          widgetIdRef.current === null
        ) {
          window.grecaptcha.ready(() => {
            try {
              widgetIdRef.current = window.grecaptcha.render(
                recaptchaContainerRef.current!,
                {
                  sitekey: process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY,
                  size: "invisible",
                  callback: "onReCAPTCHA",
                }
              );
            } catch {}
          });
        }
      } catch {}
    }, 300);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container custom-form-block px-0">
      {enableIntro && introContent && !hasSubmitted && (
        <RichText
          className="mb-5 lg:mb-8 text-2xl lg:text-[2rem] font-semibold custom-richtext-block"
          data={introContent}
          enableGutter={false}
        />
      )}
      {!isLoading && hasSubmitted && confirmationType === "message" && (
        <div className="confirmation-msg text-center shadow-sm">
          <div className="flex flex-col items-center gap-3 w-full">
            <CheckCircle2 className="h-8 w-8 text-green-500" />
            <div className="text-lg font-semibold">Thank you!</div>
            <div className="text-sm ">
              <RichText
                data={confirmationMessage}
                className="prose text-left max-w-none"
              />
            </div>
          </div>
        </div>
      )}
      <div className="custom-inner-block">
        <FormProvider {...formMethods}>
          {error && (
            <div>{`${error.status || "500"}: ${error.message || ""}`}</div>
          )}
          {!hasSubmitted && (
            <form
              id={formID}
              className="custom-form"
              onSubmit={handleSubmit(() => {
                if (!window.grecaptcha || widgetIdRef.current === null) {
                  setError({
                    message: "reCAPTCHA not ready, please retry or refresh.",
                  });
                  return;
                }
                window.grecaptcha.ready(() => {
                  try {
                    window.grecaptcha.execute(widgetIdRef.current!);
                  } catch (e) {
                    setError({
                      message: "Failed to execute reCAPTCHA, please retry.",
                    });
                  }
                });
              })}
              encType={undefined}
            >
              {/* Explicit invisible reCAPTCHA container */}
              <div ref={recaptchaContainerRef} style={{ display: "inline" }} />

              <div className="custom-form-row">
                {formFromProps?.fields?.map((field, index) => {
                  const Field: React.FC<any> =
                    fields?.[(field as any).blockType as keyof typeof fields];
                  return Field ? (
                    <Field
                      key={index}
                      form={formFromProps}
                      {...field}
                      {...formMethods}
                      control={control}
                      errors={errors}
                      register={register}
                    />
                  ) : null;
                })}
              </div>
              <div className="custom-action-block">
                <Button
                  type="submit"
                  disabled={isLoading}
                  className="button-primary bg-primarys hover:bg-primarysLight text-black font-medium py-3 px-8 rounded-full transition-colors duration-200 h-14 text-base flex gap-1.5 group disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <span className="flex items-center gap-2">
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Submitting…
                    </span>
                  ) : (
                    <>
                      <span>{submitButtonLabel}</span>
                    </>
                  )}
                </Button>
              </div>
            </form>
          )}
        </FormProvider>
      </div>
    </div>
  );
};
