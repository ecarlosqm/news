export class MyNews {

    constructor(
        private _id: string,
        private _userId: string,
        private _url: string,
        private _imageUrl: string,
        private _title: string,
    ) {
        this.assertNeitherNullNorUndefined(_id, "id is required to create a new MyNews");
        this.assertNeitherNullNorUndefined(_userId,"userId is required to create a new MyNews");
        this.assertNeitherNullNorUndefined(_url,"url is required to create a new MyNews");
        this.assertNeitherNullNorUndefined(_title,"title is required to create a new MyNews");
     }

    static fromPrimitives(primitives: any) {
        return new MyNews(primitives["id"], primitives["userId"], primitives["url"], primitives["imageUrl"], primitives["title"]);
    }

    toPrimitives(): any {
        return {
            id: this._id,
            userId: this._userId,
            url: this._url,
            imageUrl: this._imageUrl,
            title: this._title,
        }
    }

    assertNeitherNullNorUndefined(value:any, error:string){
        if(value == undefined || value == null){
            throw new Error(error);
          }
    }

    
    get title(): string {
        return this._title;
    }

    get imageUrl(): string {
        return this._imageUrl;
    }

    get url():string{
        return this._url;
    }

    get id():string{
        return this._id;
    }
}