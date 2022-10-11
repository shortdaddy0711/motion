import React from 'react';
import './App.css';
import Header from './component/Header';
import Footer from './component/Footer';
import { text } from 'stream/consumers';

type TextItem = {
    text: string;
    createAt: number;
    author: string;
};

function TextItemContainer({ textItems }: { textItems: TextItem[] }) {
    console.log(textItems);
    return (
        <div style={{ border: '1px solid grey', height: '70vh', padding: '10px' }}>
            {textItems.map((textItem: TextItem) => {
                return (
                    <div
                        key={textItem.text + textItem.createAt + textItem.author}
                        style={{ border: '2px solid red', marginBottom: '10px' }}
                    >
                        {textItem.text}
                    </div>
                );
            })}
        </div>
    );
}

const defaultProps: { textItems: TextItem[] } = {
    textItems: [
        { text: 'default text1', createAt: Date.now(), author: 'default user1' },
        { text: 'default text2', createAt: Date.now(), author: 'default user2' },
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
