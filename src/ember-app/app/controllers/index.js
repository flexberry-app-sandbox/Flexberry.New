import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.new.caption'),
          title: i18n.t('forms.application.sitemap.new.title'),
          children: [{
            link: 'i-i-s-new-прием-l',
            caption: i18n.t('forms.application.sitemap.new.i-i-s-new-прием-l.caption'),
            title: i18n.t('forms.application.sitemap.new.i-i-s-new-прием-l.title'),
            icon: 'suitcase',
            children: null
          }, {
            link: 'i-i-s-new-сотрудник-l',
            caption: i18n.t('forms.application.sitemap.new.i-i-s-new-сотрудник-l.caption'),
            title: i18n.t('forms.application.sitemap.new.i-i-s-new-сотрудник-l.title'),
            icon: 'folder open',
            children: null
          }, {
            link: 'i-i-s-new-подразделения-l',
            caption: i18n.t('forms.application.sitemap.new.i-i-s-new-подразделения-l.caption'),
            title: i18n.t('forms.application.sitemap.new.i-i-s-new-подразделения-l.title'),
            icon: 'building',
            children: null
          }, {
            link: 'i-i-s-new-увольнение-l',
            caption: i18n.t('forms.application.sitemap.new.i-i-s-new-увольнение-l.caption'),
            title: i18n.t('forms.application.sitemap.new.i-i-s-new-увольнение-l.title'),
            icon: 'file',
            children: null
          }, {
            link: 'i-i-s-new-организация-l',
            caption: i18n.t('forms.application.sitemap.new.i-i-s-new-организация-l.caption'),
            title: i18n.t('forms.application.sitemap.new.i-i-s-new-организация-l.title'),
            icon: 'book',
            children: null
          }, {
            link: 'i-i-s-new-график-l',
            caption: i18n.t('forms.application.sitemap.new.i-i-s-new-график-l.caption'),
            title: i18n.t('forms.application.sitemap.new.i-i-s-new-график-l.title'),
            icon: 'paperclip',
            children: null
          }, {
            link: 'i-i-s-new-расчет-l',
            caption: i18n.t('forms.application.sitemap.new.i-i-s-new-расчет-l.caption'),
            title: i18n.t('forms.application.sitemap.new.i-i-s-new-расчет-l.title'),
            icon: 'briefcase',
            children: null
          }, {
            link: 'i-i-s-new-должности-l',
            caption: i18n.t('forms.application.sitemap.new.i-i-s-new-должности-l.caption'),
            title: i18n.t('forms.application.sitemap.new.i-i-s-new-должности-l.title'),
            icon: 'calendar',
            children: null
          }]
        }
      ]
    };
  }),
})