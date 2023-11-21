import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  iDорганизации: DS.attr('number'),
  адрес: DS.attr('string'),
  иНН: DS.attr('number'),
  кПП: DS.attr('number'),
  наименование: DS.attr('string'),
  оГРН: DS.attr('number')
});

export let ValidationRules = {
  iDорганизации: {
    descriptionKey: 'models.i-i-s-new-организация.validations.iDорганизации.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  адрес: {
    descriptionKey: 'models.i-i-s-new-организация.validations.адрес.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  иНН: {
    descriptionKey: 'models.i-i-s-new-организация.validations.иНН.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  кПП: {
    descriptionKey: 'models.i-i-s-new-организация.validations.кПП.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  наименование: {
    descriptionKey: 'models.i-i-s-new-организация.validations.наименование.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  оГРН: {
    descriptionKey: 'models.i-i-s-new-организация.validations.оГРН.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ОрганизацияE', 'i-i-s-new-организация', {
    iDорганизации: attr('I dорганизации', { index: 0 }),
    наименование: attr('Наименование', { index: 1 }),
    адрес: attr('Адрес', { index: 2 }),
    иНН: attr('ИНН', { index: 3 }),
    кПП: attr('КПП', { index: 4 }),
    оГРН: attr('ОГРН', { index: 5 })
  });

  modelClass.defineProjection('ОрганизацияL', 'i-i-s-new-организация', {
    iDорганизации: attr('I dорганизации', { index: 0 }),
    наименование: attr('Наименование', { index: 1 }),
    адрес: attr('Адрес', { index: 2 }),
    иНН: attr('ИНН', { index: 3 }),
    кПП: attr('КПП', { index: 4 }),
    оГРН: attr('ОГРН', { index: 5 })
  });
};
