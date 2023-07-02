
<!-- markdownlint-disable MD033 -->


<div style="background-color:white; color:black">

<h3 align="center"> <em>Frameworks</em> para el desarrollo completo de aplicaciones web</h3>



<img src="./figuras/UPVcolor300.png" align="left" height="40">
<img src="./figuras/DCOM.png" align="right" height="40">

<img src="./figuras/Teleco.png"       align="left" style="clear:left; padding-top:10px" height="40">

<img src="./figuras/GTDM.png"       align="right" style="clear:right; padding-top: 10px" height="40">

<h1 align="center"><b>Proyecto de asigantura/b></h1>
<h3 align="center"><b>Aplicación web sobre cine</b></h3>


<h4 align="center"><b>Javier Castejón Soria, Jordi Cayuela Penalva y Miguel Franco Cisneros</b>
</h4>

<h3 align="center">Grado en Tecnología Digital y Multimedia</h3>
<h3 align="center">ETSIT-UPV</h3>

# 1. Introducción y objetivos

Este proyecto se trata del trabajo final de la asignatura de <i>Frameworks para el desarrollo completo de aplicaciones web </i>. 
Sirviendo como ampliación de la práctica 9, el proyecto ha consistido en la creación de una aplicación web para buscar directores y sus respectivas películas a través de la base de datos <b>sample mlix</b>.

## 2. Descripción de la aplicación.

La aplicación recibe el nombre de "Cinemadict", cuando el usuario accede a esta web encuentra un gran apartado resaltado en rojo donde están el título, junto con una pequeña descripción, un apartado de <i>input</i> donde se le pide que introduzca el nombre de el director que desee para así poder realizar la búsqueda en la base de datos y un desplegable donde podrá seleccionar una película de las registradas. <br/>

En el centro de la pantalla se encuentran una serie de apartados donde posteriormente se rellenarán datos como el título de la película, el año de esta, su puntuación en IMDB, el reparto, los guionistas que han trabajado en ella y por último la trama del filme. <br/>

Por último, en la parte inferior de la página se encuentra otro apartado con el género o géneros en los que se engloba la película. <br/>

## 3. Funcionamiento de la aplicación.

Cuando el usuario ingresa una letra en el input de búsqueda de director el servidor realiza una búsqueda en la base de datos y de está forma va autocompletando el nombre que introduce el cliente y le ofrece una lista con los nombres o apellidos que ha introducido. Una vez introducido el nombre, por defecto se escoge la película más antigua del director y se muestran tanto los datos de esta película como su poster, si esta no es la película que el usuario está buscando puede elegir la que desee a través del menú desplegable. Cuando seleccione una nueva película se actualizarán los apartados de la web con los diferentes datos de cada filme, la fecha de estreno, el reparto, la trama, etc. <br/><br/><br/><br/><br/><br/>

## 4. Ejecución de la aplicación.
Para ejecutar la aplicación primero se debe acceder a la carpeta "Aplicación" mediante el comando:

```bash
cd Aplicacion 
```
Una vez se ha accedido a esta carpeta, si es la primera vez que se accede a la aplicación se deberá ejecutar el comando:
```bash
npm install 
```
De esta forma se instalan los módulos requeridos en la aplicación.
  
Por último, para lanzar la aplicación se ejecuta el comando:
```bash
npm start 
```




## 5. Plantillas de CSS utilizadas para la aplicación.

Se han enlazado diferentes plantillas y fuentes para conseguir un buen apartado visual en la aplicación final.

Las plantillas son las siguientes:

`https://www.w3schools.com/w3css/4/w3.css`
`https://fonts.googleapis.com/css?family=Lato`
`https://fonts.googleapis.com/css?family=Montserrat`
`https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css`
 
</div>