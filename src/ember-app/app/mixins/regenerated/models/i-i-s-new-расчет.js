import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  iDорганизации: DS.attr('number'),
  iDрасчета: DS.attr('number'),
  iDсотрудника: DS.attr('number'),
  период_болезни: DS.attr('string'),
  организация: DS.belongsTo('i-i-s-new-организация', { inverse: null, async: false }),
  сотрудник: DS.belongsTo('i-i-s-new-сотрудник', { inverse: null, async: false }),
  empty: DS.hasMany('i-i-s-new-таблица', { inverse: 'empty', async: false })
});

export let ValidationRules = {
  iDорганизации: {
    descriptionKey: 'models.i-i-s-new-расчет.validations.iDорганизации.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  iDрасчета: {
    descriptionKey: 'models.i-i-s-new-расчет.validations.iDрасчета.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  iDсотрудника: {
    descriptionKey: 'models.i-i-s-new-расчет.validations.iDсотрудника.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  период_болезни: {
    descriptionKey: 'models.i-i-s-new-расчет.validations.период_болезни.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  организация: {
    descriptionKey: 'models.i-i-s-new-расчет.validations.организация.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  сотрудник: {
    descriptionKey: 'models.i-i-s-new-расчет.validations.сотрудник.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  empty: {
    descriptionKey: 'models.i-i-s-new-расчет.validations.empty.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('РасчетE', 'i-i-s-new-расчет', {
    iDрасчета: attr('IDрасчета', { index: 0 }),
    iDорганизации: attr('IDорганизации', { index: 1 }),
    iDсотрудника: attr('IDсотрудника', { index: 2 }),
    период_болезни: attr('Период_болезни', { index: 3 })
  });

  modelClass.defineProjection('РасчетL', 'i-i-s-new-расчет', {
    iDрасчета: attr('IDрасчета', { index: 0 }),
    iDорганизации: attr('IDорганизации', { index: 1 }),
    iDсотрудника: attr('IDсотрудника', { index: 2 }),
    период_болезни: attr('Период_болезни', { index: 3 })
  });
};
