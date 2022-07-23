// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// We import object and document schemas
import blockContent from './blockContent'
import contact from './blocks/contact'
import reviews from './blocks/reviews'
import unit from './blocks/unit'
import innerUnit from './blocks/innerUnit'
import seo from './blocks/seo'
import address from './blocks/address'
import listingDetails from './blocks/listingDetails'
import innerReview from './blocks/innerReview'
import team from "./documents/team"
import buildings from "./documents/buildings"
import listings from "./documents/listings"

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
    team,
    listings,
    buildings,
    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
    blockContent,
    contact,
    reviews,
    innerReview,
    seo,
    address,
    listingDetails,
    unit,
    innerUnit
  ]),
})
