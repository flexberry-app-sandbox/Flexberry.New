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
    /// Должности.
    /// </summary>
    // *** Start programmer edit section *** (Должности CustomAttributes)

    // *** End programmer edit section *** (Должности CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("ДолжностиE", new string[] {
            "IDдолжности as \'IDдолжности\'",
            "Наименовани as \'Наименовани\'"})]
    [View("ДолжностиL", new string[] {
            "IDдолжности as \'IDдолжности\'",
            "Наименовани as \'Наименовани\'"})]
    public class Должности : ICSSoft.STORMNET.DataObject
    {
        
        private int fIDдолжности;
        
        private string fНаименовани;
        
        // *** Start programmer edit section *** (Должности CustomMembers)

        // *** End programmer edit section *** (Должности CustomMembers)

        
        /// <summary>
        /// IDдолжности.
        /// </summary>
        // *** Start programmer edit section *** (Должности.IDдолжности CustomAttributes)

        // *** End programmer edit section *** (Должности.IDдолжности CustomAttributes)
        public virtual int IDдолжности
        {
            get
            {
                // *** Start programmer edit section *** (Должности.IDдолжности Get start)

                // *** End programmer edit section *** (Должности.IDдолжности Get start)
                int result = this.fIDдолжности;
                // *** Start programmer edit section *** (Должности.IDдолжности Get end)

                // *** End programmer edit section *** (Должности.IDдолжности Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Должности.IDдолжности Set start)

                // *** End programmer edit section *** (Должности.IDдолжности Set start)
                this.fIDдолжности = value;
                // *** Start programmer edit section *** (Должности.IDдолжности Set end)

                // *** End programmer edit section *** (Должности.IDдолжности Set end)
            }
        }
        
        /// <summary>
        /// Наименовани.
        /// </summary>
        // *** Start programmer edit section *** (Должности.Наименовани CustomAttributes)

        // *** End programmer edit section *** (Должности.Наименовани CustomAttributes)
        [StrLen(255)]
        public virtual string Наименовани
        {
            get
            {
                // *** Start programmer edit section *** (Должности.Наименовани Get start)

                // *** End programmer edit section *** (Должности.Наименовани Get start)
                string result = this.fНаименовани;
                // *** Start programmer edit section *** (Должности.Наименовани Get end)

                // *** End programmer edit section *** (Должности.Наименовани Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Должности.Наименовани Set start)

                // *** End programmer edit section *** (Должности.Наименовани Set start)
                this.fНаименовани = value;
                // *** Start programmer edit section *** (Должности.Наименовани Set end)

                // *** End programmer edit section *** (Должности.Наименовани Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "ДолжностиE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ДолжностиE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ДолжностиE", typeof(IIS.New.Должности));
                }
            }
            
            /// <summary>
            /// "ДолжностиL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ДолжностиL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ДолжностиL", typeof(IIS.New.Должности));
                }
            }
        }
    }
}
