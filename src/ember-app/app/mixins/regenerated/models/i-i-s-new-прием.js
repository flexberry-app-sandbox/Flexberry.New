import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  iDорганизации: DS.attr('number'),
  iDсотрудника: DS.attr('number'),
  дата: DS.attr('date'),
  ставка: DS.attr('number'),
  организация: DS.belongsTo('i-i-s-new-организация', { inverse: null, async: false }),
  сотрудник: DS.belongsTo('i-i-s-new-сотрудник', { inverse: null, async: false })
});

export let ValidationRules = {
  iDорганизации: {
    descriptionKey: 'models.i-i-s-new-прием.validations.iDорганизации.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  iDсотрудника: {
    descriptionKey: 'models.i-i-s-new-прием.validations.iDсотрудника.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  дата: {
    descriptionKey: 'models.i-i-s-new-прием.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  ставка: {
    descriptionKey: 'models.i-i-s-new-прием.validations.ставка.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  организация: {
    descriptionKey: 'models.i-i-s-new-прием.validations.организация.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  сотрудник: {
    descriptionKey: 'models.i-i-s-new-прием.validations.сотрудник.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ПриемE', 'i-i-s-new-прием', {
    iDорганизации: attr('IDорганизации', { index: 0 }),
    дата: attr('Дата', { index: 1 }),
    ставка: attr('Ставка', { index: 2 }),
    iDсотрудника: attr('IDсотрудника', { index: 3 })
  });

  modelClass.defineProjection('ПриемL', 'i-i-s-new-прием', {
    iDорганизации: attr('IDорганизации', { index: 0 }),
    дата: attr('Дата', { index: 1 }),
    iDсотрудника: attr('IDсотрудника', { index: 2 }),
    ставка: attr('Ставка', { index: 3 })
  });
};
