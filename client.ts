import sanityClient from '@sanity/client'

export default sanityClient({
  projectId: 'ledxhdo7',
  dataset: 'production',
  useCdn: true // `false` if you want to ensure fresh data
})