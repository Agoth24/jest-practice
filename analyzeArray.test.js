import analyzeArray from './analyzeArray'

test('test for [0,2,3,8]', () => {
    expect(analyzeArray([0,2,3,8])).toMatchObject({
        average: 3.25,
        min: 0,
        max: 8,
        length: 4 
    })
    
})

test("test for [1,2,3,4]", () => {
    expect(analyzeArray([1,2,3,4])).toMatchObject({
        average: 2.5,
        min: 1,
        max: 4,
        length: 4
    })
})

test("test for [2,6,8,10,12,14]", () => {
    expect(analyzeArray([2,4,6,8,10,12,14])).toMatchObject({
        average: 8,
        min: 2,
        max: 14,
        length: 7 
    })
})

test("test for [1,2,6,8,3]", () => {
    expect(analyzeArray([1,2,6,8,3])).toMatchObject({
        average: 4,
        min: 1,
        max: 8,
        length: 5
    })
})