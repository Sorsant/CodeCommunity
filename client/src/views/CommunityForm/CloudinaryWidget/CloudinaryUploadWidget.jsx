import React, { useEffect } from "react";
import styles from "../CloudinaryWidget/image.module.css";

const CloudinaryUploadWidget = ({ onImageUrl }) => {
  useEffect(() => {
    const cloudName = "duaao22ya"; // reemplaza con tu propio cloud name
    const uploadPreset = "imageposteos"; // reemplaza con tu propio upload preset

    // Quita los comentarios del código a continuación para agregar
    // funcionalidad adicional.
    // Ten en cuenta que estos son solo algunos ejemplos, para ver
    // la lista completa de parámetros posibles que puedes agregar, consulta:
    //   https://cloudinary.com/documentation/upload_widget_reference

    var myWidget = window.cloudinary.createUploadWidget(
      {
        cloudName: cloudName,
        uploadPreset: uploadPreset,
        // cropping: true, // agregar un paso de recorte
        // showAdvancedOptions: true,  // agregar opciones avanzadas (public_id y etiqueta)
        // sources: [ "local", "url"], // restringir las fuentes de carga a URL y archivos locales
        multiple: false, // restringir la carga a un solo archivo
        folder: "imageCommunity", // cargar archivos en la carpeta especificada
        tags: ["communities", "community"], // agregar las etiquetas dadas a los archivos cargados
        // context: {alt: "user_uploaded"}, // agregar los datos de contexto dados a los archivos cargados
        //clientAllowedFormats: ["images"], // restringir la carga solo a archivos de imagen
        // maxImageFileSize: 2000000,  // restringir el tamaño del archivo a menos de 2 MB
        // maxImageWidth: 2000, // Escala la imagen a un ancho de 2000 píxeles antes de cargarla
        // theme: "purple", // cambiar a un tema púrpura
      },
      (error, result) => {
        if (!error && result && result.event === "success") {
          const secureUrl = result.info.secure_url;
          onImageUrl(secureUrl);
          const uploadedImage = document.getElementById("uploadedimage");
          if (uploadedImage) {
            uploadedImage.setAttribute("src", result.info.secure_url);
          }
        } else if (error) {
          console.error("Error uploading image:", error);
        }
      }
    );

    const handleClick = () => {
      myWidget.open();
    };

    const uploadWidgetElement = document.getElementById("upload_widget");

    if (uploadWidgetElement) {
      uploadWidgetElement.addEventListener("click", handleClick, false);
    }

    return () => {
      if (uploadWidgetElement) {
        uploadWidgetElement.removeEventListener("click", handleClick, false);
      }
    };
  }, []);

  return (
    <div>
      <button id="upload_widget" className="cloudinary-button">
        Upload
      </button>
      <img id="uploadedimage" alt=" " className={styles.image} />
    </div>
  );
};

export default CloudinaryUploadWidget;
