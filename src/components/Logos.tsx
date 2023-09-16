import Image from 'next/image'
import CompanyLogoSmall from '@/images/Flag Logo 32_32.svg'
import CompanyLogoMedium from '@/images/Flag Logo 40_40.svg'
import CompanyLogoLarge from '@/images/Flag Logo 52_52.svg'

const LogoSmall = (props: React.ComponentPropsWithoutRef<'svg'>) => {
  return (
    <Image src={CompanyLogoSmall} width={32} height={32} alt="Kool Running Appliance Logo" />
  )
}

const LogoMedium = (props: React.ComponentPropsWithoutRef<'svg'>) => {
  return (
    <Image src={CompanyLogoMedium} width={62} height={62} alt="Kool Running Appliance Logo" />
  )
}

const LogoLarge = (props: React.ComponentPropsWithoutRef<'svg'>) => {
  return (
    <Image src={CompanyLogoLarge} width={52} height={52} alt="Kool Running Appliance Logo" />
  )
}

export {
  LogoSmall,
  LogoMedium,
  LogoLarge
}