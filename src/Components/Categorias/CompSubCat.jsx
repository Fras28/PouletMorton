import React, { useEffect } from "react";
import { Cards } from "../Cards/Cards.jsx";
import "./Categorias.css";
import Nav from "../Nav/Nav.jsx";
import { useDispatch, useSelector } from "react-redux";
import { VerPedido } from "../BtnBag/BtnBag.jsx";
import Spinner from "../assets/Spinner/Spinner.jsx";
import { useParams } from "react-router-dom/cjs/react-router-dom.min.js";
import { asyncSubCategoria } from "../redux/slice.jsx";

const API = process.env.REACT_APP_API_STRAPI;

export const CompSubCat = ({ idCat }) => {
  const { id } = useParams(); // Usa el hook useParams para obtener el parámetro de la URL
  const dispatch = useDispatch();
  const { allProduct, subCategorias, comercio } = useSelector((state) => state.alldata);

  useEffect(() => {
    // Función que se ejecutará cuando el componente se monte o cuando id cambie
    dispatch(asyncSubCategoria(idCat));
  }, [dispatch, id]); // Dependencias: dispatch y id

  const articulosParaFiltrar = subCategorias.filter((e) => e.id === idCat);
  const articulos =
    articulosParaFiltrar.length > 0
      ? articulosParaFiltrar[0].attributes.sub_categorias.data
      : [];


  const Productos = allProduct?.filter(
    (e) => e.attributes?.categorias?.data.id === idCat
  );

  const subCategoriaFilters = Productos?.reduce((acc, product) => {
    const subCategoriaId = product.attributes?.sub_categoria?.data?.id;

    if (subCategoriaId) {
      if (!acc[subCategoriaId]) {
        acc[subCategoriaId] = [];
      }
      acc[subCategoriaId].push(product);
    }
 
    return acc;
  }, []);

  // Puedes acceder a cada Xn dinámicamente
  const dynamicVariables = Object.keys(subCategoriaFilters).map((key) => {
    return subCategoriaFilters[key];
  });
  const processedNames = articulos
  .filter(product => product.attributes.articulos.data.length !== 0) // Filtrar productos con datos de artículos
  .map(product => {
    const productName = product.attributes.name;
    return productName
      .split(/\[.*?\]|\(.*?\)/) // Dividir la cadena usando corchetes [] y paréntesis ()
      .map(part => part.trim())
      .join(""); // Unir las partes filtradas en una sola cadena
  });
  return (
    <div className="containerL" >
      <Nav id={id} />
      <div className="sectioner">
 
        {articulos?.length > 0 ? (
   <div className="sectioner">
    <p> Secciones : </p>
   {processedNames.length > 0 && processedNames.map((name, index) => (
     <a key={index} href={`#${articulos[index].id}`}>
        {name}
     </a>
   ))}
 </div>
        ) : null}
      </div>
      <div className="conteinerLC ">
        {articulos?.length > 0 ? (
          <div className="conteinerLB2 animate__animated  animate__zoomIn animate__faster">
            <div className="conteinerLB2 animate__animated animate__zoomIn animate__faster">
              {articulos?.map((prod) => (
                <div >
                  <div id={prod.id} style={{height:"110px"}} ></div>
              
                  <Cards products={prod} />
                </div>
              ))}
            </div>
          </div>
        ) : null}
        {articulos.length === 0 ? <Spinner  /> : null}
      </div>
      <VerPedido id={id} />
    </div>
  );
};
