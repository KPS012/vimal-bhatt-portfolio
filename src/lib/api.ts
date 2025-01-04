export const sendContactForm = async (data: Record<string, string>) => {
  const res = await fetch("/api/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw new Error("Failed to send message.");
  }

  return res.json();
};
