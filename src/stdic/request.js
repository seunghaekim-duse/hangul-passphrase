import fetch from "node-fetch"

export const uri = "https://www.korean.go.kr/common/download.do?file_path=etcData&c_file_name=5a4a2f5c-66c9-425d-88fb-854289ea2521_0.xls&o_file_name=dic.xls"

export default async function () {
    return fetch(uri)
}