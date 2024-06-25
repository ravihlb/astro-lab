<script lang="typescript">
    export let content = ''
</script>

<html lang="en">
    <li>
        {@html `<html lang="en"> ${content} </html>`}
    </li>
</html>

<style lang="css">
    li {
        display: inline-block;
        padding-bottom: 2.5em;
    }
</style>
