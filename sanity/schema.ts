// TODO: Add schema for galleries
// TODO: Add schema for testimonials
// TODO: Add schema for content

import { type SchemaTypeDefinition } from 'sanity'
import blog from './schemas/blog'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blog],
}
