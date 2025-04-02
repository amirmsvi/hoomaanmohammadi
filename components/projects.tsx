"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChevronRight, ExternalLink } from "lucide-react";

export default function Projects() {
  const [activeTab, setActiveTab] = useState("all");

  const projects = [
    {
      id: 1,
      title: "Battery Fuel Gauge Modeling",
      description:
        "Developed battery fuel gauge models using MATLAB for accurate power estimation",
      image: "/placeholder.svg?height=600&width=800",
      category: "simulation",
      tags: ["MATLAB", "Battery Modeling", "Power Systems"],
      fullDescription:
        "This project involved developing comprehensive battery fuel gauge models using MATLAB to accurately estimate and predict battery power levels. The models incorporated various battery chemistries and discharge patterns to create reliable state-of-charge indicators.",
      challenges:
        "The main challenge was accounting for various factors affecting battery performance, including temperature variations, aging effects, and different load profiles. Creating accurate models required extensive testing and validation against real-world data.",
      outcomes:
        "The developed models achieved over 95% accuracy in predicting remaining battery capacity across different operating conditions. The algorithms were successfully implemented in simulation environments and could be adapted for various battery types.",
      link: "#",
    },
    {
      id: 2,
      title: "170-Seat Passenger Aircraft Design",
      description:
        "Designed a 170-seat passenger aircraft with turbofan engine using SolidWorks and ANSYS",
      image: "/placeholder.svg?height=600&width=800",
      category: "design",
      tags: ["SolidWorks", "ANSYS", "Aerospace Design"],
      fullDescription:
        "This project focused on the comprehensive design of a 170-seat passenger aircraft powered by a turbofan engine. Using SolidWorks for 3D modeling and ANSYS for structural and aerodynamic analysis, the project covered all major aircraft systems and components.",
      challenges:
        "Balancing aerodynamic efficiency, structural integrity, and passenger comfort presented significant challenges. Additionally, ensuring the design met international aviation standards and regulations required careful consideration of numerous parameters.",
      outcomes:
        "The final design achieved excellent aerodynamic performance with a competitive fuel efficiency profile. Structural analysis confirmed the design's safety factors exceeded industry standards, and the cabin layout optimized passenger comfort and emergency evacuation requirements.",
      link: "#",
    },
    {
      id: 3,
      title: "Stress/Strain Analysis in Baseball Bats",
      description:
        "Modeled and analyzed stress/strain in metal and composite baseball bats using ANSYS",
      image: "/placeholder.svg?height=600&width=800",
      category: "analysis",
      tags: ["ANSYS", "Stress Analysis", "Composite Materials"],
      fullDescription:
        "This project involved detailed modeling and analysis of stress and strain distributions in both metal and composite baseball bats during impact. Using ANSYS software, the study compared performance characteristics and structural integrity of different bat materials and designs.",
      challenges:
        "Accurately modeling the dynamic impact between the ball and bat required complex non-linear analysis. Additionally, characterizing the anisotropic properties of composite materials and their failure mechanisms presented significant technical challenges.",
      outcomes:
        "The analysis revealed optimal design parameters for both metal and composite bats, identifying key stress concentration areas and providing insights for improved durability and performance. The results demonstrated a 15% performance advantage for certain composite designs while maintaining equivalent safety factors.",
      link: "#",
    },
    {
      id: 4,
      title: "Composite Layer Optimization for Aircraft Wings",
      description:
        "Optimized the arrangement of composite layers in airplane wings for improved performance",
      image: "/placeholder.svg?height=600&width=800",
      category: "optimization",
      tags: ["Composite Materials", "Structural Optimization", "Aerospace"],
      fullDescription:
        "This project focused on optimizing the layup sequence and orientation of composite materials in aircraft wing structures. The goal was to maximize strength and stiffness while minimizing weight through strategic arrangement of composite layers.",
      challenges:
        "The main challenges included developing an effective optimization algorithm that could handle the large number of possible layer configurations, and accurately modeling the complex mechanical behavior of composite laminates under various loading conditions.",
      outcomes:
        "The optimized composite layup achieved a 12% weight reduction while maintaining equivalent structural performance compared to baseline designs. The methodology developed can be applied to other aerospace structures to improve efficiency and performance.",
      link: "#",
    },
    {
      id: 5,
      title: "Open Circuit Voltage Modeling",
      description:
        "Developed models for predicting open circuit voltage in various electrical systems",
      image: "/placeholder.svg?height=600&width=800",
      category: "electrical",
      tags: ["Voltage Modeling", "Electrical Systems", "Simulation"],
      fullDescription:
        "This project involved creating mathematical models to accurately predict open circuit voltage behavior in various electrical systems. The models incorporated temperature effects, aging factors, and load history to improve prediction accuracy.",
      challenges:
        "Accounting for all variables affecting open circuit voltage, particularly in systems with complex electrochemical processes, required sophisticated modeling approaches and extensive validation testing.",
      outcomes:
        "The developed models achieved high accuracy in predicting open circuit voltage across different operating conditions and system types. The methodology has applications in battery management systems, power electronics, and electrical grid management.",
      link: "#",
    },
    {
      id: 6,
      title: "Wind Turbine Blade Analysis",
      description:
        "Analyzed stress-strain and displacement characteristics of wind turbine blades",
      image: "/placeholder.svg?height=600&width=800",
      category: "renewable",
      tags: ["Wind Energy", "Structural Analysis", "Renewable Technology"],
      fullDescription:
        "This project focused on comprehensive analysis of stress-strain relationships and displacement patterns in wind turbine blades under various wind loading conditions. The study aimed to identify critical stress points and optimize blade design for improved durability and efficiency.",
      challenges:
        "Modeling the complex aerodynamic loads and their structural effects presented significant challenges, particularly for large-scale turbine blades. Additionally, accounting for material fatigue and environmental factors required sophisticated analysis techniques.",
      outcomes:
        "The analysis identified key areas for design improvement and material reinforcement, potentially extending blade lifespan by up to 20%. The methodology developed provides a framework for evaluating new blade designs and materials before physical prototyping.",
      link: "#",
    },
    {
      id: 7,
      title: "Tensile Fracture in Polycrystalline Graphite",
      description:
        "Investigated tensile fracture mechanisms in cut polycrystalline graphite samples",
      image: "/placeholder.svg?height=600&width=800",
      category: "materials",
      tags: ["Material Science", "Fracture Mechanics", "Graphite Analysis"],
      fullDescription:
        "This research project investigated the mechanisms of tensile fracture in cut polycrystalline graphite samples. The study examined how crystal orientation, sample preparation methods, and loading conditions affect fracture initiation and propagation.",
      challenges:
        "The heterogeneous nature of polycrystalline graphite made consistent sample preparation and testing challenging. Additionally, developing appropriate imaging and measurement techniques to capture fracture progression required specialized equipment and methodologies.",
      outcomes:
        "The research identified key relationships between crystal structure, sample preparation methods, and fracture resistance. These findings have applications in improving graphite components used in nuclear reactors, electrodes, and other high-temperature applications.",
      link: "#",
    },
    {
      id: 8,
      title: "Vertical Flying Drone Design",
      description:
        "Conceptual design and analysis of a vertical flying drone using Ansys and Catia",
      image: "/placeholder.svg?height=600&width=800",
      category: "design",
      tags: ["Drone Design", "ANSYS", "CATIA"],
      fullDescription:
        "This project involved the conceptual design and engineering analysis of a vertical takeoff and landing drone. Using CATIA for 3D modeling and ANSYS for structural and aerodynamic analysis, the project covered propulsion systems, control mechanisms, and structural components.",
      challenges:
        "Balancing weight, power requirements, and flight stability presented significant design challenges. Additionally, optimizing the propulsion system for vertical flight while maintaining efficiency required extensive simulation and iterative design.",
      outcomes:
        "The final design achieved excellent stability characteristics and power efficiency. Structural analysis confirmed the design's durability under various flight conditions, and the propulsion system provided adequate thrust with reasonable power consumption.",
      link: "#",
    },
  ];

  const filteredProjects =
    activeTab === "all"
      ? projects
      : projects.filter((project) => project.category === activeTab);

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
    <section id="projects" className="py-24 bg-gray-950">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center mb-12"
        >
          <div className="relative mb-6">
            <div className="absolute -inset-1 bg-gradient-to-r from-teal-600 via-teal-400 to-teal-600 rounded-lg blur opacity-25"></div>
            <div className="relative px-6 py-2 bg-gray-950 rounded-md border border-teal-500/20">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                Featured <span className="text-teal-400">Projects</span>
              </h2>
            </div>
          </div>
          <p className="mt-4 text-xl text-gray-300 max-w-[800px]">
            A selection of my engineering projects showcasing innovation and
            technical expertise
          </p>
        </motion.div>

        <Tabs defaultValue="all" className="mb-8" onValueChange={setActiveTab}>
          <div className="flex justify-center">
            <TabsList className="bg-gray-800 border border-gray-700">
              <TabsTrigger
                value="all"
                className="data-[state=active]:bg-teal-900/40 data-[state=active]:text-teal-300"
              >
                All Projects
              </TabsTrigger>
              <TabsTrigger
                value="simulation"
                className="data-[state=active]:bg-teal-900/40 data-[state=active]:text-teal-300"
              >
                Simulation
              </TabsTrigger>
              <TabsTrigger
                value="design"
                className="data-[state=active]:bg-teal-900/40 data-[state=active]:text-teal-300"
              >
                Design
              </TabsTrigger>
              <TabsTrigger
                value="analysis"
                className="data-[state=active]:bg-teal-900/40 data-[state=active]:text-teal-300"
              >
                Analysis
              </TabsTrigger>
              <TabsTrigger
                value="optimization"
                className="data-[state=active]:bg-teal-900/40 data-[state=active]:text-teal-300"
              >
                Optimization
              </TabsTrigger>
              <TabsTrigger
                value="electrical"
                className="data-[state=active]:bg-teal-900/40 data-[state=active]:text-teal-300"
              >
                Electrical
              </TabsTrigger>
              <TabsTrigger
                value="renewable"
                className="data-[state=active]:bg-teal-900/40 data-[state=active]:text-teal-300"
              >
                Renewable
              </TabsTrigger>
              <TabsTrigger
                value="materials"
                className="data-[state=active]:bg-teal-900/40 data-[state=active]:text-teal-300"
              >
                Materials
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="all" className="mt-8">
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </motion.div>
          </TabsContent>

          {[
            "simulation",
            "design",
            "analysis",
            "optimization",
            "electrical",
            "renewable",
            "materials",
          ].map((category) => (
            <TabsContent key={category} value={category} className="mt-8">
              <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {filteredProjects.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: any }) {
  return (
    <motion.div
      variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Card className="overflow-hidden h-full flex flex-col bg-gray-900 border-gray-800 hover:border-teal-500/30 transition-colors">
        <div className="relative aspect-video overflow-hidden">
          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-300 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
        </div>
        <CardHeader className="pb-2">
          <CardTitle className="text-white">{project.title}</CardTitle>
          <CardDescription className="text-gray-400">
            {project.description}
          </CardDescription>
        </CardHeader>
        <CardContent className="flex-grow pt-0">
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag: string, index: number) => (
              <Badge
                key={index}
                variant="secondary"
                className="bg-teal-900/30 text-teal-300 hover:bg-teal-900/50 border-teal-800/30"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
        <CardFooter className="flex justify-between border-t border-gray-800 pt-4">
          <Dialog>
            <DialogTrigger asChild>
              <Button
                variant="outline"
                className="border-teal-900/50 text-teal-400 hover:bg-teal-900/20 hover:text-teal-300"
              >
                View Details
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-3xl bg-gray-900 border-gray-800 text-gray-100">
              <DialogHeader>
                <DialogTitle className="text-white text-xl">
                  {project.title}
                </DialogTitle>
                <DialogDescription className="text-gray-400">
                  {project.category.charAt(0).toUpperCase() +
                    project.category.slice(1)}{" "}
                  Project
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="relative aspect-video overflow-hidden rounded-lg">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-40"></div>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-teal-300">Overview</h4>
                    <p className="text-sm text-gray-300 mt-1">
                      {project.fullDescription}
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-teal-300">Challenges</h4>
                    <p className="text-sm text-gray-300 mt-1">
                      {project.challenges}
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-teal-300">Outcomes</h4>
                    <p className="text-sm text-gray-300 mt-1">
                      {project.outcomes}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag: string, index: number) => (
                      <Badge
                        key={index}
                        variant="outline"
                        className="border-teal-800/50 text-teal-300"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex justify-end">
                <Button
                  asChild
                  className="bg-teal-600 hover:bg-teal-700 text-white"
                >
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center"
                  >
                    View Project <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </DialogContent>
          </Dialog>
          <Button
            variant="ghost"
            size="icon"
            asChild
            className="text-gray-400 hover:text-teal-400 hover:bg-transparent"
          >
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <ChevronRight className="h-4 w-4" />
              <span className="sr-only">View project</span>
            </a>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
