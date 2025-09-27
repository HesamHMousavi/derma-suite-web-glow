import { Link } from 'react-router-dom';
import { Check, Star, ArrowRight, Info } from 'lucide-react';

const Pricing = () => {
  const pricingData = [
    {
      category: 'Injectables',
      treatments: [
        { name: 'Anti-wrinkle Injections (1 area)', price: '£150-£200', popular: true },
        { name: 'Anti-wrinkle Injections (2 areas)', price: '£250-£300' },
        { name: 'Anti-wrinkle Injections (3 areas)', price: '£350-£400' },
        { name: 'Dermal Filler (0.5ml)', price: '£200-£250' },
        { name: 'Dermal Filler (1ml)', price: '£350-£450', popular: true },
        { name: 'Dermal Filler (2ml)', price: '£650-£800' },
        { name: 'Vitamin B12 Injection', price: '£35-£50' },
        { name: 'Vitamin D Injection', price: '£40-£55' },
        { name: 'Fat Dissolving (per session)', price: '£150-£250' },
      ]
    },
    {
      category: 'Laser & Light Treatments',
      treatments: [
        { name: 'Laser Hair Removal (small area)', price: '£80-£120' },
        { name: 'Laser Hair Removal (medium area)', price: '£150-£200', popular: true },
        { name: 'Laser Hair Removal (large area)', price: '£250-£350' },
        { name: 'LED Therapy (single session)', price: '£45-£65' },
        { name: 'LED Therapy (course of 6)', price: '£240-£300' },
      ]
    },
    {
      category: 'Facial Treatments',
      treatments: [
        { name: 'Chemical Peel (light)', price: '£80-£120' },
        { name: 'Chemical Peel (medium)', price: '£150-£200' },
        { name: 'Chemical Peel (deep)', price: '£250-£350' },
        { name: 'Dermaplaning', price: '£65-£85', popular: true },
        { name: 'The Perfect Facial', price: '£120-£180' },
        { name: 'Mesotherapy (single session)', price: '£200-£300' },
        { name: 'Mesotherapy (course of 3)', price: '£500-£750' },
      ]
    },
    {
      category: 'Specialized Treatments',
      treatments: [
        { name: 'PRP Hair Restoration (single)', price: '£350-£450' },
        { name: 'PRP Hair Restoration (course of 3)', price: '£900-£1200', popular: true },
        { name: 'Consultation (redeemable)', price: '£50' },
        { name: 'Patch Test', price: '£25' },
      ]
    }
  ];

  const packages = [
    {
      name: 'Maintenance Package',
      description: 'Perfect for regular touch-ups',
      price: '£299',
      originalPrice: '£380',
      features: [
        'Anti-wrinkle treatment (1 area)',
        'Dermaplaning session',
        'LED therapy session',
        'Free consultation',
        'Priority booking'
      ],
      popular: false
    },
    {
      name: 'Transformation Package',
      description: 'Complete aesthetic refresh',
      price: '£599',
      originalPrice: '£750',
      features: [
        'Anti-wrinkle treatment (2 areas)',
        'Dermal filler (1ml)',
        'The Perfect Facial',
        'Chemical peel (light)',
        'Free aftercare kit'
      ],
      popular: true
    },
    {
      name: 'Premium Package',
      description: 'Ultimate luxury experience',
      price: '£999',
      originalPrice: '£1250',
      features: [
        'Anti-wrinkle treatment (3 areas)',
        'Dermal filler (2ml)',
        'Mesotherapy course (3 sessions)',
        'LED therapy course (6 sessions)',
        'Free maintenance session'
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-subtle py-16 lg:py-24">
        <div className="container text-center">
          <h1 className="heading-xl mb-6">Treatment Pricing</h1>
          <p className="body-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Transparent pricing for all our medical aesthetic treatments. All prices include 
            consultation, treatment, and aftercare advice.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary font-medium">
              <Check className="w-4 h-4 mr-2" />
              Free consultation included
            </div>
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent/10 text-accent font-medium">
              <Check className="w-4 h-4 mr-2" />
              Patch testing available
            </div>
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-secondary border border-border font-medium">
              <Check className="w-4 h-4 mr-2" />
              Flexible payment options
            </div>
          </div>
        </div>
      </section>

      {/* Package Deals */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="heading-lg mb-4">Treatment Packages</h2>
            <p className="body-md text-muted-foreground">Save money with our popular treatment combinations</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {packages.map((pkg, index) => (
              <div key={index} className={`card-elevated p-8 relative ${pkg.popular ? 'ring-2 ring-primary' : ''}`}>
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <div className="inline-flex items-center px-4 py-1 rounded-full bg-primary text-primary-foreground text-sm font-medium">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="heading-md mb-2">{pkg.name}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{pkg.description}</p>
                  <div className="space-y-1">
                    <div className="flex items-center justify-center space-x-2">
                      <span className="heading-lg text-primary">{pkg.price}</span>
                      <span className="text-muted-foreground line-through">{pkg.originalPrice}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">Save £{parseInt(pkg.originalPrice.slice(1)) - parseInt(pkg.price.slice(1))}</p>
                  </div>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link 
                  to="/contact" 
                  className={`btn-${pkg.popular ? 'primary' : 'outline'} w-full text-center`}
                >
                  Book Package
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Individual Pricing */}
      <section className="section bg-secondary">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="heading-lg mb-4">Individual Treatment Pricing</h2>
            <p className="body-md text-muted-foreground">Choose from our full range of individual treatments</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {pricingData.map((category, index) => (
              <div key={index} className="card-subtle p-8">
                <h3 className="heading-md mb-6 text-primary">{category.category}</h3>
                <div className="space-y-4">
                  {category.treatments.map((treatment, treatmentIndex) => (
                    <div key={treatmentIndex} className="flex items-center justify-between py-2 border-b border-border/50 last:border-b-0">
                      <div className="flex items-center space-x-2">
                        <span className="text-sm font-medium">{treatment.name}</span>
                        {treatment.popular && (
                          <span className="inline-flex items-center px-2 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium">
                            Popular
                          </span>
                        )}
                      </div>
                      <span className="font-semibold text-primary">{treatment.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Notes */}
      <section className="section">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="card-elevated p-8">
              <div className="flex items-start space-x-3 mb-6">
                <Info className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="heading-sm mb-2">Important Pricing Information</h3>
                  <div className="space-y-3 text-sm text-muted-foreground">
                    <p>
                      <strong>Consultation:</strong> All treatments include a free initial consultation where we assess your suitability and discuss expected outcomes.
                    </p>
                    <p>
                      <strong>Patch Testing:</strong> Required for certain treatments including chemical peels and some injectables. Fee is deducted from treatment cost.
                    </p>
                    <p>
                      <strong>Package Discounts:</strong> Save up to 20% when booking multiple treatments or courses. Ask about our loyalty program.
                    </p>
                    <p>
                      <strong>Payment Options:</strong> We accept cash, card, and offer flexible payment plans for treatments over £500.
                    </p>
                    <p>
                      <strong>Cancellation:</strong> 48-hour notice required for cancellations. Same-day cancellations may incur a fee.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact" className="btn-primary text-center">
                  Book Free Consultation
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
                <Link to="/faq" className="btn-outline text-center">
                  Payment FAQs
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;