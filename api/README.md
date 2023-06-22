# PASOS PARA UTILIZAR EL BACK-END

-  Instala **Python 3.11.4**.

-  Ejecuta `pip install virtualenv`, luego `python -m venv venv` para instalar el entorno virtual que se llamara "venv".

- Ejecutar el entorno virtual (preguntar a Felipe :c)

En caso de que te aparezca un error _"la ejecución de scripts está deshabilitada en este sistema"_ dale click derecho al icono de windows y selecciona la opción "Powershell (administrador)" y ejecutas `Set-ExecutionPolicy RemoteSigned` para permitir la ejecucion de entornos virtuales. Despues de terminar de trabajar con el entorno virtual se recomienda restablecer la politica de ejecucion con el comando `Set-ExecutionPolicy Restricted`.

-  Ejecuta en el terminal `pip install -r requirements.txt` para instalar todas las dependecias necesarias.

-  Entras a la terminal de PostgreSQL y vas a ejecutar `CREATE DATABASE codecommunity;`

-  Crea un archivo `.env` y vas a agregar los siguientes datos:

   -  `DB_NAME=codecommunity`
   -  `DB_USER=postgres`
   -  `DB_PASSWORD=(SU_PASSWORD)`
   -  `DB_HOST=localhost`
   -  `DB_PORT=5432`
   -  `SECRET_KEY=django-insecure-s*aeyf73twr_tzl40xgl7^((3wvnzauv7mnm3bps+av7h)tapo`

##

-  **Search**
   ejemplo: /codec/api/news/?search=perez

-  **Ordering**
   Aca se pone la propiedad del modelo por el cual se quiere filtrar

   ##

   ejemplo: /codec/api/news/?ordering=title

-  **Para hacer Combinados**
   Tanto para search como para ordering simplemente se debe agregar una coma.

   ##

   ejemplo: /codec/api/news/?ordering=title,category

   **Busqueda y ordenamiento a la vez**
   ejemplo: /codec/api/news/?search=perez&ordering=title
