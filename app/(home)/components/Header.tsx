'use client';

import Avatar from '@/app/(home)/components/Avatar';
import { User } from '@prisma/client';
import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { GoKebabHorizontal } from 'react-icons/go';
import { MdOutlineGroupAdd } from 'react-icons/md';
import SideModal from './Modal/SideModal';
import { useState } from 'react';
import { IoArrowBack } from 'react-icons/io5';
import useConversation from '@/app/hooks/useConversation';
import Profile from './InfoComponents/Profile';

interface HeaderProps {
    currentUser: User;
}

export default function Header({ currentUser }: HeaderProps) {
    const pathname = usePathname();
    const links = [
        {
            key: 'cknskcns',
            name: 'Chats',
            href: '/chats',
        },
        {
            key: 'ckcscass',
            name: 'People',
            href: '/people',
        },
    ];

    const [showSideModal, setShowSideModal] = useState(false);
    const handleSideModal = () => {
        setShowSideModal((prevValue) => !prevValue);
    };

    const { isOpen } = useConversation();

    return (
        <>
            <SideModal
                showSideModal={showSideModal}
                setShowSideModal={handleSideModal}
                modalHeading="Profile"
                modalOrigin="origin-left"
                icon={IoArrowBack}
                isOpen={isOpen}
            >
                <Profile currentUser={currentUser} />
            </SideModal>
            <header className="absolute top-0 left-0 w-full  md:w-[45%] md:max-w-[480px] flex flex-col text-white  pt-4 bg-primary md:border-borderColor md:border-r">
                <div className="flex items-center mx-[1.6rem] gap-6">
                    <Avatar
                        user={currentUser}
                        status={false}
                        size="HEADER"
                        onClick={handleSideModal}
                    />
                    <MdOutlineGroupAdd className="ml-auto text-3xl lg:text-[2rem] cursor-pointer" />
                    <GoKebabHorizontal className="text-3xl lg:text-[2rem] rotate-90 cursor-pointer" />
                </div>
                <nav className="mt-8 relative flex justify-center text-center  text-lg md:text-xl font-medium tracking-wider">
                    {links.map((link) => {
                        const isActive = pathname.includes(link.href);
                        return (
                            <Link
                                key={link.key}
                                href={link.href}
                                className={clsx(
                                    `main-nav-item flex-1 cursor-pointer`,
                                    isActive && 'active '
                                )}
                            >
                                {link.name}
                            </Link>
                        );
                    })}
                </nav>
            </header>
        </>
    );
}