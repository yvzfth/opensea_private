import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import Hero from '../components/Hero'
import { useWeb3 } from '@3rdweb/hooks'
import { useEffect } from 'react'
import { client } from '../lib/sanityClient'

const style = {
  wrapper: ``,
  walletConnectWrapper: `flex flex-col justify-center items-center h-screen w-screen bg-[#3b3d42] `,
  button: `border border-[#282b2f] bg-[#2081e2] p-[0.8rem] text-xl font-semibold rounded-lg cursor-pointer text-black`,
  details: `text-lg text-center text=[#282b2f] font-semibold mt-4`,
}

export default function Home() {

  // address = metamask wallet address
  const { address, connectWallet } = useWeb3()

  useEffect(() => {
    if (!address) return
      ; (async () => {
        const userDoc = {
          _type: 'user',
          _id: address,
          userName: 'Unnamed',
          walletAddress: address,
        }
        const result = await client.createIfNotExists(userDoc)
      })()
    // at the end () runs the callback immediately
  }, [address])

  return (
    <div className={style.wrapper}>

      {address ? (<div>
        <Header />
        <Hero />

      </div>) : (
        <div className={style.walletConnectWrapper}>

          <button
            className={style.button}
            onClick={() => connectWallet('injected')}
          >
            Connect Wallet
          </button>
          <div className={style.details}>
            You need Chrome or Edge
            <br /> to be able to run this app.
          </div>
        </div>
      )}
    </div>
  )
}
