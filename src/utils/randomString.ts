
/**
 * 生成16位随机字符串
 */
const randomString = () => {
    const str_pol = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789abcdefghijklmnopqrstuvwxyz";
    let str = "";
    const max = str_pol.length - 1;
    for (let i = 0; i < 16; i++) {
        str += str_pol.charAt(Math.floor(Math.random() * max));
    }
    return str;
}

export {
    randomString
}