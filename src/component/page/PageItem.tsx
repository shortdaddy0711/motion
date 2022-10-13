import React from 'react';

type Item = {
    text: string;
    createAt: number;
    author: string;
    message: string;
};

const PageItem = ({ items }: { items: Item[] }) => {
    console.log(items);
    return (
        <div
            style={{
                // border: '1px solid grey',
                height: '70vh',
                padding: '20px',
                overflowY: 'auto',
                backdropFilter: 'blur(15px) brightness(.8)',
                // borderRadius: '10px',
            }}
        >
            {items.map((item: Item) => {
                return (
                    <div
                        style={{
                            // border: '2px solid blue',
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'start',
                            marginBottom: '20px',
                            height: '180px',
                            padding: '10px',
                            backgroundColor: 'white',
                            // borderRadius: '10px',
                            fontSize: '1rem',
                        }}
                    >
                        <div
                            style={{
                                width: '250px',
                                border: '1px solid skyblue',
                                marginRight: '20px',
                                borderRadius: '5px',
                                backgroundImage: 'url("assets.pineapple.jpeg")',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                        >
                            <img height='150px' src={require('./assets/pineapple.jpeg')} alt='sample' />
                        </div>
                        <div
                            key={item.text + item.createAt + item.author}
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-evenly',
                            }}
                        >
                            <span>Title: {item.text}</span>
                            <span>Author: {item.author}</span>
                            <span>Message: {item.message}</span>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

const defaultProps: { items: Item[] } = {
    items: [
        { text: 'Default Text1', createAt: Date.now(), author: 'Default user1', message: 'PINEAPPLE' },
        { text: 'Default Text2', createAt: Date.now(), author: 'Default user2', message: 'PINEAPPLE' },
        { text: 'Default Text3', createAt: Date.now(), author: 'Default user3', message: 'PINEAPPLE' },
        { text: 'Default Text4', createAt: Date.now(), author: 'Default user4', message: 'PINEAPPLE' },
        { text: 'Default Text5', createAt: Date.now(), author: 'Default user5', message: 'PINEAPPLE' },
    ],
};

PageItem.defaultProps = defaultProps;

export default PageItem;
