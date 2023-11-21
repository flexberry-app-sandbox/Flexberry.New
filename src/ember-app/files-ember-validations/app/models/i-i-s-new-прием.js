import {
  defineNamespace,
  defineProjections,
  Model as ПриемMixin
} from '../mixins/regenerated/models/i-i-s-new-прием';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ПриемMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
