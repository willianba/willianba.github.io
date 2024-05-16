import { navigatorDetector } from "typesafe-i18n/detectors";
import { baseLocale, detectLocale, i18n } from "./i18n-util";
import { loadLocale } from "./i18n-util.sync";

const t = i18n();
let locale = detectLocale(navigatorDetector);

if (!locale) {
  locale = baseLocale;
}

loadLocale(locale);

export default t[locale];
