import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Portfolio from '@/components/Portfolio'
import Process from '@/components/Process'
import SideProjects from '@/components/SideProjects'
import Testimonials from '@/components/Testimonials'
import About from '@/components/About'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-900">
      <Header />
      <Hero />
      <Portfolio />
      <Process />
      <SideProjects />
      <Testimonials />
      <About />
      <Footer />
    </main>
  )
}