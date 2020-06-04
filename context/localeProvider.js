import { Component, createContext, useState } from 'react';

// first we will make a new context
export const LocaleContext = createContext();

// Then create a provider Component
const LocaleProvider = (props) => {
  const [ locale, setLocale ] = useState("zh");

    return (
      <LocaleContext.Provider value={{ locale, setLocale }}>
        {props.children}
      </LocaleContext.Provider>
    );

}

export default LocaleProvider;