## Creando una tienda Redux

Para crear una tienda Redux, utilizarás la función configureStore de Redux Toolkit. Esta función acepta una función reductora como argumento y automáticamente configura la tienda con buenas configuraciones predeterminadas

...

## Proporcionando la tienda a los componentes de React

Para proporcionar la tienda Redux a tus componentes de React, utiliza el componente Provider de react-redux:

...

## Creando un Slice de Redux

createSlice() es una función que nos ayuda a crear una "rebanada" o "slice" de la store de Redux que contiene el reducer y las acciones en un solo archivo.

La función createSlice() acepta un objeto de funciones reductoras, un nombre de slice y un valor de estado inicial, y nos permite generar automáticamente tipos de acción y creadores de acción, basados en los nombres de las funciones reductoras que proporcionamos.

También nos ayuda a organizar toda la lógica relacionada con Redux para una determinada slice en un solo lugar.

Para crear un slice de Redux, utiliza la función createSlice de Redux Toolkit. Esta función acepta un nombre, un estado inicial y funciones reductoras nombradas. Las funciones reductoras pueden "mutar" el estado usando Immer, y se exportan el reductor de slice generado y los creadores de acciones

...

## Usando Hooks de React-Redux

En tus componentes de React, utiliza los hooks useSelector y useDispatch de react-redux para leer datos de la tienda y despachar acciones según sea necesario

...
