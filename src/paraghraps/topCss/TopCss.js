import { useState } from 'react';
import './TopCss.css'

function TopCss() {
    const [css1, setCss] = useState("");

    const injectCSS = css => { //function that makes injecting your css code possible
        let el = document.createElement('style');
        el.type = 'text/css';
        el.innerText = css;
        document.head.appendChild(el);
        return el;
    };

    injectCSS(css1);
    
    return(
        <div className='TopHtml'>
            <div className="header">
                <h2>CSS</h2>
            </div>
            <div>
                <h4 className="inform">
                    Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML (including XML dialects such as SVG, MathML or XHTML).[1] CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.

                    CSS is designed to enable the separation of presentation and content, including layout, colors, and fonts.[3] This separation can improve content accessibility; provide more flexibility and control in the specification of presentation characteristics; enable multiple web pages to share formatting by specifying the relevant CSS in a separate .css file, which reduces complexity and repetition in the structural content; and enable the .css file to be cached to improve the page load speed between the pages that share the file and its formatting.

                    Separation of formatting and content also makes it feasible to present the same markup page in different styles for different rendering methods, such as on-screen, in print, by voice (via speech-based browser or screen reader), and on Braille-based tactile devices. CSS also has rules for alternate formatting if the content is accessed on a mobile device.

                    The name cascading comes from the specified priority scheme to determine which style rule applies if more than one rule matches a particular element. This cascading priority scheme is predictable.

                    The CSS specifications are maintained by the World Wide Web Consortium (W3C). Internet media type (MIME type) text/css is registered for use with CSS by RFC 2318 (March 1998). The W3C operates a free CSS validation service for CSS documents.

                    In addition to HTML, other markup languages support the use of CSS including XHTML, plain XML, SVG, and XUL.
                </h4>
            </div>
            <div>
                <div className='tip'><h2>This might help you with next problem</h2></div>
                <div className='classnames'>
                    <li>header</li>
                    <li>inform</li>
                    <li>tip</li>
                    <li>classnames</li>
                    <li>rhytoricQuestion</li>
                    <li>cssinput</li>
                </div>
            </div>
            <div>
                <h2 className="rhytoricQuestion">Isn`t world boring without css?</h2>
            </div>
            <div>
                <h3>Make it better!!!</h3>
                    <p>
                        <textarea
                           className="cssinput"
                           type="text" 
                           value={css1}
                           onChange={(e) => setCss(e.target.value)}
                        ></textarea>
                    </p>
            </div>
        </div>
    )
}

export default TopCss;