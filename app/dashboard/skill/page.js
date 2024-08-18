export default function Skill() {
    return (
        <section className="max-w-full px-[3%] py-[2%] md:w-[80%]  md:px-[0%] md:py-[9%]  ">
            <div className="flex flex-wrap justify-start gap-10 md:gap-36 px-[0%] md:px-[5%]"> {/* 使用 gap 添加間隙 */}
                <div className="flex justify-center w-full  md:w-[30%] ">
                    <div className="w-[208px] h-[208px] md:w-[345px] md:h-[345px] aspect-square bg-gray-200 rounded-full bg-[url('/about/big_pin.jpg')] bg-cover"></div>
                </div>                
                <div className="w-full min-w-[320px] flex flex-col px-[2%] text-black text-center md:w-[48%] md:text-left">
                    <h2 className="text-4xl  font-bold "> About me </h2>
                    <p className="text-base md:text-lg  pt-[2%] text-black leading-relaxed">
                        畢業於國立高雄科技大學的資訊管理系 <br/>
                        在學期間自學後端架設相關知識 <br/>
                        同時習慣與他人互相合作共同開發專案 <br/>
                        於大三時製作專題並且榮幸通過國科會的「大專生研究計畫」 <br/><br/><br/>
                        本身喜歡研究程式底層原理，以及實作除了程式以外的東西 <br/>
                    </p>
                    <p className="text-base md:text-lg text-black leading-relaxed text-left">
                        1. MultiThreading vs. MultiProcessing <br/>
                        2. 為何LinearRegression不支援增量學習？ <br/>
                        3. Pandas的向量化操作 <br/>
                        4. 如何有效地降低時間複雜度？ <br/>
                        5. 電信合約該選擇續約還是攜碼？ <br/>
                        6. 冷氣的運作原理 <br/>
                        7. 為什麼不該住在大樓的低樓層？<br/>
                    </p>
                </div>
            </div>
        </section>
    );
}
