
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

function ServiceCard({ image, icon: Icon, title, description, features, link, variant,buttonText,featured = 'default' }) {
  const cardClasses = variant === 'featured'
? 'bg-white border border-slate-200 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300'
: 'bg-white border border-slate-200 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300'

  return (
    <Card className={`group flex flex-col h-full overflow-hidden rounded-3xl ${cardClasses}`}>
      <CardHeader className="p-0">
        {image ? (
  <div className="relative overflow-hidden">
    <img
      src={image}
      alt={title}
      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
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

        <CardTitle className="text-2xl font-black text-slate-900 px-6 pt-6">{title}</CardTitle>
        <CardDescription className="text-base leading-relaxed px-6 pt-2 text-slate-600">{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow px-6 pt-4">
        <div className="flex flex-wrap gap-2 mb-5">
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
  className={title === '24/7 Emergency Plumbing'
  ? 'w-full bg-red-600 hover:bg-red-700 text-white'
  : 'w-full'
}
  variant={variant === 'featured' ? 'default' : 'outline'}
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
