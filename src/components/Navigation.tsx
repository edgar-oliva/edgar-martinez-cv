import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeToggle from './ThemeToggle';

const navItems = [
    { id: 'about', label: 'About' },
    { id: 'digital-transformation', label: 'Digital Transformation' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
];

const Navigation = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('about');
    const [scrollProgress, setScrollProgress] = useState(0);

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            const offset = 80;
            const offsetPosition = element.getBoundingClientRect().top + window.pageYOffset - offset;
            window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
        }
        setIsMenuOpen(false);
    };

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            setScrollProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);

            if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 50) {
                setActiveSection(navItems[navItems.length - 1].id);
                return;
            }
            const scrollPosition = scrollTop + 150;
            for (let i = navItems.length - 1; i >= 0; i--) {
                const section = document.getElementById(navItems[i].id);
                if (section) {
                    const sectionTop = section.getBoundingClientRect().top + window.scrollY;
                    if (sectionTop <= scrollPosition) {
                        setActiveSection(navItems[i].id);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        // Slide down on mount
        <motion.header
            className="fixed w-full top-0 z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 shadow-sm"
            initial={{ y: -64, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 }}
        >
            {/* Scroll progress bar */}
            <div
                className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-600 to-blue-400 pointer-events-none"
                style={{ width: `${scrollProgress}%`, transition: 'width 0.1s linear' }}
            />

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">

                    {/* Monogram + Name */}
                    <button
                        onClick={() => scrollToSection('about')}
                        className="flex items-center gap-2.5 group cursor-pointer"
                    >
                        {/* EM monogram badge */}
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-slate-700 flex items-center justify-center flex-shrink-0 shadow-sm group-hover:shadow-blue-500/30 group-hover:shadow-md transition-shadow duration-200">
                            <span className="text-white text-xs font-bold tracking-tight leading-none">EM</span>
                        </div>
                        <span className="text-base font-bold tracking-tight bg-gradient-to-r from-blue-700 to-slate-700 dark:from-blue-500 dark:to-slate-400 bg-clip-text text-transparent group-hover:from-blue-600 group-hover:to-slate-600 transition-all duration-200">
                            Edgar Martínez
                        </span>
                    </button>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-1">
                        {navItems.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => scrollToSection(item.id)}
                                className="relative px-4 py-2 rounded-lg text-sm font-medium cursor-pointer transition-colors duration-150 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                            >
                                {/* Shared sliding active pill */}
                                {activeSection === item.id && (
                                    <motion.span
                                        layoutId="nav-active-pill"
                                        className="absolute inset-0 rounded-lg bg-blue-100 dark:bg-blue-900/40"
                                        transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                                    />
                                )}
                                <span className={`relative z-10 transition-colors duration-150 ${
                                    activeSection === item.id
                                        ? 'text-blue-600 dark:text-blue-400'
                                        : ''
                                }`}>
                                    {item.label}
                                </span>
                            </button>
                        ))}
                        <div className="ml-4">
                            <ThemeToggle />
                        </div>
                    </nav>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center gap-2">
                        <ThemeToggle />
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors cursor-pointer"
                            aria-label="Toggle menu"
                        >
                            <AnimatePresence mode="wait" initial={false}>
                                {isMenuOpen ? (
                                    <motion.span
                                        key="close"
                                        initial={{ rotate: -90, opacity: 0 }}
                                        animate={{ rotate: 0, opacity: 1 }}
                                        exit={{ rotate: 90, opacity: 0 }}
                                        transition={{ duration: 0.15 }}
                                        className="block"
                                    >
                                        <X className="w-6 h-6" />
                                    </motion.span>
                                ) : (
                                    <motion.span
                                        key="menu"
                                        initial={{ rotate: 90, opacity: 0 }}
                                        animate={{ rotate: 0, opacity: 1 }}
                                        exit={{ rotate: -90, opacity: 0 }}
                                        transition={{ duration: 0.15 }}
                                        className="block"
                                    >
                                        <Menu className="w-6 h-6" />
                                    </motion.span>
                                )}
                            </AnimatePresence>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        key="mobile-menu"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.22, ease: 'easeOut' }}
                        className="md:hidden overflow-hidden"
                    >
                        <div
                            className="fixed inset-0 top-16 bg-black/40 backdrop-blur-sm z-[-1]"
                            onClick={() => setIsMenuOpen(false)}
                        />
                        <nav className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 shadow-lg">
                            <div className="px-4 py-4 space-y-1">
                                {navItems.map((item, i) => (
                                    <motion.button
                                        key={item.id}
                                        initial={{ opacity: 0, x: -12 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.05, duration: 0.2 }}
                                        onClick={() => scrollToSection(item.id)}
                                        className={`w-full text-left px-4 py-3 rounded-lg text-base font-medium transition-colors cursor-pointer ${
                                            activeSection === item.id
                                                ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400'
                                                : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                                        }`}
                                    >
                                        {item.label}
                                    </motion.button>
                                ))}
                            </div>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
};

export default Navigation;
