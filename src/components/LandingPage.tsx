'use client'

import { Card, CardContent } from "@/components/ui/card"
import { ChevronDown, ChevronUp, Code, DollarSign, FileText, Globe, Layout, Mail, Menu, Star, Users, Zap } from 'lucide-react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { useEffect, useState } from 'react'

import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Input } from "@/components/ui/input"
import Link from "next/link"

export default function LandingPage() {
  const [timeLeft, setTimeLeft] = useState(24 * 60 * 60); // 24 hours in seconds
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [isSticky, setIsSticky] = useState(false);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prevTime => prevTime > 0 ? prevTime - 1 : 0);
    }, 1000);

    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
      setShowForm(window.innerHeight + window.scrollY >= document.body.offsetHeight - 100);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      clearInterval(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const formatTime = (time: number) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', { name, email, phone });
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-white to-blue-50">
      {/* Announcement Banner */}
      <div className="w-full bg-[#FF6B6B] text-white py-3 px-4 text-center">
        <div className="container mx-auto">
          <p className="text-sm font-medium">
            Limited Time Offer! Enroll now and save $50. Time remaining: {formatTime(timeLeft)}
          </p>
        </div>
      </div>

      {/* Sticky Navigation */}
      <header className={`sticky top-0 z-50 bg-white shadow-md transition-all ${isSticky ? 'py-2' : 'py-4'}`}>
        <div className="container mx-auto px-4 lg:px-6 flex items-center justify-between">
          <Link className="flex items-center justify-center" href="#">
            <Code className="h-6 w-6 text-[#4ECDC4]" />
            <span className="ml-2 font-bold text-xl">Global WordPress Mastery</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link className="text-sm font-medium text-gray-600 hover:text-gray-900" href="#benefits">
              Benefits
            </Link>
            <Link className="text-sm font-medium text-gray-600 hover:text-gray-900" href="#bonuses">
              Bonuses
            </Link>
            <Link className="text-sm font-medium text-gray-600 hover:text-gray-900" href="#testimonials">
              Testimonials
            </Link>
          </nav>
          <Dialog>
            <DialogTrigger asChild>
              <Button className="bg-[#FF6B6B] hover:bg-[#FF5252] text-white">
                Enroll Now
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Enroll in WordPress Mastery Course</DialogTitle>
              </DialogHeader>
              <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                  <Input id="name" type="text" required value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                  <Input id="email" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
                  <Input id="phone" type="tel" required value={phone} onChange={(e) => setPhone(e.target.value)} />
                </div>
                <Button type="submit" className="w-full bg-[#4ECDC4] hover:bg-[#45B7AA] text-white">
                  Get Course Now
                </Button>
              </form>
            </DialogContent>
          </Dialog>
          <Button variant="ghost" className="md:hidden">
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-20 md:py-32">
          <div className="container px-4 md:px-6 mx-auto text-center">
            <div className="inline-block rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-[#4ECDC4] mb-6">
              GLOBAL WORDPRESS TRAINING
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 max-w-4xl mx-auto">
              Master Website Development with WordPress{" "}
              <span className="text-[#4ECDC4] border-b-4 border-[#4ECDC4]">
                and launch your global career
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
              Unlock the skills to build stunning websites and transform your financial future—start earning $500+ monthly from anywhere in the world!
            </p>
            <Dialog>
              <DialogTrigger asChild>
                <Button className="bg-[#FF6B6B] hover:bg-[#FF5252] text-white text-lg px-8 py-6 h-auto rounded-full font-medium">
                  Get Course Now → Start Your $500+/Month Journey
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Enroll in WordPress Mastery Course</DialogTitle>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                    <Input id="name" type="text" required value={name} onChange={(e) => setName(e.target.value)} />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                    <Input id="email" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
                    <Input id="phone" type="tel" required value={phone} onChange={(e) => setPhone(e.target.value)} />
                  </div>
                  <Button type="submit" className="w-full bg-[#4ECDC4] hover:bg-[#45B7AA] text-white">
                    Get Course Now
                  </Button>
                </form>
              </DialogContent>
            </Dialog>
          </div>
        </section>

        {/* Social Proof Section */}
        <section className="w-full py-12 bg-white overflow-hidden">
          <div className="container px-4 md:px-6 mx-auto text-center">
            <h3 className="text-2xl font-semibold mb-6">Trusted by 10,000+ students worldwide</h3>
            <div className="flex overflow-x-hidden">
              <div className="flex animate-scroll">
                {[...Array(10)].map((_, index) => (
                  <Image 
                    key={index}
                    src={`https://images.unsplash.com/photo-${1550000000000 + index}?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8${index + 1}%7Cafricanstudent&ixlib=rb-4.0.3&q=80&w=1080`} 
                    width={120} 
                    height={120} 
                    alt={`Student ${index + 1}`}
                    className="rounded-full mx-2"
                  />
                ))}
              </div>
              <div className="flex animate-scroll">
                {[...Array(10)].map((_, index) => (
                  <Image 
                    key={index + 10}
                    src={`https://images.unsplash.com/photo-${1560000000000 + index}?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h|${index + 11}%7Cafricanstudent&ixlib=rb-4.0.3&q=80&w=1080`} 
                    width={120} 
                    height={120} 
                    alt={`Student ${index + 11}`}
                    className="rounded-full mx-2"
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="w-full py-20" id="benefits">
          <div className="container px-4 md:px-6 mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Unbeatable Benefits for Your Global Success
            </h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  icon: <Code className="h-12 w-12 text-[#4ECDC4]" />,
                  title: "Hands-on Training",
                  description: "Build stunning websites with practical, real-world projects tailored for the global market."
                },
                {
                  icon: <Users className="h-12 w-12 text-[#4ECDC4]" />,
                  title: "Professional Portfolio",
                  description: "Create a portfolio that attracts high-paying clients from around the world."
                },
                {
                  icon: <DollarSign className="h-12 w-12 text-[#4ECDC4]" />,
                  title: "Earn $500+ Monthly",
                  description: "Learn strategies to secure clients and start earning a substantial income from WordPress development."
                },
                {
                  icon: <Globe className="h-12 w-12 text-[#4ECDC4]" />,
                  title: "Global Opportunities",
                  description: "Tap into international markets and expand your reach beyond borders."
                },
                {
                  icon: <Layout className="h-12 w-12 text-[#4ECDC4]" />,
                  title: "1000+ Premium Templates",
                  description: "Get access to a vast library of premium templates to jumpstart your projects."
                },
                {
                  icon: <FileText className="h-12 w-12 text-[#4ECDC4]" />,
                  title: "Certification",
                  description: "Earn a globally recognized certificate to validate your WordPress expertise."
                },
                {
                  icon: <Zap className="h-12 w-12 text-[#4ECDC4]" />,
                  title: "Cutting-edge Techniques",
                  description: "Stay ahead with the latest WordPress trends, including Gutenberg and headless CMS."
                },
                {
                  icon: <Star className="h-12 w-12 text-[#4ECDC4]" />,
                  title: "1-on-1 Mentorship",
                  description: "Get personalized guidance from experienced WordPress professionals."
                },
                {
                  icon: <Mail className="h-12 w-12 text-[#4ECDC4]" />,
                  title: "Lifetime Support",
                  description: "Access our dedicated support team and community for ongoing assistance."
                }
              ].map((benefit, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <div className="mb-4 p-2 bg-blue-50 rounded-full">{benefit.icon}</div>
                    <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Bonuses Section */}
        <section className="w-full py-20 bg-gray-50" id="bonuses">
          <div className="container px-4 md:px-6 mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Exclusive Bonuses to Accelerate Your Success
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              {[
                {
                  title: "Global Market Website Design Proposal Template",
                  description: "Secure international clients with confidence using our proven proposal template."
                },
                {
                  title: "20 High-Converting Landing Page Templates",
                  description: "Save time and impress clients with beautifully designed, conversion-optimized templates."
                },
                {
                  title: "Access to Global WordPress Developers Community",
                  description: "Join a network of learners and professionals from around the world for growth and collaboration."
                },
                {
                  title: "SEO Mastery Course",
                  description: "Learn how to rank WordPress sites globally and attract organic traffic."
                },
                {
                  title: "Website Speed Optimization Guide",
                  description: "Discover techniques to create lightning-fast WordPress sites that users love."
                },
                {
                  title: "Client Acquisition Masterclass",
                  description: "Learn proven strategies to find and secure high-paying clients worldwide."
                }
              ].map((bonus, index) => (
                <Card key={index} className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2">{bonus.title}</h3>
                    <p className="text-gray-600">{bonus.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="w-full py-20" id="testimonials">
          <div className="container px-4 md:px-6 mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Success Stories from Around the Globe
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  name: "Oluwaseun Ajayi",
                  country: "Nigeria",
                  role: "Freelance Developer",
                  content: "This course transformed my career. I'm now earning over $1000 monthly as a freelance WordPress developer, working with clients globally!",
                  image: "https://images.unsplash.com/photo-1506099914961-765be7a97019?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8Nnx8YWZyaWNhbiUyMG1hbnxlbnwwfHx8fDE2ODcxODczMzd8MA&ixlib=rb-4.0.3&q=80&w=1080"
                },
                {
                  name: "Amina Diallo",
                  country: "Senegal",
                  role: "Agency Owner",
                  content: "The skills I learned helped me start my own web design agency. We're now serving clients across Africa and Europe!",
                  image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8Mnx8YWZyaWNhbiUyMHdvbWFufGVufDB8fHx8MTY4NzE4NzM0OXww&ixlib=rb-4.0.3&q=80&w=1080"
                },
                {
                  name: "Kwame Osei",
                  country: "Ghana",
                  role: "E-commerce Specialist",
                  content: "This course provided the foundation for my e-commerce career. I've built over 50 online stores for businesses worldwide!",
                  image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTB8fGFmcmljYW4lMjBtYW58ZW58MHx8fHwxNjg3MTg3MzM3fDA&ixlib=rb-4.0.3&q=80&w=1080"
                },
                {
                  name: "Zainab Ahmed",
                  country: "Kenya",
                  role: "WordPress Consultant",
                  content: "The global perspective of this course helped me secure consulting gigs with international companies. I'm living my dream!",
                  image: "https://images.unsplash.com/photo-1542596594-b47fea509622?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8NHx8YWZyaWNhbiUyMHdvbWFufGVufDB8fHx8MTY4NzE4NzM0OXww&ixlib=rb-4.0.3&q=80&w=1080"
                },
                {
                  name: "Chidi Okonkwo",
                  country: "Nigeria",
                  role: "WordPress Theme Developer",
                  content: "Thanks to this course, I've published multiple themes on ThemeForest. My passive income now exceeds $2000 monthly!",
                  image: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8OHx8YWZyaWNhbiUyMG1hbnxlbnwwfHx8fDE2ODcxODczMzd8MA&ixlib=rb-4.0.3&q=80&w=1080"
                },
                {
                  name: "Fatima Diop",
                  country: "Senegal",
                  role: "Corporate Web Manager",
                  content: "The course provided practical skills that I use daily in my corporate role. It's been instrumental in my career growth!",
                  image: "https://images.unsplash.com/photo-1589156229687-496a31ad1d1f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8Nnx8YWZyaWNhbiUyMHdvbWFufGVufDB8fHx8MTY4NzE4NzM0OXww&ixlib=rb-4.0.3&q=80&w=1080"
                },
                {
                  name: "Abebe Tadesse",
                  country: "Ethiopia",
                  role: "Freelance Developer",
                  content: "I've tripled my income since taking this course. The global network I've built through the community is priceless!",
                  image: "https://images.unsplash.com/photo-1507152832244-10d45c7eda57?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTJ8fGFmcmljYW4lMjBtYW58ZW58MHx8fHwxNjg3MTg3MzM3fDA&ixlib=rb-4.0.3&q=80&w=1080"
                },
                {
                  name: "Nala Muthoni",
                  country: "Kenya",
                  role: "WordPress Security Expert",
                  content: "This course laid the foundation for my specialization in WordPress security. Now, I consult for companies worldwide!",
                  image: "https://images.unsplash.com/photo-1531384441138-2736e62e0919?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8OHx8YWZyaWNhbiUyMHdvbWFufGVufDB8fHx8MTY4NzE4NzM0OXww&ixlib=rb-4.0.3&q=80&w=1080"
                },
                {
                  name: "Yannick Mounkala",
                  country: "Congo",
                  role: "WordPress Plugin Developer",
                  content: "The course inspired me to create WordPress plugins. My latest plugin has over 50,000 active installations!",
                  image: "https://images.unsplash.com/photo-1548282053-1e9a3b71b420?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTR8fGFmcmljYW4lMjBtYW58ZW58MHx8fHwxNjg3MTg3MzM3fDA&ixlib=rb-4.0.3&q=80&w=1080"
                },
                {
                  name: "Amara Okeke",
                  country: "Nigeria",
                  role: "WordPress Trainer",
                  content: "After taking this course, I started training others. I've now taught WordPress to over 1000 students across Africa!",
                  image: "https://images.unsplash.com/photo-1531384441138-2736e62e0919?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTB8fGFmcmljYW4lMjB3b21hbnxlbnwwfHx8fDE2ODcxODczNDl8MA&ixlib=rb-4.0.3&q=80&w=1080"
                }
              ].map((testimonial, index) => (
                <Card key={index} className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <p className="text-gray-600 mb-4">&ldquo;{testimonial.content}&ldquo;</p>
                    <div className="flex items-center">
                      <Image src={testimonial.image} width={48} height={48} alt={testimonial.name} className="rounded-full mr-4" />
                      <div>
                        <h4 className="font-bold">{testimonial.name}</h4>
                        <p className="text-sm text-gray-500">{testimonial.role}, {testimonial.country}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="w-full py-20 bg-gray-50">
          <div className="container px-4 md:px-6 mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4 max-w-3xl mx-auto">
              {[
                {
                  question: "Is this course suitable for beginners with no coding experience?",
                  answer: "Our course is designed to cater to beginners and advanced users alike. We start from the basics and progressively move to more advanced topics, ensuring that everyone can follow along regardless of their initial skill level."
                },
                {
                  question: "How long do I have access to the course materials?",
                  answer: "You have lifetime access to the course content, including all future updates. This allows you to learn at your own pace and revisit the material whenever you need a refresher."
                },
                {
                  question: "Is there a money-back guarantee?",
                  answer: "Yes, we offer a 30-day money-back guarantee. If you're not satisfied with the course, you can request a full refund within 30 days of your purchase."
                },
                {
                  question: "Will this course help me find clients globally?",
                  answer: "Yes! We provide guidance on how to find and secure clients in the global market. Our course includes a bonus Global Market Website Design Proposal Template to help you pitch to potential clients effectively."
                },
                {
                  question: "How soon can I start earning after completing the course?",
                  answer: "Many of our students start earning within weeks of completing the course. However, individual results may vary based on effort, dedication, and market conditions. We provide strategies to help you start earning $500+ monthly as quickly as possible."
                },
                {
                  question: "Do I need to purchase any additional tools or software?",
                  answer: "Most of what you need is freely available. We do recommend some premium tools and themes, but these are optional and we provide alternatives where possible."
                }
              ].map((faq, index) => (
                <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                  <button
                    className="flex justify-between items-center w-full text-left p-4 focus:outline-none"
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  >
                    <h3 className="text-lg font-semibold">{faq.question}</h3>
                    {openFaq === index ? <ChevronUp className="h-5 w-5 text-gray-500" /> : <ChevronDown className="h-5 w-5 text-gray-500" />}
                  </button>
                  {openFaq === index && (
                    <div className="p-4 bg-white">
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-20" id="enroll">
          <div className="container px-4 md:px-6 mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to Transform Your Future in the Global Tech Industry?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Enroll now and start your journey to becoming a professional WordPress developer earning $500+ monthly from anywhere in the world.
            </p>
            <Dialog>
              <DialogTrigger asChild>
                <Button className="bg-[#FF6B6B] hover:bg-[#FF5252] text-white text-lg px-8 py-6 h-auto rounded-full font-medium">
                  Get Course Now - Limited Time Offer →
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Enroll in WordPress Mastery Course</DialogTitle>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                    <Input id="name" type="text" required value={name} onChange={(e) => setName(e.target.value)} />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                    <Input id="email" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
                    <Input id="phone" type="tel" required value={phone} onChange={(e) => setPhone(e.target.value)} />
                  </div>
                  <Button type="submit" className="w-full bg-[#4ECDC4] hover:bg-[#45B7AA] text-white">
                    Get Course Now
                  </Button>
                </form>
              </DialogContent>
            </Dialog>
            <p className="mt-4 text-sm text-gray-500">
              30-day money-back guarantee • Lifetime access • Instant access
            </p>
          </div>
        </section>
      </main>

      <footer className="border-t border-gray-200 py-8">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <h3 className="font-bold mb-4">About Us</h3>
              <p className="text-sm text-gray-600">Global WordPress Mastery is dedicated to helping you become a professional WordPress developer in the growing global tech industry.</p>
            </div>
            <div>
              <h3 className="font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="text-sm text-gray-600 hover:text-gray-900">Home</Link></li>
                <li><Link href="#benefits" className="text-sm text-gray-600 hover:text-gray-900">Benefits</Link></li>
                <li><Link href="#bonuses" className="text-sm text-gray-600 hover:text-gray-900">Bonuses</Link></li>
                <li><Link href="#testimonials" className="text-sm text-gray-600 hover:text-gray-900">Testimonials</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="text-sm text-gray-600 hover:text-gray-900">Terms of Service</Link></li>
                <li><Link href="#" className="text-sm text-gray-600 hover:text-gray-900">Privacy Policy</Link></li>
                <li><Link href="#" className="text-sm text-gray-600 hover:text-gray-900">Refund Policy</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Contact Us</h3>
              <p className="text-sm text-gray-600">Email: support@globalwpmastery.com</p>
              <p className="text-sm text-gray-600">Phone: +1 (555) 123-4567</p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-200 flex flex-col sm:flex-row justify-between items-center">
            <p className="text-sm text-gray-500">
              © 2024 Global WordPress Mastery. All rights reserved.
            </p>
            <div className="flex gap-4 mt-4 sm:mt-0">
              <Link href="#" aria-label="Facebook"><Mail className="h-6 w-6 text-gray-500 hover:text-gray-900" /></Link>
              <Link href="#" aria-label="Twitter"><Mail className="h-6 w-6 text-gray-500 hover:text-gray-900" /></Link>
              <Link href="#" aria-label="Instagram"><Mail className="h-6 w-6 text-gray-500 hover:text-gray-900" /></Link>
              <Link href="#" aria-label="LinkedIn"><Mail className="h-6 w-6 text-gray-500 hover:text-gray-900" /></Link>
            </div>
          </div>
        </div>
      </footer>

      {/* Pop-up Form */}
      {showForm && (
        <Dialog open={showForm} onOpenChange={setShowForm}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Don&lsquo;t Miss This Opportunity!</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4 mt-4">
              <div>
                <label htmlFor="popup-name" className="block text-sm font-medium text-gray-700">Name</label>
                <Input id="popup-name" type="text" required value={name} onChange={(e) => setName(e.target.value)} />
              </div>
              <div>
                <label htmlFor="popup-email" className="block text-sm font-medium text-gray-700">Email</label>
                <Input id="popup-email" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div>
                <label htmlFor="popup-phone" className="block text-sm font-medium text-gray-700">Phone</label>
                <Input id="popup-phone" type="tel" required value={phone} onChange={(e) => setPhone(e.target.value)} />
              </div>
              <Button type="submit" className="w-full bg-[#4ECDC4] hover:bg-[#45B7AA] text-white">
                Enroll Now
              </Button>
            </form>
          </DialogContent>
        </Dialog>
      )}
    </div>
  )
}