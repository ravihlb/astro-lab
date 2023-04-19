<script>
    import Navbar from '../components/Navbar.svelte'
</script>

<style lang="sass">
    :root
        --dark-purple: #570faf

    :global(.accent-color)
        color: var(--dark-purple)

    :global(body)
        font-family: sans-serif

    :global(.container)
        margin: 0 auto
        max-width: 60em
        padding: 0 10% 10%

        :global(.center-text)
            text-align: center

        :global(li::marker)
            font-size: 1.2em
            margin-right: 0px

        :global(h1)
            font-size: 2em

        :global(h2)
            font-size: 1.5em

        :global(h3)
            font-size: 1.3em

        :global(p img)
            margin: 0 auto
            display: block
            height: 25em
            max-width: 60em
        
        :global(.span-mobile)
            @media screen and (max-width: 500px)
                margin: 0 -15% 0 -15.3%

        :global(img.span-mobile)
            @media screen and (max-width: 500px)
                border-radius: 0
                margin: 0 -15% 0 -15.3%
                width: 100vw

        :global(.youtube-video-container)
            height: 100%
            overflow: hidden
            padding-top: 56.25%
            position: relative
            text-align: center

            @media screen and (max-width: 500px)
                height: 13vw

            :global(iframe)
                position: absolute
                top: 0
                left: 0
                bottom: 0
                right: 0
                height: 100%
                width: 100%

</style>

<html lang="en">
    <title>Astrolab</title>
    <Navbar />
    <div class="container">
        <slot />
    </div>
</html>
