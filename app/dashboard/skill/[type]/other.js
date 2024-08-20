"use client";

import { useEffect } from 'react';
import '../styles.css'; // 确保路径匹配

export default function Other() {
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
        <section className="w-full flex flex-row text-center justify-center items-center md:justify-between flex-wrap gap-4 ">
            <div>
                <p className="font-bold text-3xl pt-[2%] text-black leading-relaxed flex-1">
                    Other 
                </p>
                <p className="text-base md:text-lg pt-[2%] text-black leading-relaxed flex-1">
                    透過 Flask 來建立 API 給他人串接<br/>
                    理解 Post 跟 Get 的差異<br/>
                    在使用他人的 API 方面十分熟悉 <br/> 
                    而爬蟲方面，aka.爬蟲能手<br/><br/>
                    本身不喜歡 Selenium<br/>
                    除非今天爬蟲只能用 JS 的動畫解決
                    
                </p>
            </div>
            <div className="skill-chart text-base text-left md:text-lg  w-[90%] md:w-[50%] justify-center items-center">
                <h5 className="font-bold mb-2">Flask</h5>
                <div className="relative bg-gray-300 h-6 rounded-full overflow-hidden">
                    <div className="progress-bar bg-green-500 h-full text-white flex items-center justify-end pr-2" data-percent="92%">92%</div>
                </div>
                <h5 className="font-bold mt-4 mb-2">API串接</h5>
                <div className="relative bg-gray-300 h-6 rounded-full overflow-hidden">
                    <div className="progress-bar bg-blue-500 h-full text-white flex items-center justify-end pr-2" data-percent="90%">90%</div>
                </div>
                <h5 className="font-bold mt-4 mb-2">爬蟲</h5>
                <div className="relative bg-gray-300 h-6 rounded-full overflow-hidden">
                    <div className="progress-bar bg-red-500 h-full text-white flex items-center justify-end pr-2" data-percent="95%">95%</div>
                </div>
            </div>
        </section>
    );
}
