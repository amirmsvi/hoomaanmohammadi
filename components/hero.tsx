"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"

function CountUp({ end, duration = 2000, suffix = "" }: { end: number; duration?: number; suffix?: string }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let startTime: number
    let animationFrame: number

    const updateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = timestamp - startTime
      const percentage = Math.min(progress / duration, 1)

      setCount(Math.floor(percentage * end))

      if (percentage < 1) {
        animationFrame = requestAnimationFrame(updateCount)
      }
    }

    animationFrame = requestAnimationFrame(updateCount)

    return () => cancelAnimationFrame(animationFrame)
  }, [end, duration])

  return (
    <>
      {count}
      {suffix}
    </>
  )
}

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const gears: Gear[] = []
    const gearCount = Math.min(10, Math.floor(window.innerWidth / 200))

    class Gear {
      x: number
      y: number
      radius: number
      teeth: number
      rotation: number
      rotationSpeed: number
      color: string

      constructor(x: number, y: number, radius: number) {
        this.x = x
        this.y = y
        this.radius = radius
        this.teeth = Math.floor(radius / 4)
        this.rotation = 0
        this.rotationSpeed = Math.random() * 0.002 - 0.001
        this.color = `rgba(180, 180, 180, ${Math.random() * 0.2 + 0.05})`
      }

      draw(ctx: CanvasRenderingContext2D) {
        ctx.save()
        ctx.translate(this.x, this.y)
        ctx.rotate(this.rotation)

        // Draw gear
        ctx.beginPath()
        ctx.arc(0, 0, this.radius * 0.7, 0, Math.PI * 2)
        ctx.fillStyle = this.color
        ctx.fill()

        // Draw teeth
        for (let i = 0; i < this.teeth; i++) {
          const angle = (i / this.teeth) * Math.PI * 2
          const toothLength = this.radius * 0.3

          ctx.save()
          ctx.rotate(angle)
          ctx.beginPath()
          ctx.rect(-toothLength * 0.3, this.radius * 0.7 - 1, toothLength * 0.6, toothLength)
          ctx.fillStyle = this.color
          ctx.fill()
          ctx.restore()
        }

        // Draw center hole
        ctx.beginPath()
        ctx.arc(0, 0, this.radius * 0.2, 0, Math.PI * 2)
        ctx.fillStyle = "rgba(50, 50, 50, 0.3)"
        ctx.fill()

        ctx.restore()
      }

      update() {
        this.rotation += this.rotationSpeed
      }
    }

    // Create gears
    for (let i = 0; i < gearCount; i++) {
      const radius = Math.random() * 80 + 40
      const x = Math.random() * canvas.width
      const y = Math.random() * canvas.height
      gears.push(new Gear(x, y, radius))
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      gears.forEach((gear) => {
        gear.update()
        gear.draw(ctx)
      })

      requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full -z-10" aria-hidden="true" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/90 to-background/70 -z-10" />

      <div className="container px-4 md:px-6 z-10">
        <div className="flex flex-col items-center text-center space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-2"
          >
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">
              <span className="text-primary">Hooman Mohammadi</span>
            </h1>
            <p className="text-2xl md:text-3xl font-medium text-muted-foreground">Mechanical Engineer, EIT</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="max-w-[700px] space-y-4"
          >
            <p className="text-xl text-muted-foreground">Registered EIT with Professional Engineers of Ontario (PEO)</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg">
                <Link href="#projects">View Projects</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="#contact">Contact Me</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="container px-4 md:px-6 z-10 mt-12"
      >
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
          <Card className="bg-primary/10 border-primary/20">
            <CardContent className="flex flex-col items-center justify-center p-6 text-center">
              <h3 className="text-5xl font-bold mb-2">
                <CountUp end={5} suffix="+" />
              </h3>
              <p className="text-sm text-muted-foreground">Years of Experience</p>
            </CardContent>
          </Card>

          <Card className="bg-primary/10 border-primary/20">
            <CardContent className="flex flex-col items-center justify-center p-6 text-center">
              <h3 className="text-5xl font-bold mb-2">
                <CountUp end={8} />
              </h3>
              <p className="text-sm text-muted-foreground">Projects Completed</p>
            </CardContent>
          </Card>

          <Card className="bg-primary/10 border-primary/20">
            <CardContent className="flex flex-col items-center justify-center p-6 text-center">
              <h3 className="text-5xl font-bold mb-2">
                <CountUp end={20} suffix="+" />
              </h3>
              <p className="text-sm text-muted-foreground">Companies Worked With</p>
            </CardContent>
          </Card>
        </div>
      </motion.div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Link href="#about" className="text-muted-foreground hover:text-primary transition-colors">
          <ChevronDown size={32} />
          <span className="sr-only">Scroll down</span>
        </Link>
      </div>
    </section>
  )
}

