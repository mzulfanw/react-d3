import {useState} from 'react';

import {D3ContentStyled} from '../d3.styled.js';
import {NavLink} from 'react-router-dom';
import Bar from '../../../components/bar';
import Code from '../../../components/code';

import * as barData from '../../../components/bar/data.json';

const D3Bar = () => {
  const [data, setData] = useState(barData.default);

  const handleAppend = () => {
    const createDefault = {food: 'Kouta', value: 50000};
    setData(prev => [...prev, {...createDefault}]);
  };

  return (
    <D3ContentStyled>
      <div className='container mb-2'>
        <div className='section-about'>
          <h3> What is a Bar chart?</h3>
          <p>A bar chart or bar graph is a chart or graph that presents categorical data with rectangular bars
                        with heights or lengths proportional to the values that they represent. The bars can be plotted
                        vertically or horizontally. <NavLink
            to={'https://en.wikipedia.org/wiki/Bar_chart#:~:text=A%20bar%20chart%20or%20bar,be%20plotted%20vertically%20or%20horizontally.'}>(wikipedia)</NavLink>
          </p>
        </div>
        <div className='section-picture'>
          <Bar data={data.slice(0, 6)}/>
        </div>
      </div>
      <div className='mb-5'>
        <div className='section-about'>
          <h3>Available Props</h3>
          <Code code={`
            withTooltip: boolean;
            title: string;
            
            default value :
            withTooltip = false;
            title = ''
            
            explanation :
            withTooltip will return tooltip component when you 'mouseover'
            title will return text will be place at top of yScale
          `}
          />
        </div>
      </div>
      <div className='container mb-2'>
        <div className='section-about'>
          <h3>Lets Append new data into a Bar</h3>
          <button className={`button-append ${data.length === 7 ? 'disabled' : 'cursor'} `}
            onClick={handleAppend} disabled={data.length === 7}>Add new
          </button>
          <Code
            code={JSON.stringify(data)}
            wrapLines
            wrapLongLines
          />
        </div>
        <div className='section-picture'>
          <Bar data={data} withTooltip={true}/>
        </div>
      </div>
    </D3ContentStyled>
  );
};

export default D3Bar;