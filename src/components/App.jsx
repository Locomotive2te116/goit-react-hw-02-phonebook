import React from 'react';
export class App extends React.Component {
  state = {
    contacts: [],
    name: '',
  };
  render() {
    const { name } = this.state;
    return (
      <div>
        <h1>Phonebook</h1>
        <h2>Name</h2>
        <input type="text" name={name} required></input>
        <button>Add contact</button>
        React homework template
      </div>
    );
  }
}
// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101',
//       }}
//     >
//       React homework template
//     </div>
//   );
// };
