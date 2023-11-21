import { Serializer as УвольнениеSerializer } from
  '../mixins/regenerated/serializers/i-i-s-new-увольнение';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(УвольнениеSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
