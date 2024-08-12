import { IChatRoom } from "@/interfaces/apis/chat";

export const dummyChat: IChatRoom[] = [
  {
    id: 1,
    totalParticipant: 3,
    roomTitle: "Meeting pelunasan proyek PT. ABC [LOW]",
    chats: [
      {
        id: 2,
        chatDate: new Date().toISOString(),
        chatDetail: [
          {
            id: 31,
            chatDate: new Date().toISOString(),
            content: "Oke saya meluncur hari ini!",
            recepient: "User",
            senderName: "Cameron Phillips",
            chatType: "FROM",
          },
          {
            id: 32,
            chatDate: new Date().toISOString(),
            content: "Cukup KTP saja.",
            recepient: "Cameron Phillips",
            senderName: "User",
            chatType: "TO",
          },
        ],
      },
      {
        id: 1,
        chatDate: new Date().toISOString(),
        chatDetail: [
          {
            id: 12,
            chatDate: new Date().toISOString(),
            content:
              "Ok. baik nanti saya kesana, dokumen yang diperlukan apa nggih?",
            recepient: "User",
            senderName: "Cameron Phillips",
            chatType: "FROM",
          },
          {
            id: 1,
            chatDate: new Date().toISOString(),
            content: "Waalaikumsalam. Dikantor pak jam 10.00 WIB",
            recepient: "Cameron Phillips",
            senderName: "User",
            chatType: "TO",
          },
          {
            id: 3,
            chatDate: new Date().toISOString(),
            content:
              "Assalamulaikam bapak/ibu, untuk pembayaran akan dilaksanakan hari ini pukul berapa ya? dan lokasinya dimana?",
            recepient: "User",
            senderName: "Cameron Phillips",
            chatType: "FROM",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    totalParticipant: 5,
    roomTitle: "Devops terkena CORS Error [URGENT]",
    chats: [
      {
        id: 99,
        chatDate: new Date().toISOString(),
        chatDetail: [
          {
            id: 12,
            chatDate: new Date().toISOString(),
            content: "Ok. saya tunggu perkembangannya ya hari ini ya!",
            recepient: "User",
            senderName: "Syauqi Amiq",
            chatType: "FROM",
          },
          {
            id: 1,
            chatDate: new Date().toISOString(),
            content:
              "Sudah aman pak, tinggal di deploy untuk script terbarunya",
            recepient: "Syauqi Amiq",
            senderName: "User",
            chatType: "TO",
          },
          {
            id: 3,
            chatDate: new Date().toISOString(),
            content: "Masalah yang CORS di devops kemarin gimana?",
            recepient: "User",
            senderName: "Syauqi Amiq",
            chatType: "FROM",
          },
        ],
      },
    ],
  },
];
