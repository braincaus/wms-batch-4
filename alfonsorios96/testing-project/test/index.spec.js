'use strict';

import assert from 'assert';
import sinon from 'sinon';
import * as lib from '../src/index.js';

describe('My suite', () => {

    it('My test', () => {
        assert.equal(true, true);
    });
    it('Expect the param is a number default format', () => {
        const numberFormatted = lib.formatNumber(10);
        assert.equal('$10', numberFormatted);
    });
    it('Expect the param is a number default format', () => {
        const numberFormatted = lib.formatNumber('10');
        assert.equal('$0', numberFormatted);
    });

    it('Expect the param is a number large format', () => {
        const numberFormatted = lib.formatNumber(127637389, 'large');
        assert.equal('$127,637,389 USD', numberFormatted);
    });
    it('Expect the param is a number small format', () => {
        const numberFormatted = lib.formatNumber(1000000, 'small');
        assert.equal('$1,000,000', numberFormatted);
    });
    it('Expect the param is a number small format', () => {
        const numberFormatted = lib.formatNumber(1234.56, 'small');
        assert.equal('$1,234.56', numberFormatted);
    });

    it('Testing a API Service', (done) => {
        const spy = sinon.spy();
        sinon.stub(lib.axios, 'get').callsFake(() => new Promise(resolve => resolve(true)));
        lib.myRest('https://randomuser.me/api/?results=50', spy);
        done();
        assert.equal(spy.called);
    });

});
