import Image from 'next/image'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-call-to-action.jpg'
import { TextArea, TextField } from './Fields'

export function CallToAction() {
  return (
    <section
      id="get-started-today"
      className="relative overflow-hidden bg-slate-50 py-32"
    >
      <Container className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <form
          action="#"
          className="mt-10 relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2"
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
          <TextArea
            className="col-span-full"
            label="Describe your issue"
            name="description-area"
            required
          />
          <div className="col-span-full">
            <Button type="submit" variant="solid" color="blue" className="w-full">
              <span>
                Get quote <span aria-hidden="true">&rarr;</span>
              </span>
            </Button>
          </div>
        </form>
      </Container>
    </section>
  )
}
