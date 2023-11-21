



CREATE TABLE "Прием"
(

	"primaryKey" RAW(16) NOT NULL,

	"IDорганизации" NUMBER(10) NULL,

	"Дата" DATE NULL,

	"IDсотрудника" NUMBER(10) NULL,

	"Ставка" NUMBER(10) NULL,

	"Организация" RAW(16) NOT NULL,

	"Сотрудник" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Сотрудник"
(

	"primaryKey" RAW(16) NOT NULL,

	"IDдолжности" NUMBER(10) NULL,

	"IDсотрудника" NUMBER(10) NULL,

	"IDПодразделения" NUMBER(10) NULL,

	"ФИО" NVARCHAR2(255) NULL,

	"ИНН" NUMBER(10) NULL,

	"Снилс" NUMBER(10) NULL,

	"Номер_телефона" NUMBER(10) NULL,

	"Должности" RAW(16) NOT NULL,

	"Подразделения" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Таблица"
(

	"primaryKey" RAW(16) NOT NULL,

	"Заработок_год" NUMBER(10) NULL,

	"Срзаработок" NUMBER(10) NULL,

	"Пособие" NUMBER(10) NULL,

	"Empty" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Подразделения"
(

	"primaryKey" RAW(16) NOT NULL,

	"IDподразделения" NUMBER(10) NULL,

	"Наименование" NUMBER(10) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Увольнение"
(

	"primaryKey" RAW(16) NOT NULL,

	"IDорганизации" NUMBER(10) NULL,

	"Дата" DATE NULL,

	"IDсотрудника" NUMBER(10) NULL,

	"Основание" NVARCHAR2(255) NULL,

	"Сотрудник" RAW(16) NOT NULL,

	"Организация" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Организация"
(

	"primaryKey" RAW(16) NOT NULL,

	"IDорганизации" NUMBER(10) NULL,

	"Наименование" NVARCHAR2(255) NULL,

	"Адрес" NVARCHAR2(255) NULL,

	"ИНН" NUMBER(10) NULL,

	"КПП" NUMBER(10) NULL,

	"ОГРН" NUMBER(10) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "График"
(

	"primaryKey" RAW(16) NOT NULL,

	"Явка" NUMBER(1) NULL,

	"IDсотрудника" NUMBER(10) NULL,

	"Дата" DATE NULL,

	"Причина" NVARCHAR2(255) NULL,

	"Кол_часов" NUMBER(10) NULL,

	"Сотрудник" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Расчет"
(

	"primaryKey" RAW(16) NOT NULL,

	"IDрасчета" NUMBER(10) NULL,

	"IDорганизации" NUMBER(10) NULL,

	"IDсотрудника" NUMBER(10) NULL,

	"Период_болезни" NVARCHAR2(255) NULL,

	"Сотрудник" RAW(16) NOT NULL,

	"Организация" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Должности"
(

	"primaryKey" RAW(16) NOT NULL,

	"IDдолжности" NUMBER(10) NULL,

	"Наименовани" NVARCHAR2(255) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMNETLOCKDATA"
(

	"LockKey" NVARCHAR2(300) NOT NULL,

	"UserName" NVARCHAR2(300) NOT NULL,

	"LockDate" DATE NULL,

	 PRIMARY KEY ("LockKey")
) ;


CREATE TABLE "STORMSETTINGS"
(

	"primaryKey" RAW(16) NOT NULL,

	"Module" nvarchar2(1000) NULL,

	"Name" nvarchar2(255) NULL,

	"Value" CLOB NULL,

	"User" nvarchar2(255) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMAdvLimit"
(

	"primaryKey" RAW(16) NOT NULL,

	"User" nvarchar2(255) NULL,

	"Published" NUMBER(1) NULL,

	"Module" nvarchar2(255) NULL,

	"Name" nvarchar2(255) NULL,

	"Value" CLOB NULL,

	"HotKeyData" NUMBER(10) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMFILTERSETTING"
(

	"primaryKey" RAW(16) NOT NULL,

	"Name" nvarchar2(255) NOT NULL,

	"DataObjectView" nvarchar2(255) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMWEBSEARCH"
(

	"primaryKey" RAW(16) NOT NULL,

	"Name" nvarchar2(255) NOT NULL,

	"Order" NUMBER(10) NOT NULL,

	"PresentView" nvarchar2(255) NOT NULL,

	"DetailedView" nvarchar2(255) NOT NULL,

	"FilterSetting_m0" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMFILTERDETAIL"
(

	"primaryKey" RAW(16) NOT NULL,

	"Caption" nvarchar2(255) NOT NULL,

	"DataObjectView" nvarchar2(255) NOT NULL,

	"ConnectMasterProp" nvarchar2(255) NOT NULL,

	"OwnerConnectProp" nvarchar2(255) NULL,

	"FilterSetting_m0" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMFILTERLOOKUP"
(

	"primaryKey" RAW(16) NOT NULL,

	"DataObjectType" nvarchar2(255) NOT NULL,

	"Container" nvarchar2(255) NULL,

	"ContainerTag" nvarchar2(255) NULL,

	"FieldsToView" nvarchar2(255) NULL,

	"FilterSetting_m0" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "UserSetting"
(

	"primaryKey" RAW(16) NOT NULL,

	"AppName" nvarchar2(256) NULL,

	"UserName" nvarchar2(512) NULL,

	"UserGuid" RAW(16) NULL,

	"ModuleName" nvarchar2(1024) NULL,

	"ModuleGuid" RAW(16) NULL,

	"SettName" nvarchar2(256) NULL,

	"SettGuid" RAW(16) NULL,

	"SettLastAccessTime" DATE NULL,

	"StrVal" nvarchar2(256) NULL,

	"TxtVal" CLOB NULL,

	"IntVal" NUMBER(10) NULL,

	"BoolVal" NUMBER(1) NULL,

	"GuidVal" RAW(16) NULL,

	"DecimalVal" NUMBER(20,10) NULL,

	"DateTimeVal" DATE NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "ApplicationLog"
(

	"primaryKey" RAW(16) NOT NULL,

	"Category" nvarchar2(64) NULL,

	"EventId" NUMBER(10) NULL,

	"Priority" NUMBER(10) NULL,

	"Severity" nvarchar2(32) NULL,

	"Title" nvarchar2(256) NULL,

	"Timestamp" DATE NULL,

	"MachineName" nvarchar2(32) NULL,

	"AppDomainName" nvarchar2(512) NULL,

	"ProcessId" nvarchar2(256) NULL,

	"ProcessName" nvarchar2(512) NULL,

	"ThreadName" nvarchar2(512) NULL,

	"Win32ThreadId" nvarchar2(128) NULL,

	"Message" nvarchar2(2000) NULL,

	"FormattedMessage" nvarchar2(2000) NULL,

	 PRIMARY KEY ("primaryKey")
) ;



ALTER TABLE "Прием"
	ADD CONSTRAINT "Прием_FОргани_5786" FOREIGN KEY ("Организация") REFERENCES "Организация" ("primaryKey");

CREATE INDEX "Прием_IОргани_1622" on "Прием" ("Организация");

ALTER TABLE "Прием"
	ADD CONSTRAINT "Прием_FСотруд_2587" FOREIGN KEY ("Сотрудник") REFERENCES "Сотрудник" ("primaryKey");

CREATE INDEX "Прием_IСотрудник" on "Прием" ("Сотрудник");

ALTER TABLE "Сотрудник"
	ADD CONSTRAINT "Сотрудник_FДо_3036" FOREIGN KEY ("Должности") REFERENCES "Должности" ("primaryKey");

CREATE INDEX "Сотрудник_IДо_2503" on "Сотрудник" ("Должности");

ALTER TABLE "Сотрудник"
	ADD CONSTRAINT "Сотрудник_FПо_7739" FOREIGN KEY ("Подразделения") REFERENCES "Подразделения" ("primaryKey");

CREATE INDEX "Сотрудник_IПо_4278" on "Сотрудник" ("Подразделения");

ALTER TABLE "Таблица"
	ADD CONSTRAINT "Таблица_FРасчет_0" FOREIGN KEY ("Empty") REFERENCES "Расчет" ("primaryKey");

CREATE INDEX "Таблица_IEmpty" on "Таблица" ("Empty");

ALTER TABLE "Увольнение"
	ADD CONSTRAINT "Увольнение_FС_7866" FOREIGN KEY ("Сотрудник") REFERENCES "Сотрудник" ("primaryKey");

CREATE INDEX "Увольнение_IС_9660" on "Увольнение" ("Сотрудник");

ALTER TABLE "Увольнение"
	ADD CONSTRAINT "Увольнение_FО_2317" FOREIGN KEY ("Организация") REFERENCES "Организация" ("primaryKey");

CREATE INDEX "Увольнение_IО_6901" on "Увольнение" ("Организация");

ALTER TABLE "График"
	ADD CONSTRAINT "График_FСотру_9993" FOREIGN KEY ("Сотрудник") REFERENCES "Сотрудник" ("primaryKey");

CREATE INDEX "График_IСотру_4427" on "График" ("Сотрудник");

ALTER TABLE "Расчет"
	ADD CONSTRAINT "Расчет_FСотру_7468" FOREIGN KEY ("Сотрудник") REFERENCES "Сотрудник" ("primaryKey");

CREATE INDEX "Расчет_IСотру_9957" on "Расчет" ("Сотрудник");

ALTER TABLE "Расчет"
	ADD CONSTRAINT "Расчет_FОрган_7837" FOREIGN KEY ("Организация") REFERENCES "Организация" ("primaryKey");

CREATE INDEX "Расчет_IОрган_6503" on "Расчет" ("Организация");

ALTER TABLE "STORMWEBSEARCH"
	ADD CONSTRAINT "STORMWEBSEARCH_FSTORMFILT_6521" FOREIGN KEY ("FilterSetting_m0") REFERENCES "STORMFILTERSETTING" ("primaryKey");

ALTER TABLE "STORMFILTERDETAIL"
	ADD CONSTRAINT "STORMFILTERDETAIL_FSTORMF_2900" FOREIGN KEY ("FilterSetting_m0") REFERENCES "STORMFILTERSETTING" ("primaryKey");

ALTER TABLE "STORMFILTERLOOKUP"
	ADD CONSTRAINT "STORMFILTERLOOKUP_FSTORMF_1583" FOREIGN KEY ("FilterSetting_m0") REFERENCES "STORMFILTERSETTING" ("primaryKey");


