// @flow
interface Vector {
  x: number,
  y: number
}

function add(v1: Vector, v2: Vector): Vector {
  return {
    x: v1.x + v2.x,
    y: v1.y + v2.y
  };
}

add({ x: 5, y: 10 }, { x: 2, y: 2 });
// add(add({ x: 5, y: 5 }, { x: 2, y: 2 }), { x: 10, y: 10 });

// $FlowFixMe
add({ x: 5, y: 10 }, { x: 5 });

