import React from 'react';

//context - используется для передачи каких-либо свойств в иерархии без пробрасывания через каждое звено
const {Provider: SwapiServiceProvider, Consumer: SwapiServiceConsumer} = React.createContext(); // функция возвращает пару provider/consumer;

export {SwapiServiceProvider, SwapiServiceConsumer};
