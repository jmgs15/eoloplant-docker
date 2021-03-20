#################################################
# Imagen base para el contenedor de compilación
#################################################
FROM maven:3.6.3-openjdk-11 as builder

# Define el directorio de trabajo donde ejecutar comandos
WORKDIR /project

# Copia el código del proyecto
COPY /src /project/src
COPY pom.xml /project/

# Compila proyecto y descarga librerías
RUN mvn package

#################################################
# Imagen base para el contenedor de la aplicación
#################################################
FROM openjdk:11-jre-slim

# Define el directorio de trabajo donde se encuentra el JAR
WORKDIR /usr/src/app/

# Copia el JAR del contenedor de compilación
COPY --from=builder /project/target/*.jar /usr/src/app/app.jar

# Indica el puerto que expone el contenedor
EXPOSE 9090

# Comando que se ejecuta al hacer docker run
CMD [ "java", "-jar", "app.jar" ]