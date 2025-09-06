import React from "react";
import { Stagger, Item } from "./motion/Stagger.jsx";

const icon = (filename, invert = false) => (
  <img
    src={`/icons/${filename}`} 
    alt=""
    aria-hidden="true"
    className={`h-4 w-4 ${invert ? "invert" : ""}`}
  />
);

const Chip = ({ iconEl, label }) => (
  <span className="inline-flex items-center gap-2 border border-zinc-700 bg-zinc-900/50 px-3 py-2 text-sm text-zinc-300 hover:border-zinc-500 hover:bg-zinc-800/50 transition-all duration-300">
    {iconEl}
    {label}
  </span>
);

const skillGroups = [
  {
    title: "Frontend",
    items: [
      { label: "React",      iconEl: icon("react.svg") },
      { label: "Tailwind",   iconEl: icon("tailwindcss.svg") },
      { label: "Redux",      iconEl: icon("redux.svg") },
      { label: "Chart.js",   iconEl: icon("javascript.svg") },
    ],
  },
  {
    title: "Backend",
    items: [
      { label: "Node.js",    iconEl: icon("nodejs.svg") },
      { label: "Express",    iconEl: icon("express.svg", true) },
      { label: "MongoDB",    iconEl: icon("mongodb.svg") },
      { label: "JWT",        iconEl: icon("jwt.svg") },
    ],
  },
  {
    title: "Tools & Testing",
    items: [
      { label: "Git",        iconEl: icon("git.svg") },
      { label: "Docker",     iconEl: icon("docker.svg") },
      { label: "Redis",      iconEl: icon("redis.svg") },
      { label: "Jest",       iconEl: icon("javascript.svg") },
      { label: "Postman",    iconEl: icon("postman.svg") },
      { label: "Stripe",     iconEl: icon("stripe.svg") },
    ],
  },
];

const About = () => {
  return (
    <div className="min-h-screen bg-black">
      <section id="about" className="border-t border-zinc-800 ">
        <div className="mx-auto max-w-5xl px-6 py-24">
          
          <div className="mb-20">
            <h2 className="text-5xl md:text-6xl font-light text-white mb-6 tracking-tight">
              About
              <span className="block font-normal text-zinc-400">Me</span>
            </h2>
            
            <p className="text-xl text-zinc-400 leading-relaxed max-w-3xl mb-8">
              MERN developer focused on scalable, secure web applications. Currently pursuing a B.Sc. in Physics 
              while building advanced authentication systems and e-commerce solutions. I combine analytical 
              thinking with creative problem-solving to build digital experiences that matter.
            </p>

            <p className="text-lg text-zinc-500 leading-relaxed max-w-2xl">
              Currently focused on mastering microservices architecture, exploring cloud deployment strategies, 
              and deepening my understanding of payment systems and real-time applications.
            </p>
          </div>

          <div className="mb-20">
            <h3 className="text-sm font-medium text-zinc-300 mb-8 uppercase tracking-wide">
              What I Do
            </h3>
            
            <Stagger className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                ["RBAC & Authentication", "Sessions, JWT, role/permission models, secure access control"],
                ["Payment Integration", "Stripe APIs, webhook handling, secure transaction processing"],
                ["Real-time Dashboards", "Streaming data, interactive charts, monitoring systems"],
                ["API Design & Testing", "RESTful APIs, validation, comprehensive testing with Jest"],
              ].map(([title, description]) => (
                <Item key={title}>
                  <div className="group border border-zinc-800 bg-zinc-950/50 p-6 hover:border-zinc-600 hover:bg-zinc-900/30 transition-all duration-300">
                    <h4 className="text-lg font-light text-white mb-3 group-hover:text-zinc-100">
                      {title}
                    </h4>
                    <p className="text-zinc-400 leading-relaxed">
                      {description}
                    </p>
                  </div>
                </Item>
              ))}
            </Stagger>
          </div>

          {/* Problem-Solving Approach */}
          <div className="mb-20">
            <div className="flex items-center gap-4 mb-8">
              <h3 className="text-sm font-medium text-zinc-300 uppercase tracking-wide">
                Development Approach
              </h3>
              <div className="flex-1 h-px bg-zinc-800"></div>
            </div>

            <Stagger>
              <Item>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-light text-white mb-3">Analytical Foundation</h4>
                      <p className="text-zinc-400 leading-relaxed">
                        My physics background brings systematic problem-solving and mathematical rigor 
                        to development. I break complex systems into manageable components and test 
                        hypotheses through iterative development.
                      </p>
                    </div>
                  </div>
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-light text-white mb-3">Collaborative Mindset</h4>
                      <p className="text-zinc-400 leading-relaxed">
                        I prioritize clear communication, comprehensive documentation, and knowledge 
                        sharing. Every project includes proper testing, clean code practices, and 
                        detailed API documentation for seamless team collaboration.
                      </p>
                    </div>
                  </div>
                </div>
              </Item>
            </Stagger>
          </div>

          {/* Skills Section */}
          <div className="mb-20">
            <div className="flex items-center gap-4 mb-8">
              <h3 className="text-sm font-medium text-zinc-300 uppercase tracking-wide">
                Technical Skills
              </h3>
              <div className="flex-1 h-px bg-zinc-800"></div>
            </div>

            <Stagger>
              <Item>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {skillGroups.map((group) => (
                    <div key={group.title} className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-zinc-500 rounded-full"></div>
                        <h4 className="text-lg font-light text-white">
                          {group.title}
                        </h4>
                      </div>
                      
                      <div className="flex flex-wrap gap-3">
                        {group.items.map((skill) => (
                          <Chip key={skill.label} iconEl={skill.iconEl} label={skill.label} />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </Item>
            </Stagger>
          </div>

          {/* Recent Achievement */}
          <div className="mb-20">
            <div className="flex items-center gap-4 mb-8">
              <h3 className="text-sm font-medium text-zinc-300 uppercase tracking-wide">
                Recent Achievement
              </h3>
              <div className="flex-1 h-px bg-zinc-800"></div>
            </div>
            
            <Stagger>
              <Item>
                <div className="border border-zinc-800 bg-zinc-950/30 p-8 hover:border-zinc-600 transition-all duration-300">
                  <h4 className="text-xl font-light text-white mb-4">
                    Built Comprehensive RBAC Authentication System
                  </h4>
                  <p className="text-zinc-400 leading-relaxed max-w-3xl">
                    Architected and deployed a production-ready Role-Based Access Control API featuring 
                    JWT authentication, Redis session management, email verification, comprehensive logging, 
                    and interactive Swagger documentation. The system demonstrates advanced security practices 
                    and scalable authentication architecture used in enterprise applications.
                  </p>
                </div>
              </Item>
            </Stagger>
          </div>

          {/* Personal Touch */}
          <div className="pt-16 border-t border-zinc-800">
            <div className="flex items-start gap-8">
              <div className="w-2 h-2 bg-white rounded-full mt-2"></div>
              <div>
                <p className="text-zinc-400 leading-relaxed max-w-2xl">
                  When I'm not coding or studying, I enjoy diving deep into emerging technologies like 
                  WebAssembly and serverless architectures, contributing to open source projects, and 
                  exploring the intersection of physics and computation. I'm particularly fascinated by 
                  how mathematical concepts can optimize algorithm performance and system design.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;