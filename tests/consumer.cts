import * as api from '@lp-labs/month-boundary-codec';
import { monthBoundaries } from '@lp-labs/month-boundary-codec';
console.log(monthBoundaries('2024-02-12'));
// @ts-expect-error invalid argument must be rejected by declarations
api.monthBoundaries(20240101);
