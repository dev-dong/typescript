// 객체 리터럴 타입
// 구조적 타입 시스템 -> Property Based System
let user: {
    id?: number // Optional Property
    name: string
} = {
    id: 1,
    name: "이정환"
}

let config: {
    readonly apiKey: string // 값 변경이 안됨
} = {
    apiKey: "MY API KEY"
}
