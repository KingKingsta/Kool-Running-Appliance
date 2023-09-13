'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Tab } from '@headlessui/react'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import { SlimLayout } from './SlimLayout'
import Link from 'next/link'
import { Logo } from './Logo'
import { TextField } from './Fields'
import { Button } from './Button'



const times = [
  
]

export function PrimaryFeatures() {
  

  

  return (
    <SlimLayout>
      <Link href={"/"} aria-label="Back">
        <span>
          <span aria-hidden="true">&larr;</span> Back
        </span>
      </Link>
      <div className="flex">
        <Link href="/" aria-label="Home">
          <Logo className="h-10 w-auto" />
        </Link>
      </div>
      <h2 className="mt-10 text-lg font-semibold text-gray-900">
        Create account
      </h2>
      <form
        action="#"
        className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2"
      >
        <TextField
          label="First name"
          name="first_name"
          type="text"
          autoComplete="given-name"
          required
        />
        <TextField
          label="Last name"
          name="last_name"
          type="text"
          autoComplete="family-name"
          required
        />
        <TextField
          className="col-span-full"
          label="Email address"
          name="email"
          type="email"
          autoComplete="email"
          required
        />
        <div className="col-span-full">
          <Button type="submit" variant="solid" color="green" className="w-full">
            <span>
              Create <span aria-hidden="true">&rarr;</span>
            </span>
          </Button>
        </div>
      </form>
    </SlimLayout>
  )
}
