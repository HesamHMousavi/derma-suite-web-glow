import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Clock, AlertTriangle } from 'lucide-react';

const Treatments = () => {
  const treatments = [
    {
      id: 'laser-hair-removal',
      title: 'Laser Hair Removal',
      description: 'Advanced laser technology for permanent hair reduction with minimal discomfort.',
      benefits: [
        'Long-lasting results',
        'Precision targeting',
        'Suitable for all skin types',
        'Minimal downtime'
      ],
      duration: '30-90 minutes',
      downtime: 'None to minimal',
      contraindications: 'Pregnancy, active infections, certain medications'
    },
    {
      id: 'anti-wrinkle',
      title: 'Anti-wrinkle Injections',
      description: 'FDA-approved treatments to smooth fine lines and prevent new wrinkles from forming.',
      benefits: [
        'Smooths expression lines',
        'Prevents new wrinkles',
        'Natural-looking results',
        'Quick procedure'
      ],
      duration: '15-30 minutes',
      downtime: 'Minimal bruising possible',
      contraindications: 'Pregnancy, neuromuscular disorders'
    },
    {
      id: 'dermal-filler',
      title: 'Dermal Filler',
      description: 'Hyaluronic acid fillers to restore volume and enhance facial contours naturally.',
      benefits: [
        'Restores facial volume',
        'Enhances lip shape',
        'Smooths deep lines',
        'Immediate results'
      ],
      duration: '30-60 minutes',
      downtime: 'Mild swelling 24-48 hours',
      contraindications: 'Active infections, autoimmune conditions'
    },
    {
      id: 'chemical-peels',
      title: 'Chemical Peels',
      description: 'Professional-grade peels to improve skin texture, tone, and clarity.',
      benefits: [
        'Improves skin texture',
        'Reduces hyperpigmentation',
        'Minimizes pore appearance',
        'Stimulates collagen'
      ],
      duration: '30-45 minutes',
      downtime: '3-7 days peeling',
      contraindications: 'Active acne, recent sun exposure'
    },
    {
      id: 'vitamin-injections',
      title: 'Vitamin Injections',
      description: 'Targeted vitamin therapy to boost energy, immunity, and overall wellness.',
      benefits: [
        'Boosts energy levels',
        'Enhances immunity',
        'Improves skin health',
        'Fast absorption'
      ],
      duration: '15-20 minutes',
      downtime: 'None',
      contraindications: 'Vitamin allergies, certain medical conditions'
    },
    {
      id: 'dermaplaning',
      title: 'Dermaplaning',
      description: 'Gentle exfoliation treatment removing dead skin cells and fine facial hair.',
      benefits: [
        'Smoother skin texture',
        'Enhanced product absorption',
        'Immediate glow',
        'Makeup application improvement'
      ],
      duration: '30-45 minutes',
      downtime: 'None',
      contraindications: 'Active acne, skin infections'
    },
    {
      id: 'prp-hair',
      title: 'PRP – Hair Restoration',
      description: 'Platelet-rich plasma therapy to stimulate natural hair growth and thickness.',
      benefits: [
        'Natural hair growth',
        'Increased hair density',
        'Improved scalp health',
        'Minimal side effects'
      ],
      duration: '60-90 minutes',
      downtime: 'Mild scalp tenderness',
      contraindications: 'Blood disorders, recent medications'
    },
    {
      id: 'fat-dissolving',
      title: 'Fat Dissolving Injections – Lemon Bottle',
      description: 'Advanced fat dissolution treatment for targeted body contouring.',
      benefits: [
        'Targeted fat reduction',
        'Non-surgical approach',
        'Gradual natural results',
        'Minimal recovery time'
      ],
      duration: '30-45 minutes',
      downtime: 'Mild swelling 3-5 days',
      contraindications: 'Pregnancy, liver conditions'
    },
    {
      id: 'mesotherapy',
      title: 'Mesotherapy – Polynucleotides',
      description: 'Regenerative treatment using polynucleotides for skin rejuvenation.',
      benefits: [
        'Deep skin hydration',
        'Collagen stimulation',
        'Improved elasticity',
        'Long-lasting results'
      ],
      duration: '45-60 minutes',
      downtime: 'Mild redness 24 hours',
      contraindications: 'Active infections, allergies'
    },
    {
      id: 'perfect-facial',
      title: 'The Perfect Facial',
      description: 'Customized facial treatment combining multiple techniques for optimal results.',
      benefits: [
        'Personalized approach',
        'Multiple treatment benefits',
        'Immediate improvement',
        'Relaxing experience'
      ],
      duration: '75-90 minutes',
      downtime: 'None',
      contraindications: 'Active skin conditions'
    },
    {
      id: 'led-therapy',
      title: 'LED Therapy',
      description: 'Advanced light therapy for various skin concerns and healing acceleration.',
      benefits: [
        'Accelerates healing',
        'Reduces inflammation',
        'Stimulates collagen',
        'Pain-free treatment'
      ],
      duration: '20-30 minutes',
      downtime: 'None',
      contraindications: 'Pregnancy, certain medications'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-subtle py-16 lg:py-24">
        <div className="container text-center">
          <h1 className="heading-xl mb-6">Our Treatments</h1>
          <p className="body-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Discover our comprehensive range of medical aesthetic treatments, each designed to help you 
            look and feel your best. All treatments are performed by qualified clinicians in a safe, 
            professional environment.
          </p>
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
            <AlertTriangle className="w-4 h-4 mr-2" />
            All treatments include free consultation and patch testing where applicable
          </div>
        </div>
      </section>

      {/* Treatments Grid */}
      <section className="section">
        <div className="container">
          <div className="grid gap-8">
            {treatments.map((treatment) => (
              <div key={treatment.id} className="card-elevated p-8">
                <div className="grid md:grid-cols-3 gap-8">
                  {/* Main Content */}
                  <div className="md:col-span-2 space-y-4">
                    <h2 className="heading-lg text-primary">{treatment.title}</h2>
                    <p className="body-md text-muted-foreground">{treatment.description}</p>
                    
                    {/* Benefits */}
                    <div>
                      <h3 className="heading-sm mb-3">Key Benefits</h3>
                      <ul className="grid sm:grid-cols-2 gap-2">
                        {treatment.benefits.map((benefit, index) => (
                          <li key={index} className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                            <span className="text-sm">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Treatment Details */}
                  <div className="space-y-6">
                    {/* Duration & Downtime */}
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3 p-3 bg-secondary rounded-lg">
                        <Clock className="w-5 h-5 text-primary" />
                        <div>
                          <div className="font-medium text-sm">Duration</div>
                          <div className="text-sm text-muted-foreground">{treatment.duration}</div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3 p-3 bg-secondary rounded-lg">
                        <AlertTriangle className="w-5 h-5 text-accent" />
                        <div>
                          <div className="font-medium text-sm">Downtime</div>
                          <div className="text-sm text-muted-foreground">{treatment.downtime}</div>
                        </div>
                      </div>
                    </div>

                    {/* Contraindications */}
                    <div className="p-4 bg-destructive/5 border border-destructive/20 rounded-lg">
                      <h4 className="font-medium text-sm mb-2">Important Notes</h4>
                      <p className="text-xs text-muted-foreground">{treatment.contraindications}</p>
                    </div>

                    {/* CTA Buttons */}
                    <div className="space-y-3">
                      <Link to="/pricing" className="btn-outline w-full text-center">
                        View Pricing
                      </Link>
                      <Link to="/contact" className="btn-primary w-full text-center">
                        Book Consultation
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-secondary">
        <div className="container text-center">
          <h2 className="heading-lg mb-8">Treatment FAQs</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            <div className="card-subtle p-6 text-left">
              <h3 className="font-medium mb-2">How do I know which treatment is right for me?</h3>
              <p className="text-sm text-muted-foreground">
                Every client receives a free consultation where we assess your skin, discuss your concerns, 
                and recommend the most suitable treatments for your goals.
              </p>
            </div>
            <div className="card-subtle p-6 text-left">
              <h3 className="font-medium mb-2">Are patch tests required?</h3>
              <p className="text-sm text-muted-foreground">
                Patch tests are required for certain treatments including chemical peels and some injectable 
                treatments. We'll advise you during your consultation.
              </p>
            </div>
            <div className="card-subtle p-6 text-left">
              <h3 className="font-medium mb-2">How many sessions will I need?</h3>
              <p className="text-sm text-muted-foreground">
                The number of sessions varies by treatment and individual response. We'll provide a 
                personalized treatment plan during your consultation.
              </p>
            </div>
          </div>
          <div className="mt-8">
            <Link to="/faq" className="btn-primary">
              View All FAQs
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Treatments;