# PASOS PARA UTILIZAR EL BACK-END

-  Instala **Python 3.11.4**.

-  Ejecuta `pip install virtualenv`, luego `python -m venv venv` en la carpeta api para instalar el entorno virtual que se llamara "venv".

-  Ejecutar el entorno virtual (preguntar a Felipe :c)

En caso de que te aparezca un error _"la ejecución de scripts está deshabilitada en este sistema"_ dale click derecho al icono de windows y selecciona la opción "Powershell (administrador)" y ejecutas `Set-ExecutionPolicy RemoteSigned` para permitir la ejecucion de entornos virtuales. Despues de terminar de trabajar con el entorno virtual se recomienda restablecer la politica de ejecucion con el comando `Set-ExecutionPolicy Restricted`.

-  Ejecuta en el terminal `pip install -r requirements.txt` en la carpeta api para instalar todas las dependecias necesarias.

-  Entras a la terminal de PostgreSQL y vas a ejecutar `CREATE DATABASE codecommunity;`

-  Crea un archivo `.env` y vas a agregar los siguientes datos:

   // Database
   - DB_NAME=codecommunity
   - DB_USER=postgres
   - DB_PASSWORD=06082001
   - DB_HOST=localhost
   - DB_PORT=5432

   // Secret keys
   - SECRET_KEY=django-insecure-s*aeyf73twr_tzl40xgl7^((3wvnzauv7mnm3bps+av7h)tapo
   - STRIPE_SECRET_KEY=sk_test_51NL9TyB0138Dzwzeb6TwTUR5RZHD9emoo9aZ761jRWVbz3nZldZOX00vP7NzjuaprUheMkwUN1PTFF1B9OtKVO2o00xd9S3jTp

   // Info
   - EMAIL=codecommunity0@gmail.com
   - PASSWORD_EMAIL=kahfacuzxajdfiby

   // Cloudinary
   - CLOUD_NAME=duaao22ya
   - API_KEY=386214687664726
   - API_SECRET=McovSyzAVo-BHNz1ajg8OCs8EUs

   // URL API
   - URL_BACK=http://localhost:8000
   - URL_FRONT=http://localhost:3000

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
