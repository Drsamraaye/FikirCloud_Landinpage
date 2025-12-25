'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { HelpCircle, Book, MessageSquare, PhoneCall } from 'lucide-react';

export default function HelpCenterPage() {
    return (
        <main className="min-h-screen bg-background text-foreground">
            <Navbar />
            <section className="pt-32 pb-20 px-6">
                <div className="max-w-5xl mx-auto">
                    <h1 className="text-5xl md:text-7xl font-black mb-8 text-center">Help <span className="text-primary">Center</span></h1>
                    <p className="text-xl text-muted-foreground text-center mb-20 max-w-2xl mx-auto">Everything you need to know about using FikirCloud effectively.</p>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { icon: Book, title: 'Guides', desc: 'Step-by-step tutorials' },
                            { icon: HelpCircle, title: 'FAQs', desc: 'Frequently asked questions' },
                            { icon: MessageSquare, title: 'Community', desc: 'Connect with other users' },
                            { icon: PhoneCall, title: 'Live Chat', desc: 'Real-time expert support' }
                        ].map((item, i) => (
                            <div key={i} className="p-8 bg-card/40 border border-white/5 rounded-[2rem] hover:bg-card/60 transition-all text-center">
                                <item.icon className="w-10 h-10 text-primary mx-auto mb-6" />
                                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                                <p className="text-sm text-muted-foreground">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
}
