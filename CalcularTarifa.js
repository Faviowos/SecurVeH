
function CalcularTarifa(cliente, vehiculo, tipoDeVehiculo, horasDeServicio) {
    if (!cliente || !vehiculo || !tipoDeVehiculo || !horasDeServicio) {
        console.log("Por favor, ingrese todos los datos: nombre, vehículo, tipo de vehículo y horas.");
        return;
    }

    if (typeof cliente !== 'string' || typeof vehiculo !== 'string' || typeof tipoDeVehiculo !== 'string') {
        console.log("Los campos de nombre, vehículo y tipo de vehículo deben ser texto.");
        return;
    }

    if (typeof horasDeServicio !== 'number' || horasDeServicio <= 0) {
        console.log("Las horas de servicio deben ser un número positivo.");
        return;
    }

    let tarifaPorHora = 0;
    let descripcionVehiculo = "";

    const tarifas = {
        "sin_motor": 3,
        "con_motor": 4.5,
        "menos_4_ejes": 6,
        "mayores_4_ejes": 10
    };

    switch (tipoDeVehiculo) {
        case "menores_sin_motor":
            tarifaPorHora = tarifas.sin_motor;
            descripcionVehiculo = "Vehículo menor sin motor";
            break;
        case "menores_con_motor":
            tarifaPorHora = tarifas.con_motor;
            descripcionVehiculo = "Vehículo menor con motor";
            break;
        case "menores_4_ejes":
            tarifaPorHora = tarifas.menos_4_ejes;
            descripcionVehiculo = "Vehículo menor con 4 ejes";
            break;
        case "mayores_4_6_ejes":
            tarifaPorHora = tarifas.mayores_4_ejes;
            descripcionVehiculo = "Vehículo mayor con 4 a 6 ejes";
            break;
        default:
            console.log("El tipo de vehículo especificado no es válido.");
            return;
    }

    const totalConIgv = tarifaPorHora * horasDeServicio;
    const subtotal = +(totalConIgv / 1.18).toFixed(2);
    const igv = +(totalConIgv - subtotal).toFixed(2);

    console.log("\n==== Resumen de Servicio ==== ");
    console.log("-----------------------------");
    console.log(`Cliente: ${cliente}`);
    console.log(`Vehículo: ${vehiculo}`);
    console.log(`Tipo de Vehículo: ${descripcionVehiculo}`);
    console.log(`Horas de servicio: ${horasDeServicio}`);
    console.log(`Tarifa por hora (con IGV): S/ ${tarifaPorHora.toFixed(2)}`);
    console.log(`Subtotal (sin IGV): S/ ${subtotal.toFixed(2)}`);
    console.log(`IGV (18%): S/ ${igv}`);
    console.log(`Total a pagar: S/ ${totalConIgv.toFixed(2)}`);
}

module.exports = {
    calculartarifaM:CalcularTarifa
};
