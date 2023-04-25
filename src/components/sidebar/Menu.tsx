import React, { useEffect, useRef } from "react";
import classNames from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";

export type NavLink = {
    label: string;
    href: string;
    icon?: React.ReactNode;
    children?: NavLink[];
};

type Props = {
    open: boolean;
    setOpen(open: boolean): void;
    navLinks: NavLink[];
};

const Menu = ({ open, setOpen, navLinks }: Props) => {
    const ref = useRef<HTMLDivElement>(null);
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                setOpen(false);
            }
        }

        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const router = useRouter();
    const currentPage = router.asPath;

    return (
        <div
            ref={ref}
            className={classNames({
                "flex flex-col justify-between": true, // sidebar
                "bg-background-color": true,
                "fixed top-0 z-0 pl-[1.6rem] md:sticky md:z-0 md:w-full 2xl:pl-[10vh]": true, // positioning
                // NOTE: to change the width, you need to modify tailwind.config.js
                "h-full w-3/4 md:h-[100vh] 2xl:w-[25rem]": true, // for height and width
                ".3s transition-transform ease-in-out xl:translate-x-0": true, //animations
                "-translate-x-full": !open, // hide sidebar to the left when closed
            })}
        >
            <nav className="pt-[8rem] md:sticky">
                <Link
                    className="ml-4 text-xl text-slate-800 decoration-sleepover-secondary underline-offset-2 hover:underline hover:decoration-wavy"
                    href="/"
                >
                    curtischong.me
                </Link>
                {/* nav items */}
                <ul className="flex flex-col gap-2 py-2">
                    <nav className="top-0 md:sticky md:top-16">
                        {/* nav items */}
                        <ul className="flex flex-col gap-2 py-2">
                            {navLinks.map((navLink, index) => {
                                return (
                                    <>
                                        <Link
                                            key={`navlink-${index}`}
                                            href={navLink.href}
                                            onClick={() => {
                                                setOpen(false);
                                            }}
                                        >
                                            <li
                                                className={classNames({
                                                    "decoration-sleepover-secondary underline-offset-2 hover:underline hover:decoration-wavy":
                                                        true, // underline
                                                    "flex items-center gap-4 ": true, //layout
                                                    "transition-colors duration-300": true, //animation
                                                    "mx-2 rounded-md p-2 text-slate-500": true, //self style
                                                    "font-bold":
                                                        currentPage === navLink.href &&
                                                        !navLink.children, // don't bold if we have children cause the child page would be bold
                                                })}
                                            >
                                                {navLink.icon} {navLink.label}
                                            </li>
                                        </Link>
                                        {navLink.children && (
                                            <div className="ml-8">
                                                {navLink.children.map((childLink, childIdx) => {
                                                    return (
                                                        <Link
                                                            href={childLink.href}
                                                            key={`navlink-${index}-${childIdx}`}
                                                            onClick={() => {
                                                                setOpen(false);
                                                            }}
                                                            className={classNames({
                                                                "decoration-sleepover-secondary underline-offset-2 hover:underline hover:decoration-wavy":
                                                                    true, // underline
                                                                "flex items-center gap-4 ": true, //layout
                                                                "transition-colors duration-300":
                                                                    true, //animation
                                                                "mx-2 rounded-md p-2 text-slate-500":
                                                                    true, //self style
                                                                "font-bold":
                                                                    currentPage === childLink.href,
                                                            })}
                                                        >
                                                            {childLink.label}
                                                        </Link>
                                                    );
                                                })}
                                            </div>
                                        )}
                                    </>
                                );
                            })}
                        </ul>
                    </nav>
                </ul>
            </nav>
        </div>
    );
};
export default Menu;
