import React from 'react'
import './App.css'

const Form = () => {

    return (
        <form className="form-group" method="POST">
            <div className="q">
                <label htmlFor="Name" className="">Name:</label>
                <input type="text" />
            </div>
            <div className="q">
                <label htmlFor="Email" placeholder="name@example.com" className="">Email:</label>
                <input type="Email" />
            </div>
            <div className="q">
                <label htmlFor="Phone Number" className="">Phone Number:</label>
                <input type="number" />
            </div>
            <div className="q">
                <label htmlFor="Univ" className="">University</label>
                <input type="text" />
            </div>
            <div className="q ">
                <label htmlFor="academic year">Academic Year</label>
                <div className="form-check">
                <input className="form-check-input" type="radio" name="2020" id="2020" />2020</div>
                <div className="form-check">
                <input className="form-check-input" type="radio" name="2021" id="2021" />2021</div>
                <div className="form-check">
                <input className="form-check-input" type="radio" name="2022" id="2022" />2022</div>
                <div className="form-check">
                <input className="form-check-input" type="radio" name="2019" id="2019" />2019</div>
            </div>
            <div className="q ">
                <label htmlFor="First WS">First WS</label>
                <select className="">
                    <option type="checkbox" name="nothing" id="" >hi</option>
                    <option type="checkbox" name="hi" id="" >id</option>
                </select>
            </div>
            <div className="q ">
                <label htmlFor="Second WS">Second WS</label>
                <select className="">
                    <option type="checkbox" name="nothing" id="" >hi</option>
                    <option type="checkbox" name="hi" id="" >id</option>
                </select>
            </div>
            <button className="submit btn btn-primary" value="Submit" >Submit</button>
        </form>
    )
}

export default Form