import { MessageType } from '@cores/lib/enums';

export class MessageEntity {
    type: MessageType;
    content: string;
    displayOrder: number;
    constructor(type: MessageType, content: string, displayOrder?: number) {
        this.type = type;
        this.content = content;
        this.displayOrder = displayOrder;
    }
}
