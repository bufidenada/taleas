import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    height: 100%;
    padding: 24px;
    align-items: center;
    
    @media (max-width: 550px) {
    padding: 10px;
  }
`

export const RightSideWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;
`

export const Title = styled.h3`
 font-family: 'Montserrat', sans-serif;
 color: white;
 margin-bottom: 0px;
`

export const Details = styled.h3`
 font-family: 'Montserrat', sans-serif;
 color: #E4E4E4;
 margin-bottom: 0px;
`

