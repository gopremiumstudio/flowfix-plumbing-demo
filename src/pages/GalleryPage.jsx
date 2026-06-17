import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

function GalleryPage() {

  const projects = [
{
title: 'Emergency Burst Pipe Repair',
image: '/images/1000019087.webp',
description: 'Responded within 30 minutes and repaired a burst water line for a Sydney homeowner.'
},
{
title: 'Kitchen Drain Clearance',
image: '/images/1000019122.webp',
description: 'Cleared a severely blocked kitchen drain using professional equipment.'
},
{
title: 'Hot Water System Installation',
image: '/images/1000019128.webp',
description: 'Installed a modern energy-efficient hot water system with same-day service.'
},
{
title: 'Bathroom Leak Detection',
image: '/images/1000019130.webp',
description: 'Located and repaired hidden bathroom leaks before major water damage occurred.'
},
{
title: 'Residential Pipe Upgrade',
image: '/images/1000019132.webp',
description: 'Upgraded aging household pipework to improve water flow and reliability.'
},
{
title: 'Happy Customer Handover',
image: '/images/c1_20260615_19033153.webp',
description: 'Another successful plumbing project completed with outstanding customer satisfaction.'
}
];


  return (
    <>
      <Helmet>
        <title>Gallery | FlowFix Plumbing</title>
        <meta
          name="description"
          content="Browse recent plumbing projects completed by FlowFix Plumbing across Sydney."
        />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        {/* Hero */}
        <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Recent Plumbing Projects
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-xl text-muted-foreground max-w-3xl mx-auto"
            >
              Take a look at some of the residential and commercial plumbing
              work completed by our licensed Sydney plumbers.
            </motion.p>

          </div>
        </section>

        {/* Gallery */}
        <section className="pt-8 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
                >
                  <div className="overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-72 object-cover hover:scale-110 transition duration-700"
                    />
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3">
                      {project.title}
                    </h3>

                    <p className="text-muted-foreground">
                      {project.description}
                    </p>
                  </div>
                </motion.div>
              ))}

            </div>

          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-500 text-white">
          <div className="max-w-4xl mx-auto px-4 text-center">

            <h2 className="text-4xl font-bold mb-6">
              Need A Plumber You Can Trust?
            </h2>

            <p className="text-xl mb-8 opacity-90">
              Get a free quote today and discover why Sydney homeowners choose
              FlowFix Plumbing.
            </p>

            <a
              href="/quote"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:scale-105 transition"
            >
              Get Free Quote
            </a>

          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}

export default GalleryPage;
