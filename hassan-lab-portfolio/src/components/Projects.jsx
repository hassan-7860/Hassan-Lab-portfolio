import { useState } from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'AI-Powered E-commerce Platform',
      description:
        'Built an intelligent e-commerce website with AI product recommendations, chatbot support, and automated inventory management.',
      tech: ['React', 'Node.js', 'OpenAI API', 'Stripe'],
      category: 'website',
      image: '🛒',
      link: '#',
    },
    {
      id: 2,
      title: 'Customer Support Automation',
      description:
        'Developed an AI-driven customer support system that handles 80% of inquiries automatically using natural language processing.',
      tech: ['Python', 'ChatGPT', 'Zapier', 'PostgreSQL'],
      category: 'automation',
      image: '💬',
      link: '#',
    },
    {
      id: 3,
      title: 'Content Generation Dashboard',
      description:
        'Created a dashboard for marketing teams to generate SEO-optimized content using AI with human review workflows.',
      tech: ['Next.js', 'GPT-4', 'TailwindCSS', 'MongoDB'],
      category: 'website',
      image: '📝',
      link: '#',
    },
    {
      id: 4,
      title: 'Lead Qualification Bot',
      description:
        'Implemented an AI bot that qualifies leads through conversational interviews and integrates with CRM systems.',
      tech: ['Python', 'LangChain', 'HubSpot API', 'Redis'],
      category: 'automation',
      image: '🎯',
      link: '#',
    },
    {
      id: 5,
      title: 'Smart Analytics Platform',
      description:
        'Built a real-time analytics platform with AI-powered insights and predictive modeling for business intelligence.',
      tech: ['React', 'D3.js', 'TensorFlow', 'AWS'],
      category: 'integration',
      image: '📊',
      link: '#',
    },
    {
      id: 6,
      title: 'Document Processing Pipeline',
      description:
        'Automated document processing workflow that extracts, categorizes, and stores information from thousands of documents daily.',
      tech: ['Python', 'OCR', 'Make.com', 'Google Cloud'],
      category: 'automation',
      image: '📄',
      link: '#',
    },
  ];

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'website', label: 'Websites' },
    { id: 'automation', label: 'Automation' },
    { id: 'integration', label: 'Integrations' },
  ];

  const filteredProjects =
    filter === 'all'
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <section id="projects" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            Explore my latest work in AI development and automation
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => setFilter(f.id)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                filter === f.id
                  ? 'bg-primary-600 text-white shadow-md'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {f.label}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="card overflow-hidden group"
            >
              {/* Project Image/Icon */}
              <div className="h-48 bg-gradient-to-br from-primary-100 to-accent-100 flex items-center justify-center text-7xl group-hover:scale-105 transition-transform duration-300">
                {project.image}
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Link */}
                <motion.a
                  href={project.link}
                  whileHover={{ x: 5 }}
                  className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700 transition-colors"
                >
                  View Project
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
