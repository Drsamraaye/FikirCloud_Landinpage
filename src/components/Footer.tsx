'use client';
import Link from 'next/link';
import Image from 'next/image';
import { Twitter, Linkedin, Facebook, Mail, ArrowRight, ShieldCheck, Globe } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-background border-t border-border pt-20 pb-10 px-6 transition-colors duration-300">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand Section */}
                    <div className="space-y-6">
                        <Link href="/" className="flex items-center gap-3 group">
                            <div className="relative w-10 h-10">
                                <Image
                                    src="/logo.png"
                                    alt="FikirCloud Logo"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <h2 className="text-2xl font-black tracking-tighter text-foreground">
                                Fikir<span className="text-primary">Cloud</span>
                            </h2>
                        </Link>
                        <p className="text-muted-foreground leading-relaxed">
                            Modern school management software for forward-thinking institutions. Streamline your operations and focus on what matters most: education.
                        </p>
                        <div className="flex gap-4">
                            <a href="https://twitter.com/guleidpro" className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300">
                                <Twitter className="w-5 h-5" />
                            </a>
                            <a href="https://www.linkedin.com/in/guiled-husein-a18b8038a/" className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300">
                                <Linkedin className="w-5 h-5" />
                            </a>
                            <a href="https://www.facebook.com/guleidpro" className="w-10 h-10 rounded-lg bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300">
                                <Facebook className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-bold text-foreground mb-6 uppercase tracking-wider text-sm">Product</h3>
                        <ul className="space-y-4 text-muted-foreground">
                            <li><Link href="/features" className="hover:text-primary transition-colors">Features</Link></li>
                            <li><Link href="/how-it-works" className="hover:text-primary transition-colors">How it Works</Link></li>
                            <li><Link href="/pricing" className="hover:text-primary transition-colors">Pricing</Link></li>
                            <li><Link href="/updates" className="hover:text-primary transition-colors">Updates</Link></li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h3 className="font-bold text-foreground mb-6 uppercase tracking-wider text-sm">Company</h3>
                        <ul className="space-y-4 text-muted-foreground">
                            <li><Link href="/about-us" className="hover:text-primary transition-colors">About Us</Link></li>
                            <li><Link href="/careers" className="hover:text-primary transition-colors">Careers</Link></li>
                            <li><Link href="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
                            <li><Link href="/terms-of-service" className="hover:text-primary transition-colors">Terms of Service</Link></li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h3 className="font-bold text-foreground mb-6 uppercase tracking-wider text-sm">Support</h3>
                        <ul className="space-y-4 text-muted-foreground">
                            <li><Link href="/help-center" className="hover:text-primary transition-colors">Help Center</Link></li>
                            <li><Link href="/documentation" className="hover:text-primary transition-colors">Documentation</Link></li>
                            <li><Link href="/contact-us" className="hover:text-primary transition-colors">Contact Us</Link></li>
                            <li><Link href="/technical-support" className="hover:text-primary transition-colors">Technical Support</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-sm text-muted-foreground">
                        © {new Date().getFullYear()} FikirCloud. All rights reserved.
                    </p>
                    <div className="flex gap-8 text-sm text-muted-foreground">
                        <a href="#" className="hover:text-primary transition-colors">Status</a>
                        <a href="#" className="hover:text-primary transition-colors">Cookies</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
