'use client'

import { Github, Twitter, Youtube, Mail, Heart } from 'lucide-react'

const Footer = () => {
  const socialLinks = [
    { icon: <Github size={20} />, href: '#', label: 'GitHub' },
    { icon: <Twitter size={20} />, href: '#', label: 'Twitter' },
    { icon: <Youtube size={20} />, href: '#', label: 'YouTube' },
    { icon: <Mail size={20} />, href: 'mailto:contact@seltop.com', label: 'Email' }
  ]

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Process', href: '#process' },
    { name: 'About', href: '#about' }
  ]

  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold gradient-text mb-4">Seltop</h3>
            <p className="text-slate-400 mb-6 leading-relaxed">
              Creating exceptional Minecraft experiences through innovative design 
              and creative vision. Let's build something amazing together.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  aria-label={link.label}
                  className="bg-slate-800 hover:bg-blue-600 text-slate-400 hover:text-white p-3 rounded-lg transition-all duration-300"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-blue-400 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Get In Touch</h4>
            <p className="text-slate-400 mb-4">
              Ready to start your next Minecraft project? Let's discuss your ideas.
            </p>
            <a
              href="mailto:contact@seltop.com"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
            >
              <Mail size={16} />
              Contact Me
            </a>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm">
            © 2024 Seltop. All rights reserved.
          </p>
          <p className="text-slate-400 text-sm flex items-center gap-1 mt-4 md:mt-0">
            Made with <Heart className="text-red-500" size={16} /> for the Minecraft community
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer