import { Observable, of, combineLatest, interval } from 'rxjs';
import { delay, map, repeat, switchMap, debounce } from 'rxjs/operators'

interface Sensors {
    humidity: number;
    pressure: number;
    temperature: number;
}

const getRandomInt = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min)) + min;
}
export class FakeService {

    private humidity$: Observable<number> = of(null).pipe(
        switchMap(() => of(getRandomInt(1, 100))),
        delay(getRandomInt(100, 2000)),
        repeat()
    );

    private temperature$: Observable<number> = of(null).pipe(
        switchMap(() => of(getRandomInt(1, 100))),
        delay(getRandomInt(100, 2000)),
        repeat()
    );

    private pressure$: Observable<number> = of(null).pipe(
        switchMap(() => of(getRandomInt(1, 100))),
        delay(getRandomInt(100, 2000)),
        repeat()
    );

    public get sensors(): Observable<Sensors> {
        return combineLatest([this.humidity$, this.pressure$, this.temperature$])
            .pipe(
                map(vals => ({
                    humidity: vals[0],
                    pressure: vals[1],
                    temperature: vals[2],
                })),
                debounce(() => interval(200))
            )
    }
}

export default new FakeService();