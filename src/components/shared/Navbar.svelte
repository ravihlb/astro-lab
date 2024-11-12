<script>
    import { base } from '$app/paths';

    const logoSrc = `${base}/images/astrolabe.svg`
</script>

<html lang="en">
    <nav>
        <div class="header-item">
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
                    <a href="{base}/about">
                        <div id="about" class="link">
                            /about 
                        </div>
                    </a>
                </li>

                <li>
                    <a href="https://github.com/ravihlb/astro-lab" target="_blank">
                        <div id="code" class="link">
                            /code ⤴
                        </div>
                    </a>
                </li>
            </ul>
        </div>
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

        & .header-item {
            line-height: 1rem;
            vertical-align: middle;

            &:not(:last-of-type) {
                margin-right: 1.5em;
            }
        }

        & ul {
            display: flex;
            padding: 0;

            & li {
                display: inline-block;
                position: relative;
                cursor: pointer;
                align-self: center;
            }

            & li:not(:last-of-type) {
                margin-right: 1.5em;
            }
        }

        & .float-right {
            position: relative;
            float: right;
        }

    }

    .main-icon {
        width: 3.5em;
        padding-left: 5%;
    }

</style>
