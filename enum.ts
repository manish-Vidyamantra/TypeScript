enum dir {
    North,
    East,
    South,
    West
  };
  let val = 'East';
  console.log(dir[val]);

  function getSomeValue(val: number): number {
    return val + 1;
  }

  export {};