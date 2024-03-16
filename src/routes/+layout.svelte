<script>
    import Navbar from '../components/common/Navbar.svelte'
</script>

<html lang="en">
    <title>Astrolab</title>
    <Navbar />
    <div class="container">
        <slot />
    </div>
</html>

<style lang="sass">
    :root
        --dark-purple: #5d1f7c

    :global(.accent-color)
        color: var(--dark-purple)

    :global(body)
        font-family: EB Garamond, ui-serif
        font-weight: 400
        font-size: 1.1em

    :global(.container)
        margin: 0 auto
        max-width: 85%

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

        :global(code)
            font-weight: 400

        :global(.caption)
            display: block
            opacity: 0.9
            font-size: 0.9rem
            font-style: italic
            justify-content: center
            margin-left: 1em

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
