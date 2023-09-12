import { definePlugin } from 'sanity';

export const singletonPlugin = definePlugin<string[]>((types) => ({
  name: 'singletonPlugin',
  document: {
    // Hide 'Singletons (such as Home)' from new document options
    newDocumentOptions: (prev, { creationContext }) => {
      if (creationContext.type === 'global') {
        return prev.filter(
          (templateItem) => !types.includes(templateItem.templateId)
        );
      }
      return prev;
    },

    // Removes the "duplicate" action on the Singletons (such as Home)
    actions: (prev, { schemaType }) => {
      if (types.includes(schemaType)) {
        return prev.filter(({ action }) => action !== 'duplicate');
      }
      return prev;
    },
  },
}));
