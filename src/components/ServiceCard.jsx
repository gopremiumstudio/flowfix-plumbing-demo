
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import {Phone} from 'lucide-react';

function ServiceCard({ image, icon: Icon, title, description, features, link, variant,buttonText,featured = 'default' }) {
  const cardClasses = variant === 'featured'
? 'bg-[#F4F8FF]border border-blu-100 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300'
: 'bg-[#F4F8FF]border border-blu-100 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300'
if (title === '24/7 Emergency Plumbing') {
  return (
    <Card className="
relative
group
overflow-hidden
rounded-3xl
border-0
bg-[rgba(10,30,70,0.58)]
backdrop-blur-2xl
shadow-[0_20px_60px_rgba(0,0,0,0.35)]
">
  <div className="absolute inset-0 bg-gradient-to-br from-cyan-200/20 via-transparent to-blue-500/20 pointer-events-none"></div>
  <div className="absolute -top-16 -left-16 w-40 h-40 bg-cyan-300/15 rounded-full blur-3xl pointer-events-none"></div>


      {/* Image Section */}
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover"
        />

        <div className="absolute top-4 left-4">
          <span className="bg-red-600 text-white px-4 py-2 rounded-full text-xs font-bold shadow-lg">
            🔥 MOST POPULAR
          </span>
        </div>

        {/* Floating Response Card */}
        <div className="absolute bottom-4 right-4 bg-white rounded-2xl shadow-2xl p-3 min-w-[125px]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-xl">
              ⏰
            </div>

            <div>
              <div className="text-red-600 text-lg font-black leading-none">
                24/7
              </div>

               <div className="text-[11px] text-slate-500 leading-tight">
                Available
              </div>
            </div>
          </div>

          <div className="mt-2 text-xs text-slate-600">
            30-60 Min Response
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 p-5 flex flex-col h-full">

        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-cyan-400/20 via-cyan-300/10 to-transparent pointer-events-none"></div>

        <h3 className="text-3xl font-black text-white mb-2">
          {title}
        </h3>

        <p className="text-blue-100 mb-5 min-h-[50px]">
          {description}
        </p>

        {/* Feature Boxes */}
        <div className="flex flex-wrap gap-2 mb-4">

  <span className="px-3 py-2 rounded-full bg-blue-100 text-blue-700 text-xs font-semibold">
    ⚡ Same Day Service
  </span>

  <span className="px-3 py-2 rounded-full bg-green-100 text-green-700 text-xs font-semibold">
    ✓ Licensed & Insured
  </span>

  <span className="px-3 py-2 rounded-full bg-orange-100 text-orange-700 text-xs font-semibold">
    💲 Upfront Pricing
  </span>

</div>

        {/* Features */}
        <div className="space-y-2 mb-4 min-h-[90px]">
          {features?.map((feature, index) => (
            <div key={index} className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                ✓
              </div>

              <span className="text-blue-50">
                {feature}
              </span>
            </div>
          ))}
        </div>

        {/* Stats Strip */}
        <div className="bg-[#163BA5C] rounded-2xl p-2 flex justify-between">

          <div>
            <div className="text-white text-2xl font-black">
              500+
            </div>

            <div className="text-xs text-blue-100">
              Jobs Completed
            </div>
          </div>

          <div className="text-right">
            <div className="text-yellow-500">
              ★★★★★
            </div>

            <div className="text-xs text-blue-100">
              4.9 Rating
            </div>
          </div>

        </div>

        <Button
  asChild
  className="w-full bg-gradient-to-r from-[#DC2626] via-[#EF4444] to-[#F87171] hover:from-[#B91C1C] hover:via-[#DC2626] hover:to-[#EF4444] text-white rounded-2xl h-14 font-bold shadow-[0_20px_50px_rgba(239,68,68,.45)] hover:shadow-[0_25px_60px_rgba(239,68,68,.60)] transition-all duration-300 hover:scale-[1.02]"
>
  <a href="tel:1300555247">
    {buttonText || 'Call 1300 555 247'}
    <Phone className="ml-2 w-4 h-4" />
  </a>
</Button>

      </div>

    </Card>
  );
}
if (title === 'Blocked Drains') {
  return (
    <Card className="
      relative
      group
      overflow-hidden
      rounded-3xl
      border-0
      bg-[rgba(10,30,70,0.58)]
      backdrop-blur-2xl
      shadow-[0_20px_60px_rgba(0,0,0,0.35)]
    ">

      <div className="absolute inset-0 bg-gradient-to-br from-cyan-200/15 via-transparent to-blue-500/20 pointer-events-none"></div>

      <div className="absolute -top-16 -right-16 w-40 h-40 bg-blue-400/15 rounded-full blur-3xl pointer-events-none"></div>

      {/* Image Section */}
      <div className="relative">

        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover"
        />

        <div className="absolute top-4 left-4">
          <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-xs font-bold shadow-lg">
            🚿 DRAIN SPECIALIST
          </span>
        </div>

       {/* Floating CCTV Card */}
<div className="absolute bottom-4 right-4 bg-white rounded-2xl shadow-2xl p-3 min-w-[125px]">
  <div className="flex items-center gap-2.5">
    <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-xl">
      📹
    </div>

    <div>
      <div className="text-blue-600 text-lg font-black leading-none">
        CCTV
      </div>

      <div className="text-[11px] text-slate-500 leading-tight">
        Inspection
      </div>
    </div>
  </div>

  <div className="mt-1 text-[10px] text-slate-600">
    Advanced Diagnostics
  </div>
</div>
</div>

      {/* Content */}
      <div className="relative z-10 p-5 flex flex-col h-full">

        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-cyan-400/15 via-cyan-300/10 to-transparent pointer-events-none"></div>

        <h3 className="text-3xl font-black text-white mb-2">
          {title}
        </h3>

        <p className="text-blue-100 mb-5 min-h-[50px]">
          {description}
        </p>

        {/* Feature Badges */}
        <div className="flex flex-wrap gap-2 mb-4">

          <span className="px-3 py-2 rounded-full bg-blue-100 text-blue-700 text-xs font-semibold">
            📹 CCTV Inspection
          </span>

          <span className="px-3 py-2 rounded-full bg-green-100 text-green-700 text-xs font-semibold">
            🚿 High Pressure Jetting
          </span>

          <span className="px-3 py-2 rounded-full bg-orange-100 text-orange-700 text-xs font-semibold">
            ⚡ Same Day Service
          </span>

        </div>

        {/* Features */}
        <div className="space-y-2 mb-4 min-h-[90px]">

          {features?.map((feature, index) => (

            <div key={index} className="flex items-center gap-3">

              <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                ✓
              </div>

              <span className="text-blue-50">
                {feature}
              </span>

            </div>

          ))}

        </div>

        {/* Stats */}
        <div className="bg-[#163B5C] rounded-2xl p-2 flex justify-between mb-2 mt-auto">

          <div>
            <div className="text-cyan-300 text-2xl font-black">
              1,200+
            </div>

            <div className="text-xs text-blue-100">
              Drains Cleared
            </div>
          </div>

          <div className="text-right">

            <div className="text-yellow-500">
              ★★★★★
            </div>

            <div className="text-xs text-blue-100">
              4.9 Rating
            </div>

          </div>

        </div>

        <Button
          asChild
          className="w-full bg-gradient-to-r from-[#2563EB] via-[#3B82F6] to-[#06B6D4] hover:from-[#1D4ED8] hover:via-[#2563EB] hover:to-[#0891B2] text-white rounded-2xl h-14 font-bold shadow-[0_20px_50px_rgba(37,99,235,.45)] hover:shadow-[0_25px_60px_rgba(37,99,235,.60)] transition-all duration-300 hover:scale-[1.02]"
        >
          <Link to={link}>
            {buttonText || 'Get Free Quote'}
            <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </Button>

      </div>

    </Card>
  );
}

if (title === 'Hot Water Systems') {
  return (
    <Card className="
      relative
      group
      overflow-hidden
      rounded-3xl
      border-0
      bg-[rgba(10,30,70,0.58)]
      backdrop-blur-2xl
      shadow-[0_20px_60px_rgba(0,0,0,0.35)]
    ">

      <div className="absolute inset-0 bg-gradient-to-br from-orange-200/15 via-transparent to-orange-500/20 pointer-events-none"></div>

      <div className="absolute -top-16 -right-16 w-40 h-40 bg-orange-400/15 rounded-full blur-3xl pointer-events-none"></div>

      {/* Image Section */}
      <div className="relative">

        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover"
        />

        <div className="absolute top-4 left-4">
          <span className="bg-orange-600 text-white px-4 py-2 rounded-full text-xs font-bold shadow-lg">
            🔥 HOT WATER EXPERT
          </span>
        </div>

        {/* Floating Card */}
<div className="absolute bottom-4 right-4 bg-white rounded-2xl shadow-2xl p-3 min-w-[125px]">

  <div className="flex items-center gap-2.5">

    <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center text-xl">
      ♨️
    </div>

    <div>

      <div className="text-orange-600 text-lg font-black leading-none">
        HOT
      </div>

      <div className="text-[11px] text-slate-500 leading-tight">
        Water Systems
      </div>

    </div>

  </div>

  <div className="mt-1 text-[10px] text-slate-600">
    Repairs & Installation
  </div>

</div>


      </div>

      {/* Content */}
      <div className="relative z-10 p-5 flex flex-col h-full">

        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-orange-400/15 via-orange-300/10 to-transparent pointer-events-none"></div>

        <h3 className="text-3xl font-black text-white mb-2">
          {title}
        </h3>

        <p className="text-blue-100 mb-5 min-h-[50px]">
          {description}
        </p>

        {/* Feature Badges */}
        <div className="flex flex-wrap gap-2 mb-4">

          <span className="px-3 py-2 rounded-full bg-orange-100 text-orange-700 text-xs font-semibold">
            🔥 Gas Systems
          </span>

          <span className="px-3 py-2 rounded-full bg-blue-100 text-blue-700 text-xs font-semibold">
            ⚡ Electric Systems
          </span>

          <span className="px-3 py-2 rounded-full bg-green-100 text-green-700 text-xs font-semibold">
            🚿 Same Day Repair
          </span>

        </div>

        {/* Features */}
        <div className="space-y-2 mb-4 min-h-[90px]">

          {features?.map((feature, index) => (

            <div key={index} className="flex items-center gap-3">

              <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                ✓
              </div>

              <span className="text-blue-50">
                {feature}
              </span>

            </div>

          ))}

        </div>

        {/* Stats */}
        <div className="bg-[#163B5C] rounded-2xl p-2 flex justify-between mb-2 mt-auto">

          <div>

            <div className="text-orange-300 text-2xl font-black">
              800+
            </div>

            <div className="text-xs text-blue-100">
              Systems Installed
            </div>

          </div>

          <div className="text-right">

            <div className="text-yellow-500">
              ★★★★★
            </div>

            <div className="text-xs text-blue-100">
              4.9 Rating
            </div>

          </div>

        </div>

        <Button
          asChild
          className="w-full bg-gradient-to-r from-[#2563EB] via-[#3B82F6] to-[#06B6D4] hover:from-[#1D4ED8] hover:via-[#2563EB] hover:to-[#0891B2] text-white rounded-2xl h-14 font-bold shadow-[0_20px_50px_rgba(37,99,235,.45)] hover:shadow-[0_25px_60px_rgba(37,99,235,.60)] transition-all duration-300 hover:scale-[1.02]"
        >
          <Link to={link}>
            {buttonText || 'Get Free Quote'}
            <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </Button>

      </div>

    </Card>
  );
}

if (title === 'Leak Repairs') {
  return (
    <Card className="
      relative
      group
      overflow-hidden
      rounded-3xl
      border-0
      bg-[rgba(10,30,70,0.58)]
      backdrop-blur-2xl
      shadow-[0_20px_60px_rgba(0,0,0,0.35)]
    ">

      <div className="absolute inset-0 bg-gradient-to-br from-cyan-200/15 via-transparent to-cyan-500/20 pointer-events-none"></div>

      <div className="absolute -top-16 -right-16 w-40 h-40 bg-cyan-400/15 rounded-full blur-3xl pointer-events-none"></div>

      {/* Image Section */}
      <div className="relative">

        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover"
        />

        <div className="absolute top-4 left-4">
          <span className="bg-cyan-600 text-white px-4 py-2 rounded-full text-xs font-bold shadow-lg">
            💧 LEAK DETECTION
          </span>
        </div>

        <div className="absolute bottom-4 right-4 bg-white rounded-2xl shadow-2xl p-3 min-w-[125px]">

  <div className="flex items-center gap-2.5">

    <div className="w-10 h-10 rounded-xl bg-cyan-50 flex items-center justify-center text-xl">
      💧
    </div>

    <div>

      <div className="text-cyan-600 text-lg font-black leading-none">
        FAST
      </div>

      <div className="text-[11px] text-slate-500 leading-tight">
        Detection
      </div>

    </div>

  </div>

  <div className="mt-1 text-[10px] text-slate-600">
    Non-Invasive Testing
  </div>

</div>

      </div>

      {/* Content */}
      <div className="relative z-10 p-5 flex flex-col h-full">

        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-cyan-400/15 via-cyan-300/10 to-transparent pointer-events-none"></div>

        <h3 className="text-3xl font-black text-white mb-2">
          {title}
        </h3>

        <p className="text-blue-100 mb-5 min-h-[50px]">
          {description}
        </p>

        {/* Feature Badges */}
        <div className="flex flex-wrap gap-2 mb-4">

          <span className="px-3 py-2 rounded-full bg-cyan-100 text-cyan-700 text-xs font-semibold">
            💧 Leak Detection
          </span>

          <span className="px-3 py-2 rounded-full bg-blue-100 text-blue-700 text-xs font-semibold">
            📡 Thermal Imaging
          </span>

          <span className="px-3 py-2 rounded-full bg-green-100 text-green-700 text-xs font-semibold">
            ⚡ Same Day Repair
          </span>

        </div>

        {/* Features */}
        <div className="space-y-2 mb-4 min-h-[90px]">

          {features?.map((feature, index) => (

            <div key={index} className="flex items-center gap-3">

              <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                ✓
              </div>

              <span className="text-blue-50">
                {feature}
              </span>

            </div>

          ))}

        </div>

        {/* Stats */}
        <div className="bg-[#163B5C] rounded-2xl p-2 flex justify-between mb-2 mt-auto">

          <div>

            <div className="text-cyan-300 text-2xl font-black">
              900+
            </div>

            <div className="text-xs text-blue-100">
              Leaks Repaired
            </div>

          </div>

          <div className="text-right">

            <div className="text-yellow-500">
              ★★★★★
            </div>

            <div className="text-xs text-blue-100">
              4.9 Rating
            </div>

          </div>

        </div>

        <Button
          asChild
          className="w-full bg-gradient-to-r from-[#2563EB] via-[#3B82F6] to-[#06B6D4] hover:from-[#1D4ED8] hover:via-[#2563EB] hover:to-[#0891B2] text-white rounded-2xl h-14 font-bold shadow-[0_20px_50px_rgba(37,99,235,.45)] hover:shadow-[0_25px_60px_rgba(37,99,235,.60)] transition-all duration-300 hover:scale-[1.02]"
        >
          <Link to={link}>
            {buttonText || 'Get Free Quote'}
            <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </Button>

      </div>

    </Card>
  );
}

if (title === 'Pipe Maintenance') {
  return (
    <Card className="
      relative
      group
      overflow-hidden
      rounded-3xl
      border-0
      bg-[rgba(10,30,70,0.58)]
      backdrop-blur-2xl
      shadow-[0_20px_60px_rgba(0,0,0,0.35)]
    ">

      <div className="absolute inset-0 bg-gradient-to-br from-green-200/15 via-transparent to-green-500/20 pointer-events-none"></div>

      <div className="absolute -top-16 -right-16 w-40 h-40 bg-green-400/15 rounded-full blur-3xl pointer-events-none"></div>

      {/* Image Section */}
      <div className="relative">

        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover"
        />

        <div className="absolute top-4 left-4">
          <span className="bg-green-600 text-white px-4 py-2 rounded-full text-xs font-bold shadow-lg">
            🔧 PREVENTATIVE CARE
          </span>
        </div>

        {/* Floating Card */}
<div className="absolute bottom-4 right-4 bg-white rounded-2xl shadow-2xl p-3 min-w-[125px]">

  <div className="flex items-center gap-2.5">

    <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center text-xl">
      🔧
    </div>

    <div>

      <div className="text-green-600 text-lg font-black leading-none">
        PRO
      </div>

      <div className="text-[11px] text-slate-500 leading-tight">
        Maintenance
      </div>

    </div>

  </div>

  <div className="mt-1 text-[10px] text-slate-600">
    Extend Pipe Life
  </div>

</div>

      </div>

      {/* Content */}
      <div className="relative z-10 p-5 flex flex-col h-full">

        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-green-400/15 via-green-300/10 to-transparent pointer-events-none"></div>

        <h3 className="text-3xl font-black text-white mb-2">
          {title}
        </h3>

        <p className="text-blue-100 mb-5 min-h-[50px]">
          {description}
        </p>

        {/* Feature Badges */}
        <div className="flex flex-wrap gap-2 mb-4">

          <span className="px-3 py-2 rounded-full bg-green-100 text-green-700 text-xs font-semibold">
            🔧 Preventative Maintenance
          </span>

          <span className="px-3 py-2 rounded-full bg-blue-100 text-blue-700 text-xs font-semibold">
            🚿 Pipe Inspections
          </span>

          <span className="px-3 py-2 rounded-full bg-orange-100 text-orange-700 text-xs font-semibold">
            ⚡ Same Day Service
          </span>

        </div>

        {/* Features */}
        <div className="space-y-2 mb-4 min-h-[90px]">

          {features?.map((feature, index) => (

            <div key={index} className="flex items-center gap-3">

              <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                ✓
              </div>

              <span className="text-blue-50">
                {feature}
              </span>

            </div>

          ))}

        </div>

        {/* Stats */}
        <div className="bg-[#163B5C] rounded-2xl p-2 flex justify-between mb-2 mt-auto">

          <div>

            <div className="text-green-300 text-2xl font-black">
              1,500+
            </div>

            <div className="text-xs text-blue-100">
              Pipes Maintained
            </div>

          </div>

          <div className="text-right">

            <div className="text-yellow-500">
              ★★★★★
            </div>

            <div className="text-xs text-blue-100">
              4.9 Rating
            </div>

          </div>

        </div>

        <Button
          asChild
          className="w-full bg-gradient-to-r from-[#2563EB] via-[#3B82F6] to-[#06B6D4] hover:from-[#1D4ED8] hover:via-[#2563EB] hover:to-[#0891B2] text-white rounded-2xl h-14 font-bold shadow-[0_20px_50px_rgba(37,99,235,.45)] hover:shadow-[0_25px_60px_rgba(37,99,235,.60)] transition-all duration-300 hover:scale-[1.02]"
        >
          <Link to={link}>
            {buttonText || 'Get Free Quote'}
            <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </Button>

      </div>

    </Card>
  );
}
if (title === 'Bathroom Renovations') {
  return (
    <Card className="
      relative
      group
      overflow-hidden
      rounded-3xl
      border-0
      bg-[rgba(10,30,70,0.58)]
      backdrop-blur-2xl
      shadow-[0_20px_60px_rgba(0,0,0,0.35)]
    ">

      <div className="absolute inset-0 bg-gradient-to-br from-purple-200/15 via-transparent to-purple-500/20 pointer-events-none"></div>

      <div className="absolute -top-16 -right-16 w-40 h-40 bg-purple-400/15 rounded-full blur-3xl pointer-events-none"></div>

      {/* Image Section */}
      <div className="relative">

        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover"
        />

        <div className="absolute top-4 left-4">
          <span className="bg-purple-600 text-white px-4 py-2 rounded-full text-xs font-bold shadow-lg">
            🛁 RENOVATION EXPERT
          </span>
        </div>

        {/* Floating Card */}
<div className="absolute bottom-4 right-4 bg-white rounded-2xl shadow-2xl p-3 min-w-[125px]">

  <div className="flex items-center gap-2.5">

    <div className="w-10 h-10 rounded-xl bg-purple-50 flex items-center justify-center text-xl">
      🛁
    </div>

    <div>

      <div className="text-purple-600 text-lg font-black leading-none">
        CUSTOM
      </div>

      <div className="text-[11px] text-slate-500 leading-tight">
        Design
      </div>

    </div>

  </div>

  <div className="mt-1 text-[10px] text-slate-600">
    Modern Renovations
  </div>

</div>

      </div>

      {/* Content */}
      <div className="relative z-10 p-5 flex flex-col h-full">

        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-purple-400/15 via-purple-300/10 to-transparent pointer-events-none"></div>

        <h3 className="text-3xl font-black text-white mb-2">
          {title}
        </h3>

        <p className="text-blue-100 mb-5 min-h-[50px]">
          {description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">

          <span className="px-3 py-2 rounded-full bg-purple-100 text-purple-700 text-xs font-semibold">
            🛁 Full Renovations
          </span>

          <span className="px-3 py-2 rounded-full bg-blue-100 text-blue-700 text-xs font-semibold">
            🚿 Luxury Showers
          </span>

          <span className="px-3 py-2 rounded-full bg-green-100 text-green-700 text-xs font-semibold">
            ✓ Premium Finishes
          </span>

        </div>

        <div className="space-y-2 mb-4 min-h-[90px]">

          {features?.map((feature, index) => (

            <div key={index} className="flex items-center gap-3">

              <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                ✓
              </div>

              <span className="text-blue-50">
                {feature}
              </span>

            </div>

          ))}

        </div>

        <div className="bg-[#163B5C] rounded-2xl p-2 flex justify-between mb-2 mt-auto">

          <div>
            <div className="text-purple-300 text-2xl font-black">
              300+
            </div>

            <div className="text-xs text-blue-100">
              Renovations Completed
            </div>
          </div>

          <div className="text-right">

            <div className="text-yellow-500">
              ★★★★★
            </div>

            <div className="text-xs text-blue-100">
              4.9 Rating
            </div>

          </div>

        </div>

        <Button
          asChild
          className="w-full bg-gradient-to-r from-[#2563EB] via-[#3B82F6] to-[#06B6D4] hover:from-[#1D4ED8] hover:via-[#2563EB] hover:to-[#0891B2] text-white rounded-2xl h-14 font-bold shadow-[0_20px_50px_rgba(37,99,235,.45)] hover:shadow-[0_25px_60px_rgba(37,99,235,.60)] transition-all duration-300 hover:scale-[1.02]"
        >
          <Link to={link}>
            {buttonText || 'Get Free Quote'}
            <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </Button>

      </div>

    </Card>
  );
}


  return (
    
    <Card className={`group flex flex-col h-full overflow-hidden rounded-3xl ${cardClasses}`}>
      <CardHeader className="p-0">
        {image ? (
  <div className="relative overflow-hidden">
    <img
      src={image}
      alt={title}
      className="w-full h-40
       object-cover transition-transform duration-500 group-hover:scale-110"
    />

    {title === '24/7 Emergency Plumbing' && (
      <div className="absolute top-3 right-3">
        <span className="bg-red-600 text-white text-[11px] font-bold px-3 py-1.5 rounded-full shadow-lg">
          MOST POPULAR
        </span>
      </div>
    )}
  </div>
) : (

  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
    <Icon className="w-7 h-7 text-primary" />
  </div>
)}

        <CardTitle className="text-2xl font-black text-blue-950 pt-4">{title}</CardTitle>
        <CardDescription className="text-base leading-relaxed px-6 pt-2 text-slate-600">{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow px-6 pt-2">
        
        <div className="flex flex-wrap gap-2 mb-3">p
  <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-semibold">
    Same Day Service
  </span>

  <span className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-semibold">
    Licensed & Insured
  </span>

  <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-700 text-xs font-semibold">
    Upfront Pricing
  </span>
</div>

        {features && features.length > 0 && (
          <ul className="space-y-4">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center gap-3 text-sm font-medium text-slate-700">
  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
    <span className="text-green-600 text-xs font-bold">✓</span>
  </div>

  <span>{feature}</span>
</li>
            ))}
          </ul>
        )}
      </CardContent>
      <CardFooter className="mt-auto px-6 pb-6">
        <Button
  asChild
  className={
    title === '24/7 Emergency Plumbing'
      ? 'w-full bg-red-600 hover:bg-red-700 text-white rounded-xl h-12 font-bold'
      : 'w-full bg-blue-600 hover:bg-blue-700 text-white rounded-xl h-12 font-bold'
  }
>
          <Link to={link}>
  {buttonText || 'Get Free Quote'}
  <ArrowRight className="ml-2 w-4 h-4" />
</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}

export default ServiceCard;
