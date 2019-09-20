export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
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
                  buildHookId: '5d84375a52ec0ccb21fe3459',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog9-studio',
                  apiId: '668c7a4b-06f9-4c23-99e4-3a0765962369'
                },
                {
                  buildHookId: '5d843759f0530b783c20fb57',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog9',
                  apiId: 'eef6a5fa-051c-4225-b794-cd7e9d2ce03d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/magnushi/sanity-gatsby-blog9',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog9.netlify.com', category: 'apps'}
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
