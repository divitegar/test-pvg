import Head from "next/head";
import Dashboard from "../components/Dashboard/Dashboard";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Dashboard />
      </main>

      <footer></footer>
    </div>
  );
}
