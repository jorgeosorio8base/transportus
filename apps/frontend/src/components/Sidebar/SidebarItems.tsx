
    import { Icon } from '@iconify/react';
    import {
        Listbox,
        ListboxItem,
        ListboxSection,
        ScrollShadow,
    } from '@nextui-org/react';
    import cn from 'classnames';
    import { useRouter } from 'next/router';
    import { useState } from 'react';
    import s from './Sidebar.module.scss';

    export interface SidebarItem {
        title: string;
        icon: string;
        href: string;
        subitems?: {
            title: string;
            href: string;
            icon: string;
        }[];
    }

    export interface SidebarItemsProps {
        iconStyle: string;
        items: SidebarItem[];
        
    }

    export function SidebarItems({
        items,
        iconStyle,
        
    }: SidebarItemsProps) {
        const router = useRouter();
        const [expandedItems, setExpandedItems] = useState<string[]>([]);

        const isActive = (href: string) => {
            return router.pathname === href;
        };

        return (
            <ScrollShadow hideScrollBar className="flex flex-col">
            {items?.map(({ href, icon, title, subitems }, index) => (
                <Listbox
                key={`${href}_${index}`}
                variant="shadow"
                color="primary"
                aria-label={`Navigate to ${title}`}
                >
                <ListboxItem
                    aria-label={`Navigate to ${title}`}
                    key={`${href}_${index}`}
                    {...(!subitems && { href })}
                    endContent={
                    subitems ? (
                        <Icon
                        onClick={() =>
                            setExpandedItems((prev) =>
                            prev.includes(`${href}_${index}`)
                                ? prev.filter((item) => item !== `${href}_${index}`)
                                : [...prev, `${href}_${index}`],
                            )
                        }
                        icon={`${iconStyle}:${!expandedItems.includes(`${href}_${index}`) ? 'arrow-down-bold' : 'arrow-up-bold'}`}
                        className={`size-5  pointer-events-auto `}
                        />
                    ) : null
                    }
                    className={`flex items-center justify-start py-2 ${isActive(href) ? 'bg-primary text-primary-foreground' : ''}`}
                >
                    <div
                    className={`flex w-full items-center justify-start gap-2`}
                    >
                    <Icon icon={`${iconStyle}:${icon}`} className={`size-5`} />
                    <span
                        className={`text-sm  ${isActive(href) ? 'font-medium' : ''} `}
                    >
                        {title}
                    </span>
                    </div>
                </ListboxItem>
                <ListboxSection
                    className={cn(`${expandedItems.includes(`${href}_${index}`) ? 'flex': 'hidden'} items-center justify-end [&>ul]:flex [&>ul]:w-[90%] [&>ul]:flex-col [&>ul]:gap-1 `, s['sidebar-subitems']
                    )}
                    items={subitems || []}
                >
                    {({ href, icon, title }) => (
                    <ListboxItem
                        aria-label={`Navigate to ${title}`}
                        href={href}
                        key={href}
                        className={`flex items-center justify-start py-2  ${isActive(href) ? 'bg-primary text-primary-foreground' : ''} `}
                    >
                        <div
                        className={`flex w-full items-center justify-start gap-2 `}
                        >
                        <Icon icon={`${iconStyle}:${icon}`} className={`size-5`} />
                        <span className={`text-sm  ${isActive(href) ? 'font-medium' : ''} `}>
                            {title}
                        </span>
                        </div>
                    </ListboxItem>
                    )}
                </ListboxSection>
                </Listbox>
            ))}
            </ScrollShadow>
        );
    }
  