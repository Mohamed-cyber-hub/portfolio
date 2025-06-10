import { useState, useEffect, useMemo } from 'react';
import { Github, Linkedin, Instagram, Facebook } from 'lucide-react';
import banner from '../../assets/images/banner.png'

const SimplifiedBanner = () => {
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [currentText, setCurrentText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [showCursor, setShowCursor] = useState(true);
    const [isLoaded, setIsLoaded] = useState(false);
    
    const words = useMemo(() => [
        "Professional Coder.",
        "Front End Developer.",
        "SEO Specialist.",
        "UI/UX Designer.",
        "Problem Solver."
    ], []);

    // Typewriter effect
    useEffect(() => {
        const typeSpeed = isDeleting ? 50 : 100;
        const currentWord = words[currentWordIndex];
        
        const timer = setTimeout(() => {
            if (!isDeleting) {
                if (currentText.length < currentWord.length) {
                    setCurrentText(currentWord.slice(0, currentText.length + 1));
                } else {
                    setTimeout(() => setIsDeleting(true), 2000);
                }
            } else {
                if (currentText.length > 0) {
                    setCurrentText(currentText.slice(0, -1));
                } else {
                    setIsDeleting(false);
                    setCurrentWordIndex((prev) => (prev + 1) % words.length);
                }
            }
        }, typeSpeed);
        
        return () => clearTimeout(timer);
    }, [currentText, isDeleting, currentWordIndex, words]);

    // Cursor blinking
    useEffect(() => {
        const cursorTimer = setInterval(() => {
            setShowCursor(prev => !prev);
        }, 530);
        return () => clearInterval(cursorTimer);
    }, []);

    // Load animation - trigger after component mounts
    useEffect(() => {
        const timer = setTimeout(() => setIsLoaded(true), 100);
        return () => clearTimeout(timer);
    }, []);

    const socialLinks = [
        {
            href: "https://www.linkedin.com/in/mohamed-saad-eldeen-641507243/",
            icon: Linkedin,
            name: "LinkedIn",
            color: "#0077B5"
        },
        {
            href: "https://www.instagram.com/mohamed_saad_eldeen22/",
            icon: Instagram,
            name: "Instagram", 
            color: "#E1306C"
        },
        {
            href: "https://www.facebook.com/holako.holako.18/",
            icon: Facebook,
            name: "Facebook",
            color: "#1877F2"
        },
        {
            href: "https://github.com/Mohamed-cyber-hub",
            icon: Github,
            name: "GitHub",
            color: "#333"
        }
    ];

    const skills = [
        { name: "React", color: "#61DAFB" },
        { name: "Next.js", color: "#000000" },
        { name: "Tailwind", color: "#06B6D4" },
        { name: "HTML5", color: "#E34F26" },
        { name: "CSS3", color: "#1572B6" },
        { name: "JavaScript", color: "#F7DF1E" },
        { name: "Git", color: "#F05032" },
        { name: "SEO", color: "#4285F4" }
    ];

    return (
        <div className="min-h-screen flex flex-col lg:flex-row overflow-hidden" style={{ backgroundColor: '#212428' }}>
            {/* Left Section - Slides in from left */}
            <div className={`flex-1 p-8 lg:p-16 flex flex-col justify-center transition-all duration-1000 ease-out ${
                isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
            }`}>
                <div className="max-w-2xl">
                    {/* Welcome text */}
                    <div className="flex items-center gap-3 mb-6">
                        <div className="h-px w-12" style={{ background: 'linear-gradient(to right, #5B9A8B, transparent)' }} />
                        <span className="text-sm font-medium tracking-widest uppercase" style={{ color: '#c4cfde' }}>
                            Welcome to my world
                        </span>
                    </div>
                    
                    {/* Main heading */}
                    <h1 className="text-5xl lg:text-6xl font-bold mb-4" style={{ color: 'white' }}>
                        Hi, I'm{' '}
                        <span style={{ color: '#5B9A8B' }}>
                            Mohamed Saad
                        </span>
                    </h1>
                    
                    {/* Typewriter effect */}
                    <div className="text-3xl lg:text-4xl font-bold mb-8 min-h-[3rem] flex items-center" style={{ color: 'white' }}>
                        a{' '}
                        <span className="ml-2" style={{ color: '#5B9A8B' }}>
                            {currentText}
                            <span className={`${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity duration-100`}>
                                |
                            </span>
                        </span>
                    </div>
                    
                    {/* Description */}
                    <p className="text-lg leading-relaxed mb-12 max-w-xl" style={{ color: '#c4cfde' }}>
                        As a <span className="font-medium" style={{ color: '#5B9A8B' }}>Front-End Developer</span> and{' '}
                        <span className="font-medium" style={{ color: '#5B9A8B' }}>SEO Specialist</span>, I craft beautiful, 
                        user-centric web experiences while optimizing for search engine visibility. 
                        I blend creativity with technical expertise to build responsive, 
                        high-performance websites.
                    </p>

                    {/* Social Links and Tech Stack */}
                    <div className="flex flex-col xl:flex-row gap-12">
                        {/* Social Links */}
                        <div>
                            <h3 className="text-sm uppercase font-semibold mb-4 tracking-wider" style={{ color: '#c4cfde' }}>
                                Connect with me
                            </h3>
                            <div className="flex gap-4">
                                {socialLinks.map((social, index) => {
                                    const IconComponent = social.icon;
                                    return (
                                        <a
                                            key={index}
                                            href={social.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-10 h-10 border rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                                            style={{ 
                                                background: 'linear-gradient(145deg, #1e2024, #23272b)',
                                                borderColor: 'rgba(196, 207, 222, 0.1)',
                                                boxShadow: '10px 10px 19px #1c1e22, -10px -10px 19px #262a2e'
                                            }}
                                            onMouseEnter={(e) => {
                                                const currentTarget = e.currentTarget;
                                                currentTarget.style.borderColor = '#5B9A8B';
                                            }}
                                            onMouseLeave={(e) => {
                                                const currentTarget = e.currentTarget;
                                                currentTarget.style.borderColor = 'rgba(196, 207, 222, 0.1)';
                                            }}
                                            aria-label={social.name}
                                        >
                                            <IconComponent 
                                                size={18} 
                                                className="transition-colors duration-300"
                                                style={{ color: '#c4cfde' }}
                                            />
                                        </a>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Tech Stack */}
                        <div>
                            <h3 className="text-sm uppercase font-semibold mb-4 tracking-wider" style={{ color: '#c4cfde' }}>
                                Tech Stack
                            </h3>
                            <div className="flex gap-3 flex-wrap">
                                {skills.map((skill, index) => (
                                    <div
                                        key={index}
                                        className="px-3 py-2 border rounded-lg text-sm font-medium transition-all duration-300 cursor-pointer hover:scale-105"
                                        style={{ 
                                            background: 'linear-gradient(145deg, #1e2024, #23272b)',
                                            borderColor: 'rgba(196, 207, 222, 0.1)',
                                            boxShadow: '10px 10px 19px #1c1e22, -10px -10px 19px #262a2e',
                                            color: '#c4cfde'
                                        }}
                                        onMouseEnter={(e) => {
                                            const currentTarget = e.currentTarget;
                                            currentTarget.style.borderColor = '#5B9A8B';
                                            currentTarget.style.color = '#5B9A8B';
                                        }}
                                        onMouseLeave={(e) => {
                                            const currentTarget = e.currentTarget;
                                            currentTarget.style.borderColor = 'rgba(196, 207, 222, 0.1)';
                                            currentTarget.style.color = '#c4cfde';
                                        }}
                                    >
                                        {skill.name}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Section - Image - Slides in from right */}
            <div className={`flex-1 flex items-center justify-center p-8 transition-all duration-1000 ease-out ${
                isLoaded ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
            }`}>
                <div className="relative">
                    {/* Main image container */}
                    <div className="relative w-80 h-96 lg:w-96 lg:h-[500px] rounded-2xl overflow-hidden border-2 group"
                        style={{ borderColor: '#5B9A8B' }}>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10" />
                        
                        {/* Placeholder for your image */}
                        <div className="w-full h-full flex items-center justify-center"
                            style={{ background: 'linear-gradient(145deg, #1e2024, #23272b)' }}>
                            {/* Since we don't have access to the actual image, I'll create a placeholder */}
                            <div className="w-full h-full flex items-center justify-center text-6xl font-bold"
                                style={{ color: '#5B9A8B' }}>
                                <img src={banner} />
                            </div>
                        </div>
                        
                        {/* Hover overlay */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20"
                            style={{ backgroundColor: 'rgba(91, 154, 139, 0.1)' }} />
                    </div>

                    {/* Decorative elements */}
                    <div className="absolute -top-4 -right-4 w-8 h-8 border-t-2 border-r-2 rounded-tr-lg" 
                        style={{ borderColor: '#5B9A8B' }} />
                    <div className="absolute -bottom-4 -left-4 w-8 h-8 border-b-2 border-l-2 rounded-bl-lg" 
                        style={{ borderColor: '#5B9A8B' }} />
                    
                    {/* Professional badge */}
                    <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 px-4 py-2 border rounded-lg"
                        style={{ 
                            background: 'linear-gradient(145deg, #1e2024, #23272b)',
                            borderColor: '#5B9A8B',
                            boxShadow: '10px 10px 19px #1c1e22, -10px -10px 19px #262a2e'
                        }}>
                        <div className="text-sm font-medium flex items-center gap-2" style={{ color: '#5B9A8B' }}>
                            <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: '#5B9A8B' }} />
                            Professional Developer
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SimplifiedBanner;