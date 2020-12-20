import { MessageType } from '../enums';

export interface IMessage {
    type: MessageType;
    content: string;
    displayOrder: number | undefined;
}
