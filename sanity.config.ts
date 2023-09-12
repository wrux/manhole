import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { dataset, projectId } from 'sanity/config';
import schema from 'sanity/schemas';
import { media } from 'sanity-plugin-media';
import { settingsStructure } from 'sanity/plugins/settings';
import settingsType from 'sanity/schemas/settings';
import { visionTool } from '@sanity/vision';
import {
  dashboardTool,
  projectUsersWidget,
  projectInfoWidget,
} from '@sanity/dashboard';
import { documentListWidget } from 'sanity-plugin-dashboard-widget-document-list';
import { unsplashImageAsset } from 'sanity-plugin-asset-source-unsplash'
import { singletonPlugin } from 'sanity/plugins/singleton';

export default defineConfig({
  name: 'manhole',
  title: 'Manhole',
  projectId,
  dataset,
  plugins: [
    dashboardTool({
      widgets: [
        documentListWidget({
          title: 'Documents with unpublished changes',
          query: '*[_id in path("drafts.**")] | order(_updatedAt desc)',
          layout: { width: 'medium' },
        }),
        projectInfoWidget({
          layout: { width: 'small' },
        }),
        projectUsersWidget(),
      ],
    }),
    deskTool({
      structure: settingsStructure(settingsType),
    }),
    media(),
    singletonPlugin([
      'settings',
    ]),
    visionTool(),
    unsplashImageAsset(),
  ],
  schema,
});
