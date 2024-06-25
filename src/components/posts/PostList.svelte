<script lang="ts">
    import posts from '@/src/constants/posts'
    import PointlessLi from '../shared/PointlessLi.svelte'
</script>

<html lang="eng">
    <div>
        {#each posts as props}
            <PointlessLi content={
                `
                    <a href="${props.URL}">${props.title}</a>
                    <br />
                    ${props.publicationDate}
                `
            } />
        {/each}
    </div>
</html>
