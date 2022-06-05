import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDogs } from "../redux/actions";
import Cards from "../components/Cards";
import style from "./styles/Home.module.css";
import Header from "../components/Header";
import gif from "./img/gif.gif";

const Home = () => {
  const dispatch = useDispatch();
  const allDogs = useSelector((state) => state.perros);

  useEffect(() => {
    dispatch(getDogs());
  }, [dispatch]);

  /** Inicio del Paginado **/
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 8;
  const indiceFinal = currentPage * pageSize;
  const indiceInicial = indiceFinal - pageSize;

  let rangoActual = allDogs.slice(indiceInicial, indiceFinal);

  /** Paginado directo */

  let numeroDePaginas = [];
  for (let i = 1; i <= Math.ceil(allDogs.length / pageSize); i++) {
    numeroDePaginas.push(i);
  }

  /** Funciones  */

  const nextPage = () => {
    if (currentPage >= Math.ceil(allDogs.length / pageSize)) return;
    setCurrentPage(currentPage + 1);
  };

  const cambiarPagina = (num) => {
    setCurrentPage(num);
  };

  const prevPage = () => {
    if (currentPage <= 1) return;
    setCurrentPage(currentPage - 1);
  };

  return (
    <div>
      {allDogs.length > 0 ? (
        <div className={style.homeCompleto}>
          <Header />
          <div className={style.paginado}>
            <div>
              <button className={style.prevBtn} onClick={prevPage}>
                Página anterior
              </button>
            </div>
            <div>
              {numeroDePaginas &&
                numeroDePaginas.map((num) => {
                  if (num !== currentPage) {
                    return (
                      <button
                        className={style.currentPage2}
                        key={num}
                        onClick={() => cambiarPagina(num)}
                      >
                        {num}
                      </button>
                    );
                  }
                  return (
                    <button
                      className={style.currentPage}
                      key={num}
                      onClick={() => cambiarPagina(num)}
                    >
                      {num}
                    </button>
                  );
                })}
            </div>
            <div>
              <button className={style.nextBtn} onClick={nextPage}>
                Página siguiente
              </button>
            </div>
          </div>

          <div>
            <Cards listDogs={rangoActual} />
          </div>
        </div>
      ) : (
        <div className={style.loading}>
          <img className={style.gif} src={gif} alt="loading" />
        </div>
      )}
    </div>
  );
};

export default Home;
