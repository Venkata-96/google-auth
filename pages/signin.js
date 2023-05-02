import React from "react";
import classes from "../styles/Home.module.css";
import { getProviders, getSession, signIn } from "next-auth/react";
const signin = ({ providers }) => {
  return (
    <div className={classes.main}>
      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <button
            className={classes.button}
            onClick={() => signIn(provider.id)}
          >
            Sign in with {provider.name}
          </button>
        </div>
      ))}
    </div>
  );
};

export default signin;
export async function getServerSideProps(context) {
  const { req, res } = context;
  const providers = await getProviders();
  const session = await getSession({ req });
  if (session && res) {
    res.statusCode = 302;
    res.setHeader("Location", "/");
  }
  
  return {
    props: {
      providers,
      session,
    },
  };
}
