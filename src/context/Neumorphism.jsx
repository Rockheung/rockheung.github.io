import React, { useState, useCallback, useEffect } from 'react';

const defaultState = {
  dark: false,
  toggleDark: () => {},
};

const Neumorphism = React.createContext(defaultState);

export const ThemeProvider = ({ children }) => {
  const [dark, setDark] = useState(false);

  const toggleDark = useCallback(() => {
    localStorage.setItem('dark', JSON.stringify(!dark));
    setDark(!dark);
  }, [dark]);

  useEffect(() => {
    // localStorage에 설정값이 있으면 쓰고, 없으면 os기본 설정대로 간다
    const isDark = JSON.parse(localStorage.getItem('dark'));
    if (isDark) {
      setDark(isDark);
    } else if (
      window.matchMedia('(prefers-color-scheme: dark)').matches === true
    ) {
      setDark(true);
    }
  }, []);

  return (
    <Neumorphism.Provider
      value={{
        dark,
        toggleDark,
      }}
    >
      {children}
    </Neumorphism.Provider>
  );
};

// Getting dark mode information from OS!
// You need macOS Mojave + Safari Technology Preview Release 68 to test this currently.
const supportsDarkMode = () =>
  window.matchMedia('(prefers-color-scheme: dark)').matches === true;

// class _ThemeProvider extends React.Component {
//   state = {
//     dark: false,
//   };

//   toggleDark = () => {
//     let dark = !this.state.dark;
//     localStorage.setItem('dark', JSON.stringify(dark));
//     this.setState({ dark });
//   };

//   componentDidMount() {
//     // Getting dark mode value from localStorage!
//     const lsDark = JSON.parse(localStorage.getItem('dark'));
//     if (lsDark) {
//       this.setState({ dark: lsDark });
//     } else if (supportsDarkMode()) {
//       this.setState({ dark: true });
//     }
//   }

//   render() {
//     const { children } = this.props;
//     const { dark } = this.state;
//     return (
//       <ThemeContext.Provider
//         value={{
//           dark,
//           toggleDark: this.toggleDark,
//         }}
//       >
//         {children}
//       </ThemeContext.Provider>
//     );
//   }
// }
export default Neumorphism;
