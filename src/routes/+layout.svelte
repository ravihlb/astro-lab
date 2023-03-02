<script>
    import Navbar from '@/components/Navbar.svelte'
</script>

<style lang="sass">
    :global(body)
        padding: 0 3em 3em
        margin: 0

    :global(.container)
        max-width: 60em
        margin: 0 auto

    :global(.center-text)
        text-align: center

    :global(.accent-color)
        color: #512DA8

    :global(li::marker)
        font-size: 1.2em
        margin-right: 0px
</style>

<html lang="en">
    <title>Astrolab</title>
    <div class="container">
        <Navbar />
        <slot />
    </div>

</html>

