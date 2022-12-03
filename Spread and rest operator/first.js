// example of Rest Operator
function demo(a,b,c,...other){
    console.log(a,b,c,other)
    console.log(other[0],other[1])
}
demo(1,2,3,12,13)

//spread operator
const arr = [12,13,14,15,16]
const val = [...arr]
console.log(val)

const myVehicle = {
    brand: 'Ford',
    model: 'Mustang',
    color: 'red'
  }
  
  const updateMyVehicle = {
    type: 'car',
    year: 2021, 
    color: 'yellow'
  }
  
  const myUpdatedVehicle = {...myVehicle, ...updateMyVehicle}
  console.log(myUpdatedVehicle)