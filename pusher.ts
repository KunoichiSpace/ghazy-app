import Pusher from "pusher";
import ClientPusher from "pusher-js";

export const serverPusher = new Pusher({
    appId: "1510117",
    key: "3b4adfa38de9a0cc887d",
    secret: "a097938d302149dff227",
    cluster: "ap1",
    useTLS: true
})

export const clientPusher = new ClientPusher ('3b4adfa38de9a0cc887d', {
    cluster: 'ap1',
    forceTLS: true
  })