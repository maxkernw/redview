
type ResponseParsing = 'json' | 'text' | 'formData' | 'blob';
export class HttpClient {

    async get<T>(url: string, responseParsing: ResponseParsing, params?: RequestInit): Promise<T | Error> {

        const response = await fetch(url, params);

        if (!response.ok) {
            return new Error(response.statusText)
        }
        return response[responseParsing]();

    }
}