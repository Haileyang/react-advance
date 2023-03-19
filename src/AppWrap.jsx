import React from 'react';

export default function AppWrap() {
    return (
        <div>
            <Navbar>
                <div>
                    Header 01
                    <p>Hello User!</p>
                </div>
            </Navbar>
            <Navbar>
                <div>
                    Header 02
                </div>
            </Navbar>
        </div>
    );
}

function Navbar({children}) {
    return (
        <header style={{ backgroundColor: 'yellow' }}>{children}</header>
    )
}