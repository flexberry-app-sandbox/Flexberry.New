import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ПриемMixin
} from '../mixins/regenerated/models/i-i-s-new-прием';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ПриемMixin, Validations, {
});

defineProjections(Model);

export default Model;
