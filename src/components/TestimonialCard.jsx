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
<Card
className="
overflow-hidden
rounded-3xl
border border-blue-100
bg-white/95
backdrop-blur-xl
shadow-[0_15px_50px_rgba(37,99,235,0.12)]
hover:shadow-[0_20px_60px_rgba(37,99,235,0.18)]
hover:-translate-y-2
transition-all
duration-300
"
>
<CardContent className="p-6">

    <div className="flex items-center justify-between mb-5">

      <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-5 h-5 ${
              i < rating
                ? 'fill-yellow-400 text-yellow-400'
                : 'text-gray-300'
            }`}
          />
        ))}
      </div>

      <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center">
        <Quote className="w-6 h-6 text-blue-500" />
      </div>

    </div>

    <p className="text-slate-700 leading-relaxed text-[15px] mb-6 italic line-clamp-4">
      "{text}"
    </p>

    <div className="border-t border-blue-100 pt-5">

      <div className="flex items-center gap-4">

        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white flex items-center justify-center font-bold shadow-lg">
          {initials}
        </div>

        <div>

          <h4 className="font-bold text-slate-900">
            {name}
          </h4>

          {service && (
            <p className="text-sm text-blue-600 font-semibold">
              {service}
            </p>
          )}

          {location && (
            <p className="text-xs text-slate-500">
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
