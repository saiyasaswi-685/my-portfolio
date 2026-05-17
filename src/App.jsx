import { motion } from "framer-motion";
import photo from "./assets/photo.jpg";

function App() {

  const skills = [
    "AWS",
    "Google Cloud",
    "GitHub",
    "Java",
    "C",
    "C++",
    "Python",
    "Postman",
    "Docker (Basics)",
    "Kubernetes (Basics)"
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

        <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 blur-3xl rounded-full"></div>

        <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-500/10 blur-3xl rounded-full"></div>

        <motion.h1
          whileHover={{ scale: 1.05 }}
          className="relative z-10 text-5xl md:text-7xl font-bold mb-4"
        >
          Bandaru Sai Yasaswi
        </motion.h1>

        <p className="relative z-10 text-gray-400 text-lg md:text-2xl mb-6">
          AWS Certified Developer • Aspiring Cloud Engineer
        </p>

        <motion.a
          whileHover={{
            scale: 1.1,
            boxShadow: "0px 0px 20px rgba(255,255,255,0.5)",
          }}
          href="https://github.com/saiyasaswi-685"
          target="_blank"
          rel="noreferrer"
          className="relative z-10 bg-white text-black px-6 py-3 rounded-full font-semibold"
        >
          View My Work
        </motion.a>

        <a
  href="/resume.pdf"
  target="_blank"
  rel="noreferrer"
  className="mt-6 inline-block border border-white px-6 py-3 rounded-full text-white font-semibold hover:bg-white hover:text-black transition"
>
  Download Resume
</a>

      </motion.section>

      {/* About */}
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

        <div className="flex justify-center mb-8">

          <img
            src={photo}
            alt="Sai Yasaswi"
            className="w-40 h-40 rounded-full object-cover border-4 border-white shadow-lg"
          />

        </div>

        <p className="text-gray-400 text-lg leading-8">
          Computer Science undergraduate passionate about AWS cloud,
          serverless architectures, AI-powered applications,
          and scalable cloud systems.

          Skilled in AWS services like EC2, S3, Lambda,
          DynamoDB, API Gateway, SNS, and CloudWatch.
        </p>

      </motion.section>

      {/* Education */}
      <motion.section
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto px-6 py-24"
      >

        <h2 className="text-4xl font-bold mb-8">
          Education
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          <div className="bg-gray-900 p-6 rounded-2xl">

            <h3 className="text-2xl font-semibold mb-2">
              B.Tech in Computer Science and Engineering
            </h3>

            <p className="text-gray-400">
              Aditya College of Engineering And Technology
            </p>

            <p className="text-gray-400 mt-2">
              CGPA: 8.46
            </p>

          </div>

          <div className="bg-gray-900 p-6 rounded-2xl">

            <h3 className="text-2xl font-semibold mb-2">
              Intermediate (MPC)
            </h3>

            <p className="text-gray-400">
              Sahasra Junior College
            </p>

            <p className="text-gray-400 mt-2">
              CGPA: 9.09
            </p>

          </div>

        </div>

      </motion.section>

      {/* Certifications */}
      <motion.section
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto px-6 py-24"
      >

        <h2 className="text-4xl font-bold mb-12">
          Certifications
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          <a
            href="https://www.credly.com/badges/ab571dc9-640e-4066-b6f5-9cd02bccfd34/public_url"
            target="_blank"
            rel="noreferrer"
            className="bg-gray-900 p-6 rounded-2xl hover:bg-white hover:text-black transition"
          >
            AWS Certified Developer Associate
          </a>

          <a
            href="https://www.credly.com/badges/c9efb57f-f016-41e1-95aa-c953821b44d9/public_url"
            target="_blank"
            rel="noreferrer"
            className="bg-gray-900 p-6 rounded-2xl hover:bg-white hover:text-black transition"
          >
            RHCSA – Red Hat Certified System Administrator
          </a>

          <a
            href="https://www.credly.com/badges/5d4e2294-f9aa-4875-afe9-2f8984a44474/public_url"
            target="_blank"
            rel="noreferrer"
            className="bg-gray-900 p-6 rounded-2xl hover:bg-white hover:text-black transition"
          >
            IT Specialist – HTML & CSS
          </a>

        </div>

      </motion.section>

      {/* Skills */}
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
              className="bg-gray-900 px-6 py-3 rounded-full cursor-pointer shadow-lg hover:bg-white hover:text-black transition"
            >
              {skill}
            </motion.div>

          ))}

        </div>

      </motion.section>

      {/* Projects */}
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

          {/* Smart Visitor */}
          <motion.div
            whileHover={{
              scale: 1.03,
              y: -10,
            }}
            className="bg-gray-900 p-6 rounded-2xl shadow-lg hover:shadow-white/20 transition"
          >

            <h3 className="text-2xl font-bold mb-4">
              Smart Visitor & Threat Detection System
            </h3>

            <p className="text-gray-400 mb-4">
              Built scalable face recognition system using AWS Rekognition,
              Lambda, S3, and DynamoDB with real-time alerts.
            </p>

            <p className="text-sm text-gray-500 mb-6">
              AWS • Rekognition • Lambda • Flask
            </p>

            <a
              href="https://github.com/saiyasaswi-685/face_rekognation_system"
              target="_blank"
              rel="noreferrer"
              className="inline-block bg-white text-black px-5 py-2 rounded-full font-semibold hover:scale-105 transition"
            >
              GitHub Repo
            </a>

          </motion.div>

          {/* Vision Guard */}
          <motion.div
            whileHover={{
              scale: 1.03,
              y: -10,
            }}
            className="bg-gray-900 p-6 rounded-2xl shadow-lg hover:shadow-white/20 transition"
          >

            <h3 className="text-2xl font-bold mb-4">
              Vision Guard AI
            </h3>

            <p className="text-gray-400 mb-4">
              Real-time helmet violation detection system using
              YOLOv8, OpenCV, AWS S3, and Streamlit dashboard.
            </p>

            <p className="text-sm text-gray-500 mb-6">
              Python • YOLOv8 • AWS • Streamlit
            </p>

            <a
              href="https://github.com/saiyasaswi-685/Vision-Guard-AI"
              target="_blank"
              rel="noreferrer"
              className="inline-block bg-white text-black px-5 py-2 rounded-full font-semibold hover:scale-105 transition"
            >
              GitHub Repo
            </a>

          </motion.div>

        </div>

      </motion.section>

      {/* Contact */}
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

        <div className="flex flex-col gap-4 text-lg">

          <p>
            📞 9985176457
          </p>

          <a
            href="mailto:saiyasaswibandaru@gmail.com"
            className="hover:text-gray-400 transition"
          >
            ✉️ saiyasaswibandaru@gmail.com
          </a>

          <a
            href="https://github.com/saiyasaswi-685"
            target="_blank"
            rel="noreferrer"
            className="hover:text-gray-400 transition"
          >
            💻 GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/sai-yasaswi-b-a256222a4/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-gray-400 transition"
          >
            🔗 LinkedIn
          </a>

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