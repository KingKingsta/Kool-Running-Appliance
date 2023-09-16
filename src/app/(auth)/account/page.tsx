import Link from 'next/link';

import { Button } from '@/components/Button';
import { SelectField, TextArea, TextField } from '@/components/Fields';
import { LogoMedium } from '@/components/Logos';
import { SlimLayout } from '@/components/SlimLayout';
import { type Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Sign Up',
};

export default function Register() {
    return (
        <SlimLayout>
            <Link href={'/'} aria-label="Back">
                <span>
                    <span aria-hidden="true">&larr;</span> Back
                </span>
            </Link>
            <div className="flex">
                <Link href="/" aria-label="Home">
                    <LogoMedium className="h-10 w-auto" />
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
                    <Button
                        type="submit"
                        variant="solid"
                        color="green"
                        className="w-full"
                    >
                        <span>
                            Create <span aria-hidden="true">&rarr;</span>
                        </span>
                    </Button>
                </div>
            </form>
        </SlimLayout>
    );
}
