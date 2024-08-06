'use client'

import Link from "next/link"
import { useState } from "react"

export default function Task3() {
    const [flag, setFlag] = useState(false)
 
    return <>
        <p>6. Создайте кнопку, которая позволяет пользователю переключаться между светлой
и темной темой интерфейса. Используйте useState, чтобы отслеживать текущую
тему. Применяйте соответствующие стили в зависимости от выбранной темы.</p>

        <div style={{background: !flag ? "white" : "black", height: "300px", width: "100%"}}></div>
        <button onClick={() => setFlag(!flag)}>Change theme</button>

        <p><Link href='/'>Home</Link></p>
    </>
}