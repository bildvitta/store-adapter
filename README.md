# store-adapter
Adaptador de "stores" para pinia e vuex.

## Instalação
@bildvitta/store-adapter

## Helpers
### getActionPayload
quando estamos trabalhando com o "vuex", o primeiro parâmetro sempre vai ser o "ActionContext" porém quando trabalhamos com o "pinia", o primeiro parâmetro já é parâmetro real da action, desta forma, sempre pegamos o args[argIndex] como sendo nosso parâmetro real, e ignoramos no caso do vuex o ActionContext.

Exemplo:
```js
getActionPayload(true, { payload })
```

### getStateFromAction
Função para retornar "state" dentro das actions

Exemplo:
```js
getState.call(this, { isPinia: true })
getState.call(this, { isPinia: false, resource: 'users' })
```

> Obs: O `resource` vai sempre buscar por uma store declarada em "camelCase" mesmo que passe em `snake_case` ou `kebab-case`
Ex: `users-store` ou `users_store` -> converte para: `usersStore`.

### storeHandler
Função para retornar "state" do pinia ou vuex

Exemplo:
```js
getState.call(this, { entity: 'users', key: 'list')
```

## Plugins
### DefineGlobalPiniaStore
Adiciona uma variável global "$piniaStore" para ter acesso as stores sem ter que importar elas.

Exemplo:
```js
app.use(DefineGlobalPiniaStore, { stores: { users } })
// Desta forma em nossa aplicação Vue, poderíamos acessar a store "myUserStore" da seguinte maneira:
// this.$piniaStore.users.list
```

### InitializeGlobalStores
Inicializa variáveis globais "$store" e "$piniaStore" mesmo que não estejam utilizando assim resolve o problema de warning no template (view).

Exemplo:
```js
app.use(InitializeGlobalStores)
```
