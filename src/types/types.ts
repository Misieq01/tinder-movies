export interface IMovie {
    id:string,
    imageURL:string,
    title: string,
    summary: string,
    rating: number

}

export type TActionType = 'accept' | 'reject'