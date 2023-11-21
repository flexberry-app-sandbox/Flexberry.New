import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-new-график-l');
  this.route('i-i-s-new-график-e',
  { path: 'i-i-s-new-график-e/:id' });
  this.route('i-i-s-new-график-e.new',
  { path: 'i-i-s-new-график-e/new' });
  this.route('i-i-s-new-должности-l');
  this.route('i-i-s-new-должности-e',
  { path: 'i-i-s-new-должности-e/:id' });
  this.route('i-i-s-new-должности-e.new',
  { path: 'i-i-s-new-должности-e/new' });
  this.route('i-i-s-new-организация-l');
  this.route('i-i-s-new-организация-e',
  { path: 'i-i-s-new-организация-e/:id' });
  this.route('i-i-s-new-организация-e.new',
  { path: 'i-i-s-new-организация-e/new' });
  this.route('i-i-s-new-подразделения-l');
  this.route('i-i-s-new-подразделения-e',
  { path: 'i-i-s-new-подразделения-e/:id' });
  this.route('i-i-s-new-подразделения-e.new',
  { path: 'i-i-s-new-подразделения-e/new' });
  this.route('i-i-s-new-прием-l');
  this.route('i-i-s-new-прием-e',
  { path: 'i-i-s-new-прием-e/:id' });
  this.route('i-i-s-new-прием-e.new',
  { path: 'i-i-s-new-прием-e/new' });
  this.route('i-i-s-new-расчет-l');
  this.route('i-i-s-new-расчет-e',
  { path: 'i-i-s-new-расчет-e/:id' });
  this.route('i-i-s-new-расчет-e.new',
  { path: 'i-i-s-new-расчет-e/new' });
  this.route('i-i-s-new-сотрудник-l');
  this.route('i-i-s-new-сотрудник-e',
  { path: 'i-i-s-new-сотрудник-e/:id' });
  this.route('i-i-s-new-сотрудник-e.new',
  { path: 'i-i-s-new-сотрудник-e/new' });
  this.route('i-i-s-new-увольнение-l');
  this.route('i-i-s-new-увольнение-e',
  { path: 'i-i-s-new-увольнение-e/:id' });
  this.route('i-i-s-new-увольнение-e.new',
  { path: 'i-i-s-new-увольнение-e/new' });
});

export default Router;
