<script lang="ts">
    import posts from '@/src/constants/posts'
</script>

<html lang="eng">
    <div>
        {#each posts as props}
            <li><a href="{props.URL}">{props.title}</a> - {props.publicationDate}</li>
        {/each}
    </div>
</html>
