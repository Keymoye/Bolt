'use client'

import { ExternalLink, Github } from 'lucide-react'

const SideProjects = () => {
  const projects = [
    {
      id: 1,
      title: 'Minecraft Shader Pack',
      description: 'Custom shader pack with realistic lighting and water effects',
      image: 'https://images.pexels.com/photos/1029641/pexels-photo-1029641.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['Shaders', 'Graphics', 'OpenGL'],
      links: {
        demo: '#',
        github: '#'
      }
    },
    {
      id: 2,
      title: 'Build Showcase Tool',
      description: 'Web application for showcasing Minecraft builds with 3D previews',
      image: 'https://images.pexels.com/photos/1029624/pexels-photo-1029624.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['React', 'Three.js', 'WebGL'],
      links: {
        demo: '#',
        github: '#'
      }
    }
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold gradient-text mb-6">
            My Side Projects
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Exploring new technologies and pushing the boundaries of what's possible in Minecraft.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-slate-800 rounded-xl overflow-hidden card-hover border border-slate-700/50"
            >
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-semibold text-white mb-4">
                  {project.title}
                </h3>
                <p className="text-slate-300 mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <a
                    href={project.links.demo}
                    className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-300"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                  <a
                    href={project.links.github}
                    className="flex items-center gap-2 border border-slate-600 hover:border-blue-500 text-slate-300 hover:text-blue-400 px-4 py-2 rounded-lg font-semibold transition-all duration-300"
                  >
                    <Github size={16} />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SideProjects