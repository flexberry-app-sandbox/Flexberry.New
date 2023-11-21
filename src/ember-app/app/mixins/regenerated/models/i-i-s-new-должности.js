import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  iDдолжности: DS.attr('number'),
  наименовани: DS.attr('string')
});

export let ValidationRules = {
  iDдолжности: {
    descriptionKey: 'models.i-i-s-new-должности.validations.iDдолжности.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  наименовани: {
    descriptionKey: 'models.i-i-s-new-должности.validations.наименовани.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ДолжностиE', 'i-i-s-new-должности', {
    iDдолжности: attr('IDдолжности', { index: 0 }),
    наименовани: attr('Наименовани', { index: 1 })
  });

  modelClass.defineProjection('ДолжностиL', 'i-i-s-new-должности', {
    iDдолжности: attr('IDдолжности', { index: 0 }),
    наименовани: attr('Наименовани', { index: 1 })
  });
};
