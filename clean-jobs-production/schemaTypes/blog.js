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
            name: 'images',
            type: 'array',
            title: 'Content Images',
            of: [{ type: 'image' }],  // Allows multiple images
            options: {
                layout: 'grid',  // Optional: displays the images in a grid
            }
        },
        {
            name: 'content',
            type: 'array',
            title: 'Content of the blog post.',
            of: [{ type: 'block' }]
        }
    ]
}
