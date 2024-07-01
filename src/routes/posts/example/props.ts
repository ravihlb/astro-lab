import { getDateString } from '@/src/utils/dateutils'

const title = 'Example title post!'
const subtitle = 'Example post subtitle'
const publicationDate = getDateString('2024-06-25 05:22')

const props = {
    title,
    subtitle,
    authors: ['ravihlb'],
    publicationDate,
    URL: 'posts/neovim-filetypes-lsp'
}

export default props
