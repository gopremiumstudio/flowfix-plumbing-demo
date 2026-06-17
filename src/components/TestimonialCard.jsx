import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';

function TestimonialCard({ name, rating, text, service, location }) {
  const initials = name
    ?.split(' ')
    .map(word => word[0])
    .join('')
    .slice(0, 2);

  return (
    <Card className="h-full border border-gray-100 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 bg-white">
      <CardContent className="p-7">

        <div className="flex items-center justify-between mb-5">
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < rating
                    ? 'fill-yellow-400 text-yellow-400'
                    : 'text-gray-300'
                }`}
              />
            ))}
          </div>

          <Quote className="w-8 h-8 text-blue-200" />
        </div>

        <p className="text-gray-700 leading-relaxed mb-6 text-[15px]">
          "{text}"
        </p>

        <div className="border-t pt-5">
          <div className="flex items-center gap-3">

            <div className="w-11 h-11 rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold">
              {initials}
            </div>

            <div>
              <h4 className="font-semibold text-foreground">
                {name}
              </h4>

              {service && (
                <p className="text-sm text-blue-600 font-medium">
                  {service}
                </p>
              )}

              {location && (
                <p className="text-xs text-muted-foreground">
                  📍 {location}
                </p>
              )}
            </div>

          </div>
        </div>

      </CardContent>
    </Card>
  );
}

export default TestimonialCard;
