import Main from '../../components/layout/Main.jsx';

import {useNavigate} from 'react-router-dom';

import {CollectionStyled, CollectionHeadStyled} from './homepage.styled.js';
import Bar from '../../components/bar/index.jsx';

import * as barData from '../../components/bar/data.json';

const Homepage = () => {
  const navigate = useNavigate();

  const components = [
    {
      title: 'Bar Chart',
      Component: Bar,
      key: 'bar',
      data: barData.default,
      withTooltip: true,
      titleYLabel: 'Most bought of the year'
    },
  ];

  const handleComponentRoute = (key) => {
    navigate(`/d3/${key}`);
  };

  return (
    <Main>
      <CollectionHeadStyled>
        <h1 className='text-center'>
          <span className='underline--magical'>
            D3.JS
          </span> with
          <span className='underline--magical'> React JS</span>
        </h1>
      </CollectionHeadStyled>
      <CollectionStyled>
        {components.map((value, index) => (
          <div key={index} className='collection-child' onClick={() => handleComponentRoute(value.key)}>
            <value.Component data={value.data} withTooltip={value.withTooltip} title={value.title}/>
            <h3 className='title '><span className='underline--magical'>{value.title}</span></h3>
          </div>
        ))}
      </CollectionStyled>
    </Main>
  );
};

export default Homepage;