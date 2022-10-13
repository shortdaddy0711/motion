import React from 'react';
import { Col, Row } from 'antd';

const PageContainer = ({ open }: { open: boolean }) => {
    return (
        <Row justify='center' style={{ marginTop: '10px' }}>
            <Col
                span={18}
                style={{
                    height: open ? '640px' : '800px',
                    // border: '2px solid red',
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'start',
                    justifyContent: 'center',
                    backgroundColor: 'gainsboro',
                }}
            >
                Page Contents
            </Col>
        </Row>
    );
};

export default PageContainer;
