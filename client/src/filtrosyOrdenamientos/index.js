import aplicarFiltros from "./filtro";
import aplicarOrdenamientos from "./ordenamiento";


const configOrder = [{propiedad: "name", orden: "asc"},{propiedad: "weight", orden: "asc"}];
const configFiltro = [{propiedad: "temperamento", value: "angry"}]

const config = {
  orden: configOrder,
  filtro: configFiltro
}

export function filtroOrdenamiento(config, lista){
  let resultFilterOrder = lista;
  if(config.filtro && config.filtro[0]){
    resultFilterOrder = aplicarFiltros(config.filtro, resultFilterOrder);
  }
  if(config.orden && config.orden[0]){
    resultFilterOrder = aplicarOrdenamientos(config.orden, resultFilterOrder)
  }
  return resultFilterOrder
}

