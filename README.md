# API Faculdade

Projeto desenvolvido em **NestJS** com **TypeORM**, contendo CRUD completo para **Produto**, **Fornecedor** e **Associação**, incluindo relacionamentos entre entidades, validações com `class-validator` e documentação automática com **Swagger**.

---

## 🚀 Tecnologias utilizadas
- [NestJS](https://nestjs.com/)
- [TypeORM](https://typeorm.io/)
- [PostgreSQL/MySQL/SQLite] (dependendo do banco configurado)
- [Class-validator](https://github.com/typestack/class-validator)
- [Swagger](https://swagger.io/)

---

## ⚙️ Como rodar o projeto

### 1. Clonar o repositório
```bash
git clone <url-do-repo>
cd backend
2. Instalar dependências
bash
npm install
3. Configurar banco de dados
Edite o arquivo ormconfig.json ou .env com suas credenciais do banco.

4. Rodar o servidor
bash
npm run start:dev
Servidor disponível em:
http://localhost:3000

📚 Documentação da API
Swagger disponível em:
http://localhost:3000/api

🔗 Endpoints principais
Produto
POST /produto → Criar produto

GET /produto → Listar produtos

GET /produto/:id → Buscar produto por ID

PATCH /produto/:id → Atualizar produto

DELETE /produto/:id → Remover produto

Fornecedor
POST /fornecedor → Criar fornecedor

GET /fornecedor → Listar fornecedores

GET /fornecedor/:id → Buscar fornecedor por ID

PATCH /fornecedor/:id → Atualizar fornecedor

DELETE /fornecedor/:id → Remover fornecedor

Associação
POST /associacao → Criar associação

GET /associacao → Listar associações

GET /associacao/:id → Buscar associação por ID

PATCH /associacao/:id → Atualizar associação

DELETE /associacao/:id → Remover associação

🧪 Exemplos de requisições
Criar Fornecedor
json
{
  "nome": "Fornecedor A",
  "contato": "61 99999-0000",
  "endereco": "Rua X"
}
Criar Associação
json
{
  "nome": "Associação Central",
  "cidade": "Águas Lindas",
  "estado": "GO"
}
Criar Produto
json
{
  "nome": "Camiseta",
  "preco": 49.90,
  "descricao": "Camiseta de algodão",
  "fornecedorId": 1,
  "associacaoId": 1
}
✅ Status do Projeto
CRUD completo ✔️

Relacionamentos ✔️

Validações ✔️

Swagger ✔️

Testes no Insomnia ✔️

Documentação ✔️

Projeto pronto para entrega 🎉