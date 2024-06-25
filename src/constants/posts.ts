import propsPost0 from '../routes/posts/from-bloated-windows-to-arch-linux/props'
import propsPost1 from '../routes/posts/neovim-filetypes-lsp/props'

export type PostProperties = {
    title: string,
    subtitle?: string,
    authors: string[],
    publicationDate: string,
    URL: string
}

const posts: PostProperties[] = []
posts.push(propsPost1, propsPost0)

export default posts
