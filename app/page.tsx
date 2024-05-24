import WelcomeCard from "@/components/UI/Homepage/WelcomeCard";
import PostsView from "@/components/UI/Homepage/PostPage";

export default function Page() {
  return (
    <>
      <WelcomeCard />
      <div>
        {/* <DynJump /> */}
        <PostsView />
      </div>
    </>
  );
}
