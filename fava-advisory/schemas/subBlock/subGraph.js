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
            title: 'Graph Image',
            name: 'graphImage',
            type: 'image'
        },
        {
            title: 'Graph Embed Code',
            name: 'graphCode',
            type: 'text',
            description: 'Publish your graph on Google Sheets and paste the code in here. Use embed option instead of link, and choose interactive'
        }
    ]
}