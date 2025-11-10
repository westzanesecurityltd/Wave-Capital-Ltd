import Image from 'next/image'

const CustomLogo = () => {
  return (
    <Image
      alt="Wave Capital Logo"
      width={164}
      height={56}
      className="w-full max-w-[8.125rem] lg:max-w-[10.25rem] h-[2.8125rem] lg:h-[3.5rem] object-contain"
      src="/images/wave-capital-logo.png"
    />
  )
}

export default CustomLogo
