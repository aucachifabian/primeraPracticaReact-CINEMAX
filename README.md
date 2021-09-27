# REACT-CLASES <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png' alt="js image" width="22" > 

> ### INSTRUCCIONES DE USO


Desde la consola parado en la carpeta del proyecto ejecuta.
    ```
    npm install para instalar todas las dependencias
    npm start para iniciar el proyecto
    ```
    para iniciar tu aplicacion.

    la aplicacion de React tiene un `watcher` que espera cambios, y muestra actumaticamente estos cambios en pantalla. Para terminar el `watcher` preciona `ctrl + c`.
Vas a elegir por lo menos 5 personajes de un Anime de tu preferencia y a crear (Mockear data)
un `json` con informacion de estos personajes (entre mas info contenga mucho mejor)

Componentes: 
1. El componente `App` Debera:
    *   Contener todos los componentes de la aplicacion.
2. El componente `NavBar` Debera:

    * Mostrar el nombre de la aplicacion. (	CINE-MAX )
    * Tener un link (no lleva a ninguna parte por ahora) al `Character Detail`.
    * Tener un link (no lleva a ninguna parte por ahora) al `About`.

3. El componente `Home` Debera:
    * Mostrar la lista de minimo 5 personajes que se encuentren en la aplicacion (informacion Mockeada, creada en un archivo json dentro de mi aplicacion).
    * Cada `Character` Debe mostrar su foto y Nombre

4. El componente `Character` Debera:
    * Mostrar la Foto y el Nombre del personaje recibidos por props.

5. El componente `Character Detail` Debera:
    * Tener un select con los nombres de los personajes Mockeados en el archivo json. 
    * Al seleccionar alguno de los nombres en el Select, Mostrar la informacion mas detallada de ese personaje.
6. El componente `About` Debera:
    * Mostrar informacion sobre el creador de la APP. 

Ejemplo: Mocking `data.json`
```
{
    "Characters": [
        {   
            "name": .....,
            "lastname": ....,
            "age": .....,
            "photo": ......,
            "Best Phrase":....,
            "Friends": [.....],
            "City": ..... 
        },
        {   
            "name": .....,
            "lastname": ....,
            "age": .....,
            "photo": ......,
            "Best Phrase":....,
            "Friends": [.....],
            "City": ..... 
        },
        ...
    ]
}
```

Al finalizar esta ejercitacion:
1. Crea un nuevo repositorio publico con el nombre que le desees dar a tu aplicacion.
2. Sube la ejercitacion terminada al Repositorio creado (no debe contener este Readme).
3. Debes enviar atraves de Discord por el canal `general`, el link del repositorio.
4. Fecha limite de entrega `24/09/2021`