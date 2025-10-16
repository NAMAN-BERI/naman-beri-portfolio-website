"use client"

import { motion } from 'framer-motion'
import { User, GraduationCap, Code, Cpu, Brain, Music, Mail, Github, Linkedin, FileText } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

const education = [
  {
    institution: 'Acharya Narendra Dev College',
    university: 'University of Delhi',
    degree: 'B.Sc. (Hons) Electronics',
    period: '2023 - Present',
    icon: GraduationCap,
    color: 'text-primary'
  },
  {
    institution: 'IIT Madras',
    university: 'Indian Institute of Technology',
    degree: 'Data Science & Programming',
    period: '2024 - Present',
    icon: Brain,
    color: 'text-secondary'
  }
]

const skillCategories = [
  {
    title: 'Programming Languages',
    icon: Code,
    skills: [
      { name: 'Python', level: 90 },
      { name: 'C/C++', level: 85 },
      { name: 'JavaScript', level: 75 },
      { name: 'Java', level: 70 },
      { name: 'Bash/Shell', level: 80 }
    ]
  },
  {
    title: 'Electronics & Robotics',
    icon: Cpu,
    skills: [
      { name: 'ROS2', level: 85 },
      { name: 'Embedded Systems', level: 88 },
      { name: 'Circuit Design', level: 82 },
      { name: 'Microcontrollers', level: 87 },
      { name: 'IoT Systems', level: 85 }
    ]
  },
  {
    title: 'Data Science & ML',
    icon: Brain,
    skills: [
      { name: 'scikit-learn', level: 88 },
      { name: 'pandas & NumPy', level: 90 },
      { name: 'Data Preprocessing', level: 87 },
      { name: 'Model Optimization', level: 83 },
      { name: 'Statistical Analysis', level: 85 }
    ]
  },
  {
    title: 'Tools & Platforms',
    icon: FileText,
    skills: [
      { name: 'Linux/Unix', level: 90 },
      { name: 'Git & GitHub', level: 85 },
      { name: 'VS Code', level: 88 },
      { name: 'Jupyter', level: 87 },
      { name: 'Arduino IDE', level: 85 }
    ]
  }
]

const interests = [
  '3D Printing & Fabrication',
  'Animatronics & Expressive Robotics',
  'Audio Processing & Synthesis',
  'Hindi Bollywood Music',
  'Open-Source Contributions',
  'Environmental Data Analysis'
]

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge className="mb-4 bg-primary/10 border-primary/20">
            <User className="w-4 h-4 mr-2 inline" />
            About Me
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            The Engineer Behind the <span className="gradient-text">Code</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Engineer | Data Scientist | Robotics Enthusiast | Creator
          </p>
        </motion.div>

        {/* Profile Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <Card className="p-8 md:p-12 bg-white border border-gray-200 elegant-shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">Naman Beri</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  I believe engineering is not just about solving problems — it's about creating experiences, 
                  building intelligence, and expressing ideas through technology. My passion lies in bridging 
                  the worlds of electronics, data science, and artificial intelligence to create innovative 
                  solutions that make a difference.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  From building an 8-bit computer from scratch to developing ML-based security systems at DRDO, 
                  my journey has been about constantly learning, experimenting, and pushing the boundaries of 
                  what's possible when creativity meets technical expertise.
                </p>
                
                {/* Social Links */}
                <div className="flex flex-wrap gap-3">
                  <Button variant="outline" className="hover-lift" asChild>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      GitHub
                    </a>
                  </Button>
                  <Button variant="outline" className="hover-lift" asChild>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="w-4 h-4 mr-2" />
                      LinkedIn
                    </a>
                  </Button>
                  <Button variant="outline" className="hover-lift">
                    <Mail className="w-4 h-4 mr-2" />
                    Email
                  </Button>
                </div>
              </div>

              <div className="space-y-6">
                {/* Education Cards */}
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <Card className="p-6 border-2 border-primary/20 hover:border-primary/40 transition-all hover-lift bg-gradient-to-br from-white to-primary/5">
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-primary/10 rounded-lg">
                          <edu.icon className={`w-6 h-6 ${edu.color}`} />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-bold text-lg mb-1">{edu.institution}</h3>
                          <p className="text-sm text-primary font-medium mb-2">{edu.university}</p>
                          <p className="text-sm text-muted-foreground mb-1">{edu.degree}</p>
                          <Badge variant="outline" className="text-xs">
                            {edu.period}
                          </Badge>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Technical <span className="gradient-text">Skills</span>
            </h2>
            <p className="text-muted-foreground">
              Comprehensive expertise across multiple technology domains
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skillCategories.map((category, catIndex) => (
              <motion.div
                key={catIndex}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: catIndex * 0.1 }}
              >
                <Card className="p-6 bg-white border border-gray-200 hover:border-primary/50 transition-all elegant-shadow h-full">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <category.icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="text-lg font-bold">{category.title}</h3>
                  </div>
                  
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex}>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-medium">{skill.name}</span>
                          <span className="text-sm font-semibold text-primary">{skill.level}%</span>
                        </div>
                        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: skillIndex * 0.05 }}
                            className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Interests */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <Card className="p-8 md:p-12 bg-gradient-to-br from-primary/5 to-secondary/5 border border-gray-200 elegant-shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <Music className="w-6 h-6 text-accent" />
              <h2 className="text-3xl font-bold">Interests & Hobbies</h2>
            </div>
            <div className="flex flex-wrap gap-3">
              {interests.map((interest, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <Badge className="px-4 py-2 bg-white border-gray-300 hover:border-primary/50 hover:bg-primary/5 transition-all text-sm">
                    {interest}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </Card>
        </motion.div>

        {/* Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Card className="p-8 md:p-12 text-center bg-white border-2 border-primary/20 elegant-shadow-lg">
            <blockquote className="text-2xl md:text-3xl font-bold mb-6 leading-relaxed">
              "Currently exploring: Advanced electronics systems, machine learning for robotics, 
              and the intersection of AI with creative expression."
            </blockquote>
            <p className="text-muted-foreground">
              Always learning, always building, always innovating.
            </p>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}