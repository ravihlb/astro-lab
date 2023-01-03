<script>
    import Pages from './Pages.svelte'
    const blogName = 'Astro-Lab'

    let count = 0
    $: doubled = count * 2
    function increment () {
        count += 1
    }
</script>

<style>
    .color-purple {
        color: #512DA8
    }

    .h-centered {
        text-align: center
    }
</style>

<h1 class="h-centered">
    Welcome to
    <br>
    <span class="color-purple">{blogName}</span>
</h1>

<Pages/>

<p>
    Count: {count}

    <button class="h.centered" on:click={increment}>
        +1
    </button>
</p>

<p>Count doubled: {doubled}</p>

<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
