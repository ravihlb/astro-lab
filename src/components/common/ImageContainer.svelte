<script lang="ts">
    export let src: string
    export let alt = ''
    export let caption = ''
    export let shouldCenter = true
</script>

<html lang="eng">
    <figure class="image-container" class:center={shouldCenter ?? ''}>
        <img loading="lazy" {src} {alt} />
        <figcaption class="caption">
            {@html caption}
        </figcaption>
    </figure>
</html>

<style lang="sass">
    .center
        margin: 0 auto
        height: fit-content
        width: fit-content
        display: block

        overflow: hidden
        justify-content: center

        img
            max-height: 40vw
            max-width: 50rem
            border-radius: 1em
            flex: none
            height: 100%
            width: 100%
            align-items: center

            @media screen and (max-width: 500px)
                max-height: 90vw
</style>
