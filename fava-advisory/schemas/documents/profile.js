export default {
    name: 'profileSettings',
    title: 'Profile Settings',
    type: 'document',
    fields: [
        {
            title: 'Company Name',
            name: 'company_name',
            type: 'string',
        },
        {
            title: 'Contact Information',
            name: 'contact_information',
            type: 'contact'
        },
        {
            title: 'Address',
            name: 'address',
            type: 'address'
        }
    ]
}