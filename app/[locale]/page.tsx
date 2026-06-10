'use client';

import { useTranslations, useLocale } from 'next-intl';
import { Button } from "@/components/Button";
import { PlanCard } from "@/components/PlanCard";

export default function Home() {
  const t = useTranslations('common');
  const locale = useLocale();

  const plans = [
    { name: locale === 'vi' ? "Mỹ - 5GB" : "USA - 5GB", data: "5GB", duration: locale === 'vi' ? "30 Ngày" : "30 Days", price: 120000 },
    { name: locale === 'vi' ? "Nhật Bản - 3GB" : "Japan - 3GB", data: "3GB", duration: locale === 'vi' ? "14 Ngày" : "14 Days", price: 210000, featured: true },
    { name: locale === 'vi' ? "Châu Âu - 10GB" : "Europe - 10GB", data: "10GB", duration: locale === 'vi' ? "30 Ngày" : "30 Days", price: 350000 },
  ];

  const benefits = [
    { icon: "⚡", title: t('benefits.items.0.title'), desc: t('benefits.items.0.desc') },
    { icon: "🌍", title: t('benefits.items.1.title'), desc: t('benefits.items.1.desc') },
    { icon: "📶", title: t('benefits.items.2.title'), desc: t('benefits.items.2.desc') },
    { icon: "💰", title: t('benefits.items.3.title'), desc: t('benefits.items.3.desc') },
  ];

  const howItWorks = [
    { step: "1", title: t('howItWorks.steps.0.title'), desc: t('howItWorks.steps.0.desc') },
    { step: "2", title: t('howItWorks.steps.1.title'), desc: t('howItWorks.steps.1.desc') },
    { step: "3", title: t('howItWorks.steps.2.title'), desc: t('howItWorks.steps.2.desc') },
    { step: "4", title: t('howItWorks.steps.3.title'), desc: t('howItWorks.steps.3.desc') },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1507525428034-4bc710356855?q=80&w=2067&auto=format&fit=crop')] bg-cover bg-center opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              {t('hero.badge')}
            </div>
            <h1 className="text-5xl lg:text-7xl font-black text-gray-900 mb-6 leading-tight">
              {t('hero.title')}
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto">
              {t('hero.description')}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button href="/esim" variant="primary" size="lg" className="shadow-2xl">
                <span className="mr-2">🚀</span> {t('hero.ctaViewPlans')}
              </Button>
              <Button href="/about" variant="outline" size="lg">
                {t('hero.ctaAbout')}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-gray-900 mb-4">{t('benefits.title')}</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">{t('benefits.subtitle')}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="p-8 rounded-3xl border border-gray-100 bg-gradient-to-br from-gray-50 to-white hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-gray-900 mb-4">{t('howItWorks.title')}</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">{t('howItWorks.subtitle')}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorks.map((step, idx) => (
              <div key={idx} className="text-center p-8">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                    {step.step}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-gray-900 mb-4">{t('plans.title')}</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">{t('plans.subtitle')}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, idx) => (
              <PlanCard
                key={idx}
                name={plan.name}
                data={plan.data}
                duration={plan.duration}
                price={plan.price}
                featured={plan.featured}
              />
            ))}
          </div>
          <div className="text-center mt-12">
            <Button href="/esim" variant="outline" size="lg">
              {t('plans.ctaAllPlans')}
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-black text-white mb-6">{t('cta.title')}</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">{t('cta.subtitle')}</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="/esim" variant="secondary" size="lg">
              {t('cta.ctaBuy')}
            </Button>
            <Button href="/support/faq" variant="outline" size="lg">
              {t('hero.ctaAbout')}
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
