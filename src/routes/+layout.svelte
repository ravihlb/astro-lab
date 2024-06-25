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

<style lang="css">
    :root {
        --accent-color-primary: #d07319;
        --default-text-color: black;
    }

    :global(.accent-color) {
        color: var(--accent-color-primary);
    }

    :global(body) {
        font-family: Fantasque Sans Mono, monospace;
        font-weight: 400;
        font-size: 20px;
        background-color: #efe6d7;

        @media screen and (prefers-color-scheme: dark) {
            color: #eee;
            background: #121212;
            --default-text-color: #eee;
        }

    }

    :global(body a) {
        background: #404040;
        color: #809fff;
    }


    :global(a) {
        background: #161616;
        color: #809fff;
    }

    :global(.container) {
        margin: 0 auto;
        max-width: 60rem;

        @media screen and (max-width: 500px) {
            margin: 0 auto;
            max-width: 21rem;
        }

    }

    :global(.center-text) {
        text-align: center;
    }

    :global(li::marker) {
        font-size: 1.2em;
        margin-right: 0px;
    }

    :global(h1) {
        color: var(--accent-color-primary);
        font-size: 2em;
    }

    :global(h2) {
        color: var(--accent-color-primary);
        font-size: 1.5em;
    }

    :global(h3) {
        color: var(--accent-color-primary);
        font-size: 1.3em;
    }

    :global(li) {
        font-size: 1.2rem;
    }

    :global(code) {
        font-weight: 400;
        font-family: monospace;
        background: #c2c3c6;

        @media screen and (prefers-color-scheme: dark) {
            background: #242424;
        }
    }

    :global(.caption) {
        display: block;
        opacity: 0.9;
        font-size: 0.9rem;
        font-style: italic;
        justify-content: center;
        margin-left: 1em;
    }

    :global(.youtube-video-container) {
        height: 100%;
        overflow: hidden;
        padding-top: 56.25%;
        position: relative;
        text-align: center;

        @media screen and (max-width: 500px) {
            height: 13vw;
        }

    }

    :global(iframe) {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        height: 100%;
        width: 100%;
    }

</style>
