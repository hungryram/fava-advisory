export default {
    title: 'Listings',
    name: 'listings',
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
            title: 'Hide',
            name: 'hide',
            type: 'boolean',
            description: 'Hide the listing from the listings page'
        },
        {
            title: 'Address',
            name: 'Address',
            type: 'address'
        },
        {
            title: 'Details',
            name: 'details',
            type: 'listingDetails'
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
            title: 'Content',
            name: 'content',
            type: 'blockContent'
        },
        {
            title: 'Search Engine Optimization',
            name: 'seo',
            type: 'seo'
        }
    ]
}