<style lang="sass">
    :global(#cover)
        height: 35em
        width: 100%
        object-fit: cover
        margin-top: 2.5em
        margin-bottom: 2em

    :global(img)
        border-radius: 1rem
        display: block
        margin: auto
        width: 80%

    h1, h2, h3
        color: var(--dark-purple)
        text-align: center

    h1
        font-size: 3em

    h2
        font-size: 2em

    h3
        font-size: 1.5em
</style>

<slot />

