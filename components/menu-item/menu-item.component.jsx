import React from 'react';

// import './menu-item.styles.scss';
import { MenuItemContainer, BackgroundImageContainer, ContentContainer } from './menu-item.styles';


export const MenuItem = ({ title, imageUrl, size, history, linkUrl, match}) => (
    <MenuItemContainer size={size} onClick={ () => history.push(`${match.url}${linkUrl}`) }>
        <BackgroundImageContainer 
            className='background-image'
            imageUrl={imageUrl}
        />

        <ContentContainer className='content'>
            <h1 className='title'>{title}</h1>
            <span className='subtitle'>GO</span>
        </ContentContainer>
    </MenuItemContainer>
)

export default MenuItem;