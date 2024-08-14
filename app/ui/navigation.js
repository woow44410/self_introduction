"use client";

import { Link as ScrollLink } from 'react-scroll';
import React, { useState, useEffect } from "react";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isDesktop, setIsDesktop] = useState(true);
    const [scrolling, setScrolling] = useState(0);
    const [offset, setOffset] = useState(0);

    const textColorClass = scrolling > 0 ? 'text-white' : 'text-black';

    useEffect(() => {
        const handleResize = () => {
            const desktop = window.innerWidth >= 768;
            setIsDesktop(desktop);
            if (desktop) {
                setMenuOpen(false);
                setOffset(-80);
            } else {
                setOffset(-65);
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
        setMenuOpen(prevState => !prevState);
    };

    return (
        <nav className={`fixed top-0 left-0 right-0 z-10 py-3 transition-opacity duration-300`} 
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
                <ul className={`flex transition-all duration-300 ${menuOpen && !isDesktop ? 'absolute top-3 left-0 right-0 flex-col bg-gray-500 bg-opacity-80 z-10 items-end' : 'flex-row justify-end pr-10'} ${menuOpen || isDesktop ? 'block' : 'hidden'}`}>
                    <li className={`m-4 text-lg pr-2 text-right ${isDesktop ? textColorClass : 'text-white'}`}>
                        <ScrollLink className={`link cursor-pointer`} to="home" smooth={true} duration={500} offset={offset} activeClass='text-red-600' spy={true}>
                            Home
                        </ScrollLink>
                    </li>
                    <li className={`m-4 text-lg pr-2 text-right ${isDesktop ? textColorClass : 'text-white'}`}>
                        <ScrollLink className={`link cursor-pointer`} to="about" smooth={true} duration={500} offset={offset} activeClass="text-red-600" spy={true} >
                            About
                        </ScrollLink>
                    </li>
                    <li className={`m-4 text-lg pr-2 text-right ${isDesktop ? textColorClass : 'text-white'}`}>
                        <ScrollLink className={`link cursor-pointer`} to="experience" smooth={true} duration={500} offset={offset} activeClass="text-red-600" spy={true}>
                            Experience
                        </ScrollLink>
                    </li>
                    <li className={`m-4 text-lg pr-2 text-right ${isDesktop ? textColorClass : 'text-white'}`}>
                        <ScrollLink className={`link cursor-pointer`} to="skill" smooth={true} duration={500} offset={offset} activeClass="text-red-600" spy={true}>
                            Skill
                        </ScrollLink>
                    </li>
                    <li className={`m-4 text-lg pr-2 text-right ${isDesktop ? textColorClass : 'text-white'}`}>
                        <ScrollLink className={`link cursor-pointer`} to="contact" smooth={true} duration={500} offset={offset} activeClass="text-red-600" spy={true}>
                            Contact
                        </ScrollLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
