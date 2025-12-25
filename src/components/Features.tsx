'use client';

import { Users, BarChart3, Wallet, FileText } from 'lucide-react';
import Link from 'next/link';

const features = [
    {
        title: 'Student Lifecycle',
        description: 'Manage admissions, student profiles, and academic records with ease.',
        icon: Users,
        color: 'blue',
        href: '/features',
    },
    {
        title: 'Attendance Automation',
        description: 'Real-time attendance tracking for students and teachers.',
        icon: BarChart3,
        color: 'indigo',
        href: '/features',
    },
    {
        title: 'Financial Oversight',
        description: 'Automated billing, fee collection, and digital invoicing.',
        icon: Wallet,
        color: 'emerald',
        href: '/features',
    },
    {
        title: 'Exam Management',
        description: 'Streamlined grading, report generation, and performance tracking.',
        icon: FileText,
        color: 'violet',
        href: '/features',
    },
];

export default function Features() {
    return (
        <section id="features" className="bg-secondary/30 py-20 md:py-32 px-6 transition-colors duration-300">
            <div className="max-w-7xl mx-auto">
                <div className="text-center max-w-2xl mx-auto mb-20">
                    <h2 className="text-4xl font-extrabold text-foreground mb-6 tracking-tight">Enterprise-Grade Features</h2>
                    <p className="text-lg text-muted-foreground">
                        A comprehensive suite of tools designed to optimize every aspect of your institution.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((f, i) => (
                        <Link
                            key={i}
                            href={f.href}
                            className="group block relative bg-card/40 backdrop-blur-md border border-white/10 p-8 rounded-[2rem] hover:bg-card/60 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-2 overflow-hidden"
                        >
                            {/* Decorative Background Glow */}
                            <div className={`absolute -top-10 -right-10 w-32 h-32 bg-${f.color}-500/10 blur-3xl group-hover:bg-${f.color}-500/20 transition-all duration-500`} />

                            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 bg-${f.color}-500/5 group-hover:scale-110 transition-transform duration-500 relative`}>
                                <f.icon className={`w-7 h-7 text-${f.color}-500`} />
                                <div className={`absolute inset-0 bg-${f.color}-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                            </div>

                            <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">{f.title}</h3>
                            <p className="text-muted-foreground leading-relaxed text-sm group-hover:text-foreground/80 transition-colors duration-300">
                                {f.description}
                            </p>

                            {/* Hover Border Gradient */}
                            <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
