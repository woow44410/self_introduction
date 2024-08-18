import Link from 'next/link';
import About from './dashboard/about/page';
import Home from './dashboard/home/page';
import Experience from './dashboard/experience/page';
import Skill from './dashboard/skill/page';
import Contact from './dashboard/contact/page';

export default function Index() {
  return (
    <main className="font-sans bg-gray-100">
      {/* {flex:彈性容器,min-h-screen:填滿螢幕高度} */}
      <section id="home" className="flex min-h-screen flex-col px-8 py-24 bg-[url('/home/home_background.jpg')]  bg-cover bg-left lg:bg-center">
        <Home />
      </section>

      <section id="about" className="flex flex-col items-center justify-start px-10 py-5">
        <About /> 
      </section>
      <hr className="w-[80%] h-[2px] bg-gray-300 border-0 block mx-auto" />
      
      <section id="experience" className="flex flex-col items-center justify-start px-10 py-5">
        <Experience /> 
      </section>
      <hr className="w-[80%] h-[2px] bg-gray-300 border-0 block mx-auto" /> 
      
      <section id="skill" className="flex flex-col items-center justify-start px-10 py-5">
        <Skill /> 
      </section>
      <hr className="w-[80%] h-[2px] bg-gray-300 border-0 block mx-auto" />
      
      <section id="contact" className="flex flex-col items-center justify-start  ">
        <Contact />
      </section>
      
    </main>
  );
}
