<script setup>
const QUERY = `
        query {
            allPosts {
                slug
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

const { data } = await useGraphqlQuery({ query: QUERY });
</script>

<template>
  <Head>
    <Title>Posts</Title>
  </Head>

    <h1>Posts</h1>

  <article v-for="post in data.allPosts" :key="post.id">
    <h2>{{ post.title }}</h2>
    <p>{{ post.content }}</p>
    <NuxtLink :to="`/posts/${post.slug}`">Read more</NuxtLink>
  </article>
</template>
