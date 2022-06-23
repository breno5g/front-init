#!/bin/bash

# Cria a estrutura base do react
npx create-react-app .
# mkdir -p teste/src

# Cria as pastas

mkdir -p src/components
mkdir -p src/utils
mkdir -p src/tests
mkdir -p src/pages
mkdir -p src/api

# instala as dependencias de desenvolvimento

npm i eslint @testing-library/react -D

# Instala dependencias de produção

npm i styled-components react-router-dom react-toastify axios node-sass sass react-icons 
