<script>
    import { base } from "$app/paths";

    const logoSrc = `${base}/images/astrolabe.svg`
</script>

<style lang="css">
    nav {
        display: flex;
        align-items: center;
        max-width: 85%;
        width: 100%;
        margin: auto;
        padding-top: 1em;
        flex-direction: row;
    }

    nav ul {
        display: flex;
        padding: 0;
    }

    nav li {
        display: inline-block;
        position: relative;
        cursor: pointer;
        vertical-align: middle;
    }

    nav li:not(:last-of-type) {
            margin-right: 1.5em;
    }

    #about {
        vertical-align: middle;
        padding-top: 1.4em;
    }

    .main-icon {
        width: 3.5em;
        padding-left: 5%;
    }

</style>

<html lang="en">
    <nav>
        <ul>
            <li>
                <a
                    id="logo"
                    href="{base}/">
                    <div id="main-logo">
                        <img
                        class="main-icon"
                        src="{logoSrc}"
                        alt="Illustration of an astrolabe, a medieval instrument that was once used to 
                        determine the altitude of the sun or other celestial bodies, 
                        often for navigation."
                        >
                    </div>
                </a>

            </li>

            <li>
                <div id="about">
                    <a href="/about">/about</a>
                </div>
            </li>
        </ul>
    </nav>
</html>
