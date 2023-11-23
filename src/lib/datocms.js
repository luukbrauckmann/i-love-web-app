import { DATOCMS_API_KEY } from '$env/static/private';

export const get = (query) => fetch('https://graphql.datocms.com/', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    Authorization: `Bearer ${DATOCMS_API_KEY}`,
  },
  body: JSON.stringify({ query }),
}).then((response) => response.json())