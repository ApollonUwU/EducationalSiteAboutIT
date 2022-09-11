import './TopJS.css';
import cat from './unnamed.png'

function TopJS() {

    return (
        <div className='TopJS'>
            <div className='infoHeader'>
                <h2>
                    JavaScript(JS doesn`t = java)
                </h2>
            </div>
            <div className='infoBody'>
                <h4>
                    JavaScript, often abbreviated JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS. As of 2022, 98% of websites use JavaScript on the client side for webpage behavior, often incorporating third-party libraries. All major web browsers have a dedicated JavaScript engine to execute the code on users' devices.

                    JavaScript is a high-level, often just-in-time compiled language that conforms to the ECMAScript standard. It has dynamic typing, prototype-based object-orientation, and first-class functions. It is multi-paradigm, supporting event-driven, functional, and imperative programming styles. It has application programming interfaces (APIs) for working with text, dates, regular expressions, standard data structures, and the Document Object Model (DOM).
                </h4>
                <h2>
                    I couldn't create interisting interaction sorry(((
                </h2>
                <h5>so here photo of cute cat)))</h5>
                <img src={cat}
                    alt="it is not loading(((" />
            </div>
        </div>
    );
}

export default TopJS;