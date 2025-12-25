'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { FileCode, Search, Terminal } from 'lucide-react';

export default function DocumentationPage() {
    return (
        <main className="min-h-screen bg-background text-foreground">
            <Navbar />
            <section className="pt-32 pb-20 px-6">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12">
                    {/* Sidebar Placeholder */}
                    <div className="md:w-64 space-y-4">
                        <div className="bg-card/40 border border-white/5 p-6 rounded-2xl">
                            <h3 className="font-bold mb-4 uppercase text-xs tracking-widest opacity-50">Getting Started</h3>
                            <ul className="space-y-3 text-sm font-medium">
                                <li className="text-primary cursor-pointer">Introduction</li>
                                <li className="text-muted-foreground hover:text-foreground cursor-pointer transition-colors">Setup Guide</li>
                                <li className="text-muted-foreground hover:text-foreground cursor-pointer transition-colors">API Reference</li>
                            </ul>
                        </div>
                    </div>

                    <div className="flex-1">
                        <div className="inline-flex items-center gap-2 text-primary font-bold text-sm mb-6">
                            <Terminal className="w-4 h-4" />
                            <span>Developer Docs</span>
                        </div>
                        <h1 className="text-5xl font-black mb-8">Documentation</h1>
                        <p className="text-xl text-muted-foreground mb-12">Comprehensive technical information and integration guides for the FikirCloud ecosystem.</p>

                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="p-8 bg-card border border-white/5 rounded-3xl group cursor-pointer hover:border-primary/50 transition-all">
                                <FileCode className="w-8 h-8 text-primary mb-6" />
                                <h3 className="text-xl font-bold mb-2">API Documentation</h3>
                                <p className="text-sm text-muted-foreground">Integrate FikirCloud with your existing systems using our robust API.</p>
                            </div>
                            <div className="p-8 bg-card border border-white/5 rounded-3xl group cursor-pointer hover:border-primary/50 transition-all">
                                <Search className="w-8 h-8 text-indigo-500 mb-6" />
                                <h3 className="text-xl font-bold mb-2">Search Catalog</h3>
                                <p className="text-sm text-muted-foreground">Search through our extensive library of technical articles.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
}
