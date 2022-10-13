import React, { useState } from 'react';
import HeaderComponent from './Header';
import PageContainer from './page/PageContainer';
import CreatorContainer from './creator/CreatorContainer';

import { Layout } from 'antd';

const { Header, Footer, Content } = Layout;

const Container = () => {
    const [open, setOpen] = useState<boolean>(false);

    const handleClick = (state: boolean) => {
        setOpen(state);
    };

    return (
        <Layout>
            <Header>
                <HeaderComponent menuItemClick={handleClick} />
            </Header>
            <Content>
                {open && <CreatorContainer closeCreatorClick={handleClick} />}
                <PageContainer open={open} />
            </Content>
            <Footer style={{ textAlign: 'center' }}>© Copyright by Max. All rights reserved</Footer>
        </Layout>
    );
};

export default Container;
