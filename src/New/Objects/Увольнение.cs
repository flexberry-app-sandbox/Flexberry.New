﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.New
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Увольнение.
    /// </summary>
    // *** Start programmer edit section *** (Увольнение CustomAttributes)

    // *** End programmer edit section *** (Увольнение CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("УвольнениеE", new string[] {
            "IDорганизации as \'IDорганизации\'",
            "Дата as \'Дата\'",
            "Основание as \'Основание\'"})]
    [View("УвольнениеL", new string[] {
            "IDорганизации as \'IDорганизации\'",
            "Дата as \'Дата\'",
            "Основание as \'Основание\'"})]
    public class Увольнение : ICSSoft.STORMNET.DataObject
    {
        
        private int fIDорганизации;
        
        private System.DateTime fДата;
        
        private int fIDсотрудника;
        
        private string fОснование;
        
        private IIS.New.Сотрудник fСотрудник;
        
        private IIS.New.Организация fОрганизация;
        
        // *** Start programmer edit section *** (Увольнение CustomMembers)

        // *** End programmer edit section *** (Увольнение CustomMembers)

        
        /// <summary>
        /// IDорганизации.
        /// </summary>
        // *** Start programmer edit section *** (Увольнение.IDорганизации CustomAttributes)

        // *** End programmer edit section *** (Увольнение.IDорганизации CustomAttributes)
        public virtual int IDорганизации
        {
            get
            {
                // *** Start programmer edit section *** (Увольнение.IDорганизации Get start)

                // *** End programmer edit section *** (Увольнение.IDорганизации Get start)
                int result = this.fIDорганизации;
                // *** Start programmer edit section *** (Увольнение.IDорганизации Get end)

                // *** End programmer edit section *** (Увольнение.IDорганизации Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Увольнение.IDорганизации Set start)

                // *** End programmer edit section *** (Увольнение.IDорганизации Set start)
                this.fIDорганизации = value;
                // *** Start programmer edit section *** (Увольнение.IDорганизации Set end)

                // *** End programmer edit section *** (Увольнение.IDорганизации Set end)
            }
        }
        
        /// <summary>
        /// IDсотрудника.
        /// </summary>
        // *** Start programmer edit section *** (Увольнение.IDсотрудника CustomAttributes)

        // *** End programmer edit section *** (Увольнение.IDсотрудника CustomAttributes)
        public virtual int IDсотрудника
        {
            get
            {
                // *** Start programmer edit section *** (Увольнение.IDсотрудника Get start)

                // *** End programmer edit section *** (Увольнение.IDсотрудника Get start)
                int result = this.fIDсотрудника;
                // *** Start programmer edit section *** (Увольнение.IDсотрудника Get end)

                // *** End programmer edit section *** (Увольнение.IDсотрудника Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Увольнение.IDсотрудника Set start)

                // *** End programmer edit section *** (Увольнение.IDсотрудника Set start)
                this.fIDсотрудника = value;
                // *** Start programmer edit section *** (Увольнение.IDсотрудника Set end)

                // *** End programmer edit section *** (Увольнение.IDсотрудника Set end)
            }
        }
        
        /// <summary>
        /// Дата.
        /// </summary>
        // *** Start programmer edit section *** (Увольнение.Дата CustomAttributes)

        // *** End programmer edit section *** (Увольнение.Дата CustomAttributes)
        public virtual System.DateTime Дата
        {
            get
            {
                // *** Start programmer edit section *** (Увольнение.Дата Get start)

                // *** End programmer edit section *** (Увольнение.Дата Get start)
                System.DateTime result = this.fДата;
                // *** Start programmer edit section *** (Увольнение.Дата Get end)

                // *** End programmer edit section *** (Увольнение.Дата Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Увольнение.Дата Set start)

                // *** End programmer edit section *** (Увольнение.Дата Set start)
                this.fДата = value;
                // *** Start programmer edit section *** (Увольнение.Дата Set end)

                // *** End programmer edit section *** (Увольнение.Дата Set end)
            }
        }
        
        /// <summary>
        /// Основание.
        /// </summary>
        // *** Start programmer edit section *** (Увольнение.Основание CustomAttributes)

        // *** End programmer edit section *** (Увольнение.Основание CustomAttributes)
        [StrLen(255)]
        public virtual string Основание
        {
            get
            {
                // *** Start programmer edit section *** (Увольнение.Основание Get start)

                // *** End programmer edit section *** (Увольнение.Основание Get start)
                string result = this.fОснование;
                // *** Start programmer edit section *** (Увольнение.Основание Get end)

                // *** End programmer edit section *** (Увольнение.Основание Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Увольнение.Основание Set start)

                // *** End programmer edit section *** (Увольнение.Основание Set start)
                this.fОснование = value;
                // *** Start programmer edit section *** (Увольнение.Основание Set end)

                // *** End programmer edit section *** (Увольнение.Основание Set end)
            }
        }
        
        /// <summary>
        /// Увольнение.
        /// </summary>
        // *** Start programmer edit section *** (Увольнение.Организация CustomAttributes)

        // *** End programmer edit section *** (Увольнение.Организация CustomAttributes)
        [PropertyStorage(new string[] {
                "Организация"})]
        [NotNull()]
        public virtual IIS.New.Организация Организация
        {
            get
            {
                // *** Start programmer edit section *** (Увольнение.Организация Get start)

                // *** End programmer edit section *** (Увольнение.Организация Get start)
                IIS.New.Организация result = this.fОрганизация;
                // *** Start programmer edit section *** (Увольнение.Организация Get end)

                // *** End programmer edit section *** (Увольнение.Организация Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Увольнение.Организация Set start)

                // *** End programmer edit section *** (Увольнение.Организация Set start)
                this.fОрганизация = value;
                // *** Start programmer edit section *** (Увольнение.Организация Set end)

                // *** End programmer edit section *** (Увольнение.Организация Set end)
            }
        }
        
        /// <summary>
        /// Увольнение.
        /// </summary>
        // *** Start programmer edit section *** (Увольнение.Сотрудник CustomAttributes)

        // *** End programmer edit section *** (Увольнение.Сотрудник CustomAttributes)
        [PropertyStorage(new string[] {
                "Сотрудник"})]
        [NotNull()]
        public virtual IIS.New.Сотрудник Сотрудник
        {
            get
            {
                // *** Start programmer edit section *** (Увольнение.Сотрудник Get start)

                // *** End programmer edit section *** (Увольнение.Сотрудник Get start)
                IIS.New.Сотрудник result = this.fСотрудник;
                // *** Start programmer edit section *** (Увольнение.Сотрудник Get end)

                // *** End programmer edit section *** (Увольнение.Сотрудник Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Увольнение.Сотрудник Set start)

                // *** End programmer edit section *** (Увольнение.Сотрудник Set start)
                this.fСотрудник = value;
                // *** Start programmer edit section *** (Увольнение.Сотрудник Set end)

                // *** End programmer edit section *** (Увольнение.Сотрудник Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "УвольнениеE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View УвольнениеE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("УвольнениеE", typeof(IIS.New.Увольнение));
                }
            }
            
            /// <summary>
            /// "УвольнениеL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View УвольнениеL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("УвольнениеL", typeof(IIS.New.Увольнение));
                }
            }
        }
    }
}
