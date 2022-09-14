import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>

      <div className={styles.container}>
        <Head>
          <title>Marston Connell</title>
          <meta name="description" content="The personal site of Marston Connell" />
          <link rel="icon" href="/favicon.ico" />
        </Head>



        <main className={styles.main}>
          <h1 className='text-6xl mb-2'>
            Marston Connell
          </h1>
          <div className='text-4xl mb-12'>
            Moving fast and breaking things
          </div>
          <h2 className='text-5xl mb-4'>
            Projects
          </h2>

          <div className={`${styles.grid} grid mb-12`}>
            <a className="card w-96 bg-base-100 shadow-xl" href='https://www.curseforge.com/minecraft/mc-mods/random-loot-mod'>
              <figure><img src="https://static.planetminecraft.com/files/resource_media/screenshot/1834/logo-1535240013.png" alt="Random Loot Logo" /></figure>
              <div className="card-body">
                <h2 className="card-title">
                  Random Loot Mod
                </h2>
                <p>Random Loot is a modification for Minecraft built with the Forge Modding API. The mod features new weapons and tools designed to emulate RPG loot.</p>
                <div className="card-actions justify-end">
                  <div className="badge badge-outline">Minecraft</div>
                  <div className="badge badge-outline">Java</div>
                </div>
              </div>
            </a>

            <a className="card w-96 bg-base-100 shadow-xl" href='https://jackaldao.com/'>
              <figure><img src="https://raw.githubusercontent.com/JackalLabs/canine-chain/master/banner.png" alt="Jackal Logo" /></figure>
              <div className="card-body">
                <h2 className="card-title">
                  Jackal
                </h2>
                <p>Jackal is a suite of privacy and cyber security tools built with Web3 technology. Jackal&apos;s flagship product is Jackal Storage, a cloud storage platform where even the hosts are unable to see your data.</p>
                <div className="card-actions justify-end">
                  <div className="badge badge-outline">Blockchain</div>
                  <div className="badge badge-outline">Storage</div>
                  <div className="badge badge-outline">Golang</div>
                </div>
              </div>
            </a>

            <a className="card w-96 bg-base-100 shadow-xl" href='https://marstonc.itch.io/pathway-protectors'>
              <figure><img src="https://img.itch.zone/aW1hZ2UvNTg2MTIwLzMwOTA3MDEucG5n/347x500/LQog%2FM.png" alt="Pathway Protectors Gameplay" /></figure>
              <div className="card-body">
                <h2 className="card-title">
                  Pathway Protectors
                </h2>
                <p>Pathway protectors is a simple tower defense game written for a 2 week game design project.</p>
                <div className="card-actions justify-end">
                  <div className="badge badge-outline">Game Design</div>
                  <div className="badge badge-outline">Python</div>
                </div>
              </div>
            </a>

            <a className="card w-96 bg-base-100 shadow-xl" href='https://github.com/TheMarstonConnell/cookies'>
              <figure><img src="https://handletheheat.com/wp-content/uploads/2020/10/BAKERY-STYLE-CHOCOLATE-CHIP-COOKIES-9-637x637-1.jpg" alt="Cookies" /></figure>
              <div className="card-body">
                <h2 className="card-title">
                  Satoshi&apos;s Bakery
                </h2>
                <p>An idle clicker game built on the CosmosSDK inspired by Cookie Clicker</p>
                <div className="card-actions justify-end">
                  <div className="badge badge-outline">Blockchain</div>
                  <div className="badge badge-outline">Golang</div>
                </div>
              </div>
            </a>

            <a className="card w-96 bg-base-100 shadow-xl" href='https://github.com/TheMarstonConnell/Hailstorm'>
              <figure><img src="https://pbs.twimg.com/profile_images/1263469903950106626/zCK-Zj1Q_400x400.png" alt="Hailstorm Logo" /></figure>
              <div className="card-body">
                <h2 className="card-title">
                  Hailstorm
                </h2>
                <p>A third-party Deezer front-end to make browsing for music a little bit better.</p>
                <div className="card-actions justify-end">
                  <div className="badge badge-outline">UX</div>
                  <div className="badge badge-outline">Javascript</div>
                </div>
              </div>
            </a>

            

          </div>

        </main>

        <footer className={styles.footer}>
          Marston Connell 2022
        </footer>
      </div>
    </div>
  )
}
