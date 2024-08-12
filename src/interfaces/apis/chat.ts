export interface IChatDetail {
  id: number | any;
  senderName: string;
  chatDate: Date | string | any;
  content: string;
  recepient: string;
  chatType: string;
}

export interface IChat {
  id: number | any;
  chatDate: Date | string | any;
  chatDetail: IChatDetail[];
}

export interface IChatRoom {
  id: number | any;
  totalParticipant: number;
  roomTitle: string;
  chats: IChat[];
}
