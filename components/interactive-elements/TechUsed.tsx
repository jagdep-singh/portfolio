import React, { useEffect, useState } from 'react';

interface TechUsedProps {
  tech: string[];
  direction?: 'row' | 'column';
  color?: string; 
}

const techIconsSimple: Record<string, string> = {
  'Next.js':      'https://cdn.simpleicons.org/nextdotjs',
  'React':        'https://cdn.simpleicons.org/react',
  'Node.js':      'https://cdn.simpleicons.org/nodedotjs',
  'TypeScript':   'https://cdn.simpleicons.org/typescript',
  'JavaScript':   'https://cdn.simpleicons.org/javascript',
  'HTML':         'https://cdn.simpleicons.org/html5',
  'CSS':          'https://cdn.simpleicons.org/css3',
  'Express':      'https://cdn.simpleicons.org/express',
  'MongoDB':      'https://cdn.simpleicons.org/mongodb',
  'PostgreSQL':   'https://cdn.simpleicons.org/postgresql',
  'Socket.io':    'https://cdn.simpleicons.org/socketdotio',
  'CodeMirror':   'https://cdn.simpleicons.org/codemirror',
  'WebRTC':       'https://cdn.simpleicons.org/webrtc',
  'GitHub':       'https://cdn.simpleicons.org/github',
  'Vercel':       'https://cdn.simpleicons.org/vercel',
  'Tailwind CSS': 'https://cdn.simpleicons.org/tailwindcss',
  'Clerk':        'https://cdn.simpleicons.org/clerk',
  'LangChain': 'https://cdn.simpleicons.org/LangChain',
  'Pinecone':  '',
  'Prisma':    'https://cdn.simpleicons.org/prisma',
  'OpenAI': 'https://cdn.simpleicons.org/openai',
  'tRPC':   'https://cdn.simpleicons.org/trpc',
};



const TechUsed: React.FC<TechUsedProps> = ({
  tech,
  direction = 'row',
  color,
}) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (color) return; 
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = () => setIsDarkMode(mediaQuery.matches);
    handleChange(); 
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [color]);

  const iconColor = color ? color.replace('#', '') : isDarkMode ? 'fffdf1' : '221515';

  return (
    <div
      className={`tech-used-wrapper ${direction}`}
      style={{ flexDirection: direction }}
    >
      {tech.map((name) => {
        const baseUrl = techIconsSimple[name];
        const logoUrl = baseUrl ? `${baseUrl}/${iconColor}` : '';

        return (
          <div
            className="tech-logo-only"
            key={name}
            style={{ margin: '0.001rem', textAlign: 'center' }}
          >
            {logoUrl ? (
              <img
                src={logoUrl}
                alt={`${name} logo`}
                className="tech-used-logo"
              />
            ) : (
              <span>{name}</span>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default TechUsed;
