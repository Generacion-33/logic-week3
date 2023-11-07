# Instrucciones

## Suma todos los números pares de un arreglo.

La función `sumEvens(start, end)` recibe 2 números como **parámetro**. El segundo número recibido siempre será mayor al primero. Tu labor es sumar todos los números pares que se encuentren en el rango entre estos dos números, Pero **sin incluir** los dos números recibidos. Deberás **retornar** el total.

### Entrada de muestra

```javascript
start = 20

end = 30
```

### Salida de muestra

```javascript
100
```


### Consejos💡
Si tu función recibe `20` y `30` deberías **retornar** `100`, ya que los números pares entre `20` y `30` son `22`, `24`, `26`, `28` (observa que `20` y `30` no están incluidos) y la suma de todos estos números es `100`.

Puedes usar un bucle `for` para generar un rango de números.

Recuerda que por cada **TEST** los parámetros de la función "cambiarán su valor", tu función debe ser generica, es decir, que sin importar cuál sea el valor de los parámetros, siempre deberá retornar la suma total de los números pares que esten dentro del rango de los números dados sin incluir esos números.

> No hay gloria en la práctica, pero sin práctica no hay gloria. 