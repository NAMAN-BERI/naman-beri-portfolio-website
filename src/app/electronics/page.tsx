"use client"

import { motion } from 'framer-motion'
import { Cpu, Zap, CircuitBoard, Microchip, Lightbulb, Wrench, Code } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const projects = [
  {
    title: '8-Bit Computer Using ICs',
    category: 'ELITE Summer Fellowship 2024',
    description: 'Built an 8-bit computer from logic gates to computing using integrated circuits - a comprehensive journey through computer architecture and digital electronics.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop',
    tags: ['Digital Logic', 'Computer Architecture', 'ICs', 'Assembly'],
    skills: ['74-series ICs', 'Control Logic', 'ALU Design', 'Memory Systems']
  },
  {
    title: 'ML-Based Intruder Detection Dashboard',
    category: 'DRDO SSPL Internship 2025',
    description: 'Machine learning dashboard for intruder detection using AE (Acoustic Emission) technology at Solid State Physics Laboratory, DRDO.',
    image: 'https://images.unsplash.com/photo-1558002038-1055907df827?w=800&h=600&fit=crop',
    tags: ['Machine Learning', 'IoT', 'Security', 'Dashboard'],
    skills: ['Sensor Integration', 'Real-time Processing', 'ML Models', 'Data Visualization']
  },
  {
    title: 'Sensor Bank - Real-Time ML System',
    category: 'Conference Paper 2025',
    description: 'Real-time machine learning based electronic sensor management system for intelligent monitoring and control.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop',
    tags: ['IoT', 'Machine Learning', 'Sensors', 'Real-time Systems'],
    skills: ['Sensor Networks', 'Edge Computing', 'Data Processing', 'System Integration']
  },
  {
    title: 'Embedded Systems & Microcontrollers',
    category: 'Academic Projects',
    description: 'Various embedded systems projects involving microcontroller programming, sensor integration, and real-time systems development.',
    image: 'https://images.unsplash.com/photo-1555255707-c07966088b7b?w=800&h=600&fit=crop',
    tags: ['Arduino', 'Raspberry Pi', 'C/C++', 'Embedded'],
    skills: ['Microcontroller Programming', 'Sensor Integration', 'PCB Design', 'Firmware Development']
  },
  {
    title: 'IoT & Home Automation',
    category: 'Workshops & Training',
    description: 'Connected devices and wireless protocols for smart home automation and Internet of Things applications.',
    image: 'https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=800&h=600&fit=crop',
    tags: ['IoT', 'Home Automation', 'Wireless', 'Smart Devices'],
    skills: ['WiFi/Bluetooth', 'MQTT', 'Node-RED', 'Cloud Integration']
  },
  {
    title: '3D Printed Hardware Designs',
    category: 'Mechanical Integration',
    description: 'Custom mechanical designs and 3D printed components for robotics and electronics projects.',
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=600&fit=crop',
    tags: ['3D Printing', 'CAD', 'Prototyping', 'Design'],
    skills: ['CAD Modeling', 'Additive Manufacturing', 'Material Selection', 'Mechanical Design']
  }
]

const technicalSkills = [
  { name: 'Digital Electronics', level: 90 },
  { name: 'Microcontrollers (Arduino, Pi)', level: 85 },
  { name: 'PCB Design', level: 75 },
  { name: 'Embedded C/C++', level: 80 },
  { name: 'IoT Systems', level: 85 },
  { name: 'Sensor Integration', level: 88 }
]

export default function Electronics() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-20">
      {/* Circuit pattern background */}
      <div className="fixed inset-0 opacity-[0.03] pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="circuit" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="2" fill="currentColor"/>
              <circle cx="100" cy="60" r="2" fill="currentColor"/>
              <circle cx="180" cy="40" r="2" fill="currentColor"/>
              <circle cx="60" cy="140" r="2" fill="currentColor"/>
              <circle cx="140" cy="180" r="2" fill="currentColor"/>
              <line x1="20" y1="20" x2="100" y2="60" stroke="currentColor" strokeWidth="1"/>
              <line x1="100" y1="60" x2="180" y2="40" stroke="currentColor" strokeWidth="1"/>
              <line x1="20" y1="20" x2="60" y2="140" stroke="currentColor" strokeWidth="1"/>
              <line x1="60" y1="140" x2="140" y2="180" stroke="currentColor" strokeWidth="1"/>
              <rect x="98" y="58" width="4" height="4" fill="currentColor"/>
              <rect x="178" y="38" width="4" height="4" fill="currentColor"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit)" className="text-primary"/>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge className="mb-4 bg-primary/10 border-primary/20">
            <CircuitBoard className="w-4 h-4 mr-2 inline" />
            Electronics & Embedded Systems
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Building Intelligence in <span className="gradient-text">Silicon</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From digital logic and microcontrollers to IoT systems and machine learning integration - crafting intelligent electronic solutions
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden bg-white border border-gray-200 hover:border-primary/50 transition-all duration-300 group hover-lift elegant-shadow h-full">
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <Badge className="bg-white/90 backdrop-blur-sm border-gray-200">
                      <Cpu className="w-3 h-3 mr-1.5 inline" />
                      {project.category}
                    </Badge>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="outline" className="text-xs border-gray-300">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-gray-100">
                    <div className="flex items-center text-xs text-muted-foreground mb-2">
                      <Wrench className="w-3 h-3 mr-1.5" />
                      Key Technologies:
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {project.skills.map((skill, skillIndex) => (
                        <span key={skillIndex} className="text-xs px-2 py-1 bg-primary/5 text-primary rounded">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Technical Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <Card className="p-8 md:p-12 bg-gradient-to-br from-primary/5 to-secondary/5 border border-gray-200 elegant-shadow-lg">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-3xl font-bold">Technical Expertise</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {technicalSkills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-foreground">{skill.name}</span>
                    <span className="text-sm font-semibold text-primary">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </Card>
        </motion.div>

        {/* Tools & Technologies */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">
              Tools & <span className="gradient-text">Technologies</span>
            </h2>
            <p className="text-muted-foreground">
              Hands-on experience with industry-standard tools and platforms
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: 'Arduino IDE', icon: Code },
              { name: 'Raspberry Pi', icon: Cpu },
              { name: 'Circuit Design', icon: CircuitBoard },
              { name: 'IoT Platforms', icon: Microchip }
            ].map((tool, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <Card className="p-6 text-center bg-white border border-gray-200 hover:border-primary/50 transition-all duration-300 hover-lift elegant-shadow">
                  <tool.icon className="w-10 h-10 text-primary mx-auto mb-3" />
                  <h3 className="text-sm font-semibold">{tool.name}</h3>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}