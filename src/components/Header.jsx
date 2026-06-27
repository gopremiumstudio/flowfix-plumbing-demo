
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Phone, } from 'lucide-react';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/residential', label: 'Residential Plumbing' },
    { path: '/commercial', label: 'Commercial Plumbing' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/testimonials', label: 'Testimonials' },
    { path: '/quote', label: 'Get Quote' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-xl border-b border-white/20 shadow-[0_8px_30px_rgba(0,0,0,0.08)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[56px] lg:h[68px]">
          {/* Logo */}
<Link to="/" className="flex items-center">
  <img
    src="/images/cropped.logo.png"
    alt="FlowFix Plumbing"
    className="h-11 lg:h14 w-auto"
  />
</Link>


          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActive(link.path)
                    ? 'text-primary bg-primary/10'
                    : 'text-foreground hover:text-primary hover:bg-muted'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Call Now Button - Desktop */}
          <Button
  className="hidden lg:flex items-center gap-2 rounded-full h-12 px-6
  bg-gradient-to-r from-red-600 to-red-500
  hover:from-red-700 hover:to-red-600
  text-white font-bold shadow-[0_10px_30px_rgba(220,38,38,.35)]
  hover:shadow-[0_12px_35px_rgba(220,38,38,.5)]
  transition-all duration-300 hover:scale-[1.02]"
>
  <Phone className="w-5 h-5" />
  1300 555 247
</Button>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
       
<SheetTrigger asChild>
  <Button
    variant="outline"
    size="icon"
    className="lg:hidden h-11 w-11 rounded-2xl bg-white shadow-md border border-gray-200"
  >
    <Menu className="w-5 h-5" />
  </Button>
</SheetTrigger>

            <SheetContent side="right" className="w-[300px]">
              <div className="flex flex-col gap-6 mt-8">
                <Link to="/" className="flex items-center gap-3 mb-4">
  <img
    src="/images/logo.png"
    alt="FlowFix Plumbing"
    className="h-12 md:h-14 w-auto"
  />

  <span className="text-2xl font-bold text-primary">
    FlowFix Plumbing
  </span>
</Link>


                <nav className="flex flex-col gap-2">
                  {navLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                        isActive(link.path)
                          ? 'text-primary bg-primary/10'
                          : 'text-foreground hover:bg-muted'
                      }`}
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>

                <Button className="w-full mt-4 transition-all duration-200 active:scale-[0.98]">
                  <Phone className="w-4 h-4 mr-2" />
                  Call Now
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

export default Header;
