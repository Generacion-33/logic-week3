# Instrucciones

## Cuenta los estudiantes de un país

La función `countStudents(students, countries, countryName)` recibe 3 **parámetros**:

1. `students` es un arreglo de estudiantes
2. `countries` es un arreglo de países
3. `countryName` es una cadena de texto

Tu labor es contar y retornar el número total de estudiantes que pertenezcan al país que reciba la función en `countryName`.

### Entrada de muestra

```javascript
students = [
  { name: 'Georg', email: 'georg@academlo.com', country_id: 1 },
  { name: 'Andrea', email: 'andrea@gmail.com', country_id: 2 },
  { name: 'Daniela', email: 'daniela@gmail.com', country_id: 2 },
  { name: 'Mónica', email: 'monica@gmail.com', country_id: 2 }
]

countries = [
  { id: 1, name: 'Mexico', },
  { id: 2, name: 'Colombia' }
]

countryName = 'Colombia'
```

### Salida de muestra

```javascript
3
```


### Consejos💡
En el ejemplo anterior retornaríamos `3`, ya que `3` estudiantes pertenecen al país con el id `2` que representa a Colombia.

Recuerda que por cada **TEST** los parámetros de la función "cambiarán su valor", tu función debe ser generica, es decir, que sin importar cuál sea el valor de los parámetros, siempre deberá retornar el total de estudiantes que pertenecen al país indicado.

> No hay gloria en la práctica, pero sin práctica no hay gloria. 