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
image: 'images/bathroom-renovation.webp',
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
    }
  ];

  return (
    <>
      <Helmet>
        <title>FlowFix Plumbing - 24/7 Emergency Plumbing Services</title>
        <meta name="description" content="Professional plumbing services for homes and businesses. Emergency repairs, blocked drains, hot water systems, leak detection. Available 24/7. Licensed and insured." />
      </Helmet>

      <div className="min-h-screen flex flex-col pb-24">
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
  src="/images/1000019359.webp"
  alt="Professional plumber working on pipes"
  loading="eager"
  fetchPriority="high"
  className="w-full h-full object-cover"
/>
            <div className="absolute inset-0 z-0 bg-slate-900/70"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-6 lg:py-4">

  <div className="grid lg:grid-cols-2 gap-8 items-center">
    {/* LEFT COLUMN */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >

      <div className="inline-flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
  🚨 24/7 Emergency Response
</div>

<h1 className="text-[2.3rem] md:text-5xl lg:text-5xl font-bold text-white leading-tight mb-6">
  24/7 Emergency Plumbers Across Sydney
</h1>

<p className="text-lg text-white/90 leading-relaxed mb-5 max-w-prose">
  Blocked drains, burst pipes, hot water repairs and emergency plumbing.
  Fast response times, upfront pricing and trusted local plumbers available 24/7.
</p>
<div className="mb-5 text-white text-sm">
  <span className="text-yellow-400">★★★★★</span>
  <span className="font-semibold ml-2">4.9 Rating</span>
  <span className="text-white/90 ml-2">
    • 1,500+ Happy Customers
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
  <Button size="lg" className="text-lg px-8">
    <Phone className="w-5 h-5 mr-2" />
   Speak To A Plumber
  </Button>

        
</div>


    </motion.div>

    {/* RIGHT COLUMN */}
    <motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
>
  <div className="bg-white/95 backdrop-blur-xl rounded-[32px] shadow-[0_20px_60px_rgba(0,0,0,0.25)] border border-white/30 p-5 lg:p-4">

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

      <Button className="w-full h-12 text-base font-bold rounded-2xl shadow-lg bg-blue-600 hover:bg-blue-700">
        GET MY FREE QUOTE →
      </Button>
    </form>

  </div>
</motion.div>


  </div>

</div>

        </section>

        {/* Services Section */}
        <section className="py-12 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
  🔧 Trusted Across Sydney
</div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" style={{ letterSpacing: '-0.02em', textWrap: 'balance' }}>
                Professional Plumbing Services Across Sydney
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 max-w-4xl mx-auto">
              {services.slice(3, 5).map((service, index) => (
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

        {/* Why Choose Us Section */}
        <section className="pt-8 pb-12 bg-gradient-to-b from-slate-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-4">
  ⭐ Trusted Sydney Plumbers
</div>
                <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6" style={{ letterSpacing: '-0.02em', textWrap: 'balance' }}>
                  Why Choose FlowFix Plumbing
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  Sydney homeowners trust FlowFix Plumbing for fast response times, upfront pricing, and quality workmanship. Available 24/7 for emergency plumbing across Sydney.
                </p>
                <div className="grid grid-cols-3 gap-4 mb-8 p-4 bg-gradient-to-r from-blue-50 to-slate-50 rounded-3xl">
  <div className="text-center bg-white rounded-2xl p-4 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
    <div className="text-2xl font-bold text-primary">15+</div>
    <div className="text-xs text-muted-foreground">Years</div>
  </div>

  <div className="text-center bg-white rounded-2xl p-4 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
    <div className="text-2xl font-bold text-primary">1500+</div>
    <div className="text-xs text-muted-foreground">Customers</div>
  </div>

  <div className="text-center bg-white rounded-2xl p-4 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
    <div className="text-2xl font-bold text-primary">24/7</div>
    <div className="text-xs text-muted-foreground">Emergency</div>
  </div>
</div>

                <div className="grid grif-cols-1 sm:grid-cols-2 gap-3 mt-6">
                  {[
                    'Fully Licensed & Insured',
                    'Upfront Fixed Pricing',
                    '24/7 Emergency Service',
                    'Same-Day Response Available',
                    '5-Star Customer Satisfaction',
                    'Workmanship Guarantee'
                  ].map((item, index) => (
                    <div
  key={index}
  className="flex items-center gap-3 bg-white rounded-2xl p-5 shadow-md border-l-4 border-primary border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
>

                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
<p className="text-sm font-semibold text-foreground leading-tight">{item}</p>

                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative h-full"
              >
                <img 
                  src="/images/c1_20260615_19033153.webp" 
                  alt="FlowFix Plumbing professional plumber at work"
                  className="rounded-2xl shadow-lg w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </div>
        </section>
{/* Statistics Section */}
<section className="py-12 bg-gradient-to-r from-blue-700 to-blue-500">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    <div className="text-center mb-12">
      <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white text-sm font-medium mb-4">
  ⭐ Sydney's Trusted Plumbing Experts
</div>
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
        Trusted Across Sydney
      </h2>

      <p className="text-blue-100 max-w-2xl mx-auto">
        Delivering fast, reliable plumbing services with thousands of
        satisfied customers every year.
      </p>
    </div>

    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">

  <div>
    <div className="text-4xl md:text-5xl font-bold text-white">
      <CountUp end={1500} duration={2.5} />+
    </div>
    <div className="text-blue-100 mt-2">
     Sydney Customers
    </div>
  </div>

  <div>
    <div className="text-4xl md:text-5xl font-bold text-white">
      24/7
    </div>
    <div className="text-blue-100 mt-2">
      Emergency Service
    </div>
  </div>

  <div>
    <div className="text-2xl md:text-5xl font-bold text-white">
      Same Day
    </div>
    <div className="text-blue-100 mt-2">
      Service
    </div>
  </div>

  <div>
    <div className="text-4xl md:text-5xl font-bold text-white">
      4.9★
    </div>
    <div className="text-blue-100 mt-2">
      Google Rating
    </div>
  </div>

</div>
  </div>
</section>
 
        {/* Testimonials Preview */}
        <section className="py-12 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-8"
            >
              <div className="inline-flex items-center gap-2 bg-yellow-50 text-yellow-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
  ⭐ Customer Reviews
</div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" style={{ letterSpacing: '-0.02em', textWrap: 'balance' }}>
                What our customers say
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Real feedback from real customers who trust FlowFix Plumbing with their plumbing needs.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <TestimonialCard {...testimonial} />
                </motion.div>
              ))}
            </div>

            <div className="text-center">
              <Button asChild variant="outline" size="lg" className="transition-all duration-200 active:scale-[0.98]">
                <Link to="/testimonials">Read More Reviews</Link>
              </Button>
            </div>
          </div>
        </section>
<section className="py-12 bg-slate-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    <div className="text-center mb-8">
      <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-sm font-semibold mb-4">
  📸 Recent Projects
</div>

      <h2 className="text-4xl font-bold mb-4">
        Recent Plumbing Projects Across Sydney
      </h2>
      <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
        Browse recent residential and commercial plumbing projects completed by our licensed Sydney plumbers.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

      {/* Card 1 */}
      <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
        <img
          src="/images/1000019181.webp"
          alt="Emergency Plumbing"
          className="w-full h-64 object-cover"
        />
        <div className="p-6">
          <h3 className="text-xl font-bold mb-3">
            Emergency Burst Pipe Repair
          </h3>
          <p className="text-muted-foreground">
            Responded within 30 minutes and repaired a burst water line for a Sydney homeowner.
          </p>
        </div>
      </div>

      {/* Card 2 */}
      <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
        <img
          src="/images/1000019183.webp"
          alt="Blocked Drain"
          className="w-full h-64 object-cover"
        />
        <div className="p-6">
          <h3 className="text-xl font-bold mb-3">
            Blocked Drain Clearance
          </h3>
          <p className="text-muted-foreground">
            High-pressure drain cleaning and CCTV inspection completed same day.
          </p>
        </div>
      </div>

      {/* Card 3 */}
      <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
        <img
          src="/images/1000019132.webp"
          alt="Hot Water System"
          className="w-full h-64 object-cover"
        />
        <div className="p-6">
          <h3 className="text-xl font-bold mb-3">
            Hot Water System Installation
          </h3>
          <p className="text-muted-foreground">
            Installed a new energy-efficient hot water system with same-day service.
          </p>
        </div>
      </div>

    </div>

    <div className="text-center mt-12">
      <a
        href="/gallery"
        className="inline-flex items-center px-8 py-4 bg-primary text-white rounded-xl font-semibold hover:opacity-90 transition"
      >
        View Full Gallery
      </a>
    </div>

  </div>
</section>

{/* Service Areas */}
<section className="py-10 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    <div className="text-center mb-8">
      <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold mb-4">
        📍 Areas We Service
      </div>

      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Plumbing Services Across Sydney
      </h2>

      <p className="text-muted-foreground max-w-2xl mx-auto">
        Providing fast, reliable plumbing services across Sydney and surrounding suburbs.
      </p>
    </div>

    <div className="rounded-3xl overflow-hidden shadow-lg mb-8">
      <iframe
        src="https://www.google.com/maps?q=Sydney,+NSW,+Australia&output=embed"
        width="100%"
        height="300"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </div>

    <div className="flex flex-wrap justify-center gap-3">
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
      ].map((area) => (
        <span
          key={area}
          className="px-4 py-2 bg-slate-100 rounded-full text-sm font-medium"
        >
          {area}
        </span>
      ))}
    </div>

  </div>
</section>

        {/* CTA Section */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ letterSpacing: '-0.02em', textWrap: 'balance' }}>
                Fast, Reliable Plumbing Across Sydney
              </h2>
              <p className="text-xl text-primary-foreground/90 leading-relaxed mb-8 max-w-2xl mx-auto">
                From blocked drains and burst pipes to hot water systems our licensed Sydney plumbers are ready to help 24/7.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" className="text-lg px-8 transition-all duration-200 active:scale-[0.98]">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now - 1300 555 347
                </Button>
                <Button asChild size="lg" variant="outline" className="text-lg px-8 bg-primary-foreground/10 backdrop-blur-sm border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/20 transition-all duration-200 active:scale-[0.98]">
                  <Link to="/quote">Get Free Quote</Link>
                </Button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14 text-white/90">
  <div className="flex items-center justify-center gap-2">
    <span>🛡️</span>
    <span>Licensed & Insured</span>
  </div>

  <div className="flex items-center justify-center gap-2">
    <span>⭐</span>
    <span>4.9 Star Rating</span>
  </div>

  <div className="flex items-center justify-center gap-2">
    <span>⚡</span>
    <span>30 Min Response</span>
  </div>
</div>

            </motion.div>
          </div>
        </section>

        <Footer />
        {/* Floating Mobile Call Button */}
<div className="fixed bottom-6 right-4 z-50 md:hidden">
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
