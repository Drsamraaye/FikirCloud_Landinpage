'use client';
import { Play, ShieldCheck, ArrowRight, Star } from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
    return (
        <section className="relative w-full overflow-hidden bg-background pt-24 pb-20 md:pt-48 md:pb-32 px-6 text-center transition-colors duration-300">
            {/* Advanced Background Design ... unchanged ... */}
            <div className="absolute inset-0 -z-10 h-full w-full">
                <div className="absolute inset-0 bg-background"></div>
                {/* Mesh Gradient Effect */}
                <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/20 blur-[150px] rounded-full opacity-30 animate-pulse"></div>
                <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-indigo-500/10 blur-[120px] rounded-full opacity-20"></div>

                {/* Grid Overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
            </div>

            <div className="max-w-6xl mx-auto relative z-10">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-xs md:text-sm font-semibold text-primary mb-8 md:mb-10 backdrop-blur-md shadow-inner animate-fade-in hover:border-primary transition-colors cursor-default">
                    <span className="flex h-2 w-2 rounded-full bg-accent animate-pulse"></span>
                    <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent underline decoration-primary/30 underline-offset-4">v2.0:</span>
                    AI Analytics for Schools
                </div>

                {/* Main Heading */}
                <h1 className="text-4xl md:text-6xl lg:text-[7rem] font-black text-foreground mb-8 md:mb-10 leading-[1.1] md:leading-[1] tracking-tight text-balance">
                    Building Smarter <br />
                    <span className="relative inline-block">
                        Education Systems
                        <div className="absolute -bottom-1 md:-bottom-2 left-0 w-full h-2 md:h-3 bg-primary/10 -skew-x-12 -z-10" />
                    </span>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent block mt-2">
                        with FikirCloud
                    </span>
                </h1>

                <p className="text-lg md:text-2xl text-muted-foreground mb-10 md:mb-14 max-w-3xl mx-auto leading-relaxed text-pretty font-medium">
                    FikirCloud unifies school operations — admissions, payments, and academic management — helping institutions operate with speed, confidence, and security.
                </p>

                {/* Primary Actions */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-8 mb-16 md:mb-20">
                    <Link
                        href="/contact-us"
                        className="w-full sm:w-auto group relative bg-primary text-primary-foreground font-black px-8 md:px-12 py-5 md:py-6 rounded-2xl text-lg md:text-xl shadow-xl hover:-translate-y-1 transition-all duration-500 flex items-center justify-center gap-3 overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                        <span>Book a Demo</span>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>

                    <Link
                        href="/demo2.mp4"
                        target="_blank"
                        className="w-full sm:w-auto group bg-secondary text-secondary-foreground font-bold px-8 md:px-10 py-5 md:py-6 rounded-2xl text-lg md:text-xl shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-4"
                    >
                        <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/20 flex items-center justify-center group-hover:scale-110 transition-transform shadow-inner">
                            <Play className="w-4 h-4 md:w-5 md:h-5 fill-current" />
                        </div>
                        Watch Showreel
                    </Link>
                </div>

                {/* Social Proof Section */}
                <div className="pt-16 border-t border-white/5">
                    <div className="flex flex-col md:flex-row items-center justify-center gap-12 text-muted-foreground">
                        <div className="flex items-center gap-3">
                            <div className="flex -space-x-2">
                                {[1, 2, 3, 4].map(i => (
                                    <div key={i} className={`w-10 h-10 rounded-full border-2 border-background bg-secondary flex items-center justify-center text-[10px] font-bold`}>
                                        User {i}
                                    </div>
                                ))}
                            </div>
                            <div className="text-left">
                                <div className="flex gap-0.5 text-yellow-500">
                                    {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-3 h-3 fill-current" />)}
                                </div>
                                <p className="text-xs font-bold leading-none mt-1">Trusted by 50+ Institutions</p>
                            </div>
                        </div>
                        <div className="w-[1px] h-10 bg-border hidden md:block" />
                        <div className="flex items-center gap-8 opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-default">
                            <span className="font-bold text-lg tracking-widest uppercase">Oxford Academy</span>
                            <span className="font-bold text-lg tracking-widest uppercase">Som Schools</span>
                            <span className="font-bold text-lg tracking-widest uppercase">Global Edu</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
