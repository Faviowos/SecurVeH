function MostrarTarifarioCarros(nombreU, apellidoU) {

    const tarifario = [
  
     {
  
      categoria: "Vehículos Menores sin Motor",
  
      servicios: [
  
       { tipo: "Bicicletas por hora", tarifa: 3 },
  
       { tipo: "Triciclos por hora", tarifa: 3 }
  
      ]
  
     },
  
     {
  
      categoria: "Vehículos Menores con Motor",
  
      servicios: [
  
       { tipo: "Motos por hora", tarifa: 4.5 },
  
       { tipo: "Mototaxis por hora", tarifa: 4.5 }
  
      ]
  
     },
  
     {
  
      categoria: "Vehículos Menores 4 ejes",
  
      servicios: [
  
       { tipo: "Autos por hora", tarifa: 6 },
  
       { tipo: "Camionetas por hora", tarifa: 6 }
  
      ]
  
     },
  
     {
  
      categoria: "Vehículos Mayores 4,6 ejes",
  
      servicios: [
  
       { tipo: "Camiones por hora", tarifa: 10 },
  
       { tipo: "Cisternas por hora", tarifa: 10 },
  
       { tipo: "Trailers por hora", tarifa: 10 }
  
      ]
  
     }
  
    ];
  
    
  
    // Mostrar mensaje
  
    console.log(`Tarifario de servicios para el usuario: ${nombreU} ${apellidoU}`);
  
    tarifario.forEach(categoria => {
  
     console.log(`\nCategoría: ${categoria.categoria}`);
  
     categoria.servicios.forEach(servicio => {
  
      console.log(`- Tipo de Vehículo: ${servicio.tipo}, Tarifa de: S/. ${servicio.tarifa}`);

  //Exportar la función para que pueda ser utilizada en otro archivo
    module.exports.MostrarTarifarioCarros = MostrarTarifarioCarros;

     });
  
    });
  
    
  
    return tarifario;
  
   }
   
    
   MostrarTarifarioCarros("Estrella", "Dominguez");
  
   