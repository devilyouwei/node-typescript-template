import config from './config/web.config'

export default class Util {
    static log(...data: any[]): void {
        if (config.logging) console.log(...data)
    }
    static error(...data: any[]): void {
        if (config.logging) console.error(...data)
    }
    static warn(...data: any[]): void {
        if (config.logging) console.warn(...data)
    }
}
