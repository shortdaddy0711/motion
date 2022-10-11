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
            key: 'image',
            title: 'Image',
            onClick: handleClick,
        },
        {
            key: 'text',
            title: 'Text',
            onClick: handleClick,
        },
        {
            key: 'video',
            title: 'Video',
            onClick: handleClick,
        },
        {
            key: 'todo',
            title: 'To-Do',
            onClick: handleClick,
        },
    ],
};

function Header({ title, children }: { title: ReactNode; children: Child[] }) {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h1
                style={{
                    padding: '0px',
                    margin: '20px 0px 10px 0px',
                }}
            >
                {title}
            </h1>
            <ul
                style={{
                    padding: '0 10px',
                    margin: '10px',
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
                                    backgroundColor: 'purple',
                                    border: '2px solid yellow',
                                    borderRadius: '5px',
                                    width: '130px',
                                    padding: '10px 20px',
                                    margin: '10px',
                                    fontFamily: 'monospace',
                                    fontWeight: 'bold',
                                    fontSize: '1.2rem',
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
