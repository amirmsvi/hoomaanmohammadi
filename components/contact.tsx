"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Mail, Phone, MapPin, Linkedin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  subject: z.string().min(5, {
    message: "Subject must be at least 5 characters.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      console.log(values);
      setIsSubmitting(false);
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      form.reset();
    }, 1500);
  }

  return (
    <section id="contact" className="py-24 bg-gray-900">
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
            <div className="relative px-6 py-2 bg-gray-900 rounded-md border border-teal-500/20">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                Get In <span className="text-teal-400">Touch</span>
              </h2>
            </div>
          </div>
          <p className="mt-4 text-xl text-gray-300 max-w-[800px]">
            Have a project in mind or want to discuss potential collaborations?
            I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="bg-gray-800 border-gray-700 hover:border-teal-500/30 transition-colors h-full">
              <CardHeader className="bg-gradient-to-r from-gray-800 to-gray-900 border-b border-gray-700">
                <CardTitle className="flex items-center text-white group">
                  <div className="p-2 rounded-full bg-teal-900/30 mr-3 group-hover:bg-teal-800/50 transition-colors">
                    <Mail className="h-5 w-5 text-teal-400" />
                  </div>
                  Contact Information
                </CardTitle>
                <CardDescription className="text-gray-400">
                  Feel free to reach out through any of these channels
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 pt-6">
                <div className="flex items-center text-gray-200">
                  <Mail className="h-5 w-5 text-teal-400 mr-3" />
                  <p>hoomaanmohammadi@gmail.com</p>
                </div>
                <div className="flex items-center text-gray-200">
                  <Phone className="h-5 w-5 text-teal-400 mr-3" />
                  <p>226 350 4565</p>
                </div>
                <div className="flex items-center text-gray-200">
                  <MapPin className="h-5 w-5 text-teal-400 mr-3" />
                  <p>M4J 3M3, Toronto, Ontario, Canada</p>
                </div>

                <div className="pt-6 border-t border-gray-700">
                  <h4 className="text-sm font-medium mb-3 text-gray-300">
                    Connect with me
                  </h4>
                  <div className="flex space-x-4">
                    <Button
                      variant="outline"
                      size="icon"
                      asChild
                      className="border-gray-700 text-gray-300 hover:text-teal-400 hover:border-teal-500/50 hover:bg-gray-800"
                    >
                      <a
                        href="https://www.linkedin.com/in/hoomaanmohammadi/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn profile"
                      >
                        <Linkedin className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
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
            <Card className="bg-gray-800 border-gray-700 hover:border-teal-500/30 transition-colors">
              <CardHeader className="bg-gradient-to-r from-gray-800 to-gray-900 border-b border-gray-700 rounded-t-lg">
                <CardTitle className="text-white">Send a Message</CardTitle>
                <CardDescription className="text-gray-400">
                  Fill out the form below and I'll get back to you as soon as
                  possible
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-4"
                  >
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-gray-200">Name</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Your name"
                              {...field}
                              className="bg-gray-700 border-gray-600 text-gray-200 focus:border-teal-500 focus:ring-teal-500/20"
                            />
                          </FormControl>
                          <FormMessage className="text-red-400" />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-gray-200">Email</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Your email"
                              {...field}
                              className="bg-gray-700 border-gray-600 text-gray-200 focus:border-teal-500 focus:ring-teal-500/20"
                            />
                          </FormControl>
                          <FormMessage className="text-red-400" />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-gray-200">
                            Subject
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Message subject"
                              {...field}
                              className="bg-gray-700 border-gray-600 text-gray-200 focus:border-teal-500 focus:ring-teal-500/20"
                            />
                          </FormControl>
                          <FormMessage className="text-red-400" />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-gray-200">
                            Message
                          </FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Your message"
                              className="min-h-[120px] bg-gray-700 border-gray-600 text-gray-200 focus:border-teal-500 focus:ring-teal-500/20"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage className="text-red-400" />
                        </FormItem>
                      )}
                    />
                    <Button
                      type="submit"
                      className="w-full bg-teal-600 hover:bg-teal-700 text-white"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
