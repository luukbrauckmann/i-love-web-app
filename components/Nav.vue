<template>
    <nav>
        <ul>
            <li>
                <NuxtLink to="/">Home</NuxtLink>
            </li>
            <li>
                <NuxtLink to="/posts">Posts</NuxtLink>
            </li>
        </ul>
    </nav>
</template>

<style scoped> 
    ul {
        display: flex;
        list-style: none;
        gap: 1rem;
    }
</style>