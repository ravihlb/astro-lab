<script>
    import Navbar from '$components/Navbar.svelte'
</script>

<style lang="sass">
    :global(.main)
        margin-left: 10%
        margin-right: 10%
    
    :global(.accent-color)
        color: #512DA8

    :global(.h-centered)
        text-align: center

    :global(li::marker)
        font-size: 1.2em
        margin-right: 0px
</style>

<Navbar />
<slot />
