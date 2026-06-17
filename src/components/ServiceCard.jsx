
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

function ServiceCard({ image, icon: Icon, title, description, features, link, variant = 'default' }) {
  const cardClasses = variant === 'featured'
  ? 'bg-slate-50 border border-slate-200 shadow-lg hover:shadow-2xl hover:-translate-y-3 hover:border-primary/40 transition-all duration-500 rounded-2xl'
  : 'bg-slate-50 border border-slate-200 shadow-md hover:shadow-2xl hover:-translate-y-3 hover:border-primary/40 transition-all duration-500 rounded-2xl';

  return (
    <Card className={`group flex flex-col h-full overflow-hidden-3xl${cardClasses}`}>
      <CardHeader className="pb-4">
        {image ? (
  <img
    src={image}
    alt={title}
    className="w-full h-64 object-cover rounded-xl mb-4 transition-transform duration-500 group-hover:scale-105"
  />
) : (
  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
    <Icon className="w-7 h-7 text-primary" />
  </div>
)}

        <CardTitle className="text-2xl font-extrabold text-slate-900">{title}</CardTitle>
        <CardDescription className="text-base leading-relaxed">{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        {features && features.length > 0 && (
          <ul className="space-y-2">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start gap-2 text-sm">
                <span className="text-primary mt-0.5">✓</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        )}
      </CardContent>
      <CardFooter className="mt-auto">
        <Button asChild variant={variant === 'featured' ? 'default' : 'outline'} className="w-full group transition-all duration-300 rounded-xl font-semibold hover:scale-105">
          <Link to={link}>
            Get Free Quote
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}

export default ServiceCard;
