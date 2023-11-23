import { get } from '$lib/datocms'

export async function load() {
    const query = `
        {
            allPosts {
                id
                title
                content
                _status
                _firstPublishedAt
            }
        }
    `
    const { data } = await get(query)
    return data
  }