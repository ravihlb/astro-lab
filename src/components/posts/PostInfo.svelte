<script lang="ts">
    import type { PostProperties } from "@/src/shared/types/PostProperties"
    export let props: PostProperties
    const { publicationDate, authors } = props
</script>

<html lang="en">
    <section id="post-header">
        <br />
        <strong id="published-on">Published on</strong> {publicationDate}
        <br />
        <strong id="authored-by">Authored by:</strong> <span id="authors">{authors}</span>
        <br />
    </section>
</html>
