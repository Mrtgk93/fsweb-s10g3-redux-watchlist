export const LISTEMEEKLE = "listemeEkle";
export const SIRADAKI = "sıradaki";
export const LISTEDENCIKAR = "listedenCıkar";
export const ONCEKI = "onceki";
export const BASADON = "basaDon";

export function listemeEkle(id) {
  return { type: LISTEMEEKLE, payload: id };
}

export function sıradaki() {
  return { type: SIRADAKI };
}

export function listedenCıkar(id) {
  return { type: LISTEDENCIKAR, payload: id };
}
export function onceki() {
  return { type: ONCEKI };
}
export function basaDon() {
  return { type: BASADON };
}
