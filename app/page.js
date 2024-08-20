import dynamic from 'next/dynamic';

// 動態導入組件，關閉服務器端渲染
const About = dynamic(() => import('./dashboard/about/page'), { ssr: false });
const Home = dynamic(() => import('./dashboard/home/page'), { ssr: false });
const Experience = dynamic(() => import('./dashboard/experience/page'), { ssr: false });
const Skill = dynamic(() => import('./dashboard/skill/page'), { ssr: false });
const Contact = dynamic(() => import('./dashboard/contact/page'), { ssr: false });

export default function Index() {
  return (
    <main className="font-sans bg-gray-100">
      <section id="home" className="flex min-h-screen flex-col px-8 py-24 bg-[url('/home/home_background.jpg')] bg-cover bg-left lg:bg-center">
        <Home />
      </section>

      <section id="about" className="flex flex-col items-center justify-start py-5">
        <About />
      </section>
      <hr className="w-[80%] h-[2px] bg-gray-300 border-0 block mx-auto" />
      
      <section id="experience" className="flex flex-col items-center justify-start py-5">
        <Experience />
      </section>
      <hr className="w-[80%] h-[2px] bg-gray-300 border-0 block mx-auto" /> 
      
      <section id="skill" className="flex flex-col items-center justify-start py-5">
        <Skill />
      </section>
      <hr className="w-[80%] h-[2px] bg-gray-300 border-0 block mx-auto" />
      
      <section id="contact" className="flex flex-col items-center justify-start">
        <Contact />
      </section>
    </main>
  );
}
