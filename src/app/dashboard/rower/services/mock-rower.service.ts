import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        const rowers = [
            {
                id: 1,
                firstName: 'Sher',
                lastName: 'Nepomuceno',
                age: 21,
                weight: 34,
                side: 'bow'
            },
            {
                id: 2,
                firstName: 'Miko',
                lastName: 'Lara',
                age: 22,
                weight: 35,
                side: 'stroke'
            },
            {
                id: 3,
                firstName: 'Ja',
                lastName: 'Quan',
                age: 23,
                weight: 36,
                side: 'bow'
            },
            {
                id: 4,
                firstName: 'Rainer',
                lastName: 'Lim',
                age: 24,
                weight: 37,
                side: 'bow'
            },
            {
                id: 5,
                firstName: 'Joan',
                lastName: 'Escano',
                age: 25,
                weight: 38,
                side: 'bow'
            },
        ];
        return {rowers};
    }
}
