import { goods, regulars } from './Controller';

it('goods between guess and target', () => {
    expect(goods(1273, 1234)).toEqual(2);
    expect(goods(8564, 1234)).toEqual(1);
    expect(goods(4321, 1234)).toEqual(0);
    expect(goods(1234, 1234)).toEqual(4);
    expect(goods(2121, 1234)).toEqual(0);
})

it('regulars between guess and target', () => {
    expect(regulars(1273, 1234)).toEqual(1);
    expect(regulars(8564, 1234)).toEqual(0);
    expect(regulars(4321, 1234)).toEqual(4);
    expect(regulars(1234, 1234)).toEqual(0);
    expect(regulars(2121, 1234)).toEqual(2);
})
