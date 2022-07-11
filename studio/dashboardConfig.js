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
                  buildHookId: '62cc28987d55d80fa300433e',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-x-studio',
                  apiId: '15a141c8-b47e-43d0-8b2c-6e16edb631d0'
                },
                {
                  buildHookId: '62cc289808f44e10006726d3',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-x',
                  apiId: '2466a7a0-49dc-4982-8bc2-e217ffbda540'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mikolajdobrucki/sanity-kitchen-sink-x',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-x.netlify.app', category: 'apps'}
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
