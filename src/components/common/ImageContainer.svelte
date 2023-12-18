<script lang="ts">
  export let src: string;
  export let alt = "";
  export let shouldCenter = true;
</script>

<html lang="eng">
  <div class="image-container" class:center={shouldCenter ?? ""}>
    <img loading="lazy" {src} {alt} />
  </div>
</html>

<style lang="sass">
    .center
        margin: 0 auto
        max-height: 600px
        max-width: 100%
        height: fit-content
        width: fit-content
        overflow: hidden
        border-radius: 1em
        display: flex
        justify-content: center
        align-items: center
    
    .center img
        flex: none
        height: 100%
        width: 100%

</style>
