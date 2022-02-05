var name={
    firstname:"Imran",
    lastname:"khan"
}
const printFullname=function(city,state){
    console.log(this.firstname,this.lastname,city,state)
}
printFullname.call(name,"delhi","Haryana")
printFullname.apply(name,["Gurgaon","mumbai"])
var x = printFullname.bind(name, "delhi", "haryana");
x()