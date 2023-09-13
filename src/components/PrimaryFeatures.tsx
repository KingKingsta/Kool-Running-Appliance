'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Tab } from '@headlessui/react'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import backgroundImage from '@/images/backgrounds/background-services-lightgreen.jpg'
import fixingWasher from '@/images/service photos/fixing-washer-machine.jpg'
import fixingStove from '@/images/service photos/fixing-stove.webp'
import fixingDishwasher from '@/images/service photos/fixing-dishwaher.jpg'
import fixingFridge from '@/images/service photos/fixing-fridge.jpg'


const features = [
  {
    title: 'Washer & Dryer',
    description:
      "About Washer & Dryer",
    image: fixingWasher,
  },
  {
    title: 'Refrigerators & Ice Makers',
    description:
      "About Refrigerators & Ice Makers",
    image: fixingFridge,
  },
  {
    title: 'Stove & Ovens',
    description:
      "About Stove & Ovens",
    image: fixingStove,
  },
  {
    title: 'Dishwashers',
    description:
      'About Dishwashers',
    image: fixingDishwasher,
  },
]

export function PrimaryFeatures() {
  let [tabOrientation, setTabOrientation] = useState('horizontal')

  useEffect(() => {
    let lgMediaQuery = window.matchMedia('(min-width: 1024px)')

    function onMediaQueryChange({ matches }: any) {
      setTabOrientation(matches ? 'vertical' : 'horizontal')
    }

    onMediaQueryChange(lgMediaQuery)
    lgMediaQuery.addEventListener('change', onMediaQueryChange)

    return () => {
      lgMediaQuery.removeEventListener('change', onMediaQueryChange)
    }
  }, [])

  return (
    <section
      id="features"
      aria-label="Services we provde"
      className="relative overflow-hidden pb-28 pt-20 sm:py-32"
    >
      <Image
        className="absolute left-1/2 top-1/2 max-w-none translate-x-[-44%] translate-y-[-42%]"
        src={backgroundImage}
        alt=""
        width={2245}
        height={1636}
        unoptimized
      />
      <Container className="relative">
        <div className="max-w-2xl mx-auto text-center md:mx-auto md:text-center xl:max-w-none">
          <h2 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
            We cover a variety of appliances
          </h2>
        </div>
        <Tab.Group
          as="div"
          className="mt-16 grid grid-cols-1 items-center gap-y-2 pt-10 sm:gap-y-6 md:mt-20 lg:grid-cols-12 lg:pt-0"
          vertical={tabOrientation === 'vertical'}
        >
          {({ selectedIndex }) => (
            <>
              <div className="-mx-4 flex overflow-x-auto pb-4 sm:mx-0 sm:overflow-visible sm:pb-0 lg:col-span-5">
                <Tab.List className="relative z-10 flex flex-col gap-y-4 whitespace-nowrap px-4 w-full lg:flex lg:mx-0 lg:block lg:gap-x-0 lg:gap-y-1 lg:whitespace-normal">
                  {features.map((feature, featureIndex) => (
                    <div
                      key={feature.title}
                      className={clsx(
                        'group relative rounded-full px-4 py-1 lg:rounded-l-xl lg:rounded-r-none lg:p-6',
                        selectedIndex === featureIndex
                          ? 'bg-white lg:bg-white/50 lg:ring-1 lg:ring-inset lg:ring-white/10'
                          : 'hover:bg-white/30 lg:hover:bg-white/5',
                      )}
                    >
                      <h3>
                        <Tab
                          className={clsx(
                            'font-display text-lg ui-not-focus-visible:outline-none',
                            selectedIndex === featureIndex
                              ? 'text-slate-700 font-bold lg:text-slate-700 lg:font-bold'
                              : 'text-slate-600 hover:text-slate-700 lg:text-slate-600',
                          )}
                        >
                          <span className="absolute inset-0 rounded-full lg:rounded-l-xl lg:rounded-r-none" />
                          {feature.title}
                        </Tab>
                      </h3>
                      <p
                        className={clsx(
                          'mt-2 hidden text-sm lg:block',
                          selectedIndex === featureIndex
                            ? 'text-slate-800'
                            : 'text-slate-500 group-hover:text-slate-500',
                        )}
                      >
                        {feature.description}
                      </p>
                    </div>
                  ))}
                </Tab.List>
              </div>
              <Tab.Panels className="lg:col-span-7">
                {features.map((feature) => (
                  <Tab.Panel key={feature.title} unmount={false}>
                    <div className="mt-10 max-h-[40rem] overflow-hidden rounded-xl bg-slate-50 shadow-xl shadow-blue-900/20 w-auto lg:mt-0 lg:w-[67.8125rem]">
                      <Image
                        className="w-full"
                        src={feature.image}
                        alt=""
                        priority
                        width={1000}
                        height={550}
                        sizes="(max-width: 1024px) 67.8125rem, (max-width: 640px) 90vw, 45rem"
                      />
                    </div>
                  </Tab.Panel>
                ))}
              </Tab.Panels>
            </>
          )}
        </Tab.Group>
      </Container>
    </section>
  )
}
