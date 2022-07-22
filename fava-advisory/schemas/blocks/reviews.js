export default {
    name: 'reviews',
    title: 'Reviews',
    type: 'object',
    fields: [
        {
            name: 'review',
            type: 'array',
            of: [
                {
                    title: 'Review',
                    type: 'innerReview',
                }
            ]
        }
    ]
}