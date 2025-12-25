'use client';

import { Search, Cog, Rocket, GraduationCap, Play, LineChart, CheckCircle2 } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const steps = [
    { number: 1, title: 'Strategic Audit', description: "We identify your institution's unique operational challenges.", icon: Search },
    { number: 2, title: 'Cloud Configuration', description: 'Tailored environment setup matched to your specific curriculum.', icon: Cog },
    { number: 3, title: 'System Migration', description: 'Secure transfer of academic and financial legacy data.', icon: Rocket },
    { number: 4, title: 'Stakeholder Training', description: 'Hands-on workshops for staff, teachers, and parents.', icon: GraduationCap },
    { number: 5, title: 'Ecosystem Go-Live', description: 'Seamless switchover to FikirCloud with 24/7 priority support.', icon: Play },
    { number: 6, title: 'Ongoing Optimization', description: 'Regular feature updates and performance monitoring.', icon: LineChart },
];

export default function HowItWorksPage() {
    return (
        <main className="min-h-screen bg-background text-foreground">
            <Navbar />

            <section className="pt-32 pb-20 px-6">
                <div className="max-w-7xl mx-auto text-center">
                    <h1 className="text-5xl md:text-7xl font-black mb-8">Implementation <span className="text-primary">Process</span></h1>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-20">
                        A battle-tested 6-step journey to modernize your institution. We don't just provide software;
                        ہم partner with you for success.
                    </p>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {steps.map((s, i) => (
                            <div key={i} className="group relative bg-card/40 border border-white/5 p-8 rounded-[2.5rem] hover:bg-card/60 transition-all duration-500">
                                <div className="absolute top-6 right-6 text-6xl font-black text-white/5 group-hover:text-primary/10 transition-colors">
                                    0{s.number}
                                </div>
                                <div className="w-16 h-16 bg-blue-600/10 text-blue-600 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                                    <s.icon className="w-8 h-8" />
                                </div>
                                <h3 className="text-2xl font-bold mb-4">{s.title}</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    {s.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
