"use client";

import { useEffect } from 'react';
import '../styles.css'; // 确保路径匹配

export default function FrontEnd() {
    useEffect(() => {
        // 查找所有的 progress-bar 元素
        const progressBars = document.querySelectorAll('.progress-bar');
        
        // 找到progress-bar每一个元素中的data-percent
        progressBars.forEach(bar => {
            // 獲得 data-percent 屬性的值
            const percent = bar.getAttribute('data-percent');
            // 設置 CSS 變數
            bar.style.setProperty('--data-percent', percent);
        });
    }, []);

    return (
        <section className="w-full flex flex-row text-center justify-center items-center md:justify-between flex-wrap gap-4">
            <div>
                <p className="font-bold text-3xl pt-[2%] text-black leading-relaxed flex-1">
                    FRONT-END 
                </p>
                <p className="text-base md:text-lg pt-[2%] text-black leading-relaxed flex-1">
                    第一次接觸到網頁是在大學的期末報告中<br/>
                    是使用Django搭配簡易的前端三劍客<br/>
                    並且套上別人寫好的網頁模板 <br/>
                    所以對網頁的切版、動畫等並不是很熟悉 <br/><br/>
                    目前正在自學 Next.js 框架 <br/>
                    以及 Tailwind CSS 與怎麼切版
                </p>
            </div>
            <div className="text-base text-left md:text-lg skill-chart text-left w-[90%] md:w-[50%]">
                <h5 className="font-bold mb-2">HTML/CSS/RWD</h5>
                <div className="relative bg-gray-300 h-6 rounded-full overflow-hidden">
                    <div className="progress-bar bg-green-500 h-full text-white flex items-center justify-end pr-2" data-percent="70%">70%</div>
                </div>
                <h5 className="font-bold mt-4 mb-2">Tailwind CSS</h5>
                <div className="relative bg-gray-300 h-6 rounded-full overflow-hidden">
                    <div className="progress-bar bg-blue-500 h-full text-white flex items-center justify-end pr-2" data-percent="80%">80%</div>
                </div>
                <h5 className="font-bold mt-4 mb-2">Next.js</h5>
                <div className="relative bg-gray-300 h-6 rounded-full overflow-hidden">
                    <div className="progress-bar bg-red-500 h-full text-white flex items-center justify-end pr-2" data-percent="65%">65%</div>
                </div>
            </div>
        </section>
    );
}
