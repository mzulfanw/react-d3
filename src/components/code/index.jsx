import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import {a11yDark} from 'react-syntax-highlighter/dist/esm/styles/prism';
import PropTypes from 'prop-types';

const Code = ({code}) => {
  return <SyntaxHighlighter language='javascript' style={a11yDark}>{code}</SyntaxHighlighter>;
};

Code.propTypes = {
  code: PropTypes.string
};

export default Code;