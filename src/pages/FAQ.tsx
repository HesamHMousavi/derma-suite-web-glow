import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

const FAQ = () => {
  const [openItem, setOpenItem] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setOpenItem(openItem === index ? null : index);
  };

  const faqCategories = [
    {
      category: 'General Questions',
      faqs: [
        {
          question: 'What makes Derma Suite Ltd different from other clinics?',
          answer: 'We combine medical expertise with artistic vision, using only medical-grade equipment and qualified practitioners. Our focus is on natural results, comprehensive consultations, and the highest safety standards. Every treatment is personalized to your individual needs and goals.'
        },
        {
          question: 'Are all practitioners medically qualified?',
          answer: 'Yes, all our practitioners are medically qualified with advanced training in aesthetic procedures. Our team includes doctors and registered nurses with specialized qualifications in cosmetic medicine and ongoing professional development.'
        },
        {
          question: 'Do I need a consultation before treatment?',
          answer: 'Absolutely. Every client receives a free comprehensive consultation where we assess your suitability for treatment, discuss your goals, explain the procedure, and create a personalized treatment plan. This ensures optimal results and your complete safety.'
        }
      ]
    },
    {
      category: 'Treatment Information',
      faqs: [
        {
          question: 'How many sessions will I need?',
          answer: 'The number of sessions varies depending on the treatment and your individual response. For example, laser hair removal typically requires 6-8 sessions, while anti-wrinkle injections last 3-4 months. We\'ll provide a detailed treatment plan during your consultation.'
        },
        {
          question: 'What should I expect during recovery?',
          answer: 'Recovery varies by treatment. Many procedures like anti-wrinkle injections have minimal downtime, while chemical peels may involve 3-7 days of peeling. We provide detailed aftercare instructions and are available for any post-treatment concerns.'
        },
        {
          question: 'Are treatments painful?',
          answer: 'Most treatments involve minimal discomfort. We use topical numbing creams where appropriate and our practitioners are skilled in techniques to minimize discomfort. Many clients find treatments more comfortable than expected.'
        },
        {
          question: 'When will I see results?',
          answer: 'Results timing varies by treatment. Some treatments like dermal fillers show immediate results, while others like anti-wrinkle injections take 7-14 days to take full effect. Treatments like laser hair removal show gradual improvement over multiple sessions.'
        }
      ]
    },
    {
      category: 'Safety & Suitability',
      faqs: [
        {
          question: 'Are aesthetic treatments safe?',
          answer: 'When performed by qualified practitioners using proper techniques and medical-grade products, aesthetic treatments are very safe. We maintain the highest safety standards, use only FDA/CE approved products, and provide comprehensive aftercare support.'
        },
        {
          question: 'Who is not suitable for treatments?',
          answer: 'Suitability varies by treatment, but generally, pregnant or breastfeeding women, those with certain medical conditions, or taking specific medications may not be suitable. We conduct thorough medical history reviews during consultations to ensure your safety.'
        },
        {
          question: 'What are the potential side effects?',
          answer: 'Side effects are typically mild and temporary, such as slight redness, swelling, or bruising. Serious complications are rare when treatments are performed by qualified practitioners. We discuss all potential side effects during your consultation.'
        },
        {
          question: 'Do you require patch tests?',
          answer: 'Patch tests are required for certain treatments including chemical peels and some injectable treatments. We recommend patch tests 24-48 hours before treatment to ensure you don\'t have any adverse reactions.'
        }
      ]
    },
    {
      category: 'Pricing & Booking',
      faqs: [
        {
          question: 'How much do treatments cost?',
          answer: 'Treatment costs vary depending on the area treated and products used. We provide transparent pricing with no hidden fees. Package deals and payment plans are available for multiple treatments. View our pricing page for detailed information.'
        },
        {
          question: 'Do you offer payment plans?',
          answer: 'Yes, we offer flexible payment plans for treatments over £500. We accept cash, card payments, and can arrange installment plans to make treatments more accessible. Discuss payment options during your consultation.'
        },
        {
          question: 'What is your cancellation policy?',
          answer: 'We require 48 hours notice for cancellations or rescheduling. Cancellations with less than 48 hours notice may incur a fee. Same-day cancellations are charged at 50% of the treatment fee.'
        },
        {
          question: 'How do I book an appointment?',
          answer: 'You can book online through our website, call us directly, or visit the clinic. We recommend booking consultations in advance as our practitioners maintain busy schedules. Emergency appointments may be available for urgent concerns.'
        }
      ]
    },
    {
      category: 'Aftercare & Results',
      faqs: [
        {
          question: 'What aftercare is required?',
          answer: 'Aftercare varies by treatment but typically includes avoiding sun exposure, not touching the treated area, and following specific skincare routines. We provide detailed written aftercare instructions and a 24-hour emergency contact for concerns.'
        },
        {
          question: 'Can I wear makeup after treatment?',
          answer: 'This depends on the treatment. For most injectable treatments, you can apply makeup after 4-6 hours. For treatments like chemical peels or laser procedures, you may need to wait 24-48 hours. We\'ll provide specific guidance for your treatment.'
        },
        {
          question: 'How long do results last?',
          answer: 'Results duration varies significantly. Anti-wrinkle injections last 3-4 months, dermal fillers 6-18 months depending on the product and area, while laser hair removal provides long-term reduction. We\'ll discuss expected duration during your consultation.'
        },
        {
          question: 'What if I\'m not happy with my results?',
          answer: 'Client satisfaction is our priority. If you\'re not happy with your results, please contact us immediately. We offer complimentary review appointments and will work with you to address any concerns. Some treatments can be adjusted or reversed if necessary.'
        }
      ]
    }
  ];

  let faqIndex = 0;

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-subtle py-16 lg:py-24">
        <div className="container text-center">
          <h1 className="heading-xl mb-6">Frequently Asked Questions</h1>
          <p className="body-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Find answers to the most common questions about our treatments, procedures, and clinic policies. 
            Can't find what you're looking for? Contact us directly.
          </p>
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
            <HelpCircle className="w-4 h-4 mr-2" />
            Still have questions? Book a free consultation
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="section">
        <div className="container max-w-4xl">
          {faqCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-12">
              <h2 className="heading-lg mb-8 text-primary">{category.category}</h2>
              <div className="space-y-4">
                {category.faqs.map((faq, faqIndexInCategory) => {
                  const currentFaqIndex = faqIndex++;
                  return (
                    <div key={faqIndexInCategory} className="card-subtle overflow-hidden">
                      <button
                        onClick={() => toggleItem(currentFaqIndex)}
                        className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-secondary/50 transition-colors"
                        aria-expanded={openItem === currentFaqIndex}
                      >
                        <span className="heading-sm pr-4">{faq.question}</span>
                        <ChevronDown 
                          className={`w-5 h-5 text-primary flex-shrink-0 transition-transform ${
                            openItem === currentFaqIndex ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                      
                      {openItem === currentFaqIndex && (
                        <div className="px-6 pb-6">
                          <div className="pt-2 border-t border-border">
                            <p className="body-md text-muted-foreground leading-relaxed">
                              {faq.answer}
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section bg-secondary">
        <div className="container text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="heading-lg mb-4">Still Have Questions?</h2>
            <p className="body-md text-muted-foreground mb-8">
              Our friendly team is here to help. Book a free consultation or get in touch 
              to discuss your specific needs and concerns.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="btn-primary">
                Book Free Consultation
              </a>
              <a href="tel:+44123456789" className="btn-outline">
                Call Us Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;