import { type StructureBuilder } from 'sanity/desk';
import { BookOpen, Buildings, Person } from '@phosphor-icons/react';

export const defaultDocumentNodeResolver = (S: StructureBuilder) =>
  S.document().views([S.view.form()]);

export const structure = (S: StructureBuilder) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Posts')
        .icon(BookOpen)
        .child(S.documentTypeList('post')),
      S.divider(),
      S.listItem()
        .title('Locations')
        .icon(Buildings)
        .child(S.documentTypeList('location')),
      S.listItem()
        .title('Persons')
        .icon(Person)
        .child(S.documentTypeList('person')),
    ]);
