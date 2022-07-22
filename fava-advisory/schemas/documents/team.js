export default {
    name: 'team',
    title: 'Team',
    type: 'document',
    fields: [
        {
            title: 'Title',
            name: 'title',
            type: 'string'
        },
        {
            title: 'Slug',
            name: 'slug',
            type: 'slug',
            validation: Rule => Rule.required().error('A slug is required to create the URL'),
            options: {
                source: 'title',
                maxLength: 96
            }
        },
        {
            title: 'Image',
            name: 'image',
            type: 'image'
        },
        {
            title: 'Contact Information',
            name: 'contact_information',
            type: 'contact'
        },
        {
            title: 'Content',
            name: 'content',
            type: 'blockContent'
        },

    ]
}