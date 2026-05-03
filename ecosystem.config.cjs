/**
 * PM2 — Hostinger (VPS ou Node).
 * - Porta só em package.json (npm start) → 3015 (não altera outras portas).
 * - Nome do app: mi-casa-cardapio (não sobrescreve outros processos PM2).
 * Na VPS: pm2 start ecosystem.config.cjs
 */
const path = require("path");

module.exports = {
  apps: [
    {
      name: "mi-casa-cardapio",
      cwd: path.resolve(__dirname),
      script: "npm",
      args: "start",
      interpreter: "none",
      env: {
        NODE_ENV: "production",
      },
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: "200M",
    },
  ],
};
