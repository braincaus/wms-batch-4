'use strict';

import assert from 'assert';
import {formatNumber} from '../src/index.js';

describe('My suite', () => {
    it('My test', () => {
        assert.equal(true, true);
    });
    it('Expect the param is a number default format', () => {
        const numberFormatted = formatNumber(10);
        assert.equal('$10', numberFormatted);
    });
    it('Expect the param is a number default format', () => {
        const numberFormatted = formatNumber('10');
        assert.equal('$0', numberFormatted);
    });

    it('Expect the param is a number large format', () => {
        const numberFormatted = formatNumber(127637389,'large');
        assert.equal('$127,637,389 USD', numberFormatted);
    });
    it('Expect the param is a number small format', () => {
        const numberFormatted = formatNumber(1000000,'small');
        assert.equal('$1,000,000', numberFormatted);
    });

});
