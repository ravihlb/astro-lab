<script lang="ts">
    import props from './props'
    import PostTitles from '@components/posts/PostTitles.svelte'
    import PostInfo from '@components/posts/PostInfo.svelte'

    const { title, publicationDate, authors } = props
    const authorsList = authors.join(', ')
</script>

<PostTitles props={props} />
<PostInfo props={props} />
<br />

You can use the `filetypes` config within `lspconfig.lsp_name.setup({...})` to override the default filetypes on which a given LSP runs on.

For example, in my case I wanted the `css_variables` LSP to run on `vue` files, which it doesn't by default.

This can be done by overriding the `filetypes` option on the setup function call:

```lua
require("lspconfig").css_variables.setup({
    filetypes = {
        "css",
        "scss",
        "less",
        "vue",
    },
})
```

Other options other than `filetypes` can also be overriden.

A full list of LSPs and their respective options supported by `lspconfig` can be found by running `:help lspconfig-all`, which is really useful for finding and overriding their default settings.
