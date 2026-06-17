
import React from 'react';
import { Link } from 'react-router-dom';
import { Droplet, MapPin, Phone, Mail, Shield, Award, Clock } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import TrustBadge from './TrustBadge';

function Footer() {
  const serviceAreas = [
    'Sydney CBD',
    'Riverside Heights',
    'Blacktown',
    'Penrith',
    'Liverpool',
    'Chatswood'
  ];

  const quickLinks = [
    { path: '/', label: 'Home' },
    { path: '/residential', label: 'Residential Plumbing' },
    { path: '/commercial', label: 'Commercial Plumbing' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/testimonials', label: 'Testimonials' },
    { path: '/quote', label: 'Get a Quote' },
  ];

  return (
    <footer className="bg-slate-900 texty-white">
      

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-xl bg-primary-foreground/10 flex items-center justify-center">
                <Droplet className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="text-2xl font-bold text-white">FlowFix Plumbing</span>
            </Link>
            <p className="text-white leading-relaxed mb-6">
              Licensed Sydney plumbers providing residental, commercial and emergency plumbing services across Sydney 24/7..
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-slate-300" />
                <span className="text-white">1300 555 247</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-slate-300" />
                <span className="text-primary-foreground/90">hello@flowfixplumbing.com</span>
              </div>
            </div>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="font-semibold text-lg mb-6 text-white">Service Areas</h3>
            <ul className="space-y-2">
              {serviceAreas.map((area, index) => (
                <li key={index} className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-slate-300 mt-0.5" />
                  <span className="text-white">{area}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path}
                    className="text-white hover:text-slate-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-6 text-white">Business Hours</h3>
            <div className="space-y-3 text-white">
              <p>Monday - Friday: 7am - 7pm</p>
              <p>Saturday: 8am - 5pm</p>
              <p>Sunday: 9am - 3pm</p>
              <p className="mt-6 text-sm text-slate-200">Emergency plumbing services available 24/7</p>
            </div>
          </div>
        </div>
      </div>

      <Separator className="bg-primary-foreground/10" />

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-300 text-sm">
            © 2026 FlowFix Plumbing. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/privacy" className="text-slate-300 hover:text-white">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-slate-300 hover:text-white">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
