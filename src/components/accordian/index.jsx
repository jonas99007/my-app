import data from './data';
import { useState } from 'react';
import './styles.css';

export default function Accordion() { // Corrected the spelling of 'Accordion'
    const [selected, setSelected] = useState(null);
    const [enableMultiSelection, setEnableMultiSelection] = useState(false);
    const [multiple, setMultiple]= useState([]);

    function handleSingleSelection(getCurrentId) {
        setSelected(selected === getCurrentId ? null : getCurrentId); // Toggle selection
    }

    function handleMultipleSelection(getCurrentId) {
        let cpyMultiple = [...multiple];
    }

    console.log(selected);
    return (
        <div className="wrapper"> 
        <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}> Enable Multi Selection</button>
            <div className="accordion"> 
                {data && data.length > 0 ? (
                    data.map((dataItem) => (
                        <div key={dataItem.id} className="item">
                            <div  
                                 onClick={ 
                                    enableMultiSelection  
                                    ? () => handleMultipleSelection(dataItem.id)
                                    : () => handleSingleSelection(dataItem.id)
                                }
                                    className="title">
                                <h3>{dataItem.question}</h3>
                                <span>+</span>
                            </div>
                            {selected === dataItem.id && (
                                <div className="content">{dataItem.answer}</div>
                            )}
                            {/* The above code is equivalent to the following code: */}
                            {/* {selected === dataItem.id ? (
                                <div className="content">{dataItem.answer}</div>
                            ) : null} */}
                        </div>
                    ))
                ) : (
                    <div>No data found!</div>
                )}
            </div>
        </div>
    );
}
