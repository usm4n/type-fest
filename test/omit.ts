import {expectType} from 'tsd-check';
import {Omit} from '..';

declare const omit: Omit<{a: number; b: string}, 'b'>;
expectType<{a: number}>(omit);
