<template>
  <RenderlessPagesList :byPaths="byPaths" :notPaths="notPaths" :byTags="byTags" :byCategories="byCategories" :notTags="notTags" :notCategories="notCategories">
    <div slot-scope="{ pages, tags, formatDate, formatAnchor }">
      <div v-for="tag in tags()" :key="tag">
        <h2>
          <a :href="'#'+formatAnchor(tag)" aria-hidden="true" class="header-anchor">#</a>
          {{ tag }}
        </h2>
        <MeetingMinutes :byTags="tag" />
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
