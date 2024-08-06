'use client'

import Link from "next/link"
import { useState } from "react"

export default function Task3() {
    const [input, setInput] = useState('')

    return <>
        <p>3. Создайте форму для ввода данных. По клику на кнопку получите данные из input
и отобразите в консоль</p>

        <input type="text" value={input} onChange={(e) => setInput(e.target.value)}></input>
        <button onClick={() => console.log(input)}>Get data</button>

        <p><Link href='/'>Home</Link></p>
    </>
}