// import { Configuration, OpenAIApi } from "openai"
import axios from 'axios'


const API_key = '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'
const question = 'How can I extract files from PS4 .pkg archive?'

const app = async () => {
  try {
    // const configuration = new Configuration({
    //   organization: "org-fDJjPCtQclVN4eKxpRiEOZr9",
    //   apiKey: API_key,
    // })
    // const openai = new OpenAIApi(configuration)

    const response = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-3.5-turbo",
        messages: [{
          role: "user",
          content: question
        }]
      }, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${API_key}`,
      }
    })
    console.log(response.data.choices[0].message.content)
  } catch (err) {
    console.log(err.response.data.error)
  }
}


app()
