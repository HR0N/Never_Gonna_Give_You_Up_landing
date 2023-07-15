export default class ErrorsList {
    constructor() {
        this.errors = {
            400: {critical: true, title: '400 - Bad Request', description: 'invalid request'},
            401: {critical: false, title: '401 - Unauthorized', description: 'Login or password error'},
            402: {critical: true, title: '402 - Payment Required', description: 'payment required'},
            403: {critical: true, title: '403 - Forbidden', description: 'prohibited (not authorized)'},
            404: {critical: true, title: '404 - Not Found', description: 'not found'},
            405: {critical: true, title: '405 - Method Not Allowed', description: 'method not supported'},
            406: {critical: true, title: '406 - Not Acceptable', description: 'unacceptably'},
            407: {critical: true, title: '407 - Proxy Authentication Required', description: 'proxy authentication required'},
            408: {critical: true, title: '408 - Request Timeout', description: 'timed out'},
            409: {critical: true, title: '409 - Conflict', description: 'conflict'},
            410: {critical: true, title: '410 - Gone', description: 'removed'},
            411: {critical: true, title: '411 - Length Required', description: 'length needed'},
            412: {critical: true, title: '411 - Length Required', description: 'length needed'},
            413: {critical: true, title: '413 - Payload Too Large', description: 'payload too large'},
            414: {critical: true, title: '414 - URI Too Long', description: 'URI is too long'},
            415: {critical: true, title: '415 - Unsupported Media Type', description: 'unsupported data type'},
            416: {critical: true, title: '416 - Range Not Satisfiable', description: 'range not reachable'},
            417: {critical: true, title: '417 - Expectation Failed', description: 'wait failed'},
            418: {critical: true, title: '418 - I’m a teapot', description: 'i am teapot'},
            419: {critical: true, title: '419 - Authentication Timeout', description: 'usually CSRF validation error'},
            421: {critical: true, title: '421 - Misdirected Request', description: 'false'},
            422: {critical: false, title: '422 - Unprocessable Entity', description: 'The email has already been taken.'},
            423: {critical: true, title: '423 - Locked', description: 'blocked'},
            424: {critical: true, title: '424 - Failed Dependency', description: 'unfulfilled dependency'},
            425: {critical: true, title: '425 - Too Early', description: 'too early'},
            426: {critical: true, title: '426 - Upgrade Required', description: 'update needed'},
            428: {critical: true, title: '428 - Precondition Required', description: 'necessary precondition'},
            429: {critical: true, title: '429 - Too Many Requests', description: 'too many requests'},
            431: {critical: true, title: '431 - Request Header Fields Too Large', description: 'request header fields are too large'},
            449: {critical: true, title: '449 - Retry With', description: 'повторить с'},
            451: {critical: true, title: '451 - Unavailable For Legal Reasons', description: 'not available for legal reasons'},
            499: {critical: true, title: '499 - Client Closed Request', description: 'the client closed the connection'},
            ERR_NETWORK: {critical: true, title: '405 - ERR BAD REQUEST', description: 'Request failed with status code 405'},
            ERR_BAD_REQUEST: {critical: true, title: '405 - ERR BAD REQUEST', description: 'Request failed with status code 405'},
            ERR_BAD_RESPONSE: {critical: true, title: '405 - ERR BAD RESPONSE', description: 'Request failed with status code 500'},
            ECONNABORTED: {critical: true, title: 'ECONNABORTED', description: 'timeout of 5000ms exceeded'},
            0: {critical: true, title: '??? - not found', description: 'error not recognized'},
            default: {critical: true, title: '??? - not found', description: 'error not recognized'},
        }
    }

    error(status = 'default'){
        return this.errors[status];
    }
}