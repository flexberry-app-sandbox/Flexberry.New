import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  iDдолжности: DS.attr('number'),
  iDПодразделения: DS.attr('number'),
  iDсотрудника: DS.attr('number'),
  иНН: DS.attr('number'),
  номер_телефона: DS.attr('number'),
  снилс: DS.attr('number'),
  фИО: DS.attr('string'),
  должности: DS.belongsTo('i-i-s-new-должности', { inverse: null, async: false }),
  подразделения: DS.belongsTo('i-i-s-new-подразделения', { inverse: null, async: false })
});

export let ValidationRules = {
  iDдолжности: {
    descriptionKey: 'models.i-i-s-new-сотрудник.validations.iDдолжности.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  iDПодразделения: {
    descriptionKey: 'models.i-i-s-new-сотрудник.validations.iDПодразделения.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  iDсотрудника: {
    descriptionKey: 'models.i-i-s-new-сотрудник.validations.iDсотрудника.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  иНН: {
    descriptionKey: 'models.i-i-s-new-сотрудник.validations.иНН.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  номер_телефона: {
    descriptionKey: 'models.i-i-s-new-сотрудник.validations.номер_телефона.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  снилс: {
    descriptionKey: 'models.i-i-s-new-сотрудник.validations.снилс.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  фИО: {
    descriptionKey: 'models.i-i-s-new-сотрудник.validations.фИО.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  должности: {
    descriptionKey: 'models.i-i-s-new-сотрудник.validations.должности.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  подразделения: {
    descriptionKey: 'models.i-i-s-new-сотрудник.validations.подразделения.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('СотрудникE', 'i-i-s-new-сотрудник', {
    iDдолжности: attr('Idдолжности', { index: 0 }),
    iDсотрудника: attr('IDсотрудника', { index: 1 }),
    iDПодразделения: attr('Id подразделения', { index: 2 }),
    фИО: attr('ФИО', { index: 3 }),
    иНН: attr('ИНН', { index: 4 }),
    снилс: attr('Снилс', { index: 5 }),
    номер_телефона: attr('Номер_телефона', { index: 6 })
  });

  modelClass.defineProjection('СотрудникL', 'i-i-s-new-сотрудник', {
    iDсотрудника: attr('IDсотрудника', { index: 0 }),
    iDдолжности: attr('Idдолжности', { index: 1 }),
    iDПодразделения: attr('Id подразделения', { index: 2 }),
    фИО: attr('ФИО', { index: 3 }),
    иНН: attr('ИНН', { index: 4 }),
    снилс: attr('Снилс', { index: 5 }),
    номер_телефона: attr('Номер_телефона', { index: 6 })
  });
};
