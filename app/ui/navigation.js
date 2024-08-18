"use client";

import { Link as ScrollLink } from 'react-scroll';
import React, { useState, useEffect } from "react";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isDesktop, setIsDesktop] = useState(true);
    const [scrolling, setScrolling] = useState(0);
    const [offset, setOffset] = useState(0); // 新增一個 offset state
    const [showMenuItems, setShowMenuItems] = useState(false); // 讓menu顯不顯示

    // const textColorClass = scrolling > 0 ? 'text-white' : 'text-white';
    const textColorClass = 'text-white';
    useEffect(() => {
        const handleResize = () => {
            const desktop = window.innerWidth >= 768;
            setIsDesktop(desktop);
            if (desktop) {
                setMenuOpen(false);
                setOffset(-80); // 桌面版的 offset
            } else {
                setOffset(-65); // 手機版的 offset
            }
        };

        handleResize();

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const newOpacity = Math.min(1, scrollY / 300);
            setScrolling(newOpacity);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [offset]);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
        setShowMenuItems(!showMenuItems); // 切换菜單項的顯示
    };

    return (
        <nav className={`fixed top-0 left-0 right-0 z-10 py-3 max-w-[100vw] `}
            style={{
                backgroundColor: menuOpen || !isDesktop
                    ? 'black'
                    : `rgba(20, 23, 30, ${scrolling})`
            }}>
            <ul className="flex justify-end list-none m-0 p-0 pr-2 flex-wrap">
                <button
                    className={`m-2 text-lg border-none cursor-pointer ${isDesktop ? 'hidden' : 'block'} text-white `}
                    onClick={toggleMenu}
                >
                    &#9776;
                </button>
            </ul>

            <div className="relative">
                <ul
                    className={`transition-all duration-4000 ease-linear flex 
                        ${menuOpen && !isDesktop ? 'absolute top-3 left-0 right-0 flex-col bg-gray-500 bg-opacity-90 z-10 max-h-80 opacity-100' : ''}
                        ${isDesktop ? 'flex-row justify-end pr-10':''}
                        ${!menuOpen && !isDesktop ? 'max-h-0 opacity-0' : ''}
                        overflow-hidden  
                        max-w-[100vw]`}
                >
                    {(showMenuItems || isDesktop) && ( // 僅在 showMenuItems 為 true 且 isDesktop 為 false 時渲染菜單項
                        <>
                            <li className={`m-4 text-lg font-bold pr-2 text-right ${isDesktop ? textColorClass : 'text-white'}`}>
                                {/* <ScrollLink className={`link cursor-pointer`} to="home" smooth={true} duration={500} offset={offset} activeClass='text-red-600' spy={true}> */}
                                <ScrollLink className={`link cursor-pointer`} to="home" smooth={true} duration={500} offset={offset} >
                                    Home
                                </ScrollLink>
                            </li>
                            <li className={`m-4 text-lg pr-2 font-bold text-right ${isDesktop ? textColorClass : 'text-white'}`}>
                                <ScrollLink className={`link cursor-pointer`} to="about" smooth={true} duration={500} offset={offset} >
                                    About
                                </ScrollLink>
                            </li>
                            <li className={`m-4 text-lg pr-2 font-bold text-right ${isDesktop ? textColorClass : 'text-white'}`}>
                                <ScrollLink className={`link cursor-pointer`} to="experience" smooth={true} duration={500} offset={offset} >
                                    Experience
                                </ScrollLink>
                            </li>
                            <li className={`m-4 text-lg pr-2 font-bold text-right ${isDesktop ? textColorClass : 'text-white'}`}>
                                <ScrollLink className={`link cursor-pointer`} to="skill" smooth={true} duration={500} offset={offset} >
                                    Skill
                                </ScrollLink>
                            </li>
                            <li className={`m-4 text-lg pr-2 font-bold text-right ${isDesktop ? textColorClass : 'text-white'}`}>
                                <ScrollLink className={`link cursor-pointer`} to="contact" smooth={true} duration={500} offset={offset} >
                                    Contact
                                </ScrollLink>
                            </li>
                        </>
                    )}
                </ul>
            </div>
        </nav>
    );
}
