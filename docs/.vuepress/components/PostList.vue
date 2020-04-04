<template>
<div>
    <div class="article" v-for="post in posts">
        <a v-bind:href="formatPath(post.path)">{{ post.frontmatter.title }}</a>
        <div class="keywords">
            <span v-if="post.frontmatter.tags">
                <a class="keyword" v-for="(tag, index) in post.frontmatter.tags" :key="index" :href="formatTag(tag)">
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
                .filter(x => x.path.startsWith('/township/minutes/') && x.frontmatter.blog_post)
                .sort((a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date));
        }
    },
    methods: {
        formatPath(path) {
          //var fullpath = '/' + path
          //return fullpath
          return path
        },
        formatTag(tag) {
            var anchor = tag.toLowerCase().replace(/ /g, "-")
            var fullpath = '/township/minutes/tag/#' + anchor
            return fullpath
        },
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