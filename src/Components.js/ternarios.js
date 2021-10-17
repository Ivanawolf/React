// import React, { useState, useEffect } from 'react';

// const LoadingComponent = () => {
// const [loading, setLoading] = useState(true);

// useEffect(() => {
// setTimeout(() => {
// setLoading(false);
// }, 10000);
// }, []);

// /*if(loading) {
// return <>
// <h2>Loading</h2>
// </>
// } else {
// return <>
// <h3>Loaded!</h3>
// </>
// }*/
// return <>
// {loading ? <h2>Loading</h2>: <h3>Loaded!</h3>}
// </>
// }

// const App = () => {
// return <LoadingComponent />
// }

// export default App; 

// /* otro ejemplo */

// import React from 'react';

// const LoadingComponent = ({condition, hola}) => {
// return <>
// {condition ? <h2>{hola}</h2>: <h3>Loaded!</h3>}
// </>
// }

// const App = () => {
// return <LoadingComponent condition={true} hola="hola como estan"/>
// }

// export default App; 


// // otro ejemplo

// import React from 'react';

// const LoadingComponent = ({condition}) => {
// return <>
// {condition && <h2>Condition es verdadera</h2>}
// {!condition && <h2>Condition es falsa</h2>}
// </>
// }

// const App = () => {
// return <LoadingComponent condition={true}/>
// }

// export default App; 




// import React, {useState} from 'react';
// import { v4 as uuidv4 } from 'uuid';

// const App = () => {
// console.log('Render: App');
// const [users, setUsers] = useState([
// { id: 'a', name: 'Robin' },
// { id: 'b', name: 'Dennis' },
// ]);

// const [text, setText] = useState('');

// const handleText = (event) => {
// setText(event.target.value);
// };

// const handleAddUser = () => {
// setUsers(users.concat({ id: uuidv4(), name: text }));
// };

// return (
// <div>
// <input type="text" value={text} onChange={handleText} />
// <button type="button" onClick={handleAddUser}>
// Add User
// </button>

// <List list={users} />
// </div>
// );
// };

// const List = ({ list }) => {
// console.log('Render: List');
// return (
// <ul>
// {list.map((item) => (
// <ListItem key={item.id} item={item} />
// ))}
// </ul>
// );
// };

// const ListItem = ({ item }) => {
// console.log('Render: ListItem');
// return <li>{item.name}</li>;
// };

// export default App; 



// // ejemplo de como agregar productos a listas 

// import React, {useState} from 'react';
// import { v4 as uuidv4 } from ‘uuid’;
// const App = () => {
//   console.log(‘Render: App’);
//   const [items, setItems] = useState([
//     { id: 'a', name: 'Buso' },
//     { id: ‘b’, name: ‘Camisa’ },
//   ]);
//   const [text, setText] = useState('');
//   const handleText = (event) => {
//     setText(event.target.value);
//   };
//   const handleAddItems = () => {
//     setItems(items.concat({ id: uuidv4(), name: text }));
//   };
//   return (
//     <div>
//       <input type=“text” value={text} onChange={handleText} />
//       <button type=“button” onClick={handleAddItems}>
//         Agregar Item
//       </button>
//       <List list={items} />
//     </div>
//   );
// };
// //memo nos ayuda a evitar renderizados
// //useMemo memoriza valores, valores qeu nos retorna una funcion
// const List = React.memo(({ list }) => {
//   console.log(‘Render: List’);
//   return (
//     <ul>
//       {list.map((item) => (
//         <ListItem key={item.id} item={item} />
//       ))}
//     </ul>
//   );
// });
// const ListItem = React.memo(({ item }) => {
//   console.log(‘Render: ListItem’);
//   return <li>{item.name}</li>;
// });
// export default App;



















