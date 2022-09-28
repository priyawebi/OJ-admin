import React, { useState } from 'react';

function Thead(props: { keyValue: any; }) {
    const [keyValue, setOpen] = useState(props.keyValue);
    return (
        <thead>
            <tr>
                {Object.keys(keyValue).map(function (key) {
                    return (
                        <th key={(Math.random() + 1).toString(36).substring(7)} >{keyValue[key]}</th>
                    );
                })}
            </tr>
        </thead>
    )
}

export default Thead;