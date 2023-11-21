import {
  defineNamespace,
  defineProjections,
  Model as ГрафикMixin
} from '../mixins/regenerated/models/i-i-s-new-график';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ГрафикMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
