import { useState } from 'react';
import './ContactPage.css';

const ContactPage = (props) => {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [enteredContacts, setEnteredContact] = useState(props.contacts);

    const nameInputHandler = (e) => {
        setName(e.target.value);
    }
    const ageInputHandler = (e) => {
        setAge(e.target.value);
    }
    const submitHandler = (e) => {
        e.preventDefault();
        console.log("submitted");
        console.log(name,age);
        const cont = {
            name: name,
            age: age,
            id: Math.random().toString()
        }
        setEnteredContact((prevCont => {
            return [...prevCont,cont]
        }))
    }

return <div>
    <form onSubmit={submitHandler} className='contact-form'>
        <div className='contact-form__inputs'>
            <label>Name</label>
            <input type="text" value={name} onChange={nameInputHandler}/>
        </div>
        <div className='contact-form__inputs'>
            <label>Age</label>
            <input type="number" value={age} onChange={ageInputHandler}/>
        </div>
        <div className='contact-form__inputs'>
            <input type="submit"/>
        </div>
    </form>
    <ul className='contact-list'>
        <h3>Contacts come here</h3>
        <li>Hello</li>
        {enteredContacts.map(val => (
            <li key={val.id}>{val.name} - {val.age}</li>
        ))}
    </ul>
</div>
}

export default ContactPage;