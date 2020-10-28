import { timer } from 'rxjs';
import { bufferCount, scan, take, takeUntil, tap } from 'rxjs/operators';

import { FakeService } from './fakeservice'

describe('Fake service test', () => {
    it('values must be numbers', done => {
        const { sensors } = new FakeService();

        sensors.pipe(
            take(1)
        ).subscribe(({ humidity, pressure, temperature }) => {
            expect(typeof humidity).toBe('number');
            expect(typeof pressure).toBe('number');
            expect(typeof temperature).toBe('number');
            done();
        });
    });

})