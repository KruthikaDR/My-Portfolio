#!/bin/bash

# Enable corepack if available, but don't fail if not
corepack enable || echo "Corepack not available, continuing anyway"

# Install using npm if yarn fails
yarn install || npm install

yarn set version stable

yarn install 

yarn dlx @yarnpkg/sdks vscode
