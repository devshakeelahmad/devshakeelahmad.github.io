<script lang="ts">
  import Navbar from "./components/Navbar.svelte";
  import { Motion } from "svelte-motion";
  import Icon from "@iconify/svelte";
  import Saos from "saos";
</script>

<div class="portfolio-app bg-gray-900 text-white min-h-screen">
  <div class="max-w-screen-xl mx-auto flex flex-col lg:flex-row w-full">
    <aside
      class="w-full lg:w-[40%] px-6 pt-12 pb-12 flex flex-col justify-between
              lg:sticky lg:top-0 lg:h-screen lg:pt-24 lg:pb-24"
    >
      <!-- Top Section: Profile, Description, and Navbar -->
      <div>
        <!-- Profile Section -->
        <div
          class="flex flex-col lg:flex-row items-center lg:items-start gap-4"
        >
          <img
            src="/profile.jpeg"
            alt="Shakeel Ahmad"
            class="w-20 h-20 rounded-full border-2 border-white shadow"
          />
          <div
            class="flex flex-col text-center lg:text-left items-center lg:items-start"
          >
            <h1 class="text-2xl font-bold mt-2 lg:mt-0 mb-2">Shakeel Ahmad</h1>
            <p class="text-gray-400 text-sm">Full Stack JavaScript Engineer</p>
            <p class="text-gray-400 text-xs">
              BSc Computer Science | AWS Certified
            </p>
          </div>
        </div>

        <!-- Description -->
        <p
          class="text-sm text-gray-400 mt-4 leading-normal text-justify max-w-xs mx-auto lg:mx-0"
        >
          I build full-stack JavaScript solutions that power responsive,
          cross-platform experiences.
        </p>

        <!-- Navbar: visible in both views -->
        <div class="hidden lg:block mt-6">
          <Navbar />
        </div>
      </div>

      <!-- Always-at-Bottom Contact Icons -->
      <div
        class="flex justify-center lg:justify-start gap-4 pt-6 text-teal-300"
      >
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
            <p
              class="w-full text-md text-gray-400 leading-relaxed text-justify"
            >
              I'm a full-stack developer with over 9 years of experience
              specializing in scalable web and mobile applications. My core
              strengths lie in JavaScript, TypeScript, React, Node.js, and
              cross-platform mobile development using tools like React Native
              and Cordova. I’ve led the development of several SaaS products,
              working closely with design and backend teams to deliver
              responsive, high-performance applications. I also have hands-on
              experience with Docker, Kubernetes, and microservices
              architecture. Currently based in Waterloo, Canada, I’m passionate
              about creating clean, efficient solutions that solve real-world
              problems—especially in collaborative, fast-paced environments.
            </p>
          </section>
        </Saos>
      </Motion>

      <!-- Skills and expertise -->
      <Motion let:motion>
        <Saos animation={"fade-in 4s cubic-bezier(0.35, 0.5, 0.65, 0.95) both"}>
          <section
            id="experience"
            use:motion
            class="relative py-16 text-white overflow-hidden"
          >
            <div class="z-10 max-w-3xl mx-auto">
              <h2 class="text-4xl font-bold text-white pb-6">
                Experience & Skills
              </h2>

              <!-- Experience Summary -->
              <ul class="space-y-4 text-gray-300 list-disc pl-6 mb-8">
                <li>
                  <span class="font-light"
                    >9+ years in full-stack development</span
                  > across web and mobile platforms
                </li>
                <li>
                  <span class="font-light"
                    >5+ years of professional experience in Canada</span
                  >, contributing to enterprise-level applications and
                  cross-functional teams
                </li>
                <li>
                  <span class="font-light"
                    >Built and deployed scalable SaaS and mobile applications</span
                  > with modern UI frameworks
                </li>
                <li>
                  <span class="font-light"
                    >Skilled in DevOps, CI/CD, Docker, Kubernetes, and
                    microservices</span
                  > for efficient delivery
                </li>
                <li>
                  <span class="font-light"
                    >Comfortable working in Agile teams with strong
                    collaboration and code review culture</span
                  >
                </li>
              </ul>

              <!-- Categorized Skills -->
              <ul class="space-y-4 text-gray-300 list-disc pl-6 mb-8">
                <li>
                  <span class="font-semibold">Programming Languages:</span> JavaScript,
                  TypeScript
                </li>
                <li>
                  <span class="font-semibold">Frontend & Frameworks:</span> React.js,
                  React Native, Angular, Vue.js
                </li>
                <li>
                  <span class="font-semibold">Backend & APIs:</span> Node.js, NestJS,
                  Express.js, REST APIs, API Integration
                </li>
                <li>
                  <span class="font-semibold">Databases:</span> PostgreSQL, MongoDB,
                  MySQL
                </li>
                <li>
                  <span class="font-semibold">DevOps & Tools:</span> Docker, CI/CD,
                  Git, GitHub, AWS (EC2, S3), Google Play Console, App Store
                </li>
                <li>
                  <span class="font-semibold">Mobile & Hybrid:</span> Cordova, Android,
                  iOS, Windows App Development
                </li>
                <li>
                  <span class="font-semibold">Process & Methodology:</span> Agile,
                  Scrum, Kanban, TDD, Peer Reviews
                </li>
              </ul>

              <!-- Trimmed Skill Tags -->
              <div class="flex flex-wrap gap-2" aria-label="Core Technologies">
                {#each ["JavaScript", "TypeScript", "React", "Node.js", "NestJS", "React Native", "Cordova", "Docker", "PostgreSQL", "MongoDB", "CI/CD", "Git", "AWS", "REST APIs", "Agile"] as tech}
                  <div
                    class="bg-teal-400/10 text-teal-300 text-xs font-medium px-3 py-1 rounded-full"
                  >
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
          <section
            id="employment"
            use:motion
            class="relative py-16 text-white overflow-hidden"
          >
            <div class="z-10 max-w-3xl mx-auto">
              <h1 class="text-4xl font-bold text-white pb-6">Employment</h1>

              <ol class="group/list space-y-12">
                <!-- FieldFlex -->
                <li
                  class="group relative grid sm:grid-cols-8 sm:gap-8 md:gap-4 transition-all"
                >
                  <div
                    class="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition lg:-inset-x-6 lg:block
            lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)]
            lg:group-hover:drop-shadow-lg"
                  ></div>

                  <header
                    class="z-10 text-xs font-light uppercase tracking-wide text-slate-500 sm:col-span-2 mt-1 mb-2"
                  >
                    Mar 2022 – Present
                  </header>

                  <div class="z-10 sm:col-span-6">
                    <h3
                      class="font-medium leading-snug text-slate-200 text-base"
                    >
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
                    <p
                      class="mt-2 text-sm leading-normal text-gray-400 text-justify"
                    >
                      Developed and maintained cross-platform mobile and desktop
                      applications using Cordova, React Native, and JavaScript,
                      supporting Android, iOS, and Windows platforms. Designed
                      and implemented reusable UI modules and backend
                      integrations, improving code quality, performance, and
                      development speed. Customized enterprise-level mobile
                      solutions for field service workflows, enhancing
                      operational efficiency and client satisfaction. Deployed
                      apps to the Google Play Store and Apple App Store,
                      optimizing packaging and compliance for faster approval
                      cycles. Integrated REST APIs with responsive UI components
                      to support real-time data interaction and improve user
                      experience. Collaborated in Agile teams with QA, product
                      managers, and DevOps engineers to deliver secure,
                      scalable, and maintainable solutions.
                    </p>
                    <ul class="mt-2 flex flex-wrap">
                      <li class="mr-1.5 mt-2">
                        <div
                          class="bg-teal-400/10 text-teal-300 text-xs px-3 py-1 rounded-full"
                        >
                          Cordova
                        </div>
                      </li>
                      <li class="mr-1.5 mt-2">
                        <div
                          class="bg-teal-400/10 text-teal-300 text-xs px-3 py-1 rounded-full"
                        >
                          React Native
                        </div>
                      </li>
                      <li class="mr-1.5 mt-2">
                        <div
                          class="bg-teal-400/10 text-teal-300 text-xs px-3 py-1 rounded-full"
                        >
                          JavaScript
                        </div>
                      </li>
                      <li class="mr-1.5 mt-2">
                        <div
                          class="bg-teal-400/10 text-teal-300 text-xs px-3 py-1 rounded-full"
                        >
                          REST APIs
                        </div>
                      </li>
                      <li class="mr-1.5 mt-2">
                        <div
                          class="bg-teal-400/10 text-teal-300 text-xs px-3 py-1 rounded-full"
                        >
                          UI Components
                        </div>
                      </li>
                      <li class="mr-1.5 mt-2">
                        <div
                          class="bg-teal-400/10 text-teal-300 text-xs px-3 py-1 rounded-full"
                        >
                          Play Store / App Store
                        </div>
                      </li>
                      <li class="mr-1.5 mt-2">
                        <div
                          class="bg-teal-400/10 text-teal-300 text-xs px-3 py-1 rounded-full"
                        >
                          Cross-Platform
                        </div>
                      </li>
                      <li class="mr-1.5 mt-2">
                        <div
                          class="bg-teal-400/10 text-teal-300 text-xs px-3 py-1 rounded-full"
                        >
                          Agile
                        </div>
                      </li>
                      <li class="mr-1.5 mt-2">
                        <div
                          class="bg-teal-400/10 text-teal-300 text-xs px-3 py-1 rounded-full"
                        >
                          Windows
                        </div>
                      </li>
                    </ul>
                  </div>
                </li>

                <!-- Barventory -->
                <li
                  class="group relative grid sm:grid-cols-8 sm:gap-8 md:gap-4 transition-all"
                >
                  <div
                    class="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition lg:-inset-x-6 lg:block
            lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)]
            lg:group-hover:drop-shadow-lg"
                  ></div>

                  <header
                    class="z-10 text-xs font-light uppercase tracking-wide text-slate-500 sm:col-span-2 mt-1 mb-2"
                  >
                    Jan 2020 – Feb 2022
                  </header>

                  <div class="z-10 sm:col-span-6">
                    <h3
                      class="font-medium leading-snug text-slate-200 text-base"
                    >
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
                    <p
                      class="mt-2 text-sm leading-normal text-gray-400 text-justify"
                    >
                      Led the architecture and development of React Native and
                      Cordova-based mobile applications for bar and restaurant
                      inventory tracking. Implemented Redux and Redux-Saga for
                      efficient state management and async task handling,
                      improving application performance and developer workflow.
                      Worked closely with stakeholders to translate business
                      requirements into functional and scalable mobile features.
                      Designed reusable components and integrated REST APIs to
                      support real-time data operations across platforms.
                      Published and maintained apps on iOS and Android stores,
                      streamlining the deployment process and reducing review
                      times. Ensured code quality through modern JavaScript
                      (ES6+) practices, Agile development, and code reviews.
                    </p>
                    <ul class="mt-2 flex flex-wrap">
                      <li class="mr-1.5 mt-2">
                        <div
                          class="bg-teal-400/10 text-teal-300 text-xs px-3 py-1 rounded-full"
                        >
                          React Native
                        </div>
                      </li>
                      <li class="mr-1.5 mt-2">
                        <div
                          class="bg-teal-400/10 text-teal-300 text-xs px-3 py-1 rounded-full"
                        >
                          Cordova
                        </div>
                      </li>
                      <li class="mr-1.5 mt-2">
                        <div
                          class="bg-teal-400/10 text-teal-300 text-xs px-3 py-1 rounded-full"
                        >
                          Redux
                        </div>
                      </li>
                      <li class="mr-1.5 mt-2">
                        <div
                          class="bg-teal-400/10 text-teal-300 text-xs px-3 py-1 rounded-full"
                        >
                          Redux Saga
                        </div>
                      </li>
                      <li class="mr-1.5 mt-2">
                        <div
                          class="bg-teal-400/10 text-teal-300 text-xs px-3 py-1 rounded-full"
                        >
                          JavaScript
                        </div>
                      </li>
                      <li class="mr-1.5 mt-2">
                        <div
                          class="bg-teal-400/10 text-teal-300 text-xs px-3 py-1 rounded-full"
                        >
                          ES6+
                        </div>
                      </li>
                      <li class="mr-1.5 mt-2">
                        <div
                          class="bg-teal-400/10 text-teal-300 text-xs px-3 py-1 rounded-full"
                        >
                          REST APIs
                        </div>
                      </li>
                      <li class="mr-1.5 mt-2">
                        <div
                          class="bg-teal-400/10 text-teal-300 text-xs px-3 py-1 rounded-full"
                        >
                          Cross-Platform
                        </div>
                      </li>
                      <li class="mr-1.5 mt-2">
                        <div
                          class="bg-teal-400/10 text-teal-300 text-xs px-3 py-1 rounded-full"
                        >
                          Mobile
                        </div>
                      </li>
                      <li class="mr-1.5 mt-2">
                        <div
                          class="bg-teal-400/10 text-teal-300 text-xs px-3 py-1 rounded-full"
                        >
                          App Store
                        </div>
                      </li>
                      <li class="mr-1.5 mt-2">
                        <div
                          class="bg-teal-400/10 text-teal-300 text-xs px-3 py-1 rounded-full"
                        >
                          Play Store
                        </div>
                      </li>
                    </ul>
                  </div>
                </li>

                <!-- Devigital Systems (Lead) -->
                <li
                  class="group relative grid sm:grid-cols-8 sm:gap-8 md:gap-4 transition-all"
                >
                  <div
                    class="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition lg:-inset-x-6 lg:block
            lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)]
            lg:group-hover:drop-shadow-lg"
                  ></div>

                  <header
                    class="z-10 text-xs font-light uppercase tracking-wide text-slate-500 sm:col-span-2 mt-1 mb-2"
                  >
                    Jun 2015 – Dec 2020
                  </header>

                  <div class="z-10 sm:col-span-6">
                    <h3
                      class="font-medium leading-snug text-slate-200 text-base"
                    >
                      <span>
                        Senior Software Engineer ·
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
                    <p
                      class="mt-2 text-sm leading-normal text-gray-400 text-justify"
                    >
                      Progressed from junior to senior developer while
                      delivering high-performance web applications across
                      multiple industries including AdTech, digital marketing,
                      and enterprise SaaS. Engineered full-stack solutions using
                      React.js, Node.js, NestJS, and TypeORM, delivering
                      modular, scalable features for client platforms. Built and
                      maintained RESTful APIs and backend systems using
                      PostgreSQL and MongoDB, deployed on AWS (S3, EC2) and
                      integrated with frontend UIs. Led project teams in the
                      final year, mentoring junior developers and coordinating
                      architecture, sprint planning, and code reviews.
                      Contributed to music-driven marketing campaigns (e.g.,
                      FSharp-Spotify) for global brands like Spotify, Vevo, and
                      Disney, delivering interactive features with AngularJS,
                      Node.js, and Google Analytics. Developed ad campaign
                      delivery and tracking tools as part of the Frequency Ads
                      platform, supporting media publishers and advertisers with
                      dynamic ad operations.
                    </p>
                    <ul class="mt-2 flex flex-wrap">
                      <li class="mr-1.5 mt-2">
                        <div
                          class="bg-teal-400/10 text-teal-300 text-xs px-3 py-1 rounded-full"
                        >
                          React.js
                        </div>
                      </li>
                      <li class="mr-1.5 mt-2">
                        <div
                          class="bg-teal-400/10 text-teal-300 text-xs px-3 py-1 rounded-full"
                        >
                          Node.js
                        </div>
                      </li>
                      <li class="mr-1.5 mt-2">
                        <div
                          class="bg-teal-400/10 text-teal-300 text-xs px-3 py-1 rounded-full"
                        >
                          NestJS
                        </div>
                      </li>
                      <li class="mr-1.5 mt-2">
                        <div
                          class="bg-teal-400/10 text-teal-300 text-xs px-3 py-1 rounded-full"
                        >
                          TypeORM
                        </div>
                      </li>
                      <li class="mr-1.5 mt-2">
                        <div
                          class="bg-teal-400/10 text-teal-300 text-xs px-3 py-1 rounded-full"
                        >
                          PostgreSQL
                        </div>
                      </li>
                      <li class="mr-1.5 mt-2">
                        <div
                          class="bg-teal-400/10 text-teal-300 text-xs px-3 py-1 rounded-full"
                        >
                          MongoDB
                        </div>
                      </li>
                      <li class="mr-1.5 mt-2">
                        <div
                          class="bg-teal-400/10 text-teal-300 text-xs px-3 py-1 rounded-full"
                        >
                          AWS (S3, EC2)
                        </div>
                      </li>
                      <li class="mr-1.5 mt-2">
                        <div
                          class="bg-teal-400/10 text-teal-300 text-xs px-3 py-1 rounded-full"
                        >
                          AngularJS
                        </div>
                      </li>
                      <li class="mr-1.5 mt-2">
                        <div
                          class="bg-teal-400/10 text-teal-300 text-xs px-3 py-1 rounded-full"
                        >
                          Google Analytics
                        </div>
                      </li>
                      <li class="mr-1.5 mt-2">
                        <div
                          class="bg-teal-400/10 text-teal-300 text-xs px-3 py-1 rounded-full"
                        >
                          Leadership
                        </div>
                      </li>
                      <li class="mr-1.5 mt-2">
                        <div
                          class="bg-teal-400/10 text-teal-300 text-xs px-3 py-1 rounded-full"
                        >
                          Mentorship
                        </div>
                      </li>
                    </ul>
                  </div>
                </li>
              </ol>
            </div>
          </section>
        </Saos>
      </Motion>

      <!-- Projects -->
      <Motion let:motion>
        <Saos animation={"fade-in 4s cubic-bezier(0.35, 0.5, 0.65, 0.95) both"}>
          <section
            id="projects"
            use:motion
            class="relative py-16 text-white overflow-hidden"
          >
            <div class="z-10 max-w-3xl mx-auto">
              <h2 class="text-4xl font-bold text-white pb-6">
                Project Highlights
              </h2>

              <ul class="group/list">
                <!-- FieldFlex Project -->
                <li class="mb-12">
                  <a
                    href="https://www.fieldflex.com"
                    target="_blank"
                    rel="noreferrer noopener"
                    class="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50 block"
                  >
                    <div
                      class="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"
                    ></div>
                    <div class="z-10 sm:order-2 sm:col-span-6">
                      <h3 class="text-slate-200 text-base font-medium">
                        FieldFlex Mobile Apps
                      </h3>
                      <p class="mt-2 text-sm leading-normal">
                        Cross-platform enterprise mobile and desktop apps built
                        using Cordova and React Native for IBM Maximo and
                        TRIRIGA integration. Features include offline support,
                        real-time data sync, and scalable field-service
                        workflows for 60K+ mobile users.
                      </p>
                    </div>
                    <img
                      alt="FieldFlex Project"
                      loading="lazy"
                      width="200"
                      height="48"
                      decoding="async"
                      class="aspect-video object-cover rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
                      src="/ffx.jpg"
                    />
                  </a>
                </li>

                <!-- Barventory Project -->
                <li class="mb-12">
                  <a
                    href="https://www.barventory.com/"
                    target="_blank"
                    rel="noreferrer noopener"
                    class="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50 block"
                  >
                    <div
                      class="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"
                    ></div>
                    <div class="z-10 sm:order-2 sm:col-span-6">
                      <h3 class="text-slate-200 text-base font-medium">
                        Barventory Inventory App
                      </h3>
                      <p class="mt-2 text-sm leading-normal">
                        React Native & Cordova mobile apps for bar/restaurant
                        inventory tracking with hardware integrations (Smart
                        Coaster Pro, Bar Top Scales). Included POS integrations,
                        real-time scanning, and published to iOS/Android.
                      </p>
                    </div>
                    <img
                      alt="Barventory Project"
                      loading="lazy"
                      width="200"
                      height="48"
                      decoding="async"
                      class="aspect-video object-cover rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
                      src="/bv.png"
                    />
                  </a>
                </li>

                <!-- Frequency Ads Platform -->
                <li class="mb-12">
                  <a
                    href="https://frequencyads.com"
                    target="_blank"
                    rel="noreferrer noopener"
                    class="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50 block"
                  >
                    <div
                      class="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"
                    ></div>
                    <div class="z-10 sm:order-2 sm:col-span-6">
                      <h3 class="text-slate-200 text-base font-medium">
                        Frequency Ads Platform
                      </h3>
                      <p class="mt-2 text-sm leading-normal">
                        AdTech platform built with React, Redux, Node.js, and
                        PostgreSQL, enabling music-driven marketing campaigns
                        for clients like Spotify, Vevo, and Disney. Features
                        included custom analytics, ad creation tools, and
                        campaign tracking.
                      </p>
                    </div>
                    <img
                      alt="Frequency Ads Project"
                      loading="lazy"
                      width="200"
                      height="48"
                      decoding="async"
                      class="aspect-video object-cover rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
                      src="/frequency.jpg"
                    />
                  </a>
                </li>
              </ul>
            </div>
          </section>
        </Saos>
      </Motion>

      <!-- Education -->
      <!-- <Motion let:motion>
        <Saos animation={"fade-in 4s cubic-bezier(0.35, 0.5, 0.65, 0.95) both"}>
          <section
            id="education"
            use:motion
            class="relative py-16 text-white overflow-hidden"
          >
            <div class="z-10 max-w-3xl mx-auto">
              <h2 class="text-4xl font-bold text-white pb-6">
                Education and Background
              </h2>
              <ul class="list-disc pl-6 space-y-4 text-gray-300">
                <li>
                  <span class="font-light"
                    >AWS Certified Cloud Practitioner</span
                  > (2024)
                </li>
                <li>
                  <span class="font-light">Big Data Solution Architecture</span>
                  – Conestoga College, Waterloo, ON (2021)
                </li>
                <li>
                  <span class="font-light">BS in Computer Science</span> – Forman
                  Christian College, Lahore (2011–2015)
                </li>
              </ul>
            </div>
          </section>
        </Saos>
      </Motion> -->
      <footer
        class="max-w-3xl mx-auto px-6 pt-12 pb-24 text-sm text-slate-500 text-center"
      >
        <p>
          Designed with intention and built in
          <a
            href="https://svelte.dev/"
            class="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Svelte (opens in a new tab)">Svelte</a
          >
          using
          <a
            href="https://tailwindcss.com/"
            class="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Tailwind CSS (opens in a new tab)">Tailwind CSS</a
          >
          and animated with
          <a
            href="https://motion.dev/"
            class="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Motion One (opens in a new tab)">Motion One</a
          >. Coded in
          <a
            href="https://code.visualstudio.com/"
            class="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="VS Code (opens in a new tab)">VS Code</a
          >
          and deployed on
          <a
            href="https://pages.github.com/"
            class="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="GitHub Pages (opens in a new tab)">GitHub Pages</a
          >.
        </p>
        <p class="mt-4">
          Based in <span class="text-slate-400 font-medium">Ontario</span>, and
          currently open to job opportunities — ideally in
          <span class="text-teal-300 font-medium">Canada</span> or the
          <span class="text-teal-300 font-medium">United States</span>.
        </p>
      </footer>
    </main>
  </div>
</div>

<style>
  html {
    scroll-behavior: smooth;
  }
  .portfolio-app {
    min-height: 100vh;
  }
  section {
    scroll-margin-top: 100px; /* or adjust based on your header height */
  }
</style>
