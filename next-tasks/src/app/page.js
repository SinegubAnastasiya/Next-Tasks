import Link from "next/link";


export default function Home() {
  return <>
    <h1>Next-Tasks</h1>
    <p><Link href='/task1'>Перейти к задаче 1</Link></p>
    <p><Link href='/task1'>Перейти к задаче 2</Link></p>
    <p><Link href='/task1'>Перейти к задаче 3</Link></p>
    <p><Link href='/task1'>Перейти к задаче 4</Link></p>
  </>
}
