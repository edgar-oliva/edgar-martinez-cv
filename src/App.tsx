import { motion, useReducedMotion, type Variants } from 'framer-motion';
import { Mail, Linkedin, Briefcase, Code2, Download, User, Zap, ChevronDown } from 'lucide-react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import CVDocument from './components/CVDocument';
import Navigation from './components/Navigation';
import { GlowingEffect } from './components/ui/glowing-effect';
import { GradientButton } from './components/ui/gradient-button';
import { Component as RotatingText } from './components/ui/rotating-text';
import { Typewriter } from './components/ui/typewriter';
import { InteractiveGlobe } from './components/ui/interactive-globe';

// ── Animation variants ──────────────────────────────────────────────────────
const fadeUp: Variants = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0 },
};

const stagger: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.08 } },
};

const itemTransition = { duration: 0.55, ease: 'easeOut' as const };

// ── Static experience data (no typewriter on bullets) ───────────────────────
const experiences = [
    {
        company: 'British American Tobacco | Accenture Acquisition',
        period: 'February 2026 - Current',
        role: 'Demand Planning Executive',
        accent: 'blue' as const,
        bullets: [
            'Develop and manage demand forecasts for multiple US brands, providing insights on product volume behavior from the current year and up to 5 years ahead.',
            'Deliver scenario simulation analyses and strategic insights to Sr Directors across multiple areas and markets to support long-term business planning.',
            'Collaborate cross-functionally to align volume projections with commercial strategy and market dynamics.',
        ],
    },
    {
        company: 'British American Tobacco | Accenture Acquisition',
        period: 'February 2025 - February 2026',
        role: 'Marketing Materials Project Manager',
        accent: 'blue' as const,
        bullets: [
            'Responsible for the execution of POS marketing materials for the operations field with over 300K stores in North America.',
            'Developed Power BI dashboards integrating Salesforce data to track field activity and material performance, delivering actionable insights for key stakeholders.',
            'Successfully managed over 20 POS campaigns with an average project value of $250,000 US dollars.',
            'Coordinating cross-functional teams with 6 different stakeholders.',
            'Managed timelines, asset approvals, and vendor deliverables while maintaining quality standards.',
        ],
    },
    {
        company: 'British American Tobacco',
        period: 'October 2023 - January 2025',
        role: 'Trade Marketing Operations Analyst',
        accent: 'slate' as const,
        bullets: [
            'Work alongside the Operations Field to support Regional and Strategic Accounts in the US.',
            'Improve Internal and External Business Operation Performance.',
            'Data Analysis and Insights using Power BI and Power Query.',
            'Execution of Mass Material Orders for the field.',
            'Warehouse Account Management.',
        ],
    },
];

// ── Section divider with animated dot ───────────────────────────────────────
function SectionDivider() {
    return (
        <div className="flex items-center gap-4">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent" />
            <motion.div
                className="w-2 h-2 bg-blue-500 rounded-full"
                animate={{ scale: [1, 1.5, 1], opacity: [0.6, 1, 0.6] }}
                transition={{ repeat: Infinity, duration: 2.4, ease: 'easeInOut' }}
            />
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent" />
        </div>
    );
}

// ── App ──────────────────────────────────────────────────────────────────────
function App() {
    const shouldReduceMotion = useReducedMotion();

    // When the user prefers reduced motion, skip entrance animations entirely
    const sectionMotion = shouldReduceMotion
        ? {}
        : {
              variants: stagger,
              initial: 'hidden' as const,
              whileInView: 'show' as const,
              viewport: { once: true, margin: '-80px' },
          };

    const item = shouldReduceMotion ? {} : { variants: fadeUp, transition: itemTransition };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-50/30 to-slate-50/30 dark:from-gray-900 dark:via-gray-900 dark:to-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300 relative overflow-x-hidden">

            <Navigation />

            {/* ── Hero ─────────────────────────────────────────────────────── */}
            <section
                id="about"
                className="relative w-full h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 flex items-center justify-center pt-16 pb-32"
            >
                <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-4 px-4 w-full max-w-6xl mx-auto">
                    {/* Text content */}
                    <motion.div
                        className="flex flex-col items-center text-center gap-4 flex-1"
                        initial={{ opacity: 0, y: 28 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                    >
                        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 dark:text-white">
                            Edgar Martínez
                        </h1>
                        <motion.h2
                            className="text-2xl sm:text-3xl font-semibold text-blue-600 dark:text-blue-400"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4, duration: 0.6 }}
                        >
                            <RotatingText
                                words={['Demand Planning Executive', 'Data Analytics', 'Digital Transformation Leader']}
                                mode="slide"
                                interval={3000}
                            />
                        </motion.h2>
                    </motion.div>

                    {/* Interactive Globe */}
                    <motion.div
                        className="flex-shrink-0"
                        initial={{ opacity: 0, scale: 0.85 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3, duration: 1, ease: 'easeOut' }}
                    >
                        <InteractiveGlobe
                            size={420}
                            className="hidden sm:block"
                        />
                        <InteractiveGlobe
                            size={280}
                            className="block sm:hidden"
                        />
                    </motion.div>
                </div>

                {/* Scroll indicator */}
                {!shouldReduceMotion && (
                    <motion.div
                        className="absolute bottom-12 flex flex-col items-center gap-2 cursor-default select-none"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.6, duration: 0.8 }}
                    >
                        <span className="text-[10px] tracking-[0.2em] uppercase text-slate-400 dark:text-white/30">Scroll</span>
                        <motion.div
                            animate={{ y: [0, 8, 0] }}
                            transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
                        >
                            <ChevronDown className="w-5 h-5 text-slate-400 dark:text-white/30" />
                        </motion.div>
                    </motion.div>
                )}

                {/* Gradient matches page bg in both light & dark mode */}
                <div className="absolute inset-x-0 bottom-0 h-40 pointer-events-none bg-gradient-to-t from-gray-50 to-transparent dark:from-gray-900" />
            </section>

            <main className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 space-y-20 pt-20">

                {/* ── About card ─────────────────────────────────────────── */}
                <motion.section className="scroll-mt-20" {...sectionMotion}>
                    <motion.div
                        {...item}
                        className="relative bg-white/80 dark:bg-slate-900/80 backdrop-blur-2xl rounded-2xl p-8 sm:p-10 shadow-xl dark:shadow-[0_8px_32px_rgba(0,0,0,0.4)] border border-slate-200/50 dark:border-white/[0.06]"
                    >
                        <GlowingEffect disabled={false} spread={60} blur={0} borderWidth={2} />
                        <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-blue-500/10 to-transparent rounded-bl-full pointer-events-none" />
                        <div className="relative space-y-6">
                            <motion.div {...item} className="flex items-center gap-3 mb-2">
                                <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                                    <User className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                                </div>
                                <h3 className="text-3xl font-bold text-gray-900 dark:text-white">About</h3>
                            </motion.div>
                            <motion.p {...item} className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                                <Typewriter
                                    text="Demand planning professional with a strong background in data analytics and digital transformation, developing multi-year volume forecasts and scenario simulations for multiple US brands to support strategic decision-making across senior leadership."
                                    speed={18}
                                    loop={false}
                                    showCursor={false}
                                    initialDelay={400}
                                />
                            </motion.p>
                            <motion.div {...item} className="flex flex-wrap gap-4 pt-2">
                                <a
                                    href="mailto:adrian_0698@hotmail.com"
                                    className="flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl transition-all shadow-md hover:shadow-blue-500/25 hover:-translate-y-0.5 cursor-pointer font-medium"
                                >
                                    <Mail className="w-4 h-4" />
                                    <span className="font-medium">Email Me</span>
                                </a>
                                <PDFDownloadLink
                                    document={<CVDocument />}
                                    fileName="Edgar_Martinez_CV.pdf"
                                    className="flex items-center gap-2 px-5 py-2.5 bg-transparent border border-blue-400/30 text-slate-700 dark:text-slate-300 rounded-xl transition-all duration-200 hover:border-blue-400/70 hover:text-blue-400 hover:bg-blue-400/5 hover:-translate-y-0.5 cursor-pointer font-medium"
                                >
                                    {({ loading }) => (
                                        <>
                                            <Download className="w-4 h-4" />
                                            <span>{loading ? 'Loading...' : 'Download CV'}</span>
                                        </>
                                    )}
                                </PDFDownloadLink>
                                <a
                                    href="https://www.linkedin.com/in/edgar-mart%C3%ADnez-oliva-1ba46b225/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-5 py-2.5 bg-transparent border border-blue-400/30 text-slate-700 dark:text-slate-300 rounded-xl transition-all duration-200 hover:border-blue-400/70 hover:text-blue-400 hover:bg-blue-400/5 hover:-translate-y-0.5 cursor-pointer font-medium"
                                >
                                    <Linkedin className="w-4 h-4" />
                                    <span>LinkedIn</span>
                                </a>
                            </motion.div>
                        </div>
                    </motion.div>
                </motion.section>

                <SectionDivider />

                {/* ── Digital Transformation ─────────────────────────────── */}
                <motion.section id="digital-transformation" className="scroll-mt-20" {...sectionMotion}>
                    <motion.div
                        {...item}
                        className="relative bg-white/80 dark:bg-slate-900/80 backdrop-blur-2xl rounded-2xl p-8 sm:p-10 shadow-xl dark:shadow-[0_8px_32px_rgba(0,0,0,0.4)] border border-slate-200/50 dark:border-white/[0.06]"
                    >
                        <GlowingEffect disabled={false} spread={40} blur={0} borderWidth={2} />
                        <motion.div {...item} className="flex items-center gap-3 mb-6">
                            <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                                <Zap className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                            </div>
                            <h3 className="text-3xl font-bold text-gray-900 dark:text-white">Digital Transformation Background</h3>
                        </motion.div>
                        <motion.p {...item} className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                            Driving digital transformation through data-driven insights and automation. Specialized in implementing comprehensive data solutions through Excel automations (Macros, Power Query) and Power BI dashboards. Expert in transforming business processes with automated workflows using Power Automate and Python APIs. Proven track record of leveraging AI and advanced analytics to optimize business operations, streamline workflows, and deliver measurable results across marketing and operations.
                        </motion.p>
                    </motion.div>
                </motion.section>

                <SectionDivider />

                {/* ── Experience ─────────────────────────────────────────── */}
                <motion.section id="experience" className="scroll-mt-20 space-y-8" {...sectionMotion}>
                    <motion.div {...item} className="flex items-center gap-3">
                        <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                            <Briefcase className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                        </div>
                        <h3 className="text-3xl font-bold text-gray-900 dark:text-white">Experience</h3>
                    </motion.div>

                    <div className="space-y-6">
                        {experiences.map((exp, idx) => (
                            <motion.div
                                key={idx}
                                {...item}
                                className="relative bg-white/80 dark:bg-slate-900/80 backdrop-blur-2xl rounded-xl p-6 sm:p-8 shadow-lg dark:shadow-[0_8px_32px_rgba(0,0,0,0.4)] border border-slate-200/50 dark:border-white/[0.06] hover:shadow-xl transition-shadow overflow-hidden"
                            >
                                <div className={`absolute top-0 left-0 right-0 h-[2px] rounded-t-xl bg-gradient-to-r ${exp.accent === 'blue' ? 'from-blue-500/70' : 'from-slate-400/70'} to-transparent`} />
                                <GlowingEffect disabled={false} spread={30} blur={0} borderWidth={1} />
                                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-3">
                                    <h4 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">{exp.company}</h4>
                                    <span className={`text-sm font-semibold px-3 py-1 rounded-full mt-2 sm:mt-0 ${
                                        exp.accent === 'blue'
                                            ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20'
                                            : 'text-slate-600 dark:text-slate-400 bg-slate-50 dark:bg-slate-900/20'
                                    }`}>
                                        {exp.period}
                                    </span>
                                </div>
                                <div className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-4 italic">{exp.role}</div>
                                <motion.ul
                                    className="space-y-3 text-gray-600 dark:text-gray-400"
                                    variants={stagger}
                                >
                                    {exp.bullets.map((bullet, bIdx) => (
                                        <motion.li key={bIdx} className="flex items-start gap-3" variants={fadeUp}>
                                            <span className={`flex-shrink-0 mt-[7px] w-1.5 h-1.5 rounded-full ${
                                                exp.accent === 'blue' ? 'bg-blue-500' : 'bg-slate-500'
                                            }`} />
                                            <span>{bullet}</span>
                                        </motion.li>
                                    ))}
                                </motion.ul>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>

                <SectionDivider />

                {/* ── Skills ─────────────────────────────────────────────── */}
                <motion.section id="skills" className="scroll-mt-20 space-y-8" {...sectionMotion}>
                    <motion.div {...item} className="flex items-center gap-3">
                        <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                            <Code2 className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                        </div>
                        <h3 className="text-3xl font-bold text-gray-900 dark:text-white">Skills</h3>
                    </motion.div>

                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 gap-6"
                        variants={stagger}
                    >
                        {/* Digital Transformation & Data Analytics */}
                        <motion.div
                            {...item}
                            className="relative bg-white/80 dark:bg-slate-900/80 backdrop-blur-2xl rounded-xl p-6 shadow-lg dark:shadow-[0_8px_32px_rgba(0,0,0,0.4)] border border-slate-200/50 dark:border-white/[0.06] hover:shadow-xl transition-shadow"
                        >
                            <GlowingEffect disabled={false} spread={30} blur={0} borderWidth={1} />
                            <h5 className="font-bold text-gray-900 dark:text-white text-lg mb-4 flex items-center gap-2">
                                <div className="w-1 h-6 bg-gradient-to-b from-blue-700 to-slate-700 rounded-full" />
                                Digital Transformation & Data Analytics
                            </h5>
                            <motion.div className="flex flex-wrap gap-2" variants={stagger}>
                                {['Artificial Intelligence (AI)', 'Python', 'Power BI', 'Power Query', 'SQL', 'Data Analysis', 'Excel Automation'].map((skill) => (
                                    <motion.div key={skill} variants={fadeUp}>
                                        <GradientButton type="button" className="min-w-0 px-3 py-1.5 text-sm rounded-lg leading-normal font-medium">
                                            {skill}
                                        </GradientButton>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </motion.div>

                        {/* Business Tools & Platforms */}
                        <motion.div
                            {...item}
                            className="relative bg-white/80 dark:bg-slate-900/80 backdrop-blur-2xl rounded-xl p-6 shadow-lg dark:shadow-[0_8px_32px_rgba(0,0,0,0.4)] border border-slate-200/50 dark:border-white/[0.06] hover:shadow-xl transition-shadow"
                        >
                            <GlowingEffect disabled={false} spread={30} blur={0} borderWidth={1} />
                            <h5 className="font-bold text-gray-900 dark:text-white text-lg mb-4 flex items-center gap-2">
                                <div className="w-1 h-6 bg-gradient-to-b from-slate-600 to-gray-600 rounded-full" />
                                Business Tools & Platforms
                            </h5>
                            <motion.div className="flex flex-wrap gap-2" variants={stagger}>
                                {['Salesforce', 'SAP', 'Project Management', 'Process Automation'].map((skill) => (
                                    <motion.div key={skill} variants={fadeUp}>
                                        <GradientButton type="button" variant="variant" className="min-w-0 px-3 py-1.5 text-sm rounded-lg leading-normal font-medium">
                                            {skill}
                                        </GradientButton>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </motion.div>

                        {/* Languages */}
                        <motion.div
                            {...item}
                            className="relative bg-white/80 dark:bg-slate-900/80 backdrop-blur-2xl rounded-xl p-6 shadow-lg dark:shadow-[0_8px_32px_rgba(0,0,0,0.4)] border border-slate-200/50 dark:border-white/[0.06] hover:shadow-xl transition-shadow md:col-span-2"
                        >
                            <GlowingEffect disabled={false} spread={40} blur={0} borderWidth={1} />
                            <h5 className="font-bold text-gray-900 dark:text-white text-lg mb-4 flex items-center gap-2">
                                <div className="w-1 h-6 bg-gradient-to-b from-gray-600 to-slate-800 rounded-full" />
                                Languages
                            </h5>
                            <motion.div className="flex flex-wrap gap-2" variants={stagger}>
                                {['English (C2)', 'Spanish (Native)'].map((lang) => (
                                    <motion.div key={lang} variants={fadeUp}>
                                        <GradientButton type="button" variant="variant" className="min-w-0 px-3 py-1.5 text-sm rounded-lg leading-normal font-medium">
                                            {lang}
                                        </GradientButton>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </motion.section>

            </main>

            <footer className="relative border-t border-gray-200 dark:border-gray-800 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm py-8 text-center text-sm text-gray-500 dark:text-gray-400">
                <p>© {new Date().getFullYear()} Edgar Martínez. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default App;
