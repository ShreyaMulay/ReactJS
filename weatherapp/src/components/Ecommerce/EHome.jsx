import React from 'react'
import styled from 'styled-components'
export default function EHome() {
  return (
    <Wrapper  className='test'>
      Ehome
    </Wrapper>
  )
}


const Wrapper = styled.section`
  background-color:${({theme})=>theme.colors.bg};
  width: 20rem;
  height: 20rem;`