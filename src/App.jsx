import { motion } from "framer-motion";

function App() {
  const skills = [
    "AWS",
    "Google Cloud",
    "GitHub",
    "Java",
    "C",
    "C++",
    "Python (Basic)",
    "Postman",
  ];

  return (
    <div className="bg-black min-h-screen text-white overflow-x-hidden">

      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-black/80 backdrop-blur-md border-b border-gray-800">

        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-5">

          <h1 className="text-2xl font-bold">
            Sai Yasaswi
          </h1>

          <ul className="flex gap-6 text-gray-300 text-sm md:text-base">
            <li className="hover:text-white transition cursor-pointer">
              About
            </li>

            <li className="hover:text-white transition cursor-pointer">
              Skills
            </li>

            <li className="hover:text-white transition cursor-pointer">
              Projects
            </li>

            <li className="hover:text-white transition cursor-pointer">
              Contact
            </li>
          </ul>

        </div>

      </nav>

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 120 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="relative flex flex-col items-center justify-center min-h-screen text-center px-4"
      >

        {/* Glow Background */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 blur-3xl rounded-full"></div>

        <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-500/10 blur-3xl rounded-full"></div>

        <motion.h1
          whileHover={{ scale: 1.05 }}
          className="relative z-10 text-5xl md:text-7xl font-bold mb-4"
        >
          Bandaru Sai Yasaswi
        </motion.h1>

        <p className="relative z-10 text-gray-400 text-lg md:text-2xl mb-6">
          Aspiring Cloud Engineer
        </p>

        <motion.button
          whileHover={{
            scale: 1.1,
            boxShadow: "0px 0px 20px rgba(255,255,255,0.5)",
          }}
          whileTap={{ scale: 0.95 }}
          className="relative z-10 bg-white text-black px-6 py-3 rounded-full font-semibold"
        >
          View My Work
        </motion.button>

      </motion.section>

      {/* About Section */}
      <motion.section
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto px-6 py-24"
      >

        <h2 className="text-4xl font-bold mb-8">
          About Me
        </h2>

        <p className="text-gray-400 text-lg leading-8">
          I am an aspiring Cloud Engineer passionate about AWS,
          cloud computing, and modern web technologies.

          I enjoy building scalable applications and learning how
          cloud services work in real-world systems.

          Currently, I am improving my skills in AWS,
          frontend development, and deployment technologies.
        </p>

      </motion.section>

      {/* Skills Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto px-6 py-24"
      >

        <h2 className="text-4xl font-bold mb-12">
          Skills
        </h2>

        <div className="flex flex-wrap gap-6">

          {skills.map((skill, index) => (

            <motion.div
              key={index}
              whileHover={{
                scale: 1.15,
                rotate: 3,
                y: -8,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
              }}
              className="bg-gray-900 px-6 py-3 rounded-full cursor-pointer shadow-lg hover:bg-white hover:text-black hover:shadow-white/30 transition"
            >
              {skill}
            </motion.div>

          ))}

        </div>

      </motion.section>

      {/* Projects Section */}
      <motion.section
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto px-6 py-24"
      >

        <h2 className="text-4xl font-bold mb-12">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          {/* Project 1 */}
          <motion.div
            whileHover={{
              scale: 1.03,
              y: -10,
            }}
            className="bg-gray-900 p-6 rounded-2xl hover:shadow-white/20 shadow-lg transition"
          >

            <h3 className="text-2xl font-bold mb-4">
              Vision Guard AI
            </h3>

            <p className="text-gray-400 mb-4">
              AI-powered safety monitoring project focused on intelligent
              detection and real-time analysis systems.
            </p>

            <p className="text-sm text-gray-500 mb-6">
              Python • AI • Computer Vision
            </p>

            <motion.a
              whileHover={{ scale: 1.05 }}
              href="https://github.com/saiyasaswi-685/Vision-Guard-AI"
              target="_blank"
              rel="noreferrer"
              className="inline-block bg-white text-black px-5 py-2 rounded-full font-semibold"
            >
              GitHub Repo
            </motion.a>

          </motion.div>

          {/* Project 2 */}
          <motion.div
            whileHover={{
              scale: 1.03,
              y: -10,
            }}
            className="bg-gray-900 p-6 rounded-2xl hover:shadow-white/20 shadow-lg transition"
          >

            <h3 className="text-2xl font-bold mb-4">
              Face Recognition System
            </h3>

            <p className="text-gray-400 mb-4">
              Developed a face recognition and authentication system
              using computer vision technologies.
            </p>

            <p className="text-sm text-gray-500 mb-6">
              Python • OpenCV • AI
            </p>

            <motion.a
              whileHover={{ scale: 1.05 }}
              href="https://github.com/saiyasaswi-685/face_rekognation_system"
              target="_blank"
              rel="noreferrer"
              className="inline-block bg-white text-black px-5 py-2 rounded-full font-semibold"
            >
              GitHub Repo
            </motion.a>

          </motion.div>

        </div>

      </motion.section>

      {/* Contact Section */}
      <motion.section
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto px-6 py-24 text-center"
      >

        <h2 className="text-4xl font-bold mb-8">
          Contact
        </h2>

        <p className="text-gray-400 text-lg mb-6">
          Feel free to connect with me for collaborations and opportunities.
        </p>

        <div className="flex flex-col gap-4 text-lg">

          <motion.p whileHover={{ scale: 1.05 }}>
            📞 9985176457
          </motion.p>

          <motion.a
            whileHover={{ scale: 1.05 }}
            href="mailto:saiyasaswibandaru@gmail.com"
            className="hover:text-gray-400 transition"
          >
            ✉️ saiyasaswibandaru@gmail.com
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.05 }}
            href="https://github.com/saiyasaswi-685"
            target="_blank"
            rel="noreferrer"
            className="hover:text-gray-400 transition"
          >
            💻 GitHub Profile
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.05 }}
            href="https://www.linkedin.com/in/sai-yasaswi-b-a256222a4/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-gray-400 transition"
          >
            🔗 LinkedIn Profile
          </motion.a>

        </div>

      </motion.section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-8 text-center text-gray-500">

        <p>
          © 2026 Bandaru Sai Yasaswi. All rights reserved.
        </p>

      </footer>

    </div>
  );
}

export default App;