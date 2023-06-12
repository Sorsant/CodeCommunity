
# PASOS PARA UTILIZAR EL BACK-END

1. Instala **Python 3.11.4**.

2. Ejecuta en el terminal `pip install django` para instalar Django.

3. Ejecuta en el terminal `pip install psycopg2` para instalar el adaptador de PostgreSQL.

4. Ejecuta en el terminal `pip install python-decouple` para isntalar la biblioteca que nos permitira utilizar el `.env`

5. Entras a la terminal de PostgreSQL y vas a ejecutar `CREATE DATABASE codecommunity;`

6. Crea un archivo `.env` y vas a agregar los siguientes datos:
- `DB_NAME=codecommunity`
- `DB_USER=postgres`
- `DB_PASSWORD=(SU_PASSWORD)`
- `DB_HOST=localhost`
- `DB_PORT=5432`