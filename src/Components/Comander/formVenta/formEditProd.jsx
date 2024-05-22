import React, { useState, useEffect } from "react";
import "./formVenta.css";
import { useDispatch } from "react-redux";
import { asyncEditProd } from "../../redux/slice";
import Spinner from "../../assets/Spinner/Spinner";

const EditProduct = ({ product, id }) => {
  const dispatch = useDispatch();

  // Estado inicial del formulario
  const initialFormData = {
    data: {
      name: "",
      price: null,
      price2: null,
      price3: null,
      txtPrecio1: "",
      txtPrecio2: "",
      txtPrecio3: "",
      detail: "",
    },
  };

  // Estado del formulario
  const [formData, setFormData] = useState(initialFormData);
  const [isLoading, setIsLoading] = useState(false);

  // Efecto para actualizar el estado del formulario cuando cambia el producto
  useEffect(() => {
    if (product) {
      setFormData({
        data: {
          name: product?.name || "",
          price: product?.price || null,
          price2: product?.price2 || null,
          price3: product?.price3 || null,
          txtPrecio1: product?.txtPrecio1 || "",
          txtPrecio2: product?.txtPrecio2 || "",
          txtPrecio3: product?.txtPrecio3 || "",
          detail: product?.detail || "",
        },
      });
    } else {
      // Reiniciar el estado del formulario si no hay ningún producto
      setFormData(initialFormData);
    }
  }, [product]);

  // Manejador para cambios en el formulario
  const handleInputChange = async (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      data: {
        ...prevFormData.data,
        [name]: value === "0" ? null : value,
      },
    }));
  };

  // Manejador para envío del formulario
  const handleSubmit = (event) => {
    event.preventDefault();

    const dataToSubmit = {
      ...formData,
      data: {
        ...formData.data,
        price: formData.data.price === "0" ? null : formData.data.price,
        price2: formData.data.price2 === "0" ? null : formData.data.price2,
        price3: formData.data.price3 === "0" ? null : formData.data.price3,
      },
    };

    setIsLoading(true);

    dispatch(asyncEditProd(dataToSubmit, id)).then(() => {
      setIsLoading(false);
    });
  };
  return (
    <form onSubmit={handleSubmit} className="Formix2">
      <h2>Editar Producto</h2>
      <div className="form-group">
        <label htmlFor="name">Nombre del Producto: id {id}</label>
        <input
          type="text"
          id="name"
          name="name"
          onChange={handleInputChange}
          value={formData.data.name}
        />
      </div>
      <div className="form-group" style={{ display: "flex" }}>
        <div>
          <label htmlFor="txtPrecio1">TextPrecio:</label>
          <input
            type="text"
            id="txtPrecio1"
            name="txtPrecio1"
            value={formData?.data?.txtPrecio1}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="price">Precio:</label>
          <input
            type="number"
            id="price"
            name="price"
            value={formData.data.price === null ? "" : formData.data.price}
            onChange={handleInputChange}
          />
        </div>
      </div>
      <div className="form-group" style={{ display: "flex" }}>
        <div>
          <label htmlFor="txtPrecio2">TextPrecio2:</label>
          <input
            type="text"
            id="txtPrecio2"
            name="txtPrecio2"
            value={formData?.data?.txtPrecio2}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="price2">Precio2:</label>
          <input
            type="number"
            id="price2"
            name="price2"
            value={formData.data.price2 === null ? "" : formData.data.price2}
            onChange={handleInputChange}
          />
        </div>
      </div>
      <div className="form-group" style={{ display: "flex" }}>
        <div>
          <label htmlFor="txtPrecio3">TextPrecio3:</label>
          <input
            type="text"
            id="txtPrecio3"
            name="txtPrecio3"
            value={formData?.data?.txtPrecio3}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="price3">Precio3:</label>
          <input
            type="number"
            id="price3"
            name="price3"
            value={formData.data.price3 === null ? "" : formData.data.price3}
            onChange={handleInputChange}
          />
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="detail">Detalle:</label>
        <textarea
          type="text"
          id="detail"
          name="detail"
          value={formData.data.detail}
          onChange={handleInputChange}
          style={{ width: "100%", height: "50px" }}
        />
      </div>

      <button type="submit" disabled={isLoading}>Guardar Cambios</button>
      {isLoading && <Spinner />}
    </form>
  );
};

export default EditProduct;
