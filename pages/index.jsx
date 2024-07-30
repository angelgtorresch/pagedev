import LeftSideBar from "@/components/LeftsideBar";
import MainPost from "@/components/MainPost";
import NavBar from "@/components/NavBar";
import { Toaster } from "sonner";
import { getPosts } from "./api/post";
import { toast } from "sonner";
import RightSideBar from "@/components/RighSideBar";
export default function Home({ posts, users }) {
  return (
    <>
      <Toaster />
      <main className="grid grid-cols-10  bg-[#F5F5F5] max-h-fit">
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







