interface Flower {
  petals: number
  height: number
  color: string
  fragrence: boolean
  water: (ml: number) => void
}

interface Order {
  type: string
  amount: number
  color?: string
}

class Waterable {
  height = 0;
  growthRate = 100;
  wate = (ml: number) => {
    this.height = ml/ this.growthRate
  }
}
// const flower: Flower = {
//   petals: 5,
//   height: 10,
//   color: 'red',
//   fragrence: true,
// }

class Tulip implements Flower {
  constructor(color: string) {
    this.color = color
  }

  petals = 6
  height = 0
  color = 'pink'
  fragrence = true
  growthRate = 500;
  // water(ml) {
  //   this.height += ml / 300
  // }
}

const sunflower = new Sunflower()

class Daisy implements Flower {
  petals = 20
  height = 0
  color = 'yellow'
  fragrence = false
  water(ml) {
    this.height += ml / 200
  }
}

class Gardenia implements Flower {
  petals = 30
  height = 0
  color = 'white'
  fragrence = true
  water(ml) {
    this.height += ml / 100
  }
}

const createBouquet = (orders: Order[]): Flower[] => {
  let flowers: Flower[] = []
  for (let i = 0; i < orders.length; i++) {
    let order = orders[i]
    for (let j = 0; j < order.amount; j++) {
      if (order.type === 'Gardenia') {
        flowers.push(new Gardenia())
      } else if (order.type === 'Tulip') {
        flowers.push(new Tulip(order.color))
      } else if (order.type === 'Daisy') {
        flowers.push(new Daisy())
      }
    }
  }
  return flowers
}

const bouquet = createBouquet([
  {
    type: 'Gardenia',
    amount: 3,
    color: 'red'
  },
  {
    type: 'Tulip',
    amount: 4,
    color: 'blue'
  },
  {
    type: 'Daisy',
    amount: 5,
    color: 'yellow'
  }
])

// const tulip = new Tulip('pink')
console.log(bouquet)
