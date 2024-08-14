export default function About() {
    return (
        <section className="w-full px-[3%] py-[2%]">
            <h2 className="text-3xl font-bold mb-4 pb-[1%]">About me</h2>
            <div className="flex flex-wrap justify-between gap-4"> {/* 使用 gap 添加間隙 */}
                <div className="w-[32%] min-w-[240px] bg-white flex py-[3%] px-[5%]">
                    <div className="flex flex-col items-center justify-start w-full">
                        <div className="flex flex-col items-center w-full">
                            <div className="w-[208px] h-[208px] bg-gray-200 rounded-full my-4 md:w-[240px] md:h-[240px] "></div>
                            <div className="text-center my-4">1</div>
                        </div>
                    </div>
                </div>
                <div className="w-[32%] min-w-[240px] bg-white flex py-[3%] px-[5%]">
                    <div className="flex flex-col items-center justify-start w-full">
                        <div className="flex flex-col items-center justify-center w-full">
                            <div className="w-[208px] h-[208px] bg-gray-200 rounded-full my-4 md:w-[240px] md:h-[240px]"></div>
                            <div className="text-center my-4">2</div>
                        </div>
                    </div>
                </div>
                <div className="w-[32%] min-w-[240px] bg-white flex py-[3%] px-[5%]">
                    <div className="flex flex-col items-center justify-start w-full">
                        <div className="flex flex-col items-center justify-center w-full">
                            <div className="w-[208px] h-[208px] bg-gray-200 rounded-full my-4 md:w-[240px] md:h-[240px]"></div>
                            <div className="text-center my-4">3</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
