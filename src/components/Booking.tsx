'use client';

import clsx from 'clsx';
import { Button } from '@/components/Button';
import { useEffect, useState } from 'react';

const availableTimes = [
    [
        {
            title: '8:00',
            isBooked: true,
        },
        {
            title: '9:00',
            isBooked: false,
        },
        {
            title: '10:00',
            isBooked: true,
        },
        {
            title: '11:00',
            isBooked: false,
        },
        {
            title: '12:00',
            isBooked: false,
        },
    ],
    [
        {
            title: '1:00',
            isBooked: false,
        },
        {
            title: '2:00',
            isBooked: false,
        },
        {
            title: '3:00',
            isBooked: false,
        },
        {
            title: '4:00',
            isBooked: false,
        },
        {
            title: '5:00',
            isBooked: false,
        },
    ],
];

export function Booking() {
    const [slotTaken, setSlotTaken] = useState(false);

    const today = new Date();

    const daysOfWeek = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
    ];
    const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ];

    const dayOfWeek = daysOfWeek[today.getDay()];
    const month = months[today.getMonth()];
    const day = today.getDate();
    const year = today.getFullYear();

    const formattedDate = `${month} ${day} ${year}`;

    return (
        <section
            id="pricing"
            aria-label="Availability"
            className="bg-[#f1f1f1] py-20 sm:py-32"
        >
            <div className="container">
                <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-700 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
                    <div className="p-8 sm:p-10 lg:flex-auto">
                        <div className="flex flex-col items-center">
                            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                                {dayOfWeek}
                            </h2>
                            <h3 className="text-2xl font-bold tracking-tight text-gray-900">
                                {formattedDate}
                            </h3>
                        </div>
                        <ul
                            role="list"
                            className="mt-8 grid grid-cols-2 gap-x-2 w-full items-center justify-center text-gray-600"
                        >
                            {availableTimes.map((group, groupIndex) => (
                                <li
                                    key={groupIndex}
                                    className="flex flex-col gap-4"
                                >
                                    {group.map((time) => (
                                        <button
                                            key={groupIndex}
                                            className={clsx(
                                                'flex justify-center w-full font-bold text-lg py-4',
                                                time.isBooked
                                                    ? 'bg-gray-500'
                                                    : 'bg-white text-black hover:bg-green-300'
                                            )}
                                            disabled={time.isBooked}
                                            onClick={() => null}
                                        >
                                            {time.title}
                                        </button>
                                    ))}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
                        <div className="rounded-2xl bg-gray-50 h-full py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
                            <div className="mx-auto max-w-xs px-8">
                                <p className="text-base font-semibold text-gray-600">
                                    Diagnostic Fee
                                </p>
                                <p className="mt-6 flex items-baseline justify-center gap-x-2">
                                    <span className="text-5xl font-bold tracking-tight text-gray-900">
                                        $65
                                    </span>
                                    <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">
                                        USD
                                    </span>
                                </p>
                                <a
                                    href="#"
                                    className="mt-10 block w-full rounded-md bg-green-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                    Schedule a quote
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
