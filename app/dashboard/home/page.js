export default function Home() {
    return (
        <section className="flex justify-center md:justify-start w-full h-[300px]">
            <h2 className="text-6xl font-bold mb-4 pb-[1%] whitespace-nowrap pt-28 md:pt-[5%]"> {/* 電腦版額外的上下內邊距 */}
                蘇裕凱
                {/* 電腦版顯示的文字，使用 hidden 隱藏在小螢幕上 */}
                <span className="text-2xl font-bold text-gray-800 ml-2 hidden lg:inline">資訊工程師</span> 
                {/* 手機版顯示的文字，使用 block 使其在小螢幕上顯示 */}
                <span className="text-2xl font-bold text-gray-800 block lg:hidden ml-7">資訊工程師</span>
            </h2>
        </section>
    );
}
