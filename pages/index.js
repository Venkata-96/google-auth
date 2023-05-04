import Head from "next/head";
import classes from "../styles/Home.module.css";
import { getSession, signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/router";
export default function Home(props) {
  const { data: session } = useSession();
  const router = useRouter();
  console.log(session);
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        {session ? (
          <div className={classes.main}>
            <h1>Hello {session.user.name}! How are you?</h1>
            <Image
              src={session.user.image}
              width={150}
              height={150}
              alt={session.user.name}
              unoptimized
            />
            <button className={classes.button} onClick={signOut}>
              logout
            </button>
          </div>
        ) : (
          <div className={classes.main}>
            <h1>
              hello guest! click on the button to log in with your google
              account
            </h1>
            <button
              className={classes.button}
              onClick={() => router.push("./signin")}
            >
              SIgn In
            </button>
          </div>
        )}
      </div>
    </>
  );
}
export async function getServerSideProps(context) {
  const session = await getSession(context);
  return {
    props: {
      session,
    },
  };
}
