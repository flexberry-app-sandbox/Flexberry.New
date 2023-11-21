import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  iDорганизации: DS.attr('number'),
  iDсотрудника: DS.attr('number'),
  дата: DS.attr('date'),
  основание: DS.attr('string'),
  организация: DS.belongsTo('i-i-s-new-организация', { inverse: null, async: false }),
  сотрудник: DS.belongsTo('i-i-s-new-сотрудник', { inverse: null, async: false })
});

export let ValidationRules = {
  iDорганизации: {
    descriptionKey: 'models.i-i-s-new-увольнение.validations.iDорганизации.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  iDсотрудника: {
    descriptionKey: 'models.i-i-s-new-увольнение.validations.iDсотрудника.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  дата: {
    descriptionKey: 'models.i-i-s-new-увольнение.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  основание: {
    descriptionKey: 'models.i-i-s-new-увольнение.validations.основание.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  организация: {
    descriptionKey: 'models.i-i-s-new-увольнение.validations.организация.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  сотрудник: {
    descriptionKey: 'models.i-i-s-new-увольнение.validations.сотрудник.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('УвольнениеE', 'i-i-s-new-увольнение', {
    iDорганизации: attr('IDорганизации', { index: 0 }),
    дата: attr('Дата', { index: 1 }),
    основание: attr('Основание', { index: 2 })
  });

  modelClass.defineProjection('УвольнениеL', 'i-i-s-new-увольнение', {
    iDорганизации: attr('IDорганизации', { index: 0 }),
    дата: attr('Дата', { index: 1 }),
    основание: attr('Основание', { index: 2 })
  });
};
