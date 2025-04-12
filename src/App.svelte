<!-- App.svelte -->
<!-- <script lang="ts">
  import Navbar from './components/Navbar.svelte';
  import { Motion } from 'svelte-motion';
</script>

<Navbar />
<main class="font-sans scroll-smooth">
  <Motion let:motion>
    <section id="home" use:motion class="min-h-screen flex flex-col items-center justify-center text-white bg-gradient-to-b from-gray-900 to-black px-4 text-center">
      <img src="/profile.jpeg" alt="Shakeel Ahmad" class="w-32 h-32 rounded-full border-4 border-white shadow-lg mb-6" />
      <h1 class="text-5xl font-bold mb-4">Hi, I’m Shakeel Ahmad</h1>
      <p class="text-xl text-gray-300 mb-6">Senior Software Developer • Full Stack Engineer</p>
      <p class="max-w-2xl text-md text-gray-400 leading-relaxed">
        I'm a full-stack developer with over 9 years of experience specializing in building scalable web and mobile applications.
        My core strengths lie in JavaScript, TypeScript, React, Node.js, and cross-platform mobile development using tools like React Native and Cordova.
        I’ve led the development of several SaaS products, working closely with design and backend teams to deliver responsive, high-performance applications.
        I also have hands-on experience with Docker, Kubernetes, and microservices architecture.
        Currently based in Waterloo, Canada, I’m passionate about creating clean, efficient solutions that solve real-world problems—especially in collaborative, fast-paced environments.
      </p>
      <a href="#contact" class="mt-6 inline-block px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-500 transition">
        Contact Me
      </a>
    </section>
  </Motion>

  <Motion let:motion>
    <section id="about" use:motion class="min-h-screen flex flex-col justify-center px-4 py-12 text-white bg-gray-800">
      <div class="max-w-4xl mx-auto">
        <h2 class="text-3xl font-semibold mb-4">About Me</h2>
        <p class="mb-4">With over 9 years of experience in software development, I specialize in building scalable web and mobile applications. I'm passionate about crafting clean, performant solutions and working in agile, collaborative environments.</p>
        <ul class="list-disc list-inside space-y-1 text-gray-300">
          <li>Expert in JavaScript, TypeScript, React, and Svelte</li>
          <li>Backend skills in Node.js, Express, NestJS</li>
          <li>Mobile app experience: React Native, Cordova, Capacitor</li>
          <li>Experienced with Docker, Kubernetes, Redis</li>
          <li>Database knowledge: PostgreSQL, MySQL, MongoDB</li>
        </ul>
      </div>
    </section>
  </Motion>

  <Motion let:motion>
    <section id="projects" use:motion class="min-h-screen flex flex-col justify-center px-4 py-12 text-white bg-gray-900">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-3xl font-semibold mb-8">Projects & Contributions</h2>
        <div class="grid md:grid-cols-2 gap-8">
          <div class="bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 class="text-xl font-bold">FieldFlex App Suite</h3>
            <p class="text-gray-300">Led development of cross-platform mobile/desktop apps using Cordova, improving business workflows across Android, iOS, and Windows.</p>
          </div>
          <div class="bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 class="text-xl font-bold">Barventory Mobile Platform</h3>
            <p class="text-gray-300">Built mobile inventory management tools using React Native and Redux. Successfully deployed apps to Google Play and App Store.</p>
          </div>
          <div class="bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 class="text-xl font-bold">Devigital Systems</h3>
            <p class="text-gray-300">Led engineering teams to deliver scalable backend APIs, REST integrations, and modular frontends using Node.js and Svelte.</p>
          </div>
        </div>
      </div>
    </section>
  </Motion>

  <Motion let:motion>
    <section id="contact" use:motion class="min-h-screen flex flex-col justify-center px-4 py-12 text-white bg-gray-800">
      <div class="max-w-3xl mx-auto">
        <h2 class="text-3xl font-semibold mb-4">Contact</h2>
        <p class="mb-4 text-gray-300">Want to collaborate or just say hi? Reach out:</p>
        <ul class="space-y-2 text-lg">
          <li>📧 <a href="mailto:sahmadpk94@gmail.com" class="text-blue-400 underline">sahmadpk94@gmail.com</a></li>
          <li>📞 +1-226-220-5300</li>
          <li>🌐 <a href="https://www.linkedin.com/in/shakeelahmadfc" class="text-blue-400 underline" target="_blank">LinkedIn</a></li>
        </ul>
      </div>
    </section>
  </Motion>
</main> -->


<!-- App.svelte -->
<script lang="ts">
  import Navbar from './components/Navbar.svelte';
  import { Motion } from 'svelte-motion';
  import Saos from 'saos';

</script>

<style>
  @keyframes -global-from-left {
    0% {
      transform: rotateX(50deg) translateX(-200vw) skewX(-50deg);
      opacity: 1;
    }
    100% {
      transform: rotateX(0deg) translateX(0) skewX(0deg);
      opacity: 1;
    }
  }
  @keyframes -global-scale-in-center {
    0% {
      transform: scale(0);
      opacity: 1;
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  }

  @keyframes -global-rotate-in-center {
    0% {
      transform: rotate(-360deg);
      opacity: 0;
    }
    100% {
      transform: rotate(0);
      opacity: 1;
    }
  }

  @keyframes -global-slide-in-top {
    0% {
      transform: translateY(-1000px);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @keyframes -global-slide-in-fwd-tr {
    0% {
      transform: translateZ(-1200px) translateY(-700px) translateX(500px);
      opacity: 0;
    }
    100% {
      transform: translateZ(0) translateY(0) translateX(0);
      opacity: 1;
    }
  }

  @keyframes -global-slide-in-elliptic-top-fwd {
    0% {
      transform: translateY(-600px) rotateX(-30deg) scale(0);
      transform-origin: 50% 100%;
      opacity: 0;
    }
    100% {
      transform: translateY(0) rotateX(0) scale(1);
      transform-origin: 50% 1400px;
      opacity: 1;
    }
  }

  @keyframes -global-roll-in-left {
    0% {
      transform: translateX(-800px) rotate(-540deg);
      opacity: 0;
    }
    100% {
      transform: translateX(0) rotate(0deg);
      opacity: 1;
    }
  }

  @keyframes -global-roll-in-blurred-left {
    0% {
      transform: translateX(-1000px) rotate(-720deg);
      filter: blur(50px);
      opacity: 0;
    }
    100% {
      transform: translateX(0) rotate(0deg);
      filter: blur(0);
      opacity: 1;
    }
  }

  @keyframes -global-tilt-in-fwd-tr {
    0% {
      transform: rotateY(20deg) rotateX(35deg) translate(300px, -300px)
        skew(-35deg, 10deg);
      opacity: 0;
    }
    100% {
      transform: rotateY(0) rotateX(0deg) translate(0, 0) skew(0deg, 0deg);
      opacity: 1;
    }
  }

  @keyframes -global-swing-in-top-fwd {
    0% {
      transform: rotateX(-100deg);
      transform-origin: top;
      opacity: 0;
    }
    100% {
      transform: rotateX(0deg);
      transform-origin: top;
      opacity: 1;
    }
  }

  @keyframes -global-puff-in-center {
    0% {
      transform: scale(2);
      filter: blur(4px);
      opacity: 0;
    }
    100% {
      transform: scale(1);
      filter: blur(0px);
      opacity: 1;
    }
  }

  @keyframes -global-fade-in {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  /* EXITS */
  @keyframes -global-scale-out-center {
    0% {
      transform: scale(1);
      opacity: 1;
    }
    100% {
      transform: scale(0);
      opacity: 1;
    }
  }

  @keyframes -global-rotate-out-center {
    0% {
      transform: rotate(0);
      opacity: 1;
    }
    100% {
      transform: rotate(-360deg);
      opacity: 0;
    }
  }

  @keyframes -global-rotate-out-2-cw {
    0% {
      transform: rotate(0);
      opacity: 1;
    }
    100% {
      transform: rotate(45deg);
      opacity: 0;
    }
  }

  @keyframes -global-swirl-out-bck {
    0% {
      transform: rotate(0) scale(1);
      opacity: 1;
    }
    100% {
      transform: rotate(-540deg) scale(0);
      opacity: 0;
    }
  }

  @keyframes -global-flip-out-hor-top {
    0% {
      transform: rotateX(0);
      opacity: 1;
    }
    100% {
      transform: rotateX(70deg);
      opacity: 0;
    }
  }

  @keyframes -global-slide-out-top {
    0% {
      transform: translateY(0);
      opacity: 1;
    }
    100% {
      transform: translateY(-1000px);
      opacity: 0;
    }
  }

  @keyframes -global-slide-out-fwd-center {
    0% {
      transform: translateZ(1);
      opacity: 1;
    }
    100% {
      transform: translateZ(600px);
      opacity: 0;
    }
  }

  @keyframes -global-slide-out-elliptic-top-bck {
    0% {
      transform: translateY(0) rotateX(0) scale(1);
      transform-origin: 50% 1400px;
      opacity: 1;
    }
    100% {
      transform: translateY(-600px) rotateX(-30deg) scale(0);
      transform-origin: 50% 100%;
      opacity: 1;
    }
  }
</style>

<Navbar />
<main class="font-sans scroll-smooth">
  <!-- Intro -->
  <Motion let:motion>
    <Saos animation={"fade-in 4s cubic-bezier(0.35, 0.5, 0.65, 0.95) both"}>
      <section id="intro" use:motion class="relative min-h-screen flex items-center justify-center text-center px-4 text-white bg-gradient-to-bl from-[#0f0f11] via-[#1a1a1e] to-[#121212] overflow-hidden">        <!-- Background blobs -->
        <div class="absolute inset-0 z-0">
          <div class="w-72 h-72 bg-purple-500 opacity-30 blur-3xl rounded-full absolute top-20 left-1/4"></div>
          <div class="w-72 h-72 bg-pink-500 opacity-30 blur-3xl rounded-full absolute bottom-20 right-1/4"></div>
        </div>
        <!-- Foreground content -->
        <div class="z-10 flex flex-col items-center max-w-2xl">
          <img src="/profile.jpeg" alt="Shakeel Ahmad" class="w-32 h-32 rounded-full border-4 border-white shadow-lg mb-6" /> 
          <h1 class="text-5xl font-bold mb-4">Hi, I’m Shakeel Ahmad</h1>
          <p class="text-xl text-gray-300 mb-6">Senior Software Developer • Full Stack Engineer</p>
          <p class="text-md text-gray-400 leading-relaxed text-justify">
            I'm a full-stack developer with over 9 years of experience specializing in scalable web and mobile applications. I’ve led development of SaaS platforms, collaborated with design/backend teams, and worked extensively with JavaScript, React, Node.js, Docker, and Kubernetes. Currently based in Waterloo, Canada, I’m passionate about solving real-world problems in collaborative, fast-paced environments.
          </p>
          <a href="#contact" class="mt-6 inline-block px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-500 transition">
            Contact Me
          </a>
        </div>
      </section>
    </Saos>
  </Motion>
  <!-- Professional Experience -->
  <Motion let:motion>
    <Saos animation={"fade-in 4s cubic-bezier(0.35, 0.5, 0.65, 0.95) both"}>
      <section id="experience" use:motion class="relative min-h-screen flex flex-col justify-center px-6 py-12 text-white bg-gradient-to-br from-gray-800 via-gray-900 to-black overflow-hidden">
        
        <!-- Blurred gradient blobs for visual pop -->
        <div class="absolute inset-0 z-0">
          <div class="w-72 h-72 bg-blue-500 opacity-20 blur-3xl rounded-full absolute -top-10 left-10"></div>
          <div class="w-72 h-72 bg-teal-500 opacity-20 blur-3xl rounded-full absolute bottom-10 right-10"></div>
        </div>
    
        <!-- Content -->
        <div class="z-10 max-w-3xl mx-auto">
          <h2 class="text-3xl font-semibold mb-6 text-center">Professional Experience</h2>
          <ul class="space-y-4 text-gray-300 list-disc pl-6">
            <li><span class="font-semibold">9+ years in full-stack development</span> across web and mobile platforms</li>
            <li><span class="font-semibold">Contributed to development of scalable SaaS products alongside cross-functional teams</span></li>
            <li><span class="font-semibold">Specialized in JavaScript, TypeScript, Angular, React, Node.js</span>, and cross-platform tools like Cordova & React Native</li>
            <li>Delivered high-performance, responsive UIs in fast-paced, collaborative environments</li>
            <li>Experienced with Docker, Kubernetes, and microservices architecture</li>
            <li>Strong in caching strategies using Redis</li>
            <li>Proficient in Agile methodologies, Git, and CI/CD pipelines</li>
          </ul>
        </div>
      </section>
    </Saos>
  </Motion>
  <!-- Skills & Tools -->
  <Motion let:motion>
    <Saos animation={"fade-in 4s cubic-bezier(0.35, 0.5, 0.65, 0.95) both"}>
      <section id="skills" use:motion class="relative min-h-screen flex flex-col justify-center px-6 py-12 text-white bg-gradient-to-tr from-gray-900 via-slate-800 to-gray-950 overflow-hidden">
        <!-- Gradient blobs -->
        <div class="absolute inset-0 z-0">
          <div class="w-64 h-64 bg-indigo-500 opacity-20 blur-3xl rounded-full absolute -top-16 right-1/3"></div>
          <div class="w-64 h-64 bg-fuchsia-500 opacity-20 blur-3xl rounded-full absolute bottom-16 left-1/3"></div>
        </div>
        <!-- Content -->
        <div class="z-10 max-w-3xl mx-auto">
          <h2 class="text-3xl font-semibold mb-6 text-center">Skills & Expertise</h2>
          <ul class="space-y-4 text-gray-300 list-disc pl-6">
            <li><span class="font-semibold">Languages:</span> JavaScript, TypeScript</li>
            <li><span class="font-semibold">Frontend Frameworks:</span> React, AngularJS, Next.js, Redux</li>
            <li><span class="font-semibold">Mobile Development:</span> React Native, Cordova, Capacitor, Phonegap</li>
            <li><span class="font-semibold">Backend:</span> Node.js, NestJS, Express.js</li>
            <li><span class="font-semibold">Databases:</span> MongoDB, PostgreSQL, MySQL</li>
            <li><span class="font-semibold">DevOps & Infrastructure:</span> Docker, Kubernetes, Redis</li>
            <li><span class="font-semibold">Tools & Methodologies:</span> Git, Jira, Slack, WebStorm, VS Code, Agile (Scrum/Kanban), TDD, CI/CD</li>
          </ul>
        </div>
      </section>
    </Saos>
  </Motion>
   <!-- Education -->
   <Motion let:motion>
    <Saos animation={"fade-in 4s cubic-bezier(0.35, 0.5, 0.65, 0.95) both"}>
      <section id="education" use:motion class="relative min-h-screen flex flex-col justify-center px-6 py-12 text-white bg-gradient-to-r from-slate-900 via-gray-800 to-slate-950 overflow-hidden">
        
        <!-- Background Blobs -->
        <div class="absolute inset-0 z-0">
          <div class="w-60 h-60 bg-cyan-400 opacity-20 blur-3xl rounded-full absolute top-16 left-1/4"></div>
          <div class="w-60 h-60 bg-sky-500 opacity-20 blur-3xl rounded-full absolute bottom-20 right-1/4"></div>
        </div>
    
        <!-- Content -->
        <div class="z-10 max-w-3xl mx-auto">
          <h2 class="text-3xl font-semibold mb-6 text-center">Background & Certifications</h2>
          <ul class="list-disc pl-6 space-y-4 text-gray-300">
            <li><span class="font-semibold">BS in Computer Science</span> – Forman Christian College, Lahore (2011–2015)</li>
            <li><span class="font-semibold">Big Data Solution Architecture</span> – Conestoga College, Waterloo, ON (2021)</li>
            <li><span class="font-semibold">AWS Certified Cloud Practitioner</span> (2024)</li>
          </ul>
        </div>
      </section>
    </Saos>
  </Motion>
  <!-- Employment History -->
  <Motion let:motion>
    <Saos animation={"fade-in 4s cubic-bezier(0.35, 0.5, 0.65, 0.95) both"}>
      <section id="employment" use:motion class="relative min-h-screen flex flex-col justify-center px-6 py-12 text-white bg-gradient-to-tr from-gray-950 via-zinc-900 to-black overflow-hidden">
        
        <!-- Gradient blobs -->
        <div class="absolute inset-0 z-0">
          <div class="w-72 h-72 bg-purple-600 opacity-20 blur-3xl rounded-full absolute top-16 left-1/4"></div>
          <div class="w-72 h-72 bg-emerald-500 opacity-20 blur-3xl rounded-full absolute bottom-10 right-1/4"></div>
        </div>

        <!-- Content -->
        <div class="z-10 max-w-6xl mx-auto">
          <h1 class="text-3xl font-semibold mb-8 text-center">Employment</h1>
          <div class="grid md:grid-cols-2 gap-8">
            <div class="bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 class="text-xl font-bold">Senior Software Developer | FieldFlex | Ottawa, ON</h3>
              <h5 class="text-l text-gray-400 mt-1">03/2022 - Present</h5>
              <ul class="list-disc pl-5 mt-2 text-gray-300 space-y-1">
                <li>Built cross-platform mobile/desktop apps with Cordova</li>
                <li>Designed reusable UI modules & backend integrations</li>
                <li>Deployed apps to Play Store and App Store</li>
              </ul>
            </div>

            <div class="bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 class="text-xl font-bold">Senior Software Developer | Barventory | Hamilton, ON</h3>
              <h5 class="text-l text-gray-400 mt-1">01/2021 - 03/2022</h5>
              <ul class="list-disc pl-5 mt-2 text-gray-300 space-y-1">
                <li>Built React Native apps, deployed to mobile stores</li>
                <li>Integrated dynamic APIs and managed Redux state</li>
              </ul>
            </div>

            <div class="bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 class="text-xl font-bold">Lead Software Developer | Devigital Systems | Lahore, PK</h3>
              <h5 class="text-l text-gray-400 mt-1">06/2020 - 12/2020</h5>
              <ul class="list-disc pl-5 mt-2 text-gray-300 space-y-1">
                <li>Led development & backend API design using Node.js, NestJS</li>
                <li>Mentored junior developers & authored technical docs</li>
              </ul>
            </div>

            <div class="bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 class="text-xl font-bold">Senior Software Developer | Barventory | Remote</h3>
              <h5 class="text-l text-gray-400 mt-1">06/2019 - 06/2020</h5>
              <ul class="list-disc pl-5 mt-2 text-gray-300 space-y-1">
                <li>Developed mobile architecture with Cordova and APIs</li>
                <li>Improved system performance and UX with optimizations</li>
              </ul>
            </div>

            <div class="bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 class="text-xl font-bold">Software Engineer | Devigital Systems | Lahore, PK</h3>
              <h5 class="text-l text-gray-400 mt-1">06/2015 - 05/2019</h5>
              <ul class="list-disc pl-5 mt-2 text-gray-300 space-y-1">
                <li>Built responsive APIs and frontend interfaces</li>
                <li>Integrated third-party tools and improved performance</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Saos>
  </Motion>
  <!-- Contact -->
  <Motion let:motion>
    <Saos animation={"fade-in 4s cubic-bezier(0.35, 0.5, 0.65, 0.95) both"}>
      <section id="contact" use:motion class="relative min-h-screen flex flex-col justify-center px-4 py-12 text-white bg-gradient-to-bl from-gray-900 via-zinc-800 to-black overflow-hidden text-center">
        
        <!-- Blurred background elements -->
        <div class="absolute inset-0 z-0">
          <div class="w-64 h-64 bg-pink-500 opacity-20 blur-3xl rounded-full absolute top-16 left-1/4"></div>
          <div class="w-64 h-64 bg-indigo-500 opacity-20 blur-3xl rounded-full absolute bottom-20 right-1/4"></div>
        </div>
    
        <!-- Foreground content -->
        <div class="z-10 max-w-xl mx-auto">
          <h2 class="text-3xl font-semibold mb-4">Contact</h2>
          <p class="mb-4 text-gray-300">Let’s build something great together — I’d love to hear from you.</p>
          <ul class="space-y-2 text-lg">
            <li>📧 <a href="mailto:sahmadpk94@gmail.com" class="text-blue-400 underline">sahmadpk94@gmail.com</a></li>
            <li>📞 +1-226-220-5300</li>
            <li>🌐 <a href="https://www.linkedin.com/in/shakeelahmadfc" class="text-blue-400 underline" target="_blank">LinkedIn Profile</a></li>
          </ul>
        </div>
      </section>
    </Saos>
  </Motion>
</main>