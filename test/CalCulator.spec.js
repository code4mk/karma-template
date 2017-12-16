class Calculator{
  add(x, y){
    return x+y;
  }
  sub(x, y){
    return x-y;
  }
}
describe('this is describe', function () {
  var calculate = new Calculator();

  it('addition', function () {
    expect(calculate.add(3, 4)).toEqual(7);
  });
  it('subtraction', function () {
    expect(calculate.sub(13, 4)).toEqual(9);
  });
  it('this is it', function () {
    console.log('ok done');
  });
  it('this two', function () {
    expect(5).toEqual(5);
  })
});
