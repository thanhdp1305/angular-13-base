import { LocalStorageEnums } from "../enums/localstorage";

export function setAccessToken(token: string): void {
  localStorage.setItem(LocalStorageEnums.token, token);
}

export function getAccessToken(): string | null {
  return localStorage.getItem(LocalStorageEnums.token);
}

export function removeSession(): void {
  localStorage.clear();
}