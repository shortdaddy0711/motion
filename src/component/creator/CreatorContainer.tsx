import React from 'react';
import { Row, Col, Button } from 'antd';

interface closeCreatorProps {
    closeCreatorClick: (state: boolean) => void;
}

const CreatorContainer = ({ closeCreatorClick }: closeCreatorProps) => {
    return (
        <>
            <Row justify='center' align='middle' style={{marginTop: '10px'}}>
                <Col
                    span={18}
                    style={{
                        height: '100px',
                        // border: '2px solid green',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'end',
                        backgroundColor: 'white',
                    }}
                ></Col>
            </Row>
            <Row justify='center' align='middle'>
                <Col
                    span={18}
                    style={{
                        height: '50px',
                        // border: '2px solid green',
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: 'white',
                    }}
                >
                    <Button style={{marginRight: '10px'}} type='primary' onClick={() => closeCreatorClick(false)}>
                        Submit
                    </Button>
                    <Button type='default' onClick={() => closeCreatorClick(false)}>
                        Close
                    </Button>
                </Col>
            </Row>
        </>
    );
};

export default CreatorContainer;
