// Localization.js

class Localization {
  static KEY_PREFIX = "@@";
  static LOCALE_BUNDLE_NAME = "controlsfx";
  static _locale = null;
  static _resourceBundleLocale = null;
  static _resourceBundle = null;

  // Set a custom locale (e.g. "en", "fr", etc.)
  static setLocale(newLocale) {
    Localization._locale = newLocale;
  }

  // Get the current locale (fallback to browser default)
  static getLocale() {
    return Localization._locale || navigator.language || "en";
  }

  // Simulated resource bundles for example (normally loaded from files or server)
  static bundles = {
    en: {
      "menu.title": "Menu",
      "greeting.hello": "Hello",
    },
    fr: {
      "menu.title": "Menu",
      "greeting.hello": "Bonjour",
    },
  };

  // Load or refresh the bundle for the current locale
  static getLocaleBundle() {
    const currentLocale = Localization.getLocale().split("-")[0]; // e.g., "en-US" → "en"
    if (currentLocale !== Localization._resourceBundleLocale) {
      Localization._resourceBundleLocale = currentLocale;
      Localization._resourceBundle = Localization.bundles[currentLocale] || {};
    }
    return Localization._resourceBundle;
  }

  // Get a localized string for a key
  static getString(key) {
    const bundle = Localization.getLocaleBundle();
    return bundle[key] || `<${key}>`;
  }

  // Convert plain text into a localization key
  static asKey(text) {
    return Localization.KEY_PREFIX + text;
  }

  // Check if a string is a localization key
  static isKey(text) {
    return typeof text === "string" && text.startsWith(Localization.KEY_PREFIX);
  }

  // Try to localize a string if it is a key, otherwise return as is
  static localize(text) {
    if (Localization.isKey(text)) {
      const key = text.slice(Localization.KEY_PREFIX.length).trim();
      return Localization.getString(key);
    }
    return text;
  }
}

export default Localization;
