import React from 'react';

// type Child = {
//     key: string;
//     title: string;
//     onClick: (event: React.MouseEvent<HTMLElement>) => void;
// };

// function handleClick(e: React.MouseEvent<HTMLElement>) {
//     console.log((e.target as Element).innerHTML);
// }

// const defaultProps: { title: ReactNode; children: Child[] } = {
//     title: <strong>Motion</strong>,
//     children: [
//         {
//             key: 'image',
//             title: 'Image',
//             onClick: handleClick,
//         },
//         {
//             key: 'text',
//             title: 'Text',
//             onClick: handleClick,
//         },
//         {
//             key: 'video',
//             title: 'Video',
//             onClick: handleClick,
//         },
//         {
//             key: 'todo',
//             title: 'To-Do',
//             onClick: handleClick,
//         },
//     ],
// };

const defaultProps = { title: 'Footer Placeholder' };

function Footer({ title }: { title: string }) {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h5
                style={{
                    padding: '0px',
                    margin: '20px 0px 10px 0px',
                }}
            >
                {title}
            </h5>
        </div>
    );
}

Footer.defaultProps = defaultProps;

export default Footer;
