<script lang="ts">
  import { onMount } from "svelte";

  let links = [
    { name: "About", path: "#about" },
    { name: "Experience", path: "#experience" },
    { name: "Employment", path: "#employment" },
    { name: "Project Highlights", path: "#projects" },
  ];

  let active = "About";

  // Smooth scroll logic
  function scrollToSection(path: string) {
    const target = document.querySelector(path);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  onMount(() => {
    const handleScroll = () => {
      let current = links[0].name;
      let minDistance = Infinity;

      for (const { name, path } of links) {
        const section = document.querySelector(path);
        if (section) {
          const distance = Math.abs(section.getBoundingClientRect().top);
          if (distance < minDistance) {
            minDistance = distance;
            current = name;
          }
        }
      }

      active = current;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  });
</script>

<nav class="text-white flex flex-col gap-2">
  {#each links as { name, path }}
    <div class="flex items-center gap-3 h-6">
      <div
        class="w-1 h-full rounded-full transition-all duration-300"
        class:bg-teal-300={name === active}
        class:bg-gray-600={name !== active}
      ></div>
      <a
        href={path}
        on:click|preventDefault={() => scrollToSection(path)}
        class="text-sm font-medium transition hover:text-teal-300"
        class:text-teal-300={name === active}
        class:text-white={name !== active}
      >
        {name}
      </a>
    </div>
  {/each}
</nav>
