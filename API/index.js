const http = require("http")
const fs = require("fs")


const logados = {}

const servidor = http.createServer((pedido, resposta) => {
    console.log(pedido.url)

    switch (pedido.url) {
        case '/':
            resposta.writeHead(200, { "Content-Type": "text/html" });
            resposta.end(fs.readFileSync('./index.html'));
            break

        case '/index.html':
            resposta.writeHead(200, { "Content-Type": "text/html" });
            resposta.end(fs.readFileSync('./index.html'));
            break

        case '/main.css':
            resposta.writeHead(200, { "Content-Type": "text/css" });
            resposta.end(fs.readFileSync('./main.css'));
            break

        // paginas das demais perguntas
        case '/outrasPerguntas/segunda.html':
            resposta.writeHead(200, { "Content-Type": "text/html" });
            resposta.end(fs.readFileSync('./outrasPerguntas/segunda.html'));
            break

        case '/outrasPerguntas/terceira.html':
            resposta.writeHead(200, { "Content-Type": "text/html" });
            resposta.end(fs.readFileSync('./outrasPerguntas/terceira.html'));
            break

        case '/outrasPerguntas/quarta.html':
            resposta.writeHead(200, { "Content-Type": "text/html" });
            resposta.end(fs.readFileSync('./outrasPerguntas/quarta.html'));
            break

        case '/outrasPerguntas/quinta.html':
            resposta.writeHead(200, { "Content-Type": "text/html" });
            resposta.end(fs.readFileSync('./outrasPerguntas/quinta.html'));
            break

        case '/outrasPerguntas/sexta.html':
            resposta.writeHead(200, { "Content-Type": "text/html" });
            resposta.end(fs.readFileSync('./outrasPerguntas/sexta.html'));
            break

        case '/outrasPerguntas/setima.html':
            resposta.writeHead(200, { "Content-Type": "text/html" });
            resposta.end(fs.readFileSync('./outrasPerguntas/setima.html'));
            break

        case '/outrasPerguntas/oitava.html':
            resposta.writeHead(200, { "Content-Type": "text/html" });
            resposta.end(fs.readFileSync('./outrasPerguntas/oitava.html'));
            break

        case '/outrasPerguntas/nona.html':
            resposta.writeHead(200, { "Content-Type": "text/html" });
            resposta.end(fs.readFileSync('./outrasPerguntas/nona.html'));
            break

        case '/outrasPerguntas/decima.html':
            resposta.writeHead(200, { "Content-Type": "text/html" });
            resposta.end(fs.readFileSync('./outrasPerguntas/decima.html'));
            break

        case '/outrasPerguntas/decimaPrimeira.html':
            resposta.writeHead(200, { "Content-Type": "text/html" });
            resposta.end(fs.readFileSync('./outrasPerguntas/decimaPrimeira.html'));
            break

        case '/outrasPerguntas/decimaSegunda.html':
            resposta.writeHead(200, { "Content-Type": "text/html" });
            resposta.end(fs.readFileSync('./outrasPerguntas/decimaSegunda.html'));
            break

        case '/outrasPerguntas/final.html':
            resposta.writeHead(200, { "Content-Type": "text/html" });
            resposta.end(fs.readFileSync('./outrasPerguntas/final.html'));
            break
    }
})

servidor.listen(3000)