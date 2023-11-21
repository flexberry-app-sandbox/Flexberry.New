import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  iDсотрудника: DS.attr('number'),
  дата: DS.attr('date'),
  кол_часов: DS.attr('number'),
  причина: DS.attr('string'),
  явка: DS.attr('boolean'),
  сотрудник: DS.belongsTo('i-i-s-new-сотрудник', { inverse: null, async: false })
});

export let ValidationRules = {
  iDсотрудника: {
    descriptionKey: 'models.i-i-s-new-график.validations.iDсотрудника.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  дата: {
    descriptionKey: 'models.i-i-s-new-график.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  кол_часов: {
    descriptionKey: 'models.i-i-s-new-график.validations.кол_часов.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  причина: {
    descriptionKey: 'models.i-i-s-new-график.validations.причина.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  явка: {
    descriptionKey: 'models.i-i-s-new-график.validations.явка.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  сотрудник: {
    descriptionKey: 'models.i-i-s-new-график.validations.сотрудник.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ГрафикE', 'i-i-s-new-график', {
    дата: attr('Дата', { index: 0 }),
    явка: attr('Явка', { index: 1 }),
    причина: attr('Причина', { index: 2 }),
    кол_часов: attr('Кол_часов', { index: 3 })
  });

  modelClass.defineProjection('ГрафикL', 'i-i-s-new-график', {
    дата: attr('Дата', { index: 0 }),
    явка: attr('Явка', { index: 1 }),
    причина: attr('Причина', { index: 2 }),
    кол_часов: attr('Кол_часов', { index: 3 })
  });
};
