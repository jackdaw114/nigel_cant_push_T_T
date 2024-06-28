import React from 'react';
import './Table.css';

import Badge from './Badge';

const colorMapping = {
    DELL: "rgba(255, 0, 0, 0.6)",       // Red with 50% opacity
    KVM: "rgba(0, 0, 255, 0.6)",        // Blue with 50% opacity
    CISCO: "rgba(0, 128, 0, 0.6)",      // Green with 50% opacity
    WOBSP01: "rgba(255, 165, 0, 0.6)",  // Orange with 50% opacity
    WOBLF01: "rgba(255, 255, 0, 0.6)",  // Yellow with 50% opacity
    PATCH: "rgba(128, 0, 128, 0.6)",    // Purple with 50% opacity
    LIU: "rgba(255, 192, 203, 0.6)",    // Pink with 50% opacity
    STORAGE: "rgba(165, 42, 42, 0.6)",  // Brown with 50% opacity
    NODE: "rgba(0, 255, 255, 0.6)",     // Cyan with 50% opacity
    IBM: "rgba(128, 128, 128, 0.6)",    // Grey with 50% opacity
    NEOSERIES: "rgba(255, 0, 255, 0.6)" // Magenta with 50% opacity
};

const getItemType = (item) => {
    const key = item.split(' ')[0];
    return colorMapping[key] || 'defaultColor'; // Fallback color
};

const Table = (props) => {
    return (
        <table className='w-full table-fixed text-center text-white bg-teal-600 -z-0 '>
            <thead className='text-3xl'>
                <tr>
                    <th className='py-2'>{props.name} Rack</th>
                </tr>
            </thead>
            <tbody>
                {props.rack?.map((item, index) => {
                    const color = getItemType(item);
                    return (
                        <tr key={index}>
                            <td className='h-12'>
                                <div className='flex justify-start'>
                                    <span className='pl-2 flex'>
                                        {index + 1}.
                                    </span>
                                    <div className='w-full flex justify-center'>
                                        <span className='w-10/12 flex justify-center'>
                                            <Badge label={item} color={color} />
                                        </span>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
};

export default Table;
