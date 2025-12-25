'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function TermsOfServicePage() {
    return (
        <main className="min-h-screen bg-background text-foreground">
            <Navbar />
            <section className="pt-32 pb-20 px-6">
                <div className="max-w-3xl mx-auto prose prose-invert font-medium">
                    <h1 className="text-5xl font-black mb-12">Terms of Service</h1>
                    <p className="text-muted-foreground text-lg mb-8">Last updated: December 2025</p>
                    <div className="space-y-8 text-muted-foreground leading-relaxed">
                        <section>
                            <h2 className="text-2xl font-bold text-foreground mb-4">1. Acceptance of Terms</h2>
                            <p>By using FikirCloud, you agree to comply with these terms and conditions. If you do not agree, please do not use our services.</p>
                        </section>
                        <section>
                            <h2 className="text-2xl font-bold text-foreground mb-4">2. License to Use</h2>
                            <p>We grant you a limited, non-exclusive license to use the FikirCloud platform for institutional management purposes.</p>
                        </section>
                        <section>
                            <h2 className="text-2xl font-bold text-foreground mb-4">3. Prohibited Conduct</h2>
                            <p>Users are prohibited from attempting to breach the platform's security or using the service for any illegal activities.</p>
                        </section>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
}
