export class ResponService {
    isvalid: boolean;
    data: any;
    error: any;
    constructor(isvalid:boolean,data:any,error:any)
    {
        this.isvalid=isvalid;
        this.data=data;
        this.error=error;
    }
    public static getValidResponse(data:any) {
        return new ResponService(true,data,null);

    }
    public static getInvalidResponse(err:any) {
        return new ResponService(false,null,err);
    }
}