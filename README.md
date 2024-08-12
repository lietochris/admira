# Admira test

## Requisitos

- Node >= 20.x.x
- NPM >= 10.x.x

## Desarrollo

Ejecuta el servidor de desarrollo:

```shellscript
npm run dev
```

## Despliegue

El proyecto ha sido configurado para funcionar en modo SSR, por lo que es fundamental prestar especial atención a los
permisos asignados al host.

Primero, construye la aplicación para producción:

```sh
npm run build
```

Luego, ejecuta la aplicación en modo producción:

```sh
npm start
```

Asegúrate de que haya desplegado correctamente la salida de `npm run build`:

- `build/server`
- `build/client`

## FAQ

### ¿Dónde puedo ver las capturas de pantalla?

Las capturas de pantalla están ubicadas en la carpeta raíz, dentro del directorio `/screenshots`.

### ¿Por qué no se utilizó ninguna API Rest?

Aunque intenté implementarla, surgieron varios inconvenientes al crear datos de prueba en múltiples ocasiones. Por ello,
decidí avanzar con la prueba en lugar de quedarme estancado. Sin embargo, el sistema ha sido diseñado para permitir la
integración con diferentes fuentes de datos en el futuro, siempre que se cumplan los contratos de interfaz.

Para fines de demostración, se integró una API pública que proporciona información sobre la población por año en Estados
Unidos. Esta funcionalidad se puede encontrar en la página "Población".

### ¿Por qué no se agregó ningún test?

Para evitar extender aún más la prueba. No obstante, sería ideal utilizar "Cypress" para realizar tests E2E en las
pantallas más utilizadas, y "Jest" para probar casos específicos como los repositorios.

### ¿Por qué elegiste este diseño de UX/UI?

Creo firmemente que los diseños minimalistas permiten una mayor concentración en las tareas, a diferencia de los diseños
sobrecargados (como el panel de AWS o Google Analytics). Además, esto contribuye a que los assets sean más ligeros y el
código más mantenible.

### ¿Guarda en cache los datos?

Remix incorpora un sistema de almacenamiento en caché al utilizar el método `loader`, lo que permite acceder al estado
global desde cualquier componente.