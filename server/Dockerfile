FROM node:lts

# Especificamos esta variable para la correcta ejecución de las librerías en modo de producción
ENV NODE_ENV production

# Definimos el directorio de trabajo en /app
WORKDIR /app

RUN curl -LJO https://raw.githubusercontent.com/vishnubob/wait-for-it/master/wait-for-it.sh \
&& chmod +x /app/wait-for-it.sh

# Copiamos el package.json
COPY package.json /app/

# Instalamos las dependencias que necesita la app
RUN npm install --only=production

# Copiamos los ficheros de la aplicación
COPY src /app/src
COPY config /app/config
COPY public /app/public

# Indica el puerto que expone el contenedor
EXPOSE 3000

# Comando que se ejecuta cuando se arranque el contenedor
CMD ["node", "src/server.js"]