<script lang="ts">
    import posts from '@/src/constants/posts'
</script>

<html lang="eng">
    <div>
        {#each posts as props}
            <li><a href="{props.URL}">{props.title}</a>
                <br />
                {props.publicationDate}
            </li>
        {/each}
    </div>
</html>

<style lang="css">
    li {
        display: inline-block;
        padding-bottom: 2.5em;
    }
</style>
