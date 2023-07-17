package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/job/audit/AuditProcessingInputSet.FinalAudit.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class AuditProcessingInputSet_FinalAuditExpressions {
  @javax.annotation.Generated("config/web/pcf/job/audit/AuditProcessingInputSet.FinalAudit.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class AuditProcessingInputSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'currency' attribute on MonetaryAmountInput (id=AuditFee_Input) at AuditProcessingInputSet.FinalAudit.pcf: line 37, column 48
    function currency_19 () : typekey.Currency {
      return audit.Currency
    }
    
    // 'value' attribute on DateInput (id=ReceivedDate_Input) at AuditProcessingInputSet.FinalAudit.pcf: line 26, column 52
    function defaultSetter_10 (__VALUE_TO_SET :  java.lang.Object) : void {
      audit.AuditInformation.ReceivedDate = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on MonetaryAmountInput (id=AuditFee_Input) at AuditProcessingInputSet.FinalAudit.pcf: line 37, column 48
    function defaultSetter_17 (__VALUE_TO_SET :  java.lang.Object) : void {
      audit.AuditInformation.AuditFee = (__VALUE_TO_SET as gw.pl.currency.MonetaryAmount)
    }
    
    // 'value' attribute on TextAreaInput (id=Instructions_Input) at AuditProcessingInputSet.FinalAudit.pcf: line 43, column 52
    function defaultSetter_22 (__VALUE_TO_SET :  java.lang.Object) : void {
      audit.AuditInformation.Instructions = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on DateInput (id=DueDate_Input) at AuditProcessingInputSet.FinalAudit.pcf: line 21, column 47
    function defaultSetter_5 (__VALUE_TO_SET :  java.lang.Object) : void {
      audit.AuditInformation.DueDate = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'editable' attribute on DateInput (id=DueDate_Input) at AuditProcessingInputSet.FinalAudit.pcf: line 21, column 47
    function editable_3 () : java.lang.Boolean {
      return perm.Audit.reschedule
    }
    
    // 'value' attribute on DateInput (id=InitDate_Input) at AuditProcessingInputSet.FinalAudit.pcf: line 16, column 48
    function valueRoot_1 () : java.lang.Object {
      return audit.AuditInformation
    }
    
    // 'value' attribute on TextInput (id=Auditor_Input) at AuditProcessingInputSet.FinalAudit.pcf: line 30, column 87
    function valueRoot_14 () : java.lang.Object {
      return audit.getUserRoleAssignmentByRole(TC_AUDITOR).AssignedUser
    }
    
    // 'value' attribute on DateInput (id=InitDate_Input) at AuditProcessingInputSet.FinalAudit.pcf: line 16, column 48
    function value_0 () : java.util.Date {
      return audit.AuditInformation.InitDate
    }
    
    // 'value' attribute on TextInput (id=Auditor_Input) at AuditProcessingInputSet.FinalAudit.pcf: line 30, column 87
    function value_13 () : java.lang.String {
      return audit.getUserRoleAssignmentByRole(TC_AUDITOR).AssignedUser.DisplayName
    }
    
    // 'value' attribute on MonetaryAmountInput (id=AuditFee_Input) at AuditProcessingInputSet.FinalAudit.pcf: line 37, column 48
    function value_16 () : gw.pl.currency.MonetaryAmount {
      return audit.AuditInformation.AuditFee
    }
    
    // 'value' attribute on TextAreaInput (id=Instructions_Input) at AuditProcessingInputSet.FinalAudit.pcf: line 43, column 52
    function value_21 () : java.lang.String {
      return audit.AuditInformation.Instructions
    }
    
    // 'value' attribute on DateInput (id=DueDate_Input) at AuditProcessingInputSet.FinalAudit.pcf: line 21, column 47
    function value_4 () : java.util.Date {
      return audit.AuditInformation.DueDate
    }
    
    // 'value' attribute on DateInput (id=ReceivedDate_Input) at AuditProcessingInputSet.FinalAudit.pcf: line 26, column 52
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