import { ServicesPageContainer, SectionContainer, TitleImageContainer, ContentContainer, TitleContainer, ImageContainer  } from './servicesPage.styles';

const ServicesPage = () => {
    const lorem = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia facere fugiat eius nemo nesciunt officia at debitis. Quod fuga a quibusdam, eligendi rerum quam molestiae, quae ullam labore vero dignissimos?"

    return (
        <ServicesPageContainer>
            <SectionContainer>
                <TitleImageContainer>
                    <TitleContainer color='brown'>Bike</TitleContainer>
                    <ImageContainer className='image' src="https://a0.muscache.com/im/pictures/4c4d1c7d-80cf-4ba2-8b55-81b8ab79226e.jpg?aki_policy=xx_large" />
                </TitleImageContainer>
                
                <ContentContainer>
                    {lorem}
                </ContentContainer>
            </SectionContainer>
            
            <SectionContainer>
                <TitleImageContainer>
                    <TitleContainer color='brown'>Hostel</TitleContainer>
                    <ImageContainer className='image' src="https://a0.muscache.com/im/pictures/aad03ac0-16fa-4206-9aca-65279adfbd85.jpg?aki_policy=xx_large" />
                </TitleImageContainer>
                
                <ContentContainer>
                    {lorem}
                </ContentContainer>
            </SectionContainer>

            <SectionContainer>
                <TitleImageContainer>
                    <TitleContainer color='brown'>Activity</TitleContainer>
                    <ImageContainer className='image' src="https://a0.muscache.com/im/pictures/a6e91c1a-44de-40ec-bda6-f55e90377826.jpg?aki_policy=xx_large" />
                </TitleImageContainer>
                
                <ContentContainer>
                    {lorem}
                </ContentContainer>
            </SectionContainer>

            
        </ServicesPageContainer>  
    );
};

export default ServicesPage;