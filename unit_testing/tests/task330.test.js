const perfect = require('../script/task330');

test( 'Is number perfect', ()=>{
    expect(perfect(0)).toBeNull,
    expect(perfect(6)).toEqual([6]),
    expect(perfect(28)).not.toBeUndefined(),
    expect(perfect(28)).toEqual([6, 28])
})