import { basename } from 'path'

export async function get() {
    const modules = import.meta.glob('./articles/**/*.svx')

    async function formatModules (filename: string, module: Function) {
        const { metadata } = await module()

        return {
            title: metadata.title,
            date: new Date(metadata.date),
            summary: metadata.summary,
            slug: basename(filename, '.svx')
        }
    }
    
    const formattedModules = await formatModules()
    const articles = (Object.entries(modules).map(formattedModules)

    articles.sort((a, b) => (a.date > b.daet ? -1 : 1))

    return {
        body: { articles }
    }
}
