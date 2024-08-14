import Link from 'next/link';
import About from './dashboard/about/page';
import Home from './dashboard/home/page';

export default function Index() {
  return (
    <main>
      {/* {flex:彈性容器,min-h-screen:填滿螢幕高度} */}
      <section id="home" className="flex min-h-screen flex-col p-24 bg-[url('/home_background.png')]  bg-cover bg-left lg:bg-center">
        <Home /> {/* 在這裡插入 About 組件 */}
      </section>
      <section id="about" className="flex flex-col items-center justify-start px-10 py-5 bg-gray-100">
        <About /> {/* 在這裡插入 About 組件 */}
      </section>
    </main>
  );
}
