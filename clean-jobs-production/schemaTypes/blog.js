export default {
    name: 'blog',
    type: 'document',
    title: 'Blog',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'The title of the blog post.',
        },
        {
            name: 'date',
            type: 'date',
            title: 'Publish Date',
            options: {
                dateFormat: 'YYYY-MM-DD',
                calendarTodayLabel: 'Today',
            },
            initialValue: () => new Date().toISOString().split('T')[0], // Sets today's date automatically
        },
        {
            name: 'authorImage',
            type: 'image',
            title: 'Author Image',
        },
        {
            name: 'authorName',
            type: 'string',
            title: 'Author Name',
        },
        {
            name: 'slug',
            type: 'slug',
            title: 'Slug of your blog article',
            options: {
                source: 'title',
            }
        },
        {
            name: 'titleImage',
            type: 'image',
            title: 'Title Image',
        },
        {
            name: 'content',
            title: 'Content',
            type: 'array',
            of: [
                { type: 'block' },
                {
                    type: 'object',
                    name: 'imageGroup',
                    title: 'Image Group',
                    fields: [
                        {
                            name: 'images',
                            type: 'array',
                            title: 'Images',
                            of: [{ type: 'image' }],
                            options: {
                                hotspot: true,
                            },
                        },
                        {
                            name: 'layout',
                            type: 'string',
                            title: 'Layout',
                            options: {
                                list: [
                                    { title: 'Grid', value: 'grid' },
                                    { title: 'Block', value: 'block' },
                                ],
                                layout: 'radio', // Use radio buttons for selection
                            },
                        },
                    ],
                },
            ],
        },
    ]
}
