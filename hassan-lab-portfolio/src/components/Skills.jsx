import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      category: 'AI Tools',
      skills: [
        { name: 'ChatGPT / GPT-4', level: 95 },
        { name: 'LangChain', level: 85 },
        { name: 'TensorFlow', level: 80 },
        { name: 'PyTorch', level: 75 },
        { name: 'Hugging Face', level: 85 },
      ],
    },
    {
      category: 'Web Technologies',
      skills: [
        { name: 'React / Next.js', level: 90 },
        { name: 'Node.js', level: 85 },
        { name: 'Python', level: 90 },
        { name: 'Tailwind CSS', level: 95 },
        { name: 'TypeScript', level: 85 },
      ],
    },
    {
      category: 'Automation Platforms',
      skills: [
        { name: 'Zapier', level: 95 },
        { name: 'Make.com', level: 90 },
        { name: 'n8n', level: 85 },
        { name: 'REST APIs', level: 95 },
        { name: 'Webhooks', level: 90 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 md:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Skills & Expertise</h2>
          <p className="section-subtitle">
            Technical proficiency across AI, web development, and automation
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.15 }}
              className="card p-8 bg-white"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="w-3 h-3 bg-primary-600 rounded-full mr-3" />
                {category.category}
              </h3>

              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: categoryIndex * 0.15 + skillIndex * 0.1,
                    }}
                  >
                    {/* Skill Name */}
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-700 font-medium">
                        {skill.name}
                      </span>
                      <span className="text-gray-500 text-sm">{skill.level}%</span>
                    </div>

                    {/* Progress Bar */}
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 1,
                          delay: categoryIndex * 0.15 + skillIndex * 0.1 + 0.3,
                          ease: 'easeOut',
                        }}
                        className="h-full bg-gradient-to-r from-primary-600 to-accent-600 rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="inline-block p-8 bg-white rounded-2xl shadow-md">
            <p className="text-lg text-gray-700 mb-4">
              Always learning and adapting to new technologies
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {['Continuous Learning', 'Problem Solving', 'Innovation'].map(
                (item, index) => (
                  <motion.span
                    key={item}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                    className="px-4 py-2 bg-primary-50 text-primary-700 rounded-full text-sm font-medium"
                  >
                    ✨ {item}
                  </motion.span>
                )
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
