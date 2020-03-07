<template>
  <div>
    <h2>
      <a :href="'#'+formatAnchor(tag.tag)" aria-hidden="true" class="header-anchor">#</a>
      {{ tag.tag }} [{{ num_pages }}]
    </h2>
    <div v-for="item in tag.pages">
      <a :href="item.path"> {{ formatDate(item.date) }}</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TagItem',
  props: {
    tag: {
      type: Object,
      required: true,
    },
  },
  computed: {
    num_pages() {
      console.log(this.tag)
      return this.tag.pages.length
    }
  },
  methods: {
    formatAnchor(string) {
      return string.toLowerCase().replace(/ /g, "-")
    },
    formatDate(string) {
      //var date = new Date(string)
      return string.slice(0, 10);
    }
  }
}
</script>