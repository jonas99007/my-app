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
                        <div key={dataItem.id} className="item"> {/* Added 'key' prop for list items */}
                            <div className="title" onClick={() => handleSingleSelection(dataItem.id)}>
                                <h3>{dataItem.question}</h3>
                                <span>+</span>
                            </div>
                            {selected === dataItem.id && ( // Simplified conditional rendering
                                <div className="content">{dataItem.answer}</div>
                            )}
                        </div>
                    ))
                ) : (
                    <div>No data found!</div>
                )}
            </div>
        </div>
    );
}
