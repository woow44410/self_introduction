import React, { Suspense } from 'react';

const About = React.lazy(() => import('./dashboard/about/page'));
const Home = React.lazy(() => import('./dashboard/home/page'));
const Experience = React.lazy(() => import('./dashboard/experience/page'));
const Skill = React.lazy(() => import('./dashboard/skill/page'));
const Contact = React.lazy(() => import('./dashboard/contact/page'));

export default function Index() {
  return (
    <main className="font-sans bg-gray-100">
      <Suspense fallback={<div>Loading Home...</div>}>
        <section id="home" className="flex min-h-screen flex-col px-8 py-24 bg-[url('/home/home_background.jpg')] bg-cover bg-left lg:bg-center">
          <Home />
        </section>
      </Suspense>

      <Suspense fallback={<div>Loading About...</div>}>
        <section id="about" className="flex flex-col items-center justify-start py-5">
          <About />
        </section>
      </Suspense>
      <hr className="w-[80%] h-[2px] bg-gray-300 border-0 block mx-auto" />

      <Suspense fallback={<div>Loading Experience...</div>}>
        <section id="experience" className="flex flex-col items-center justify-start py-5">
          <Experience />
        </section>
      </Suspense>
      <hr className="w-[80%] h-[2px] bg-gray-300 border-0 block mx-auto" />

      <Suspense fallback={<div>Loading Skill...</div>}>
        <section id="skill" className="flex flex-col items-center justify-start py-5">
          <Skill />
        </section>
      </Suspense>
      <hr className="w-[80%] h-[2px] bg-gray-300 border-0 block mx-auto" />

      <Suspense fallback={<div>Loading Contact...</div>}>
        <section id="contact" className="flex flex-col items-center justify-start">
          <Contact />
        </section>
      </Suspense>
    </main>
  );
}
