-- Adminer 4.8.1 PostgreSQL 14.5 dump

DROP TABLE IF EXISTS "account";
DROP SEQUENCE IF EXISTS account_id_seq;
CREATE SEQUENCE account_id_seq INCREMENT 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1;

CREATE TABLE "public"."account" (
    "id" integer DEFAULT nextval('account_id_seq') NOT NULL,
    "login" character varying(30) NOT NULL,
    "password" text NOT NULL,
    "dt_create" timestamp,
    CONSTRAINT "account_login_key" UNIQUE ("login"),
    CONSTRAINT "account_pkey" PRIMARY KEY ("id")
) WITH (oids = false);

<br />
<b>Warning</b>:  Undefined property: stdClass::$flags in <b>C:\OSPanel\modules\system\html\openserver\adminer\adminer_core.php</b> on line <b>200</b><br />
<br />
<b>Warning</b>:  Undefined property: stdClass::$flags in <b>C:\OSPanel\modules\system\html\openserver\adminer\adminer_core.php</b> on line <b>200</b><br />
<br />
<b>Warning</b>:  Undefined property: stdClass::$flags in <b>C:\OSPanel\modules\system\html\openserver\adminer\adminer_core.php</b> on line <b>200</b><br />
<br />
<b>Warning</b>:  Undefined property: stdClass::$flags in <b>C:\OSPanel\modules\system\html\openserver\adminer\adminer_core.php</b> on line <b>200</b><br />
INSERT INTO "account" ("id", "login", "password", "dt_create") VALUES
(11,	'user1@mail.ru',	'$2y$10$3AE8p6T25/rT6Egswq703Ohn3H9CnNoxiGi5iU3wHAjnNofHJrTda',	'2024-02-10 18:18:35.792955'),
(1,	'admin@admin.ru',	'$2y$10$C0oQbMVwSidJOZEdmOIouOcI.tozUIm5ynFfDKq8wvm921JIRPcz2',	'1989-10-10 00:00:00'),
(12,	'irasuperpuper@mail.ru',	'$2y$10$udIXvXDmAWXa45pCMZcfGOdFtZxwMjW97WbwtI0YcMPDlid3a3b42',	'2024-02-10 21:29:51.425028'),
(13,	'mister@mister.ru',	'$2y$10$bXs43ZeN3RGVOEqIXJLIPOdniTt7k.fcSSngQdL.s491ExyE6yI4i',	'2024-02-10 21:53:19.840729'),
(14,	'user2@user.ru',	'$2y$10$xGgp/5oAxyQ5jmu45QniNOGyN0WjOXm0ZE0o4Qbiq9vyw3CiDnWlq',	'2024-02-11 19:43:39.658059'),
(15,	'user3@user.com',	'$2y$10$/PH.F5SMLvwAqKhKy3TK2.xYWekoHuJCA.03GvXH5LYM8q6L3s5Ya',	'2024-02-13 01:27:55.948755'),
(17,	'Hero@hero.ru',	'$2y$10$Jr84pZjPZHor1BDJLZS2tO19f6GwlL/ssiz5wWE5pPno7rfZn8xeK',	'2024-02-13 14:04:11.428506'),
(18,	'user4@user.ru',	'$2y$10$KaTE99rzCcAu00uUL6tEGegd12fpMewkbJCKkk1a.K6plcFwsdwkS',	'2024-02-13 19:24:44.491834');

DROP TABLE IF EXISTS "customer";
DROP SEQUENCE IF EXISTS customer_id_seq;
CREATE SEQUENCE customer_id_seq INCREMENT 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1;

CREATE TABLE "public"."customer" (
    "id_user" integer DEFAULT nextval('customer_id_seq') NOT NULL,
    "name" character varying(50) NOT NULL,
    "dt_birth" date,
    "sex" boolean NOT NULL,
    "phone" character varying(11) NOT NULL,
    "id_account" integer NOT NULL,
    "bonus" integer DEFAULT '0',
    "order" timestamp[],
    CONSTRAINT "customer_phone_key" UNIQUE ("phone"),
    CONSTRAINT "customer_pkey" PRIMARY KEY ("id_user")
) WITH (oids = false);

CREATE INDEX "idx_customer__account" ON "public"."customer" USING btree ("id_account");

<br />
<b>Warning</b>:  Undefined property: stdClass::$flags in <b>C:\OSPanel\modules\system\html\openserver\adminer\adminer_core.php</b> on line <b>200</b><br />
<br />
<b>Warning</b>:  Undefined property: stdClass::$flags in <b>C:\OSPanel\modules\system\html\openserver\adminer\adminer_core.php</b> on line <b>200</b><br />
<br />
<b>Warning</b>:  Undefined property: stdClass::$flags in <b>C:\OSPanel\modules\system\html\openserver\adminer\adminer_core.php</b> on line <b>200</b><br />
<br />
<b>Warning</b>:  Undefined property: stdClass::$flags in <b>C:\OSPanel\modules\system\html\openserver\adminer\adminer_core.php</b> on line <b>200</b><br />
<br />
<b>Warning</b>:  Undefined property: stdClass::$flags in <b>C:\OSPanel\modules\system\html\openserver\adminer\adminer_core.php</b> on line <b>200</b><br />
<br />
<b>Warning</b>:  Undefined property: stdClass::$flags in <b>C:\OSPanel\modules\system\html\openserver\adminer\adminer_core.php</b> on line <b>200</b><br />
<br />
<b>Warning</b>:  Undefined property: stdClass::$flags in <b>C:\OSPanel\modules\system\html\openserver\adminer\adminer_core.php</b> on line <b>200</b><br />
<br />
<b>Warning</b>:  Undefined property: stdClass::$flags in <b>C:\OSPanel\modules\system\html\openserver\adminer\adminer_core.php</b> on line <b>200</b><br />
INSERT INTO "customer" ("id_user", "name", "dt_birth", "sex", "phone", "id_account", "bonus", "order") VALUES
(1,	'Admin',	'2006-06-06',	'1',	'70006660606',	1,	10000000,	NULL),
(18,	'Ira',	'2024-01-31',	'0',	'79894552325',	12,	0,	NULL),
(5,	'Андрей',	'1995-07-05',	'1',	'71112223355',	11,	0,	NULL),
(20,	'Михаил',	'1988-04-05',	'1',	'79111435671',	15,	0,	NULL),
(19,	'Владимир',	'1985-09-07',	'1',	'79115355544',	13,	0,	NULL),
(22,	'Герой',	'2024-02-06',	'1',	'74445553322',	17,	0,	'{"2024-02-16 09:30:00"}'),
(23,	'Андрей',	'2024-02-06',	'1',	'76669994344',	18,	0,	'{"2024-02-18 09:30:00","2024-02-29 09:30:00"}');

DROP TABLE IF EXISTS "order";
DROP SEQUENCE IF EXISTS order_id_seq;
CREATE SEQUENCE order_id_seq INCREMENT 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1;

CREATE TABLE "public"."order" (
    "id" integer DEFAULT nextval('order_id_seq') NOT NULL,
    "dt_visit" timestamp NOT NULL,
    "id_customer" integer NOT NULL,
    "phone" character varying(11),
    "customer_name" character varying(50),
    CONSTRAINT "order_pkey" PRIMARY KEY ("id")
) WITH (oids = false);

CREATE INDEX "idx_order__customer" ON "public"."order" USING btree ("id_customer");

<br />
<b>Warning</b>:  Undefined property: stdClass::$flags in <b>C:\OSPanel\modules\system\html\openserver\adminer\adminer_core.php</b> on line <b>200</b><br />
<br />
<b>Warning</b>:  Undefined property: stdClass::$flags in <b>C:\OSPanel\modules\system\html\openserver\adminer\adminer_core.php</b> on line <b>200</b><br />
<br />
<b>Warning</b>:  Undefined property: stdClass::$flags in <b>C:\OSPanel\modules\system\html\openserver\adminer\adminer_core.php</b> on line <b>200</b><br />
<br />
<b>Warning</b>:  Undefined property: stdClass::$flags in <b>C:\OSPanel\modules\system\html\openserver\adminer\adminer_core.php</b> on line <b>200</b><br />
<br />
<b>Warning</b>:  Undefined property: stdClass::$flags in <b>C:\OSPanel\modules\system\html\openserver\adminer\adminer_core.php</b> on line <b>200</b><br />
INSERT INTO "order" ("id", "dt_visit", "id_customer", "phone", "customer_name") VALUES
(24,	'2024-02-16 09:30:00',	22,	'74445553322',	'Герой'),
(25,	'2024-02-18 09:30:00',	23,	'76669994344',	'Маг'),
(26,	'2024-02-29 09:30:00',	23,	'76669994344',	'Маг');

ALTER TABLE ONLY "public"."customer" ADD CONSTRAINT "fk_customer__account" FOREIGN KEY (id_account) REFERENCES account(id) NOT DEFERRABLE;

ALTER TABLE ONLY "public"."order" ADD CONSTRAINT "fk_order__customer" FOREIGN KEY (id_customer) REFERENCES customer(id_user) ON DELETE CASCADE NOT DEFERRABLE;

-- 2024-02-14 21:37:15.230809+03
