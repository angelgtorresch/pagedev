import LeftSideBar from "@/components/LeftsideBar";
import MainPost from "@/components/MainaPost";
import NavBar from "@/components/NavBar";
import { Toaster } from "sonner";
import { getPosts } from "react-hook-form";
import { toast } from "sonner";
import RightSideBar from "@/components/RighSideBar";
export default function Home({ posts, users }) {
  return (
    <>
      <Toaster />
      <main className="grid grid-cols-10  bg-[#d8d7d7] max-h-fit">
        <NavBar />
        <LeftSideBar />
        <MainPost posts={posts} users={users} />
        <RightSideBar />
      </main>
    </>
  );
}

export async function getServerSideProps() {
  try {
    const posts = await getPosts();

    return {
      props: {
        posts,
      },
    };
  } catch (error) {
    toast.error(error);
    console.error(error);

    return {
      props: {
        posts: [],
      },
    };
  }
}