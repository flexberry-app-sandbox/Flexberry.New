import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as РасчетMixin
} from '../mixins/regenerated/models/i-i-s-new-расчет';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(РасчетMixin, Validations, {
});

defineProjections(Model);

export default Model;
