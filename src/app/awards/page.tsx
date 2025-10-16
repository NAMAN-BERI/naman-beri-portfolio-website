"use client"

import { motion } from 'framer-motion'
import { Award, Briefcase, FileText, Trophy, Sparkles, GraduationCap, Lightbulb } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const achievements = [
  {
    category: 'Scholarships',
    icon: GraduationCap,
    items: [
      {
        title: 'Abhinav Halen Scholarship 2024-25',
        organization: 'Acharya Narendra Dev College, University of Delhi',
        year: '2024-25',
        description: 'Recipient as B.Sc. (Hons) Electronics II Year',
        amount: '₹15,000'
      },
      {
        title: 'Abhinav Halen Scholarship 2023-24',
        organization: 'Acharya Narendra Dev College, University of Delhi',
        year: '2023-24',
        description: 'Recipient as B.Sc. (Hons) Electronics I Year',
        amount: '₹15,000'
      },
      {
        title: 'Zaheen Mateen Merit Scholarship',
        organization: "St. Anslem's Senior Secondary School, Bhilwara",
        year: '2021-22',
        description: 'Awarded for Class X academic excellence (Science Group)'
      }
    ]
  },
  {
    category: 'Internships & Projects',
    icon: Briefcase,
    items: [
      {
        title: 'DRDO SSPL Internship',
        organization: 'Solid State Physics Laboratory, DRDO, Delhi',
        year: 'Summer 2025',
        description: 'ML-Based Dashboard for Intruder Detection using AE Technology'
      },
      {
        title: 'ELITE Summer Fellowship',
        organization: 'Acharya Narendra Dev College, University of Delhi',
        year: '2024',
        description: 'From Logic Gates to Computing: Building an 8-Bit Computer Using Integrated Circuits'
      }
    ]
  },
  {
    category: 'Conferences & Presentations',
    icon: FileText,
    items: [
      {
        title: 'IAPT Regional Convention - First Position',
        organization: 'Amity International School, Delhi',
        year: 'August 2024',
        description: 'First position for technical paper on "Experiential Learning & Integration of Physics in Building an 8-Bit Computer"',
        highlight: true
      },
      {
        title: '2nd International Conference on Advances in IoT, Security with AI',
        organization: 'Deen Dayal Upadhyaya College, University of Delhi',
        year: 'April 2025',
        description: 'Paper Presented: "Sensor Bank – A Real-Time Machine Learning Based Electronic Sensor Management System"'
      },
      {
        title: 'INSCR & ISCB International Conference',
        organization: 'Acharya Narendra Dev College, University of Delhi',
        year: 'April 2024',
        description: 'Oral Presentation: "Assessing Industrial Impact on Bhilwara Soil: A Comparative Analysis"'
      },
      {
        title: 'ISCB International Symposium',
        organization: 'Acharya Narendra Dev College, University of Delhi',
        year: '2025',
        description: 'Poster: "Evaluating the Impact of Economic Development on Environmental Contamination Using Machine Learning"'
      },
      {
        title: 'Indian Association of Physics Teachers, 38th Annual Convention',
        organization: 'IAPT',
        year: 'October 2024',
        description: 'Oral Presentation: "Experimental Learning and Integration of Physics in Building an 8-Bit Computer"'
      }
    ]
  },
  {
    category: 'Competitions & Workshops',
    icon: Trophy,
    items: [
      {
        title: "Electromania '23 Hackathon - 2nd Prize",
        organization: 'Shaheed Rajguru College of Applied Sciences for Women, University of Delhi',
        year: 'November 2023',
        description: 'Secured second position in electronics hackathon',
        highlight: true
      },
      {
        title: 'IoTronics Training Program - Third Position',
        organization: 'Deen Dayal Upadhyaya College, University of Delhi',
        year: 'October 2023',
        description: 'Certificate of Merit: Stood Third in Competition Round, Qualified for Final Round'
      },
      {
        title: 'CSIR-CSIO Workshop: Industrial Automation Techniques',
        organization: 'CSIR-Central Scientific Instruments Organisation, Chandigarh',
        year: 'September 2024',
        description: 'Advanced training in industrial automation and instrumentation'
      },
      {
        title: 'Internet of Things Workshop',
        organization: 'Acharya Narendra Dev College (SPIE Student Chapter)',
        year: 'February-March 2024',
        description: 'Comprehensive training on IoT systems and applications'
      },
      {
        title: '3D Printing Technology Workshop',
        organization: 'Acharya Narendra Dev College (SPIE Student Chapter)',
        year: 'September 2023',
        description: 'Hands-on experience with additive manufacturing technologies'
      }
    ]
  }
]

export default function Awards() {
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
            <Award className="w-4 h-4 mr-2 inline" />
            Achievements & Recognition
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Awards & <span className="gradient-text">Milestones</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A journey of academic excellence, research contributions, and technical innovation
          </p>
        </motion.div>

        {/* Achievements Grid */}
        <div className="space-y-16">
          {achievements.map((section, sectionIndex) => (
            <motion.div
              key={sectionIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <section.icon className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-3xl font-bold">{section.category}</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {section.items.map((item, itemIndex) => (
                  <motion.div
                    key={itemIndex}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: itemIndex * 0.05 }}
                  >
                    <Card className={`p-6 h-full bg-white border hover:border-primary/50 transition-all duration-300 hover-lift ${
                      item.highlight ? 'border-primary/30 bg-primary/5' : 'border-gray-200'
                    }`}>
                      <div className="flex justify-between items-start mb-3">
                        <Badge variant="outline" className="text-xs">
                          {item.year}
                        </Badge>
                        {item.highlight && (
                          <Sparkles className="w-5 h-5 text-accent" />
                        )}
                      </div>
                      <h3 className="text-lg font-bold mb-2 text-foreground">
                        {item.title}
                      </h3>
                      <p className="text-sm text-primary font-medium mb-2">
                        {item.organization}
                      </p>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                      {item.amount && (
                        <div className="mt-3 pt-3 border-t border-gray-200">
                          <Badge className="bg-accent/10 text-accent border-accent/20">
                            {item.amount}
                          </Badge>
                        </div>
                      )}
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          <Card className="p-6 text-center bg-white border border-gray-200 elegant-shadow">
            <div className="text-3xl font-bold text-primary mb-2">3</div>
            <div className="text-sm text-muted-foreground">Scholarships</div>
          </Card>
          <Card className="p-6 text-center bg-white border border-gray-200 elegant-shadow">
            <div className="text-3xl font-bold text-secondary mb-2">5</div>
            <div className="text-sm text-muted-foreground">Conferences</div>
          </Card>
          <Card className="p-6 text-center bg-white border border-gray-200 elegant-shadow">
            <div className="text-3xl font-bold text-accent mb-2">2</div>
            <div className="text-sm text-muted-foreground">Competition Wins</div>
          </Card>
          <Card className="p-6 text-center bg-white border border-gray-200 elegant-shadow">
            <div className="text-3xl font-bold text-accent-teal mb-2">5</div>
            <div className="text-sm text-muted-foreground">Workshops</div>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}