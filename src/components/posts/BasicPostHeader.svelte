<script lang="ts">
    import type { PostProperties } from '@/src/shared/types/PostProperties'
    import PostTitles from './PostTitles.svelte'
    import PostInfo from './PostInfo.svelte'

    export let props: PostProperties
</script>

<section id="post-header" lang="en">
    <PostTitles props={props}/>
    <PostInfo props={props}/>
    <br />
</section>
