import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

import IISNewГрафикLForm from './forms/i-i-s-new-график-l';
import IISNewДолжностиLForm from './forms/i-i-s-new-должности-l';
import IISNewОрганизацияLForm from './forms/i-i-s-new-организация-l';
import IISNewПодразделенияLForm from './forms/i-i-s-new-подразделения-l';
import IISNewПриемLForm from './forms/i-i-s-new-прием-l';
import IISNewРасчетLForm from './forms/i-i-s-new-расчет-l';
import IISNewСотрудникLForm from './forms/i-i-s-new-сотрудник-l';
import IISNewУвольнениеLForm from './forms/i-i-s-new-увольнение-l';
import IISNewГрафикEForm from './forms/i-i-s-new-график-e';
import IISNewДолжностиEForm from './forms/i-i-s-new-должности-e';
import IISNewОрганизацияEForm from './forms/i-i-s-new-организация-e';
import IISNewПодразделенияEForm from './forms/i-i-s-new-подразделения-e';
import IISNewПриемEForm from './forms/i-i-s-new-прием-e';
import IISNewРасчетEForm from './forms/i-i-s-new-расчет-e';
import IISNewСотрудникEForm from './forms/i-i-s-new-сотрудник-e';
import IISNewУвольнениеEForm from './forms/i-i-s-new-увольнение-e';
import IISNewГрафикModel from './models/i-i-s-new-график';
import IISNewДолжностиModel from './models/i-i-s-new-должности';
import IISNewОрганизацияModel from './models/i-i-s-new-организация';
import IISNewПодразделенияModel from './models/i-i-s-new-подразделения';
import IISNewПриемModel from './models/i-i-s-new-прием';
import IISNewРасчетModel from './models/i-i-s-new-расчет';
import IISNewСотрудникModel from './models/i-i-s-new-сотрудник';
import IISNewТаблицаModel from './models/i-i-s-new-таблица';
import IISNewУвольнениеModel from './models/i-i-s-new-увольнение';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-new-график': IISNewГрафикModel,
    'i-i-s-new-должности': IISNewДолжностиModel,
    'i-i-s-new-организация': IISNewОрганизацияModel,
    'i-i-s-new-подразделения': IISNewПодразделенияModel,
    'i-i-s-new-прием': IISNewПриемModel,
    'i-i-s-new-расчет': IISNewРасчетModel,
    'i-i-s-new-сотрудник': IISNewСотрудникModel,
    'i-i-s-new-таблица': IISNewТаблицаModel,
    'i-i-s-new-увольнение': IISNewУвольнениеModel
  },

  'application-name': 'New',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'New',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'New',
          title: 'New'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },
        new: {
          caption: 'New',
          title: 'New',
          'i-i-s-new-прием-l': {
            caption: 'Прием',
            title: ''
          },
          'i-i-s-new-сотрудник-l': {
            caption: 'Сотрудник',
            title: ''
          },
          'i-i-s-new-подразделения-l': {
            caption: 'Подразделения',
            title: ''
          },
          'i-i-s-new-увольнение-l': {
            caption: 'Увольнение',
            title: ''
          },
          'i-i-s-new-организация-l': {
            caption: 'Организация',
            title: ''
          },
          'i-i-s-new-график-l': {
            caption: 'График',
            title: ''
          },
          'i-i-s-new-расчет-l': {
            caption: 'Расчет',
            title: ''
          },
          'i-i-s-new-должности-l': {
            caption: 'Должности',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'i-i-s-new-график-l': IISNewГрафикLForm,
    'i-i-s-new-должности-l': IISNewДолжностиLForm,
    'i-i-s-new-организация-l': IISNewОрганизацияLForm,
    'i-i-s-new-подразделения-l': IISNewПодразделенияLForm,
    'i-i-s-new-прием-l': IISNewПриемLForm,
    'i-i-s-new-расчет-l': IISNewРасчетLForm,
    'i-i-s-new-сотрудник-l': IISNewСотрудникLForm,
    'i-i-s-new-увольнение-l': IISNewУвольнениеLForm,
    'i-i-s-new-график-e': IISNewГрафикEForm,
    'i-i-s-new-должности-e': IISNewДолжностиEForm,
    'i-i-s-new-организация-e': IISNewОрганизацияEForm,
    'i-i-s-new-подразделения-e': IISNewПодразделенияEForm,
    'i-i-s-new-прием-e': IISNewПриемEForm,
    'i-i-s-new-расчет-e': IISNewРасчетEForm,
    'i-i-s-new-сотрудник-e': IISNewСотрудникEForm,
    'i-i-s-new-увольнение-e': IISNewУвольнениеEForm
  },

});

export default translations;
