import { redirect } from "@remix-run/router";

export async function loader() {
  return redirect("/dashboard");
}

export default function Index() {
  return <p>Redirecting...</p>;
}
