"use client";

import { useState } from "react";
import FrontEnd from "./front_end";
import BackEnd from "./back_end";
import Other from "./other";
import '@/app/dashboard/skill/styles.css'; // 确保路径匹配

export default function Skill() {
    const [type, setType] = useState('front-end');

    return (
        <section className="max-w-full py-[2%] w-[80%] md:px-[10%] lg:px-[5%] md:py-[3%] flex flex-col">
            <div className="flex flex-col gap-10">
                <div className="flex flex-row gap-1">
                    {type === 'front-end' && <FrontEnd />}
                    {type === 'back-end' && <BackEnd />}
                    {type === 'other' && <Other />}
                </div>
                <div className="flex flex-wrap flex-col md:flex-row gap-2 md:gap-1 items-center md:justify-between md:px-[10%]">
                    <button className="custom-button" onClick={() => setType('front-end')}>FrontEnd</button>
                    <button className="custom-button" onClick={() => setType('back-end')}>BackEnd</button>
                    <button className="custom-button" onClick={() => setType('other')}>Other</button>
                </div>
            </div>
        </section>
    );
}
