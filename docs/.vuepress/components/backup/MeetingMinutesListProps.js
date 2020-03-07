export default {
    byTags: {
      default() {
        return []
      },
      type: [Array, String]
    },
    byCategories: {
      default() {
        return []
      },
      type: [Array, String]
    },
    byPaths: {
      default() {
        return ["/township/minutes"]
      },
      type: [Array, String]
    },
    notTags: {
      default() {
        return []
      },
      type: [Array, String]
    },
    notCategories: {
      default() {
        return []
      },
      type: [Array, String]
    },
    notPaths: {
      default() {
        return ["/township/minutes/tags/", "/township/minutes/", "/township/minutes/categories/"]
      },
      type: [Array, String]
    }
  }
  