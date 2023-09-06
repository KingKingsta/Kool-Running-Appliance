import Image from 'next/image'
export function Logo(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <Image src={"/images/1200px-Flag_of_Jamaica.svg.webp"} width={100} height={100} alt="Kool Running Appliance Logo" />
  )
}
