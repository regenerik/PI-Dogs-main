import { upperIfString } from "./utils";

function filterPor(configIndividual, lista) {
    return lista.filter(
        (item) =>
            upperIfString(item[configIndividual.propiedad]) ===
            upperIfString(configIndividual.value)
    );
}

export default function aplicarFiltros(configFilter, lista) {
    let listaFiltrada = lista;
    for (let i = 0; i < configFilter.length; i++) {
        listaFiltrada = filterPor(configFilter[i], listaFiltrada);
    }
    return listaFiltrada;
}
