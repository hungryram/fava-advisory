export default {
    title: 'Buildings',
    name: 'buildings',
    type: 'document',
    fields: [
        {
            title: 'Title',
            name: 'title',
            type: 'string',
        },
        {
            title: 'Slug',
            name: 'slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96
            }
        },
        {
            title: 'Market Report File',
            name: 'marketReportFile',
            type: 'file'
        },
        {
            title: 'Number of Units',
            name: 'numberofUnit',
            type: 'string'
        },
        {
            title: 'Number of Floors',
            name: 'numberofFloors',
            type: 'string'
        },
        {
            title: 'Units',
            name: 'units',
            type: 'unitBlock'
        },
        {
            title: 'Cover Image',
            name: 'cover',
            type: 'image'
        },
        {
            name: 'imagesGallery',
            title: 'Images gallery',
            type: 'array',
            of: [{ type: 'image' }]
        },
        {
            title: 'Heading',
            name: 'heading',
            type: 'string'
        },
        {
            title: 'Content',
            name: 'content',
            type: 'blockContent'
        },
        {
            title: 'Graphs',
            name: 'graphs',
            type: 'graphBlock'
        },
        {
            title: 'Search Engine Optimization',
            name: 'seo',
            type: 'seo'
        }
    ]
}