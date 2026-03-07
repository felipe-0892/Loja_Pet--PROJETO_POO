-- ============================================================
--  Loja Pet — Criação do banco de dados
--  Execute no phpMyAdmin ou terminal MySQL
-- ============================================================

CREATE DATABASE IF NOT EXISTS loja_pet
  CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;

USE loja_pet;

-- ─── PETS ────────────────────────────────────────────────────
DROP TABLE IF EXISTS pets;

CREATE TABLE pets (
  id          INT           NOT NULL AUTO_INCREMENT,
  nome        VARCHAR(100)  NOT NULL,
  especie     VARCHAR(50)   NOT NULL,
  peso        DECIMAL(5,2)  NOT NULL,
  idade       INT           NOT NULL,
  nascimento  DATE          NULL,
  created_at  TIMESTAMP     NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ─── PRODUTOS ────────────────────────────────────────────────
DROP TABLE IF EXISTS produtos;

CREATE TABLE produtos (
  id          INT            NOT NULL AUTO_INCREMENT,
  nome        VARCHAR(150)   NOT NULL,
  preco       DECIMAL(10,2)  NOT NULL,
  quantidade  INT            NOT NULL DEFAULT 0,
  validade    DATE           NULL,
  created_at  TIMESTAMP      NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
