// src/api/getRequiredAccessToken.ts
export function getRequiredAccessToken(): string {
  const t = localStorage.getItem('accessToken');
  if (!t) {
    // 여기서 바로 막아버림 (로그인 페이지 이동 or 에러 throw)
    throw new Error('MISSING_ACCESS_TOKEN');
  }
  return t; // 이제부터는 확실히 string
}
