import { Mail, Linkedin, Briefcase, Code2, Sparkles } from 'lucide-react';
import Navigation from './components/Navigation';

function App() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-50/30 to-slate-50/30 dark:from-gray-900 dark:via-gray-900 dark:to-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300 relative overflow-x-hidden">
            {/* Decorative Background Shapes */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-20 right-10 w-72 h-72 bg-blue-200/20 dark:bg-blue-500/5 rounded-full blur-3xl"></div>
                <div className="absolute top-96 left-10 w-96 h-96 bg-slate-200/20 dark:bg-slate-500/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-gray-200/20 dark:bg-gray-500/5 rounded-full blur-3xl"></div>

                {/* Geometric Shapes */}
                <div className="absolute top-40 left-20 w-16 h-16 border-2 border-blue-300/30 dark:border-blue-500/20 rotate-12"></div>
                <div className="absolute top-1/3 right-32 w-12 h-12 border-2 border-slate-300/30 dark:border-slate-500/20 rotate-45"></div>
                <div className="absolute bottom-1/4 left-1/3 w-20 h-20 border-2 border-gray-300/30 dark:border-gray-500/20 -rotate-12"></div>
            </div>

            {/* Navigation */}
            <Navigation />

            <main className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 space-y-20">

                {/* Hero/About Section */}
                <section id="about" className="scroll-mt-20">
                    <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl p-8 sm:p-10 shadow-xl border border-gray-200/50 dark:border-gray-700/50 relative overflow-hidden">
                        {/* Decorative corner accent */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-600/10 to-slate-600/10 rounded-bl-full"></div>

                        <div className="relative space-y-6">
                            <div className="inline-block">
                                <div className="flex items-center gap-2 text-sm font-semibold text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/30 px-4 py-2 rounded-full">
                                    <Briefcase className="w-4 h-4" />
                                    <span>Available for Opportunities</span>
                                </div>
                            </div>

                            <div className="space-y-3">
                                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight bg-gradient-to-r from-gray-900 via-slate-800 to-gray-900 dark:from-white dark:via-slate-200 dark:to-gray-200 bg-clip-text text-transparent pb-1">
                                    Marketing Materials Project Manager
                                </h2>
                                <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl leading-relaxed">
                                    Project manager with a strong background in digital transformation and data solutions, managing end-to-end production of POS marketing materials across digital and print channels for North America.
                                </p>
                            </div>

                            <div className="flex flex-wrap gap-4 pt-4">
                                <a href="mailto:adrian_0698@hotmail.com" target="_self" className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5">
                                    <Mail className="w-4 h-4" />
                                    <span className="font-medium">Email Me</span>
                                </a>
                                <a href="https://www.linkedin.com/in/edgar-mart%C3%ADnez-oliva-1ba46b225/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-lg transition-colors">
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
                    <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl p-8 sm:p-10 shadow-xl border border-gray-200/50 dark:border-gray-700/50">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-2 bg-gradient-to-br from-blue-700 to-slate-700 rounded-lg">
                                <Sparkles className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="text-3xl font-bold text-gray-900 dark:text-white">Digital Transformation Background</h3>
                        </div>
                        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                            Driving digital transformation through data-driven insights and automation. Specialized in implementing comprehensive data solutions through <strong className="text-gray-900 dark:text-white">Excel automations (Macros, Power Query)</strong> and <strong className="text-gray-900 dark:text-white">Power BI</strong> dashboards. Expert in transforming business processes with <strong className="text-gray-900 dark:text-white">automated workflows using Power Automate</strong> and <strong className="text-gray-900 dark:text-white">Python APIs</strong>. Proven track record of leveraging AI and advanced analytics to optimize business operations, streamline workflows, and deliver measurable results across marketing and operations.
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
                        <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-xl p-6 sm:p-8 shadow-lg border-l-4 border-blue-500 hover:shadow-xl transition-all">
                            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-3">
                                <h4 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">British American Tobacco | Accenture Acquisition</h4>
                                <span className="text-sm font-semibold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 px-3 py-1 rounded-full mt-2 sm:mt-0">February 2025 - Current</span>
                            </div>
                            <div className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-4 italic">Marketing Materials Project Manager</div>
                            <ul className="space-y-3 text-gray-600 dark:text-gray-400">
                                <li className="flex items-center gap-3">
                                    <span className="text-blue-500 flex-shrink-0">▪</span>
                                    <span>Responsible for the execution of POS marketing materials for the operations field with over 300K stores in North America.</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="text-blue-500 flex-shrink-0">▪</span>
                                    <span>Developed Power BI dashboards integrating Salesforce data to track field activity and material performance, delivering actionable insights for key stakeholders.</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="text-blue-500 flex-shrink-0">▪</span>
                                    <span>Successfully managed over 20 POS campaigns with an average project value of $250,000 US dollars.</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="text-blue-500 flex-shrink-0">▪</span>
                                    <span>Coordinating cross-functional teams with 6 different stakeholders.</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="text-blue-500 flex-shrink-0">▪</span>
                                    <span>Managed timelines, asset approvals, and vendor deliverables while maintaining quality standards.</span>
                                </li>
                            </ul>
                        </div>

                        {/* Job 2 */}
                        <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-xl p-6 sm:p-8 shadow-lg border-l-4 border-slate-500 hover:shadow-xl transition-all">
                            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-3">
                                <h4 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">British American Tobacco</h4>
                                <span className="text-sm font-semibold text-slate-600 dark:text-slate-400 bg-slate-50 dark:bg-slate-900/20 px-3 py-1 rounded-full mt-2 sm:mt-0">October 2023 - January 2025</span>
                            </div>
                            <div className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-4 italic">Trade Marketing Operations Analyst</div>
                            <ul className="space-y-3 text-gray-600 dark:text-gray-400">
                                <li className="flex items-center gap-3">
                                    <span className="text-slate-500 flex-shrink-0">▪</span>
                                    <span>Work Alongside the Operations Field to Support Regional and Strategic Accounts in the US.</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="text-slate-500 flex-shrink-0">▪</span>
                                    <span>Improve Internal and External Business Operation Performance.</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="text-slate-500 flex-shrink-0">▪</span>
                                    <span>Data Analysis and Insights using Power BI and Power Query.</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="text-slate-500 flex-shrink-0">▪</span>
                                    <span>Execution of Mass Material Orders for the field.</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="text-slate-500 flex-shrink-0">▪</span>
                                    <span>Warehouse Account Management.</span>
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
                        <div className="p-2 bg-slate-100 dark:bg-slate-900/30 rounded-lg">
                            <Code2 className="w-6 h-6 text-slate-600 dark:text-slate-400" />
                        </div>
                        <h3 className="text-3xl font-bold text-gray-900 dark:text-white">Skills</h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-200/50 dark:border-gray-700/50 hover:shadow-xl transition-all">
                            <h5 className="font-bold text-gray-900 dark:text-white text-lg mb-4 flex items-center gap-2">
                                <div className="w-1 h-6 bg-gradient-to-b from-blue-700 to-slate-700 rounded-full"></div>
                                Digital Transformation & Data Analytics
                            </h5>
                            <div className="flex flex-wrap gap-2">
                                <span className="px-4 py-2 bg-gradient-to-r from-blue-700 to-slate-700 text-white rounded-lg text-sm font-medium shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all">Artificial Intelligence (AI)</span>
                                <span className="px-4 py-2 bg-gradient-to-r from-blue-700 to-slate-700 text-white rounded-lg text-sm font-medium shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all">Python</span>
                                <span className="px-4 py-2 bg-gradient-to-r from-blue-700 to-slate-700 text-white rounded-lg text-sm font-medium shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all">Power BI</span>
                                <span className="px-4 py-2 bg-gradient-to-r from-blue-700 to-slate-700 text-white rounded-lg text-sm font-medium shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all">Power Query</span>
                                <span className="px-3 py-2 bg-gray-100 dark:bg-gray-700 rounded-lg text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">SQL</span>
                                <span className="px-3 py-2 bg-gray-100 dark:bg-gray-700 rounded-lg text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">Data Analysis</span>
                                <span className="px-3 py-2 bg-gray-100 dark:bg-gray-700 rounded-lg text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">Excel Automation</span>
                            </div>
                        </div>

                        <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-200/50 dark:border-gray-700/50 hover:shadow-xl transition-all">
                            <h5 className="font-bold text-gray-900 dark:text-white text-lg mb-4 flex items-center gap-2">
                                <div className="w-1 h-6 bg-gradient-to-b from-slate-600 to-gray-600 rounded-full"></div>
                                Business Tools & Platforms
                            </h5>
                            <div className="flex flex-wrap gap-2">
                                <span className="px-4 py-2 bg-gradient-to-r from-slate-600 to-gray-600 text-white rounded-lg text-sm font-medium shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all">Salesforce</span>
                                <span className="px-4 py-2 bg-gradient-to-r from-slate-600 to-gray-600 text-white rounded-lg text-sm font-medium shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all">SAP</span>
                                <span className="px-3 py-2 bg-gray-100 dark:bg-gray-700 rounded-lg text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">Project Management</span>
                                <span className="px-3 py-2 bg-gray-100 dark:bg-gray-700 rounded-lg text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">Process Automation</span>
                            </div>
                        </div>

                        <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-200/50 dark:border-gray-700/50 hover:shadow-xl transition-all md:col-span-2">
                            <h5 className="font-bold text-gray-900 dark:text-white text-lg mb-4 flex items-center gap-2">
                                <div className="w-1 h-6 bg-gradient-to-b from-gray-600 to-slate-800 rounded-full"></div>
                                Languages
                            </h5>
                            <div className="flex flex-wrap gap-2">
                                <span className="px-4 py-2 bg-gradient-to-r from-gray-600 to-slate-700 text-white rounded-lg text-sm font-medium shadow-md">English (C2)</span>
                                <span className="px-4 py-2 bg-gradient-to-r from-slate-700 to-gray-800 text-white rounded-lg text-sm font-medium shadow-md">Spanish (Native)</span>
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
