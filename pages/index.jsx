import Link from "next/link";
import { useUser } from "@auth0/nextjs-auth0/client";
import Image from "next/image";

export default function Home() {
  const { user } = useUser();

  console.log("USER: ", user);

  return (
    <div>
      <h1>This is the homepage</h1>
      <div>
        {!!user ? (
          <>
            <div className="">
              <Image
                src={user.picture}
                alt={user.name}
                width={50}
                height={50}
              />
            </div>
            <div className="">{user.email}</div>
            <Link href="/api/auth/logout">Logout</Link>
          </>
        ) : (
          <Link href="/api/auth/login">Login</Link>
        )}
      </div>
    </div>
  );
}
