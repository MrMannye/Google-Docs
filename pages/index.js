import Head from 'next/head'
import Header from '../components/Header'
import Main from '../components/Main'
import Documents from '../components/Documents'
import Login from '../components/Login'
import { getSession, useSession } from 'next-auth/client'

export default function Home() {

  const [session, loading] = useSession();
  
  if(!session) return <Login/>

  return (
    <div className="min-h-screen">
      <Head>
        <title>Google Docs</title>
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="Google Docs Manu" />
        <meta property='og:image' content='/main.png' />
        <meta property='og:description' name='description' content='Pagina Clone de Google Docs como practica de desarrollo' />
      </Head>

      {/* Header */}
      <Header/>

      {/* New Document Section */}
      <section className='bg-gray-200 px-10'>
        <Main/>
      </section>

      {/* My all documents */}
      <section className="bg-white mt-6 px-10 md:px-0">
        <Documents/>
      </section>

    </div>
  )
}

export async function getServerSideProps(context){
  const session = await getSession(context);
  return {
    props: {
      session,
    }
  }
}