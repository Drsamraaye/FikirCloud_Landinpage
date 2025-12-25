'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function PrivacyPolicyPage() {
    return (
        <main className="min-h-screen bg-background text-foreground">
            <Navbar />
            <section className="pt-32 pb-20 px-6">
                <div className="max-w-3xl mx-auto prose prose-invert font-medium">
                    <h1 className="text-5xl font-black mb-12">Privacy Policy</h1>
                    <p className="text-muted-foreground text-lg mb-8">Effective date: December 25, 2025</p>
                    <div className="space-y-8 text-muted-foreground leading-relaxed">
                        <section>
                            <h2 className="text-2xl font-bold text-foreground mb-4">1. Data Collection</h2>
                            <p>We collect information necessary to provide institutional management services, including student records, staff details, and financial data as provided by the institution.</p>
                        </section>
                        <section>
                            <h2 className="text-2xl font-bold text-foreground mb-4">2. Data Usage</h2>
                            <p>Your data is used solely for the operation of the FikirCloud platform and is never sold or shared with third-party advertisers.</p>
                        </section>
                        <section>
                            <h2 className="text-2xl font-bold text-foreground mb-4">3. Security</h2>
                            <p>We implement industry-standard encryption and security protocols to ensure your data remains protected at all times.</p>
                        </section>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
}
