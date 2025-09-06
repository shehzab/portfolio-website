import React from 'react';
import { ArrowUpRight, Github, ExternalLink } from "lucide-react";
import { Stagger, Item } from './motion/Stagger.jsx';

const projects = [
  {
    title:'NeoDesk E‑Commerce Platform',
    description:'Full‑stack commerce with secure auth, PayPal, admin dashboard, Redux state, and responsive UI.',
    tech:['React 19','Node.js','Express.js','MongoDB','PayPal API'],
    github:'https://github.com/shehzab/NeoDesk-Ecommerce',
  },
  {
    title:'RBAC API System',
    description:'Authentication with Redis sessions and CRUD for users, roles, permissions with dynamic access control.',
    tech:['Node.js','Express.js','MongoDB','Redis','JWT','Swagger'],
    github:'https://github.com/shehzab/RBAC-system',
  },
  {
    title:'E‑Commerce Payments API',
    description:'Complete RESTful e‑commerce backend with Stripe integration, JWT auth, admin dashboard, and webhook handling.',
    tech:['Node.js','Express.js','MongoDB','Stripe API','JWT','Jest'],
    github:'https://github.com/shehzab/ecommerce-payments-api',
  },
  {
    title:'Task Management API',
    description:'Robust REST API with JWT authentication, task categorization, progress tracking, and rate limiting.',
    tech:['Node.js','Express.js','MongoDB','JWT','Joi','Helmet.js'],
    github:'https://github.com/shehzab/Task-Management-API',
  },
  {
    title:'Crypto Tracker',
    description:'Real‑time cryptocurrency tracking with interactive charts and multi‑timeframe analysis.',
    tech:['React 18+','CSS','Chart.js','CoinGecko API'],
    github:'https://github.com/shehzab/Crypto-Tracker',
    live:'https://crypto-tracker-coinscope.vercel.app',
  },
];

const Projects = () => {
  return (
    <div className="min-h-screen bg-black">
      <section id="projects" className="border-t border-zinc-800">
        <div className="mx-auto max-w-5xl px-6 py-24">
          
          {/* Header */}
          <div className="mb-20">
            <h2 className="text-5xl md:text-6xl font-light text-white mb-6 tracking-tight">
              Featured
              <span className="block font-normal text-zinc-400">Projects</span>
            </h2>
            
            <p className="text-lg text-zinc-400 max-w-xl leading-relaxed">
              A selection of recent work showcasing full-stack development, 
              API design, and modern web technologies.
            </p>
          </div>

          {/* Projects Grid */}
          <Stagger className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Item key={project.title}>
                <article className="group relative border border-zinc-800 bg-zinc-950/50 hover:border-zinc-600 transition-all duration-500 hover:translate-y-[-4px]">
                  <div className="p-8">
                    
                    {/* Project Number */}
                    <div className="mb-6">
                      <span className="text-sm font-medium text-zinc-500 uppercase tracking-wide">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-2xl font-light text-white mb-4 leading-tight group-hover:text-zinc-100 transition-colors">
                      {project.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-zinc-400 leading-relaxed mb-6">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.tech.map((tech) => (
                        <span 
                          key={tech} 
                          className="px-3 py-1 text-xs font-medium border border-zinc-700 text-zinc-300 bg-zinc-900/50"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex items-center gap-4">
                      <a 
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/link inline-flex items-center gap-2 px-4 py-2 border border-zinc-700 text-zinc-300 hover:border-white hover:text-white transition-all duration-300"
                      >
                        <Github className="w-4 h-4" />
                        <span className="text-sm font-medium">Code</span>
                        <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1 group-hover/link:-translate-y-1" />
                      </a>
                      
                      {project.live && (
                        <a 
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group/link inline-flex items-center gap-2 px-4 py-2 bg-white text-black font-medium hover:bg-zinc-100 transition-all duration-300"
                        >
                          <ExternalLink className="w-4 h-4" />
                          <span className="text-sm">Live Demo</span>
                          <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1 group-hover/link:-translate-y-1" />
                        </a>
                      )}
                    </div>
                  </div>
                  
                  {/* Hover gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                </article>
              </Item>
            ))}
          </Stagger>
          
          {/* View All Projects Link */}
          <div className="mt-16 text-center">
            <a 
              href="https://github.com/shehzab"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 text-zinc-400 hover:text-white transition-colors duration-300"
            >
              <span className="text-sm font-medium uppercase tracking-wide">View All Projects on GitHub</span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;