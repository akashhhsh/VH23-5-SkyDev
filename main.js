const transLang = async () => {
    const url = 'https://translated-spoken-language-identification-v1.p.rapidapi.com/identify-stream';
    const data = new FormData();
    data.append('content', '');

    const options = {
        method: 'POST',
        headers: {
            'X-RapidAPI-Key': '81f09fa6eemsh8ea827c3456e161p1464dcjsn178a3dc40216',
            'X-RapidAPI-Host': 'translated-spoken-language-identification-v1.p.rapidapi.com'
        },
        body: data
    };

    try {
        const response = await fetch(url, options);
        const result = await response.text();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}

transLang()