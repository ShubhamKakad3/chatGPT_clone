export async function getMessages(prompt) {
  try {
    const API = import.meta.env.VITE_API_KEY;
    const Options = {
      method: "POST",
      headers: {
        // Corrected to lowercase "headers"
        Authorization: `Bearer ${API ? API : ""} `,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: prompt }],
        max_tokens: 256,
      }),
    };
    const res = await fetch(
      "https://api.openai.com/v1/chat/completions",
      Options
    );
    const data = await res.json();
    // console.log(data);
    console.log(data.choices[0].message.content);
    return data.choices[0].message.content;
  } catch (error) {
    console.log(error);
  }
}
