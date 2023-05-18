<script>
    import Navbar from '@components/Navbar.svelte'
    export const prerender = true
</script>

<style lang="sass">
    :root
        --dark-purple: #570faf

    :global(.accent-color)
        color: var(--dark-purple)

    :global(body)
        font-family: sans-serif
        padding: 0 3em 3em
        margin: 0
        font-weight: lighter

    :global(.span-mobile)
        @media screen and (max-width: 500px)
            width: 100vw
            margin-left: -3rem
            padding-left: -3rem
            padding-right: -3rem

    :global(.container)
        max-width: 60em
        margin: 0 auto

    :global(.center-text)
        text-align: center

    :global(li::marker)
        font-size: 1.2em
        margin-right: 0px

    :global(.crop)
        width: 200px
        height: 150px
        overflow: hidden

    :global(.crop img)
        width: 400px
        height: 300px
        margin: -2em 0 0 100px

    :global(h1)
        font-size: 2em

    :global(h2)
        font-size: 1.5em

    :global(h3)
        font-size: 1.3em

</style>

<html lang="en">
    <title>Astrolab</title>
    <div class="container">
        <Navbar />
        <slot />
    </div>
</html>

