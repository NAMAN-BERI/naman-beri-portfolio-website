"use client"

import { motion } from 'framer-motion'
import { Brain, TrendingUp, BarChart3, Database, LineChart, Sparkles } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const projects = [
  {
    title: 'Fuzzy Logic Environmental Analysis',
    category: 'Research Project',
    description: 'Comprehensive data analysis across Indian states studying humidity, pollution, and industrial data from 2000-2024 using fuzzy logic systems and machine learning techniques.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    tags: ['Fuzzy Logic', 'Data Analysis', 'Environmental Science', 'Time Series'],
    metrics: { accuracy: '92%', dataPoints: '24 Years', states: '28+' }
  },
  {
    title: 'ML-Based Intruder Detection',
    category: 'DRDO SSPL Internship',
    description: 'Machine learning dashboard for real-time intruder detection using Acoustic Emission technology. Implemented predictive models with scikit-learn for security applications.',
    image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&h=600&fit=crop',
    tags: ['ML Classification', 'Real-time Processing', 'Dashboard', 'Security'],
    metrics: { accuracy: '94%', model: 'Random Forest', features: '15+' }
  },
  {
    title: 'Sensor Bank ML System',
    category: 'Conference Paper 2025',
    description: 'Real-time machine learning based electronic sensor management system. Developed predictive models for sensor data using scikit-learn with hyperparameter optimization.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
    tags: ['IoT', 'Machine Learning', 'Time Series', 'Predictive Analytics'],
    metrics: { r2Score: '0.87', model: 'Gradient Boosting', sensors: '10+' }
  },
  {
    title: 'Environmental Contamination Assessment',
    category: 'ISCB Symposium 2025',
    description: 'Machine learning models evaluating the impact of economic development on environmental contamination. Applied regression techniques and feature engineering.',
    image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=600&fit=crop',
    tags: ['Regression', 'Feature Engineering', 'Environmental Data', 'scikit-learn'],
    metrics: { accuracy: '89%', model: 'Ridge Regression', parameters: '20+' }
  },
  {
    title: 'Industrial Impact Soil Analysis',
    category: 'INSCR Conference 2024',
    description: 'Comparative analysis of industrial impact on Bhilwara soil using data science techniques. Performed extensive data preprocessing and statistical analysis.',
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=600&fit=crop',
    tags: ['Data Preprocessing', 'Statistical Analysis', 'Visualization', 'pandas'],
    metrics: { samples: '500+', features: '12', visualization: 'Advanced' }
  },
  {
    title: 'Computer Vision for Robotics',
    category: 'ROS2 Integration',
    description: 'Pose detection and localization algorithms for holonomic robot control. Integrated computer vision with ROS2 for autonomous navigation.',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=600&fit=crop',
    tags: ['Computer Vision', 'ROS2', 'OpenCV', 'Autonomous Systems'],
    metrics: { accuracy: '91%', fps: '30+', latency: '< 50ms' }
  }
]

const skills = [
  { name: 'Python & scikit-learn', level: 90, icon: Brain },
  { name: 'Data Preprocessing', level: 88, icon: Database },
  { name: 'Statistical Analysis', level: 85, icon: BarChart3 },
  { name: 'Model Optimization', level: 82, icon: TrendingUp },
  { name: 'Data Visualization', level: 87, icon: LineChart },
  { name: 'Machine Learning Pipelines', level: 84, icon: Sparkles }
]

const tools = [
  'Python', 'scikit-learn', 'pandas', 'NumPy', 'Matplotlib', 'Seaborn',
  'Jupyter Notebooks', 'TensorFlow Basics', 'OpenCV', 'Fuzzy Logic Libraries'
]

export default function DataScience() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50/30 via-white to-purple-50/30 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge className="mb-4 bg-blue-500/10 border-blue-500/30 text-blue-700">
            <Brain className="w-4 h-4 mr-2 inline" />
            Data Science & AI
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Patterns in the <span className="gradient-text">Chaos</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transforming raw data into actionable insights using machine learning, statistical analysis, and predictive modeling
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
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <Badge className="bg-white/90 backdrop-blur-sm border-gray-200">
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
                  
                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-3 mb-4 p-3 bg-primary/5 rounded-lg">
                    {Object.entries(project.metrics).map(([key, value], i) => (
                      <div key={i} className="text-center">
                        <div className="text-sm font-bold text-primary">{value}</div>
                        <div className="text-xs text-muted-foreground capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                      </div>
                    ))}
                  </div>

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

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Technical <span className="gradient-text">Expertise</span>
            </h2>
            <p className="text-muted-foreground">
              Proficiency across the data science and machine learning stack
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <Card className="p-6 bg-white border border-gray-200 hover:border-primary/50 transition-all duration-300 hover-lift elegant-shadow">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <skill.icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-semibold text-sm">{skill.name}</h3>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs">
                      <span className="text-muted-foreground">Proficiency</span>
                      <span className="font-semibold text-primary">{skill.level}%</span>
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
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Tools & Technologies */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Card className="p-8 md:p-12 bg-gradient-to-br from-blue-50/50 via-purple-50/30 to-white border border-gray-200 elegant-shadow-lg">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">
                Tools & <span className="gradient-text">Frameworks</span>
              </h2>
              <p className="text-muted-foreground">
                Hands-on experience with industry-standard data science tools
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-3">
              {tools.map((tool, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.03 }}
                >
                  <Badge className="px-4 py-2 bg-white border-gray-300 hover:border-primary/50 hover:bg-primary/5 transition-all">
                    {tool}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}