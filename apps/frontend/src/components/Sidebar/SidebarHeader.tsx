
    import { IUserEntity } from '@transportus/core';
    import { Icon } from '@iconify/react';
    import {
        Button,
        Card,
        CardBody,
        Divider,
        Dropdown,
        DropdownItem,
        DropdownMenu,
        DropdownSection,
        DropdownTrigger,
        ScrollShadow,
        Tooltip,
        User,
    } from '@nextui-org/react';

    export interface SidebarHeaderProps {
        currentUser?: IUserEntity;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        
        
    }

    export function SidebarHeader({
        currentUser,
        
        
    }: SidebarHeaderProps) {
        return (
            <div
            className={`flex w-full items-center justify-between `}
            >
            <Dropdown>
                <DropdownTrigger>
                <User
                    avatarProps={{
                    src: currentUser?.Avatar?.DownloadUrl,
                    }}
                    className={` `}
                    name={
                        <span className="truncate text-sm font-semibold">
                            {(currentUser?.FirstName || '') + ' ' + (currentUser?.LastName || '')}
                        </span>
                    }
                />
                </DropdownTrigger>
                <DropdownMenu>
                <DropdownItem
                    isReadOnly
                    key="profile"
                    className="h-14 gap-2 opacity-100"
                >
                    <User
                    name={(currentUser?.FirstName || '') + ' ' + (currentUser?.LastName || '')}
                    description={currentUser?.Email}
                    classNames={{
                        name: 'text-default-600',
                        description: 'text-default-500',
                    }}
                    avatarProps={{
                        size: 'sm',
                        src: currentUser?.Avatar?.DownloadUrl,
                    }}
                    />
                </DropdownItem>
                <DropdownItem
                    startContent={
                    <Icon icon="ph:gear-six-bold" className="size-5" />
                    }
                    key="settings"
                >
                    Settings
                </DropdownItem>
                <DropdownItem
                    startContent={
                    <Icon icon="ph:sign-out-bold" className="size-5" />
                    }
                    color="danger"
                >
                    Logout
                </DropdownItem>
                </DropdownMenu>
            </Dropdown>
            <div className="flex items-center justify-center gap-2">
                
                
            </div>
            </div>
        );
    }
  