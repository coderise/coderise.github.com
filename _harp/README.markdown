# Coderise

Site powered by [Harp](http://harpjs.com)

## ¿Cómo escribir un artículo?

1. Hacer fork al repositorio [https://github.com/coderise/coderise.github.com/](https://github.com/coderise/coderise.github.com/)
2. Crear un archivo `.md` utilizando [Github Flavored Markdown](http://github.github.com/github-flavored-markdown/) en `_harp/posts/`
    > Para construir el archivo `.md` puede usarse [Dillinger.io](http://dillinger.io/) o [Stackedit.io](https://stackedit.io/)
3. Ingresar la información meta al archivo `_harp/posts/_data.json` debajo de la linea `"posts": {`, Insertando el artículo al inicio de la lista de la siguiente manera.

    ```
    "name-post": {
        "title": "Name Post to show",
        "author": "nickname of writter",
        "date": "Dec 8, 2014"
    },
    ```
    > *name-post* debe ser igual al archivo `.md` creado anteriormente en `_harp/posts/`
4. Ingresar la información del titulo del post al inicio de la lista despues de las lineas
    
    ```
    "index": { "layout": "../_layout" },
    ```
con los mismos datos del paso anterior exceptuando `author` y `date` de la siguiente forma

    ```
    "name-post": { "title": "Name Post to show" },
    ```
5. Crear un `pull request`