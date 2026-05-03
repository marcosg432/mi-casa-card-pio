# Mi Casa — Cardápio

Site estático do cardápio, servido com [serve](https://github.com/vercel/serve) na **porta 3013**, pronto para **PM2** na Hostinger (VPS com Node) ou outro servidor Linux.

## Requisitos

- Node.js 18 ou superior
- npm
- PM2 (`npm i -g pm2`)

## Desenvolvimento / teste local

```bash
npm install
npm start
```

Abra `http://localhost:3013`.

## Hostinger (VPS com acesso SSH)

1. No servidor, clone o repositório (ou envie os arquivos via Git/FTP) para a pasta desejada, por exemplo `/home/seuusuario/mi-casa-card-pio`.
2. Entre na pasta e instale dependências:

   ```bash
   cd mi-casa-card-pio
   npm install --omit=dev
   ```

3. Inicie com PM2:

   ```bash
   pm2 start ecosystem.config.cjs
   pm2 save
   pm2 startup
   ```

4. O site ficará em `http://SEU_IP:3013`. Configure **Nginx** (ou o painel da Hostinger) como **proxy reverso** da porta 80/443 para `http://127.0.0.1:3013`, ou libere a porta **3013** no firewall se for acessar direto pela porta.

## Comandos PM2 úteis

| Comando | Descrição |
|--------|-----------|
| `pm2 status` | Lista processos |
| `pm2 logs mi-casa-cardapio` | Logs em tempo real |
| `pm2 restart mi-casa-cardapio` | Reinicia após alterar arquivos |
| `pm2 stop mi-casa-cardapio` | Para o app |

## Hospedagem compartilhada (sem Node)

Se o plano **não** tiver Node/PM2, faça o deploy só dos arquivos estáticos (`index.html`, `css/`, `itens/`) na pasta `public_html` — nesse caso **não** use `npm` nem PM2; o Apache servirá o HTML diretamente.
