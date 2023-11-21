import {
  defineNamespace,
  defineProjections,
  Model as ТаблицаMixin
} from '../mixins/regenerated/models/i-i-s-new-таблица';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ТаблицаMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
