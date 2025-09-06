import React from 'react';
import { Mail, Linkedin, Instagram, ArrowUpRight } from "lucide-react";

const Contact = () => {
  const contacts = [
    { 
      label: 'Email', 
      href: 'mailto:sinanshehzab@gmail.com', 
      icon: Mail, 
      description: 'sinanshehzab@gmail.com'
    },
    { 
      label: 'LinkedIn', 
      href: 'https://linkedin.com/in/shehzab', 
      icon: Linkedin, 
      description: 'Connect with me on LinkedIn'
    },
    { 
      label: 'Instagram', 
      href: 'https://instagram.com/_shehzab_', 
      icon: Instagram, 
      description: '@_shehzab_'
    },
  ];

  return (
    <div className="min-h-screen bg-black border-t border-zinc-800">
      <section id="contact" className="relative">
        <div className="mx-auto max-w-5xl px-6 py-24">
          
          {/* Header */}
          <div className="mb-20">
            <h1 className="text-5xl md:text-6xl font-light text-white mb-6 tracking-tight">
              Let's work
              <span className="block font-normal text-zinc-400">together</span>
            </h1>
            
            <p className="text-lg text-zinc-400 max-w-xl leading-relaxed">
              I'm currently available for freelance work and new opportunities. 
              Reach me directly through the platforms below.
            </p>
          </div>

          {/* Contact Links */}
          <div className="lg:col-span-2">
            <div className="space-y-8">
              
              <div>
                <h3 className="text-sm font-medium text-zinc-300 mb-6 uppercase tracking-wide">
                  Contact
                </h3>
                
                <div className="flex flex-col sm:flex-row sm:gap-8 space-y-6 sm:space-y-0">
                  {contacts.map((contact) => {
                    const Icon = contact.icon;
                    return (
                      <a
                        key={contact.label}
                        href={contact.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-3 text-zinc-400 hover:text-white transition-colors duration-300"
                      >
                        <Icon className="w-5 h-5" />
                        <div>
                          <div className="font-medium">{contact.label}</div>
                          <div className="text-sm text-zinc-500 group-hover:text-zinc-400 transition-colors">
                            {contact.description}
                          </div>
                        </div>
                        <ArrowUpRight className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* Response Time */}
              <div className="pt-8 border-t border-zinc-800">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 bg-zinc-500 rounded-full"></div>
                  <span className="text-sm font-medium text-zinc-300 uppercase tracking-wide">
                    Response Time
                  </span>
                </div>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  Usually within 24 hours
                </p>
              </div>

              {/* Availability */}
              <div className="pt-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span className="text-sm font-medium text-zinc-300 uppercase tracking-wide">
                    Availability
                  </span>
                </div>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  Open for new projects
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Contact;