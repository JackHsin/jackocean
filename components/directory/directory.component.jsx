import React from 'react';

import MenuItem from '../menu-item/menu-item.component';

// import './directory.styles.scss';
import { DirectoryMenuContainer } from './directory.styles';

var sections = [
    {
        title: 'Technology',
        imageUrl: 'https://www.nato.int/nato_static_fl2014/assets/pictures/images_mfu/2020/5/stock/200504-AI1.jpg',
        id: 1,
        linkUrl: 'services/bike'
    },
    {
        title: 'Ocean',
        imageUrl: 'https://assets.newatlas.com/dims4/default/454bf5c/2147483647/strip/true/crop/1992x1328+4+0/resize/1200x800!/format/webp/quality/90/?url=http%3A%2F%2Fnewatlas-brightspot.s3.amazonaws.com%2Ffe%2F06%2F75f2c8704c71ade9c8881c997c8f%2Fdepositphotos-41105113-l-2015.jpg',
        id: 2,
        linkUrl: 'services/bike'
    },
    {
        title: 'Workout',
        imageUrl: 'https://i.imgur.com/LIrtBcV.png',
        id: 3,
        linkUrl: 'services/hostel'
    },
    {
        title: 'Nutrition',
        imageUrl: 'https://i.imgur.com/UGbjC7E.png',
        id: 4,
        linkUrl: 'services/activity'
    },
    {
        title: 'Surfing',
        imageUrl: 'https://surfbunker.com/rirfx/0x0q80mf58069.jpg',
        id: 5,
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