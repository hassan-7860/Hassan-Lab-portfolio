import { motion } from 'framer-motion';

const Services = () => {
  const services = [
    {
      icon: '🌐',
      title: 'AI Website Development',
      description:
        'Build intelligent, responsive websites with AI-powered features like chatbots, content generation, and personalized user experiences.',
      features: ['Smart Chatbots', 'Dynamic Content', 'SEO Optimization'],
    },
    {
      icon: '⚙️',
      title: 'AI Automation Solutions',
      description:
        'Streamline your business processes with custom automation workflows that reduce manual work and increase efficiency.',
      features: ['Workflow Automation', 'Data Processing', 'Task Scheduling'],
    },
    {
      icon: '🔗',
      title: 'Custom AI Integrations',
      description:
        'Seamlessly integrate AI APIs and models into your existing applications to enhance functionality and user experience.',
      features: ['API Integration', 'Custom Models', 'Real-time Processing'],
    },
    {
      icon: '📊',
      title: 'Workflow Optimization',
      description:
        'Analyze and optimize your business workflows using AI insights to identify bottlenecks and improve productivity.',
      features: ['Process Analysis', 'Efficiency Metrics', 'Continuous Improvement'],
    },
  ];

  return (
    <section id="services" className="py-20 md:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Services</h2>
          <p className="section-subtitle">
            Comprehensive AI solutions tailored to your business needs
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="card p-8 bg-white"
            >
              {/* Icon */}
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="text-5xl mb-6"
              >
                {service.icon}
              </motion.div>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center text-sm text-gray-600"
                  >
                    <span className="w-2 h-2 bg-primary-600 rounded-full mr-3" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
