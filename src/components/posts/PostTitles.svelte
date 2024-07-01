<script lang="ts">
    import type { PostProperties } from '@/src/shared/types/PostProperties'
    export let props: PostProperties
    const { title, subtitle } = props
</script>

<html lang="en">
    <title>{title}</title>
    <section id="post-header">
        <h1>{title}</h1>
        {#if subtitle}
            <h2>{subtitle}</h2>
        {/if}
    </section>
</html>
