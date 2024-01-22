<script setup>
const { slug } = useRoute().params;

const QUERY = `
        query {
            post(filter: { slug:{ eq: "${slug}" } }) {
                id
                title
                content
                _status
                _firstPublishedAt
            }
        }
    `;

const { data, error } = await useGraphqlQuery({ query: QUERY });
</script>

<template>
  <Head>
    <Title>{{ data.post.title }}</Title>
    <Meta name="description" :content="data.post.title" />
  </Head>

  <NuxtLink to="/">Back</NuxtLink>
  <h1>{{ data.post.title }}</h1>
  <p>{{ data.post.content }}</p>
</template>
