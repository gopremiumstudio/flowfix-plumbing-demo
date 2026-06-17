
import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Building2, Zap, Shield, TrendingUp, Droplets, Wrench, Phone } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServiceCard from '@/components/ServiceCard';


function CommercialCleaningPage() {
  const services = [
    {
      icon: Zap,
      title: 'Emergency Response',
      description: 'Rapid response for commercial plumbing emergencies.',
      features: [
        'Available 24/7',
        'Fast response times',
        'Minimal business disruption',
        'Emergency repairs'
      ],
      link: '/quote',
      variant: 'featured'
    },
    {
      icon: Shield,
      title: 'Preventative Maintenance',
      description: 'Regular maintenance to prevent costly breakdowns.',
      features: [
        'Scheduled inspections',
        'System testing',
        'Early problem detection',
        'Maintenance reports'
      ],
      link: '/quote'
    },
    {
      icon: TrendingUp,
      title: 'Pipe System Upgrades',
      description: 'Modern pipe system installations and upgrades.',
      features: [
        'System design',
        'Pipe replacement',
        'Efficiency improvements',
        'Code compliance'
      ],
      link: '/quote'
    },
    {
      icon: Droplets,
      title: 'Water System Installation',
      description: 'Complete water system installation for commercial properties.',
      features: [
        'New construction plumbing',
        'System design and planning',
        'Quality materials',
        'Professional installation'
      ],
      link: '/quote'
    },
    {
      icon: Wrench,
      title: 'Commercial Drain Solutions',
      description: 'Heavy-duty drain cleaning and maintenance for businesses.',
      features: [
        'High-pressure jetting',
        'Grease trap services',
        'Camera inspections',
        'Root removal'
      ],
      link: '/quote'
    }
  ];

  
  const benefits = [
    {
      title: 'Minimize downtime',
      description: 'Fast, efficient service that keeps your business running smoothly with minimal disruption.',
      stat: '2.4hrs',
      statLabel: 'average response time'
    },
    {
      title: 'Reduce operating costs',
      description: 'Preventative maintenance and efficient systems lower your long-term plumbing expenses.',
      stat: '$6,800',
      statLabel: 'average annual savings'
    },
    {
      title: 'Ensure compliance',
      description: 'All work meets current building codes and industry standards for commercial properties.',
      stat: '100%',
      statLabel: 'code compliance'
    }
  ];


  return (
    <>
      <Helmet>
        <title>Commercial Plumbing Services - FlowFix Plumbing</title>
        <meta name="description" content="Professional commercial plumbing for offices, retail spaces, and industrial facilities. Emergency response, preventative maintenance, and system upgrades. Licensed and insured." />
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
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Building2 className="w-4 h-4" />
                Commercial Services
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6" style={{ letterSpacing: '-0.02em', textWrap: 'balance' }}>
                Professional plumbing for your business
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl mx-auto">
                Reliable commercial plumbing services that keep your business running smoothly, every single day.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="transition-all duration-200 active:scale-[0.98]">
                  <Link to="/quote">Get Free Quote</Link>
                </Button>
                <Button size="lg" variant="outline" className="transition-all duration-200 active:scale-[0.98]">
                  <Phone className="w-5 h-5 mr-2" />
                  Call 1300 555 247
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" style={{ letterSpacing: '-0.02em', textWrap: 'balance' }}>
                Plumbing solutions for every business
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                From small offices to large commercial facilities, we have the expertise and equipment to handle it all.
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

        {/* Benefits Section */}
        <section className="py-24 bg-muted">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" style={{ letterSpacing: '-0.02em', textWrap: 'balance' }}>
                The business case for professional plumbing
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Quality plumbing drives better business outcomes. Here's how.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-card rounded-2xl p-8 shadow-lg"
                >
                  <div className="flex items-center gap-2 mb-4">
                    <TrendingUp className="w-6 h-6 text-primary" />
                    <div className="text-3xl font-bold text-primary" style={{ fontVariantNumeric: 'tabular-nums' }}>
                      {benefit.stat}
                    </div>
                  </div>
                  <div className="text-sm text-muted-foreground mb-4">{benefit.statLabel}</div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>


        {/* CTA Section */}
        <section className="py-24 bg-primary text-primary-foreground">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ letterSpacing: '-0.02em', textWrap: 'balance' }}>
                Ready to upgrade your business plumbing?
              </h2>
              <p className="text-xl text-primary-foreground/90 leading-relaxed mb-8 max-w-2xl mx-auto">
                Get a customized plumbing plan and quote for your business today.
              </p>
              <Button asChild size="lg" variant="secondary" className="text-lg px-8 transition-all duration-200 active:scale-[0.98]">
                <Link to="/quote">Request Free Quote</Link>
              </Button>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}

export default CommercialCleaningPage;
