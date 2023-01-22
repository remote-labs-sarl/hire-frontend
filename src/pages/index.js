import Head from 'next/head'
import {HomeCover, SearchBar, ListeTechnologies} from "../components/elements/home";
import api from "@/services/axios";
import Footer from "@/components/layouts/footer";

export default function Home({data }) {
  return (
    <>
      <Head>
        <title>Hire | Home page</title>
        <meta property='og:title'  content='Hire | Home page'/>
        <meta name='twitter:title' content='Hire | Home page'/>
        <meta name="description" content="Find the best with RemoteLabs" />
        <meta property='og:description'  content='Find the best with RemoteLabs'/>
        <meta name='twitter:description' content='Find the best with RemoteLabs'/>
      </Head>
      <main className="">
        <HomeCover/>
          <SearchBar/>
          <ListeTechnologies data={data}/>
          <Footer/>
      </main>
    </>
  )
}

export async function  getServerSideProps() {
let data=null;
    try {
        const res = await api.get('/technologies?page=0&size=20')
        const data = await res.data
        console.log("data", data)
        return { props: { data } }
    }catch (e) {
        console.log("error", e)
        return { props: {data } }
    }


    // Pass data to the page via props

    // Pass data to the page via prop
}
