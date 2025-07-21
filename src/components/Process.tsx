'use client'

import { Lightbulb, Palette, Code, Rocket } from 'lucide-react'

const Process = () => {
  const processSteps = [
    {
      icon: <Lightbulb className="text-yellow-400" size={32} />,
      title: 'Concept',
      description: 'Understanding your vision and brainstorming creative solutions that align with your goals.',
      color: 'from-yellow-500/20 to-orange-500/20'
    },
    {
      icon: <Palette className="text-purple-400" size={32} />,
      title: 'Design',
      description: 'Creating detailed designs and mockups to visualize the final product before development.',
      color: 'from-purple-500/20 to-pink-500/20'
    },
    {
      icon: <Code className="text-blue-400" size={32} />,
      title: 'Build',
      description: 'Bringing designs to life with meticulous attention to detail and custom implementations.',
      color: 'from-blue-500/20 to-cyan-500/20'
    },
    {
      icon: <Rocket className="text-green-400" size={32} />,
      title: 'Launch',
      description: 'Final testing, optimization, and delivery of your completed Minecraft project.',
      color: 'from-green-500/20 to-emerald-500/20'
    }
  ]

  return (
    <section id="process" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold gradient-text mb-6">
            What My Process Looks Like
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            A streamlined approach to creating exceptional Minecraft experiences from concept to completion.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step, index) => (
            <div
              key={index}
              className="relative group"
            >
              <div className={`bg-gradient-to-br ${step.color} p-8 rounded-xl card-hover border border-slate-700/50`}>
                <div className="mb-6 flex justify-center">
                  <div className="p-4 bg-slate-900/50 rounded-full">
                    {step.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 text-center">
                  {step.title}
                </h3>
                <p className="text-slate-300 text-center leading-relaxed">
                  {step.description}
                </p>
              </div>
              
              {/* Connection line */}
              {index < processSteps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transform -translate-y-1/2 z-10">
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-purple-500 rounded-full"></div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 bg-slate-800 px-6 py-3 rounded-full border border-slate-700">
            <div className="flex gap-1">
              {['Ps', 'Ps', 'Ps', 'Ps', 'Ps', 'Ps', 'Ps', 'Ps'].map((tool, index) => (
                <span
                  key={index}
                  className="bg-blue-600 text-white text-xs px-2 py-1 rounded font-semibold"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
          <p className="text-slate-400 mt-4">
            Powered by industry-standard tools and creative expertise
          </p>
        </div>
      </div>
    </section>
  )
}

export default Process