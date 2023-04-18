import { LocalStorageEnums } from "../enums/localstorage";

export function setAccessToken(token: string): void {
  localStorage.setItem(LocalStorageEnums.TOKEN, token);
}

export function getAccessToken(): string | null {
  return localStorage.getItem(LocalStorageEnums.TOKEN);
}

export function removeSession(): void {
  localStorage.clear();
}
