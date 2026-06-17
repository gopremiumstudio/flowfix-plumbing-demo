
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import TestimonialCard from '@/components/TestimonialCard';

function TestimonialsPage() {
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

  const stats = [
    { number: '4.9/5', label: 'Average Rating' },
    { number: '3,142', label: 'Happy Customers' },
    { number: '97.8%', label: 'Would Recommend' },
    { number: '10', label: 'Years in Business' }
  ];

  return (
    <>
      <Helmet>
        <title>Customer Reviews & Testimonials - FlowFix Plumbing</title>
        <meta name="description" content="Read what our customers say about FlowFix Plumbing. Real reviews from satisfied residential and commercial plumbing clients across the metro area." />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto"
            >
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-8 h-8 fill-primary text-primary" />
                ))}
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6" style={{ letterSpacing: '-0.02em', textWrap: 'balance' }}>
                Trusted by thousands of customers
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl mx-auto">
                Don't just take our word for it. Here is what our customers have to say about their FlowFix Plumbing experience.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-4xl md:text-5xl font-bold mb-2" style={{ fontVariantNumeric: 'tabular-nums' }}>
                    {stat.number}
                  </div>
                  <div className="text-primary-foreground/80">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Grid */}
        <section className="py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
                  className="break-inside-avoid"
                >
                  <TestimonialCard {...testimonial} />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Photo Section */}
        <section className="py-24 bg-muted">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1676210134188-4c05dd172f89" 
                  alt="FlowFix Plumbing professional team members"
                  className="rounded-2xl shadow-lg w-full"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6" style={{ letterSpacing: '-0.02em', textWrap: 'balance' }}>
                  Meet the team behind the reviews
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Our licensed plumbing professionals are the heart of FlowFix Plumbing. Each team member is fully licensed, insured, and trained in the latest plumbing techniques and technologies.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  We believe that great plumbing starts with great people. That is why we invest in ongoing training, provide competitive wages, and foster a culture of excellence and customer service.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href="/quote" 
                    className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-all duration-200 active:scale-[0.98]"
                  >
                    Get Free Quote
                  </a>
                  <a 
                    href="/residential" 
                    className="inline-flex items-center justify-center px-6 py-3 border border-input bg-background rounded-lg font-medium hover:bg-muted transition-all duration-200 active:scale-[0.98]"
                  >
                    View Services
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}

export default TestimonialsPage;
