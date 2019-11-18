<script>
  import CONFIG from "./config";

  import Router from "svelte-spa-router";
  import Home from "./Home.svelte";
  import Hello from "./Hello.svelte";
  import NotFound from "./NotFound.svelte";

  const routes = {
    "/": Home,
    "/hello/:name": Hello,
    "*": NotFound
  };
</script>

<h1>Menu</h1>
<ul>
  <li>
    <a href="#/">Homepage</a>
  </li>
  <li>
    <a href="#/hello/Svelte">Hello Svelte</a>
  </li>
  <li>
    <a href="#/random-stuff">404</a>
  </li>
</ul>
<Router {routes} />

<hr />
<footer>production: {CONFIG.production}, built on: {CONFIG.date}</footer>
