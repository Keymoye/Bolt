'use client'

import { useState } from 'react'
import { ExternalLink, Eye } from 'lucide-react'

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const portfolioItems = [
    {
      id: 1,
      title: 'Medieval Castle Build',
      category: 'builds',
      image: 'https://images.pexels.com/photos/161154/castle-hohenzollern-baden-wurttemberg-germany-161154.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Epic medieval castle with detailed interiors and custom textures'
    },
    {
      id: 2,
      title: 'Futuristic City',
      category: 'builds',
      image: 'https://images.pexels.com/photos/936722/pexels-photo-936722.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Modern cityscape with advanced redstone mechanisms'
    },
    {
      id: 3,
      title: 'Custom Texture Pack',
      category: 'textures',
      image: 'https://images.pexels.com/photos/1029604/pexels-photo-1029604.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'High-resolution texture pack with realistic materials'
    },
    {
      id: 4,
      title: 'Adventure Map',
      category: 'maps',
      image: 'https://images.pexels.com/photos/1029624/pexels-photo-1029624.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Custom adventure map with puzzles and storyline'
    },
    {
      id: 5,
      title: 'Underwater Temple',
      category: 'builds',
      image: 'https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Mystical underwater temple with custom lighting'
    },
    {
      id: 6,
      title: 'Resource Pack',
      category: 'textures',
      image: 'https://images.pexels.com/photos/1029641/pexels-photo-1029641.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Complete resource pack with UI improvements'
    }
  ]

  const categories = [
    { id: 'all', name: 'All Work' },
    { id: 'builds', name: 'Builds' },
    { id: 'textures', name: 'Textures' },
    { id: 'maps', name: 'Maps' }
  ]

  const filteredItems = selectedCategory === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === selectedCategory)

  return (
    <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold gradient-text mb-6">
            My Portfolio
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Explore my collection of Minecraft creations, from epic builds to custom textures and adventure maps.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-blue-400'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="portfolio-item bg-slate-800 rounded-xl overflow-hidden card-hover"
            >
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover"
                />
                <div className="portfolio-overlay">
                  <div className="flex gap-4">
                    <button className="bg-white/20 backdrop-blur-sm p-3 rounded-full hover:bg-white/30 transition-colors">
                      <Eye className="text-white" size={20} />
                    </button>
                    <button className="bg-white/20 backdrop-blur-sm p-3 rounded-full hover:bg-white/30 transition-colors">
                      <ExternalLink className="text-white" size={20} />
                    </button>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-400">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio