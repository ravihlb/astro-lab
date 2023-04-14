<style lang="sass">
    :global(#cover)
        height: 35em
        width: 100%
        object-fit: cover
        margin-top: 2.5em
        margin-bottom: 2em

    img
        border-radius: 1em
        display: block
        margin: auto
        width: 80%

    :global(h1, h2)
        color: var(--dark-purple)
        text-align: center

    :global(h1)
        font-size: 3em

    :global(h2)
        font-size: 2em

</style>

<slot />

