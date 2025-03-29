async function translateText() {
    const text = document.getElementById("inputText").value;
    const targetLang = document.getElementById("languageSelect").value;

    const response = await fetch(`https://api.mymemory.translated.net/get?q=${text}&langpair=en|${targetLang}`);
    const data = await response.json();
    document.getElementById("outputText").innerText = data.responseData.translatedText;
}
