export default {
    title: 'Graph',
    name: 'subGraph',
    type: 'object',
    fields: [
        {
            title: 'Name of graph',
            name: 'graphName',
            type: 'string'
        },
        {
            title: 'Description',
            name: 'description',
            type: 'blockContent'
        },
        {
            title: 'Type of Graph',
            name: 'graphType',
            type: 'string',
            options: {
                list: [
                    {title: 'Line', value: 'line'},
                    {title: 'Bar', value: 'bar'},
                    {title: 'Pie', value: 'pie'}
                ]
            }
        },
        {
            title: 'Axes',
            name: 'axes',
            type: 'array',
            of: [
                {type: 'axes'}
            ]
        }
    ]
}