export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
    { name: 'structure-menu' },
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
                  buildHookId: '6352e86ec7069a508c344c2c',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-ro644jez',
                  apiId: '1343aa08-5ca4-46ac-9172-2908fe93b701'
                },
                {
                  buildHookId: '6352e86f76907f4be88e7520',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-u6189kwf',
                  apiId: 'e3ba62e2-1fa1-41fc-a066-a101ae102bd7'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/leofriend1048/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-u6189kwf.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
