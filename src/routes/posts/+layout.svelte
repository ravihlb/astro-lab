<slot />

<style lang="sass">
    :global(#cover)
        margin: 2em auto
        width: 100%

    :global(h1, h2, h3)
        font-weight: 900
        text-align: center
        line-height: 1.6em
        margin-top: 1em

    :global(h1)
        @media screen and (max-width: 500px)
            text-align: left

    :global(p)
        line-height: 1.5em
</style>
