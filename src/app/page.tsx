"use client"

import { motion } from 'framer-motion'
import { ArrowRight, BookOpen, Cpu, Brain, Award, GraduationCap, Sparkles } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const highlights = [
  {
    icon: GraduationCap,
    title: 'Dual Education',
    description: 'IIT Madras & Acharya Narendra Dev College, University of Delhi',
    color: 'text-primary'
  },
  {
    icon: Award,
    title: 'Award Winning',
    description: 'Multiple scholarships, conferences, and competition recognitions',
    color: 'text-secondary'
  },
  {
    icon: Brain,
    title: 'AI & ML Research',
    description: 'Machine learning, data science, and intelligent systems',
    color: 'text-accent-blue'
  },
  {
    icon: Cpu,
    title: 'Electronics Innovation',
    description: '8-bit computer, IoT systems, and embedded electronics',
    color: 'text-accent-teal'
  }
]

const featuredWork = [
  {
    title: 'ML-Based Intruder Detection Dashboard',
    category: 'DRDO SSPL Internship',
    description: 'Machine learning dashboard for intruder detection using AE technology at Solid State Physics Laboratory, DRDO',
    image: 'https://images.unsplash.com/photo-1558002038-1055907df827?w=800&h=600&fit=crop',
    tags: ['Machine Learning', 'Dashboard', 'Security'],
  },
  {
    title: '8-Bit Computer Using ICs',
    category: 'ELITE Summer Fellowship',
    description: 'Built an 8-bit computer from logic gates to computing using integrated circuits',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop',
    tags: ['Digital Logic', 'Computer Architecture', 'Electronics'],
  },
  {
    title: 'Sensor Bank - Real-Time ML System',
    category: 'Conference Paper',
    description: 'Real-time machine learning based electronic sensor management system',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop',
    tags: ['IoT', 'Machine Learning', 'Sensors'],
  }
]

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 pt-20">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge className="mb-6 text-sm px-4 py-2 bg-primary/10 border-primary/20 hover:bg-primary/20">
              <Sparkles className="w-4 h-4 mr-2 inline" />
              Portfolio
            </Badge>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
              <span className="block gradient-text">
                The Art of Science
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto mb-4 leading-relaxed">
              <span className="font-semibold text-foreground">Naman Beri</span>
            </p>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto mb-12 leading-relaxed">
              B.Sc. (Hons) Electronics Student at <span className="text-primary font-medium">Acharya Narendra Dev College, University of Delhi</span> & <span className="text-secondary font-medium">IIT Madras</span>
              <br />
              Specializing in Electronics, Robotics, Data Science, and Artificial Intelligence
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/my-journey">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white hover-lift group">
                  Explore My Journey
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/about">
                <Button size="lg" variant="outline" className="hover-lift">
                  About Me
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Highlights Grid */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">
              Bridging <span className="gradient-text">Science & Innovation</span>
            </h2>
            <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
              Combining academic excellence with hands-on technical expertise across multiple domains
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="p-6 bg-white border border-gray-200 hover:border-primary/50 transition-all duration-300 hover-lift group cursor-pointer elegant-shadow">
                    <highlight.icon className={`w-12 h-12 mb-4 ${highlight.color} group-hover:scale-110 transition-transform`} />
                    <h3 className="text-lg font-bold mb-2">{highlight.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{highlight.description}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Work */}
      <section className="py-24 px-4 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-secondary/10 border-secondary/20">
                <BookOpen className="w-4 h-4 mr-2 inline" />
                Featured Work
              </Badge>
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                Selected <span className="gradient-text">Projects</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                From DRDO internships to research papers and innovative electronics projects
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {featuredWork.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="cursor-pointer"
                >
                  <Card className="overflow-hidden bg-white border border-gray-200 hover:border-primary/50 transition-all duration-300 group hover-lift elegant-shadow">
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-white/90 backdrop-blur-sm border-gray-200">
                          {project.category}
                        </Badge>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, tagIndex) => (
                          <Badge key={tagIndex} variant="outline" className="text-xs border-gray-300">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link href="/electronics">
                <Button variant="outline" className="hover-lift">
                  View All Projects
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-primary/5 to-secondary/5 border border-gray-200 rounded-2xl p-8 md:p-12 relative overflow-hidden elegant-shadow-lg"
          >
            <div className="relative z-10">
              <div className="flex items-center justify-center mb-6">
                <Sparkles className="w-8 h-8 text-accent mr-3" />
                <h2 className="text-3xl md:text-4xl font-bold text-center gradient-text">
                  The Philosophy
                </h2>
              </div>
              
              <blockquote className="text-xl md:text-2xl text-center leading-relaxed mb-6">
                "Where <span className="font-semibold text-primary">circuits meet creativity</span>, 
                where <span className="font-semibold text-secondary">data tells stories</span>, 
                and where <span className="font-semibold text-accent">innovation bridges theory and practice</span>."
              </blockquote>
              
              <p className="text-center text-muted-foreground">
                Combining academic rigor from premier institutions with hands-on technical expertise 
                to solve real-world problems through innovative engineering solutions.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Let's Build <span className="gradient-text">Tomorrow</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Interested in collaboration or want to learn more about my work?
            </p>
            <Link href="/about">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white hover-lift">
                Get In Touch
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}