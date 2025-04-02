"use client"

import { motion } from "framer-motion"
import { Wrench, Cog, Cpu, Ruler, Microscope, GraduationCap } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useEffect, useState, useRef } from "react"

function AnimatedProgress({ value }: { value: number }) {
  const [width, setWidth] = useState(0)
  const progressRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries
        if (entry.isIntersecting) {
          setTimeout(() => {
            setWidth(value)
          }, 100)
        }
      },
      { threshold: 0.1 },
    )

    if (progressRef.current) {
      observer.observe(progressRef.current)
    }

    return () => {
      if (progressRef.current) {
        observer.unobserve(progressRef.current)
      }
    }
  }, [value])

  return (
    <div ref={progressRef} className="h-2 w-full bg-secondary rounded-full overflow-hidden">
      <div
        className="h-full bg-primary rounded-full transition-all duration-1000 ease-out"
        style={{ width: `${width}%` }}
      />
    </div>
  )
}

export default function About() {
  const skills = [
    { name: "AutoCAD & SolidWorks", value: 95 },
    { name: "ANSYS & Abaqus", value: 90 },
    { name: "MATLAB", value: 85 },
    { name: "Microsoft Office Suite", value: 95 },
    { name: "Project Management", value: 88 },
    { name: "Finite Element Analysis", value: 92 },
  ]

  const education = [
    {
      degree: "Master of Mechanical Engineering",
      institution: "University of Windsor",
      year: "2022-2023",
      description: "Windsor, Ontario, Canada",
    },
    {
      degree: "Bachelor of Science in Mechanical Engineering",
      institution: "Azad University",
      year: "2014-2019",
      description: "Tehran, Iran",
    },
  ]

  const experience = [
    {
      position: "Mechanical Estimator/Coordinator",
      company: "Scon",
      year: "Feb 2024-Present",
      description: "Mississauga, Ontario",
    },
    {
      position: "Assistant Project Manager",
      company: "Nik B&H Co",
      year: "Jun 2020-Oct 2021",
      description: "Tehran, Iran",
    },
    {
      position: "Project Coordinator",
      company: "Nik B&H Co",
      year: "May 2019-May 2020",
      description: "Tehran, Iran",
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Me</h2>
            <p className="mt-4 text-xl text-muted-foreground max-w-[800px]">
              Passionate mechanical engineer with expertise in design, analysis, and implementation of complex
              mechanical systems
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Wrench className="mr-2 h-5 w-5 text-primary" />
                  Professional Summary
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  With over 5 years of experience in mechanical engineering, I specialize in designing and optimizing
                  mechanical systems for automotive and aerospace applications. My expertise includes structural
                  analysis, thermal management, and manufacturing process optimization.
                </p>
                <p>
                  I am passionate about combining innovative design with practical engineering solutions to create
                  products that are both functional and efficient. My approach integrates cutting-edge technology with
                  fundamental engineering principles.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Cog className="mr-2 h-5 w-5 text-primary" />
                  Technical Skills
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {skills.map((skill, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.value}%</span>
                      </div>
                      <AnimatedProgress value={skill.value} />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <div className="space-y-6">
            <motion.div variants={item}>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <GraduationCap className="mr-2 h-5 w-5 text-primary" />
                    Education
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {education.map((edu, index) => (
                      <div key={index} className="border-l-2 border-primary pl-4 space-y-1">
                        <h4 className="font-semibold">{edu.degree}</h4>
                        <p className="text-sm text-muted-foreground">
                          {edu.institution} | {edu.year}
                        </p>
                        <p className="text-sm">{edu.description}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          <div className="space-y-6">
            <motion.div variants={item}>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Cpu className="mr-2 h-5 w-5 text-primary" />
                    Experience
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {experience.map((exp, index) => (
                      <div key={index} className="border-l-2 border-primary pl-4 space-y-1">
                        <h4 className="font-semibold">{exp.position}</h4>
                        <p className="text-sm text-muted-foreground">
                          {exp.company} | {exp.year}
                        </p>
                        <p className="text-sm">{exp.description}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="flex flex-col items-center text-center p-6">
              <Ruler className="h-12 w-12 text-primary mb-4" />
              <CardTitle className="text-xl mb-2">Precision Design</CardTitle>
              <CardDescription>Creating detailed mechanical designs with micron-level precision</CardDescription>
            </CardContent>
          </Card>

          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="flex flex-col items-center text-center p-6">
              <Cog className="h-12 w-12 text-primary mb-4" />
              <CardTitle className="text-xl mb-2">System Integration</CardTitle>
              <CardDescription>Seamlessly integrating mechanical components into complex systems</CardDescription>
            </CardContent>
          </Card>

          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="flex flex-col items-center text-center p-6">
              <Microscope className="h-12 w-12 text-primary mb-4" />
              <CardTitle className="text-xl mb-2">Material Analysis</CardTitle>
              <CardDescription>Selecting optimal materials for specific engineering applications</CardDescription>
            </CardContent>
          </Card>

          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="flex flex-col items-center text-center p-6">
              <Cpu className="h-12 w-12 text-primary mb-4" />
              <CardTitle className="text-xl mb-2">Automation</CardTitle>
              <CardDescription>Implementing automated solutions for mechanical processes</CardDescription>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

