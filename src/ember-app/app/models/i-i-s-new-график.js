import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ГрафикMixin
} from '../mixins/regenerated/models/i-i-s-new-график';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ГрафикMixin, Validations, {
});

defineProjections(Model);

export default Model;
