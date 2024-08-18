export default function Home() {
    return (
        <section className="flex flex-col justify-center md:justify-start pt-[30%] max-w-full h-[300px] md:w-[400pt] md:pt-[5%] md:pl-[10%] ">
            <h2 className="text-6xl font-bold mb-4 text-center md:text-left whitespace-nowrap  text-white   "> {/* 電腦版額外的上下內邊距 */}
                蘇裕凱
                {/* 電腦版顯示的文字，使用 hidden 隱藏在小螢幕上 */}
                <span className="text-2xl font-bold text-white-800 ml-2 hidden lg:inline">資訊工程師</span> 
                {/* 手機版顯示的文字，使用 block 使其在小螢幕上顯示 */}
                <span className="text-2xl font-bold text-white-800 block lg:hidden ml-7">資訊工程師</span>
            </h2>
            <p className="text-2xl font-semibold pt-[7%] md:pl-[1%]  text-white leading-relaxed text-center md:text-left">
                釐清問題並解決問題
                <br/>
                樂於分享知識與技術
                <br/>
                喜歡與他人探討知識盲區
                <br/>
                偏好溝通優良的團隊
            </p>
        </section>
    );
}
