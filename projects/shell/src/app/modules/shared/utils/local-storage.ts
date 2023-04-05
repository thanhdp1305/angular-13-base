import { CookieEnum } from "../configs/enums";

export function setAccessToken(token: string): void {
  localStorage.setItem(CookieEnum.token, token);
}

export function getAccessToken(): string | null {
  return localStorage.getItem(CookieEnum.token);
}

export function removeSession(): void {
  localStorage.clear();
}