import { Message } from "../typings";

type Props = {
  key: string;
  message: Message;
};

function MessageComponent({ message }: Props) {
  const isUser = true;

  return (
    <div className={`flex w-fit ${isUser && "ml-auto"}`}>
      <div className={`flex-shrink-0 ${isUser && "order-2"}`}>
        <img
        className="rounded-full mx-2" 
        src="https://cdn-icons-png.flaticon.com/512/2102/2102647.png"
        height={10} 
        width={50} 
        alt="Logo" />
      </div>

      <div>
        <p className={`text-[0.65rem] px-[2px] pb-[2px] ${isUser ? "text-emerald-500 text-right" : "text-emerald-800 text-left" }`}>
          {message.username}
          </p>

        <div className="flex items-end">
          <div className={`px-3 py-2 rounded-lg w-fit text-white ${isUser ? "bg-emerald-500 ml-auto order-2" : "bg-emerald-600"}`}>
            <p>{message.message}</p>
          </div>

          <p className={`text-[0.65rem] italic px-2 text-gray-300 ${isUser && "text-right"}`}>
            {new Date(message.created_at).toLocaleString()}
            </p>
        </div>
      </div>
    </div>
  );
}

export default MessageComponent;
