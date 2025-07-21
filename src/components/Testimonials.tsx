'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      id: 1,
      name: 'Alex Johnson',
      role: 'Server Owner',
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150',
      content: 'Seltop created an incredible spawn area for our server. The attention to detail and creative vision exceeded all our expectations. Our player count increased by 40% after the launch!',
      rating: 5,
      project: 'Fantasy Server Spawn'
    },
    {
      id: 2,
      name: 'Sarah Chen',
      role: 'Content Creator',
      avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150',
      content: 'The custom texture pack Seltop designed for my YouTube series was absolutely perfect. It gave my content a unique look that my viewers absolutely love. Professional and creative!',
      rating: 5,
      project: 'Custom Texture Pack'
    },
    {
      id: 3,
      name: 'Mike Rodriguez',
      role: 'Game Developer',
      avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=150',
      content: 'Working with Seltop on our adventure map was a fantastic experience. The builds were not only beautiful but also perfectly optimized for gameplay. Highly recommended!',
      rating: 5,
      project: 'Adventure Map Design'
    }
  ]

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const current = testimonials[currentTestimonial]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold gradient-text mb-6">
            My Clients' Voice
          </h2>
          <p className="text-slate-400 text-lg">
            What people say about working with me
          </p>
        </div>

        <div className="relative">
          <div className="bg-slate-800 rounded-2xl p-8 md:p-12 border border-slate-700/50">
            <div className="flex items-center justify-center mb-6">
              <div className="flex gap-1">
                {[...Array(current.rating)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-current" size={20} />
                ))}
              </div>
            </div>
            
            <blockquote className="text-slate-200 text-lg md:text-xl leading-relaxed text-center mb-8">
              "{current.content}"
            </blockquote>
            
            <div className="flex items-center justify-center gap-4">
              <img
                src={current.avatar}
                alt={current.name}
                className="w-16 h-16 rounded-full object-cover border-2 border-blue-500"
              />
              <div className="text-center">
                <h4 className="text-white font-semibold text-lg">
                  {current.name}
                </h4>
                <p className="text-slate-400">
                  {current.role}
                </p>
                <p className="text-blue-400 text-sm font-medium">
                  {current.project}
                </p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="bg-slate-700 hover:bg-slate-600 text-white p-3 rounded-full transition-colors duration-300"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={nextTestimonial}
              className="bg-slate-700 hover:bg-slate-600 text-white p-3 rounded-full transition-colors duration-300"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  index === currentTestimonial ? 'bg-blue-500' : 'bg-slate-600'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials