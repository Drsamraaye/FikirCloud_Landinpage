'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Target, Users2, Award, Zap } from 'lucide-react';

export default function AboutUsPage() {
    return (
        <main className="min-h-screen bg-background">
            <Navbar />
            <section className="pt-32 pb-20 px-6">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-5xl md:text-7xl font-black mb-12 text-center">Our <span className="text-primary">Mission</span></h1>
                    <div className="prose prose-invert max-w-none space-y-12">
                        <div className="bg-card/40 border border-white/5 p-10 rounded-[3rem]">
                            <p className="text-2xl font-medium leading-relaxed italic text-muted-foreground">
                                "FikirCloud was born from a simple realization: education should be about learning,
                                not fighting with outdated software."
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="p-8 bg-secondary/30 rounded-3xl border border-white/5">
                                <Target className="w-10 h-10 text-primary mb-6" />
                                <h3 className="text-2xl font-bold mb-4">Innovation First</h3>
                                <p className="text-muted-foreground">We continuously push the boundaries of what school management software can achieve.</p>
                            </div>
                            <div className="p-8 bg-secondary/30 rounded-3xl border border-white/5">
                                <Users2 className="w-10 h-10 text-indigo-500 mb-6" />
                                <h3 className="text-2xl font-bold mb-4">Customer Obsessed</h3>
                                <p className="text-muted-foreground">Our support team isn't just a department; it's our core identity.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
}
