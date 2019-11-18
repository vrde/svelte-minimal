<script>
  import { replace } from "svelte-spa-router";
  export let params = {};
  let name = params.name;
  $: {
    replace("/hello/" + name);
  }
</script>

<h1>Hello {params.name}</h1>
<p>Try to change the last part of the URL!</p>

<input bind:value={name} />
