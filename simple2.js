//Определить какой четверти принадлежит точка с координатами (х,у)



var x = (Math.floor(Math.random()*200)-100);
var y = (Math.floor(Math.random()*200)-100);

if (x>0 && y>0) {
    console.log (`The point with coordinates x = ${x} and y = ${y} in 1st quarter`)
}
if (x>0 && y<0) {
    console.log (`The point with coordinates x = ${x} and y = ${y} in 4th quarter`)
}
if (x<0 && y>0) {
    console.log (`The point with coordinates x = ${x} and y = ${y} in 2nd quarter`)
}
if (x<0 && y<0) {
    console.log (`The point with coordinates x = ${x} and y = ${y} in 3rd quarter`)
}
if (x==0) {
    console.log (`The point lies on the axis y`)
}
if (y==0) {
    console.log (`The point lies on the axis x`)
}
if (x==0 && y==0) {
    console.log (`The point lies on the zero axis`)
}