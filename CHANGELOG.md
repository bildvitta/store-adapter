# Changelog
Todas as mudanças notáveis neste projeto serão documentadas neste arquivo.

O formato é baseado em [Keep a Changelog](https://keepachangelog.com/pt-BR/1.0.0/),
e este projeto adere ao [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

Para encontrar de uma forma mais detalhada todas as mudanças da `versão 2` para a `versão 3`, navegue até o arquivo `/docs/src/pages/start/upgrade-guide.md`.
Neste arquivo (CHANGELOG.MD) você encontrará somente as mudanças referentes a versão 3.

### Sobre os "BREAKING CHANGES"
Podemos ter pequenas breaking changes sem alterar o `major` version, apesar de serem pequenas, podem alterar o comportamento da funcionalidade caso não seja feita uma atualização, **preste muita atenção** nas breaking changes dentro das versões quando existirem.

## 1.0.0 - 03-02-2023
Versão estável lançada!

## 1.0.0-beta.23 - 02-09-22
### Adicionado
- Adicionado documentação no `README.md`.

### Modificado
- `getStateFromAction`: Alterado `resource` para fazer a busca sempre em camelCase usando o `humps`.

## 1.0.0-beta.22 - 31-08-22
### Adicionado
- Adicionado flag "main" e "types", e adicionado export de types no `index.ts`.

## 1.0.0-beta.21 - 26-08-22
## BREAKING CHANGES
- Alterado plugin `DefineGlobalPiniaStore`, agora recebe objeto das stores sem executar.

## 1.0.0-beta.20 - 26-08-22
### Adicionado
- Adicionado novo plugin `InitializeGlobalStores`.
