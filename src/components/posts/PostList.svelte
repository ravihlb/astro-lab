<script lang="ts">
    import posts from '@/src/constants/posts'
    import PointlessLi from '../shared/PointlessLi.svelte'
</script>

<html lang="eng">
    <div>
        {#each posts as postProps}
            <PointlessLi props = { postProps } />
        {/each}
    </div>
</html>
