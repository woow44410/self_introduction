"use client";
import { Link as ScrollLink } from 'react-scroll'; // 導入 react-scroll 庫的 Link 組件
import React, { useState, useEffect } from "react"; // 導入 React 和相關的 hooks

export default function Contact() {
    const [offset, setOffset] = useState(0); // 設定滾動偏移量的狀態

    // 使用 useEffect 來監聽窗口大小變化
    useEffect(() => {
        const handleResize = () => {
            // 確定當前窗口是否為桌面設備
            const desktop = window.innerWidth >= 768;
            setOffset(desktop ? -80 : -65); // 根據設備設置 offset
        };

        handleResize(); // 初始運行以設置狀態

        // 添加 resize 事件監聽器
        window.addEventListener('resize', handleResize);
        // 清理函數，在組件卸載時移除事件監聽器
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <section className="w-[100%] bg-[#3D3D50] flex flex-col md:flex-row items-center justify-center py-[10px] md:py-[30px]">
            <div className="flex flex-col md:flex-row justify-between items-stretch md:h-[20vh] w-[100%] md:w-[50%] md:border-r-2 md:border-white">
                {/* 左側內容：顯示聯繫資訊 */}
                <div id="left" className="w-full px-12 py-2  flex flex-col justify-evenly md:items-end">
                    {/* 聯繫資訊整體容器 */}
                    <div className="flex flex-col justify-between h-full">
                        {/* Facebook 聯繫資訊 */}
                        <div className="flex items-center justify-start mb-2">
                            <div className="w-[40px] h-[40px] bg-[url('/contact/facebook-icon.png')] bg-contain bg-no-repeat"></div>
                            <span className="ml-3 text-white text-lg">蘇裕凱</span>
                        </div>
                        {/* 電話聯繫資訊 */}
                        <div className="flex items-center justify-start mb-2">
                            <div className="w-[40px] h-[40px] bg-[url('/contact/phone-icon.png')] bg-contain bg-no-repeat"></div>
                            <span className="ml-3 text-white text-lg">0979311550</span>
                        </div>
                        {/* 電子郵件聯繫資訊 */}
                        <div className="flex items-center justify-start">
                            <div className="w-[40px] h-[40px] bg-[url('/contact/mail-icon.png')] bg-contain bg-no-repeat"></div>
                            <span className="ml-3 text-white text-lg">woow44410@gmail.com</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-stretch md:h-[20vh] w-[100%] md:w-[50%]">
                {/* 右側內容：顯示導航連結 */}
                <ul className="w-full px-12 py-2 flex flex-row md:flex-col justify-between"> 
                    <li className="text-lg font-bold text-white">
                        <ScrollLink className="link cursor-pointer" to="home" smooth={true} duration={500} offset={offset}>
                            Home
                        </ScrollLink>
                    </li>
                    <li className="text-lg font-bold text-white">
                        <ScrollLink className="link cursor-pointer" to="about" smooth={true} duration={500} offset={offset}>
                            About
                        </ScrollLink>
                    </li>
                    <li className="text-lg font-bold text-white">
                        <ScrollLink className="link cursor-pointer" to="experience" smooth={true} duration={500} offset={offset}>
                            Experience
                        </ScrollLink>
                    </li>
                    <li className="text-lg font-bold text-white">
                        <ScrollLink className="link cursor-pointer" to="skill" smooth={true} duration={500} offset={offset}>
                            Skill
                        </ScrollLink>
                    </li>
                </ul>
            </div>
        </section>
    );
}
