export type PostProperties = {
    title: string,
    subtitle?: string,
    publicationDate: string,
    URL: string
}

import neovimFileTypesLspTitle from '@/src/routes/posts/neovim-filetypes-lsp/+page.svx'

const posts: PostProperties[] = [
    {
        title: 'How to set which filetypes LSPs are run on in Neovim',
        publicationDate: (new Date('2024-06-25 05:22')).toDateString(),
        URL: 'posts/neovim-filetypes-lsp'
    },
    {
       title: 'From Bloated Windows to Minimal Arch Linux',
       subtitle: 'A Spectrum of Operating System Bareness',
       publicationDate: (new Date('Mar 16 17:47:16 2024')).toDateString(),
       URL: 'posts/from-bloated-windows-to-arch-linux'
    }
]

export default posts
