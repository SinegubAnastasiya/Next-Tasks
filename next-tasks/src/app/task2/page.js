'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Task1() {

    const [data, setData] = useState({})

    const getInput = (e) => setData({...data, [e.target.name]:e.target.value})

    const checkData = () => {
        if (!/^[\w]+\@[a-z]+.[a-z]{2,4}/gm.test(data.email) || !isNaN(data.name) || !isNaN(data.surname) || data.password.length < 8) alert(false)
        else alert(true)
    }

    return <>
        <p>2. Создайте форму для ввода имени, фамилии, адреса электронной почты и пароля.
По клику на кнопку проверить вводимые данные на регулярные выражения. В
случае успешной валидации – alert(true)</p>

        <div className={style.form}>
            <input type="text" placeholder="Введите имя" name = 'name' onChange={getInput}></input>
            <input type="text" placeholder="Введите фамилию" name = 'surname' onChange={getInput}></input>
            <input type="text" placeholder="Введите адрес электронной почты" name = 'email' onChange={getInput}></input>
            <input type="text" placeholder="Введите пароль" name = 'password' onChange={getInput}></input>
        </div>

        <button onClick={checkData}>Check</button>

        <p><Link href='/'>Home</Link></p>
    </>
}