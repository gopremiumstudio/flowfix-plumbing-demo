
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Phone, Mail, MapPin, CheckCircle2 } from 'lucide-react';
import { toast } from 'sonner';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

function QuoteRequestPage() {
  const [formData, setFormData] = useState({
    serviceType: '',
    propertyType: '',
    name: '',
    email: '',
    phone: '',
    address: '',
    issueDescription: '',
    preferredContact: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validation
    if (!formData.serviceType || !formData.propertyType || !formData.name || !formData.email || !formData.phone || !formData.address) {
      toast.error('Please fill in all required fields');
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error('Please enter a valid email address');
      return;
    }

    setIsSubmitting(true);

    // Simulate submission
    setTimeout(() => {
      // Store in localStorage
      const submissions = JSON.parse(localStorage.getItem('quoteSubmissions') || '[]');
      submissions.push({
        ...formData,
        timestamp: new Date().toISOString()
      });
      localStorage.setItem('quoteSubmissions', JSON.stringify(submissions));

      setIsSubmitting(false);
      setIsSubmitted(true);
      toast.success('Quote request submitted successfully');

      // Reset form
      setFormData({
        serviceType: '',
        propertyType: '',
        name: '',
        email: '',
        phone: '',
        address: '',
        issueDescription: '',
        preferredContact: ''
      });
    }, 1500);
  };

  return (
    <>
      <Helmet>
        <title>Request a Plumbing Quote - FlowFix Plumbing</title>
        <meta name="description" content="Get a free, no-obligation quote for residential or commercial plumbing services. Fill out our simple form and we'll contact you within 24 hours." />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6" style={{ letterSpacing: '-0.02em', textWrap: 'balance' }}>
                Get your free plumbing quote today
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl mx-auto">
                Tell us about your plumbing needs and we'll provide a customized quote within 24 hours. No obligation, no pressure.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Form Section */}
        <section className="py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Form */}
              <div className="lg:col-span-2">
                <Card className="shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-2xl">Request a quote</CardTitle>
                    <CardDescription>Fill out the form below and we'll get back to you shortly</CardDescription>
                  </CardHeader>
                  <CardContent>
                    {isSubmitted ? (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3 }}
                        className="text-center py-12"
                      >
                        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                          <CheckCircle2 className="w-8 h-8 text-primary" />
                        </div>
                        <h3 className="text-2xl font-bold text-foreground mb-4">Quote request received</h3>
                        <p className="text-muted-foreground leading-relaxed mb-8">
                          Thank you for your interest in FlowFix Plumbing. We'll review your request and contact you within 24 hours with a customized quote.
                        </p>
                        <Button onClick={() => setIsSubmitted(false)} className="transition-all duration-200 active:scale-[0.98]">
                          Submit Another Request
                        </Button>
                      </motion.div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Service Type */}
                        <div className="space-y-2">
                          <Label htmlFor="serviceType">Service Type *</Label>
                          <Select value={formData.serviceType} onValueChange={(value) => handleChange('serviceType', value)}>
                            <SelectTrigger id="serviceType" className="text-gray-900">
                              <SelectValue placeholder="Select service type" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="emergency">Emergency Plumbing</SelectItem>
                              <SelectItem value="blocked-drains">Blocked Drains</SelectItem>
                              <SelectItem value="hot-water">Hot Water Systems</SelectItem>
                              <SelectItem value="leak-repairs">Leak Repairs</SelectItem>
                              <SelectItem value="pipe-maintenance">Pipe Maintenance</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        {/* Property Type */}
                        <div className="space-y-2">
                          <Label htmlFor="propertyType">Property Type *</Label>
                          <Select value={formData.propertyType} onValueChange={(value) => handleChange('propertyType', value)}>
                            <SelectTrigger id="propertyType" className="text-gray-900">
                              <SelectValue placeholder="Select property type" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="residential">Residential</SelectItem>
                              <SelectItem value="commercial">Commercial</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        {/* Name */}
                        <div className="space-y-2">
                          <Label htmlFor="name">Full Name *</Label>
                          <Input
                            id="name"
                            type="text"
                            value={formData.name}
                            onChange={(e) => handleChange('name', e.target.value)}
                            placeholder="Enter your full name"
                            className="text-gray-900 placeholder:text-gray-400"
                            required
                          />
                        </div>

                        {/* Email */}
                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address *</Label>
                          <Input
                            id="email"
                            type="email"
                            value={formData.email}
                            onChange={(e) => handleChange('email', e.target.value)}
                            placeholder="your.email@example.com"
                            className="text-gray-900 placeholder:text-gray-400"
                            required
                          />
                        </div>

                        {/* Phone */}
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone Number *</Label>
                          <Input
                            id="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => handleChange('phone', e.target.value)}
                            placeholder="(555) 123-4567"
                            className="text-gray-900 placeholder:text-gray-400"
                            required
                          />
                        </div>

                        {/* Address */}
                        <div className="space-y-2">
                          <Label htmlFor="address">Property Address *</Label>
                          <Input
                            id="address"
                            type="text"
                            value={formData.address}
                            onChange={(e) => handleChange('address', e.target.value)}
                            placeholder="123 Main Street, City, State ZIP"
                            className="text-gray-900 placeholder:text-gray-400"
                            required
                          />
                        </div>

                        {/* Issue Description */}
                        <div className="space-y-2">
                          <Label htmlFor="issueDescription">Description of Issue</Label>
                          <Textarea
                            id="issueDescription"
                            value={formData.issueDescription}
                            onChange={(e) => handleChange('issueDescription', e.target.value)}
                            placeholder="Please describe the plumbing issue or service you need..."
                            rows={4}
                            className="text-gray-900 placeholder:text-gray-400"
                          />
                        </div>

                        {/* Preferred Contact Method */}
                        <div className="space-y-2">
                          <Label htmlFor="preferredContact">Preferred Contact Method</Label>
                          <Select value={formData.preferredContact} onValueChange={(value) => handleChange('preferredContact', value)}>
                            <SelectTrigger id="preferredContact" className="text-gray-900">
                              <SelectValue placeholder="Select contact method" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="phone">Phone</SelectItem>
                              <SelectItem value="email">Email</SelectItem>
                              <SelectItem value="text">Text Message</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <Button 
                          type="submit" 
                          size="lg" 
                          className="w-full transition-all duration-200 active:scale-[0.98]"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? 'Submitting...' : 'Submit Quote Request'}
                        </Button>

                        <p className="text-sm text-muted-foreground text-center">
                          By submitting this form, you agree to be contacted by FlowFix Plumbing regarding your quote request.
                        </p>
                      </form>
                    )}
                  </CardContent>
                </Card>
              </div>

              {/* Contact Info Sidebar */}
              <div className="space-y-6">
                <Card className="shadow-md">
                  <CardHeader>
                    <CardTitle>Contact us directly</CardTitle>
                    <CardDescription>Prefer to talk? We're here to help</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Phone className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">Phone</p>
                        <p className="text-muted-foreground">(555) 123-4567</p>
                        <p className="text-sm text-muted-foreground">Available 24/7</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Mail className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">Email</p>
                        <p className="text-muted-foreground">hello@flowfixplumbing.com</p>
                        <p className="text-sm text-muted-foreground">24-hour response time</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">Service Areas</p>
                        <p className="text-muted-foreground">Greater Metro Area</p>
                        <p className="text-sm text-muted-foreground">6 neighborhoods</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-primary text-primary-foreground shadow-md">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg mb-3">What happens next?</h3>
                    <ol className="space-y-3 text-sm text-primary-foreground/90">
                      <li className="flex gap-2">
                        <span className="font-bold">1.</span>
                        <span>We review your request within 24 hours</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="font-bold">2.</span>
                        <span>We contact you to discuss details and schedule a site visit if needed</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="font-bold">3.</span>
                        <span>You receive a detailed quote with no obligation</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="font-bold">4.</span>
                        <span>If you approve, we schedule your plumbing service</span>
                      </li>
                    </ol>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}

export default QuoteRequestPage;
