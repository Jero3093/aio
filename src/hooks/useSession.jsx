import { cookies } from "next/headers";

async function useSession() {
  try {
    const cookiesStore = await cookies();
    const cookieSession = cookiesStore.get("session");

    const session = JSON.parse(cookieSession?.value);

    return session ? session : null;
  } catch (error) {
    console.log(error);
  }
}

export default useSession;
