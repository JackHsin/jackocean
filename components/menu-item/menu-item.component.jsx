import Link from 'next/link'

import { MenuItemContainer, BackgroundImageContainer, ContentContainer } from './menu-item.styles';

import { FormattedMessage } from 'react-intl';

export const MenuItem = ({ title, imageUrl, size}) => (
    <Link href={`/services#${title}`}>
        <MenuItemContainer size={size} >
            <BackgroundImageContainer 
                className='background-image'
                imageUrl={imageUrl}
            />

            <ContentContainer className='content'>
                <h1 className='title'><FormattedMessage id={`homepage.${title}`}/></h1>
                <span className='subtitle'>GO</span>
            </ContentContainer>
        </MenuItemContainer>
    </Link>
)

export default MenuItem;