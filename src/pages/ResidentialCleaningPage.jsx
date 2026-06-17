
import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Home, Wrench, Droplets, Settings, Flame, Zap, Phone } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServiceCard from '@/components/ServiceCard';


function ResidentialCleaningPage() {
  const services = [
    {
      icon: Wrench,
      title: 'Drain Cleaning',
      description: 'Professional drain clearing and maintenance for your home.',
      features: [
        'Kitchen and bathroom drains',
        'High-pressure water jetting',
        'Root removal services',
        'Preventative maintenance plans'
      ],
      link: '/quote'
    },
    {
      icon: Droplets,
      title: 'Leak Detection & Repair',
      description: 'Advanced leak detection and expert repair services.',
      features: [
        'Electronic leak detection',
        'Pipe repairs and replacement',
        'Tap and fixture repairs',
        'Hidden leak identification'
      ],
      link: '/quote'
    },
    {
      icon: Settings,
      title: 'Pipe Installation',
      description: 'Professional pipe installation and replacement services.',
      features: [
        'New construction plumbing',
        'Pipe replacement',
        'Repiping services',
        'Modern materials and methods'
      ],
      link: '/quote'
    },
    {
      icon: Flame,
      title: 'Water Heater Services',
      description: 'Complete water heater installation, repair, and maintenance.',
      features: [
        'Gas and electric systems',
        'Tankless water heaters',
        'Repairs and servicing',
        'Energy-efficient upgrades'
      ],
      link: '/quote'
    },
    {
      icon: Home,
      title: 'Fixture Installation',
      description: 'Expert installation of taps, toilets, and bathroom fixtures.',
      features: [
        'Tap and faucet installation',
        'Toilet installation and repair',
        'Shower and bath fixtures',
        'Kitchen sink installation'
      ],
      link: '/quote'
    },
    {
      icon: Zap,
      title: 'Emergency Services',
      description: 'Fast response for urgent residential plumbing emergencies.',
      features: [
        'Available 24/7',
        'Burst pipe repairs',
        'Emergency leak fixes',
        'Same-day service'
      ],
      link: '/quote'
    }
  ];

  

  
  return (
    <>
      <Helmet>
        <title>Residential Plumbing Services - FlowFix Plumbing</title>
        <meta name="description" content="Professional residential plumbing services including drain cleaning, leak detection, pipe installation, water heater services, and emergency repairs. Licensed and insured plumbers." />
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
                <Home className="w-4 h-4" />
                Residential Services
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6" style={{ letterSpacing: '-0.02em', textWrap: 'balance' }}>
                Expert plumbing for your home
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl mx-auto">
                Professional residential plumbing services designed to keep your home running smoothly. From routine maintenance to emergency repairs.
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
                Complete residential plumbing solutions
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Choose from our range of services or combine them for a custom plumbing solution.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
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

        {/* Recent Residential Projects */}
<section className="py-24 bg-muted">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
        Recent Residential Projects
      </h2>
      <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
        Take a look at some of our recent residential plumbing projects completed across Sydney.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

      <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
        <img
          src="/images/1000019181.webp"
          alt="Emergency Burst Pipe Repair"
          className="w-full h-64 object-cover"
        />
        <div className="p-6">
          <h3 className="text-2xl font-bold mb-3">
            Emergency Burst Pipe Repair
          </h3>
          <p className="text-muted-foreground">
            Responded within 30 minutes and repaired a burst water line for a Sydney homeowner.
          </p>
        </div>
      </div>

      <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
        <img
          src="/images/1000019183.webp"
          alt="Blocked Drain Clearance"
          className="w-full h-64 object-cover"
        />
        <div className="p-6">
          <h3 className="text-2xl font-bold mb-3">
            Blocked Drain Clearance
          </h3>
          <p className="text-muted-foreground">
            High-pressure drain cleaning and CCTV inspection completed same day.
          </p>
        </div>
      </div>

      <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
        <img
          src="/images/1000019128.webp"
          alt="Hot Water System Installation"
          className="w-full h-64 object-cover"
        />
        <div className="p-6">
          <h3 className="text-2xl font-bold mb-3">
            Hot Water System Installation
          </h3>
          <p className="text-muted-foreground">
            Installed a new energy-efficient hot water system with same-day service.
          </p>
        </div>
      </div>

    </div>

    <div className="text-center mt-12">
      <Button asChild variant="outline" size="lg">
        <Link to="/gallery">View Full Gallery</Link>
      </Button>
    </div>

  </div>
</section>


        {/* Why Choose FlowFix */}
<section className="py-24 bg-background">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
        Why Sydney Homeowners Choose FlowFix
      </h2>
      <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
        Reliable plumbing solutions backed by experience, transparency, and outstanding customer service.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">

      <div className="bg-card border rounded-2xl p-6 shadow-sm">
        <h3 className="font-bold text-xl mb-3">Licensed & Insured</h3>
        <p className="text-muted-foreground">
          Fully qualified plumbers with complete insurance coverage for your peace of mind.
        </p>
      </div>

      <div className="bg-card border rounded-2xl p-6 shadow-sm">
        <h3 className="font-bold text-xl mb-3">Upfront Fixed Quotes</h3>
        <p className="text-muted-foreground">
          No hidden surprises. We provide clear pricing before work begins.
        </p>
      </div>

      <div className="bg-card border rounded-2xl p-6 shadow-sm">
        <h3 className="font-bold text-xl mb-3">24/7 Emergency Service</h3>
        <p className="text-muted-foreground">
          Fast response for burst pipes, leaks, and urgent plumbing issues.
        </p>
      </div>

      <div className="bg-card border rounded-2xl p-6 shadow-sm">
        <h3 className="font-bold text-xl mb-3">Same-Day Service</h3>
        <p className="text-muted-foreground">
          Available across Sydney for most residential plumbing jobs.
        </p>
      </div>

      <div className="bg-card border rounded-2xl p-6 shadow-sm">
        <h3 className="font-bold text-xl mb-3">5-Star Reviews</h3>
        <p className="text-muted-foreground">
          Trusted by homeowners for professional workmanship and honest service.
        </p>
      </div>

      <div className="bg-card border rounded-2xl p-6 shadow-sm">
        <h3 className="font-bold text-xl mb-3">Workmanship Guarantee</h3>
        <p className="text-muted-foreground">
          Quality workmanship backed by our customer satisfaction guarantee.
        </p>
      </div>

    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">

      <div>
        <h3 className="text-5xl font-bold text-primary mb-2">15+</h3>
        <p className="text-muted-foreground">Years Experience</p>
      </div>

      <div>
        <h3 className="text-5xl font-bold text-primary mb-2">5000+</h3>
        <p className="text-muted-foreground">Jobs Completed</p>
      </div>

      <div>
        <h3 className="text-5xl font-bold text-primary mb-2">4.9★</h3>
        <p className="text-muted-foreground">Average Customer Rating</p>
      </div>

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
                Need a Licensed Sydney Plumber?
              </h2>
              <p className="text-xl text-primary-foreground/90 leading-relaxed mb-8 max-w-2xl mx-auto">
                Schedule your service today and experience the FlowFix Plumbing difference.
              </p>
              <Button asChild size="lg" variant="secondary" className="text-lg px-8 transition-all duration-200 active:scale-[0.98]">
                <Link to="/quote">Call Now- 1300 555 247</Link>
              </Button>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}

export default ResidentialCleaningPage;
