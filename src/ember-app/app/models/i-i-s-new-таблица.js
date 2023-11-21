import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ТаблицаMixin
} from '../mixins/regenerated/models/i-i-s-new-таблица';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ТаблицаMixin, Validations, {
});

defineProjections(Model);

export default Model;
