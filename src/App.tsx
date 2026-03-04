import { Mail, Linkedin, Briefcase, Code2, Download, User, Zap } from 'lucide-react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import CVDocument from './components/CVDocument';
import Navigation from './components/Navigation';
import { GlowingEffect } from './components/ui/glowing-effect';
import { GradientButton } from './components/ui/gradient-button';
import { Component as RotatingText } from './components/ui/rotating-text';
import { Typewriter } from './components/ui/typewriter';

function App() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-50/30 to-slate-50/30 dark:from-gray-900 dark:via-gray-900 dark:to-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300 relative overflow-x-hidden">

            {/* Navigation */}
            <Navigation />

            {/* ── Hero ── */}
            <section
                id="about"
                className="relative w-full h-screen bg-slate-950 flex flex-col items-center justify-center pt-16 pb-32"
            >
                <div className="flex flex-col items-center px-4 text-center gap-4">
                    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white">
                        Edgar Martínez
                    </h1>
                    <h2 className="text-2xl sm:text-3xl font-semibold text-blue-400">
                        <RotatingText
                            words={["Demand Planning Executive", "Data Analytics Expert", "Digital Transformation Leader"]}
                            mode="slide"
                            interval={3000}
                        />
                    </h2>
                </div>
                <div className="absolute inset-x-0 bottom-0 h-40 pointer-events-none bg-gradient-to-t from-gray-900 to-transparent" />
            </section>

            <main className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 space-y-20 pt-20">

                {/* About card */}
                <section className="scroll-mt-20">
                    <div className="relative bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl p-8 sm:p-10 shadow-xl border border-gray-200/50 dark:border-gray-700/50 overflow-hidden">
                        <GlowingEffect disabled={false} spread={60} blur={0} borderWidth={2} />
                        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-600/10 to-slate-600/10 rounded-bl-full"></div>
                        <div className="relative space-y-6">
                            <div className="flex items-center gap-3 mb-2">
                                <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                                    <User className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                                </div>
                                <h3 className="text-3xl font-bold text-gray-900 dark:text-white">About</h3>
                            </div>
                            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl leading-relaxed">
                                <Typewriter
                                    text="Demand planning professional with a strong background in data analytics and digital transformation, developing multi-year volume forecasts and scenario simulations for multiple US brands to support strategic decision-making across senior leadership."
                                    speed={18}
                                    loop={false}
                                    showCursor={false}
                                    initialDelay={400}
                                />
                            </p>
                            <div className="flex flex-wrap gap-4 pt-2">
                                <a href="mailto:adrian_0698@hotmail.com" target="_self" className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5">
                                    <Mail className="w-4 h-4" />
                                    <span className="font-medium">Email Me</span>
                                </a>
                                <PDFDownloadLink
                                    document={<CVDocument />}
                                    fileName="Edgar_Martinez_CV.pdf"
                                    className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-lg transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
                                >
                                    {({ loading }) => (
                                        <>
                                            <Download className="w-4 h-4" />
                                            <span className="font-medium">{loading ? 'Loading...' : 'Download CV'}</span>
                                        </>
                                    )}
                                </PDFDownloadLink>
                                <a href="https://www.linkedin.com/in/edgar-mart%C3%ADnez-oliva-1ba46b225/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-lg transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5">
                                    <Linkedin className="w-4 h-4" />
                                    <span>LinkedIn</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section Divider */}
                <div className="flex items-center gap-4">
                    <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent"></div>
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent"></div>
                </div>

                {/* Digital Transformation Section */}
                <section id="digital-transformation" className="scroll-mt-20">
                    <div className="relative bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl p-8 sm:p-10 shadow-xl border border-gray-200/50 dark:border-gray-700/50">
                        <GlowingEffect disabled={false} spread={40} blur={0} borderWidth={2} />
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                                <Zap className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                            </div>
                            <h3 className="text-3xl font-bold text-gray-900 dark:text-white">Digital Transformation Background</h3>
                        </div>
                        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                            <Typewriter
                                text="Driving digital transformation through data-driven insights and automation. Specialized in implementing comprehensive data solutions through Excel automations (Macros, Power Query) and Power BI dashboards. Expert in transforming business processes with automated workflows using Power Automate and Python APIs. Proven track record of leveraging AI and advanced analytics to optimize business operations, streamline workflows, and deliver measurable results across marketing and operations."
                                speed={14}
                                loop={false}
                                showCursor={false}
                            />
                        </p>
                    </div>
                </section>

                {/* Section Divider */}
                <div className="flex items-center gap-4">
                    <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent"></div>
                    <div className="w-2 h-2 bg-slate-500 rounded-full"></div>
                    <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent"></div>
                </div>

                {/* Experience Section */}
                <section id="experience" className="scroll-mt-20 space-y-8">
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                            <Briefcase className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                        </div>
                        <h3 className="text-3xl font-bold text-gray-900 dark:text-white">Experience</h3>
                    </div>

                    <div className="space-y-6">
                        {/* Job 1 */}
                        <div className="relative bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-xl p-6 sm:p-8 shadow-lg border-l-4 border-blue-500 hover:shadow-xl transition-all">
                            <GlowingEffect disabled={false} spread={30} blur={0} borderWidth={1} />
                            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-3">
                                <h4 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">British American Tobacco | Accenture</h4>
                                <span className="text-sm font-semibold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 px-3 py-1 rounded-full mt-2 sm:mt-0">February 2026 - Current</span>
                            </div>
                            <div className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-4 italic">Demand Planning Executive</div>
                            <ul className="space-y-3 text-gray-600 dark:text-gray-400">
                                <li className="flex items-center gap-3">
                                    <span className="text-blue-500 flex-shrink-0">▪</span>
                                    <span><Typewriter text="Develop and manage demand forecasts for multiple US brands, providing insights on product volume behavior from the current year and up to 5 years ahead." speed={20} loop={false} showCursor={false} /></span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="text-blue-500 flex-shrink-0">▪</span>
                                    <span><Typewriter text="Deliver scenario simulation analyses and strategic insights to Sr Directors across multiple areas and markets to support long-term business planning." speed={20} loop={false} showCursor={false} /></span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="text-blue-500 flex-shrink-0">▪</span>
                                    <span><Typewriter text="Collaborate cross-functionally to align volume projections with commercial strategy and market dynamics." speed={20} loop={false} showCursor={false} /></span>
                                </li>
                            </ul>
                        </div>

                        {/* Job 2 */}
                        <div className="relative bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-xl p-6 sm:p-8 shadow-lg border-l-4 border-blue-500 hover:shadow-xl transition-all">
                            <GlowingEffect disabled={false} spread={30} blur={0} borderWidth={1} />
                            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-3">
                                <h4 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">British American Tobacco | Accenture Acquisition</h4>
                                <span className="text-sm font-semibold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 px-3 py-1 rounded-full mt-2 sm:mt-0">February 2025 - February 2026</span>
                            </div>
                            <div className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-4 italic">Marketing Materials Project Manager</div>
                            <ul className="space-y-3 text-gray-600 dark:text-gray-400">
                                <li className="flex items-center gap-3">
                                    <span className="text-blue-500 flex-shrink-0">▪</span>
                                    <span><Typewriter text="Responsible for the execution of POS marketing materials for the operations field with over 300K stores in North America." speed={20} loop={false} showCursor={false} /></span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="text-blue-500 flex-shrink-0">▪</span>
                                    <span><Typewriter text="Developed Power BI dashboards integrating Salesforce data to track field activity and material performance, delivering actionable insights for key stakeholders." speed={20} loop={false} showCursor={false} /></span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="text-blue-500 flex-shrink-0">▪</span>
                                    <span><Typewriter text="Successfully managed over 20 POS campaigns with an average project value of $250,000 US dollars." speed={20} loop={false} showCursor={false} /></span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="text-blue-500 flex-shrink-0">▪</span>
                                    <span><Typewriter text="Coordinating cross-functional teams with 6 different stakeholders." speed={20} loop={false} showCursor={false} /></span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="text-blue-500 flex-shrink-0">▪</span>
                                    <span><Typewriter text="Managed timelines, asset approvals, and vendor deliverables while maintaining quality standards." speed={20} loop={false} showCursor={false} /></span>
                                </li>
                            </ul>
                        </div>

                        {/* Job 3 */}
                        <div className="relative bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-xl p-6 sm:p-8 shadow-lg border-l-4 border-slate-500 hover:shadow-xl transition-all">
                            <GlowingEffect disabled={false} spread={30} blur={0} borderWidth={1} />
                            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-3">
                                <h4 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">British American Tobacco</h4>
                                <span className="text-sm font-semibold text-slate-600 dark:text-slate-400 bg-slate-50 dark:bg-slate-900/20 px-3 py-1 rounded-full mt-2 sm:mt-0">October 2023 - January 2025</span>
                            </div>
                            <div className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-4 italic">Trade Marketing Operations Analyst</div>
                            <ul className="space-y-3 text-gray-600 dark:text-gray-400">
                                <li className="flex items-center gap-3">
                                    <span className="text-slate-500 flex-shrink-0">▪</span>
                                    <span><Typewriter text="Work Alongside the Operations Field to Support Regional and Strategic Accounts in the US." speed={20} loop={false} showCursor={false} /></span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="text-slate-500 flex-shrink-0">▪</span>
                                    <span><Typewriter text="Improve Internal and External Business Operation Performance." speed={20} loop={false} showCursor={false} /></span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="text-slate-500 flex-shrink-0">▪</span>
                                    <span><Typewriter text="Data Analysis and Insights using Power BI and Power Query." speed={20} loop={false} showCursor={false} /></span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="text-slate-500 flex-shrink-0">▪</span>
                                    <span><Typewriter text="Execution of Mass Material Orders for the field." speed={20} loop={false} showCursor={false} /></span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="text-slate-500 flex-shrink-0">▪</span>
                                    <span><Typewriter text="Warehouse Account Management." speed={20} loop={false} showCursor={false} /></span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Section Divider */}
                <div className="flex items-center gap-4">
                    <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent"></div>
                    <div className="w-2 h-2 bg-slate-500 rounded-full"></div>
                    <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent"></div>
                </div>

                {/* Skills Section */}
                <section id="skills" className="scroll-mt-20 space-y-8">
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                            <Code2 className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                        </div>
                        <h3 className="text-3xl font-bold text-gray-900 dark:text-white">Skills</h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Digital Transformation & Data Analytics */}
                        <div className="relative bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-200/50 dark:border-gray-700/50 hover:shadow-xl transition-all">
                            <GlowingEffect disabled={false} spread={30} blur={0} borderWidth={1} />
                            <h5 className="font-bold text-gray-900 dark:text-white text-lg mb-4 flex items-center gap-2">
                                <div className="w-1 h-6 bg-gradient-to-b from-blue-700 to-slate-700 rounded-full"></div>
                                Digital Transformation & Data Analytics
                            </h5>
                            <div className="flex flex-wrap gap-2">
                                {["Artificial Intelligence (AI)", "Python", "Power BI", "Power Query", "SQL", "Data Analysis", "Excel Automation"].map((skill) => (
                                    <GradientButton key={skill} type="button" className="min-w-0 px-3 py-1.5 text-sm rounded-lg leading-normal font-medium">
                                        {skill}
                                    </GradientButton>
                                ))}
                            </div>
                        </div>

                        {/* Business Tools & Platforms */}
                        <div className="relative bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-200/50 dark:border-gray-700/50 hover:shadow-xl transition-all">
                            <GlowingEffect disabled={false} spread={30} blur={0} borderWidth={1} />
                            <h5 className="font-bold text-gray-900 dark:text-white text-lg mb-4 flex items-center gap-2">
                                <div className="w-1 h-6 bg-gradient-to-b from-slate-600 to-gray-600 rounded-full"></div>
                                Business Tools & Platforms
                            </h5>
                            <div className="flex flex-wrap gap-2">
                                {["Salesforce", "SAP", "Project Management", "Process Automation"].map((skill) => (
                                    <GradientButton key={skill} type="button" variant="variant" className="min-w-0 px-3 py-1.5 text-sm rounded-lg leading-normal font-medium">
                                        {skill}
                                    </GradientButton>
                                ))}
                            </div>
                        </div>

                        {/* Languages */}
                        <div className="relative bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-200/50 dark:border-gray-700/50 hover:shadow-xl transition-all md:col-span-2">
                            <GlowingEffect disabled={false} spread={40} blur={0} borderWidth={1} />
                            <h5 className="font-bold text-gray-900 dark:text-white text-lg mb-4 flex items-center gap-2">
                                <div className="w-1 h-6 bg-gradient-to-b from-gray-600 to-slate-800 rounded-full"></div>
                                Languages
                            </h5>
                            <div className="flex flex-wrap gap-2">
                                {["English (C2)", "Spanish (Native)"].map((lang) => (
                                    <GradientButton key={lang} type="button" variant="variant" className="min-w-0 px-3 py-1.5 text-sm rounded-lg leading-normal font-medium">
                                        {lang}
                                    </GradientButton>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

            </main>

            <footer className="relative border-t border-gray-200 dark:border-gray-800 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm py-8 text-center text-sm text-gray-500 dark:text-gray-400">
                <p>© {new Date().getFullYear()} Edgar Martínez. All rights reserved.</p>
            </footer>
        </div>
    )
}

export default App
