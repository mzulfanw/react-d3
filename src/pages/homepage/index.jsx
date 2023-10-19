import Main from '../../components/layout/Main.jsx';

import {CollectionStyled, CollectionHeadStyled} from './homepage.styled.js';
import Bar from '../../components/bar/index.jsx';

const Homepage = () => {

  const components = [
    {title: 'Bar Chart', component: <Bar withTooltip={true} title='Most bought of the year'/>}
  ];

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
          <div key={index} className='collection-child'>
            {value.component}
            <h3 className='title '><span className='underline--magical'>{value.title}</span></h3>
          </div>
        ))}
      </CollectionStyled>
    </Main>
  );
};

export default Homepage;