<script lang="typescript">
    import PointlessLi from "@/src/components/shared/PointlessLi.svelte"
</script>

<html lang="en" class="main">
    <p>
      Hi! my name's Ravi.
      <br />
      <br />
      I am a Software QA Engineer from Brazil aspiring to become a full time [backend, frontend, software, game] developer.
      <br />
      <br />
      Here's where you can find my stuff:
      <br />
    </p>

    <div>
        <ul>

            <a href="https://github.com/ravihlb" target="_blank">
                <PointlessLi content={
                `
                <div id="github">
                    Github
                </div>
                `
                } />
            </a>

            <a href="https://www.linkedin.com/in/ravihlb/" target="_blank">
                <PointlessLi content={
                `
                <div id="linkedin">
                    LinkedIn
                </div>
                `
                } />
            </a>

        </ul>
    </div>
</html>

<style lang="css">
    ul {
        width: auto;
        padding-top: 1.5rem;
        padding-left: 0;
    }
</style>
