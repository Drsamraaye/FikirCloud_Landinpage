'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Settings, Wrench, Terminal, Activity } from 'lucide-react';

export default function TechnicalSupportPage() {
    return (
        <main className="min-h-screen bg-background text-foreground">
            <Navbar />
            <section className="pt-32 pb-20 px-6">
                <div className="max-w-5xl mx-auto">
                    <h1 className="text-5xl md:text-7xl font-black mb-12 text-center">Technical <span className="text-primary">Support</span></h1>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-card/40 border border-white/10 p-10 rounded-[3rem]">
                            <Settings className="w-12 h-12 text-primary mb-8" />
                            <h3 className="text-3xl font-bold mb-4">System Status</h3>
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                                <span className="font-bold">All Systems Operational</span>
                            </div>
                            <p className="text-muted-foreground leading-relaxed">Our infrastructure is monitored 24/7 to ensure 99.9% uptime for all institutions.</p>
                        </div>

                        <div className="bg-card/40 border border-white/10 p-10 rounded-[3rem]">
                            <Wrench className="w-12 h-12 text-indigo-500 mb-8" />
                            <h3 className="text-3xl font-bold mb-4">Support Ticket</h3>
                            <button className="w-full bg-primary text-white font-black py-4 rounded-2xl shadow-xl shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-1 transition-all mb-4">
                                Open New Ticket
                            </button>
                            <p className="text-sm text-muted-foreground text-center italic">Requires enterprise authentication.</p>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
}
