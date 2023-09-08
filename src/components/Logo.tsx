import Image from 'next/image'
import CompanyLogo from '@/images/CompanyLogo.jpg'

export function Logo(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <Image src={CompanyLogo} width={100} height={100} alt="Kool Running Appliance Logo" />
  )
}
