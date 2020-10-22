export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f917dc2d5cf360129b2d0fe',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-g8ji1jhv',
                  apiId: 'd5bc5755-beb3-4e0e-aedb-24d96fb7f202'
                },
                {
                  buildHookId: '5f917dc31daf4c00eb7eb9c3',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-6vdpwfxd',
                  apiId: '740b22f7-6422-49af-b058-978f16969987'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Babalatchi/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-6vdpwfxd.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
