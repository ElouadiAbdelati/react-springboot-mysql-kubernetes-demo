FROM maven:3.6.1-jdk-8-slim AS build
RUN mkdir -p /workspace
WORKDIR /workspace
COPY pom.xml /workspace

RUN mvn -f pom.xml clean
COPY src /workspace/src
RUN mvn -f pom.xml package


FROM adoptopenjdk/openjdk11
COPY --from=build /workspace/target/*.jar app.jar
EXPOSE 8090
ENTRYPOINT ["java","-jar","app.jar"]
