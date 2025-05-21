// 타입 별칭
type User = {
    id: number
    name: string
    nickname: string
    birth: string
    bio: string
    location: string
}

let user: User = {
    id: 1,
    name: "이정환",
    nickname: "winterlood",
    birth: "1997.01.07",
    bio: "안녕하세요",
    location: "부천시"
}

// 인덱스 시그니처, key와 value를 이용해서 규칙을 이용해서 type 정의
type CountryCodes = {
    [key: string]: string
}

let countryCodes: CountryCodes = {
    Korea: "ko",
    UnitedState: "us",
    UnitedKingdom: "uk"
}

type countryNumberCodes = {
    [key: string]: number
    Korea: string // Korea property는 필수로 가져야한다.
}

let countryNumberAndStringCodes: countryNumberCodes = {
    Korea: "ko"
}
