import style from './style.module.scss'

export default function Task1() {

    return <>
        <p>1. Создайте форму для ввода имени, фамилии, адреса электронной почты и пароля.</p>

        <div className={style.form}>
            <input type="text" placeholder="Введите имя"></input>
            <input type="text" placeholder="Введите фамилию"></input>
            <input type="text" placeholder="Введите адрес электронной почты"></input>
            <input type="text" placeholder="Введите пароль"></input>
        </div>
    </>
}