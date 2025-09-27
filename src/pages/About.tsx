import { Award, Users, Clock, Shield, Heart, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  const values = [
    {
      icon: Shield,
      title: 'Safety First',
      description: 'Medical-grade standards with comprehensive safety protocols and qualified practitioners.'
    },
    {
      icon: Heart,
      title: 'Client Care',
      description: 'Personalized treatment plans and ongoing support throughout your aesthetic journey.'
    },
    {
      icon: Zap,
      title: 'Advanced Technology',
      description: 'Latest equipment and techniques for optimal results with minimal downtime.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Committed to delivering exceptional results that exceed your expectations.'
    }
  ];

  const clinicians = [
    {
      name: 'Dr. Sarah Mitchell',
      role: 'Medical Director & Lead Practitioner',
      qualifications: 'MBChB, MSc Aesthetic Medicine',
      experience: '12+ years',
      specialties: ['Anti-wrinkle Injections', 'Dermal Fillers', 'Advanced Facial Treatments'],
      bio: 'Dr. Mitchell leads our team with extensive experience in aesthetic medicine. She holds advanced qualifications in cosmetic procedures and maintains the highest clinical standards.'
    },
    {
      name: 'Emma Thompson',
      role: 'Senior Aesthetic Practitioner',
      qualifications: 'RGN, Level 7 Aesthetic Medicine',
      experience: '8+ years',
      specialties: ['Laser Treatments', 'Chemical Peels', 'Vitamin Therapy'],
      bio: 'Emma specializes in non-invasive treatments and has helped thousands of clients achieve their aesthetic goals with her gentle, professional approach.'
    },
    {
      name: 'James Rodriguez',
      role: 'Laser & Technology Specialist',
      qualifications: 'BSc, Certified Laser Safety Officer',
      experience: '10+ years',
      specialties: ['Laser Hair Removal', 'PRP Treatments', 'LED Therapy'],
      bio: 'James brings technical expertise and precision to our laser treatments, ensuring safe and effective procedures for all skin types.'
    }
  ];

  const stats = [
    { number: '5000+', label: 'Happy Clients' },
    { number: '15+', label: 'Years Experience' },
    { number: '50,000+', label: 'Treatments Completed' },
    { number: '98%', label: 'Client Satisfaction' }
  ];

  const accreditations = [
    'Save Face Accredited',
    'Care Quality Commission',
    'British Association of Cosmetic Nurses',
    'Complications in Medical Aesthetics',
    'Advanced Botulinum & Dermal Fillers'
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-subtle py-16 lg:py-24">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="heading-xl mb-6">About Derma Suite Ltd</h1>
              <p className="body-lg text-muted-foreground mb-8">
                We are a leading medical aesthetics clinic dedicated to helping you look and feel your best. 
                Our team of qualified practitioners combines medical expertise with artistic vision to deliver 
                natural, beautiful results in a safe and comfortable environment.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {stats.slice(0, 2).map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="heading-lg text-primary">{stat.number}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] bg-gradient-primary opacity-10 rounded-2xl"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-primary/60">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <Users className="w-12 h-12" />
                  </div>
                  <p className="font-medium">Professional Team</p>
                  <p className="text-sm mt-2">Qualified Medical Practitioners</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="heading-lg mb-4">Our Values</h2>
            <p className="body-md text-muted-foreground max-w-2xl mx-auto">
              Every decision we make is guided by our core values, ensuring you receive the highest 
              standard of care and the best possible results.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="heading-sm mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="section bg-secondary">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="heading-lg mb-4">Meet Our Expert Team</h2>
            <p className="body-md text-muted-foreground max-w-2xl mx-auto">
              Our qualified practitioners bring years of experience and ongoing training to ensure 
              you receive safe, effective treatments with exceptional results.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {clinicians.map((clinician, index) => (
              <div key={index} className="card-elevated p-8 text-center">
                {/* Profile Image Placeholder */}
                <div className="w-32 h-32 mx-auto mb-6 bg-gradient-primary opacity-20 rounded-full flex items-center justify-center">
                  <Users className="w-16 h-16 text-primary/60" />
                </div>
                
                <h3 className="heading-md mb-2">{clinician.name}</h3>
                <p className="text-primary font-medium mb-2">{clinician.role}</p>
                <p className="text-sm text-muted-foreground mb-4">{clinician.qualifications}</p>
                
                <div className="space-y-4 text-left">
                  <div>
                    <h4 className="font-medium text-sm mb-2">Experience</h4>
                    <p className="text-sm text-muted-foreground">{clinician.experience} in aesthetic medicine</p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-sm mb-2">Specialties</h4>
                    <div className="flex flex-wrap gap-2">
                      {clinician.specialties.map((specialty, specialtyIndex) => (
                        <span key={specialtyIndex} className="inline-block px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <p className="text-sm text-muted-foreground">{clinician.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clinic Standards */}
      <section className="section">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-lg mb-6">Medical-Grade Standards</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Shield className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="heading-sm mb-2">Clinical Excellence</h3>
                    <p className="text-sm text-muted-foreground">
                      Our clinic maintains the highest medical standards with comprehensive infection 
                      control protocols and medical-grade equipment.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Award className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="heading-sm mb-2">Qualified Practitioners</h3>
                    <p className="text-sm text-muted-foreground">
                      All our practitioners are medically qualified with advanced training in 
                      aesthetic procedures and ongoing professional development.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Clock className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="heading-sm mb-2">Comprehensive Consultations</h3>
                    <p className="text-sm text-muted-foreground">
                      Every client receives a thorough consultation, medical history review, 
                      and personalized treatment plan.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="card-subtle p-6">
                <h3 className="heading-sm mb-4">Professional Accreditations</h3>
                <ul className="space-y-2">
                  {accreditations.map((accreditation, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <Award className="w-4 h-4 text-accent flex-shrink-0" />
                      <span className="text-sm">{accreditation}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                {stats.slice(2).map((stat, index) => (
                  <div key={index} className="text-center p-4 card-subtle">
                    <div className="heading-md text-primary">{stat.number}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-gradient-primary text-white">
        <div className="container text-center">
          <h2 className="heading-lg mb-4">Ready to Start Your Journey?</h2>
          <p className="body-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Book your free consultation today and discover how our expert team can help you 
            achieve your aesthetic goals safely and naturally.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-accent">
              Book Free Consultation
            </Link>
            <Link to="/treatments" className="bg-white/10 hover:bg-white/20 text-white border border-white/20 hover:border-white/40 px-6 py-3 rounded-lg font-medium transition-colors">
              View Our Treatments
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;