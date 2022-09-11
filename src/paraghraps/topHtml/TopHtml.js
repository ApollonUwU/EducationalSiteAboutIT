import { useState } from 'react';
import { Markup } from 'interweave'; // i used markup lib to that user can build a part of this site
import './TopHtml.css';

function TopHtml() {
    const [txt, setTxt] = useState("");


    return (
        <div className='TopHtml'>
            <div className='infoHeader'>
                <h2>Html</h2>
            </div>
            <div className='infoMain'>
                <h4>
                    The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets (CSS) and scripting languages such as JavaScript.

                    Web browsers receive HTML documents from a web server or from local storage and render the documents into multimedia web pages. HTML describes the structure of a web page semantically and originally included cues for the appearance of the document.
                </h4>
            </div>
            <div className='infoInteract'>
                <h2>
                    Hm.... i think this page is missing something(((...
                </h2>
                <h2>
                    Let`s make it interesting!!!
                </h2>
                <h3>
                    Add-whatewer-you-want-O-matic
                </h3>
                <p>
                    <textarea
                        className="cssinput"
                        type="text"
                        value={txt}
                        onChange={(e) => setTxt(e.target.value)}
                    ></textarea>
                </p>
            </div>
            <div><Markup content={txt} /></div>
        </div>
    );
}

export default TopHtml;