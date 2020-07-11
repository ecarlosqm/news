import { Source } from './source';

export class NewsSource {

    private constructor(
        private _source: Source,
        private _author: string,
        private _title: string,
        private _description: string,
        private _url: string,
        private _urlToImage: string,
        private _publishedAt: Date,
        private _content: string,
    ) { }

    static fromPrimitives(primitives: any) {

        return new NewsSource(
            Source.fromPrimitives(primitives["source"]),
            primitives["author"],
            primitives["title"],
            primitives["description"],
            primitives["url"],
            primitives["urlToImage"],
            primitives["publishedAt"],
            primitives["content"],
        );
    }

    get title(): string {
        return this._title;
    }

    get imageUrl(): string {
        return this._urlToImage;
    }

    get publishedAt(): Date{
        return this._publishedAt;
    }

    get author():string{
        return this._author;
    }

    get url():string{
        return this._url;
    }
}