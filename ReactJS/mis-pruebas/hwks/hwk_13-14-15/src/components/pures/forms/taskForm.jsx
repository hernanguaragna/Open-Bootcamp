import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const TaskForm = () => {
  const taskSchema = Yup.object().shape({
    title: Yup.string().required("El título es requerido"),
    description: Yup.string().required("La descripción es requerida"),
  });

  const handleSubmit = (values) => {
    console.log("Form values", values);
    // Aquí puedes hacer una llamada a una API o manejar la lógica de crear una tarea
  };

  return (
    <Formik
      initialValues={{
        title: "",
        description: "",
      }}
      validationSchema={taskSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
          <Field name="title" type="text" placeholder="Título de la tarea" />
          <ErrorMessage name="title" component="div" />

          <Field
            name="description"
            type="text"
            placeholder="Descripción de la tarea"
          />
          <ErrorMessage name="description" component="div" />

          <button type="submit" disabled={isSubmitting}>
            Crear tarea
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default TaskForm;
