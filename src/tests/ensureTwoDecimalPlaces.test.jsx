import { describe, it, expect } from 'vitest';

import { ensureTwoDecimalPlaces } from '../utils';

describe('ensureTwoDecimalPlaces', () => {
    it('should return the price with two decimal places', () => {
        expect(ensureTwoDecimalPlaces(1)).toBe(1.00);
        expect(ensureTwoDecimalPlaces(1.1)).toBe(1.10);
        expect(ensureTwoDecimalPlaces(1.11)).toBe(1.11);
    });
});