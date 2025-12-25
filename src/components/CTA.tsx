'use client';

import { MessageCircle, Mail, Phone, ArrowRight } from 'lucide-react';

export default function CTA() {
    return (
        <section className="relative py-24 md:py-40 px-6 text-center overflow-hidden">
            {/* Premium Background for CTA */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute inset-0 bg-background"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-background to-background"></div>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-primary/20 blur-[120px] rounded-full opacity-30"></div>
            </div>

            <div className="max-w-6xl mx-auto relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center text-center lg:text-left">
                    <div>
                        <h2 className="text-4xl md:text-7xl font-black mb-6 md:mb-8 leading-[1.1] tracking-tighter text-foreground">
                            Ready to <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-indigo-400">
                                Transform
                            </span> Your School?
                        </h2>
                        <p className="text-lg md:text-xl text-muted-foreground mb-8 md:mb-12 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                            Join the digital revolution in education. Our experts are ready to help you modernize your institution with FikirCloud.
                        </p>

                        <div className="space-y-4 md:space-y-6 mb-10 md:mb-12">
                            <div className="flex items-center gap-4 group/item justify-center lg:justify-start">
                                <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary group-hover/item:bg-primary group-hover/item:text-white transition-all duration-300">
                                    <Mail className="w-5 h-5 md:w-6 md:h-6" />
                                </div>
                                <div className="text-left">
                                    <p className="text-xs text-muted-foreground">Email us at</p>
                                    <p className="text-base md:text-lg font-bold">gxuseen@gmail.com</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 group/item justify-center lg:justify-start">
                                <div className="w-10 h-10 md:w-12 md:h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent group-hover/item:bg-accent group-hover/item:text-white transition-all duration-300">
                                    <Phone className="w-5 h-5 md:w-6 md:h-6" />
                                </div>
                                <div className="text-left">
                                    <p className="text-xs text-muted-foreground">Call us at</p>
                                    <p className="text-base md:text-lg font-bold">+252 63 7018339</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-card/40 backdrop-blur-xl border border-white/10 p-6 md:p-10 rounded-[2.5rem] shadow-2xl shadow-primary/5">
                        <h3 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">Get in Touch</h3>
                        <p className="text-muted-foreground mb-6 md:mb-8 text-xs md:text-sm">Preferred method of contact for instant support and demonstrations.</p>

                        <div className="flex flex-col gap-3 md:gap-4">
                            <a
                                href="https://wa.me/252637018339"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative bg-accent text-accent-foreground font-black px-6 md:px-8 py-4 md:py-5 rounded-2xl text-base md:text-lg shadow-xl shadow-accent/20 hover:shadow-accent/40 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3"
                            >
                                <MessageCircle className="w-5 h-5 md:w-6 md:h-6" />
                                <span>WhatsApp Chat</span>
                                <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
                            </a>

                            <a
                                href="mailto:gxuseen@gmail.com"
                                className="group bg-primary text-primary-foreground font-black px-6 md:px-8 py-4 md:py-5 rounded-2xl text-base md:text-lg shadow-xl shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3"
                            >
                                <Mail className="w-5 h-5 md:w-6 md:h-6" />
                                <span>Send an Email</span>
                            </a>
                        </div>

                        <div className="mt-6 md:mt-8 pt-6 md:pt-8 border-t border-white/5 flex items-center gap-3 text-xs md:text-sm text-muted-foreground justify-center lg:justify-start">
                            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                            <span>Currently responding in ~15 mins</span>
                        </div>
                    </div>
                </div>

                <div className="mt-24 flex flex-wrap justify-center gap-12 text-muted-foreground/40 text-[10px] font-black uppercase tracking-[0.5em]">
                    <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                        99.9% Uptime
                    </div>
                    <span>Enterprise Security</span>
                    <span>GDPR Compliant</span>
                </div>
            </div>
        </section>
    );
}
