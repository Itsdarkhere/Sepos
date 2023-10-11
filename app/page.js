import Image from 'next/image'
import styles from './page.module.css'
import EntryView from '@/components/EntryView/EntryView'

export default function Home() {
  let loaded = false;
  const english = true;
  return (
    <main className={styles.main}>
      <EntryView english={english} loaded={loaded} />
    </main>
  )
}
