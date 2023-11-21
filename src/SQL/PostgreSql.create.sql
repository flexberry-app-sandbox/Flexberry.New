




CREATE TABLE Прием (
 primaryKey UUID NOT NULL,
 IDорганизации INT NULL,
 Дата TIMESTAMP(3) NULL,
 IDсотрудника INT NULL,
 Ставка INT NULL,
 Организация UUID NOT NULL,
 Сотрудник UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE Сотрудник (
 primaryKey UUID NOT NULL,
 IDдолжности INT NULL,
 IDсотрудника INT NULL,
 IDПодразделения INT NULL,
 ФИО VARCHAR(255) NULL,
 ИНН INT NULL,
 Снилс INT NULL,
 Номер_телефона INT NULL,
 Должности UUID NOT NULL,
 Подразделения UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE Таблица (
 primaryKey UUID NOT NULL,
 Заработок_год INT NULL,
 Срзаработок INT NULL,
 Пособие INT NULL,
 Empty UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE Подразделения (
 primaryKey UUID NOT NULL,
 IDподразделения INT NULL,
 Наименование INT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE Увольнение (
 primaryKey UUID NOT NULL,
 IDорганизации INT NULL,
 Дата TIMESTAMP(3) NULL,
 IDсотрудника INT NULL,
 Основание VARCHAR(255) NULL,
 Сотрудник UUID NOT NULL,
 Организация UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE Организация (
 primaryKey UUID NOT NULL,
 IDорганизации INT NULL,
 Наименование VARCHAR(255) NULL,
 Адрес VARCHAR(255) NULL,
 ИНН INT NULL,
 КПП INT NULL,
 ОГРН INT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE График (
 primaryKey UUID NOT NULL,
 Явка BOOLEAN NULL,
 IDсотрудника INT NULL,
 Дата TIMESTAMP(3) NULL,
 Причина VARCHAR(255) NULL,
 Кол_часов INT NULL,
 Сотрудник UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE Расчет (
 primaryKey UUID NOT NULL,
 IDрасчета INT NULL,
 IDорганизации INT NULL,
 IDсотрудника INT NULL,
 Период_болезни VARCHAR(255) NULL,
 Сотрудник UUID NOT NULL,
 Организация UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE Должности (
 primaryKey UUID NOT NULL,
 IDдолжности INT NULL,
 Наименовани VARCHAR(255) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMNETLOCKDATA (
 LockKey VARCHAR(300) NOT NULL,
 UserName VARCHAR(300) NOT NULL,
 LockDate TIMESTAMP(3) NULL,
 PRIMARY KEY (LockKey));


CREATE TABLE STORMSETTINGS (
 primaryKey UUID NOT NULL,
 Module VARCHAR(1000) NULL,
 Name VARCHAR(255) NULL,
 Value TEXT NULL,
 "User" VARCHAR(255) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMAdvLimit (
 primaryKey UUID NOT NULL,
 "User" VARCHAR(255) NULL,
 Published BOOLEAN NULL,
 Module VARCHAR(255) NULL,
 Name VARCHAR(255) NULL,
 Value TEXT NULL,
 HotKeyData INT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMFILTERSETTING (
 primaryKey UUID NOT NULL,
 Name VARCHAR(255) NOT NULL,
 DataObjectView VARCHAR(255) NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMWEBSEARCH (
 primaryKey UUID NOT NULL,
 Name VARCHAR(255) NOT NULL,
 "Order" INT NOT NULL,
 PresentView VARCHAR(255) NOT NULL,
 DetailedView VARCHAR(255) NOT NULL,
 FilterSetting_m0 UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMFILTERDETAIL (
 primaryKey UUID NOT NULL,
 Caption VARCHAR(255) NOT NULL,
 DataObjectView VARCHAR(255) NOT NULL,
 ConnectMasterProp VARCHAR(255) NOT NULL,
 OwnerConnectProp VARCHAR(255) NULL,
 FilterSetting_m0 UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMFILTERLOOKUP (
 primaryKey UUID NOT NULL,
 DataObjectType VARCHAR(255) NOT NULL,
 Container VARCHAR(255) NULL,
 ContainerTag VARCHAR(255) NULL,
 FieldsToView VARCHAR(255) NULL,
 FilterSetting_m0 UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE UserSetting (
 primaryKey UUID NOT NULL,
 AppName VARCHAR(256) NULL,
 UserName VARCHAR(512) NULL,
 UserGuid UUID NULL,
 ModuleName VARCHAR(1024) NULL,
 ModuleGuid UUID NULL,
 SettName VARCHAR(256) NULL,
 SettGuid UUID NULL,
 SettLastAccessTime TIMESTAMP(3) NULL,
 StrVal VARCHAR(256) NULL,
 TxtVal TEXT NULL,
 IntVal INT NULL,
 BoolVal BOOLEAN NULL,
 GuidVal UUID NULL,
 DecimalVal DECIMAL(20,10) NULL,
 DateTimeVal TIMESTAMP(3) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE ApplicationLog (
 primaryKey UUID NOT NULL,
 Category VARCHAR(64) NULL,
 EventId INT NULL,
 Priority INT NULL,
 Severity VARCHAR(32) NULL,
 Title VARCHAR(256) NULL,
 Timestamp TIMESTAMP(3) NULL,
 MachineName VARCHAR(32) NULL,
 AppDomainName VARCHAR(512) NULL,
 ProcessId VARCHAR(256) NULL,
 ProcessName VARCHAR(512) NULL,
 ThreadName VARCHAR(512) NULL,
 Win32ThreadId VARCHAR(128) NULL,
 Message VARCHAR(2500) NULL,
 FormattedMessage TEXT NULL,
 PRIMARY KEY (primaryKey));



 ALTER TABLE Прием ADD CONSTRAINT FK8a409b26f179b477ec153846405e268eac199345 FOREIGN KEY (Организация) REFERENCES Организация; 
CREATE INDEX Index8a409b26f179b477ec153846405e268eac199345 on Прием (Организация); 

 ALTER TABLE Прием ADD CONSTRAINT FKd2bf616a351c3aa9fecf68122ce122949988872d FOREIGN KEY (Сотрудник) REFERENCES Сотрудник; 
CREATE INDEX Indexd2bf616a351c3aa9fecf68122ce122949988872d on Прием (Сотрудник); 

 ALTER TABLE Сотрудник ADD CONSTRAINT FKcddb0989bfc59f7f8b75feb65c08d7cc7f9c96b0 FOREIGN KEY (Должности) REFERENCES Должности; 
CREATE INDEX Indexcddb0989bfc59f7f8b75feb65c08d7cc7f9c96b0 on Сотрудник (Должности); 

 ALTER TABLE Сотрудник ADD CONSTRAINT FKa39d6827bb80a15a17f912f63066fa3be1c76d45 FOREIGN KEY (Подразделения) REFERENCES Подразделения; 
CREATE INDEX Indexa39d6827bb80a15a17f912f63066fa3be1c76d45 on Сотрудник (Подразделения); 

 ALTER TABLE Таблица ADD CONSTRAINT FK8674190512b06a6b7dfb7c31087b0cc32f425ce6 FOREIGN KEY (Empty) REFERENCES Расчет; 
CREATE INDEX Index8674190512b06a6b7dfb7c31087b0cc32f425ce6 on Таблица (Empty); 

 ALTER TABLE Увольнение ADD CONSTRAINT FK4c6ef106206e4ee1d087fcc187c0da8790cbe7af FOREIGN KEY (Сотрудник) REFERENCES Сотрудник; 
CREATE INDEX Index4c6ef106206e4ee1d087fcc187c0da8790cbe7af on Увольнение (Сотрудник); 

 ALTER TABLE Увольнение ADD CONSTRAINT FK797f1bc23b6a07dc3183dcc5f913cf5148c2737d FOREIGN KEY (Организация) REFERENCES Организация; 
CREATE INDEX Index797f1bc23b6a07dc3183dcc5f913cf5148c2737d on Увольнение (Организация); 

 ALTER TABLE График ADD CONSTRAINT FK5efd5be81006260fb2c667351037d5a60fe10baf FOREIGN KEY (Сотрудник) REFERENCES Сотрудник; 
CREATE INDEX Index5efd5be81006260fb2c667351037d5a60fe10baf on График (Сотрудник); 

 ALTER TABLE Расчет ADD CONSTRAINT FK0ffece0af57bd77c1fb34d5b3ed065eebc1a3c44 FOREIGN KEY (Сотрудник) REFERENCES Сотрудник; 
CREATE INDEX Index0ffece0af57bd77c1fb34d5b3ed065eebc1a3c44 on Расчет (Сотрудник); 

 ALTER TABLE Расчет ADD CONSTRAINT FK556a6c21fe7bc1ae56bc2fbde7e5b1b9521f7e41 FOREIGN KEY (Организация) REFERENCES Организация; 
CREATE INDEX Index556a6c21fe7bc1ae56bc2fbde7e5b1b9521f7e41 on Расчет (Организация); 

 ALTER TABLE STORMWEBSEARCH ADD CONSTRAINT FKc4378e39870eb056aec84088683297a01d2a6200 FOREIGN KEY (FilterSetting_m0) REFERENCES STORMFILTERSETTING; 

 ALTER TABLE STORMFILTERDETAIL ADD CONSTRAINT FK921d16269835017e2a0d0e29ad6fb175454a70d0 FOREIGN KEY (FilterSetting_m0) REFERENCES STORMFILTERSETTING; 

 ALTER TABLE STORMFILTERLOOKUP ADD CONSTRAINT FKce38ef0db3f01a53acaa49fed8853fb941ad47ba FOREIGN KEY (FilterSetting_m0) REFERENCES STORMFILTERSETTING; 

