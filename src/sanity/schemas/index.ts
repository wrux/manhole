import type { SchemaTypeDefinition } from 'sanity';
import { blockTypes } from './blocks';
import { documents } from './documents';
import { objects } from './objects';
import settings from './settings';

const schemaTypes: SchemaTypeDefinition[] = [
  ...blockTypes,
  ...documents,
  ...objects,
  // Singletons
  settings,
];

const schemaDefinition = {
  types: schemaTypes,
};

export default schemaDefinition;
