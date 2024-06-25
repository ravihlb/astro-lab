import type { PostProperties } from '@/src/constants/posts'
import { getDateString } from '@/src/utils/dateutils'

const title = 'From Bloated Windows to Minimal Arch Linux'
const subtitle = 'A Spectrum of Operating System Bareness'
const publicationDate = getDateString('Mar 16 17:47:16 2024')

const propsPost0: PostProperties = {
    title,
    authors: ['ravihlb'],
    subtitle,
    publicationDate,
    URL: 'posts/from-bloated-windows-to-arch-linux'
}

export default propsPost0
