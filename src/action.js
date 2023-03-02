export const LISTEMEEKLE = "listemeEkle";
export const SIRADAKI = "sıradaki";
export const LISTEDENCIKAR = "listedenCıkar";
export const ONCEKI = "onceki";
export const BASADON = "basaDon";

export function listemeEkle(id) {
  return { type: LISTEMEEKLE, payload: id };
}

export function sıradaki(sira) {
  if (sira > 18) {
    return {
      type: null,
    };
  } else {
    return { type: SIRADAKI };
  }
}

export function listedenCıkar(id) {
  return { type: LISTEDENCIKAR, payload: id };
}
export function onceki(sira) {
  if (sira > 0) {
    return { type: ONCEKI };
  } else {
    return {
      type: null,
    };
  }
}
export function basaDon() {
  return { type: BASADON };
}
