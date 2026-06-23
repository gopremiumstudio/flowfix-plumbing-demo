
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

function ServiceCard({ image, icon: Icon, title, description, features, link, variant,buttonText,featured = 'default' }) {
  const cardClasses = variant === 'featured'
? 'bg-white border border-slate-200 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300'
: 'bg-white border border-slate-200 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300'
if (title === '24/7 Emergency Plumbing') {
  return (
    <Card className="group overflow-hidden rounded-3xl bg-white border border-slate-200 shadow-xl hover:shadow-2xl transition-all duration-300">

      {/* Image Section */}
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-full h-56 object-cover"
        />

        <div className="absolute top-4 left-4">
          <span className="bg-red-600 text-white px-4 py-2 rounded-full text-xs font-bold shadow-lg">
            🔥 MOST POPULAR
          </span>
        </div>

        {/* Floating Response Card */}
        <div className="absolute bottom-4 right-4 bg-white rounded-2xl shadow-xl p-4 min-w-[140px]">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-2xl">
              ⏰
            </div>

            <div>
              <div className="text-red-600 text-xl font-black">
                24/7
              </div>

              <div className="text-xs text-slate-500">
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
      <div className="p-6">

        <h3 className="text-3xl font-black text-blue-950 mb-2">
          {title}
        </h3>

        <p className="text-slate-600 mb-5">
          {description}
        </p>

        {/* Feature Boxes */}
        <div className="grid grid-cols-3 gap-2 mb-5">

          <div className="bg-blue-50 rounded-2xl p-3 text-center">
            <div className="text-blue-700 font-bold text-sm">
              Same Day
            </div>
          </div>

          <div className="bg-green-50 rounded-2xl p-3 text-center">
            <div className="text-green-700 font-bold text-sm">
              Licensed
            </div>
          </div>

          <div className="bg-orange-50 rounded-2xl p-3 text-center">
            <div className="text-orange-700 font-bold text-sm">
              Upfront
            </div>
          </div>

        </div>

        {/* Features */}
        <div className="space-y-2 mb-4">
          {features?.map((feature, index) => (
            <div key={index} className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                ✓
              </div>

              <span className="text-slate-700">
                {feature}
              </span>
            </div>
          ))}
        </div>

        {/* Stats Strip */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-2 flex justify-between items-center mb-4">

          <div>
            <div className="text-blue-600 text-2xl font-black">
              500+
            </div>

            <div className="text-xs text-slate-500">
              Jobs Completed
            </div>
          </div>

          <div className="text-right">
            <div className="text-yellow-500">
              ★★★★★
            </div>

            <div className="text-xs text-slate-500">
              4.9 Rating
            </div>
          </div>

        </div>

        <Button
          asChild
          className="w-full bg-red-600 hover:bg-red-700 text-white rounded-2xl h-14 font-bold"
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
      className="w-full h-40 object-cover transition-transform duration-500 group-hover:scale-110"
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

        <CardTitle className="text-2xl font-black text-blue-950 pt-6 pt-4">{title}</CardTitle>
        <CardDescription className="text-base leading-relaxed px-6 pt-2 text-slate-600">{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow px-6 pt-2">
        
        <div className="flex flex-wrap gap-2 mb-3">
  <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-semibold">
    Test Serrvice
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
