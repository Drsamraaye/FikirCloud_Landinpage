'use client';

import { Search, Cog, Rocket, GraduationCap, Play, LineChart } from 'lucide-react';
import Link from 'next/link';

const steps = [
    { number: 1, title: 'Strategic Audit', description: "We identify your institution's unique operational challenges.", icon: Search },
    { number: 2, title: 'Cloud Configuration', description: 'Tailored environment setup matched to your specific curriculum.', icon: Cog },
    { number: 3, title: 'System Migration', description: 'Secure transfer of academic and financial legacy data.', icon: Rocket },
    { number: 4, title: 'Stakeholder Training', description: 'Hands-on workshops for staff, teachers, and parents.', icon: GraduationCap },
    { number: 5, title: 'Ecosystem Go-Live', description: 'Seamless switchover to FikirCloud with 24/7 priority support.', icon: Play },
    { number: 6, title: 'Ongoing Optimization', description: 'Regular feature updates and performance monitoring.', icon: LineChart },
];

export default function HowItWorks() {
    return (
        <section id="how-it-works" className="bg-background py-20 md:py-32 px-6 transition-colors duration-300">
            <div className="max-w-7xl mx-auto">
                <div className="text-center max-w-2xl mx-auto mb-20">
                    <h2 className="text-4xl font-extrabold text-foreground mb-6 tracking-tight">The Implementation Journey</h2>
                    <p className="text-lg text-muted-foreground">
                        A battle-tested process designed to modernize your school with minimal friction.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
                    {steps.map((s) => (
                        <Link key={s.number} href="/how-it-works" className="relative group block cursor-pointer">
                            <div className="flex gap-8">
                                <div className="flex-shrink-0 relative">
                                    <div className="w-16 h-16 bg-blue-600/10 text-blue-600 rounded-2xl flex items-center justify-center font-black text-xl shadow-lg shadow-blue-600/5 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 overflow-hidden relative">
                                        <s.icon className="w-8 h-8 relative z-10" />
                                        <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </div>
                                    <div className="absolute -top-2 -right-2 w-7 h-7 bg-background border-2 border-blue-600 text-blue-600 rounded-full flex items-center justify-center text-xs font-bold shadow-sm">
                                        {s.number}
                                    </div>
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-foreground mb-3 group-hover:text-blue-600 transition-colors duration-300">{s.title}</h4>
                                    <p className="text-muted-foreground text-sm leading-relaxed group-hover:text-foreground/70 transition-colors duration-300">
                                        {s.description}
                                    </p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
