import {createBrowserRouter} from 'react-router-dom';

import Homepage from '../pages/homepage/index.jsx';
import D3Container from '../pages/d3/index.jsx';

const router = [{path: '/', element: <Homepage/>}, {path: '/d3/:chart', element: <D3Container/>}];

// eslint-disable-next-line react-refresh/only-export-components
export default createBrowserRouter(router);