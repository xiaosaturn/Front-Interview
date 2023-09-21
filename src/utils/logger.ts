import winston from 'winston'
const { format } = winston;

import moment from 'moment-timezone'

// 设置时区为'Asia/Shanghai'
moment.tz.setDefault('Asia/Shanghai');

interface MsgI {
    url?: string,
    method?: string,
    auth?: string,
    headers?: string,
    params?: string,
    query?: string,
    body?: string,
    weixin?: string
}

interface LogI {
    level?: string,
    message?: string | object,
    label?: string,
    timestamp?: string
}

const myFormat = format.printf(({ level, message, label, timestamp }) => {
    let obj = <MsgI>({});
    const formattedTimestamp = timestamp.toLocaleString('cn-ZH', { timeZone: 'Asia/Shanghai' });
    if (typeof message === 'object') {
        if (message.url) {
            obj.url = message.url;
        }
        if (message.method) {
            obj.method = message.method;
        }
        if (message.auth) {
            obj.auth = message.auth;
        }
        if (message.headers) {
            obj.headers = message.headers;
        }
        if (message.params) {
            obj.params = message.params;
        }
        if (message.query) {
            obj.query = message.query;
        }
        if (message.body) {
            obj.body = message.body;
        }
        if (message.weixin) {
            obj.weixin = message.weixin;
        }
        if (message.msg) {
            obj = message.msg;
        }
    } else {
        obj = message.msg;
    }
    return `${formattedTimestamp} [${label}] ${level}: ${JSON.stringify(obj)}`;
});

const logger = winston.createLogger({
    format: format.combine(
        format.timestamp({
            format: () => moment().format('YYYY-MM-DD HH:mm:ss')
        }),
        myFormat
    ),
    transports: [
        //
        // - Write all logs with importance level of `error` or less to `error.log`
        // - Write all logs with importance level of `info` or less to `combined.log`
        //
        new winston.transports.Console(),
        new winston.transports.File({ filename: 'info.log', level: 'info' }),
        new winston.transports.File({ filename: 'error.log', level: 'error' }),
        new winston.transports.File({ filename: 'combined.log' }),
    ],
});

//
// If we're not in production then log to the `console` with the format:
// `${info.level}: ${info.message} JSON.stringify({ ...rest }) `
//
if (process.env.NODE_ENV !== 'production') {
    logger.add(new winston.transports.Console({
        format: format.simple(),
    }));
}

export { logger }