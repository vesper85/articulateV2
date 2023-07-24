export default {
    name: 'testblog',
    type: 'document',
      title: 'Blog Template',
    fields: [
      {
        name: 'title',
        type: 'string',
        title: 'Title',
        description: 'Enter Blog Title here'
      },
      {
        name: 'slug',
        type: 'string',
        title: 'slug',
        description: 'slug of a post goes here'
      },
      {
        name: 'date',
        type: 'date',
        title: 'Date',
        description: 'Created at'
      },
      {
        name: 'faceimage',
        type: 'image',
        title: 'Image',
        description: 'Add Face Image here'
      },
      {
        name: 'mdx_playground',
        type: 'markdown',
        title: 'MDX',
        description: 'Add mdx here'
      }
    ]
  }