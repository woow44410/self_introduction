export default function Experience() {
    return (
        <section className="max-w-full py-[2%] w-[80%] md:py-[3%]">
            <h2 className="text-3xl font-bold mb-4 pb-[1%] text-black text-center">Experience</h2>
            <div className="flex flex-wrap justify-center md:justify-between gap-4"> 
                <div className="flex-grow min-w-[330px] basis-[30%] bg-white flex px-[5px] pb-[30px] shadow-lg">
                    <div className="flex flex-col items-center justify-start w-full">
                        <div className="flex flex-col items-center text-center w-full pt-[28px]">
                            <div className="w-[130px] h-[85px] bg-[url('/experience/nstc-icon.png')] bg-contain bg-no-repeat bg-center "></div>
                            <h2 className="text-3xl font-bold text-black">國科會大專生計畫</h2>
                            <p className="text-base md:text-lg pt-[2%] text-black leading-relaxed">
                                於大三時開始進行專題與大專生計畫，名稱為 <br/>
                                「基於農委會Open API與Line Message API <br/>
                                之智慧食價食譜Line聊天機器人的開發」<br/><br/>
                                其中我負責的是工作分配、資料庫撰寫、 <br/>
                                API撰寫、Line Message API、LIFF設定 <br/>
                                架設後端伺服器、爬蟲 <br/>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex-grow min-w-[330px] basis-[30%] bg-white flex px-[5px] pb-[30px] shadow-lg">
                    <div className="flex flex-col items-center justify-start w-full">
                        <div className="flex flex-col items-center text-center w-full pt-[28px]">
                            <div className="w-[130px] h-[85px] bg-[url('/experience/coorperation-icon.png')] bg-contain bg-no-repeat bg-center"></div>
                            <h2 className="text-3xl font-bold text-black">與它人長期合作的經歷</h2>
                            <p className="text-base md:text-lg pt-[2%] text-black leading-relaxed">
                                我和我的同學們是四人一組，各司其職 <br/>
                                其中我和另一位同學負責「後端工程」 <br/>
                                一位負責「前端工程」 <br/>
                                一位負責「前端設計」 <br/><br/>
                                在合作的這段期間我學到如何和他人溝通 <br/>
                                以及透過有效率溝通來解決問題 <br/>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex-grow min-w-[330px] basis-[30%] bg-white flex px-[5px] pb-[30px] shadow-lg">
                    <div className="flex flex-col items-center justify-start w-full">
                        <div className="flex flex-col items-center text-center w-full pt-[28px]">
                            <div className="w-[130px] h-[85px] bg-[url('/experience/study-icon.png')] bg-contain bg-no-repeat bg-center"></div>
                            <h2 className="text-3xl font-bold text-black">目前狀況</h2>
                            <p className="text-base md:text-lg pt-[2%] text-black leading-relaxed">
                                目前正在逢甲大學內任職 <br/><br/>
                                在 Coding 時會思考時間複雜度的問題 <br/>
                                向量化的操作可以將 O(n) 變成 O(log(n)) <br/>
                                理解 Clean Code 的重要性並實作 <br/><br/>
                                時常與他人技術交流 <br/>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
