
import { useState, useRef } from 'react'
import Start from '../assets/icon-star.svg'
import Thanks from '../assets/illustration-thank-you.svg'

function App() {

    const numbers = [1, 2, 3, 4, 5]

    const [count, setCount] = useState(null)

    const handleButtonClick = (e) => {
        const value = e.target.getAttribute('data-id')
        setCount(parseInt(value))
    }

    const first = useRef(null)
    const second = useRef(null)


    const changeCard = () => {

        if (count === null) return


        /* toggle cards */

        if (first.current && second.current) {
            if (first.current.style.display === "none") {
                first.current.style.display = "grid";
                second.current.style.display = "none";
                setCount(null) //reset
            } else {
                first.current.style.display = "none";
                second.current.style.display = "grid";
            }
        }
    }


    return (
        <section>
            <div ref={first} className="container">
                <img src={Start} alt="start" className="img-start" />
                <h1>How did we do?</h1>
                <p className="disclaimer">
                    Please let us know how we did with your support request. All feedback is appreciated
                    to help us improve our offering!
                </p>
                <div className="numbers">
                    <ul className="numbers-list">
                        {
                            numbers.map(number => (
                                <li key={number}><button onClick={handleButtonClick} className="btn" data-id={number}>{number}</button></li>
                            ))}
                    </ul>
                </div>
                <input type="submit" value="SUBMIT" className="submit-btn" id="btn-card1" onClick={changeCard} />
            </div>

            <div ref={second} className="container-reverse hidden">
                <img src={Thanks} alt="thank-you" className="img-ty" />
                <p className="rating">You selected <span id="ratio-number">{count}</span> out of 5</p>
                <h1>Thank you!</h1>
                <p>We appreciate you taking the time to give a rating. If you ever need more support,
                    don’t hesitate to get in touch!</p>
                <input type="submit" value="BACK" className="submit-btn" onClick={changeCard} />
            </div>

        </section>

    )
}

export default App


