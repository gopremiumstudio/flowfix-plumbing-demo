import React, { useState } from 'react';
import { Card } from '@/components/ui/card';

function BeforeAfterSlider({ beforeImage, afterImage, beforeAlt, afterAlt, title }) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const handleMove = (e) => {
    if (!isDragging && e.type !== 'click') return;
    
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.type.includes('mouse') ? e.clientX : e.touches[0].clientX) - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  return (
    <Card className="overflow-hidden shadow-lg">
      <div 
        className="relative aspect-[4/3] cursor-ew-resize select-none"
        onMouseDown={() => setIsDragging(true)}
        onMouseUp={() => setIsDragging(false)}
        onMouseLeave={() => setIsDragging(false)}
        onMouseMove={handleMove}
        onTouchStart={() => setIsDragging(true)}
        onTouchEnd={() => setIsDragging(false)}
        onTouchMove={handleMove}
        onClick={handleMove}
      >
        {/* After Image (Background) */}
        <div className="absolute inset-0">
          <img 
            src={afterImage} 
            alt={afterAlt}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-lg text-sm font-medium">
            After
          </div>
        </div>

        {/* Before Image (Clipped) */}
        <div 
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
          <img 
            src={beforeImage} 
            alt={beforeAlt}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-4 left-4 bg-muted text-foreground px-3 py-1 rounded-lg text-sm font-medium">
            Before
          </div>
        </div>

        {/* Slider Line */}
        <div 
          className="absolute top-0 bottom-0 w-1 bg-white shadow-lg"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center">
            <div className="flex gap-1">
              <div className="w-0.5 h-4 bg-primary"></div>
              <div className="w-0.5 h-4 bg-primary"></div>
            </div>
          </div>
        </div>
      </div>
      
      {title && (
        <div className="p-4 bg-muted">
          <p className="font-medium text-center">{title}</p>
        </div>
      )}
    </Card>
  );
}

export default BeforeAfterSlider;