let count = document.getElementById("value").textContent;
let len = document.getElementById("length");
let vol = document.getElementById("Volume");
let mas = document.getElementById("Mass");


let len_feet =(count * 3.28084).toFixed(2);
let len_meter = (count / 3).toFixed(2);

let vol_gallons = (count/3.78541).toFixed(2);
let vol_liters = (count*3.78541).toFixed(2);

let mas_kilos= (count/2.20462).toFixed(2);
let mas_pound= (count*2.20462).toFixed(2);

len.textContent = "20 meters = " + len_feet +" feet || " + count + " feet = " +len_meter + " meters";

vol.textContent = count+" liters = " + vol_gallons +" gallons || " + count + " feet = " +vol_liters + " liters";

mas.textContent = count+" pounds = " + mas_kilos +" kilos || " + count + " kilos = " +mas_pound + " pounds";

