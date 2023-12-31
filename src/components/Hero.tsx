import Image from 'next/image';
import { Button } from '@/components/Button';
import logoLaravel from '@/images/warrenties/laravel.svg';
import logoMirage from '@/images/warrenties/mirage.svg';
import logoStatamic from '@/images/warrenties/statamic.svg';
import logoStaticKit from '@/images/warrenties/statickit.svg';
import logoTransistor from '@/images/warrenties/transistor.svg';
import logoTuple from '@/images/warrenties/tuple.svg';
import LandingPageImage from '@/images/backgrounds/landing-image.png';

export function Hero() {
    return (
        <div className="mx-auto max-w-7xl px-4 pb-16 pt-10 text-center lg:pt-12 lg:px-8">
            <div className="absolute top-0 left-0 -z-2">
                <Image
                    src={LandingPageImage}
                    width={1921}
                    height={1281}
                    className="w-screen blur-lg object-cover"
                    alt="landing-image"
                />
            </div>
            <div className="relative flex flex-col items-center">
                <div className="absolute z-10 ml-auto mr-auto pt-[5rem] md:pt-[10rem] lg:pt-[20rem] left-0 right-0 text-center">
                    <h1 className="mx-auto font-display text-3xl font-medium tracking-tight text-slate-900 sm:text-4xl md:text-6xl lg:text-7xl">
                        Kool Running{' '}
                        <span className="relative whitespace-nowrap text-blue-600">
                            <svg
                                aria-hidden="true"
                                viewBox="0 0 418 42"
                                className="absolute left-0 top-2/3 h-[0.58em] w-full fill-green-300/70"
                                preserveAspectRatio="none"
                            >
                                <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z" />
                            </svg>
                            <span className="relative text-green-600">
                                Appliance
                            </span>
                        </span>{' '}
                    </h1>
                    <p className="group mx-auto bg-slate-100 mt-6 max-w-fit text-lg px-4 rounded-2xl tracking-tight text-slate-700 hover:bg-slate-200">
                        710 45th St, West Palm Beach, FL 33407
                    </p>
                    <div className="mt-10 flex justify-center gap-x-6">
                        <Button href="/register" color="green">
                            Request a quote today
                        </Button>
                    </div>
                </div>
                <div className="relative w-fit mx-auto">
                    <div className="absolute inset-0 backdrop-brightness-40 h-full w-full bg-white/30"></div>
                    <Image
                        src={LandingPageImage}
                        width={1921}
                        height={1281}
                        alt="landing-image"
                        className=""
                    />
                </div>
            </div>
            <div className="mt-36 lg:mt-44">
                <p className="font-display text-base text-slate-900">
                    Remain under warranty
                </p>
                <ul
                    role="list"
                    className="mt-8 flex items-center justify-center gap-x-8 sm:flex-col sm:gap-x-0 sm:gap-y-10 xl:flex-row xl:gap-x-12 xl:gap-y-0"
                >
                    {[
                        [
                            { name: 'Transistor', logo: logoTransistor },
                            { name: 'Tuple', logo: logoTuple },
                            { name: 'StaticKit', logo: logoStaticKit },
                        ],
                        [
                            { name: 'Mirage', logo: logoMirage },
                            { name: 'Laravel', logo: logoLaravel },
                            { name: 'Statamic', logo: logoStatamic },
                        ],
                    ].map((group, groupIndex) => (
                        <li key={groupIndex}>
                            <ul
                                role="list"
                                className="flex flex-col items-center gap-y-8 sm:flex-row sm:gap-x-12 sm:gap-y-0"
                            >
                                {group.map((company) => (
                                    <li key={company.name} className="flex">
                                        <Image
                                            src={company.logo}
                                            alt={company.name}
                                            unoptimized
                                        />
                                    </li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
