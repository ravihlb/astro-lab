<script>
    import Navbar from '@/components/Navbar.svelte'
</script>

<style lang="sass">
    :root
        --dark-purple: #570faf

    :global(.accent-color)
        color: var(--dark-purple)

    :global(body)
        padding: 0 3em 3em
        margin: 0

    :global(.container)
        max-width: 60em
        margin: 0 auto

    :global(.center-text)
        text-align: center

    :global(li::marker)
        font-size: 1.2em
        margin-right: 0px

    :global(p img)
        display: block
        margin: 0 auto
        height: 25em
        max-width: 60em
</style>

<html lang="en">
    <title>Astrolab</title>
    <div class="container">
        <Navbar />
        <slot />
    </div>

</html>

