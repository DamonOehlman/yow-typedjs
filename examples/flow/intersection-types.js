// @flow
type Vehicle = {| engine: string, wheels: number |};
type Colorable = {| color: string |}
type ColoredVehicle = Vehicle | Colorable;

const boringMotorbike: Vehicle = {
  engine: '500cc',
  wheels: 2
};

const redThing: Colorable = {
  color: '#FF0000'
};

const redCar: ColoredVehicle = {
  engine: 'V8',
  wheels: 4
};
