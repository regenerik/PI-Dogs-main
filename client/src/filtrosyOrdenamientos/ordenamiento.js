import { upperIfString } from "./utils";

function orderPor(configIndividual, lista) {
    return lista.sort(function (a, b) {
        const propiedadA = upperIfString(a[configIndividual.propiedad]);
        const propiedadB = upperIfString(b[configIndividual.propiedad]);
        if (configIndividual.orden === "asc") {
            if (propiedadA < propiedadB) {
                return -1;
            }
            if (propiedadA > propiedadB) {
                return 1;
            }
        } else {
            if (propiedadA > propiedadB) {
                return -1;
            }
            if (propiedadA < propiedadB) {
                return 1;
            }
        }
        return 0;
    });
}

export default function aplicarOrdenamientos(configOrder, lista) {
    let listaOrdenada = lista;
    for (let i = 0; i < configOrder.length; i++) {
        listaOrdenada = orderPor(configOrder[i], listaOrdenada);
    }
    return listaOrdenada;
}
