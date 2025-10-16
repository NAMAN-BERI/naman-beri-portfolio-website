"use client"

import { motion } from 'framer-motion'
import { MapPin, Calendar, Lightbulb, Rocket, Award, BookOpen, Sparkles } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const journeyMilestones = [
  {
    year: '2021-2022',
    title: 'Academic Excellence Foundation',
    icon: Award,
    description: 'Awarded Zaheen Mateen Merit Scholarship for Class X excellence at St. Anslem\'s Senior Secondary School, Bhilwara, Rajasthan. This recognition marked the beginning of a focused pursuit in science and technology.',
    color: 'bg-accent/10 border-accent/30'
  },
  {
    year: '2023',
    title: 'Entering University of Delhi',
    icon: BookOpen,
    description: 'Began B.Sc. (Hons) Electronics at Acharya Narendra Dev College, University of Delhi. Received Abhinav Halen Scholarship recognizing academic merit and potential in electronics.',
    color: 'bg-primary/10 border-primary/30'
  },
  {
    year: '2023',
    title: 'First Competition Success',
    icon: Sparkles,
    description: 'Secured 2nd Prize at Electromania \'23 Hackathon at Shaheed Rajguru College. Started hands-on journey with IoT, participating in workshops on 3D Printing and Internet of Things.',
    color: 'bg-secondary/10 border-secondary/30'
  },
  {
    year: '2024',
    title: 'Building from Ground Up',
    icon: Lightbulb,
    description: 'ELITE Summer Fellowship - Built an 8-Bit Computer from logic gates using integrated circuits. This project deepened understanding of computer architecture and digital electronics fundamentals.',
    color: 'bg-accent-teal/10 border-accent-teal/30'
  },
  {
    year: '2024',
    title: 'Research & Presentations Begin',
    icon: Rocket,
    description: 'Presented research papers at multiple conferences including INSCR & ISCB on soil analysis and environmental impact. Won first position at IAPT Regional Convention for technical paper on 8-bit computer design.',
    color: 'bg-accent/10 border-accent/30'
  },
  {
    year: '2024-2025',
    title: 'Advanced Learning & Recognition',
    icon: MapPin,
    description: 'Enrolled in IIT Madras Data Science program alongside B.Sc. Electronics. Received second Abhinav Halen Scholarship. Presented at IAPT 38th Annual Convention and multiple international conferences.',
    color: 'bg-primary/10 border-primary/30'
  },
  {
    year: '2025',
    title: 'Machine Learning Integration',
    icon: Rocket,
    description: 'DRDO SSPL Internship working on ML-Based Intruder Detection Dashboard. Presented "Sensor Bank" paper at International Conference on IoT & AI. Applied machine learning to real-world security and environmental challenges.',
    color: 'bg-secondary/10 border-secondary/30'
  }
]

export default function MyJourney() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50/30 via-white to-blue-50/30 py-20 relative overflow-hidden">
      {/* Decorative background with greenery feel */}
      <div className="fixed inset-0 opacity-[0.04] pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, rgba(16, 185, 129, 0.3) 0%, transparent 50%),
                           radial-gradient(circle at 80% 80%, rgba(59, 130, 246, 0.3) 0%, transparent 50%),
                           radial-gradient(circle at 40% 20%, rgba(34, 197, 94, 0.3) 0%, transparent 50%)`
        }} />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge className="mb-4 bg-emerald-500/10 border-emerald-500/30 text-emerald-700">
            <MapPin className="w-4 h-4 mr-2 inline" />
            The Journey
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            From Curiosity to <span className="gradient-text">Creation</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A continuous journey of learning, building, and contributing to the world of electronics, 
            robotics, and artificial intelligence — one milestone at a time.
          </p>
        </motion.div>

        {/* Journey Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent transform md:-translate-x-1/2" />

          <div className="space-y-12">
            {journeyMilestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-col md:gap-8`}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 -translate-y-0 md:translate-y-0">
                  <div className={`w-4 h-4 rounded-full border-4 border-white shadow-lg ${
                    milestone.color.includes('primary') ? 'bg-primary' :
                    milestone.color.includes('secondary') ? 'bg-secondary' :
                    milestone.color.includes('teal') ? 'bg-accent-teal' :
                    'bg-accent'
                  }`} />
                </div>

                {/* Content Card */}
                <div className={`w-full md:w-[calc(50%-2rem)] ${
                  index % 2 === 0 ? 'md:text-right ml-20 md:ml-0' : 'md:text-left ml-20 md:ml-0'
                }`}>
                  <Card className={`p-6 bg-white border-2 ${milestone.color} hover-lift elegant-shadow group cursor-pointer`}>
                    <div className={`flex items-start gap-4 ${
                      index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'
                    } flex-row`}>
                      <div className={`p-3 rounded-lg ${milestone.color} shrink-0`}>
                        <milestone.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <Badge variant="outline" className="mb-3 text-xs">
                          <Calendar className="w-3 h-3 mr-1.5 inline" />
                          {milestone.year}
                        </Badge>
                        <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                          {milestone.title}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {milestone.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Current Focus */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20"
        >
          <Card className="p-8 md:p-12 bg-gradient-to-br from-emerald-50/50 via-blue-50/30 to-white border-2 border-primary/20 elegant-shadow-lg">
            <div className="text-center">
              <div className="inline-flex items-center justify-center p-4 bg-primary/10 rounded-full mb-6">
                <Rocket className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-3xl font-bold mb-4">
                Currently Exploring
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Pursuing dual education at <span className="text-primary font-semibold">IIT Madras</span> and{' '}
                <span className="text-secondary font-semibold">Acharya Narendra Dev College, University of Delhi</span>.
                Focusing on advanced electronics, machine learning systems, IoT solutions, and the integration 
                of AI with embedded systems for real-world applications.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                <div className="p-4 bg-white rounded-lg border border-gray-200">
                  <div className="text-2xl font-bold text-primary mb-1">2</div>
                  <div className="text-sm text-muted-foreground">Premier Institutions</div>
                </div>
                <div className="p-4 bg-white rounded-lg border border-gray-200">
                  <div className="text-2xl font-bold text-secondary mb-1">15+</div>
                  <div className="text-sm text-muted-foreground">Achievements</div>
                </div>
                <div className="p-4 bg-white rounded-lg border border-gray-200">
                  <div className="text-2xl font-bold text-accent mb-1">5+</div>
                  <div className="text-sm text-muted-foreground">Research Papers</div>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}