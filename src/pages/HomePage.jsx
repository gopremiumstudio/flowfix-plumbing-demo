import CountUp from "react-countup";
import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Phone, Zap, Droplets, Flame, AlertTriangle, Wrench, Bath, CheckCircle2 } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServiceCard from '@/components/ServiceCard';
import TestimonialCard from '@/components/TestimonialCard';

function HomePage() {
  const services = [
    {
      icon: Zap,
      image: '/images/1000019087.webp',
      title: '24/7 Emergency Plumbing',
      featured:true,
      buttonText:'Call Now',
      description: 'Fast emergency plumbers available day and night across Sydney.',
      features: [
        'Available 24/7',
        '30-60 min response',
        'Burst pipe repairs',
        'Emergency leak detections'
      ],
      link: '/quote',
      variant: 'featured'
    },
    {
      icon: Droplets,
      image:'/images/1000019122.webp',
      title: 'Blocked Drains',
      description: 'Advanced drain clearing solutions using CCTV inspections and high-pressure jetting.',
      features: [
        'CCTV drain inspections',
        'High-pressure jetting',
        'Tree root removal',
        'Same-day service'
      ],
      link: '/quote',
      variant: 'default'
    },
    {
      icon: Flame,
      image:'/images/1000019128.webp',
      title: 'Hot Water Systems',
      description: 'Installation, repair, and maintenance of water heaters.',
      features: [
        'Gas and electric systems',
        'Same-day repairs',
        'Energy-efficient upgrades',
        'Regular servicing'
      ],
      link: '/quote',
      variant: 'default'
    },
    {
      icon: AlertTriangle,
      image:'/images/1000019130.webp',
      title: 'Leak Repairs',
      description: 'Expert leak detection and repair services.',
      features: [
        'Advanced leak detection',
        'Pipe repairs and replacement',
        'Tap and fixture leaks',
        'Water damage prevention'
      ],
      link: '/quote',
      variant: 'default'
    },
    {
      icon: Wrench,
      image:'images/1000019132.webp',
      title: 'Pipe Maintenance',
      description: 'Preventative care to keep your plumbing running smoothly.',
      features: [
        'Regular inspections',
        'Pipe cleaning',
        'Corrosion prevention',
        'System upgrades'
      ],
      link: '/quote',
      variant: 'default'
    },
    {
icon: Bath,
image: 'images/1000020648.webp',
title: 'Bathroom Renovations',
description: 'Professional bathroom plumbing installations and renovation services across Sydney.',
features: [
'New fixture installation',
'Shower & bath upgrades',
'Toilet replacements',
'Complete plumbing fit-outs'
],
link: '/quote',
variant: 'default'
}
];

  

  

  const stats = [
  { number: '10+', label: 'Years Experience' },
  { number: '5000+', label: 'Happy Customers' },
  { number: '24/7', label: 'Emergency Response' },
  { number: '100%', label: 'Licensed & Insured' }
];


   const testimonials = [
    {
      name: 'Marcus Chen',
      rating: 5,
      text: 'Had a burst pipe at 2am and FlowFix was here within 30 minutes. They fixed it quickly and cleaned up everything. Absolute lifesavers.',
      service: 'Emergency Burst Pipe Repair',
      location: 'Downtown District'
    },
    {
      name: 'Sofia Rodriguez',
      rating: 5,
      text: 'Our drains were completely blocked and causing major issues. FlowFix cleared them professionally and showed us the camera footage. Very thorough work.',
      service: 'Blocked Drain Cleaning',
      location: 'Harbor View'
    },
    {
      name: 'Anika Patel',
      rating: 5,
      text: 'Needed a new hot water system installed. The team was professional, efficient, and the price was fair. Hot water has never been better.',
      service: 'Hot Water System Installation',
      location: 'Riverside Heights'
    },
    {
      name: 'Chen Wei',
      rating: 5,
      text: 'Fixed our leaking tap that had been dripping for months. The plumber explained everything clearly and the work was done perfectly. No more wasted water.',
      service: 'Leak Detection & Repair',
      location: 'Oakwood Valley'
    },
    {
      name: 'Isabella Martinez',
      rating: 5,
      text: 'FlowFix upgraded all the plumbing in our office building. They worked after hours to avoid disrupting our business. Professional and considerate.',
      service: 'Commercial Pipe System Upgrade',
      location: 'Maple Grove'
    },
    {
      name: 'Kwame Asante',
      rating: 5,
      text: 'The preventative maintenance program has saved us thousands. They caught a major issue before it became a disaster. Highly recommend their commercial services.',
      service: 'Commercial Preventative Maintenance',
      location: 'Sunset Hills'
    },
    {
      name: 'Lucia Torres',
      rating: 5,
      text: 'Bathroom renovation plumbing was handled perfectly. New fixtures look amazing and everything works flawlessly. Great attention to detail.',
      service: 'Bathroom Fixture Installation',
      location: 'Downtown District'
    },
    {
      name: 'Raj Patel',
      rating: 5,
      text: 'Emergency drain clearing at our restaurant. They arrived fast, fixed the problem, and we were back in business within an hour. Outstanding service.',
      service: 'Emergency Commercial Drain Service',
      location: 'Harbor View'
    },
    {
      name: 'Maya Bergstrom',
      rating: 5,
      text: 'Complete repiping of our older home. The team was respectful, clean, and the work quality is excellent. No more low water pressure issues.',
      service: 'Residential Repiping',
      location: 'Riverside Heights'
    }
  ];

  return (
    <>
      <Helmet>
        <title>FlowFix Plumbing - 24/7 Emergency Plumbing Services</title>
        <meta name="description" content="Professional plumbing services for homes and businesses. Emergency repairs, blocked drains, hot water systems, leak detection. Available 24/7. Licensed and insured." />
      </Helmet>

      <div className="min-h-screen flex flex-col pb-8">
        <div className="bg-red-600 text-white py-2 ticker-wrapper">
  <div className="ticker-track text-sm font-semibold">
    <span>🚨 24/7 Emergency Plumbing Service • Call 1300 555 247 •</span>
  </div>
</div>
        <Header />

        {/* Hero Section */}
        <section className="relative min-h-[70vh] lg:min-h-[580px] flex items-center">
          <div className="absolute inset-0 z-0">
            <img
  src="/images/1000021335.webp"
  alt="Professional plumber working on pipes"
  loading="eager"
  fetchPriority="high"
  className="w-full h-full object-cover"
/>
            <div className="absolute inset-0 z-0 bg-gradient-to-r from-black/80 via-black/65 to-black/40"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-6 lg:py-4">

  <div className="grid lg:grid-cols-2 gap-8 items-center">
    {/* LEFT COLUMN */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >

      <div className="inline-flex items-center gap-2 bg-red-600 text-white px-4 py-1.5 rounded-full text-sm font-semibold mb-5">
  🚨 24/7 Emergency Response
</div>

<h1 className="text-[2.6rem] md:text-[3.8rem] lg:text-[4.3rem] font-extrabold leading-[1.05] text-white">
  <>
  24/7 Emergency <br />
  Plumbers <span className="text-blue-400">Across</span> <br />
  <span className="text-yellow-300 text-[1.15em] font-black">Sydney</span>
</>
</h1>

<p className="text-lg text-white/90 leading-relaxed mb-5 max-w-prose">
  Blocked drains, burst pipes, hot water repairs and emergency plumbing.
  Fast response times, upfront pricing and trusted local plumbers available 24/7.
</p>
<div className="mb-5 text-white text-sm">
  <span className="text-yellow-400">★★★★★</span>
  <span className="font-semibold ml-2">4.9 Rating</span>
  <span className="text-white/90 ml-2">
    • 15+ Years Serving Sydney
  </span>
</div>
<div className="grid grid-cols-2 gap-3 mb-5">
  <span className="w-full flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-full px-3 py-2 text-white">
  ⚡ Fast Response
  </span>

  <span className="w-full flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-full px-3 py-2 text-white">
    💲 Upfront Pricing
  </span>

  <span className="w-full flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-full px-3 py-2 text-white">
    🛠️ Licensed & Insured
  </span>

  <span className="w-full flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-full px-3 py-2 text-white">
  🏆 15+ Years Exp.
</span>
</div>

<div className="flex flex-col sm:flex-row gap-4">
  <Button
  asChild
  size="lg"
  className="w-full h-10 rounded-xl font-semibold bg-gradient-to-r from-red-600 via-red-500 to-red-600 hover:from-red-700 hover:to-red-600 text-white font-bold text-xl shadow-[0_0_35px_rgba(239,68,68,.45)] hover:shadow-[0_0_50px_rgba(239,68,68,.65)] transition-all duration-300 hover:scale-[1.02]"
>
  <a href="tel:1300555247">
    <Phone className="w-5 h-5 mr-2" />
    Call 1300 555 247 Now
  </a>
</Button>
  <p className="text-center text-white/80 text-xs mt-3">
  ✓ No Call Out Fee • Fixed Upfront Pricing
</p>

        
</div>


    </motion.div>

    {/* RIGHT COLUMN */}
    <motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
>
  <div className="bg-gradient-to-br from-[#F8FBFF]/95 to-[#EAF4FF]/95 backdrop-blur-xl rounded-[32px] shadow-[0_20px_60px_rgba(0,0,0,0.25)] border border-white/30 p-5 lg:p-4">

    <div className="text-center mb-4">
      <span className="text-blue-600 text-sm font-bold uppercase tracking-widest">
        Available 24/7 Across Sydney
      </span>
    </div>

    <h3 className="text-xl font-bold mb-1 text-gray-900">
      Get Your Free Plumbing Quote
    </h3>

    <p className="text-gray-600 mb-4">
  ✓ Same Day Service <br />
  ✓ Fixed Upfront Pricing <br />
  ✓ Licensed & Fully Insured
</p>


    <form
      className="space-y-2"
      onSubmit={(e) => {
        e.preventDefault();
        alert("Thank you! We will contact you shortly.");
      }}
    >
      <input
        type="text"
        placeholder="Full Name"
        className="w-full bg-gray-50 border-2 border-gray-200 rounded-2xl px-5 py-4 focus:border-blue-500 outline-none"

      />

      <input
        type="tel"
        placeholder="Phone Number"
        className="w-full bg-gray-50 border-2 border-gray-200 rounded-2xl px-5 py-4 focus:border-blue-500 outline-none"

      />

      

      

      <textarea
        rows={1}
        placeholder="Tell us about your plumbing issue..."
        className="w-full bg-gray-50 border-2 border-gray-200 rounded-2xl px-5 py-4 focus:border-blue-500 outline-none"

      />

      <Button className="w-full h-12 text-base font-bold rounded-2xl shadow-lg bg-red-600 hover:bg-red-700">
        GET MY FREE QUOTE →
      </Button>
    </form>

  </div>
</motion.div>


  </div>

</div>

        </section>

        {/* Services Section */}
        <section
  className="py-16 relative"
  style={{
    backgroundImage:
      "linear-gradient(rgba(3,10,30,0.70), rgba(3,10,30,0.70)), url('/images/1000020794.webp')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}
>
<div className="absolute inset-0 overflow-hidden">
  <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl"></div>

  <div className="absolute top-1/2 -right-40 w-[500px] h-[500px] bg-cyan-300/15 rounded-full blur-3xl"></div>

  <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
</div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center -mt-8 mb-12"
            >
              
              <div className="inline-flex items-center gap-2.5 bg-white/95 backdrop-blur-md border border-blue-100 rounded-full px-5 py-2.5 shadow-lg mb-3">
  <span className="text-yellow-500 text-base">★★★★★</span>
  <span className="text-[15px] font-bold text-blue-900">
    Trusted Across Sydney
  </span>
</div>

<div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-50 to-amber-100 border border-yellow-300 rounded-full px-3 py-1.5 mt-1 shadow-sm">
  <span className="text-base">👥</span>
  <span className="text-sm font-semibold text-amber-700">
    500+ Happy Customers
  </span>
</div>
              <h2 className="text-[2.7rem] md:text-6xl font-black leading-[1.05] tracking-tight text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.35)] mt-6 mb-3">

  Sydney's Emergency <br />
  <span className="text-cyan-200 font-bold">
    Plumbing Specialists
  </span>
</h2>
              <p className="text-[1.1rem] text-white/90 leading-9 max-w-md mx-auto">
                From emergency plumbing and blocked drains to hot water systems and leak repairs, our licensed plumbers provide fast, reliable service across Sydney.
              </p>
              

            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.slice(0, 3).map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <ServiceCard {...service} />
                </motion.div>
              ))}
            </div>

         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
  {services.slice(3, 6).map((service, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <ServiceCard {...service} />
    </motion.div>
  ))}
</div>
          </div>
        </section>

       {/* Meet The Owner Section */}
<section className="relative overflow-hidden py-8 lg:py-12 bg-gradient-to-br from-[#F8FBFF] via-[#F3F9FF] to-[#EEF7FF]">

  {/* Background Glow */}
  <div className="absolute -top-24 -left-24 w-80 h-80 bg-blue-200/40 rounded-full blur-[120px]" />
  <div className="absolute bottom-0 -right-24 w-80 h-80 bg-cyan-200/40 rounded-full blur-[120px]" />

  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-center">

      {/* Owner Image */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >

        <div className="relative overflow-hidden rounded-[32px] shadow-[0_25px_60px_rgba(15,23,42,.15)] h-[390px] lg:h-[560px]">

          <img
            src="/images/1000020743.webp"
            alt="FlowFix Plumbing Owner"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 via-transparent to-transparent"></div>

        </div>

      </motion.div>

      {/* Owner Message */}
      <motion.div
  initial={{ opacity: 0, x: -30 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.7 }}
>

        <div className="bg-white rounded-[32px] p-5 lg:p-6 border border-slate-200 shadow-[0_18px_50px_rgba(15,23,42,.08)]">

  <span className="inline-block text-xs font-bold tracking-[0.25em] uppercase text-blue-600">
    Meet The Owner
  </span>

  <h2 className="mt-2 text-3xl lg:text-4xl font-black text-slate-900">
    Michael Thompson
  </h2>

  <p className="mt-1 text-base font-semibold text-blue-600">
    Owner & Licensed Master Plumber
  </p>

  <div className="mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500"></div>

  <blockquote className="mt-4 border-l-4 border-blue-500 pl-4 italic text-[15px] leading-7 text-slate-600">
    "Every home deserves honest advice, quality workmanship and service you can trust. Thank you for choosing FlowFix Plumbing—we're proud to be your local plumbing experts."
  </blockquote>

  <div className="mt-4 pt-3 flex items-center justify-between">

    <div>
      <p
        className="text-[32px] leading-none text-slate-900"
        style={{ fontFamily: "'Dancing Script', cursive" }}
      >
        Michael Thompson
      </p>

      <p className="text-sm text-blue-600 font-medium mt-1">
        Founder • FlowFix Plumbing
      </p>
    </div>

    <div className="w-12 h-[2px] rounded-full bg-gradient-to-r from-blue-600 to-cyan-500"></div>

  </div>

</div>


      </motion.div>

    </div>

  </div>

</section>





{/* Statistics Section */}
<section className="relative overflow-hidden py-10 lg:py-12 bg-gradient-to-br from-[#0B3D91] via-[#1565C0] to-[#42A5F5]">

  {/* Background Glow */}
  <div className="absolute inset-0 pointer-events-none">

    <div className="absolute -top-24 -left-24 w-72 h-72 bg-cyan-300/20 rounded-full blur-[120px]"></div>

    <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-blue-300/20 rounded-full blur-[120px]"></div>

    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,.08),transparent_65%)]"></div>

  </div>

  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    {/* Header */}
    <div className="text-center mb-8">

      <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 backdrop-blur-2xl border border-white/20 shadow-[0_15px_40px_rgba(255,255,255,.08)] mb-4">

        <span className="text-yellow-300">⭐</span>

        <span className="text-white text-sm font-semibold">
          Sydney's Trusted Plumbing Experts
        </span>

      </div>

      <h2 className="text-3xl md:text-5xl font-black leading-tight text-white">

        Trusted By
        <span className="block text-cyan-200">
          Thousands Across Sydney
        </span>

      </h2>

      <p className="mt-3 text-blue-100 max-w-xl mx-auto text-base leading-7">
        Fast response, honest pricing and quality workmanship trusted by
        homeowners across Sydney.
      </p>

    </div>

    {/* Stats */}

    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">

      {/* Card 1 */}

      <div className="group rounded-[28px] bg-white/10 backdrop-blur-2xl border border-white/20 p-5 min-h-[120px] flex flex-col justify-center text-center shadow-[0_20px_45px_rgba(0,0,0,.18)] hover:bg-white/15 hover:-translate-y-2 hover:scale-[1.02] transition-all duration-300">

        <div className="text-3xl md:text-5xl font-black bg-gradient-to-r from-white to-cyan-100 bg-clip-text text-transparent">

          <CountUp end={1500} duration={2.5} separator="," />+

        </div>

        <p className="mt-2 text-blue-100 text-sm">
          Happy Customers
        </p>

      </div>

      {/* Card 2 */}

      <div className="group rounded-[28px] bg-white/10 backdrop-blur-2xl border border-white/20 p-5 min-h-[120px] flex flex-col justify-center text-center shadow-[0_20px_45px_rgba(0,0,0,.18)] hover:bg-white/15 hover:-translate-y-2 hover:scale-[1.02] transition-all duration-300">

        <div className="text-3xl md:text-5xl font-black bg-gradient-to-r from-white to-cyan-100 bg-clip-text text-transparent">

          24/7

        </div>

        <p className="mt-2 text-blue-100 text-sm">
          Emergency Service
        </p>

      </div>


      {/* Card 3 */}

      <div className="group rounded-[28px] bg-white/10 backdrop-blur-2xl border border-white/20 p-5 min-h-[120px] flex flex-col justify-center text-center shadow-[0_20px_45px_rgba(0,0,0,.18)] hover:bg-white/15 hover:-translate-y-2 hover:scale-[1.02] transition-all duration-300">

        <div className="text-3xl md:text-5xl font-black leading-none bg-gradient-to-r from-white to-cyan-100 bg-clip-text text-transparent">

          Same Day

        </div>

        <p className="mt-2 text-blue-100 text-sm">
          Fast Response
        </p>

      </div>

      {/* Card 4 */}

      <div className="group rounded-[28px] bg-gradient-to-br from-white/20 to-cyan-300/10 backdrop-blur-2xl border border-cyan300/40 p-5 min-h-[120px] flex flex-col justify-center text-center shadow-[0_20px_45px_rgba(0,0,0,.18)] hover:bg-white/15 hover:-translate-y-2 hover:scale-[1.02] transition-all duration-300">

        <div className="text-3xl md:text-5xl font-black bg-gradient-to-r from-white to-cyan-100 bg-clip-text text-transparent">

          <CountUp end={4.9} decimals={1} duration={2} />★

        </div>

        <p className="mt-2 text-blue-100 text-sm">
          Google Rating
        </p>

      </div>

    </div>

  </div>

</section>



 
       {/* Testimonials Preview */}

<section className="pt-6 pb-16 bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.5 }}
  className="text-center mb-10"
>

  <div className="inline-flex items-center gap-2 px-5 py-2.5 -mt-12 mb-4 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-sm font-semibold shadow-[0_10px_30px_rgba(37,99,235,.30)]">
  ⭐ Trusted by Sydney Homeowners
</div>

  <h2
  className="text-3xl md:text-5xl font-black text-slate-900 mb-5"
  style={{
    letterSpacing: "-0.02em",
    textWrap: "balance"
  }}
>
  Real Reviews.
  <span className="block bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
    Real Results.
  </span>
</h2>

  <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
  Hundreds of Sydney homeowners trust FlowFix Plumbing for fast response,
  honest pricing and workmanship that lasts.
</p>

</motion.div>

<div className="overflow-hidden">

  <motion.div
    className="flex gap-6"
    animate={{
      x: [0, -8000]
    }}
    transition={{
      duration: 80,
      repeat: Infinity,
      ease: "linear"
    }}
  >

    {[...testimonials, ...testimonials, ...testimonials].map((testimonial, index) => (

      <div
        key={`${testimonial.name}-${index}`}
        className="min-w-[340px] md:min-w-[420px] flex-shrink-0"
      >
        <TestimonialCard {...testimonial} />
      </div>

    ))}

  </motion.div>

</div>

<div className="text-center mt-4">

  <Button
  asChild
  size="lg"
  className="rounded-2xl px-8 py-6 bg-gradient-to-r from-blue-600 to-cyan-500 text-white border-0 shadow-[0_20px_45px_rgba(37,99,235,.35)] hover:shadow-[0_25px_60px_rgba(37,99,235,.45)] hover:scale-105 transition-all duration-300"
>
  <Link to="/testimonials">
    Read All Reviews →
  </Link>
</Button>


</div>

  </div></section>


{/* Recent Projects */}
<section
  className="pt-8 pb-16 relative overflow-hidden"
  style={{
  background: `
  radial-gradient(circle at 15% 15%, rgba(59,130,246,.22), transparent 28%),
  radial-gradient(circle at 85% 12%, rgba(14,165,233,.18), transparent 30%),
  radial-gradient(circle at 50% 100%, rgba(255,255,255,.08), transparent 45%),
  radial-gradient(circle at 90% 80%, rgba(96,165,250,.15), transparent 35%),
  linear-gradient(
    180deg,
    #07101F 0%,
    #0A1830 22%,
    #10264A 55%,
    #16396B 100%
  )
    `
  }}
>
  <div className="absolute inset-0 overflow-hidden pointer-events-none">

  <div className="absolute -top-52 -left-40 w-[520px] h-[520px] rounded-full bg-blue-500/15 blur-[140px]" />

  <div className="absolute top-24 right-[-120px] w-[420px] h-[420px] rounded-full bg-cyan-400/12 blur-[130px]" />

  <div className="absolute bottom-[-180px] left-1/2 -translate-x-1/2 w-[700px] h-[280px] rounded-full bg-sky-400/10 blur-[140px]" />

</div>
  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    {/* Heading */}
    <div className="text-center mb-8">

      <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-sm font-semibold mb-4">
        📸 Recent Projects
      </div>

      <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white via-sky-100 to-blue-300 bg-clip-text text-transparent">
        Recent Plumbing Projects Across Sydney
      </h2>

      <p className="text-lg text-slate-300 max-w-xl mx-auto leading-8">
        Browse recent residential and commercial plumbing projects completed by our licensed Sydney plumbers.
      </p>

    </div>

    {/* RECENT JOB COMPLETED */}

<div className="mt-8 space-y-8">

  <div className="overflow-hidden rounded-[36px] bg-gradient-to-br from-white via-slate-50 to-slate-100 border border-white/80 shadow-[0_35px_90px_rgba(0,0,0,.22)] hover:-translate-y-1 hover:shadow-[0_45px_110px_rgba(0,0,0,.28)] transition-all duration-500">

    <div className="relative">

      <img
        src="/images/1000019181.webp"
        alt="Emergency Burst Pipe Repair"
        className="w-full h-[220px] sm:h-[260px] lg:h-[340px] object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

      <div className="absolute top-5 left-5 flex gap-2">

        <span className="px-5 py-2 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white text-sm font-semibold">
          ✅Completed Today
        </span>

        <span className="px-5 py-2 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white text-sm font-semibold">
          ⭐5.0 Rated
        </span>

      </div>

    </div>

    <div className="p-6 flex flex-col h-[360px]">

      <p className="uppercase tracking-[0.25em] text-orange-500 text-xs font-bold -mt-3">
        RECENT JOB COMPLETED
      </p>

      <h3 className="mt-0 mb-3 text-[1.8rem] sm:text-4xl font-extrabold text-slate-900 leading-[1.05] tracking-[-0.02em]">
        Emergency Burst Pipe Repair
      </h3>

      <p className="mt-3 text-slate-600 text-[17px] leading-8">
  Responded within
  <span className="font-bold text-blue-600"> 30 minutes </span>
  and repaired the burst pipe on the first visit, restoring water the same day.
</p>


      <div className="mt-5 grid grid-cols-3 gap-3">

  <div className="rounded-2xl bg-blue-50 border border-blue-100 py-4 text-center">
    <p className="text-blue-700 font-bold text-sm">
      ⚡ 30 Min
    </p>
    <p className="text-slate-500 text-xs mt-1">
      Response
    </p>
  </div>

  <div className="rounded-2xl bg-emerald-50 border border-emerald-100 py-4 text-center">
    <p className="text-emerald-700 font-bold text-sm">
      ✓ Same Day
    </p>
    <p className="text-slate-500 text-xs mt-1">
      Fixed
    </p>
  </div>

  <div className="rounded-2xl bg-orange-50 border border-orange-100 py-4 text-center">
    <p className="text-orange-700 font-bold text-sm">
      📍 Sydney
    </p>
    <p className="text-slate-500 text-xs mt-1">
      Australia
    </p>
  </div>

</div>


    </div>

  </div>
<div className="h-px bg-white/10 my-2"></div>

  {/* Recent Job 2 */}

<div className="overflow-hidden rounded-[36px] bg-gradient-to-br from-white via-slate-50 to-slate-100 border border-white/80 shadow-[0_35px_90px_rgba(0,0,0,.22)] hover:-translate-y-1 hover:shadow-[0_45px_110px_rgba(0,0,0,.28)] transition-all duration-500">

  <div className="relative">

    <img
      src="/images/1000019183.webp"
      alt="Blocked Drain Clearance"
      className="w-full h-[220px] object-cover"
    />

    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

    <div className="absolute top-5 left-5">

      <span className="px-4 py-2 rounded-full bg-blue-600 text-white text-sm font-semibold shadow-lg">
        🏡 Residential
      </span>

    </div>

    <div className="absolute bottom-5 right-5">

      <span className="px-4 py-2 rounded-full bg-white/20 backdrop-blur-md border border-white/20 text-white text-sm font-semibold">
        ✓ Completed
      </span>

    </div>

  </div>

  <div className="p-6 flex flex-col h-[360px]">

    <p className="uppercase tracking-[0.25em] text-orange-500 text-xs font-bold -mt-3">
      RECENT JOB COMPLETED
    </p>

    <h3 className="mt-0 mb-3 text-[1.8rem] sm:text-4xl font-extrabold text-slate-900 leading-[1.05] tracking-[-0.02em]">
      Blocked Drain<br/>Clearance
    </h3>

    <p className="mt-3 text-slate-600 text-[17px] leading-8">
      Cleared a severely blocked household drain using CCTV inspection and high-pressure jetting, restoring full flow on the same visit.
    </p>

    <div className="grid grid-cols-3 gap-3 mt-6">

      <div className="rounded-2xl bg-blue-50 p-4 text-center">

        <p className="text-2xl">🚿</p>

        <p className="font-bold text-blue-700 mt-2">
          Drain
        </p>

      </div>

      <div className="rounded-2xl bg-emerald-50 p-4 text-center">

        <p className="text-2xl">✓</p>

        <p className="font-bold text-emerald-700 mt-2">
          Fixed
        </p>

      </div>

      <div className="rounded-2xl bg-orange-50 p-4 text-center">

        <p className="text-2xl">📍</p>

        <p className="font-bold text-orange-700 mt-2">
          Sydney
        </p>

      </div>

    </div>

  </div>

</div>

<div className="h-px bg-white/10 my-2"></div>
  {/* Recent Job 3 */}

<div className="overflow-hidden rounded-[36px] bg-gradient-to-br from-white via-slate-50 to-slate-100 border border-white/80 shadow-[0_35px_90px_rgba(0,0,0,.22)] hover:-translate-y-1 hover:shadow-[0_45px_110px_rgba(0,0,0,.28)] transition-all duration-500">

  <div className="relative">

    <img
      src="/images/1000019132.webp"
      alt="Hot Water Installation"
      className="w-full h-[220px] object-cover"
    />

    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

    <div className="absolute top-5 left-5">

      <span className="px-4 py-2 rounded-full bg-orange-500 text-white text-sm font-semibold shadow-lg">
        🏢 Commercial
      </span>

    </div>

    <div className="absolute bottom-5 right-5">

      <span className="px-4 py-2 rounded-full bg-white/20 backdrop-blur-md border border-white/20 text-white text-sm font-semibold">
        ✓ Completed
      </span>

    </div>

  </div>

  <div className="p-6 flex flex-col h-[360px]">

    <p className="uppercase tracking-[0.25em] text-orange-500 text-xs font-bold -mt-3">
      RECENT JOB COMPLETED
    </p>

    <h3 className="mt-0 mb-3 text-[1.8rem] sm:text-4xl font-extrabold text-slate-900 leading-[1.05] tracking-[-0.02em]">
      Hot Water<br/>Installation
    </h3>

    <p className="mt-3 text-slate-600 text-[17px] leading-8">
      Installed a new energy-efficient hot water system with safe connections, pressure testing, and same-day completion.
    </p>

    <div className="grid grid-cols-3 gap-3 mt-6">

      <div className="rounded-2xl bg-orange-50 p-4 text-center">

        <p className="text-2xl">🔥</p>

        <p className="font-bold text-orange-700 mt-2">
          Hot Water
        </p>

      </div>

      <div className="rounded-2xl bg-emerald-50 p-4 text-center">

        <p className="text-2xl">✓</p>

        <p className="font-bold text-emerald-700 mt-2">
          Installed
        </p>

      </div>

      <div className="rounded-2xl bg-blue-50 p-4 text-center">

        <p className="text-2xl">📍</p>

        <p className="font-bold text-blue-700 mt-2">
          Sydney
        </p>

      </div>

    </div>

  </div>

</div>
</div>

    {/* Button */}
    <div className="text-center mt-16">

      <a
  href="/gallery"
  className="inline-flex items-center gap-3 px-10 py-5 rounded-2xl bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 text-white font-bold text-lg shadow-[0_20px_50px_rgba(37,99,235,.45)] hover:scale-105 hover:shadow-[0_25px_60px_rgba(37,99,235,.6)] transition-all duration-300"
>
  View Full Gallery
  <span className="text-xl">→</span>
</a>

    </div>

  </div>
</section>



<div className="h-px w-full bg-gradient-to-r from-transparent via-blue-400/30 to-transparent"></div>
{/* Service Areas */}
<section className="relative overflow-hidden py-16 bg-[linear-gradient(135deg,#020617_0%,#08162E_30%,#0D2F6B_65%,#1857C8_100%)]">

  {/* Glow Effects */}
  <div className="absolute -top-24 right-0 w-72 h-72 bg-blue-500/15 blur-[120px] rounded-full"></div>
  <div className="absolute bottom-0 left-0 w-72 h-72 bg-sky-400/10 blur-[120px] rounded-full"></div>

  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    {/* Heading */}
    <div className="text-center mb-10">

      <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/10 bg-white/10 backdrop-blur-xl shadow-[0_0_35px_rgba(59,130,246,.20)] mb-6">
        <span>📍</span>
        <span className="text-blue-300 font-semibold">
          Areas We Service
        </span>
      </div>

      <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-5">
        Plumbing Services
        <br />
        Across Sydney
      </h2>

      <p className="text-slate-300 text-lg max-w-2xl mx-auto">
        Providing fast, reliable plumbing services across Sydney and surrounding suburbs.
      </p>

    </div>

    {/* Premium Map */}
    <div className="relative mb-12">

      <div className="absolute inset-0 rounded-[34px] bg-blue-500/20 blur-2xl"></div>

      <div className="relative rounded-[34px] p-[4px] bg-gradient-to-br from-white/20 via-blue-300/15 to-blue-500/25 shadow-[0_25px_80px_rgba(0,0,0,.45)]">

        <div className="rounded-[30px] overflow-hidden border border-white/10">

          <iframe
            src="https://www.google.com/maps?q=Sydney,+NSW,+Australia&output=embed"
            width="100%"
            height="390"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          />

        </div>

      </div>

    </div>

    {/* Service Areas */}
    <div className="flex flex-wrap justify-center gap-4">

      {[
        "Sydney CBD",
        "Parramatta",
        "Liverpool",
        "Blacktown",
        "Chatswood",
        "Bondi",
        "Manly",
        "Ryde",
        "Penrith",
        "Inner West"
      ].map((area, index) => (

        <span
          key={area}
          className={`px-6 py-3 rounded-full border backdrop-blur-xl transition-all duration-300 text-sm font-medium
          ${
            index === 0
              ? "bg-blue-600/25 border-blue-400/40 text-white shadow-[0_0_25px_rgba(59,130,246,.35)]"
              : "bg-white/10 border-white/10 text-white hover:bg-white/15"
          }`}
        >
          📍 {area}
        </span>

      ))}

    </div>

  </div>

</section>

        {/* CTA Section */}
<section
  className="relative overflow-hidden pt-6 pb-8 md:pt-10 md:pb-12"
  style={{
    backgroundImage: `
      linear-gradient(
        rgba(8,15,30,0.28),
        rgba(8,15,30,0.35)
      ),
      url('/images/1000020987.webp')
    `,
    backgroundSize: "cover",
    backgroundPosition: "85% center",
    backgroundRepeat: "no-repeat",
  }}
>
  <div className="max-w-xl mx-auto px-6 lg:px-8">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="max-w-2xl"
    >

      {/* Emergency Badge */}
      <span className="inline-flex items-center rounded-full bg-black/35 backdrop-blur-md border border-white/20 px-5 py-2 mb-4 text-white font-semibold shadow-lg">
        🚨 24/7 Emergency Plumbing
      </span>

      {/* Heading */}
      <h2
  className="text-5xl md:text-6xl font-bold leading-[0.95] text-white mb-6"
  style={{
    letterSpacing: "-0.03em",
    textShadow: "0 6px 28px rgba(0,0,0,.85)"
  }}
>
  Fast, Reliable Plumbing
  <br />
  <span className="text-blue-400">Across</span>{" "}
<span className="text-yellow-400">Sydney</span>
</h2>

      {/* Description */}
      <p
        className="text-lg md:text-xl text-white leading-8 mb-7"
        style={{
          textShadow: "0 2px 12px rgba(0,0,0,.65)"
        }}
      >
        From blocked drains and burst pipes to hot water systems, our licensed Sydney plumbers deliver fast, reliable service whenever you need us.
      </p>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6">

        <Button
  asChild
  size="lg"
  className="h-14 px-8 rounded-xl bg-[#E53935] hover:bg-[#C62828] text-white shadow-xl shadow-red-500/30 transition-all duration-300"
>
  <a href="tel:1300555347">
    <Phone className="w-5 h-5 mr-2" />
    Call Now – 1300 555 347
  </a>
</Button>

        <Button
          asChild
          size="lg"
          variant="outline"
          className="h-14 px-8 rounded-xl bg-white/10 backdrop-blur-md border border-white/30 text-white hover:bg-white/20 text-lg"
        >
          <Link to="/quote">
            Get Free Quote
          </Link>
        </Button>

      </div>

      {/* Trust Badges */}
      <div className="flex flex-col sm:flex-row gap-5 sm:gap-8">

        <div className="flex items-center gap-3">
          <span className="text-2xl drop-shadow-lg">🛡️</span>
          <span
            className="text-white font-semibold"
            style={{ textShadow: "0 2px 8px rgba(0,0,0,.5)" }}
          >
            Licensed & Insured
          </span>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-2xl drop-shadow-lg">⭐</span>
          <span
            className="text-white font-semibold"
            style={{ textShadow: "0 2px 8px rgba(0,0,0,.5)" }}
          >
            4.9 Google Rating
          </span>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-2xl drop-shadow-lg">⚡</span>
          <span
            className="text-white font-semibold"
            style={{ textShadow: "0 2px 8px rgba(0,0,0,.5)" }}
          >
            30 Minute Response
          </span>
        </div>

      </div>

    </motion.div>
  </div>
</section>


        <Footer />
        {/* Floating Mobile Call Button */}
<div className="fixed bottom-8 right-4 z-50 md:hidden">
  <a
    href="tel:1300555247"
    className="call-button w-12 h-12 bg-red-600 hover:bg-red-600 rounded-full flex items-center justify-center shadow-xl text-white"
  >
    <Phone className="w-5 h-5" />
  </a>
</div>
      </div>
    </>
  );
}

export default HomePage;
