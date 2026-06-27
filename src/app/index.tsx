import { useRouter } from "expo-router";

export default function Home() {
  const route = useRouter();
  return route.navigate("/screens");
}
