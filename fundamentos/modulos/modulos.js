// Os módulos ES6 (ESM) são o padrão oficial do JavaScript para organizar código em arquivos separados e reutilizáveis, utilizando import e export. Eles operam de forma estática (em tempo de build), permitindo melhor desempenho, escopo isolado, carregamento assíncrono e evitam conflitos de nomes.

import {dizerBomDia, dizerBoaTarde, dizerBoaNoite} from './mensagens.js';

dizerBomDia();
dizerBoaTarde();
dizerBoaNoite();
