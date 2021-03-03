<template lang='pug'>
div
    div(v-for='post in posts')
        h2: a(:href='post.path')| {{post.title}}
        h3| {{post.frontmatter.date}}
</template>

<script>
export default {
    computed: {
        posts() {
            console.log(this.$site)
            return this.$site.pages.filter(page => page.path.startsWith('/_posts'))
        }
    }
}
</script>
