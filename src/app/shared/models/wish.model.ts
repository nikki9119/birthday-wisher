export interface About {
    whenKnown: string,
    whenKnownSpecify:string,
    rememberMet: string,
    howMet: string,
    hasNickname: string,
    nickname: string,
    likedThings: string,
    bestMemory: string,
}

export interface BasicDetails{
    name: string,
    gender:string
}

export interface Wish{
    wish: string
}

export interface Full extends About,BasicDetails,Wish{
    
}