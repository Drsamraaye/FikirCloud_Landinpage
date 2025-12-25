'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Newspaper, Bell, Star } from 'lucide-react';

export default function UpdatesPage() {
    return (
        <main className="min-h-screen bg-background text-foreground">
            <Navbar />
            <section className="pt-32 pb-20 px-6">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-5xl md:text-7xl font-black mb-12 text-center text-balance">Product <span className="text-primary">Updates</span></h1>

                    <div className="space-y-12">
                        {[
                            { date: 'December 20, 2025', title: 'AI-Powered Analytics v2.0', desc: 'We\'ve launched a major update to our analytics engine, providing deeper insights into student performance and financial trends.', tag: 'Major' },
                            { date: 'November 15, 2025', title: 'Mobile App Refinement', desc: 'UI/UX improvements for the parent and teacher portals on iOS and Android.', tag: 'Portal' },
                        ].map((update, i) => (
                            <div key={i} className="relative pl-12 border-l-2 border-white/10">
                                <div className="absolute -left-[11px] top-0 w-5 h-5 bg-background border-2 border-primary rounded-full" />
                                <span className="text-sm font-bold text-primary mb-2 block">{update.date}</span>
                                <h3 className="text-3xl font-bold mb-4 flex items-center gap-4">
                                    {update.title}
                                    <span className="text-[10px] uppercase tracking-widest bg-secondary px-2 py-1 rounded-md">{update.tag}</span>
                                </h3>
                                <p className="text-lg text-muted-foreground leading-relaxed">{update.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
}
