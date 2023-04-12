import { withPageAuthRequired } from "@auth0/nextjs-auth0";

export default function TokenTopup() {
  return <div>This is the TokenTopup page</div>;
}

// make route only accessible to authenticated users
export const getServerSideProps = withPageAuthRequired(() => {
  return {
    props: {},
  };
});
