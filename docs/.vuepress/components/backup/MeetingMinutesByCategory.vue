<template>
  <RenderlessPagesList :byPaths="byPaths" :notPaths="notPaths" :byTags="byTags" :byCategories="byCategories" :notTags="notTags" :notCategories="notCategories">
    <div slot-scope="{ pages, categories, formatDate, formatAnchor }">
      <div v-for="category in categories()" :key="category">
        <h2>
          <a :href="'#'+formatAnchor(category)" aria-hidden="true" class="header-anchor">#</a>
          {{ category }}
        </h2>
        <MeetingMinutes :byCategories="category" />
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