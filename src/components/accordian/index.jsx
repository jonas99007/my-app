import data from './data';
import { useState } from 'react';

export default function Accordion() { // Corrected the spelling of 'Accordion'
    const [selected, setSelected] = useState(null);

    function handleSingleSelection(getCurrentId) {
        setSelected(selected === getCurrentId ? null : getCurrentId); // Toggle selection
    }

    console.log(selected);
    return (
        <div className="wrapper"> 
            <div className="accordion"> {/* Corrected the spelling of 'accordion' */}
                {data && data.length > 0 ? (
                    data.map((dataItem) => (
                        <div key={dataItem.id} className="item">
                            <div className="title" onClick={() => handleSingleSelection(dataItem.id)}>
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
