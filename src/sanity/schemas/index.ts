import type { SchemaTypeDefinition } from 'sanity';
import { documents } from './documents';

const schemaTypes: SchemaTypeDefinition[] = [...documents];

const schemaDefinition = {
  types: schemaTypes,
};

export default schemaDefinition;
