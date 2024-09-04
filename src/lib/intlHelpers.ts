//intlHelpers.ts
export async function loadMessages(locale: string) {
    try {
      const messages = await import(`../lang/${locale}.json`);
      return messages.default;
    } catch (error) {
      console.error(`Error loading messages for locale ${locale}:`, error);
      throw error;
    }
  }
  