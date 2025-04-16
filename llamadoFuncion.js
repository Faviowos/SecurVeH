const mostrarServicios = require("./MuestraTarifa");
const calcularCosto = require("./CalcularTarifa");

mostrarServicios.MostrarTarifarioCarros("Favio", "Coronado");

calcularCosto.calculartarifaM(
  "Favio Coronado", 
  "TOYOTA YARIS - placa XH767", 
  "menores_sin_motor", 
  4
);
