import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import { AppLayout } from "../components/AppLayout";

export default function TokenTopup() {
  return <div>This is the TokenTopup page</div>;
}

TokenTopup.getLayout = function getLayout(page, pageProps) {
  return <AppLayout {...pageProps}>{page}</AppLayout>;
};

// make route only accessible to authenticated users
export const getServerSideProps = withPageAuthRequired(() => {
  return {
    props: {},
  };
});
