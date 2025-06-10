import React, { useState } from 'react';

const ContactMe = ({ 
  email = 'mohamedsaadeldeen35@gmail.com',
  title = 'Get In Touch',
  subtitle = "Have a project in mind or just want to say hello? I'd love to hear from you and discuss how we can work together.",
  buttonText = 'Send Me an Email',
  footerText = "I typically respond within 24 hours.\nLooking forward to connecting with you!",
  subject = 'Hello from your website',
  bodyTemplate = `Hi,

I found your website and would like to get in touch.

Best regards,`,
  className = ''
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const colors = {
    bodyColor: '#212428',
    lightText: '#c4cfde',
    boxBg: 'linear-gradient(145deg, #1e2024, #23272b)',
    designColor: '#5B9A8B',
  };

  const shadowOne = '10px 10px 19px #1c1e22, -10px -10px 19px #262a2e';

  const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyTemplate)}`;

  return (
    <div 
      className={`min-h-screen flex items-center justify-center p-5 ${className}`}
      style={{ backgroundColor: colors.bodyColor }}
    >
      <div 
        className="rounded-3xl p-10 text-center max-w-lg w-full transition-all duration-300 hover:scale-105"
        style={{ 
          background: colors.boxBg,
          boxShadow: shadowOne,
          color: colors.lightText
        }}
      >
        <h1 
          className="text-4xl md:text-5xl font-bold mb-3"
          style={{ 
            color: colors.designColor,
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)'
          }}
        >
          {title}
        </h1>
        
        <p className="text-lg mb-8 opacity-80 leading-relaxed">
          {subtitle}
        </p>
        
        <a
          href={mailtoUrl}
          className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-semibold text-lg border-2 transition-all duration-300 relative overflow-hidden group"
          style={{
            background: colors.boxBg,
            color: isHovered ? colors.designColor : colors.lightText,
            borderColor: colors.designColor,
            boxShadow: isHovered 
              ? `inset 3px 3px 8px #1c1e22, inset -3px -3px 8px #262a2e, 0 5px 25px rgba(91, 154, 139, 0.2)`
              : `inset 5px 5px 10px #1c1e22, inset -5px -5px 10px #262a2e, 0 0 20px rgba(91, 154, 139, 0.1)`,
            transform: isHovered ? 'translateY(-2px)' : 'translateY(0)',
            textDecoration: 'none'
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Shimmer effect */}
          <div 
            className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent"
          />
          
          <svg 
            className="w-6 h-6 transition-transform duration-300" 
            viewBox="0 0 24 24" 
            fill="currentColor"
            style={{ transform: isHovered ? 'scale(1.1)' : 'scale(1)' }}
          >
            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
          </svg>
          {buttonText}
        </a>
        
        <div 
          className="mt-8 pt-5 border-t opacity-70"
          style={{ borderColor: `${colors.designColor}33` }}
        >
          <p className="text-sm leading-relaxed whitespace-pre-line">
            {footerText}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;