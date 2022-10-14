import Head from 'next/head'
import PasswordForm from '../components/PasswordForm';


export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Password Generator</title>
        <meta name="description" content="" />
        <link rel="icon" href="/" />
      </Head>
      <main>
        <PasswordForm />
      </main>
    </div>
  )
}
