<template>
<div>
    <div class="article" v-for="post in posts">
        <a v-bind:href="post.path">{{ post.frontmatter.title }}</a>
        <div class="keywords">
            <span v-if="post.frontmatter.tags">
                <a class="keyword" v-for="(tag, index) in post.frontmatter.tags" :key="index" :href="'/post/tag/#'+formatAnchor(tag)">
                    {{tag}}
                </a>
            </span>
        </div>
    </div>
</div>
</template>

<script>
export default {
    computed: {
        posts() {
            console.log(this.$site)
            return this.$site.pages
                .filter(x => x.path.startsWith('/post/') && x.frontmatter.blog_post)
                .sort((a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date));
        }
    },
    methods: {
        formatAnchor(string) {
            return string.toLowerCase().replace(/ /g, "-")
        }
    }
}
</script>
<style scoped>
  .article {
    margin-bottom: 10px;
    border-bottom: solid 1px #3eaf7c;
    padding: 10px;
  }
  .keywords {
    margin-top: 10px;
    margin-bottom: 5px;
  }
  .keyword {
    padding: 5px;
    border-radius: 7px;
    font-size: small;
    background: #3eaf7c;
    margin-right: 5px;
    color: white;
    font-weight: 500;
  }
</style>