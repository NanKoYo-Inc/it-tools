import { defineTool } from '../tool';
import PasswordIcon from '~icons/mdi/form-textbox-password';
import { translate as t } from '@/plugins/i18n.plugin';

export const tool = defineTool({
  name: t('tools.password-strength-analyser.title'),
  path: '/password-strength-analyser',
  description: t('tools.password-strength-analyser.description'),
  keywords: ['password', 'strength', 'analyser', 'and', 'crack', 'time', 'estimation', 'brute', 'force', 'attack', 'entropy', 'cracking', 'hash', 'hashing', 'algorithm', 'algorithms', 'md5', 'sha1', 'sha256', 'sha512', 'bcrypt', 'scrypt', 'argon2', 'argon2id', 'argon2i', 'argon2d'],
  component: () => import('./password-strength-analyser.vue'),
  icon: PasswordIcon,
  createdAt: new Date('2023-06-24'),
});
