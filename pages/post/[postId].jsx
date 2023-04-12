import { withPageAuthRequired } from "@auth0/nextjs-auth0/client";

export default function Post() {
  return <div>This is the Post page</div>;
}

// make route only accessible to authenticated users
export const getServerSideProps = withPageAuthRequired(() => {
  return {
    props: {},
  };
});
