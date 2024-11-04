'use client'
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
import useAuth from "@/Hooks/useAuth";
import Dropdown from "@/ui/Dropdown";
import Link from "next/link";
import ButtonPrimary from "@/ui/ButtonPrimary";
import jsCookie from "js-cookie";
import { jwtDecode } from "jwt-decode";
import Notification from "@/ui/Notification";
import NavComponent from "@/ui/NavComponent";
import { useScroll } from "framer-motion";
import { motion } from "framer-motion";

const Navbar = () => {
    // TO_DO : Toggle Ul in mobile device and active route
    // User Info
    const { user, logOut } = useAuth();
    const uid = user?.uid;
    const pathName = usePathname();
    const userName = user?.displayName;
    const firstLetter = user?.displayName[0];
    const cookies = jsCookie.get('userToken');
    const [decoded, setDecode] = useState({})
    useEffect(() => {
        if (cookies) {
            const decoded = jwtDecode(cookies);
            setDecode(decoded)
        }
    }, [cookies])
    const { isSeller, isAdmin } = decoded;

    // Logout function
    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => {
                console.log(error);
            });
    };

    // Render hover links
    const renderLinks = (links) => {
        return links.map(({ href, label, subLinks, i }) => (
            <li key={i} className={subLinks ? "dropdown dropdown-hover" : ""}>
                <Link href={href || ''} className={`text-sm gap-0 ${pathName.startsWith(href) ? 'font-bold' : 'font-normal'}`}>
                    <span>{label}</span>
                    {subLinks && <Dropdown color={"#6E7C87"} />}
                </Link>
                {subLinks && (
                    <ul className="dropdown-content menu bg-white border z-[1] px-0 py-2 rounded-lg w-80">
                        {subLinks?.map(subLink => (
                            <li key={subLink?.href}>
                                <Link href={subLink?.href} className="text-base inter font-normal hover:bg-[#F9FAFB] rounded-none pl-5">{subLink?.label}</Link>
                            </li>
                        ))}
                    </ul>
                )}
            </li>
        ));
    };

    const commonLinks = [
        { href: '/about', label: 'About' },
    ];


    const userLinks = [
        {
            label: 'Dashboard',
            ...(isAdmin || isSeller ? {} : { href: "/dashboard" }), // Include href only for non-admin/seller users
            ...(isAdmin || isSeller ? {
                subLinks: [
                    { href: '/dashboard', label: 'Dashboard' },
                    ...(isSeller ? [{ href: '/sellerDashboard', label: 'Seller dashboard' }] : []),
                    ...(isAdmin ? [{ href: '/adminDashboard', label: 'Admin dashboard' }] : []),
                ]
            } : {}),
        }
        ,
        {
            label: 'Resources', subLinks: [
                { href: '/blogs', label: 'Blog' },
                { href: '/free-lists', label: 'Free Lists' },
                { href: '/pay-rate-checker', label: 'Pay Rate Checker' },
                { href: '/cleaning-calculators', label: 'Cleaning Calculators' },
                { href: '/help', label: 'Help' }
            ]
        },
        {
            label: 'Company Information', subLinks: [
                { href: '/profile', label: 'Profile' },
                { href: '/messages', label: 'Messages' },
                { href: '/my-subscription', label: 'My Subscription' },
                { href: '/contact', label: 'Contact' }
            ]
        },
        {
            label: 'Services', subLinks: [
                { href: '/search/exclusive-leads', label: 'Exclusive Leads' },
                { href: '/search/layUps', label: 'LayUps (Warm leads)' },
                { href: '/search/opportunities', label: 'Opportunities' },
                { href: '/single-decision-maker', label: 'Single Decision Maker' },
                { href: '/decision-makers', label: 'Decision Makers' },
                { href: '/other-services', label: 'Other Services' }
            ]
        }
    ];

    const guestLinks = [
        { href: '/blogs', label: 'Blogs' },
        { href: '/contact', label: 'Contact' },
        { href: '/leads', label: 'Leads' }
    ];

    const navEnds = uid ? (
        <>
            {/* <MdOutlineNotifications className="md:text-2xl text-lg" /> */}
            <Notification />
            <div className="flex items-center gap-2">
                <div className="md:w-[32px] relative md:h-[32px] w-[20px] h-[20px] rounded-full bg-primary text-white">
                    <span className="absolute top-1/2 right-1/2 transform -translate-y-1/2 translate-x-1/2 md:text-base text-xs font-normal">{firstLetter}</span>
                </div>
                <div className="dropdown dropdown-hover">
                    <h4 tabIndex={0} role="button" className="md:text-sm text-[8px] inter font-semibold w-fit">{userName?.length < 20 ? userName : userName?.slice(0, 16)}...</h4>
                    <ul tabIndex={0} className="dropdown-content menu bg-white border z-[1] md:w-52 w-40 -right-[20%] px-0 py-2 rounded-lg">
                        <li>
                            <button onClick={handleLogOut} className="text-base border-none shadow-none inter font-normal hover:bg-[#F9FAFB] rounded-none w-full">
                                Logout
                            </button>
                        </li>
                    </ul>
                </div>
                <Dropdown color={'black'} />
            </div>
        </>
    ) : (
        <>
            <Link href={'/login'}><button className="font-semibold text-xs md:text-base">Sign In</button></Link>
            <ButtonPrimary label={'Get Started Free'} href={'/register'} />
        </>
    );

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        let lastScrollTop = 0;
        const handleScroll = () => {
            const currentScrollTop = window.scrollY;
            setScrolled(currentScrollTop < lastScrollTop && currentScrollTop > 80);
            lastScrollTop = currentScrollTop;
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);



    return (
        <div className="">
            <NavComponent />
            <div className={`navbar h-[80px] bg-inherit bg-white absolute top-[48px] z-50 justify-between py-10`}>
                <div className="navbar-start w-fit items-center">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <div>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 z-50 p-2 shadow w-[340px] max-h-[60vh]">
                                <>
                                    {
                                        commonLinks.map(c => {
                                            return (
                                                <li key={c}>
                                                    <Link href={c.href}>{c.label}</Link>
                                                </li>
                                            )
                                        })
                                    }
                                    {
                                        user &&
                                        userLinks?.map(u => {
                                            const { subLinks } = u;
                                            return (
                                                subLinks?.map((s, i) => {
                                                    return (
                                                        <li key={i}>
                                                            <Link href={s?.href}>{s?.label}</Link>
                                                        </li>
                                                    )
                                                })
                                            )
                                        })
                                    }
                                    {
                                        guestLinks.map(g => {
                                            return (
                                                <li key={g}>
                                                    <Link href={g.href}>{g.label}</Link>
                                                </li>
                                            )
                                        })
                                    }
                                </>
                            </ul>
                        </div>
                    </div>
                    <Logo />
                    <div className="hidden lg:flex 2xl:ml-12 ml-6">
                        <ul className="menu menu-horizontal px-1 text-lg text-[#252C32] inter">
                            {renderLinks(commonLinks)}
                            {uid ? renderLinks(userLinks) : renderLinks(guestLinks)}
                        </ul>
                    </div>
                </div>
                <div className="navbar-end lg:flex md:gap-6 gap-2 w-fit">
                    {navEnds}
                </div>
            </div>
            <motion.div
                initial={{ top: -96 }}
                animate={{ top: scrolled ? 0 : -96 }}
                transition={{ duration: 0.4, ease: "easeInOut", delay: 0.01 }}
                className={`navbar h-[80px] bg-white shadow-xl fixed w-full z-50 justify-between py-10`}
            >
                <div className="navbar-start w-fit items-center">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <div>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-40 mt-3 p-2 shadow w-[340px] max-h-[60vh]">
                                <>
                                    {
                                        commonLinks.map(c => {
                                            return (
                                                <li key={c}>
                                                    <Link href={c.href}>{c.label}</Link>
                                                </li>
                                            )
                                        })
                                    }
                                    {
                                        user &&
                                        userLinks?.map(u => {
                                            const { subLinks } = u;
                                            return (
                                                subLinks?.map((s, i) => {
                                                    return (
                                                        <li key={i}>
                                                            <Link href={s?.href}>{s?.label}</Link>
                                                        </li>
                                                    )
                                                })
                                            )
                                        })
                                    }
                                    {
                                        guestLinks.map(g => {
                                            return (
                                                <li key={g}>
                                                    <Link href={g.href}>{g.label}</Link>
                                                </li>
                                            )
                                        })
                                    }
                                </>
                            </ul>
                        </div>
                    </div>
                    <Logo />
                    <div className="hidden lg:flex 2xl:ml-12 ml-6">
                        <ul className="menu menu-horizontal px-1 text-lg text-[#252C32] inter">
                            {renderLinks(commonLinks)}
                            {uid ? renderLinks(userLinks) : renderLinks(guestLinks)}
                        </ul>
                    </div>
                </div>
                <div className="navbar-end lg:flex md:gap-6 gap-2 w-fit">
                    {navEnds}
                </div>
            </motion.div>
        </div>
    );
};

export default Navbar;
