'use client';

import { Mail, MessageCircle, Phone, MapPin, ArrowRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function ContactUsPage() {
    return (
        <main className="min-h-screen bg-background">
            <Navbar />

            <section className="pt-32 pb-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-20">
                        <h1 className="text-5xl md:text-7xl font-black mb-8">Get in <span className="text-primary">Touch</span></h1>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            Whether you need a full demonstration or have a quick question, our team is ready to assist you.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Contact Form Placeholder / Info */}
                        <div className="space-y-8">
                            <div className="bg-card/40 border border-white/10 p-10 rounded-[2.5rem] hover:border-primary/50 transition-all">
                                <h3 className="text-2xl font-bold mb-8">Direct Contact</h3>
                                <div className="space-y-6">
                                    <div className="flex items-center gap-6 group">
                                        <div className="w-14 h-14 bg-green-500/10 rounded-2xl flex items-center justify-center text-green-500 group-hover:bg-green-500 group-hover:text-white transition-all">
                                            <MessageCircle className="w-7 h-7" />
                                        </div>
                                        <div>
                                            <p className="text-sm text-muted-foreground font-bold uppercase tracking-wider">WhatsApp</p>
                                            <p className="text-xl font-bold">+252 63 7018339</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-6 group">
                                        <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                                            <Mail className="w-7 h-7" />
                                        </div>
                                        <div>
                                            <p className="text-sm text-muted-foreground font-bold uppercase tracking-wider">Email</p>
                                            <p className="text-xl font-bold">gxuseen@gmail.com</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-6 group">
                                        <div className="w-14 h-14 bg-indigo-500/10 rounded-2xl flex items-center justify-center text-indigo-500 group-hover:bg-indigo-500 group-hover:text-white transition-all">
                                            <MapPin className="w-7 h-7" />
                                        </div>
                                        <div>
                                            <p className="text-sm text-muted-foreground font-bold uppercase tracking-wider">Headquarters</p>
                                            <p className="text-xl font-bold">Hargeisa, Somaliland</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Professional Contact Card */}
                        <div className="bg-card/40 backdrop-blur-xl border border-primary/20 p-12 rounded-[3rem] shadow-2xl shadow-primary/5 flex flex-col justify-center items-center text-center">
                            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-10">
                                <Phone className="w-10 h-10 text-primary animate-pulse" />
                            </div>
                            <h2 className="text-4xl font-black mb-6 uppercase tracking-tighter">Ready to Begin?</h2>
                            <p className="text-muted-foreground mb-12 text-lg">
                                Join 50+ forward-thinking schools that have already modernized their administrative ecosystem.
                            </p>
                            <a
                                href="https://wa.me/252637018339"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full group bg-primary text-primary-foreground font-black px-10 py-6 rounded-2xl text-xl shadow-xl shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-1 transition-all flex items-center justify-center gap-3"
                            >
                                <span>Messenger Chat</span>
                                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
