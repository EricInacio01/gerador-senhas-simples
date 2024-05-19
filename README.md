
# Sobre o projeto

Fiz esse projeto em 2022, durante meu início do técnico em T.I no Instituto Metrópole Digital, porém descontinuei e deixei aos prantos no Google Drive.
Quase dois anos depois, decidi atualizá-lo e reverter todo CSS tradicional para o TailwindCSS.

TailwindCSS é mais prático, atualizado e melhor. Atualizarei este projeto aos poucos.

# Como rodar o projeto:
> 1. Dê git clone do repositório:
```bash
git clone https://github.com/EricInacio01/gerador-senhas-simples.git
```
2. Dê ```npm install``` para instalar as dependências e também rode: 
```bash
npm install -D tailwindcss
```
&
```bash
npx tailwindcss init
```

3. Para fazer o Tailwind dar build ao projeto, rode:
```bash
npx tailwindcss -i ./src/input.css -o ./src/output.css --watch
```

4. Em seguida, use a extensão **Live Server** no Visual Studio Code, e vóialá!
