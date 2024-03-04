'use client';

import Link from 'next/link';

const links = [
    {
        name: 'Services',
        href: 'moonday.design/services',
        sublinks: [
            {
                name: "Branding",
                href: 'moonday.design/services/branding',
            },
            {
                name: "UX/UI Design",
                href: 'moonday.design/services/uxuidesign',
            },
            {
                name: "Consulting",
                href: 'moonday.design/services/consulting',
            },
        ]
    },
    {
        name: 'Projects',
        href: 'moonday.design/projects',
        sublinks: [
            {
                name: "Coinhouse",
                href: 'moonday.design/projects/coinhouse',
            },
            {
                name: "Linxo",
                href: 'moonday.design/projects/linxo',
            },
            {
                name: "Looter",
                href: 'moonday.design/projects/looter',
            },
            {
                name: "Trooper",
                href: 'moonday.design/projects/trooper',
            },
        ]
    },
    {
        name: 'Contact',
        href: 'moonday.design/contact',
        sublinks: [
            {
                name: "Book a Call",
                href: 'moonday.design/contact',
            },
            {
                name: "Write us!",
                href: 'moonday.design/contact',
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