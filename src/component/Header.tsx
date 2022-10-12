import React, { ReactNode } from 'react';

type Child = {
    key: string;
    title: string;
    onClick: (event: React.MouseEvent<HTMLElement>) => void;
};

function handleClick(e: React.MouseEvent<HTMLElement>) {
    console.log((e.target as Element).innerHTML);
}

const defaultProps: { title: ReactNode; children: Child[] } = {
    title: <strong>Motion</strong>,
    children: [
        {
            key: 'new-image',
            title: 'IMAGE',
            onClick: handleClick,
        },
        {
            key: 'new-note',
            title: 'NOTE',
            onClick: handleClick,
        },
        {
            key: 'new-video',
            title: 'VIDEO',
            onClick: handleClick,
        },
        {
            key: 'new-todo',
            title: 'TODO',
            onClick: handleClick,
        },
    ],
};

function Header({ title, children }: { title: ReactNode; children: Child[] }) {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                backgroundColor: '#dcdcdcd6',
            }}
        >
            <h1
                style={{
                    padding: '10px 20px',
                    margin: '20px 0px 10px 0px',
                    color: '#6c6c6c',
                }}
            >
                {title}
            </h1>
            <ul
                style={{
                    padding: '0 10px',
                    margin: '5px',
                    listStyle: 'none',
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-around',
                }}
            >
                {children.map((child: Child) => {
                    return (
                        <li key={child.key}>
                            <button
                                style={{
                                    backgroundColor: '#515151',
                                    border: 'none',
                                    // borderRadius: '5px',
                                    width: '140px',
                                    padding: '13px 20px',
                                    margin: '5px',
                                    fontFamily: 'sans-serif',
                                    fontWeight: 'bold',
                                    fontSize: '1rem',
                                    color: 'white',
                                    cursor: 'pointer',
                                }}
                                onClick={child.onClick}
                            >
                                {child.title}
                            </button>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

Header.defaultProps = defaultProps;

export default Header;
