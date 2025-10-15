import { Link } from 'react-router-dom';
import { ArrowRight, Award, Users, Clock } from 'lucide-react';

const Hero = () => {
  const stats = [
    {
      icon: Users,
      number: '5000+',
      label: 'Happy Clients',
    },
    {
      icon: Award,
      number: '15+',
      label: 'Years Experience',
    },
    {
      icon: Clock,
      number: '98%',
      label: 'On-Time Appointments',
    },
  ];

  return (
    <section className="relative overflow-hidden bg-background">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-subtle opacity-50"></div>
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(28,124,84,0.05),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(39,174,96,0.05),transparent_50%)]"></div>
      </div>

      <div className="relative container py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-secondary text-primary text-sm font-medium mb-6">
              <Award className="w-4 h-4 mr-2" />
              Award-Winning Medical Aesthetics Clinic
            </div>
            
            <h1 className="heading-hero text-foreground mb-6">
              Transform Your
              <span className="block bg-gradient-primary bg-clip-text text-transparent">
                Natural Beauty
              </span>
            </h1>
            
            <p className="body-lg text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0">
              Discover the art of confidence with our advanced medical aesthetic treatments. Here at Derma Suite our highly skilled clinicians combine expertise with the latest technology to deliver safe, comfortable, and transformative results. From the moment you step into our care, you'll experience a personalised approach designed to enhance your natural beauty and leave you looking and feeling your absolute best.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <Link to="/contact" className="btn-primary text-lg px-8 py-4">
                Book Free Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link to="/treatments" className="btn-outline text-lg px-8 py-4">
                View Treatments
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <stat.icon className="w-8 h-8 text-primary mx-auto mb-2" />
                  <div className="heading-md text-foreground">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-strong">
              <div className="aspect-[4/5] bg-gradient-primary opacity-10"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-primary/60">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <Award className="w-12 h-12" />
                  </div>
                  <p className="font-medium">Professional Clinic Environment</p>
                  <p className="text-sm mt-2">Modern, Safe & Comfortable</p>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-accent rounded-full opacity-10 animate-pulse"></div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-primary rounded-full opacity-5"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;