import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-new-график', 'Unit | Model | i-i-s-new-график', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-new-график',
    'model:i-i-s-new-должности',
    'model:i-i-s-new-организация',
    'model:i-i-s-new-подразделения',
    'model:i-i-s-new-прием',
    'model:i-i-s-new-расчет',
    'model:i-i-s-new-сотрудник',
    'model:i-i-s-new-таблица',
    'model:i-i-s-new-увольнение',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
