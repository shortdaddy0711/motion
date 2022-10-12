import React from 'react';
import './App.css';
import Header from './component/Header';
import Footer from './component/Footer';

type TextItem = {
    text: string;
    createAt: number;
    author: string;
    message: string;
};

function TextItemContainer({ textItems }: { textItems: TextItem[] }) {
    console.log(textItems);
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
            {textItems.map((textItem: TextItem) => {
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
                                alignItems: 'center'
                            }}
                        >
                            <img height='150px' src={require('./assets/pineapple.jpeg')} alt='sample' />
                        </div>
                        <div
                            key={textItem.text + textItem.createAt + textItem.author}
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-evenly',
                            }}
                        >
                            <span>Title: {textItem.text}</span>
                            <span>Author: {textItem.author}</span>
                            <span>Message: {textItem.message}</span>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

const defaultProps: { textItems: TextItem[] } = {
    textItems: [
        { text: 'Default Text1', createAt: Date.now(), author: 'Default user1', message: 'PINEAPPLE' },
        { text: 'Default Text2', createAt: Date.now(), author: 'Default user2', message: 'PINEAPPLE' },
        { text: 'Default Text3', createAt: Date.now(), author: 'Default user3', message: 'PINEAPPLE' },
        { text: 'Default Text4', createAt: Date.now(), author: 'Default user4', message: 'PINEAPPLE' },
        { text: 'Default Text5', createAt: Date.now(), author: 'Default user5', message: 'PINEAPPLE' },
    ],
};

TextItemContainer.defaultProps = defaultProps;

function App() {
    return (
        <div>
            <Header />
            <TextItemContainer />
            <Footer />
        </div>
    );
}

export default App;
