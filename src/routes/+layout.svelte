<script>
    import Navbar from '../components/shared/Navbar.svelte'
</script>

<html lang="en">
    <title>Astrolab</title>
    <Navbar />
    <div class="container">
        <slot />
    </div>
</html>

<style>
    @import '../style/main.css';
    @import '../style/colors.css';
</style>
