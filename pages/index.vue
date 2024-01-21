<script setup>
    const QUERY = `
        query {
            allPosts {
                id
                title
                content
                _status
                _firstPublishedAt
            }

            _allPostsMeta {
                count
            }
        }
    `;

    const { data, error } = await useGraphqlQuery({ query: QUERY });
</script>

<template>
    <main>
        <h1>I Love Web</h1>

        <article v-for="post in data.allPosts">
            <h2>{{post.title}}</h2>
            <p>{{post.content}}</p>
        </article>
    </main>
</template>