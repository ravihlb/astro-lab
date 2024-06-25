<script lang="ts">
    import type { PostProperties } from "@/src/constants/posts"

    export let props: PostProperties
</script>

<html lang="en">
    <li>
        <a href="{props.URL}">{props.title}</a>
        <br />
        {props.publicationDate}
    </li>
</html>

<style lang="css">
    li {
        display: inline-block;
        padding-bottom: 2.5em;
    }
</style>
