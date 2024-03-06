'use client';

import Link from 'next/link';

const links = [
    {
        name: 'Services',
        href: 'https://moonday.design/',
        sublinks: [
            {
                name: "Branding",
                href: 'https://moonday.design/',
            },
            {
                name: "UX/UI Design",
                href: 'https://moonday.design/',
            },
            {
                name: "Consulting",
                href: 'https://moonday.design/',
            },
        ]
    },
    {
        name: 'Projects',
        href: 'https://moonday.design/#work',
        sublinks: [
            {
                name: "Coinhouse",
                href: 'https://moonday.design/coinhouse',
            },
            {
                name: "Linxo",
                href: 'https://moonday.design/linxo',
            },
            {
                name: "Looter",
                href: 'https://moonday.design/looter',
            },
            {
                name: "Trooper",
                href: 'https://moonday.design/trooper',
            },
        ]
    },
    {
        name: 'Contact',
        href: 'https://moonday.design/#wishlist',
        sublinks: [
            {
                name: "Book a Call",
                href: 'https://moonday.design/#contact-cta',
            },
            {
                name: "Write us!",
                href: 'mailto:contact@moonday.design',
            },
        ]
    },
];

export default function FooterLinks() {
    return (
        <>
            {links.map((link) => {
                return (
                    <div key={link.name} className='flex flex-col justify-start items-start gap-2 w-full md:w-auto'>
                        <Link
                            href={link.href}
                            className="text-label hover:text-caption text-sm font-semibold">{link.name}
                        </Link>
                        <div className='flex flex-col justify-start items-start gap-1'>
                        {link.sublinks.map((sublink) => {
                            return (
                                    <Link
                                    key={sublink.name}
                                    href={sublink.href}
                                    className="text-caption hover:text-placeholder text-xs font-medium">{sublink.name}
                                    </Link>
                            );
                        })}
                        </div>
                    </div>
                );
            })}
        </>
    );
}