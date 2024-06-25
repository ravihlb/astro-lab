<script>
    import { base } from "$app/paths";

    const logoSrc = `${base}/images/astrolabe.svg`
</script>

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
                <div id="about" class="link">
                    <a href="/about">/about </a>
                </div>
            </li>

            <li>
                <div id="code" class="link">
                    <a href="https://github.com/ravihlb/astro-lab" target="_blank">/code ⤴</a>
                </div>
            </li>
        </ul>
    </nav>
</html>

<style lang="css">
    nav {
        display: flex;
        align-items: center;

        width: 100%;
        margin: auto;
        padding-top: 1em;
        flex-direction: row;

        margin: 0 auto;
        max-width: 60rem;
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
        align-self: center;
    }

    nav li:not(:last-of-type) {
            margin-right: 1.5em;
    }

    .link {
        vertical-align: middle;
        padding-top: 1.4em;
    }

    .main-icon {
        width: 3.5em;
        padding-left: 5%;
    }

</style>
