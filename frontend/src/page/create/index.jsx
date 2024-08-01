import React, { memo, useState } from 'react'

const CreateUser = () => {
    const [radio, setRadio] = useState('Male')

    return (
        <section className="create-user">
            <h2 className='modal__title'>Create User</h2>
            <form className="user__form">
                <input required type="text" placeholder="First Name" />
                <input type="text" placeholder="Last Name" />
                <input type="text" placeholder="Username" />
                <input type="password" placeholder="Password" />
                <input type="number" placeholder="Age" />
                <input type="text" placeholder="Image url" />
                <label className='radio__label'>
                    <input className='radio__input' type="radio" />
                    <span>Male</span>
                    <input className='radio__input' type="radio" />
                    <span>Female</span>
                </label>
                <input type="email" placeholder="Email" />
                <input type="number" placeholder="Budget" />
                <button type="submit" className="form__btn">Create</button>
            </form>
        </section>
    )
}

export default memo(CreateUser)