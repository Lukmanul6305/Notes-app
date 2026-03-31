import React from 'react';

const LocaleContext = React.createContext();

const LocaleProvider = LocaleContext.Provider;
const LocaleConsumer = LocaleContext.Consumer;

export { LocaleProvider, LocaleConsumer };
export default LocaleContext;