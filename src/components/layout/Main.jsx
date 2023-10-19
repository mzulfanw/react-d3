import PropTypes from 'prop-types';
import {MainWrapper} from './layout.styled.js';

const Main = ({children}) => {
  return <div>
    <MainWrapper>{children}</MainWrapper>
  </div>;
};

Main.propTypes = {
  children: PropTypes.node
};

export default Main;