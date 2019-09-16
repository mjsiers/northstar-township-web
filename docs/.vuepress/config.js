let minutesSideBarPaths = ["/minutes/", "/minutes/tags/"]
module.exports = {
    base: '/northstar-township-web/',
    title: 'North Star Township',
    description: "St. Louis County, Minnesota",
    themeConfig:{
        nav: [
          { text: 'BOARD', link: '/township/' },
          { text: 'FIRE/EMS', link: '/fireems/' },
          { text: 'RECYCLING', link: '/recycling/' },
          { text: 'ABOUT', link: '/about/' },
        ],
        sidebar: [
          {
            title: 'Township Board',
            collapsable: false,
            children: [
              '/township/supervisors',
              '/township/events',
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
    }
}