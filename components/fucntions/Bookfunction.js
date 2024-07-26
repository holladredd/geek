// import { useState } from "react";

export function kOrM(n) {
  if (n >= 1000 && n <= 999999) {
    return (n / 1000).toFixed(1) + "K";
  }
  if (n >= 1000000 && n <= 999999999) {
    return (n / 1000000).toFixed(1) + "M";
  }
  if (n >= 1000000000 && n <= 99999999999) {
    return (n / 1000000000).toFixed(1) + "B";
  }
  if (n <= 999) {
    return n.toLocaleString(1) + "";
  }
}
