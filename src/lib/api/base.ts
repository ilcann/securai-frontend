import type { ApiResponse } from '@/lib/types/api-response';

export async function apiFetch<T>(path: string, options?: RequestInit): Promise<ApiResponse<T>> {
  const res = await fetch(`/api${path}`, options);
  const data: ApiResponse<T> = await res.json();
  return data;
}
