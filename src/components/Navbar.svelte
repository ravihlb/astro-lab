<script>
    import { base } from "$app/paths";

    const logoSrc = `${base}/images/astrolabe.svg`
</script>

<style lang="sass">
    nav
        margin: 2% 5% 0 0
        text-align: right
        float: right

    .main-icon
        width: 3.5em

</style>

<html lang="en">
    <nav>
        <a
            id="logo"
            href="{base}/">
            <img
                class="main-icon"
                src="{logoSrc}"
                alt="Illustration of an astrolabe, a medieval instrument that was once used to 
                determine the altitude of the sun or other celestial bodies, 
                often for navigation."
            >
        </a>
    </nav>
</html>
