export default {
    name: 'unitBlock',
    title: 'Unit',
    type: 'object',
    fields: [
        {
            name: 'units',
            type: 'array',
            of: [
                {
                    title: 'Unit',
                    type: 'innerUnit',
                }
            ]
        }
    ]
}