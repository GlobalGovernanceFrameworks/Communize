import { addMessages, init, getLocaleFromNavigator } from 'svelte-i18n';

// Import JSON files directly (not dynamically)
import en from './locales/en.json';
import sv from './locales/sv.json';

// Add messages directly
addMessages('en', en);
addMessages('sv', sv);

// Initialize with default locale
init({
  fallbackLocale: 'en',
  initialLocale: getLocaleFromNavigator(),
});
