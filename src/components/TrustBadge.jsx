
import React from 'react';

function TrustBadge({ icon: Icon, title, description }) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="w-16 h-16 rounded-xl bg-primary-foreground/10 flex items-center justify-center mb-4">
        <Icon className="w-8 h-8 text-primary-foreground" />
      </div>
      <h3 className="font-semibold text-lg mb-2">{title}</h3>
      <p className="text-primary-foreground/80 text-sm leading-relaxed">{description}</p>
    </div>
  );
}

export default TrustBadge;
