import React from 'react'
import { useState } from 'react'
import styled from 'styled-components'

const Menu = styled.li`
     height: 2rem;
     display: flex;
     align-items: center;
     padding-left: 0.3rem;
     position: relative;
     color: ${props => props.theme.grey};
     cursor: pointer;
     &:not(:last-child){
        margin-bottom: 0.5rem;
     }
     &:nth-child(2){
        background: ${props => props.theme.primary};
        color: #fff;
     }
`

const ListMenu = () => {
    const [menu] = useState(["Favorite", "Makanan", "Minuman", "Cemilan"])
  return (
    <ul>
        {menu.map((item, index) => 
            <Menu key={index}>
                {item}
            </Menu>
        )}
    </ul>
  )
}

export default ListMenu