export default {
    title: 'Listing Details',
    name: 'listingDetails',
    type: 'object',
    options: {
        collapsible: true,
        collapsed: true
    },
    fields: [
        {
            title: 'Price',
            name: 'price',
            type: 'string',
            description: 'Include the dollar sign'
        },
        {
            title: 'Property Type',
            name: 'property_type',
            type: 'string'
        },
        {
            title: 'Bathrooms',
            name: 'bathrooms',
            type: 'string',
        },
        {
            title: 'Bedrooms',
            name: 'bedrooms',
            type: 'string',
        },
        {
            title: 'Square Footage',
            name: 'square_footage',
            type: 'string',
        },
        {
            title: 'Year Built',
            name: 'year_built',
            type: 'string',
        },
        {
            title: 'MLS Number',
            name: 'mls_number',
            type: 'string',
        }
    ]
}