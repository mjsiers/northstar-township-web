<template>
  <RenderlessPagesList :byPaths="byPaths" :notPaths="notPaths" :byTags="byTags" :byCategories="byCategories" :notTags="notTags" :notCategories="notCategories">
    <div slot-scope="{ pages, formatDate }">
      <div v-for="page in pages" :key="page.path">
        <small class="text-grey">
          {{ formatDate(page.frontmatter.date) }} &bull;
        </small>
        <a :href="page.path">{{ page.title }}</a><br/>
      </div>
    </div>
  </RenderlessPagesList>
</template>

<script>
import RenderlessPagesList from "./RenderlessPagesList"
import minutesPageListProps from "./MeetingMinutesListProps"
export default {
  props: minutesPageListProps,
  components: {
    RenderlessPagesList
  }
}
</script>