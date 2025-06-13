import { useState } from "react";

/**
 * Hook personalizado para manejo de formularios.
 * @param {Object} initialValues - Valores iniciales del formulario.
 * @returns {[Object, Function, Function]} - Valores, manejador de cambios y setter manual.
 */
function useForm(initialValues) {
  const [values, setValues] = useState(initialValues);

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  return [values, handleChange, setValues];
}

export default useForm;