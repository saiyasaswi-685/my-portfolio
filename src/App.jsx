function App() {
  return (
    <div className="bg-black min-h-screen text-white">

      <nav className="flex justify-between items-center px-8 py-6">

        <h1 className="text-2xl font-bold">
          Sai Yasaswi
        </h1>

        <ul className="flex gap-6 text-gray-300">
          <li>About</li>
          <li>Skills</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>

      </nav>

      <section className="flex flex-col items-center justify-center min-h-screen text-center px-4">

        <h1 className="text-5xl md:text-7xl font-bold mb-4">
          Bandaru Sai Yasaswi
        </h1>

        <p className="text-gray-400 text-lg md:text-2xl mb-6">
          Aspiring Cloud Engineer
        </p>

        <button className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-300 transition">
          View My Work
        </button>

      </section>

      <section className="px-8 py-24 max-w-5xl mx-auto">

        <h2 className="text-4xl font-bold mb-8">
          About Me
        </h2>

        <p className="text-gray-400 text-lg leading-8">
          I am an aspiring Cloud Engineer passionate about AWS, cloud computing, and modern web technologies.
          I enjoy building scalable applications and learning how cloud services work in real-world systems.
          Currently, I am improving my skills in AWS, frontend development, and deployment technologies.
        </p>

      </section>

      <section className="px-8 py-24 max-w-5xl mx-auto">

        <h2 className="text-4xl font-bold mb-12">
          Skills
        </h2>

        <div className="flex flex-wrap gap-4">

          <div className="bg-gray-900 px-6 py-3 rounded-full">
            AWS
          </div>

          <div className="bg-gray-900 px-6 py-3 rounded-full">
            Google Cloud
          </div>

          <div className="bg-gray-900 px-6 py-3 rounded-full">
            GitHub
          </div>

          <div className="bg-gray-900 px-6 py-3 rounded-full">
            Java
          </div>

          <div className="bg-gray-900 px-6 py-3 rounded-full">
            C
          </div>

          <div className="bg-gray-900 px-6 py-3 rounded-full">
            C++
          </div>

          <div className="bg-gray-900 px-6 py-3 rounded-full">
            Python (Basic)
          </div>

          <div className="bg-gray-900 px-6 py-3 rounded-full">
            Postman
          </div>

        </div>

      </section>

      <section className="px-8 py-24 max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold mb-12">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          <div className="bg-gray-900 p-6 rounded-2xl">

            <h3 className="text-2xl font-bold mb-4">
              Vision Guard AI
            </h3>

            <p className="text-gray-400 mb-4">
              AI-powered safety monitoring project focused on intelligent detection and real-time analysis systems.
            </p>

            <p className="text-sm text-gray-500 mb-6">
              Python • AI • Computer Vision
            </p>

            <a
              href="https://github.com/saiyasaswi-685/Vision-Guard-AI"
              target="_blank"
              className="bg-white text-black px-5 py-2 rounded-full font-semibold"
            >
              GitHub Repo
            </a>

          </div>

          <div className="bg-gray-900 p-6 rounded-2xl">

            <h3 className="text-2xl font-bold mb-4">
              Face Recognition System
            </h3>

            <p className="text-gray-400 mb-4">
              Developed a face recognition and authentication system using computer vision technologies.
            </p>

            <p className="text-sm text-gray-500 mb-6">
              Python • OpenCV • AI
            </p>

            <a
              href="https://github.com/saiyasaswi-685/face_rekognation_system"
              target="_blank"
              className="bg-white text-black px-5 py-2 rounded-full font-semibold"
            >
              GitHub Repo
            </a>

          </div>

        </div>

      </section>

      <section className="px-8 py-24 max-w-5xl mx-auto text-center">

        <h2 className="text-4xl font-bold mb-8">
          Contact
        </h2>

        <p className="text-gray-400 text-lg mb-6">
          Feel free to connect with me for collaborations and opportunities.
        </p>

        <div className="flex flex-col gap-4 text-lg">

          <p className="text-white">
            📞 9985176457
          </p>

          <a
            href="mailto:saiyasaswibandaru@gmail.com"
            className="text-white hover:text-gray-400 transition"
          >
            ✉️ saiyasaswibandaru@gmail.com
          </a>

          <a
            href="https://github.com/saiyasaswi-685"
            target="_blank"
            className="text-white hover:text-gray-400 transition"
          >
            💻 GitHub Profile
          </a>

          <a
            href="https://www.linkedin.com/in/sai-yasaswi-b-a256222a4/"
            target="_blank"
            className="text-white hover:text-gray-400 transition"
          >
            🔗 LinkedIn Profile
          </a>

        </div>

      </section>

    </div>
  )
}

export default App