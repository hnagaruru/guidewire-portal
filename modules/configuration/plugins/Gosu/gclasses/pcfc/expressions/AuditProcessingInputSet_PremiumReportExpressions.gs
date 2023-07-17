package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/job/audit/AuditProcessingInputSet.PremiumReport.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class AuditProcessingInputSet_PremiumReportExpressions {
  @javax.annotation.Generated("config/web/pcf/job/audit/AuditProcessingInputSet.PremiumReport.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class AuditProcessingInputSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'currency' attribute on MonetaryAmountInput (id=PaymentReceived_Input) at AuditProcessingInputSet.PremiumReport.pcf: line 33, column 38
    function currency_16 () : typekey.Currency {
      return audit.Currency
    }
    
    // 'value' attribute on DateInput (id=ReceivedDate_Input) at AuditProcessingInputSet.PremiumReport.pcf: line 26, column 52
    function defaultSetter_10 (__VALUE_TO_SET :  java.lang.Object) : void {
      audit.AuditInformation.ReceivedDate = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on MonetaryAmountInput (id=PaymentReceived_Input) at AuditProcessingInputSet.PremiumReport.pcf: line 33, column 38
    function defaultSetter_14 (__VALUE_TO_SET :  java.lang.Object) : void {
      audit.PaymentReceived = (__VALUE_TO_SET as gw.pl.currency.MonetaryAmount)
    }
    
    // 'value' attribute on DateInput (id=DueDate_Input) at AuditProcessingInputSet.PremiumReport.pcf: line 21, column 47
    function defaultSetter_5 (__VALUE_TO_SET :  java.lang.Object) : void {
      audit.AuditInformation.DueDate = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'editable' attribute on DateInput (id=DueDate_Input) at AuditProcessingInputSet.PremiumReport.pcf: line 21, column 47
    function editable_3 () : java.lang.Boolean {
      return perm.Audit.reschedule
    }
    
    // 'value' attribute on DateInput (id=InitDate_Input) at AuditProcessingInputSet.PremiumReport.pcf: line 16, column 48
    function valueRoot_1 () : java.lang.Object {
      return audit.AuditInformation
    }
    
    // 'value' attribute on MonetaryAmountInput (id=PaymentReceived_Input) at AuditProcessingInputSet.PremiumReport.pcf: line 33, column 38
    function valueRoot_15 () : java.lang.Object {
      return audit
    }
    
    // 'value' attribute on DateInput (id=InitDate_Input) at AuditProcessingInputSet.PremiumReport.pcf: line 16, column 48
    function value_0 () : java.util.Date {
      return audit.AuditInformation.InitDate
    }
    
    // 'value' attribute on MonetaryAmountInput (id=PaymentReceived_Input) at AuditProcessingInputSet.PremiumReport.pcf: line 33, column 38
    function value_13 () : gw.pl.currency.MonetaryAmount {
      return audit.PaymentReceived
    }
    
    // 'value' attribute on DateInput (id=DueDate_Input) at AuditProcessingInputSet.PremiumReport.pcf: line 21, column 47
    function value_4 () : java.util.Date {
      return audit.AuditInformation.DueDate
    }
    
    // 'value' attribute on DateInput (id=ReceivedDate_Input) at AuditProcessingInputSet.PremiumReport.pcf: line 26, column 52
    function value_9 () : java.util.Date {
      return audit.AuditInformation.ReceivedDate
    }
    
    property get audit () : Audit {
      return getRequireValue("audit", 0) as Audit
    }
    
    property set audit ($arg :  Audit) {
      setRequireValue("audit", 0, $arg)
    }
    
    
  }
  
  
}