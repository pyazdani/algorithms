function equateTemperatures(cDegrees){
    for(var cDegrees = 200; cDegrees > 0; cDegrees--){
        if(celsiusToFahrenheit(cDegrees) === cDegrees){
            console.log(cDegrees);
        }
    }
}