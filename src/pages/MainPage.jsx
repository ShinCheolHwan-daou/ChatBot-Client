import React, {useRef} from "react";
import Portfolio from "../components/Portfolio.jsx";
import Chat from "../components/Chat.jsx";

function MainPage({data}) {
    const {user, assets, chats} = data;
    const contentContainerRef = useRef(null);
    const [selectedChatIndex, setSelectedChatIndex] = React.useState(null);

    function selectChat(index) {
        setSelectedChatIndex(index);
        if (contentContainerRef.current) {
            contentContainerRef.current.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        }
    }

    return (
        <div className="w-full h-full flex relative bg-slate-800">
            {/*sidebar*/}
            <div className="w-[261px] h-full flex flex-col bg-gray-900 p-3">
                <div
                    className="w-full flex justify-center items-center rounded-md border border-[#444654] p-3 mb-3 hover:cursor-pointer"
                    onClick={() => selectChat(null)}
                >
                    <p className="text-[13.5px] font-medium text-left text-white">
                        나의 자산 보기
                    </p>
                </div>
                <div className="w-full flex-1 overflow-auto">
                    {chats.map((chat, index) => {
                        return (<div key={`chat-id-${chat.id}`}
                                     className={`w-full flex items-center rounded-md p-3 hover:cursor-pointer ${selectedChatIndex === index ? "bg-[#343540]" : ""}`}
                                     onClick={() => selectChat(index)}
                        >
                            <svg
                                width={14}
                                height={14}
                                viewBox="0 0 14 14"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="mr-3"
                                preserveAspectRatio="none"
                            >
                                <path
                                    d="M13 9C13 9.35362 12.8595 9.69276 12.6095 9.94281C12.3594 10.1929 12.0203 10.3333 11.6667 10.3333H3.66667L1 13V2.33333C1 1.97971 1.14048 1.64057 1.39052 1.39052C1.64057 1.14048 1.97971 1 2.33333 1H11.6667C12.0203 1 12.3594 1.14048 12.6095 1.39052C12.8595 1.64057 13 1.97971 13 2.33333V9Z"
                                    stroke="#C5C5D1"
                                    strokeWidth="1.33333"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                            <p className="w-full text-[13.5px] font-medium text-left text-white overflow-hidden text-ellipsis whitespace-nowrap">
                                {chat.title}
                            </p>
                        </div>)
                    })}
                </div>
            </div>
            {/*content*/}
            <div ref={contentContainerRef} className="flex-1 overflow-auto">
                {
                    selectedChatIndex != null && chats[selectedChatIndex] ?
                        <Chat chat={chats[selectedChatIndex]}/>
                        :
                        <Portfolio user={user} assets={assets}/>
                }
            </div>
        </div>)
}

export default MainPage;