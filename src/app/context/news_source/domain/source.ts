export class Source {
    constructor(
        private _id: null,
        private _name: string,
    ) { }


    static fromPrimitives(primitives: any): Source {
        return new Source(
            primitives["id"],
            primitives["name"],
        );
    }
}