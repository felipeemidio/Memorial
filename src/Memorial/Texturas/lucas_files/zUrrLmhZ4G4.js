if (self.CavalryLogger) { CavalryLogger.start_js(["peh+0"]); }

__d('BrowserPushNotificationJewelUpsellLogger',['Arbiter','QE2Logger'],(function a(b,c,d,e,f,g){'use strict';var h='www_browser_notifications_upsell',i={exposeOnVisible:function j(){c('Arbiter').subscribeOnce('notificationJewel/opened',function(){return c('QE2Logger').logExposureForUser(h);});}};f.exports=i;}),null);
__d('legacy:popup-resizer',['PopupWindow'],(function a(b,c,d,e,f,g){b.PopupResizer=c('PopupWindow');}),3);