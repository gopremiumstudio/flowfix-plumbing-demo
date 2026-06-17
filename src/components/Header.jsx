
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
    <header className="sticky top-0 z-50 bg-white border-b shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
<Link to="/" className="flex items-center">
  <img
    src="/images/cropped.logo.png"
    alt="FlowFix Plumbing"
    className="h-14 w-auto"
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
          <Button className="hidden lg:flex items-center gap-0 bg-red-600 hover:bg-red-700 text-white font-semibold">
            <Phone className="w-4 h-4" />
            Call Now: 1300 555 247
          </Button>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
       <a
  href="tel:1300555247"
  className="ml-auto mr-1 mt-1 flex items-center gap-1 text-blue-700 font-bold text-lg"
>
  <Phone className="w-5 h-5" />
  1300 555 247
</a>

            <SheetTrigger asChild className="lg:hidden">
              <Button variant="outline" size="icon">
                <Menu className="w-5 h-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px]">
              <div className="flex flex-col gap-6 mt-8">
                <Link to="/" className="flex items-center gap-3 mb-4">
  <img
    src="/images/logo.png"
    alt="FlowFix Plumbing"
    className="h-10 md:h-12 w-auto"
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
