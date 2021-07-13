import { labels } from "../constants/types";

export function handleChangeIMCClassification(imcValue: number) {
  if (imcValue < 18.5) {
    return labels.underweight;
  } else if (imcValue < 24.9) {
    return labels.normal;
  } else if (imcValue < 29.9) {
    return labels.overweight;
  } else if (imcValue < 34.9) {
    return labels.obesityone;
  } else if (imcValue < 39.9) {
    return labels.obesitytwo;
  } else {
    return labels.morbidobesity;
  }
}

export function handleCalculateIMC(weight: number, height: number) {
  return weight / Math.pow(height, 2);
}
