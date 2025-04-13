<script lang="ts">
  import Navbar from './components/Navbar.svelte';
  import { Motion } from 'svelte-motion';
  import Icon from '@iconify/svelte';
  import Saos from 'saos';
</script>

<div class="portfolio-app bg-gradient-to-b from-gray-900 to-black text-white min-h-screen">
  <div class="max-w-screen-xl mx-auto flex flex-col lg:flex-row w-full">
    <aside class="w-full lg:w-[40%] px-6 pt-12 pb-12 flex flex-col justify-between
              lg:sticky lg:top-0 lg:h-screen lg:pt-24 lg:pb-24">

      <!-- Top Section: Profile, Description, and Navbar -->
      <div>
        <!-- Profile Section -->
        <div class="flex flex-col lg:flex-row items-center lg:items-start gap-4">
          <img
            src="/profile.jpeg"
            alt="Shakeel Ahmad"
            class="w-20 h-20 rounded-full border-2 border-white shadow"
          />
          <div class="flex flex-col text-center lg:text-left items-center lg:items-start">
            <h1 class="text-2xl font-bold mt-2 lg:mt-0 mb-2">Shakeel Ahmad</h1>
            <p class="text-gray-400 text-sm">Full Stack JavaScript Engineer</p>
          </div>
        </div>

        <!-- Description -->
        <p class="text-sm text-gray-400 mt-4 leading-normal text-justify max-w-xs mx-auto lg:mx-0">
          I build full-stack JavaScript solutions that power responsive, cross-platform experiences.
        </p>

        <!-- Navbar: visible in both views -->
        <div class="hidden lg:block mt-6">
          <Navbar />
        </div>
      </div>

      <!-- Always-at-Bottom Contact Icons -->
      <div class="flex justify-center lg:justify-start gap-4 pt-6 text-teal-300">
        <a
          href="https://www.linkedin.com/in/shakeelahmadfc"
          target="_blank"
          class="hover:text-teal-300 transition"
          aria-label="LinkedIn"
        >
          <Icon icon="mdi:linkedin" class="w-6 h-6" />
        </a>
        <a
          href="mailto:sahmadpk94@gmail.com"
          class="hover:text-teal-300 transition"
          aria-label="Email"
        >
          <Icon icon="mdi:email" class="w-6 h-6" />
        </a>
        <a
          href="tel:+12262205300"
          class="hover:text-teal-300 transition"
          aria-label="Phone"
        >
          <Icon icon="mdi:phone" class="w-6 h-6" />
        </a>
      </div>
    </aside>
    <main class="w-full lg:w-[60%] px-6 lg:px-24 pt-12 lg:pt-24">
      <!-- About Section -->
      <Motion let:motion>
        <Saos animation={"fade-in 4s cubic-bezier(0.35, 0.5, 0.65, 0.95) both"}>
          <section id="about" use:motion class="pb-16">
            <h2 class="text-4xl font-bold text-white pb-6">About</h2>
            <p class="w-full text-md text-gray-400 leading-relaxed text-justify">
              I'm a full-stack developer with over 9 years of experience specializing in scalable web and mobile applications.
              My core strengths lie in JavaScript, TypeScript, React, Node.js, and cross-platform mobile development using tools like React Native and Cordova.
              I’ve led the development of several SaaS products, working closely with design and backend teams to deliver responsive, high-performance applications.
              I also have hands-on experience with Docker, Kubernetes, and microservices architecture.
              Currently based in Waterloo, Canada, I’m passionate about creating clean, efficient solutions that solve real-world problems—especially in collaborative, fast-paced environments.
            </p>
          </section>
        </Saos>
      </Motion>

      <!-- Education -->
      <Motion let:motion>
        <Saos animation={"fade-in 4s cubic-bezier(0.35, 0.5, 0.65, 0.95) both"}>
          <section id="education" use:motion class="relative py-16 text-white overflow-hidden">
            <div class="z-10 max-w-3xl mx-auto">
              <h2 class="text-4xl font-bold text-white pb-6">Background</h2>
              <ul class="list-disc pl-6 space-y-4 text-gray-300">
                <li><span class="font-light">AWS Certified Cloud Practitioner</span> (2024)</li>
                <li><span class="font-light">Big Data Solution Architecture</span> – Conestoga College, Waterloo, ON (2021)</li>
                <li><span class="font-light">BS in Computer Science</span> – Forman Christian College, Lahore (2011–2015)</li>
              </ul>
            </div>
          </section>
        </Saos>
      </Motion>

      <Motion let:motion>
        <Saos animation={"fade-in 4s cubic-bezier(0.35, 0.5, 0.65, 0.95) both"}>
          <section id="experience" use:motion class="relative py-16 text-white overflow-hidden">
            <div class="z-10 max-w-3xl mx-auto">
              <h2 class="text-4xl font-bold text-white pb-6">Experience & Skills</h2>
              
              <!-- Experience List -->
              <ul class="space-y-4 text-gray-300 list-disc pl-6 mb-8">
                <li><span class="font-light">9+ years in full-stack development</span> across web and mobile platforms</li>
                <li><span class="font-light">5+ years of professional experience in Canada</span>, contributing to enterprise-level applications and cross-functional teams</li>
                <li><span class="font-light">Contributed to development of scalable SaaS products alongside cross-functional teams</span></li>
                <li><span class="font-light">Specialized in JavaScript, TypeScript, Angular, React, Node.js</span>, and cross-platform tools like Cordova & React Native</li>
                <li>Delivered high-performance, responsive UIs in fast-paced, collaborative environments</li>
                <li>Experienced with Docker, Kubernetes, and microservices architecture</li>
                <li>Strong in caching strategies using Redis</li>
                <li>Proficient in Agile methodologies, Git, and CI/CD pipelines</li>
              </ul>
      
              <!-- Skills Tags -->
              <div class="flex flex-wrap gap-2" aria-label="Technologies used">
                {#each [
                  'JavaScript', 'TypeScript', 'React', 'AngularJS', 'Next.js', 'Redux',
                  'React Native', 'Cordova', 'Capacitor', 'Phonegap',
                  'Node.js', 'NestJS', 'Express.js',
                  'MongoDB', 'PostgreSQL', 'MySQL',
                  'Docker', 'Kubernetes', 'Redis',
                  'Git', 'Jira', 'Slack', 'WebStorm', 'VS Code', 'Agile', 'CI/CD'
                ] as tech}
                  <div class="bg-teal-400/10 text-teal-300 text-xs font-medium px-3 py-1 rounded-full">
                    {tech}
                  </div>
                {/each}
              </div>
            </div>
          </section>
        </Saos>
      </Motion>

      <!-- Employment History -->
      <Motion let:motion>
        <Saos animation={"fade-in 4s cubic-bezier(0.35, 0.5, 0.65, 0.95) both"}>
          <section id="employment" use:motion class="relative py-16 text-white overflow-hidden">
            <div class="z-10 max-w-3xl mx-auto">
              <h1 class="text-4xl font-bold text-white pb-6">Employment</h1>

              <ol class="group/list space-y-12">
                <!-- FieldFlex -->
                <li class="group relative grid sm:grid-cols-8 sm:gap-8 md:gap-4 transition-all">
                  <div class="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition lg:-inset-x-6 lg:block 
                              lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] 
                              lg:group-hover:drop-shadow-lg"></div>

                  <header class="z-10 text-xs font-light uppercase tracking-wide text-slate-500 sm:col-span-2 mt-1 mb-2">
                    03/2022 – Present
                  </header>

                  <div class="z-10 sm:col-span-6">
                    <h3 class="font-medium leading-snug text-slate-200 text-base">
                      <span>
                        Senior Software Developer ·
                        <a
                          href="https://www.fieldflex.com"
                          class="inline-block text-teal-300 hover:text-teal-400 transition"
                          target="_blank"
                          rel="noreferrer noopener"
                          aria-label="Visit FieldFlex website (opens in new tab)"
                        >
                          FieldFlex
                        </a>
                      </span>
                    </h3>
                    <p class="mt-2 text-sm leading-normal text-gray-400 text-justify">
                      Led the development and deployment of cross-platform mobile and desktop applications using Cordova and JavaScript. 
                      Built modular, reusable UI components in Vue.js and integrated them with backend services powered by Node.js RESTful APIs. 
                      Ensured high performance and seamless user experiences across Android, iOS, and Windows platforms. Collaborated with 
                      cross-functional teams to deliver scalable, workflow-optimized solutions.
                    </p>
                    <ul class="mt-2 flex flex-wrap">
                      <li class="mr-1.5 mt-2"><div class="bg-teal-400/10 text-teal-300 text-xs px-3 py-1 rounded-full">Cordova</div></li>
                      <li class="mr-1.5 mt-2"><div class="bg-teal-400/10 text-teal-300 text-xs px-3 py-1 rounded-full">Vue.js</div></li>
                      <li class="mr-1.5 mt-2"><div class="bg-teal-400/10 text-teal-300 text-xs px-3 py-1 rounded-full">JavaScript</div></li>
                      <li class="mr-1.5 mt-2"><div class="bg-teal-400/10 text-teal-300 text-xs px-3 py-1 rounded-full">Node.js</div></li>
                      <li class="mr-1.5 mt-2"><div class="bg-teal-400/10 text-teal-300 text-xs px-3 py-1 rounded-full">REST API</div></li>
                      <li class="mr-1.5 mt-2">
                        <div class="bg-teal-400/10 text-teal-300 text-xs px-3 py-1 rounded-full">Cross-Platform</div>
                      </li>
                      <li class="mr-1.5 mt-2">
                        <div class="bg-teal-400/10 text-teal-300 text-xs px-3 py-1 rounded-full">Mobile</div>
                      </li>
                      <li class="mr-1.5 mt-2">
                        <div class="bg-teal-400/10 text-teal-300 text-xs px-3 py-1 rounded-full">Play Store / App Store</div>
                      </li>
                      <li class="mr-1.5 mt-2"><div class="bg-teal-400/10 text-teal-300 text-xs px-3 py-1 rounded-full">UI Components</div></li>
                    </ul>
                  </div>
                </li>

                <!-- Barventory 2021–2022 -->
                <li class="group relative grid sm:grid-cols-8 sm:gap-8 md:gap-4 transition-all">
                  <div class="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition lg:-inset-x-6 lg:block 
                              lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] 
                              lg:group-hover:drop-shadow-lg"></div>

                  <header class="z-10 text-xs font-light uppercase tracking-wide text-slate-500 sm:col-span-2 mt-1 mb-2">
                    01/2021 – 03/2022
                  </header>

                  <div class="z-10 sm:col-span-6">
                    <h3 class="font-medium leading-snug text-slate-200 text-base">
                      <span>
                        Senior Software Developer · 
                        <a
                          href="https://www.barventory.com/"
                          class="inline-block text-teal-300 hover:text-teal-400 transition"
                          target="_blank"
                          rel="noreferrer noopener"
                          aria-label="Visit Barventory website (opens in new tab)"
                        >
                        Barventory
                        </a>
                      </span>
                    </h3>
                    <p class="mt-2 text-sm leading-normal text-gray-400 text-justify">
                      Designed, developed, and deployed cross-platform mobile applications using React Native for Android and iOS. 
                      Built reusable components and integrated dynamic APIs, enhancing app performance and scalability. Implemented 
                      Redux with Saga middleware for state and async task management. Collaborated closely with stakeholders to translate 
                      business needs into efficient, maintainable solutions using modern JavaScript (ES6) best practices.
                    </p>
                    <ul class="mt-2 flex flex-wrap">
                      <li class="mr-1.5 mt-2">
                        <div class="bg-teal-400/10 text-teal-300 text-xs px-3 py-1 rounded-full">React Native</div>
                      </li>
                      <li class="mr-1.5 mt-2">
                        <div class="bg-teal-400/10 text-teal-300 text-xs px-3 py-1 rounded-full">Redux</div>
                      </li>
                      <li class="mr-1.5 mt-2">
                        <div class="bg-teal-400/10 text-teal-300 text-xs px-3 py-1 rounded-full">Redux Saga</div>
                      </li>
                      <li class="mr-1.5 mt-2">
                        <div class="bg-teal-400/10 text-teal-300 text-xs px-3 py-1 rounded-full">JavaScript</div>
                      </li>
                      <li class="mr-1.5 mt-2">
                        <div class="bg-teal-400/10 text-teal-300 text-xs px-3 py-1 rounded-full">ES6</div>
                      </li>
                      <li class="mr-1.5 mt-2">
                        <div class="bg-teal-400/10 text-teal-300 text-xs px-3 py-1 rounded-full">API Integration</div>
                      </li>
                      <li class="mr-1.5 mt-2">
                        <div class="bg-teal-400/10 text-teal-300 text-xs px-3 py-1 rounded-full">Cross-Platform</div>
                      </li>
                      <li class="mr-1.5 mt-2">
                        <div class="bg-teal-400/10 text-teal-300 text-xs px-3 py-1 rounded-full">Mobile</div>
                      </li>
                      <li class="mr-1.5 mt-2">
                        <div class="bg-teal-400/10 text-teal-300 text-xs px-3 py-1 rounded-full">Play Store / App Store</div>
                      </li>
                    </ul>
                  </div>
                </li>

                <!-- Devigital Systems (Lead) -->
                <li class="group relative grid sm:grid-cols-8 sm:gap-8 md:gap-4 transition-all">
                  <div class="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition lg:-inset-x-6 lg:block 
                              lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] 
                              lg:group-hover:drop-shadow-lg"></div>

                  <header class="z-10 text-xs font-light uppercase tracking-wide text-slate-500 sm:col-span-2 mt-1 mb-2">
                    06/2020 – 12/2020
                  </header>

                  <div class="z-10 sm:col-span-6">
                    <h3 class="font-medium leading-snug text-slate-200 text-base">
                      <span>
                        Lead Software Developer ·
                        <a
                          href="https://devigital.com/"
                          class="inline-block text-teal-300 hover:text-teal-400 transition"
                          target="_blank"
                          rel="noreferrer noopener"
                          aria-label="Visit Devigital website (opens in new tab)"
                        >
                          Devigital Systems
                        </a>
                      </span>
                    </h3>
                    <p class="mt-2 text-sm leading-normal text-gray-400 text-justify">
                      Led a full-stack development team to deliver scalable, high-quality applications ahead of schedule. 
                      Architected and integrated RESTful APIs using Node.js and NestJS, while mentoring junior developers and 
                      resolving design bottlenecks. Collaborated directly with clients to refine project scopes and align technical solutions with business goals. 
                      Authored clear technical documentation and ensured seamless integration of backend systems with frontend interfaces built using React and TypeScript.
                    </p>
                    <ul class="mt-2 flex flex-wrap">
                      <li class="mr-1.5 mt-2">
                        <div class="bg-teal-400/10 text-teal-300 text-xs px-3 py-1 rounded-full">Node.js</div>
                      </li>
                      <li class="mr-1.5 mt-2">
                        <div class="bg-teal-400/10 text-teal-300 text-xs px-3 py-1 rounded-full">NestJS</div>
                      </li>
                      <li class="mr-1.5 mt-2">
                        <div class="bg-teal-400/10 text-teal-300 text-xs px-3 py-1 rounded-full">TypeScript</div>
                      </li>
                      <li class="mr-1.5 mt-2">
                        <div class="bg-teal-400/10 text-teal-300 text-xs px-3 py-1 rounded-full">React</div>
                      </li>
                      <li class="mr-1.5 mt-2">
                        <div class="bg-teal-400/10 text-teal-300 text-xs px-3 py-1 rounded-full">REST APIs</div>
                      </li>
                      <li class="mr-1.5 mt-2">
                        <div class="bg-teal-400/10 text-teal-300 text-xs px-3 py-1 rounded-full">Leadership</div>
                      </li>
                      <li class="mr-1.5 mt-2">
                        <div class="bg-teal-400/10 text-teal-300 text-xs px-3 py-1 rounded-full">Mentorship</div>
                      </li>
                      <li class="mr-1.5 mt-2">
                        <div class="bg-teal-400/10 text-teal-300 text-xs px-3 py-1 rounded-full">Backend</div>
                      </li>
                      <li class="mr-1.5 mt-2">
                        <div class="bg-teal-400/10 text-teal-300 text-xs px-3 py-1 rounded-full">System Integration</div>
                      </li>
                      <li class="mr-1.5 mt-2">
                        <div class="bg-teal-400/10 text-teal-300 text-xs px-3 py-1 rounded-full">Documentation</div>
                      </li>
                    </ul>
                  </div>
                </li>

                <!-- Barventory (Remote) -->
                <li class="group relative grid sm:grid-cols-8 sm:gap-8 md:gap-4 transition-all">
                  <div class="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition lg:-inset-x-6 lg:block 
                              lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] 
                              lg:group-hover:drop-shadow-lg"></div>

                  <header class="z-10 text-xs font-light uppercase tracking-wide text-slate-500 sm:col-span-2 mt-1 mb-2">
                    06/2019 – 06/2020
                  </header>

                  <div class="z-10 sm:col-span-6">
                    <h3 class="font-medium leading-snug text-slate-200 text-base">
                      <span>
                        Senior Software Developer · 
                        <a
                          href="https://www.barventory.com/"
                          class="inline-block text-teal-300 hover:text-teal-400 transition"
                          target="_blank"
                          rel="noreferrer noopener"
                          aria-label="Visit Barventory website (opens in new tab)"
                        >
                        Barventory
                        </a>
                      </span>
                    </h3>
                    <p class="mt-2 text-sm leading-normal text-gray-400 text-justify">
                      Engineered cross-platform mobile applications using JavaScript and Cordova, enabling consistent performance across iOS and Android.
                       Architected and integrated scalable APIs that streamlined mobile-backend communication. Collaborated with UX designers to enhance 
                       mobile interfaces and delivered seamless third-party API integrations, expanding product functionality. Led technical solutioning 
                       for business requirements, improving project efficiency and user satisfaction.
                    </p>
                    <ul class="mt-2 flex flex-wrap">
                      <li class="mr-1.5 mt-2">
                        <div class="bg-teal-400/10 text-teal-300 text-xs px-3 py-1 rounded-full">JavaScript</div>
                      </li>
                      <li class="mr-1.5 mt-2">
                        <div class="bg-teal-400/10 text-teal-300 text-xs px-3 py-1 rounded-full">Cordova</div>
                      </li>
                      <li class="mr-1.5 mt-2">
                        <div class="bg-teal-400/10 text-teal-300 text-xs px-3 py-1 rounded-full">Cross-Platform</div>
                      </li>
                      <li class="mr-1.5 mt-2">
                        <div class="bg-teal-400/10 text-teal-300 text-xs px-3 py-1 rounded-full">API Integration</div>
                      </li>
                      <li class="mr-1.5 mt-2">
                        <div class="bg-teal-400/10 text-teal-300 text-xs px-3 py-1 rounded-full">UX</div>
                      </li>
                      <li class="mr-1.5 mt-2">
                        <div class="bg-teal-400/10 text-teal-300 text-xs px-3 py-1 rounded-full">Mobile</div>
                      </li>
                      <li class="mr-1.5 mt-2">
                        <div class="bg-teal-400/10 text-teal-300 text-xs px-3 py-1 rounded-full">Scalability</div>
                      </li>
                    </ul>
                  </div>
                </li>

                <!-- Devigital Systems (Software Engineer) -->
                <li class="group relative grid sm:grid-cols-8 sm:gap-8 md:gap-4 transition-all">
                  <div class="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition lg:-inset-x-6 lg:block 
                              lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] 
                              lg:group-hover:drop-shadow-lg"></div>

                  <header class="z-10 text-xs font-light uppercase tracking-wide text-slate-500 sm:col-span-2 mt-1 mb-2">
                    06/2015 – 05/2019
                  </header>

                  <div class="z-10 sm:col-span-6">
                    <h3 class="font-medium leading-snug text-slate-200 text-base">
                      <span>
                        Software Engineer · 
                        <a
                          href="https://devigital.com/"
                          class="inline-block text-teal-300 hover:text-teal-400 transition"
                          target="_blank"
                          rel="noreferrer noopener"
                          aria-label="Visit Devigital website (opens in new tab)"
                        >
                          Devigital Systems
                        </a>
                      </span>
                    </h3>
                    <p class="mt-2 text-sm leading-normal text-gray-400">
                      As a Software Engineer, developed full-stack features using Angular on the frontend and Node.js for backend services.
                       Designed responsive UI and API interfaces by collaborating closely with UX and mobile developers. 
                       Delivered robust, scalable applications by integrating third-party tools and RESTful APIs. Emphasized clean code, 
                       unit testing, and automation to improve product quality and reduce bugs across multiple projects. Advocated best practices
                        throughout the dev team, reducing technical debt and improving long-term maintainability.
                    </p>
                    <ul class="mt-2 flex flex-wrap">
                      <li class="mr-1.5 mt-2">
                        <div class="bg-teal-400/10 text-teal-300 text-xs px-3 py-1 rounded-full">Angular</div>
                      </li>
                      <li class="mr-1.5 mt-2">
                        <div class="bg-teal-400/10 text-teal-300 text-xs px-3 py-1 rounded-full">Node.js</div>
                      </li>
                      <li class="mr-1.5 mt-2">
                        <div class="bg-teal-400/10 text-teal-300 text-xs px-3 py-1 rounded-full">REST API</div>
                      </li>
                      <li class="mr-1.5 mt-2">
                        <div class="bg-teal-400/10 text-teal-300 text-xs px-3 py-1 rounded-full">JavaScript</div>
                      </li>
                      <li class="mr-1.5 mt-2">
                        <div class="bg-teal-400/10 text-teal-300 text-xs px-3 py-1 rounded-full">Unit Testing</div>
                      </li>
                      <li class="mr-1.5 mt-2">
                        <div class="bg-teal-400/10 text-teal-300 text-xs px-3 py-1 rounded-full">UX</div>
                      </li>
                      <li class="mr-1.5 mt-2">
                        <div class="bg-teal-400/10 text-teal-300 text-xs px-3 py-1 rounded-full">Third-Party Integrations</div>
                      </li>
                      <li class="mr-1.5 mt-2">
                        <div class="bg-teal-400/10 text-teal-300 text-xs px-3 py-1 rounded-full">Automation</div>
                      </li>
                      <li class="mr-1.5 mt-2">
                        <div class="bg-teal-400/10 text-teal-300 text-xs px-3 py-1 rounded-full">Best Practices</div>
                      </li>
                    </ul>
                  </div>
                </li>
              </ol>
            </div>
          </section>
        </Saos>
        <footer class="max-w-3xl mx-auto px-6 pt-12 pb-24 text-sm text-slate-500 text-center">
          <p>
            Designed with intention and built in 
            <a href="https://svelte.dev/" class="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300" target="_blank" rel="noreferrer noopener" aria-label="Svelte (opens in a new tab)">Svelte</a> 
            using 
            <a href="https://tailwindcss.com/" class="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300" target="_blank" rel="noreferrer noopener" aria-label="Tailwind CSS (opens in a new tab)">Tailwind CSS</a> 
            and animated with 
            <a href="https://motion.dev/" class="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300" target="_blank" rel="noreferrer noopener" aria-label="Motion One (opens in a new tab)">Motion One</a>.
            Coded in 
            <a href="https://code.visualstudio.com/" class="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300" target="_blank" rel="noreferrer noopener" aria-label="VS Code (opens in a new tab)">VS Code</a> 
            and deployed on 
            <a href="https://pages.github.com/" class="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300" target="_blank" rel="noreferrer noopener" aria-label="GitHub Pages (opens in a new tab)">GitHub Pages</a>.
          </p>
          <p class="mt-4">
            Based in <span class="text-slate-400 font-medium">Ontario</span>, and currently open to job opportunities — ideally in 
            <span class="text-teal-300 font-medium">Canada</span> or the <span class="text-teal-300 font-medium">United States</span>.
          </p>
        </footer>
      </Motion>

      <slot />
    </main>
  </div>
</div>

<style>
  .portfolio-app {
    min-height: 100vh;
  }
  section {
    scroll-margin-top: 100px; /* or adjust based on your header height */
  }
</style>