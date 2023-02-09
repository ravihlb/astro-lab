<script>
    import Navbar from '@/components/Navbar.svelte'
</script>

<style lang="sass">
    :global(body)
        padding: 0 3em 3em
        margin: 0

    :global(h)
        text-align: center

    :global(.accent-color)
        color: #512DA8

    :global(li::marker)
        font-size: 1.2em
        margin-right: 0px
</style>

<html>
    <title>Astrolab</title>
</html>

<Navbar />
<slot />
