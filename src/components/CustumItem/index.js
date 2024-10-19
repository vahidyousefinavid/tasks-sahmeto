import React from 'react'
import './index.css'
import CustomTag from '../CustomTag'

export default function CustomItem({
    title,
    description,
    date,
    status,
    editAction,
    RemoveAction
}) {

    const desc = description.length > 15 ? description.slice(0, 15) + '...' : description;
    const sumTtile = title.length > 15 ? title.slice(0, 15) + '...' : title;

    return (
        <div className='RootItem'>
            <div className='MainSection'>
                <h6>
                    title: {sumTtile}
                </h6>
                <body>
                    description: {desc}
                </body>
                <div>
                    status: {status}
                </div>
                <h6 className='DateText'>
                    {date}
                </h6>
            </div>
            <div className='ButtonDiv'>
                <button onClick={editAction} className='EditBt'>
                    edit
                </button>
                <button onClick={RemoveAction} className='RemoveBt'>
                    remove
                </button>
            </div>
        </div>
    )
}