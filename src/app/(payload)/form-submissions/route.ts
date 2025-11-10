import { NextRequest, NextResponse } from 'next/server'
import { getPayload } from 'payload'
import config from '@payload-config'

async function verifyRecaptcha(token: string) {
  const secret = process.env.RECAPTCHA_SECRET_KEY
  if (!secret) {
    return { success: false }
  }

  const res = await fetch('https://www.google.com/recaptcha/api/siteverify', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `secret=${secret}&response=${token}`,
  })

  return res.json()
}

export async function POST(req: NextRequest) {
  try {
    const payload = await getPayload({ config })
      const body = await req.json()
            // Verify reCAPTCHA for JSON submissions
            if (body['g-recaptcha-response']) {
                const verification = await verifyRecaptcha(body['g-recaptcha-response'])
                if (!verification.success) {
                  return NextResponse.json({ error: 'reCAPTCHA verification failed' }, { status: 400 })
                }
    }
    // Ensure the data structure is correct
      const submissionData = {
        form: typeof body.form === 'string' ? parseInt(body.form) : body.form,
        submissionData: body.submissionData,
      }

      const submission = await payload.create({
        collection: 'form-submissions',
        data: submissionData,
      })

      return NextResponse.json(submission)
    
  } catch (error) {
    console.error('Form submission error:', error)
    return NextResponse.json({ 
      error: 'Failed to submit form',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 })
  }
}

function extractIdsFromUrl(url: string): string[] {
    const params = new URL(url).searchParams
    const ids: string[] = []
  
    for (const [key, value] of params.entries()) {
      // match keys like where[and][0][id][in][0]
      if (/\[id\]\[in\]/.test(key)) {
        ids.push(value)
      }
    }
  
    return ids
  }  

export async function DELETE(req: NextRequest) {
  try {
    const payload = await getPayload({ config })
    const url: any = new URL(req.url)

    const idFromQuery = extractIdsFromUrl(url)

    const deletedSubmission = await Promise.all(
      idFromQuery.map((id) =>
        payload.delete({
          collection: 'form-submissions',
          id,
        }),
      ),
    )

    return NextResponse.json({
      message: 'Form submission deleted successfully',
      id: deletedSubmission,
    })
  } catch (error) {
    console.error('Error deleting form submission:', error)
    return NextResponse.json({ 
      error: 'Failed to delete form submission',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 })
  }
}
