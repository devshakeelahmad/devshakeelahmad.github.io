<script lang="ts">
  import { onMount } from 'svelte';
  let links = [
    { name: 'About', path: '#about' },
    { name: 'Education', path: '#education' },
    { name: 'Experience', path: '#experience' },
    { name: 'Employment', path: '#employment' }
  ];
  let active = 'About';
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
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  });
</script>

<nav class="text-white flex flex-col gap-2">
  {#each links as { name, path }}
    <div class="flex items-center gap-3 h-6">
      <div class="w-1 h-full rounded-full transition-all duration-300 {name === active ? 'bg-teal-300' : 'bg-gray-600'}"></div>
      <a
        href={path}
        class="text-sm font-medium transition {name === active ? 'text-teal-300' : 'text-white'} hover:text-teal-300">
        {name}
      </a>
    </div>
  {/each}
</nav>