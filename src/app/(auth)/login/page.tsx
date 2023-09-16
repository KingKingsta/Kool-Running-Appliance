import Link from 'next/link';

import { Button } from '@/components/Button';
import { TextField } from '@/components/Fields';
import { LogoMedium } from '@/components/Logos';
import { SlimLayout } from '@/components/SlimLayout';
import { type Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Sign In',
};

export default function Login() {
    return (
        <SlimLayout>
            <div className="flex">
                <Link href="/" aria-label="Home">
                    <LogoMedium className="h-10 w-auto" />
                </Link>
            </div>
            <h2 className="font-display mt-20 text-lg font-semibold text-gray-900">
                Sign in to your account
            </h2>
            <p className="mt-2 text-sm text-gray-700">
                Don’t have an account?{' '}
                <Link
                    href="/register"
                    className="font-medium text-green-600 hover:underline"
                >
                    Sign up
                </Link>{' '}
            </p>
            <form action="#" className="mt-10 grid grid-cols-1 gap-y-8">
                <TextField
                    label="Email address"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                />
                <TextField
                    label="Password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                />
                <div>
                    <Button
                        type="submit"
                        variant="solid"
                        color="green"
                        className="w-full"
                    >
                        <span>
                            Sign in <span aria-hidden="true">&rarr;</span>
                        </span>
                    </Button>
                </div>
            </form>
        </SlimLayout>
    );
}
