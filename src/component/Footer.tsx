import React from 'react';

const defaultProps = { footer: '© Copyright by Max. All rights reserved.' };

function Footer({ footer }: { footer: string }) {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <p>{footer}</p>
        </div>
    );
}

Footer.defaultProps = defaultProps;

export default Footer;
