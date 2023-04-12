import { withPageAuthRequired } from "@auth0/nextjs-auth0/client";
import AppLayout from "../../components/AppLayout";

export default function NewPost(props) {
  return (
    <div>
      <h1>New Post</h1>
    </div>
  );
}

NewPost.getLayout = function getLayout(page, pageProps) {
  return <AppLayout {...pageProps}>{page}</AppLayout>;
};

// make route only accessible to authenticated users
export const getServerSideProps = withPageAuthRequired(() => {
  return {
    props: {},
  };
});
