import Home from './routes/Home.svelte';
import About from './routes/About.svelte';
import Projects from './routes/Projects.svelte';
import Contact from './routes/Contact.svelte';

export default {
  '/': Home,
  '/about': About,
  '/projects': Projects,
  '/contact': Contact
};