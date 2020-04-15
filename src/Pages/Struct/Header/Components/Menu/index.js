import React from 'react';

import { Container, OptionMenu } from './styles';

import Texts from 'StaticContent/Texts';
import { HomeURL, MediaURL, AboutURL, SocialNetworkURL } from 'Routers/URLs';
import { URL_STORE, URL_CONTACT, URL_WORKSHOP } from 'StaticContent/ExternalURLs';
import List from 'GeneralComponents/List';

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
                        href: URL_STORE,
                        text: Texts.ONLINE_STORE,
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
                        href: URL_WORKSHOP,
                        text: Texts.WORKSHOP,
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