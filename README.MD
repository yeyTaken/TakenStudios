<h1 align="center">
  <br>
  TakenStudios oficial source
  <br>
</h1>

<p align="center">📧🔒 Guia passo a passo para configurar o envio de emails usando Nodemailer e Gmail com autenticação de duas etapas e senha de app.</p>

---

<h2 align="center">🛠️ Configuração do Envio de Emails</h2>

<h3 align="center">🏁 Requisitos</h3>

Para configurar o envio de emails usando Nodemailer e Gmail, você precisa atender aos seguintes requisitos:

- Node.js instalado
- Conta do Gmail configurada
- <a href="https://myaccount.google.com/security-checkup">Ativar verificação em duas etapas</a> na conta do Gmail
- <a href="https://myaccount.google.com/apppasswords">Gerar uma senha de app</a> para a conta do Gmail

<h3 align="center">📝 Configuração das Variáveis de Ambiente</h3>

1. **Crie um arquivo `.env` na raiz do seu projeto:**

```env
EMAIL_USER=seu-email@gmail.com
EMAIL_PASS=sua-senhadeapp
```

**Importante:** Não adicione espaços na senha do app, mesmo que a senha gerada contenha espaços. Certifique-se de que a senha no arquivo `.env` seja contínua.

<h3 align="center">⚙️ Instalação e Execução</h3>

1. **Instale as dependências do projeto:**

```sh
npm install
or
yarn
```

2. **Inicie o projeto:**

```sh
npm run dev
or
yarn dev
```