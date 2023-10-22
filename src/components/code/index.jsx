import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import {a11yDark} from 'react-syntax-highlighter/dist/esm/styles/prism';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CodeStyled = styled(SyntaxHighlighter)`
  font-size: 12px;
`;


const Code = ({code, ...props}) => {
  return <CodeStyled language='javascript' style={a11yDark} {...props}>{code}</CodeStyled>;
};

Code.propTypes = {
  code: PropTypes.string
};

export default Code;