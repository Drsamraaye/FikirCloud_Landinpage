'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ThemeToggle } from './ThemeToggle';
import { Menu, X, ArrowRight } from 'lucide-react';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Features', href: '/features' },
        { name: 'Process', href: '/how-it-works' },
        { name: 'Pricing', href: '/pricing' },
    ];

    return (
        <nav
            className={`fixed top-0 w-full z-50 transition-all duration-500 px-6 py-4 ${scrolled
                ? 'bg-background/80 backdrop-blur-2xl border-b border-white/5 py-3 shadow-2xl shadow-black/5'
                : 'bg-transparent py-5'
                }`}
        >
            <div className={`max-w-7xl mx-auto flex items-center justify-between transition-all duration-500 ${scrolled ? 'scale-100' : 'scale-100'
                }`}>
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 md:gap-3 group cursor-pointer shrink-0">
                    <div className="relative w-10 h-10 md:w-12 md:h-12 group-hover:scale-105 transition-transform duration-300">
                        <Image
                            src="/logo.png"
                            alt="FikirCloud Logo"
                            fill
                            className="object-contain"
                        />
                    </div>
                    <div className="flex flex-col -gap-1">
                        <h1 className="text-lg md:text-xl font-black tracking-tighter text-foreground group-hover:text-primary transition-colors leading-none">FikirCloud</h1>
                        <span className="text-[8px] md:text-[10px] font-bold text-muted-foreground tracking-[0.2em] uppercase">Enterprise</span>
                    </div>
                </Link>

                {/* ... Desktop Nav unchanged ... */}
                <div className="hidden md:flex items-center gap-8 bg-black/5 dark:bg-white/5 px-6 py-2 rounded-2xl border border-white/5 backdrop-blur-md">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-xs font-bold uppercase tracking-widest text-muted-foreground hover:text-primary transition-all relative group/link"
                        >
                            {link.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover/link:w-full" />
                        </Link>
                    ))}
                </div>

                {/* Actions */}
                <div className="hidden md:flex items-center gap-6">
                    <ThemeToggle />
                    <Link
                        href="/contact-us"
                        className="group bg-primary text-primary-foreground font-bold px-7 py-3 rounded-xl transition-all shadow-xl shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-1 text-sm flex items-center gap-2"
                    >
                        <span>Start Free Trial</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <div className="md:hidden flex items-center gap-3 md:gap-4">
                    <ThemeToggle />
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="w-10 h-10 flex items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-lg shadow-primary/20 hover:scale-105 transition-all"
                    >
                        {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <div className={`fixed inset-x-0 top-[72px] bg-background/95 backdrop-blur-2xl border-b border-border transition-all duration-500 overflow-hidden md:hidden ${mobileMenuOpen ? 'max-h-[80vh] opacity-100 py-8 px-6 shadow-2xl overflow-y-auto' : 'max-h-0 opacity-0'
                }`}>
                <div className="flex flex-col gap-6">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="text-xl font-bold text-foreground hover:text-primary transition-colors flex items-center justify-between py-2"
                        >
                            {link.name}
                            <ArrowRight className="w-5 h-5 opacity-50" />
                        </Link>
                    ))}
                    <div className="h-px bg-border/50 my-2" />
                    <Link
                        href="/contact-us"
                        onClick={() => setMobileMenuOpen(false)}
                        className="bg-primary text-primary-foreground font-black px-6 py-5 rounded-2xl text-center shadow-xl shadow-primary/20 flex items-center justify-center gap-3 text-lg"
                    >
                        <span>Get Started Now</span>
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>
            </div>
        </nav>
    );
}
