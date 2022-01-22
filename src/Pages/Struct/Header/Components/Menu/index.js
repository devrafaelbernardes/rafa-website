import List from 'GeneralComponents/List';
import React from 'react';
import { AboutURL, HomeURL, MediaURL, SocialNetworkURL } from 'Routers/URLs';
import { URL_CONTACT } from 'StaticContent/ExternalURLs';
import Texts from 'StaticContent/Texts';
import { Container, OptionMenu } from './styles';

export function Menu() {
    return (
        <Container>
            <List
                items={[
                    {
                        to: HomeURL().REDIRECT.BASE,
                        text: Texts.HOME,
                    },
                    {
                        to: MediaURL().REDIRECT.BASE,
                        text: Texts.MEDIA,
                    },
                    {
                        to: AboutURL().REDIRECT.BASE,
                        text: Texts.ABOUT,
                    },
                    {
                        href: URL_CONTACT,
                        text: Texts.CONTACT,
                    },
                    {
                        to: SocialNetworkURL().REDIRECT.BASE,
                        text: Texts.SOCIAL_NETWORK,
                    },
                ]}
                renderItem={(item, key) => (
                    <OptionMenu
                        key={key}
                        exact={key === 0}
                        to={item.to}
                        href={item.href}
                        isNavLink={item.to ? true : false}
                    >
                        {item.text}
                    </OptionMenu>
                )}
            />
        </Container>
    );
}

export default Menu;