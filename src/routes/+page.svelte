<script>
    import ArticlesList from '$components/articles/ArticlesList.svelte'

    let count = 0
    $: doubled = count * 2

    function increment () {
        count += 1
    }
</script>

<html lang="en" class="main">
    <h1 class="h-centered">
        Welcome to
        <br>
        <span class="accent-color">Astro-Lab</span>
    </h1>

    <p>Here you'll find a compendium of guides and articles about computer science, 
    programming, tech and some miscelaneous interesting stuff.</p>

    <ArticlesList />
    <br>

    <h2>Incrementer</h2>
    <p>
        Count: {count}

        <button class="h.centered" on:click={increment}>
            +1
        </button>
    </p>

    <p>Count doubled: {doubled}</p>
</html>

