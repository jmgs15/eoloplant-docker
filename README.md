# EoloPlanner - DOCKER

El desarrollo de la aplicación se puede llevar a cabo de dos formas:
1 - Instalando todas las utilidades (npm, nodejs, java, maven) en local, y haciendo sus correspondientes despliegues.
2 - Con el VSCode abriendo cada proyecto como un DevContainer, los cuales ya están configurados para que tengan las utilidades necesarias instaladas y haciendo los correspondientes despligues.

Por lo tanto, para el caso de la ejecución, también se puede llevar a cabo de dos formas:

1 - Formato producción: ejecutando el script `exec.js` (realiza el build de las imágenes docker y las sube a dockerHub) y posteriormente ejecutando el `docker-compose.yml` (levanta cada uno de los servicios en un docker todos conectados entre sí)
``` shell
node exec.js
docker-compose up
```
2 - Formato desarrollo:
- Levantando los servicios de `mongo`, `mysql` y `rabbit` en un docker cada uno con el fichero docker-compose-dev.yml, con su correspondiente 
  ``` shell
  docker-compose -f docker-compose-dev.yml up
  ```

- Abriendo cada servicio (`planner`, `server`, `toposervice`, `weatherservice`) en una ventana de VSCode como DevContainer, compilándolos y ejecutando. Pasamos a detallar como levantar cada servicio en el DevContainer, Habría que ejecutar los siguientes comandos en la carpeta raíz de cada proyecto:
  - Planner:
  ``` shell
  mvn spring-boot:run
  ```

  - Server:
  ``` shell
  npm install
  node src/server.js
  ```
  - TopoService: Cambiar en el `pom.xml` el plugin `com.google.cloud.tools` por `org.springframework.boot` que está comentado
  ``` shell
  mvn spring-boot:run
  ```
  - WeatherService:
  ``` shell
  npm install
  npm rebuild
  node src/server.js
  ```