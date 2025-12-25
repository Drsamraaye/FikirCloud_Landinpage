'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Briefcase, MapPin, Clock } from 'lucide-react';

const jobs = [
    { title: 'Frontend Engineer (React)', location: 'Remote / Hargeisa', type: 'Full-time' },
    { title: 'Customer Success Manager', location: 'Remote / Hargeisa', type: 'Full-time' },
    { title: 'Backend Architect', location: 'Remote', type: 'Contract' },
];

export default function CareersPage() {
    return (
        <main className="min-h-screen bg-background">
            <Navbar />
            <section className="pt-32 pb-20 px-6">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-5xl md:text-7xl font-black mb-8 text-center text-balance">Join the <span className="text-primary">Team</span></h1>
                    <p className="text-xl text-muted-foreground text-center mb-20">We are always looking for visionary minds to help us redefine education technology.</p>

                    <div className="space-y-6">
                        {jobs.map((job, i) => (
                            <div key={i} className="group bg-card/40 border border-white/5 p-8 rounded-[2rem] hover:border-primary/50 transition-all flex flex-col md:flex-row justify-between items-center gap-6">
                                <div>
                                    <h3 className="text-2xl font-bold mb-2">{job.title}</h3>
                                    <div className="flex gap-4 text-sm text-muted-foreground font-medium">
                                        <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> {job.location}</span>
                                        <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {job.type}</span>
                                    </div>
                                </div>
                                <button className="bg-primary text-white font-bold px-8 py-3 rounded-xl shadow-lg hover:shadow-primary/20 transition-all">Apply Now</button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
}
