import Activity from "../components/activity";
import SideBar from "../components/side-bar";

export default function Main() {
  return (
    <>
      <SideBar />
      <main class="w-full max-md:static max-md:mt-16 grid place-content-center">
        <Activity />
      </main>
    </>
  );
}
