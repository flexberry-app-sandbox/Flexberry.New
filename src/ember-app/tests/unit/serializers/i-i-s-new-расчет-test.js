import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-new-расчет', 'Unit | Serializer | i-i-s-new-расчет', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-new-расчет',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
