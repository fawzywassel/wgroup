import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'chunk'
})

export class ChunkPipe implements PipeTransform {
    transform<T>(array: T[], size: number): T[][] {
        if (!array.length) {
            return [];
        }
        return array.reduce((acc: T[][], _, i) =>
            (i % size) ? acc : [...acc, array.slice(i, i + size)], []);
    }
}
