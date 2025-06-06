import type { Perms } from '@/types/perms';

export const GROUPED_PERMS = {
	[Symbol.for('games.create')]: 'whitelist',
	[Symbol.for('games.manage')]: 'driver',

	[Symbol.for('points.manage')]: 'driver',
} as Record<symbol, Exclude<Perms, symbol>>;
