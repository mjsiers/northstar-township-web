<template>
  <div>
    <div v-for="item in tags">
      <TagItem :tag=item />
    </div>
  </div>
</template>

<script>
import TagItem from "./TagItem"
export default {
    components: {
        TagItem
    },
    computed: {
        tags() {
            var posts = this.$site.pages.filter(x => x.path.startsWith('/township/minutes/') && x.frontmatter.blog_post)
                                        .sort((a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date));
            console.log(posts)

            var tagMap = new Map()
            for (var i = 0; i < posts.length; i++) {
                var date = new Date(posts[i].frontmatter.date)
                var year = date.getFullYear().toString()
                var path = posts[i].path
                var page = {'title': posts[i].title, 'date':posts[i].frontmatter.date,  'path': path}

                var item = tagMap.get(year)
                if (item === undefined) {
                    item = {'tag': year, 'pages': [page]}
                    tagMap.set(year, item)
                }
                else {
                    item.pages.push(page)
                }
            }

            var tags = Array.from(tagMap.values()).sort((a, b) => (a.tag < b.tag) ? 1 : -1)
            console.log(tags)
            return tags
        }
    },
    methods: {
        formatAnchor(string) {
            return string.toLowerCase().replace(/ /g, "-")
        }
    }
}
</script>