export const shortenTopic = (text: String) =>
  text.length >= 50 ? `${text.slice(0, 50)}...` : text;
export const shortenSubtopic = (text: String) =>
  text.length >= 70 ? `${text.slice(0, 70)}...` : text;
