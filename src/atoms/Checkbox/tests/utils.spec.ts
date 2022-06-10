import { getNumber } from './utils'

describe('getNumber', () => {
    test('should get number', () => {
        const number = getNumber(2)

        expect(number).toEqual(2)
    })
})
