export default {
    name: 'graphBlock',
    title: 'Graph',
    type: 'object',
    fields: [
        {
            name: 'graphs',
            type: 'array',
            of: [
                {
                    title: 'Graph',
                    type: 'subGraph',
                }
            ]
        }
    ]
}