# Instrucciones

## Obtener a los estudiantes que han enviado su aplicación
En Academlo tenemos usuarios que crean una cuenta, pero no todos envían su aplicación para formar parte de los cursos.

La función `getApplications(users)` recibe como **parámetro**: `users` que es un arreglo de usuarios. Tu labor es obtener solo a los usuarios que hayan enviado su aplicación, para esto puedes tomar como referencia la propiedad `application` de cada usuario.

### Entrada de muestra

```javascript
users = [
  { 
    name: 'Gabriel', 
    email: 'gabriel@academlo.com', 
    channel: 'youtube', 
    application: null 
  },
  { 
    name: 'Jesús', 
    email: 'jesus@gmail.com', 
    channel: 'facebook', 
    application: { country: 'Mexico', state: 'Campeche' }
  },
  { 
    name: 'Will', 
    email: 'will@gmail.com', 
    channel: 'youtube', 
    application: { country: 'Colombia', state: 'Bogotá' }
  }
]
```

### Salida de muestra

```javascript
[
  { 
    name: 'Jesús', 
    email: 'jesus@gmail.com', 
    channel: 'facebook', 
    application: { country: 'Mexico', state: 'Campeche' }
  },
  { 
    name: 'Will', 
    email: 'will@gmail.com', 
    channel: 'youtube', 
    application: { country: 'Colombia', state: 'Bogotá' }
  }
]
```


### Consejos💡
En el caso de haber recibido el arreglo mencionado anteriormento tu función debería **retornar** a `Jesús` y a `Brayan` ya que solo ellos enviaron su aplicación.

Recuerda que por cada **TEST** los parámetros de la función "cambiarán su valor", tu función debe ser generica, es decir, que sin importar cuál sea el valor de los parámetros, siempre deberá retornar únicamente a los usuarios que enviaron su aplicación.

> No hay gloria en la práctica, pero sin práctica no hay gloria.