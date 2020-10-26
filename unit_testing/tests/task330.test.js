const perfect = require('../script/task330');

describe( 'Testing of function perfect()', () => {
  test(  'Is number perfect', ()=> {
    expect(perfect(0)).toBeNull;
  } );
  test(  'Is number perfect', ()=> {
      expect(perfect(6)).toEqual([6]);
  } );

  test(  'Is number perfect', ()=> {
    expect(perfect(28)).not.toBeUndefined();   
} );
test(  'Is number perfect', ()=> {
    expect(perfect(28)).toEqual([6, 28]);    
} );
});