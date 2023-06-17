import { ArrowsShuffle } from '@vicons/tabler';
import { defineTool } from '../tool';

export const tool = defineTool({
  name: 'Xml formatter',
  path: '/xml-formatter',
  description: 'Prettify your XML string to a human friendly readable format.',
  keywords: ['xml', 'prettify', 'format'],
  component: () => import('./xml-formatter.vue'),
  icon: ArrowsShuffle,
  createdAt: new Date('2023-06-17'),
});
