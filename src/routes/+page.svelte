<script>
    export let data;

    const { allPosts } = data;
</script>

<main>
    <h1>I Love Web</h1>

    {#each allPosts as post}
        <article>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
        </article>
    {/each}
</main>
