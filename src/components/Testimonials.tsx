'use client';

const testimonials = [
    {
        name: 'Dr. Sarah Ahmed',
        role: 'Managing Director',
        text: 'FikirCloud has unified our multiple campuses into one dashboard. The reporting tools are indispensable for our board meetings.',
    },
    {
        name: 'Eng. Abdullahi Isse',
        role: 'School Founder',
        text: 'Switching to this cloud solution reduced our administrative overhead by 40%. The support team is simply outstanding.',
    },
    {
        name: 'Hodan Yusuf',
        role: 'Principal',
        text: 'Our teachers now spend more time teaching and less time on paperwork. It really is a game-changer for education.',
    },
];

export default function Testimonials() {
    return (
        <section id="testimonials" className="bg-secondary/30 py-20 md:py-32 px-6 transition-colors duration-300">
            <div className="max-w-7xl mx-auto">
                <div className="text-center max-w-2xl mx-auto mb-20">
                    <h2 className="text-4xl font-extrabold text-foreground mb-6">Built for Educational Leaders</h2>
                    <p className="text-lg text-muted-foreground">
                        Join the visionary institutions that have modernized their operations with FikirCloud.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((t, i) => (
                        <div key={i} className="bg-card/40 backdrop-blur-md p-10 rounded-3xl border border-white/5 shadow-lg flex flex-col items-center text-center hover:shadow-primary/5 transition-all duration-300">
                            <div className="text-primary text-4xl mb-6 opacity-50">“</div>
                            <p className="text-muted-foreground italic mb-10 text-lg leading-relaxed">"{t.text}"</p>
                            <div className="mt-auto">
                                <p className="font-bold text-foreground text-xl">{t.name}</p>
                                <p className="text-primary font-bold text-xs mt-2 uppercase tracking-[0.2em]">{t.role}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-12 pt-16 border-t border-border text-center">
                    <div>
                        <p className="text-5xl font-black text-foreground mb-2">150+</p>
                        <p className="text-muted-foreground text-xs font-black uppercase tracking-[0.2em]">Partner Schools</p>
                    </div>
                    <div>
                        <p className="text-5xl font-black text-foreground mb-2">50k+</p>
                        <p className="text-muted-foreground text-xs font-black uppercase tracking-[0.2em]">Active Students</p>
                    </div>
                    <div>
                        <p className="text-5xl font-black text-foreground mb-2">99%</p>
                        <p className="text-muted-foreground text-xs font-black uppercase tracking-[0.2em]">Renewal Rate</p>
                    </div>
                    <div>
                        <p className="text-5xl font-black text-foreground mb-2">24/7</p>
                        <p className="text-muted-foreground text-xs font-black uppercase tracking-[0.2em]">Dedicated Support</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
