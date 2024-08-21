"use client";

import { useEffect } from 'react';
import '../styles.css'; // 确保路径匹配

export default function BackEnd() {
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
                    BACK-END 
                </p>
                <p className="text-base md:text-lg pt-[2%] text-black leading-relaxed flex-1">
                    自學架設伺服器的相關知識<br/>
                    與同學互相討論網路的架構概念<br/>
                    也因此會設定DHCP、DDNS、Port Fowarding <br/><br/>
                    對於 SQL 除了 CRUD 還會 Stored Procedure <br/>
                    後端的框架目前比較熟悉的是 Flask <br/>
                    Django 與 ASP.NET Core MVC 略懂
                </p>
            </div>
            <div className="text-base text-left md:text-lg skill-chart text-left w-[90%] md:w-[50%]">
                <h5 className="font-bold mb-2">Flask</h5>
                <div className="relative bg-gray-300 h-6 rounded-full overflow-hidden">
                    <div className="progress-bar bg-green-500 h-full text-white flex items-center justify-end pr-2" data-percent="90%">90%</div>
                </div>
                <h5 className="font-bold mt-4 mb-2">Django</h5>
                <div className="relative bg-gray-300 h-6 rounded-full overflow-hidden">
                    <div className="progress-bar bg-blue-500 h-full text-white flex items-center justify-end pr-2" data-percent="60%">60%</div>
                </div>
                <h5 className="font-bold mt-4 mb-2">SQL Server</h5>
                <div className="relative bg-gray-300 h-6 rounded-full overflow-hidden">
                    <div className="progress-bar bg-red-500 h-full text-white flex items-center justify-end pr-2" data-percent="90%">90%</div>
                </div>
            </div>
        </section>
    );
}
