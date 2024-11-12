<script lang="ts">
    import type { PostProperties } from "@/src/shared/types/PostProperties"
    import { base } from '$app/paths'

    export let props: PostProperties
    const { URL } = props
</script>

<html lang="en">
    <li>
        <a href="{base}/{URL}">{props.title}</a>
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
