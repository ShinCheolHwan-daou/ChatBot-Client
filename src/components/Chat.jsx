import React from "react";


function Chat({chat}) {
    return (
        <>
            <div
                className="bg-gray-800 text-white p-4 rounded-xl shadow-lg mb-4 border border-gray-600">
                <h2 className="text-lg font-semibold mb-2">📊 요약</h2>
                <p className="text-sm text-gray-300 leading-relaxed">
                    {chat.summary}

                </p>
            </div>
            {
                chat.content.map((chat, index) => {
                    if (chat.role === "system") {
                        return <div key={`chat-content-${index}`}></div>;
                    }

                    return (
                        <div key={`chat-content-${index}`}
                             className={`w-full flex justify-center py-5 ${chat.role === "assistant" ? "bg-[#444654]" : ""} `}>
                            {
                                chat.role === "user" ?
                                    <svg
                                        width={30}
                                        height={30}
                                        viewBox="0 0 30 30"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-[30px] h-[30px] mr-5"
                                        preserveAspectRatio="none"
                                    >
                                        <rect width={30} height={30} rx={2} fill="#5536DA"/>
                                        <path
                                            d="M23 23V21C23 19.9391 22.5786 18.9217 21.8284 18.1716C21.0783 17.4214 20.0609 17 19 17H11C9.93913 17 8.92172 17.4214 8.17157 18.1716C7.42143 18.9217 7 19.9391 7 21V23"
                                            stroke="white"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M15.0001 13C17.2093 13 19.0001 11.2091 19.0001 9C19.0001 6.79086 17.2093 5 15.0001 5C12.791 5 11.0001 6.79086 11.0001 9C11.0001 11.2091 12.791 13 15.0001 13Z"
                                            stroke="white"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                    :
                                    <svg
                                        width={30}
                                        height={30}
                                        viewBox="0 0 30 30"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-[30px] h-[30px] mr-5"
                                        preserveAspectRatio="none"
                                    >
                                        <rect width={30} height={30} rx={2} fill="#0FA47F"/>
                                        <path
                                            d="M24.5497 13.1254C24.7996 12.3747 24.8863 11.5795 24.804 10.7927C24.7216 10.0059 24.4722 9.24574 24.0723 8.56316C23.4795 7.53072 22.5741 6.7133 21.4866 6.22884C20.3991 5.7444 19.1859 5.61796 18.0218 5.86779C17.4968 5.2761 16.8514 4.80338 16.1289 4.48128C15.4064 4.15919 14.6234 3.99513 13.8324 4.00011C12.6423 3.99724 11.482 4.37237 10.5189 5.07144C9.5557 5.7705 8.83943 6.75737 8.4733 7.88976C7.69801 8.04846 6.96557 8.37095 6.32501 8.83564C5.68444 9.30034 5.15054 9.8965 4.75904 10.5842C4.16153 11.6139 3.90648 12.8066 4.03066 13.9905C4.15485 15.1744 4.65187 16.2883 5.45002 17.1714C5.20011 17.9221 5.11341 18.7173 5.19574 19.5041C5.27807 20.2909 5.52751 21.051 5.92738 21.7336C6.52022 22.766 7.42569 23.5834 8.51316 24.0678C9.60063 24.5523 10.8139 24.6788 11.9779 24.429C12.5029 25.0207 13.1483 25.4934 13.8708 25.8155C14.5933 26.1376 15.3763 26.3016 16.1673 26.2967C17.358 26.2998 18.5189 25.9245 19.4824 25.225C20.446 24.5255 21.1624 23.5379 21.5282 22.4048C22.3034 22.2461 23.0359 21.9237 23.6765 21.4589C24.317 20.9943 24.8509 20.3981 25.2424 19.7103C25.8392 18.6808 26.0937 17.4884 25.9691 16.3049C25.8447 15.1215 25.3476 14.0081 24.5497 13.1254ZM16.1691 24.8391C15.1917 24.8405 14.2449 24.4982 13.4944 23.8721C13.5282 23.8536 13.5876 23.8211 13.6263 23.7974L18.0658 21.233C18.1772 21.1696 18.2697 21.0777 18.3338 20.9666C18.398 20.8556 18.4314 20.7295 18.4306 20.6014V14.3425L20.3071 15.426C20.3169 15.4309 20.3254 15.4381 20.3318 15.4471C20.3382 15.4561 20.3422 15.4665 20.3436 15.4774V20.6607C20.3422 21.7678 19.902 22.8291 19.1196 23.6123C18.3371 24.3955 17.2761 24.8367 16.1691 24.8391ZM7.19155 21.0049C6.70197 20.1589 6.52552 19.1678 6.69309 18.2048C6.72606 18.2246 6.78364 18.2598 6.82496 18.2835L11.2645 20.8479C11.3751 20.9126 11.501 20.9467 11.6291 20.9467C11.7572 20.9467 11.8831 20.9126 11.9937 20.8479L17.4139 17.7183V19.8853C17.4145 19.8963 17.4124 19.9074 17.4077 19.9175C17.4031 19.9275 17.396 19.9362 17.3871 19.9429L12.8992 22.534C11.9393 23.0869 10.7992 23.2364 9.72917 22.9497C8.65912 22.663 7.74651 21.9636 7.19155 21.0049ZM6.02365 11.313C6.51111 10.466 7.28103 9.81746 8.19858 9.48094C8.19858 9.51918 8.19638 9.58691 8.19638 9.6339V14.7627C8.1956 14.8908 8.22895 15.0167 8.29299 15.1277C8.35703 15.2386 8.44946 15.3305 8.56078 15.3939L13.9809 18.5231L12.1045 19.6066C12.0952 19.6127 12.0846 19.6164 12.0736 19.6174C12.0625 19.6184 12.0514 19.6167 12.0412 19.6123L7.55287 17.0189C6.5946 16.464 5.89549 15.5517 5.60883 14.4821C5.32216 13.4125 5.47134 12.2728 6.02365 11.313ZM21.4407 14.9007L16.0205 11.771L17.897 10.688C17.9062 10.6819 17.9169 10.6782 17.9279 10.6772C17.939 10.6762 17.9501 10.6779 17.9603 10.6823L22.4486 13.2735C23.1362 13.6707 23.6964 14.2555 24.0637 14.9596C24.4309 15.6637 24.59 16.4578 24.5223 17.249C24.4545 18.0402 24.1627 18.7957 23.6812 19.4271C23.1996 20.0585 22.548 20.5396 21.8029 20.8141C21.8029 20.7754 21.8029 20.7077 21.8029 20.6607V15.5319C21.8039 15.404 21.7709 15.2782 21.7073 15.1672C21.6436 15.0563 21.5517 14.9643 21.4407 14.9007ZM23.3084 12.0897C23.2754 12.0695 23.2178 12.0348 23.1765 12.0111L18.737 9.44666C18.6263 9.38211 18.5005 9.34805 18.3724 9.34805C18.2443 9.34805 18.1184 9.38211 18.0077 9.44666L12.5876 12.5764V10.4093C12.5869 10.3982 12.5891 10.3872 12.5937 10.3772C12.5984 10.3671 12.6055 10.3584 12.6144 10.3517L17.1023 7.76272C17.7898 7.36628 18.576 7.17381 19.369 7.20785C20.1619 7.24189 20.9287 7.50103 21.5797 7.95494C22.2308 8.40885 22.7391 9.03877 23.0452 9.77102C23.3513 10.5032 23.4426 11.3075 23.3084 12.0897ZM11.5674 15.9521L9.69043 14.8686C9.68062 14.8637 9.67209 14.8565 9.66573 14.8475C9.65938 14.8385 9.65531 14.8281 9.65397 14.8172V9.6339C9.65447 8.84005 9.88112 8.06274 10.3073 7.39299C10.7336 6.72324 11.3418 6.18876 12.0607 5.85211C12.7797 5.51545 13.5797 5.39056 14.367 5.49205C15.1544 5.59353 15.8966 5.9172 16.5067 6.42515C16.4728 6.44361 16.4139 6.47614 16.3748 6.49988L11.9353 9.06425C11.8238 9.12758 11.7314 9.21943 11.6672 9.33038C11.6031 9.44131 11.5697 9.56734 11.5704 9.69544L11.5674 15.9521ZM12.5867 13.7543L15.0007 12.3601L17.4148 13.7535V16.5411L15.0007 17.9345L12.5867 16.5411V13.7543Z"
                                            fill="white"
                                        />
                                    </svg>
                            }


                            <p className="w-1/2 text-[15px] font-medium text-left text-white">
                                {chat.content}
                            </p>
                        </div>
                    )
                })
            }
        </>
    )
}

export default Chat;