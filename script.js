function transformURL() {
    const inputURL = document.getElementById("inputURL").value;
    const htmlName = document.getElementById("htmlFileName").value;
    const regex = /https:\/\/github.com\/([^\/]+)\/([^\/]+)/;
    const match = inputURL.match(regex);

    if (match) {
        const userName = match[1];
        const repoName = match[2];
        let fileName = htmlName || "index";
        if (!fileName.endsWith(".html")) {
            fileName += ".html";
        }
        const transformedURL = `https://${userName}.github.io/${repoName}/${fileName}`;

        document.getElementById("outputURL").value = transformedURL;
    } else {
        alert("올바른 GitHub 주소를 입력하세요.");
    }
}

function copyURL() {
    const outputURL = document.getElementById("outputURL");

    if (outputURL.value==""){
        alert('먼저 변환을 진행해주세요!');
    } else {
        outputURL.select();
        document.execCommand("copy");
        alert("주소가 복사되었습니다.");
    }
}
