'use client'

import { Download, Mail, MapPin, Calendar } from 'lucide-react'

const About = () => {
  const skills = [
    'Minecraft Building',
    'Texture Design',
    'Redstone Engineering',
    '3D Modeling',
    'Shader Development',
    'Map Design',
    'Server Setup',
    'Plugin Development'
  ]

  const stats = [
    { label: 'Projects Completed', value: '150+' },
    { label: 'Happy Clients', value: '80+' },
    { label: 'Years Experience', value: '5+' },
    { label: 'Downloads', value: '1M+' }
  ]

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold gradient-text mb-6">
            I am Seltop, a Minecraft Graphic Designer
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Seltop - Minecraft Designer"
                className="w-full max-w-md mx-auto rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent rounded-2xl"></div>
            </div>
          </div>

          <div>
            <div className="mb-8">
              <div className="flex items-center gap-2 text-slate-400 mb-4">
                <MapPin size={16} />
                <span>Based in Creative World</span>
              </div>
              <div className="flex items-center gap-2 text-slate-400 mb-6">
                <Calendar size={16} />
                <span>Available for new projects</span>
              </div>
            </div>

            <p className="text-slate-300 text-lg leading-relaxed mb-8">
              I'm a passionate Minecraft graphic designer with over 5 years of experience creating 
              stunning builds, custom textures, and immersive experiences. My work has been featured 
              in popular servers and downloaded by millions of players worldwide.
            </p>

            <p className="text-slate-300 text-lg leading-relaxed mb-8">
              I specialize in bringing creative visions to life through detailed architectural designs, 
              custom resource packs, and innovative redstone contraptions. Every project is an opportunity 
              to push the boundaries of what's possible in Minecraft.
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="bg-slate-800 text-slate-300 px-4 py-2 rounded-full text-sm font-medium border border-slate-700"
                >
                  {skill}
                </span>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="mailto:contact@seltop.com"
                className="flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
              >
                <Mail size={16} />
                Get In Touch
              </a>
              <a
                href="#"
                className="flex items-center justify-center gap-2 border border-slate-600 hover:border-blue-500 text-slate-300 hover:text-blue-400 px-6 py-3 rounded-lg font-semibold transition-all duration-300"
              >
                <Download size={16} />
                Download CV
              </a>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                {stat.value}
              </div>
              <div className="text-slate-400 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About