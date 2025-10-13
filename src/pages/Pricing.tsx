import { Link } from 'react-router-dom';
import { Check, Star, ArrowRight, Info } from 'lucide-react';

const Pricing = () => {
  const pricingData = [
    {
      category: 'Facials',
      treatments: [
        { name: 'The Perfect Facial (1 hr)', price: '£35', popular: true },
        { name: 'Hydro Facial & Serum (1 hr 30 mins)', price: '£85' },
        { name: 'Million Dollar Facial (1 hr 30 mins)', price: '£85' },
        { name: 'Add-on: Dermaplaning Serum', price: '£10' },
        { name: 'Add-on: Serum', price: '£12' },
        { name: 'Add-on: Microneedling', price: '£50' },
      ]
    },
    {
      category: 'Anti-Wrinkle Injections',
      treatments: [
        { name: '1 Area', price: '£130', popular: true },
        { name: '2 Areas', price: '£150' },
        { name: '3 Areas', price: '£200' },
        { name: 'Masseter (Face Slimming)', price: '£150' },
      ]
    },
    {
      category: 'Dermal Filler',
      treatments: [
        { name: '0.5ml', price: '£100' },
        { name: '1ml', price: '£140', popular: true },
        { name: 'Russian Lips', price: '£150' },
        { name: 'Jaw Contour', price: '£180' },
        { name: 'Nasolabial', price: '£140' },
      ]
    },
    {
      category: 'Fat Dissolving',
      treatments: [
        { name: 'Small Area - Chin, Jawline (30 mins)', price: '£50' },
        { name: 'Large Area - Stomach, Thighs, Bingo Wings', price: '£150' },
      ]
    },
    {
      category: 'Vitamin Injections',
      treatments: [
        { name: 'Vitamin D', price: '£35' },
        { name: 'Vitamin C', price: '£35' },
        { name: 'Vitamin B12', price: '£20', popular: true },
        { name: 'Glutathione (600mg)', price: '£50' },
      ]
    },
    {
      category: 'LED Therapy',
      treatments: [
        { name: 'The Perfect Facial & LED Therapy (1 hr 15 mins)', price: '£55', popular: true },
      ]
    },
    {
      category: 'Mesotherapy',
      treatments: [
        { name: 'Vitaran 1 (Eyes)', price: '£180' },
        { name: 'Vitaran 1 (Eyes) - 4 treatments', price: '£680' },
        { name: 'Vitaran 2 (Face)', price: '£230' },
        { name: 'Vitaran 2 (Face) - 4 treatments', price: '£800' },
        { name: 'Vitaran (Face & Eyes)', price: '£350' },
        { name: 'Vitaran (Face & Eyes) - 4 treatments', price: '£1200', popular: true },
      ]
    },
    {
      category: 'PRP Treatments',
      treatments: [
        { name: 'PRP Undereyes', price: '£150' },
        { name: 'PRP Undereyes - 4 sessions', price: '£520' },
        { name: 'PRP Vampire Facial', price: '£170' },
        { name: 'PRP Vampire Facial - 4 sessions', price: '£600' },
        { name: 'PRP Hair Restoration - Hair Line (1 session)', price: '£120' },
        { name: 'PRP Hair Restoration - Hair Line (4 sessions)', price: '£400' },
        { name: 'PRP Hair Restoration - Full Head (1 session)', price: '£200' },
        { name: 'PRP Hair Restoration - Full Head (4 sessions)', price: '£750', popular: true },
        { name: 'PRP Microneedling - Vampire Facial', price: '£120' },
        { name: 'PRP Microneedling - 4 sessions', price: '£430' },
      ]
    }
  ];

  const packages = [
    {
      name: 'Starter Package',
      description: 'Perfect introduction to aesthetics',
      price: '£165',
      originalPrice: '£200',
      features: [
        'The Perfect Facial',
        'Anti-wrinkle treatment (1 area)',
        'Free consultation',
        'Aftercare advice'
      ],
      popular: false
    },
    {
      name: 'Refresh Package',
      description: 'Complete facial rejuvenation',
      price: '£260',
      originalPrice: '£320',
      features: [
        'Hydro Facial & Serum',
        'Anti-wrinkle treatment (2 areas)',
        'Dermal filler (0.5ml)',
        'Free vitamin injection',
        'Priority booking'
      ],
      popular: true
    },
    {
      name: 'Ultimate Package',
      description: 'Premium transformation experience',
      price: '£495',
      originalPrice: '£615',
      features: [
        'Million Dollar Facial',
        'Anti-wrinkle treatment (3 areas)',
        'Dermal filler (1ml)',
        'PRP Vampire Facial',
        'Payment plan available'
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
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent/10 text-accent font-medium">
              <Check className="w-4 h-4 mr-2" />
              Payment plans available
            </div>
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-secondary border border-border font-medium">
              <Check className="w-4 h-4 mr-2" />
              Book: 07454 853 335
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
                      <strong>Payment Plans:</strong> We offer flexible payment plans to make treatments more accessible. Ask us about available options when booking.
                    </p>
                    <p>
                      <strong>Package Discounts:</strong> Save money when booking multiple treatments together. Our packages offer significant savings compared to individual treatments.
                    </p>
                    <p>
                      <strong>Course Discounts:</strong> Multi-session courses (e.g., PRP, Mesotherapy) are priced to save you money versus single sessions.
                    </p>
                    <p>
                      <strong>Booking:</strong> Call us on 07454 853 335 or use our contact form. We're open Sunday-Friday 9am-6pm (Closed Saturdays).
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