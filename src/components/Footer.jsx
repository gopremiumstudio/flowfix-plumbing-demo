
import React from 'react';
import { Link } from 'react-router-dom';
import {
  Droplet,
  MapPin,
  Phone,
  Mail,
  Clock,
  ShieldCheck,
  ChevronRight
} from 'lucide-react';
import { Separator } from '@/components/ui/separator';

function Footer() {
  const serviceAreas = [
  "Sydney CBD",
  "Parramatta",
  "Blacktown",
  "Liverpool",
  "Chatswood",
  "Penrith",
];

const quickLinks = [
  { path: "/", label: "Home" },
  { path: "/residential", label: "Residential Plumbing" },
  { path: "/commercial", label: "Commercial Plumbing" },
  { path: "/gallery", label: "Gallery" },
  { path: "/testimonials", label: "Testimonials" },
  { path: "/quote", label: "Get a Quote" },
];

  return (
    <footer className="relative overflow-hidden bg-[linear-gradient(135deg,#020617_0%,#0B1120_35%,#102A56_70%,#1E3A8A_100%)] text-white">

<div className="absolute inset-0 overflow-hidden pointer-events-none">

<div className="absolute top-0 left-1/4 w-72 h-72 bg-blue-500/20 blur-3xl rounded-full"></div>

<div className="absolute bottom-0 right-0 w-80 h-80 bg-sky-400/20 blur-3xl rounded-full"></div>

</div>

<div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-8">

<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">

{/* Brand Card */}

<div className="rounded-3xl border border-white/15 bg-white/8 backdrop-blur-md p-5">

<Link to="/" className="flex items-center gap-3 mb-4">

<div className="w-12 h-12 rounded-2xl bg-blue-600 flex items-center justify-center shadow-lg">

<Droplet className="w-7 h-7 text-white"/>

</div>

<div>

<h3 className="text-2xl font-bold">

FlowFix <span className="text-blue-300">Plumbing</span>

</h3>

<p className="text-sm text-slate-300">

Sydney's Trusted Plumbing Experts

</p>

</div>

</Link>

<p className="text-slate-300 leading-6 mb-4">

Providing reliable residential, commercial and emergency plumbing services across Sydney with fast response times and upfront pricing.

</p>

<div className="space-y-2">

<div className="flex items-center gap-3">

<div className="w-10 h-10 rounded-xl bg-red-600 flex items-center justify-center">

<Phone className="w-5 h-5"/>

</div>

<div>

<p className="text-xs text-slate-400">

24/7 Emergency

</p>

<p className="font-semibold">

1300 555 247

</p>

</div>

</div>

<div className="flex items-center gap-3">

<div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center">

<Mail className="w-5 h-5"/>

</div>

<div>

<p className="text-xs text-slate-400">

Email Us

</p>

<p className="text-sm">

hello@flowfixplumbing.com

</p>

</div>

</div>

</div>

</div>

{/* Service Areas */}

<div className="rounded-3xl border border-white/15 bg-white/8 backdrop-blur-md p-6">

<h3 className="text-xl font-bold mb-6">

Service Areas

</h3>

<div className="grid grid-cols-2 gap-4">

{serviceAreas.map((area)=>(
<div
key={area}
className="flex items-center gap-2 text-slate-300 hover:text-white transition">

<MapPin className="w-4 h-4 text-blue-300"/>

<span className="text-sm">

{area}

</span>

</div>
))}
</div>

</div>


          {/* Quick Links */}

<div className="rounded-3xl border border-white/15 bg-white/8 backdrop-blur-md p-6">

  <h3 className="text-xl font-bold mb-4">
    Quick Links
  </h3>

  <div className="space-y-2">

    {quickLinks.map((link) => (

      <Link
        key={link.path}
        to={link.path}
        className="group flex items-center justify-between text-slate-300 hover:text-white transition-all duration-300"
      >

        <span>{link.label}</span>

        <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />

      </Link>

    ))}

  </div>

  <div className="mt-5 rounded-2xl bg-red-600 p-3 shadow-xl">

    <p className="text-sm font-semibold uppercase tracking-wide opacity-90">
      Emergency Plumbing
    </p>

    <p className="text-2xl font-bold mt-1">
      24/7 Available
    </p>

    <p className="text-sm opacity-90 mt-2">
      Fast response across Sydney.
    </p>

  </div>

</div>

{/* Business Hours */}

<div className="rounded-3xl border border-white/15 bg-white/8 backdrop-blur-md p-6">

  <h3 className="text-xl font-bold mb-4">
    Business Hours
  </h3>

  <div className="space-y-2">

    <div className="flex items-center gap-3">

      <Clock className="w-5 h-5 text-blue-300" />

      <div>

        <p className="font-medium">
          Monday - Friday
        </p>

        <p className="text-slate-300 text-sm">
          7:00 AM - 7:00 PM
        </p>

      </div>

    </div>

    <div className="flex items-center gap-3">

      <Clock className="w-5 h-5 text-blue-300" />

      <div>

        <p className="font-medium">
          Saturday
        </p>

        <p className="text-slate-300 text-sm">
          8:00 AM - 5:00 PM
        </p>

      </div>

    </div>

    <div className="flex items-center gap-3">

      <Clock className="w-5 h-5 text-blue-300" />

      <div>

        <p className="font-medium">
          Sunday
        </p>

        <p className="text-slate-300 text-sm">
          9:00 AM - 3:00 PM
        </p>

      </div>

    </div>

  </div>

  <div className="mt-5 rounded-2xl bg-emerald-500/15 border border-emerald-400/20 p-4">

    <div className="flex items-center gap-3">

      <ShieldCheck className="w-6 h-6 text-emerald-400" />

      <div>

        <p className="font-semibold text-emerald-300">
          24/7 Emergency Support
        </p>

        <p className="text-sm text-slate-300">
          Licensed • Insured • Fast Response
        </p>

      </div>

    </div>

  </div>

</div>

</div>

</div>
<Separator className="bg-gradient-to-r from-transparent via-white/15 to-transparent" />

<div className="max-w-7xl mx-auto px-6 lg:px-8 py-5">

  <div className="flex flex-col md:flex-row items-center justify-between gap-5">

    <p className="text-sm text-slate-300 text-center md:text-left">
      © 2026 <span className="font-semibold text-white">FlowFix Plumbing</span>. All Rights Reserved.
    </p>

    <div className="flex items-center gap-6 text-sm">

      <Link
        to="/privacy"
        className="text-slate-300 hover:text-white transition"
      >
        Privacy Policy
      </Link>

      <Link
        to="/terms"
        className="text-slate-300 hover:text-white transition"
      >
        Terms of Service
      </Link>

    </div>

  </div>

</div>

</footer>
  );
}

export default Footer;

