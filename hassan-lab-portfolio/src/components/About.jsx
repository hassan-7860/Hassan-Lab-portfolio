import { motion } from 'framer-motion';

const About = () => {
  const tools = [
    { name: 'ChatGPT', icon: '🤖' },
    { name: 'REST APIs', icon: '🔌' },
    { name: 'Zapier', icon: '⚡' },
    { name: 'Make.com', icon: '🔄' },
    { name: 'Python', icon: '🐍' },
    { name: 'TensorFlow', icon: '🧠' },
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          {/* Left Column - Image/Visual */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square bg-gradient-to-br from-primary-100 to-accent-100 rounded-2xl overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-8xl">🚀</div>
              </div>
              {/* Decorative elements */}
              <div className="absolute top-4 right-4 w-20 h-20 bg-white/50 rounded-full blur-xl" />
              <div className="absolute bottom-4 left-4 w-32 h-32 bg-primary-200/30 rounded-full blur-2xl" />
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6 }}
              className="section-title"
            >
              About Hassan Lab
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-gray-600 mb-6 text-lg leading-relaxed"
            >
              I'm an AI Generalist passionate about leveraging artificial
              intelligence to solve real-world business challenges. With expertise
              in both AI website development and automation solutions, I help
              companies streamline their operations and create intelligent digital
              experiences.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-600 mb-8 text-lg leading-relaxed"
            >
              My focus is on building smart, responsive websites powered by AI and
              creating custom automation workflows that save time and reduce manual
              effort. From integrating ChatGPT into your applications to building
              complex API-driven automations, I bring ideas to life.
            </motion.p>

            {/* Tools Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Tools & Technologies
              </h3>
              <div className="flex flex-wrap gap-3">
                {tools.map((tool, index) => (
                  <motion.div
                    key={tool.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.1 * index }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="px-4 py-2 bg-gray-100 hover:bg-primary-50 rounded-lg text-gray-700 hover:text-primary-700 font-medium transition-colors cursor-default"
                  >
                    <span className="mr-2">{tool.icon}</span>
                    {tool.name}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
