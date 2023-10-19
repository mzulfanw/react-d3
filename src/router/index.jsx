import {createBrowserRouter} from 'react-router-dom';

import Homepage from '../pages/homepage/index.jsx';

const router = [{path: '/', element: <Homepage/>}];

// eslint-disable-next-line react-refresh/only-export-components
export default createBrowserRouter(router);