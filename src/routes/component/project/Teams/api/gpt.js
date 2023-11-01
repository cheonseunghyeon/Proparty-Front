export const CallGPT = async ({ prompt }) => {
  const messages = [
    {
      role: "user",
      content: `
  """
  내가 원하는 것은 아래에 적은 내용들을 바탕으로 남들이 보기 좋은 프로젝트 소개 문구를 만들어 주는거야
  ${prompt}
  """
  `,
    },
  ];

  console.log("test");
  const api = "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";
  //   curl https://api.openai.com/v1/chat/completions \
  //   -H "Content-Type: application/json" \
  //   -H "Authorization: Bearer $OPENAI_API_KEY" \
  //   -d '{
  //      "model": "gpt-3.5-turbo",
  //      "messages": [{"role": "user", "content": "Say this is a test!"}],
  //      "temperature": 0.7
  //    }'
  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${api}`,
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages,
      temperature: 0.7,
      max_tokens: 1_000,
    }),
  });
  const responseData = await response.json();
  console.log(">>responseData", responseData);

  const message = responseData.choices[0].message.content;
  return message;
};
