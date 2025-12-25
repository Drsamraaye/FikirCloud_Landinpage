'use client';

import { Users, BarChart3, Wallet, FileText, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const featureDetails = [
    {
        title: 'Student Lifecycle Management',
        description: 'From admission to graduation, track every milestone in a student\'s journey with automated records and profile management.',
        icon: Users,
        color: 'blue',
        benefits: ['Automated admissions', 'Centralized student profiles', 'Academic history tracking'],
        image: '/studentcycle2.png'
    },
    {
        title: 'Attendance Automation',
        description: 'Ditch the paper logs. Our real-time attendance system provides instant notifications and comprehensive reports for staff and students.',
        icon: BarChart3,
        color: 'indigo',
        benefits: ['Biometric integration', 'SMS alerts for parents', 'Monthly percentage reports'],
        image: '/attendance.png'
    },
    {
        title: 'Financial Oversight',
        description: 'Complete transparency in school finances. Automated fee collection, digital invoicing, and real-time expense tracking.',
        icon: Wallet,
        color: 'emerald',
        benefits: ['Online fee payments', 'Inventory management', 'Payroll automation'],
        image: '/financial.png'
    },
    {
        title: 'Exam & Result Management',
        description: 'Advanced grading systems that handle complex curriculum requirements and generate professional report cards in seconds.',
        icon: FileText,
        color: 'violet',
        benefits: ['Custom grading scales', 'Instant result publishing', 'Performance analytics'],
        image: '/exams.png'
    },
];

export default function FeaturesPage() {
    return (
        <main className="min-h-screen bg-background">
            <Navbar />

            <section className="pt-32 pb-20 px-6">
                <div className="max-w-7xl mx-auto text-center">
                    <h1 className="text-5xl md:text-7xl font-black mb-8">Enterprise <span className="text-primary">Features</span></h1>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-20">
                        Discover the full potential of FikirCloud. Our modules are designed to solve the specific
                        challenges of modern educational institutions.
                    </p>

                    <div className="grid grid-cols-1 gap-12 text-left">
                        {featureDetails.map((f, i) => (
                            <div key={i} className="group bg-card/40 backdrop-blur-xl border border-white/10 p-10 md:p-16 rounded-[3rem] hover:bg-card/60 transition-all duration-500">
                                <div className="grid md:grid-cols-2 gap-12 items-center">
                                    <div>
                                        <div className={`w-16 h-16 rounded-2xl bg-${f.color}-500/10 flex items-center justify-center mb-8`}>
                                            <f.icon className={`w-8 h-8 text-${f.color}-500`} />
                                        </div>
                                        <h2 className="text-4xl font-bold mb-6">{f.title}</h2>
                                        <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                                            {f.description}
                                        </p>
                                        <ul className="space-y-4">
                                            {f.benefits.map((b, j) => (
                                                <li key={j} className="flex items-center gap-3 text-foreground font-medium">
                                                    <CheckCircle2 className="w-5 h-5 text-primary" />
                                                    {b}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="relative aspect-video rounded-3xl bg-secondary/50 border border-border overflow-hidden group-hover:scale-[1.02] transition-transform duration-500">
                                        <Image
                                            src={f.image}
                                            alt={f.title}
                                            fill
                                            className="object-cover"
                                        />
                                        {/* Decorative Glow */}
                                        <div className={`absolute -bottom-20 -right-20 w-64 h-64 bg-${f.color}-500/10 blur-[100px] rounded-full`}></div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
