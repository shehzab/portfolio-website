import React from 'react';

const timeline = [
  {
    year: '2024 — Present',
    title: 'Bachelor of Science in Physics',
    institution: 'Government College Kasaragod, Kannur University',
    description:
      'Pursuing undergraduate degree while developing technical skills in web development.',
  },
  {
    year: '2023 — 2024',
    title: 'Self-Learning — MERN Stack Development',
    institution: 'Independent Study',
    description:
      'Dedicated time to learning full-stack web development with MongoDB, Express, React, and Node.js.',
  },
  {
    year: '2020 — 2022',
    title: 'Higher Secondary Education — Computer Science',
    institution: 'Kerala State Board',
    description:
      'Completed higher secondary education with focus on computer science fundamentals.',
  },
];




const Experience = () => {
  return (
    <div className="min-h-screen bg-black">
      <section id="education" className="border-t border-zinc-800">
        <div className="mx-auto max-w-5xl px-6 py-24">
          {/* Heading */}
          <div className="mb-20">
            <h2 className="text-5xl md:text-6xl font-light text-white mb-6 tracking-tight">
              Education
              <span className="block font-normal text-zinc-400 text-4xl md:text-5xl">
                & Learning
              </span>
            </h2>

            <p className="text-lg text-zinc-400 max-w-xl leading-relaxed">
              My academic journey and continuous learning in technology and science.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            <div className="absolute left-1.5 top-0 bottom-0 w-px bg-zinc-700" /> {/* full vertical line */}

            <div className="space-y-16 relative">
              {timeline.map((item, idx) => (
                <div key={idx} className="flex items-start gap-8 relative">
                  {/* Dot */}
                  <div className="relative z-10">
                    <div className="w-3 h-3 bg-white rounded-full" />
                  </div>

                  {/* Content */}
                  <div>
                    <div className="mb-2">
                      <span className="text-sm font-medium text-zinc-300 uppercase tracking-wide">
                        {item.year}
                      </span>
                    </div>

                    <h3 className="text-2xl font-light text-white mb-2 leading-tight">
                      {item.title}
                    </h3>

                    <p className="text-lg text-zinc-300 font-medium mb-3">
                      {item.institution}
                    </p>

                    <p className="text-zinc-400 leading-relaxed max-w-2xl">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Experience;
