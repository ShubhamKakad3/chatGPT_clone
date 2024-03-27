import { useState, useRef, useEffect } from "react";
import { getMessages } from "./OpenApi";
import "./App.css";

function App() {
  const messEnd = useRef(null);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      text: "helllo",
      isBot: true,
    },
  ]);

  async function handleEnter(e) {
    if (e.key === "Enter") await handleSend();
  }

  useEffect(() => {
    messEnd.current.scrollIntoView();
  }, [messages]);

  const handleSend = async () => {
    const text = input;
    setInput("");
    setMessages([...messages, { text, isBot: false }]);

    const res = await getMessages(input);
    console.log(res);
    setMessages([
      ...messages,
      {
        text: input,
        isBot: false,
      },
      { text: res, isBot: true },
    ]);
  };

  return (
    <>
      <div className="App">
        <div className="sidebar">
          <div className="upperside">
            <div className="upperSideTop">
              <div className="lo">
                {" "}
                <img src="/src/assets/chatgpt.svg" alt="" className="logo" />
                <span className="brand">chatGPT</span>
              </div>
              <button className="midBtn">
                <img
                  src="src/assets/add-30.png"
                  onClick={() => window.location.reload()}
                  alt=""
                  className="addBtn"
                />{" "}
                New Chat{" "}
              </button>
              <div className="upperSideBottom">
                <button className="query">
                  <img src="/src/assets/message.svg" alt="nd" /> what is the
                  programming ?{" "}
                </button>
                <button className="query">
                  <img src="/src/assets/message.svg" alt="" /> what is API ?{" "}
                </button>
              </div>
            </div>
          </div>
          <div className="lowerside">
            <div className="listItems">
              <img src="src/assets/home.svg" alt="" className="listItemsImg" />
              Home{" "}
            </div>
            <div className="listItems">
              <img
                src="src/assets/bookmark.svg"
                alt=""
                className="listItemsImg"
              />{" "}
              Saved
            </div>
            <div className="listItems">
              <img
                src="src/assets/rocket.svg"
                alt=""
                className="listItemsImg"
              />{" "}
              Upgrade To Pro
            </div>
          </div>
        </div>
        <div className="main">
          <div className="chats">
            <div className="chat ">
              <div className="d1 ">
                <img className="icon" src="src/assets/user-icon.png" alt="" />{" "}
                <p className="txt">
                  {" "}
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Suscipit ea sed cum mollitia, repellendus fuga? Placeat
                  quaerat amet possimus ratione.
                </p>
              </div>
              <div className=" d1 ">
                <img className="icon" src="src/assets/chatgptLogo.svg" alt="" />{" "}
                <p className="txt">
                  {" "}
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
                  ipsam libero fuga veritatis sunt architecto aspernatur
                  repellendus sit incidunt soluta tenetur, veniam aut suscipit
                  deleniti reiciendis, quod impedit dicta excepturi dolorum
                  voluptatem. Cupiditate, quod totam! Nam laboriosam non maiores
                  amet, rem eligendi ipsa iusto doloremque suscipit,
                  voluptatibus repudiandae tempora quisquam magni possimus
                  laudantium provident voluptatem omnis aliquam officiis. Earum
                  molestias facilis cumque dolorum quis, iste ipsa alias dicta
                  sapiente ut, veritatis qui, provident nemo in eius molestiae
                  dolores ullam. Non, provident itaque distinctio quibusdam
                  ratione animi totam nisi dicta, libero error at sunt dolor
                  sapiente, cumque magnam optio iure blanditiis.
                </p>
              </div>
              {messages.map((message, i) => (
                <div key={i} className={message.isBot ? " chat bot" : "chat"}>
                  <img
                    className="icon"
                    src={
                      message.isBot
                        ? "src/assets/chatgptLogo.svg"
                        : "src/assets/user-icon.png"
                    }
                    alt=""
                  />{" "}
                  <p className="txt">{message.text}</p>
                </div>
              ))}
            </div>
            <div ref={messEnd} />
          </div>
          <div className="chatfooter">
            <div className="inp">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleEnter}
                placeholder="Give a prompt here.."
              />
              <button className="send" onClick={handleSend}>
                <img src="src/assets/send.svg" alt="" />
              </button>
            </div>
            <small className="p">
              chatGPT may produce inaccurate information chatGPT. feb 0.3
              version
            </small>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
