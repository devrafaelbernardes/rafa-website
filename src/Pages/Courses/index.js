import React, { memo } from 'react';

import ImageCoursesSRC from 'Assets/Images/courses.jpg';
import ImageWorkshopsSRC from 'Assets/Images/workshops.jpg';

import { Container, Body, ItemsList, ItemContainer, ItemGeneralContainer, ItemLink, ItemImage } from './styles';

import { URL_WORKSHOP, URL_EAD } from 'StaticContent/ExternalURLs';

const Item = memo(({ image, ...props }) => (
    <ItemContainer>
        <ItemLink {...props} target="_blank">
            <ItemGeneralContainer>
                <ItemImage
                    src={image}
                />
            </ItemGeneralContainer>
        </ItemLink>
    </ItemContainer>
));

export function Courses() {
    const options = [
        {
            href: URL_EAD,
            image: ImageCoursesSRC,
        },
        {
            href: URL_WORKSHOP,
            image: ImageWorkshopsSRC,
        },
    ]
    return (
        <Container>
            <Body>
                <ItemsList
                    items={options}
                    renderItem={(item, key) => (<Item key={key} {...item} />)}
                />
            </Body>
        </Container>
    );
}

export default Courses;