
import moment from 'moment-timezone';
moment().tz("Asia/Shanghai").format();

const displayDateTime = () => {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();
    const xz = date.getDay(); // 获取星期
    return year + '年' + String(month).padStart(2, '0') + '月' + String(day).padStart(2, '0')+ '日 ' + weekStr(xz) + ' ' + 
    String(hour).padStart(2, '0') + ':' + String(minute).padStart(2, '0') + ':' + String(second).padStart(2, '0');
}

const weekStr = (type: number) => {
    switch (type) {
        case 0: return '星期日';
        case 1: return '星期一';
        case 2: return '星期二';
        case 3: return '星期三';
        case 4: return '星期四';
        case 5: return '星期五';
        case 6: return '星期六';
        default: return '星期日';
    }
}

export {
    displayDateTime
}

