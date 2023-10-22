import {MainWrapper} from '../../components/layout/layout.styled.js';

import {D3Styled} from './d3.styled.js';

import Category from './category/index.jsx';

import {useParams, useNavigate} from 'react-router-dom';

const D3Container = () => {
  const params = useParams();
  const navigate = useNavigate();

  const header = params.chart.charAt(0).toUpperCase() + params.chart.slice(1);

  return (
    <MainWrapper>
      <D3Styled>
        <div className='d3-flex'>
          <div onClick={() => navigate(-1)} className='cursor'>
            <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5}
              stroke='currentColor' className='w-6 h-6' height={20} width={20}>
              <path strokeLinecap='round' strokeLinejoin='round' d='M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18'/>
            </svg>
          </div>
          <h1 className='text-header '>
            <span className='underline--magical'>{header}</span>
          </h1>
        </div>
        <Category chart={params.chart}/>
      </D3Styled>
    </MainWrapper>
  );
};

export default D3Container;