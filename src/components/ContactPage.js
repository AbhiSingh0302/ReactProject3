import { useState } from 'react';
import './ContactPage.css';
import Modal from './Modal';

const ContactPage = (props) => {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [enteredContacts, setEnteredContact] = useState(props.contacts);
    const [invalid, setInvalid] = useState(false);

    const nameInputHandler = (e) => {
        setInvalid(false);
        setName(e.target.value);
    }

    const ageInputHandler = (e) => {
        setInvalid(false);
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
        if(cont.name.trim().length !== 0 && cont.age.trim().length !== 0 && Number(cont.age.trim()) > 0){
            setEnteredContact(prevCont => [...prevCont,cont])
        }else{
            setInvalid(true);
        }
    }

return <div>
    <form onSubmit={submitHandler} className='contact-form'>
        <div className='contact-form__inputs main-input'>
            <label>Name</label>
            <input type="text" value={name} onChange={nameInputHandler} className='main-input'/>
        </div>
        <div className='contact-form__inputs main-input'>
            <label>Age</label>
            <input type="number" value={age} onChange={ageInputHandler} className='main-input'/>
        </div>
        <div className='contact-form__inputs'>
            <input type="submit" id='submit'/>
        </div>
    </form>
    {invalid && <Modal/>}
    <ul className='contact-list'>
        {enteredContacts.length>0 ? enteredContacts.map(val => (
            <li key={val.id}>{val.name} - {val.age}</li>
        )) : <h3>Contacts come here</h3>}
    </ul>
</div>
}

export default ContactPage;