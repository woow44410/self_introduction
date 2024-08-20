"use client";

import { useState } from "react";
import SkillsPage from "./[type]/page"; // 引入 SkillsPage 組件
import './styles.css'; // 確保路徑正確

export default function Skill() {
    const [type, setType] = useState('front-end'); // 用於跟踪選擇的技能類型

    return (
        <section className="max-w-full py-[2%] w-[80%] md:px-[10%] lg:px-[5%] md:py-[3%] flex flex-col">
            <div className="flex flex-col gap-10">
                <div className="flex flex-row gap-1">
                    {/* 傳遞 type 屬性給 SkillsPage 組件 */}
                    <SkillsPage type={type} />
                </div>
                <div className="flex flex-wrap flex-col md:flex-row gap-2 md:gap-1 items-center md:justify-between md:px-[10%]">
                    <button
                        className="custom-button"
                        onClick={() => setType('front-end')} // 設置為 FrontEnd
                    >
                        FrontEnd
                    </button>
                    <button
                        className="custom-button"
                        onClick={() => setType('back-end')} // 設置為 BackEnd
                    >
                        BackEnd
                    </button>
                    <button
                        className="custom-button"
                        onClick={() => setType('other')} // 設置為 Other
                    >
                        Other
                    </button>
                </div>
            </div>
        </section>
    );
}
