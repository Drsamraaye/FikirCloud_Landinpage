'use client';

import { Check, ArrowRight, Zap, Building2, Globe } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const plans = [
    {
        name: 'Basic',
        price: '19.9',
        description: 'Perfect for small private schools and learning centers.',
        features: ['Up to 100 Students', 'Core Management System', 'Attendance Tracking', 'Email Support'],
        icon: Zap,
        color: 'blue'
    },
    {
        name: 'Advanced',
        price: '34.9',
        description: 'Advanced features for growing institutions.',
        features: ['Up to 300 Students', 'Everything in Basic', 'Financial Management', 'LMS Integration', 'Priority Support'],
        icon: Building2,
        color: 'primary',
        popular: true
    },
    {
        name: 'Professional',
        price: '49.9',
        description: 'Tailored solutions for large school networks.',
        features: ['Unlimited Students', 'Full SaaS Suite', 'AI Analytics', 'Multi-campus Support', 'Dedicated Manager'],
        icon: Globe,
        color: 'indigo'
    }
];

export default function PricingPage() {
    return (
        <main className="min-h-screen bg-background">
            <Navbar />

            <section className="pt-32 pb-20 px-6">
                <div className="max-w-7xl mx-auto text-center">
                    <h1 className="text-4xl md:text-7xl font-black mb-6 md:mb-8">Simple <span className="text-primary">Pricing</span></h1>
                    <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-12 md:mb-20">
                        Choose the plan that fits your institution's needs.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                        {plans.map((p, i) => (
                            <div key={i} className={`relative group p-6 md:p-10 rounded-[2.5rem] md:rounded-[3rem] border transition-all duration-500 ${p.popular ? 'bg-primary/5 border-primary shadow-2xl shadow-primary/10 scale-100 md:scale-105 z-10' : 'bg-card/40 border-white/10 hover:border-primary/50'}`}>
                                {p.popular && (
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-widest whitespace-nowrap"> Most Popular </div>
                                )}
                                <div className={`w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 md:mb-8`}>
                                    <p.icon className={`w-6 h-6 md:w-7 md:h-7 ${p.popular ? 'text-primary' : 'text-muted-foreground'}`} />
                                </div>
                                <h3 className="text-xl md:text-2xl font-bold mb-2">{p.name}</h3>
                                <div className="mb-4 md:mb-6">
                                    <span className="text-4xl md:text-5xl font-black">${p.price}</span>
                                    {p.price !== 'Custom' && <span className="text-muted-foreground ml-2 text-sm md:text-base">/month</span>}
                                </div>
                                <p className="text-muted-foreground mb-8 text-sm leading-relaxed">{p.description}</p>

                                <ul className="space-y-3 md:space-y-4 mb-10 text-left">
                                    {p.features.map((f, j) => (
                                        <li key={j} className="flex items-center gap-3 text-xs md:text-sm font-medium">
                                            <Check className="w-4 h-4 md:w-5 md:h-5 text-green-500 shrink-0" />
                                            <span className="line-clamp-1">{f}</span>
                                        </li>
                                    ))}
                                </ul>

                                <button className={`w-full py-4 md:py-5 rounded-xl md:rounded-2xl font-black text-base md:text-lg transition-all duration-300 ${p.popular ? 'bg-primary text-primary-foreground shadow-xl shadow-primary/30 hover:shadow-primary/50 hover:-translate-y-1' : 'bg-secondary text-secondary-foreground shadow-xl shadow-secondary/10 hover:shadow-secondary/30'}`}>
                                    Get Started
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
