export class AuthLoginResponse {
    access_token: string;
    token_type: string;
    refresh_token: string;
    expires_in: string;
    scope: string;
    key: string = '';
    packageExpired: number;
    packageName: string = "";

    constructor(obj: any = null) {
        obj = obj || {};
        this.access_token = obj.access_token || '';
        this.token_type = obj.token_type || '';
        this.refresh_token = obj.refresh_token || '';
        this.expires_in = obj.expires_in || '';
        this.scope = obj.scope || '';
        this.key = obj.key || '';
        this.packageExpired = obj.packageExpired;
        this.packageName = obj.packegeName || "";
    }
}