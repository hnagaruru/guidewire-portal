package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/payment/demo/CollectCreditCardPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class CollectCreditCardPopupExpressions {
  @javax.annotation.Generated("config/web/pcf/payment/demo/CollectCreditCardPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class CollectCreditCardPopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (jobNumber :  String, tokenInfo :  gw.payment.paymentgateway.impl.TokenizedCreditCardDetails) : int {
      return 0
    }
    
    // 'actionHandler' attribute on EmbeddedPanel (id=embeddedPanel) at CollectCreditCardPopup.pcf: line 41, column 103
    function actionHandler_3 () : gw.api.web.embedded.EmbeddedWidgetActionHandler {
      return new gw.web.payment.demo.PaymentIntegrationActionHandler()
    }
    
    // 'appOrigin' attribute on EmbeddedPanel (id=embeddedPanel) at CollectCreditCardPopup.pcf: line 41, column 103
    function appOrigin_6 () : java.lang.String {
      return popupHelper.originOf(appUrl)
    }
    
    // 'appUrl' attribute on EmbeddedPanel (id=embeddedPanel) at CollectCreditCardPopup.pcf: line 41, column 103
    function appUrl_2 () : java.lang.String {
      return appUrl
    }
    
    // 'contextProvider' attribute on EmbeddedPanel (id=embeddedPanel) at CollectCreditCardPopup.pcf: line 41, column 103
    function contextProvider_5 () : gw.api.json.JsonObject {
      return popupHelper.getPaymentContextProvider(jobNumber)
    }
    
    // 'initialValue' attribute on Variable at CollectCreditCardPopup.pcf: line 22, column 64
    function initialValue_0 () : gw.web.payment.demo.CollectCreditCardPopupHelper {
      return new gw.web.payment.demo.CollectCreditCardPopupHelper()
    }
    
    // 'initialValue' attribute on Variable at CollectCreditCardPopup.pcf: line 26, column 22
    function initialValue_1 () : String {
      return "${gw.api.web.WebUtil.BasePath}/resources/pages/payments/Payments.html"
    }
    
    // 'updateHandler' attribute on EmbeddedPanel (id=embeddedPanel) at CollectCreditCardPopup.pcf: line 41, column 103
    function updateHandler_4 () : gw.api.web.embedded.EmbeddedWidgetUpdateHandler {
      return new gw.web.payment.demo.PaymentIntegrationUpdateHandler(jobNumber, tokenInfo)
    }
    
    override property get CurrentLocation () : pcf.CollectCreditCardPopup {
      return super.CurrentLocation as pcf.CollectCreditCardPopup
    }
    
    property get appUrl () : String {
      return getVariableValue("appUrl", 0) as String
    }
    
    property set appUrl ($arg :  String) {
      setVariableValue("appUrl", 0, $arg)
    }
    
    property get jobNumber () : String {
      return getVariableValue("jobNumber", 0) as String
    }
    
    property set jobNumber ($arg :  String) {
      setVariableValue("jobNumber", 0, $arg)
    }
    
    property get popupHelper () : gw.web.payment.demo.CollectCreditCardPopupHelper {
      return getVariableValue("popupHelper", 0) as gw.web.payment.demo.CollectCreditCardPopupHelper
    }
    
    property set popupHelper ($arg :  gw.web.payment.demo.CollectCreditCardPopupHelper) {
      setVariableValue("popupHelper", 0, $arg)
    }
    
    property get tokenInfo () : gw.payment.paymentgateway.impl.TokenizedCreditCardDetails {
      return getVariableValue("tokenInfo", 0) as gw.payment.paymentgateway.impl.TokenizedCreditCardDetails
    }
    
    property set tokenInfo ($arg :  gw.payment.paymentgateway.impl.TokenizedCreditCardDetails) {
      setVariableValue("tokenInfo", 0, $arg)
    }
    
    
  }
  
  
}