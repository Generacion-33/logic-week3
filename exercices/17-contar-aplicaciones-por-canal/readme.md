# Instrucciones

## Cuenta las aplicaciones por canal

En Academlo estamos interesados en saber mediante que canal nos conocen nuestros estudiantes, por ejemplo, pueden conocernos por facebook, youtube, twitter, etc.
Sabiendo eso, resuelve el siguiente ejercicio.

La función `countApplicationsBychannel(students)` recibe como **parámetro** `students` que es un arreglo de estudiantes. Tu labor es contar cuántas aplicaciones hay por cada canal, para esto debes apoyarte en la propiedad `channel`.

Algo **muy importante** es que solo tomaremos en cuenta a los estudiantes que hayan enviado su aplicación.

### Entrada de muestra

```javascript
students = [
  { 
    name: 'Andrea', 
    email: 'andrea@gmail.com', 
    channel: 'youtube', 
    application: null 
  },
  { 
    name: 'Daniela', 
    email: 'daniela@gmail.com', 
    channel: 'youtube', 
    application: { 
      country: 'Colombia', 
      state: 'Bogotá' 
    } 
  },
  { 
    name: 'Alondra', 
    email: 'alondra@gmail.com', 
    channel: 'twitter', 
    application: { 
      country: 'Colombia', 
      state: 'Bogotá' 
    } 
  },
  { 
    name: 'Luis', 
    email: 'luis@gmail.com', 
    channel: 'twitter', 
    application: { 
      country: 'México', 
      state: 'Nuevo León' 
    } 
  }]
```

### Salida de muestra

```javascript
{ youtube: 1, twitter: 2 }
```


### Consejos💡
Si la función recibe el arreglo anterior devolveríamos un objeto con 2 canales:
1. `youtube` con `1` aplicación por parte de Daniela.
2. `twitter` con `2` aplicaciones de Alondra y Luis.

No contamos a Andrea porque no ha enviado su aplicación.

Recuerda que por cada **TEST** los parámetros de la función "cambiarán su valor", tu función debe ser generica, es decir, que sin importar cuál sea el valor de los parámetros, siempre deberá retornar un objeto con el total de aplicaciones por canal.

> No hay gloria en la práctica, pero sin práctica no hay gloria. 