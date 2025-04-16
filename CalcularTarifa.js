function calcularTarifa(cliente, vehiculo, placa, tipoVehiculo, horas) {

    // Definir tarifa por hora dependiendo del tipo de vehículo
  
    const tarifasPorHora = {
  
      'vehiculo_menor_4_ejes': 10.00,
  
      'vehiculo_mayor_4_ejes': 15.00,
  
      'motocicleta': 5.00
  
    };
  
  
  
    // IGV en Perú, por ejemplo, es 18%
  
    const IGV = 0.18;
  
  
  
    // Verificar que el tipo de vehículo exista
  
    const tarifaHora = tarifasPorHora[tipoVehiculo];
  
    if (tarifaHora === undefined) {
  
      throw new Error(`Tipo de vehículo no reconocido: ${tipoVehiculo}. Por favor, verifica los datos ingresados.`);
  
    }
  
  
  
    // Cálculos
  
    const subtotal = tarifaHora * horas;
  
    const igv = subtotal * IGV;
  
    const total = subtotal + igv;
  
    ñ
  
    // Resultado organizado
  
    const resultado = {
  
      cliente: cliente,
  
      vehiculo: vehiculo,
  
      placa: placa,
  
      tipoVehiculo: tipoVehiculo,
  
      horas: horas,
  
      tarifaPorHora: tarifaHora.toFixed(2),
  
      subtotal: subtotal.toFixed(2),
  
      igv: igv.toFixed(2),
  
      total: total.toFixed(2)
  
    };
  
  
  
    return resultado;
  
  }
  
  
  
  // Ejemplo de uso:
  
  const datos = calcularTarifa(
  
    "Juan Pérez",
  
    "Toyota Yaris",
  
    "XH777",
  
    "vehiculo_menor_4_ejes",
  
    5
  
  );
  
  
  
  console.log("===== Detalle de Tarifa =====");
  
  console.log(`Cliente: ${datos.cliente}`);
  
  console.log(`Vehículo: ${datos.vehiculo} (${datos.placa})`);
  
  console.log(`Tipo: ${datos.tipoVehiculo}`);
  
  console.log(`Horas: ${datos.horas}`);
  
  console.log(`Tarifa por hora: S/ ${datos.tarifaPorHora}`);
  
  console.log(`Subtotal: S/ ${datos.subtotal}`);
  
  console.log(`IGV (18%): S/ ${datos.igv}`);
  
  console.log(`Total a pagar: S/ ${datos.total}`);