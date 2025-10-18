import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, AlertCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    treatment: '',
    message: '',
    consent: false,
    honeypot: ''
  });
  
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const treatmentOptions = [
    'The Perfect Facial',
    'Hydro Facial & Serum',
    'Million Dollar Facial',
    'Anti-wrinkle Injections',
    'Dermal Filler',
    'Fat Dissolving Injections',
    'Vitamin Injections',
    'Mesotherapy',
    'PRP Treatments',
    'LED Therapy',
    'Laser Hair Removal',
    'General Consultation'
  ];

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    // Honeypot check (spam prevention)
    if (formData.honeypot) {
      return false;
    }

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    } else if (formData.name.trim().length > 100) {
      newErrors.name = 'Name must be less than 100 characters';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    } else if (formData.email.length > 255) {
      newErrors.email = 'Email must be less than 255 characters';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[\d\s\+\-\(\)]+$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    if (!formData.treatment) {
      newErrors.treatment = 'Please select a treatment';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    } else if (formData.message.trim().length > 1000) {
      newErrors.message = 'Message must be less than 1000 characters';
    }

    if (!formData.consent) {
      newErrors.consent = 'Please consent to data processing';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const newValue = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value;
    
    setFormData(prev => ({
      ...prev,
      [name]: newValue
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // In a real application, you would send the data to your backend
      console.log('Form submitted:', {
        ...formData,
        honeypot: undefined // Don't log honeypot
      });
      
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        treatment: '',
        message: '',
        consent: false,
        honeypot: ''
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit Us',
      details: ['Hudson Avenue', 'BD7 3ND'],
      link: 'https://maps.google.com/?q=Hudson+Avenue+BD7+3ND',
      linkText: 'Get Directions'
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: ['07454 853 335'],
      link: 'tel:07454853335',
      linkText: 'Call Now'
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: ['info@dermasuite.co.uk'],
      link: 'mailto:info@dermasuite.co.uk',
      linkText: 'Send Email'
    },
    {
      icon: Clock,
      title: 'Opening Hours',
      details: ['Sun-Fri: 9:00 AM - 6:00 PM', 'Sat: Closed'],
      link: null,
      linkText: null
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-subtle py-16 lg:py-24">
        <div className="container text-center">
          <h1 className="heading-xl mb-6">Contact Us</h1>
          <p className="body-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to start your aesthetic journey? Get in touch today to book your free consultation 
            or ask any questions about our treatments.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                  <info.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="heading-sm mb-3">{info.title}</h3>
                <div className="space-y-1 mb-4">
                  {info.details.map((detail, detailIndex) => (
                    <p key={detailIndex} className="text-sm text-muted-foreground">{detail}</p>
                  ))}
                </div>
                {info.link && info.linkText && (
                  <a
                    href={info.link}
                    className="text-primary hover:text-primary/80 text-sm font-medium transition-colors"
                  >
                    {info.linkText}
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="section bg-secondary">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="heading-lg mb-6">Send us a Message</h2>
              
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-accent/10 border border-accent/20 rounded-lg flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-accent flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-accent">Message Sent Successfully!</h4>
                    <p className="text-sm text-muted-foreground">We'll get back to you within 24 hours.</p>
                  </div>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-destructive/10 border border-destructive/20 rounded-lg flex items-center space-x-3">
                  <AlertCircle className="w-6 h-6 text-destructive flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-destructive">Message Failed to Send</h4>
                    <p className="text-sm text-muted-foreground">Please try again or call us directly.</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Honeypot field for spam prevention */}
                <input
                  type="text"
                  name="honeypot"
                  value={formData.honeypot}
                  onChange={handleInputChange}
                  className="visually-hidden"
                  tabIndex={-1}
                  autoComplete="off"
                />

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`form-input ${errors.name ? 'border-destructive' : ''}`}
                      placeholder="Enter your full name"
                      maxLength={100}
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-destructive">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className={`form-input ${errors.phone ? 'border-destructive' : ''}`}
                      placeholder="Enter your phone number"
                    />
                    {errors.phone && (
                      <p className="mt-1 text-sm text-destructive">{errors.phone}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`form-input ${errors.email ? 'border-destructive' : ''}`}
                    placeholder="Enter your email address"
                    maxLength={255}
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-destructive">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="treatment" className="block text-sm font-medium mb-2">
                    Treatment of Interest *
                  </label>
                  <select
                    id="treatment"
                    name="treatment"
                    value={formData.treatment}
                    onChange={handleInputChange}
                    className={`form-select ${errors.treatment ? 'border-destructive' : ''}`}
                  >
                    <option value="">Select a treatment</option>
                    {treatmentOptions.map((treatment, index) => (
                      <option key={index} value={treatment}>{treatment}</option>
                    ))}
                  </select>
                  {errors.treatment && (
                    <p className="mt-1 text-sm text-destructive">{errors.treatment}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    className={`form-textarea ${errors.message ? 'border-destructive' : ''}`}
                    placeholder="Tell us about your goals, concerns, or any questions you have..."
                    maxLength={1000}
                  />
                  <div className="flex justify-between mt-1">
                    {errors.message && (
                      <p className="text-sm text-destructive">{errors.message}</p>
                    )}
                    <p className="text-sm text-muted-foreground ml-auto">
                      {formData.message.length}/1000
                    </p>
                  </div>
                </div>

                <div>
                  <label className="flex items-start space-x-3">
                    <input
                      type="checkbox"
                      name="consent"
                      checked={formData.consent}
                      onChange={handleInputChange}
                      className="mt-1 h-4 w-4 text-primary border-border rounded focus:ring-primary focus:ring-offset-0"
                    />
                    <span className="text-sm text-muted-foreground">
                      I consent to Derma Suite processing my personal data to respond to my inquiry. 
                      Your data will be handled in accordance with our privacy policy. *
                    </span>
                  </label>
                  {errors.consent && (
                    <p className="mt-1 text-sm text-destructive">{errors.consent}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    'Sending...'
                  ) : (
                    <>
                      Send Message
                      <Send className="w-4 h-4 ml-2" />
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Map */}
            <div>
              <h2 className="heading-lg mb-6">Find Us</h2>
              <div className="card-elevated overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2357.5!2d-1.7623!3d53.7974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTPCsDQ3JzUwLjYiTiAxwrA0NSc0NC4zIlc!5e0!3m2!1sen!2suk!4v1234567890"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Derma Suite Location - Hudson Avenue, BD7 3ND"
                  className="w-full"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="section">
        <div className="container text-center">
          <div className="max-w-2xl mx-auto card-elevated p-8">
            <h2 className="heading-md mb-4">Need Urgent Assistance?</h2>
              <p className="body-md text-muted-foreground mb-6">
              If you're experiencing any post-treatment concerns or need urgent advice, 
              we have a 24-hour emergency contact line for existing clients.
            </p>
            <a
              href="tel:07454853335"
              className="btn-accent text-lg px-8 py-3"
            >
              Emergency Contact: 07454 853 335
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;