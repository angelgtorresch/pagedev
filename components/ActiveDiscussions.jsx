export default function ActiveDiscussion() {
  const discussions = [
    {
      title: "Weekly Watercooler Thread",
      comments: "10 Comments",
    },
    {
      title:
        "Your code is NOT special.",
      comments: "10 comments",
    },
    {
      title: "Engineering Impact Of Generative AI, Give Outstanding Code Reviews",
      comments: "10 Comments",
    },
    {
      title: "What is the New Generation Browser you currently use?",
      comments: "10 Comments",
    },
    {
      title: "Meme Monday",
      comments: "10 Comments",
    },
    {
      title: "Something Extra",
      comments: "10 Comments",
    },
  ];

  return (
    <div>
      {discussions.map((discussion) => {
        return (
          <div
            className="mb-8 border-b-2 p-1"
            key={`discussion-${discussion.title}`}
          >
            <h3 className="text-md">{discussion.title}</h3>
            <p className="text-sm opacity-50 mb-2">{discussion.comments}</p>
          </div>
        );
      })}
    </div>
  );
}
