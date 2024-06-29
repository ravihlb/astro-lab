<script>
    import { onMount } from 'svelte'
    import Navbar from '@components/shared/Navbar.svelte'
    import ColorSchemeManager from '@/src/utils/ColorSchemeManager'

    onMount(async () => {
        ColorSchemeManager.initializeThemeStorage()
    })

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
