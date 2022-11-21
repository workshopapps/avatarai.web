import { useState } from "react";

export default function useSpeechRecognition() {
  const [speech, setSpeech] = useState("");

  const speechRecognition = window.SpeechRecognition||window.webkitSpeechRecognition
  const recognition = new speechRecognition();
  recognition.continuous = true;
  recognition.interimResults = true;
  
  recognition.onresult = (e) => {
    let result = "";
    for (let i = e.resultIndex; i < e.results.length; i++) {
      result += e.results[i][0].transcript;
    }
    setSpeech(result);
  };
  recognition.onsoundend = () => {
    recognition.stop()
  }
  recognition.onaudioend = () => {
    recognition.stop()
  }

  return {
    recognition,
    speech,
  };
}
