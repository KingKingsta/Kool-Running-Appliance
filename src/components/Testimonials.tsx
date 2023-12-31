import Image from 'next/image';

import avatarImage1 from '@/images/avatars/donnieb_brown.png';
import avatarImage2 from '@/images/avatars/david_miller.png';
import avatarImage3 from '@/images/avatars/amy_shaw.png';
import avatarImage4 from '@/images/avatars/nycole_maza.png';
import avatarImage5 from '@/images/avatars/ariana_williams.png';
import avatarImage6 from '@/images/avatars/per_son.png';

const testimonials = [
    [
        {
            content:
                'Koolrunning is the best when it comes to appliance repairs. Vinton knows his stuff, honest and well mannered tech, he also tells you like it is -that’s what we like about him. Great reasonable and fair prices for repair work. Staff willing to go out of there way to inform you on appointment times and even if running a little late. I highly recommend Koolrunning Appliance and Refrigeration',
            author: {
                name: 'Donnieb Brown',
                service: 'Refrigerator Repair',
                image: avatarImage1,
            },
        },
        {
            content:
                'Absolutely amazing service. I can say for once this company is the one company I seen so far that actually comes out and gives the proper service the clients pay for instead of just taking your money. He accurately diagnosed our ice machine and did the most thorough proper cleaning I&apos;ve ever seen you were over and beyond and also started cleaning other things that wasn&apos;t even the priority he was being paid for absolutely amazing service. I&apos;ve dealt with plenty of repair companies and by far this one is the best it&apos;s night and day I would not call anybody except for this company here trust me, your money will be well. Spent not wasted',
            author: {
                name: 'David Miller',
                service: 'Freezer Repair',
                image: avatarImage2,
            },
        },
    ],
    [
        {
            content:
                'Koolrunning did an excellent job fixing my stove! They are professional, on time, and did such a great job figuring out what the problem was with my stove and fixing it. I highly recommend them!',
            author: {
                name: 'Amy Shaw',
                service: 'Stove & Cooktop repair',
                stars: 5,
                image: avatarImage3,
            },
        },
        {
            content:
                'Diagnosed and repaired my dishwasher in one visit. Friendly and professional, reasonably priced. Definitely recommend.',
            author: {
                name: 'Nycole Maza',
                service: 'Dishwasher repair',
                stars: 5,
                image: avatarImage4,
            },
        },
        {
            content:
                "We found Koolrunning Appliance online and chose them based on their great reviews and we are so glad we did! We've had some washer/dryer issues and Florence was quick to get Vinton out to address and fix the problem. Vinton is very knowledgeable and has been wonderful to work with. I highly recommend!",
            author: {
                name: 'Ariana Williams',
                service: 'Washer & Dryer repair',
                stars: 5,
                image: avatarImage5,
            },
        },
        {
            content:
                "The technician was knowledgeable, professional, and punctual. He even added a direct shutoff to my fridge's copper tube during instillation of my unit. I highly recommend Koolrunning.",
            author: {
                name: 'Per Son',
                service: 'Appliance Installation',
                stars: 5,
                image: avatarImage6,
            },
        },
    ],
    [],
];

function QuoteIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
    return (
        <svg aria-hidden="true" width={105} height={78} {...props}>
            <path d="M25.086 77.292c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622C1.054 58.534 0 53.411 0 47.686c0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C28.325 3.917 33.599 1.507 39.324 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Zm54.24 0c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622-2.11-4.52-3.164-9.643-3.164-15.368 0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C82.565 3.917 87.839 1.507 93.564 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Z" />
        </svg>
    );
}

export function Testimonials() {
    return (
        <section
            id="testimonials"
            aria-label="What our customers are saying"
            className="py-20 sm:py-32"
        >
            <div className="container">
                <div className="mx-auto max-w-2xl md:text-center">
                    <h2 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">
                        Loved across the county
                    </h2>
                </div>
                <ul
                    role="list"
                    className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:gap-8 lg:mt-20 lg:max-w-none lg:grid-cols-2"
                >
                    {testimonials.map((column, columnIndex) => (
                        <li key={columnIndex}>
                            <ul
                                role="list"
                                className="flex flex-col gap-y-6 sm:gap-y-8"
                            >
                                {column.map((testimonial, testimonialIndex) => (
                                    <li key={testimonialIndex}>
                                        <figure className="relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10">
                                            <QuoteIcon className="absolute left-6 top-6 fill-slate-100" />
                                            <blockquote className="relative">
                                                <p className="text-lg tracking-tight text-slate-900">
                                                    {testimonial.content}
                                                </p>
                                            </blockquote>
                                            <figcaption className="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
                                                <div>
                                                    <div className="font-display text-base text-slate-900">
                                                        {
                                                            testimonial.author
                                                                .name
                                                        }
                                                    </div>
                                                    <div className="mt-1 text-sm text-slate-500">
                                                        {
                                                            testimonial.author
                                                                .service
                                                        }
                                                    </div>
                                                </div>
                                                <div className="overflow-hidden rounded-full bg-slate-50">
                                                    <Image
                                                        className="h-14 w-14 object-cover"
                                                        src={
                                                            testimonial.author
                                                                .image
                                                        }
                                                        alt=""
                                                        width={56}
                                                        height={56}
                                                    />
                                                </div>
                                            </figcaption>
                                        </figure>
                                    </li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
