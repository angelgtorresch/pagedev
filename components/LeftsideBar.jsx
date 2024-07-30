import ListSections from "./ListSections";

export default function LeftSideBar() {
  const infoTabs = [
   
   
    {
      icon: "https://img.icons8.com/?size=100&id=runYFO7RVbcD&format=png&color=000000",
      title: "",
    },
  ];
  const socials = [
    
  ];
  return (
    <aside className="hidden col-start-1 md:col-end-4 lg:col-end-3 row-start-1 p-3 mt-[40%] md:flex flex-col w-[100%] ml-2 ">
      <ListSections />
      <p className="font-bold mt-3 text-lg mb-4">Other</p>
      <div>
        {infoTabs.map((option, idx) => {
          return (
            <div
              className="flex flex-row justify-start items-center mb-2"
              key={`option-${idx}`}
            >
              <img
                className="h-[30px] w-[30px] mr-2"
                src={option.icon}
                alt={option.title}
              />
              <p>{option.title}</p>
            </div>
          );
        })}
      </div>
      <div className="flex flex-row mt-6">
        {socials.map((social, idx) => {
          return (
            <div key={`social-${idx}`}>
              <img
                className="h-[30px] w-[30px] mr-6 "
                src={social.icon}
                alt=""
              />
            </div>
          );
        })}
      </div>
    </aside>
  );
}
