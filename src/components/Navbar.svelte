<!-- Navbar.svelte -->
<!-- <script lang="ts">
    let links = [
      { name: 'Home', path: '#home' },
      { name: 'About', path: '#about' },
      { name: 'Projects', path: '#projects' },
      { name: 'Contact', path: '#contact' }
    ];
  </script>
  
  <nav class="bg-gray-900 text-white p-4 sticky top-0 z-50 shadow">
    <div class="max-w-5xl mx-auto flex gap-6">
      {#each links as { name, path }}
        <a href={path} class="hover:text-blue-400 transition">{name}</a>
      {/each}
    </div>
  </nav> -->

  
  <!-- Navbar.svelte -->
<script lang="ts">
    let links = [
      { name: 'Home', path: '#intro' },
      { name: 'Experience', path: '#experience' },
      { name: 'Skills', path: '#skills' },
      { name: 'Education', path: '#education' },
      { name: 'Employment', path: '#employment' },
      { name: 'Contact', path: '#contact' }
    ];
  </script>
  
  <nav class="bg-gray-900 text-white p-4 sticky top-0 z-50 shadow">
    <div class="max-w-5xl mx-auto flex flex-wrap gap-4">
      {#each links as { name, path }}
        <a href={path} class="hover:text-blue-400 transition whitespace-nowrap">{name}</a>
      {/each}
    </div>
  </nav>
  