import calculatePositionByPlacementMap from './calculatePositionByPlacementMap';

describe('calculatePositionByPlacementMap utility', () => {
  it('should be an object', () => {
    expect(calculatePositionByPlacementMap).to.be.an('object');
  });

  it('should be map of function', () => {
    Object.keys(calculatePositionByPlacementMap).forEach((key) => {
      expect(calculatePositionByPlacementMap[key]).to.be.a('function');
    });
  });
});
