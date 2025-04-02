"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Briefcase, Mail, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";

function CountUp({
  end,
  duration = 2000,
  suffix = "",
}: {
  end: number;
  duration?: number;
  suffix?: string;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const updateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);

      setCount(Math.floor(percentage * end));

      if (percentage < 1) {
        animationFrame = requestAnimationFrame(updateCount);
      }
    };

    animationFrame = requestAnimationFrame(updateCount);

    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);

  return (
    <>
      {count}
      {suffix}
    </>
  );
}

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const gears: Gear[] = [];
    const gearCount = Math.min(12, Math.floor(window.innerWidth / 180));

    class Gear {
      x: number;
      y: number;
      radius: number;
      teeth: number;
      rotation: number;
      rotationSpeed: number;
      color: string;
      opacity: number;
      direction: number;

      constructor(x: number, y: number, radius: number) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.teeth = Math.floor(radius / 4);
        this.rotation = Math.random() * Math.PI * 2;
        this.rotationSpeed = (Math.random() * 0.002 - 0.001) * (radius / 40);

        // Teal color palette with varying opacity
        const tealBase = Math.floor(Math.random() * 40) + 160;
        this.color = `rgba(0, ${tealBase}, ${tealBase + 20}, ${
          Math.random() * 0.25 + 0.1
        })`;

        this.opacity = Math.random() * 0.25 + 0.1;
        this.direction = Math.random() > 0.5 ? 1 : -1;
      }

      draw(ctx: CanvasRenderingContext2D) {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation);

        // Draw gear
        ctx.beginPath();
        ctx.arc(0, 0, this.radius * 0.7, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();

        // Draw teeth
        for (let i = 0; i < this.teeth; i++) {
          const angle = (i / this.teeth) * Math.PI * 2;
          const toothLength = this.radius * 0.3;

          ctx.save();
          ctx.rotate(angle);
          ctx.beginPath();
          ctx.rect(
            -toothLength * 0.3,
            this.radius * 0.7 - 1,
            toothLength * 0.6,
            toothLength
          );
          ctx.fillStyle = this.color;
          ctx.fill();
          ctx.restore();
        }

        // Draw center hole
        ctx.beginPath();
        ctx.arc(0, 0, this.radius * 0.2, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(0, 50, 50, 0.4)";
        ctx.fill();

        ctx.restore();
      }

      update() {
        this.rotation += this.rotationSpeed * this.direction;
      }
    }

    // Create gears with better distribution
    for (let i = 0; i < gearCount; i++) {
      const radius = Math.random() * 100 + 50;

      // Better distribution across the canvas
      const margin = radius * 1.2;
      const x = margin + Math.random() * (canvas.width - margin * 2);
      const y = margin + Math.random() * (canvas.height - margin * 2);

      gears.push(new Gear(x, y, radius));
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      gears.forEach((gear) => {
        gear.update();
        gear.draw(ctx);
      });

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-950 text-gray-50">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full -z-10"
        aria-hidden="true"
      />

      {/* Enhanced gradient overlay for better text visibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950/90 via-gray-950/70 to-gray-900/80 -z-10" />

      <div className="container px-4 md:px-6 py-16 md:py-24 z-10">
        <div className="flex flex-col items-center text-center space-y-8 md:space-y-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-3"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter">
              <span className="text-teal-400">Hooman Mohammadi</span>
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl font-medium text-teal-200/80">
              Mechanical Engineer, EIT
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="max-w-[700px] space-y-6"
          >
            <p className="text-lg md:text-xl text-gray-300">
              Registered EIT with Professional Engineers of Ontario (PEO)
              specializing in
              <span className="text-teal-300">
                {" "}
                sustainable engineering solutions
              </span>
            </p>

            <div className="flex flex-wrap justify-center gap-3 md:gap-4">
              <Button
                asChild
                size="lg"
                className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-2 rounded-md"
              >
                <Link href="#projects">
                  <Briefcase className="mr-2 h-5 w-5" />
                  View Projects
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-teal-500 text-teal-400 hover:bg-teal-950 hover:text-teal-200 px-6 py-2 rounded-md"
              >
                <Link href="#contact">
                  <Mail className="mr-2 h-5 w-5" />
                  Contact Me
                </Link>
              </Button>
              <Button
                asChild
                variant="ghost"
                size="lg"
                className="text-gray-300 hover:text-teal-300 hover:bg-gray-800/50 px-6 py-2 rounded-md"
              >
                <Link href="/resume.pdf">
                  <Download className="mr-2 h-5 w-5" />
                  Resume
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-12 md:mt-16 lg:mt-20"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto">
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card className="bg-gray-900/70 border-teal-900/40 hover:border-teal-600/40 transition-colors overflow-hidden backdrop-blur-sm">
                <CardContent className="flex flex-col items-center justify-center p-6 md:p-8 text-center">
                  <h3 className="text-4xl md:text-5xl font-bold mb-2 text-teal-400">
                    <CountUp end={5} suffix="+" />
                  </h3>
                  <p className="text-sm md:text-base text-gray-300">
                    Years of Experience
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card className="bg-gray-900/70 border-teal-900/40 hover:border-teal-600/40 transition-colors overflow-hidden backdrop-blur-sm">
                <CardContent className="flex flex-col items-center justify-center p-6 md:p-8 text-center">
                  <h3 className="text-4xl md:text-5xl font-bold mb-2 text-teal-400">
                    <CountUp end={8} />
                  </h3>
                  <p className="text-sm md:text-base text-gray-300">
                    Projects Completed
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="sm:col-span-2 lg:col-span-1"
            >
              <Card className="bg-gray-900/70 border-teal-900/40 hover:border-teal-600/40 transition-colors overflow-hidden backdrop-blur-sm">
                <CardContent className="flex flex-col items-center justify-center p-6 md:p-8 text-center">
                  <h3 className="text-4xl md:text-5xl font-bold mb-2 text-teal-400">
                    <CountUp end={20} suffix="+" />
                  </h3>
                  <p className="text-sm md:text-base text-gray-300">
                    Companies Worked With
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator - commented out as in your code */}
      {/* <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Link
          href="#about"
          className="text-gray-400 hover:text-teal-400 transition-colors flex flex-col items-center"
        >
          <span className="text-sm mb-1">Explore More</span>
          <ChevronDown size={28} />
          <span className="sr-only">Scroll down</span>
        </Link>
      </div> */}
    </section>
  );
}
