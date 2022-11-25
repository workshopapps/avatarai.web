

export default function SpeechRecognition(setText) {
  let speech = ''  

  const speechRecognition = window.SpeechRecognition||window.webkitSpeechRecognition
  const recognition = new speechRecognition();
  recognition.continuous = true;
  recognition.interimResults = true;
  
  recognition.onresult = (e) => {
    let result = "";
    for (let i = e.resultIndex; i < e.results.length; i++) {
      result += e.results[i][0].transcript;
    }
    console.log(result)
    setText(result)
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
