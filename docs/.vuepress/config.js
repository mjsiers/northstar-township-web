module.exports = {
    base: '/northstar-township-web/',
    title: 'North Star Township',
    description: "St. Louis County, Minnesota",
    themeConfig:{
        nav: [
          { text: 'BOARD', link: '/township/' },
          { text: 'FIRE/EMS', link: '/fireems/' },
          { text: 'RECYCLING', link: '/recycling/' },
        ],
        sidebar: [
          {
            title: 'Township Board',
            collapsable: false,
            children: [
              '/township/supervisors',
              '/township/staff',
              '/township/meetings',
              '/township/minutes/',
              '/township/minutes/tag/', 
              '/township/minutes/archive/',      
            ]
          },
          {
            title: 'Fire/EMS',
            collapsable: false,
            children: [
              '/fireems/members',
              '/fireems/events'
            ]
          }
        ]
    },
    plugins: [
      ['@vuepress/blog', {
        directories: [
          {
            id: 'townminutes',
            dirname: '_minutes/township',
            path: '/township/minutes/posts/',
            itemPermalink: '/township/minutes/posts/:year/:month/:slug',
            layout: 'Layout',
            itemLayout: 'Layout',
            pagination: {
              perPagePosts: 15,
            },
          },
        ],
      }]
    ]
}
