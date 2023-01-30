<script>
    import Navbar from '$components/Navbar.svelte'
</script>

<style lang="sass">
    :global(body)
        --padding: calc(2 * 1.5em)
        padding: 0 var(--padding) var(--padding)
        margin: 0

    :global(.accent-color)
        color: #512DA8

    :global(.h-centered)
        text-align: center

    :global(li::marker)
        font-size: 1.2em
        margin-right: 0px
</style>

<html>
    <title>Astrolab</title>
</html>

<Navbar />
<slot />
