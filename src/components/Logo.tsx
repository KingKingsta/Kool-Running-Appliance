import Image from 'next/image'
import CompanyLogo from '@/images/1200px-Flag_of_Jamaica.svg.webp'

export function Logo(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <Image src={CompanyLogo} width={100} height={100} alt="Kool Running Appliance Logo" />
  )
}
