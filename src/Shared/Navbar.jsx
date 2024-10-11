'use client'
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useSpring, animated } from "@react-spring/web";
import Logo from "./Logo";
import { MdOutlineNotifications } from 'react-icons/md';
import useAuth from "@/Hooks/useAuth";
import Dropdown from "@/ui/Dropdown";
import Link from "next/link";
import ButtonPrimary from "@/ui/ButtonPrimary";
import jsCookie from "js-cookie";
import { jwtDecode } from "jwt-decode";

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
                        {subLinks.map(subLink => (
                            <li key={subLink.href}>
                                <Link href={subLink.href} className="text-base inter font-normal hover:bg-[#F9FAFB] rounded-none pl-5">{subLink.label}</Link>
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
            label: 'Home', subLinks: [
                { href: '/dashboard', label: 'Dashboard' },
                isSeller && { href: '/sellerDashboard', label: 'Seller dashboard' },
                isAdmin && { href: '/adminDashboard', label: 'Admin dashboard' },

            ]
        },
        {
            label: 'List', subLinks: [
                { href: '/leadlists', label: 'Make your own list' },
            ]
        },
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
        { href: '/contact', label: 'Contact' }
    ];

    const navEnds = uid ? (
        <>
            <MdOutlineNotifications className="md:text-2xl text-lg" />
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
    const props = useSpring({
        backgroundColor: scrolled ? '#ffffff' : 'rgba(0, 0, 0, 0)',
        boxShadow: scrolled ? '0px 8px 20px rgba(0, 0, 0, 0.2)' : '0px 0px 0px rgba(0, 0, 0, 0)'
    });

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const handleScroll = () => {
                setScrolled(window.scrollY > 50);
            };
            handleScroll(); // Ensure the scroll state is set on load
            window.addEventListener('scroll', handleScroll);

            return () => {
                window.removeEventListener('scroll', handleScroll);
            };
        }
    }, []);

    return (
        <animated.div style={props} className="navbar h-[60px] bg-inherit fixed inset-0 top-0 z-50 justify-between py-10">
            <div className="navbar-start w-fit">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-20 mt-3 p-2 shadow w-[340px] max-h-[60vh]">
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
                                    uid &&
                                    userLinks.map(u => {
                                        const { subLinks } = u;
                                        return (
                                            subLinks.map((s, i) => {
                                                return (
                                                    <li key={i}>
                                                        <Link href={s.href}>{s.label}</Link>
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
        </animated.div>
    );
};

export default Navbar;
