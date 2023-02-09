<style lang="sass">
    nav
        columns: 10em
        height: 3em
        margin: 2em 2em

    a#articles
        align-items: center
        display: inline-block
        font-size: 1.3em
        justify-content: center
        margin-bottom: 2.23em
        vertical-align: middle
        text-decoration: none

    .main-icon
        width: 3.5em

</style>

<html>
    <nav>
        <a
            id="logo"
            href="/">
            <img
                class="main-icon"
                src="@/static/images/astrolabe.svg"
                alt="An astrolabe, a medieval instrument that was once used to determine the altitude of the sun or other celestial bodies, often for navigation."
            >
        </a>
        <a
            id="articles"
            href="/articles">
            Articles
        </a>
    </nav>
</html>
