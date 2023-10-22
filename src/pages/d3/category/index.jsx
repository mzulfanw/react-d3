import {useMemo} from 'react';
import D3Bar from './D3Bar.jsx';
import PropTypes from 'prop-types';

const Category = ({chart}) => {
  return useMemo(() => {
    switch (chart) {
      case 'bar':
        return <D3Bar/>;
      default:
        return <p>not found</p>;
    }
  }, [chart]);
};

Category.propTypes = {
  chart: PropTypes.string
};

export default Category;