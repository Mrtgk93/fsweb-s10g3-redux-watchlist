export const LISTEMEEKLE = "listemeEkle";
export const SIRADAKI = "sıradaki";
export const LISTEDENCIKAR = "listedenCıkar";

export function listemeEkle(id) {
  return { type: LISTEMEEKLE, payload: id };
}

export function sıradaki() {
  return { type: SIRADAKI };
}

export function listedenCıkar(id) {
  return { type: LISTEDENCIKAR, payload: id };
}
