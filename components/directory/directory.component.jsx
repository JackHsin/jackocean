import React from 'react';

import MenuItem from '../menu-item/menu-item.component';

// import './directory.styles.scss';
import { DirectoryMenuContainer } from './directory.styles';

var sections = [
    {
        title: 'bike',
        imageUrl: 'https://a0.muscache.com/im/pictures/4c4d1c7d-80cf-4ba2-8b55-81b8ab79226e.jpg?aki_policy=xx_large',
        id: 1,
        linkUrl: 'services/bike'
    },
    {
        title: 'hostel',
        imageUrl: 'https://a0.muscache.com/im/pictures/aad03ac0-16fa-4206-9aca-65279adfbd85.jpg?aki_policy=xx_large',
        id: 2,
        linkUrl: 'services/hostel'
    },
    {
        title: 'activity',
        imageUrl: 'https://a0.muscache.com/im/pictures/a6e91c1a-44de-40ec-bda6-f55e90377826.jpg?aki_policy=xx_large',
        id: 3,
        linkUrl: 'services/activity'
    }
]

export const Directory = () => (
    <DirectoryMenuContainer>
        {
            sections.map( ({ id, ...otherSectionProps }) => (
                <MenuItem key={id} {...otherSectionProps}/>
            ))
        }
    </DirectoryMenuContainer>
);


export default Directory;