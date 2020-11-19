export class PagingRequest {
    orderBy: string[];
    columns: string[];
    pageIndex: number;
    pageSize: number;
    constructor(orderBy: string[], columns: string[], pageIndex?: number, pageSize?: number) {
        this.orderBy = orderBy;
        this.columns = columns;
        this.pageIndex = pageIndex;
        this.pageSize = pageSize;
    }
}
