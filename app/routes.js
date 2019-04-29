// These are the pages you can go to.
// They are all wrapped in the App component, which should contain the navbar etc

import App from 'containers/App';
import HomePage from 'containers/HomePage';
import FeaturePage from 'containers/FeaturePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
i
export default [
  {
    ...App,
    routes: [
      {
        ...HomePage, 
        path: '/',
        exact: true,
      },
      {
        ...FeaturePage, // this will provide both component and additional loadContent params (if we wanted to have a data load, serverside, that wasn't handled by sagas. in case we want/need to to a single react.renderToString, and not a double render, which is required to do sagas serverside)
        path: '/features',
      },
      {
        ...NotFoundPage, // this will provide both component and loader params
        path: '',
       
      },
    ],
  },
];
