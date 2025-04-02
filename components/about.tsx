"use client";

import { motion } from "framer-motion";
import {
  Wrench,
  Cog,
  Cpu,
  Ruler,
  Microscope,
  GraduationCap,
  Award,
  Briefcase,
  RefreshCw,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useEffect, useState, useRef } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

function AnimatedProgress({
  value,
  color = "teal",
}: {
  value: number;
  color?: string;
}) {
  const [width, setWidth] = useState(0);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setTimeout(() => {
            setWidth(value);
          }, 200);
        }
      },
      { threshold: 0.1 }
    );

    if (progressRef.current) {
      observer.observe(progressRef.current);
    }

    return () => {
      if (progressRef.current) {
        observer.unobserve(progressRef.current);
      }
    };
  }, [value]);

  return (
    <div
      ref={progressRef}
      className="h-2 w-full bg-gray-800 rounded-full overflow-hidden"
    >
      <div
        className={`h-full bg-teal-500 rounded-full transition-all duration-1000 ease-out`}
        style={{ width: `${width}%` }}
      />
    </div>
  );
}

export default function About() {
  const skills = [
    {
      name: "AutoCAD & SolidWorks",
      value: 95,
      icon: <Ruler className="h-4 w-4 text-teal-400" />,
    },
    {
      name: "ANSYS & Abaqus",
      value: 90,
      icon: <RefreshCw className="h-4 w-4 text-teal-400" />,
    },
    {
      name: "MATLAB",
      value: 85,
      icon: <Cpu className="h-4 w-4 text-teal-400" />,
    },
    {
      name: "Microsoft Office Suite",
      value: 95,
      icon: <Award className="h-4 w-4 text-teal-400" />,
    },
    {
      name: "Project Management",
      value: 88,
      icon: <Briefcase className="h-4 w-4 text-teal-400" />,
    },
    {
      name: "Finite Element Analysis",
      value: 92,
      icon: <Microscope className="h-4 w-4 text-teal-400" />,
    },
  ];

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
  ];

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
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section id="about" className="py-24 bg-gray-900">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative mb-6"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-teal-600 via-teal-400 to-teal-600 rounded-lg blur opacity-25"></div>
            <div className="relative px-6 py-2 bg-gray-900 rounded-md border border-teal-500/20">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                About <span className="text-teal-400">Me</span>
              </h2>
            </div>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-xl text-gray-300 max-w-[800px]"
          >
            Passionate mechanical engineer with expertise in design, analysis,
            and implementation of complex mechanical systems
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="bg-gray-800 border-gray-700 hover:border-teal-500/30 transition-colors h-full overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-gray-800 to-gray-900 border-b border-gray-700">
                <CardTitle className="flex items-center text-white group">
                  <div className="p-2 rounded-full bg-teal-900/30 mr-3 group-hover:bg-teal-800/50 transition-colors">
                    <Wrench className="h-5 w-5 text-teal-400" />
                  </div>
                  Professional Summary
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 pt-6 text-gray-300">
                <p>
                  With over 5 years of experience in mechanical engineering, I
                  specialize in designing and optimizing mechanical systems for
                  automotive and aerospace applications. My expertise includes
                  structural analysis, thermal management, and manufacturing
                  process optimization.
                </p>
                <p>
                  I am passionate about combining innovative design with
                  practical engineering solutions to create products that are
                  both functional and efficient. My approach integrates
                  cutting-edge technology with fundamental engineering
                  principles.
                </p>
                <div className="pt-4 flex flex-wrap gap-2">
                  {[
                    "Design",
                    "Analysis",
                    "Optimization",
                    "Innovation",
                    "Quality",
                  ].map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-teal-900/30 text-teal-300 text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="bg-gray-800 border-gray-700 hover:border-teal-500/30 transition-colors h-full">
              <CardHeader className="bg-gradient-to-r from-gray-800 to-gray-900 border-b border-gray-700">
                <CardTitle className="flex items-center text-white group">
                  <div className="p-2 rounded-full bg-teal-900/30 mr-3 group-hover:bg-teal-800/50 transition-colors">
                    <Cog className="h-5 w-5 text-teal-400" />
                  </div>
                  Technical Skills
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-5">
                  {skills.map((skill, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center">
                          {skill.icon}
                          <span className="text-sm font-medium ml-2 text-gray-200">
                            {skill.name}
                          </span>
                        </div>
                        <span className="text-sm font-mono text-teal-300">
                          {skill.value}%
                        </span>
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
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <Tabs defaultValue="education" className="w-full">
            <div className="flex justify-center mb-6">
              <TabsList className="bg-gray-800 border border-gray-700">
                <TabsTrigger
                  value="education"
                  className="data-[state=active]:bg-teal-900/40 data-[state=active]:text-teal-300"
                >
                  <GraduationCap className="mr-2 h-4 w-4" />
                  Education
                </TabsTrigger>
                <TabsTrigger
                  value="experience"
                  className="data-[state=active]:bg-teal-900/40 data-[state=active]:text-teal-300"
                >
                  <Briefcase className="mr-2 h-4 w-4" />
                  Experience
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="education" className="mt-0">
              <Card className="bg-gray-800 border-gray-700">
                <CardHeader className="bg-gradient-to-r from-gray-800 to-gray-900 border-b border-gray-700">
                  <CardTitle className="flex items-center text-white group">
                    <div className="p-2 rounded-full bg-teal-900/30 mr-3 group-hover:bg-teal-800/50 transition-colors">
                      <GraduationCap className="h-5 w-5 text-teal-400" />
                    </div>
                    Education
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="space-y-8">
                    {education.map((edu, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className="relative"
                      >
                        <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-teal-400 to-teal-800 rounded-full" />
                        <div className="absolute top-0 left-0 w-3 h-3 bg-teal-400 rounded-full -translate-x-1 mt-1.5 border-2 border-gray-800" />
                        <div className="pl-6 space-y-1">
                          <div className="flex flex-wrap items-center gap-2">
                            <h4 className="font-semibold text-white text-lg">
                              {edu.degree}
                            </h4>
                            <span className="px-2 py-0.5 bg-teal-900/40 text-teal-300 text-xs rounded-full">
                              {edu.year}
                            </span>
                          </div>
                          <p className="text-sm text-gray-400">
                            {edu.institution}
                          </p>
                          <p className="text-sm text-gray-300">
                            {edu.description}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="experience" className="mt-0">
              <Card className="bg-gray-800 border-gray-700">
                <CardHeader className="bg-gradient-to-r from-gray-800 to-gray-900 border-b border-gray-700">
                  <CardTitle className="flex items-center text-white group">
                    <div className="p-2 rounded-full bg-teal-900/30 mr-3 group-hover:bg-teal-800/50 transition-colors">
                      <Briefcase className="h-5 w-5 text-teal-400" />
                    </div>
                    Experience
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="space-y-8">
                    {experience.map((exp, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className="relative"
                      >
                        <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-teal-400 to-teal-800 rounded-full" />
                        <div className="absolute top-0 left-0 w-3 h-3 bg-teal-400 rounded-full -translate-x-1 mt-1.5 border-2 border-gray-800" />
                        <div className="pl-6 space-y-1">
                          <div className="flex flex-wrap items-center gap-2">
                            <h4 className="font-semibold text-white text-lg">
                              {exp.position}
                            </h4>
                            <span className="px-2 py-0.5 bg-teal-900/40 text-teal-300 text-xs rounded-full">
                              {exp.year}
                            </span>
                          </div>
                          <p className="text-sm text-gray-400">{exp.company}</p>
                          <p className="text-sm text-gray-300">
                            {exp.description}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {[
            {
              icon: <Ruler className="h-12 w-12 text-teal-400" />,
              title: "Precision Design",
              description:
                "Creating detailed mechanical designs with micron-level precision",
            },
            {
              icon: <Cog className="h-12 w-12 text-teal-400" />,
              title: "System Integration",
              description:
                "Seamlessly integrating mechanical components into complex systems",
            },
            {
              icon: <Microscope className="h-12 w-12 text-teal-400" />,
              title: "Material Analysis",
              description:
                "Selecting optimal materials for specific engineering applications",
            },
            {
              icon: <Cpu className="h-12 w-12 text-teal-400" />,
              title: "Automation",
              description:
                "Implementing automated solutions for mechanical processes",
            },
          ].map((specialty, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ scale: 1.03, translateY: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card className="bg-gray-800/70 hover:bg-gray-800 border-gray-700 hover:border-teal-500/30 transition-all h-full">
                <CardContent className="flex flex-col items-center text-center p-6">
                  <div className="relative p-3 mb-4">
                    <div className="absolute inset-0 bg-teal-900/20 rounded-full blur"></div>
                    {specialty.icon}
                  </div>
                  <CardTitle className="text-xl mb-2 text-white">
                    {specialty.title}
                  </CardTitle>
                  <CardDescription className="text-gray-300">
                    {specialty.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
