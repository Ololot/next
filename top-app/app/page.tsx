import Image from 'next/image';
import styles from './page.module.css';
import { Metadata } from 'next';
import { Button, Htag } from '@/components';
import Logo from "../public/vercel.svg"
// import Htag from '@/components/Htag/Htag';
// import Htag from '@/components/Htag/Htag';

// export const metadata: Metadata = {
//   title: 'Данные из Page',
//   description: 'Generated by create next app',
// }

export async function generateMetadata(): Promise<Metadata> {
  return { title: "ComputedMeta" }
}

export default function Home(): JSX.Element {

  const a = 1;
  console.log("CONNECTION!!!!!")

  return (
    <div>
      <Logo />
      <Htag tag="h1">Текст</Htag>
      <Button appearence='primary' className='TestClassName'>Кнопка</Button>
      <Button appearence='ghost' >Кнопка</Button>


    </div>
  )
}
