'use client'

import Link from "next/link"

export default function Task3() {
    const cityArr = ["New York", "London", "Tokyo", "Paris", "Berlin"]
 
    return <>
        <p>4. Создайте массив данных, представляющий элементы, которые вы хотите
отобразить в списке используя map. ["New York", "London", "Tokyo", "Paris", "Berlin"].
Добавить событие клика с распознаванием на какой именно li был совершен клик</p>

        {cityArr.map((el, index) => <ul key={index}>
                <li onClick={() => console.log(el)}>{el}</li>
            </ul>
        )}


        <p><Link href='/'>Home</Link></p>
    </>
}