import os
import openai

openai.api_key = "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"


while True :
    prompt = input()
    if prompt == "." : break  

    messages = []
    messages.append({"role": "user", "content": prompt})
    completion = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",  messages=messages)

    res= completion.choices[0].message['content']
    
    print("\n GPT : " +res)