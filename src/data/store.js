import { createStore } from 'redux';

import reducers from './reducers';

export const store = createStore(reducers);


// export const store = createStore(reducers, /* preloadedState, */ devToolsEnhancer({name: 'order list'}));

// import { devToolsEnhancer } from 'redux-devtools-extension/logOnlyInProduction';