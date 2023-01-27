import Head from 'next/head'
import Card from '../../components/cardCard';
import styles from '../../styles/ygo.module.css'
import Modal from '../../components/CardModal';
import { useState } from 'react';

export async function getServerSideProps() {
    const res = await fetch("https://db.ygoprodeck.com/api/v7/cardinfo.php?&startdate=03/08/2002&enddate=03/09/2002&dateregion=tcg_date");
    const cards = await res.json();
    // console.log(cards.data);
    return { props: { cards }};
}

export default function Home({cards}) {
    const [showModal, setShowModal] = useState(false);
    return (
    <div className="container">
        <Head>
        <title>LOB API </title>
        <link rel="icon" href="/favicon.ico" />
        </Head>

        <main>
        <header className={styles.header}><h1>LOB Cards</h1></header>
        <div className={styles.container}>
        {cards.data.map((card) => (
            <Card card={card} key={card.id}/>
        ))}
        </div>
        <Modal show={showModal} onClose={() => setShowModal(false)}>

        </Modal>
        <div id='card-modal'></div>
        </main>
    </div>
    )
}
