const askChatGPT = require("./askChatGPT")

module.exports.handler = async (event, context) => {
  const { version, session, request } = event

  let text = "Hello! I'll repeat anything you say to me."
  if (request["original_utterance"].length > 0)
    // text = request["original_utterance"]
    text = await askChatGPT(request["original_utterance"])
  return {
    version,
    session,
    response: {
      // Respond with the original request or welcome the user if this is the beginning of the dialog and the request has not yet been made.
      text: text,

      // Don't finish the session after this response.
      end_session: false,
    },
  }
}
