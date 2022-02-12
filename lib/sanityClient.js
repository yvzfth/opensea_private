import sanityClient from '@sanity/client'

export const client = sanityClient({
    projectId: 'v425xq20',
    dataset: 'production',
    apiVersion: '2021-03-25',
    token: 'skFA8YOiSm4r0BKY8pUFjnMEfMMEYjxhsilGT30hF9cWSBOh92ZvmAt4f0M4SYmRjTuvd6BfR6YOQGCotJZa8aM515vmSgXSejwdjwRs54TfSebLhxFsChT5MO9AnRmjtd7L64kRgcesH8HSY2vU2VnWGKZArlRkiMqitRI18cwqnR7SeCy3',
    useCdn: false,
})