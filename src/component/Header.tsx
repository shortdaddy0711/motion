import React, { useState } from 'react';
import { Menu, Row, Col, Typography } from 'antd';
import type { MenuProps } from 'antd';
import {
    ThunderboltOutlined,
    FileImageOutlined,
    VideoCameraOutlined,
    FormOutlined,
    BarsOutlined,
} from '@ant-design/icons';

const { Text } = Typography;

const textStyle = { fontSize: '1em', color: 'white' };

const iconStyle = {
    fontSize: '1.3em',
    color: 'white',
};

const menuItems: MenuProps['items'] = [
    {
        label: (
            <Text strong style={textStyle}>
                IMAGE
            </Text>
        ),
        key: 'image',
        icon: <FileImageOutlined style={iconStyle} />,
    },
    {
        label: (
            <Text strong style={textStyle}>
                NOTE
            </Text>
        ),
        key: 'note',
        icon: <FormOutlined style={iconStyle} />,
    },
    {
        label: (
            <Text strong style={textStyle}>
                VIDEO
            </Text>
        ),
        key: 'video',
        icon: <VideoCameraOutlined style={iconStyle} />,
    },
    {
        label: (
            <Text strong style={textStyle}>
                TODO
            </Text>
        ),
        key: 'todo',
        icon: <BarsOutlined style={iconStyle} />,
    },
];

interface menuItemProps {
    menuItemClick: (state: boolean) => void;
}

const HeaderComponent = ({ menuItemClick }: menuItemProps) => {
    const [current, setCurrent] = useState<string>('');

    const handleClick: MenuProps['onClick'] = (e) => {
        setCurrent(e.key);
        menuItemClick(true);
    };

    return (
        <Row justify='center'>
            <Col span={4}>
                <div style={{ color: 'white', fontSize: '1.5rem', fontWeight: 'bold' }}>
                    <ThunderboltOutlined />
                    MOTION
                </div>
            </Col>
            <Col span={10}>
                <Menu
                    onClick={handleClick}
                    theme='dark'
                    mode='horizontal'
                    items={menuItems}
                    selectedKeys={[current]}
                />
            </Col>
        </Row>
    );
};

export default HeaderComponent;
