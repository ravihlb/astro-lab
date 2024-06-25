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
      --accent-purple: #d07319
      --default-text-color: black

    :global(.accent-color)
        color: var(--accent-purple)

    :global(body)
        font-family: Fantasque Sans Mono, monospace
        font-weight: 400
        font-size: 16px

        :global(body a)
            background: #404040
            color: #809fff

        @media (prefers-color-scheme: dark)
            color: #eee
            background: #121212
            --default-text-color: #eee

            :global(a)
                background: #161616
                color: #809fff

    :global(.container)
        margin: 0 auto
        max-width: 85%

        :global(.center-text)
            text-align: center

        :global(li::marker)
            font-size: 1.2em
            margin-right: 0px

        :global(h1)
            color: var(--accent-purple)
            font-size: 2em
            font-family: monospace

        :global(h2)
            color: var(--accent-purple)
            font-size: 1.5em
            font-family: monospace

        :global(h3)
            color: var(--accent-purple)
            font-size: 1.3em
            font-family: monospace

        :global(a)
            font-family: monospace

        :global(li)
            font-size: 1.2rem

        :global(code)
            font-weight: 400
            font-family: monospace

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
