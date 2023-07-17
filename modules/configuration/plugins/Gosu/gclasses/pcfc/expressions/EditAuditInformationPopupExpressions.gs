package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/policyfile/EditAuditInformationPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class EditAuditInformationPopupExpressions {
  @javax.annotation.Generated("config/web/pcf/policyfile/EditAuditInformationPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class EditAuditInformationPopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (policyPeriod :  PolicyPeriod, auditInformation :  AuditInformation) : int {
      return 0
    }
    
    // 'value' attribute on TypeKeyInput (id=Method_Input) at EditAuditInformationPopup.pcf: line 39, column 46
    function defaultSetter_10 (__VALUE_TO_SET :  java.lang.Object) : void {
      auditInformation.AuditMethod = (__VALUE_TO_SET as typekey.AuditMethod)
    }
    
    // 'value' attribute on TypeKeyInput (id=FinalAuditOption_Input) at EditAuditInformationPopup.pcf: line 47, column 122
    function defaultSetter_15 (__VALUE_TO_SET :  java.lang.Object) : void {
      policyPeriod.FinalAuditOption = (__VALUE_TO_SET as typekey.FinalAuditOption)
    }
    
    // 'value' attribute on DateInput (id=InitDate_Input) at EditAuditInformationPopup.pcf: line 28, column 48
    function defaultSetter_2 (__VALUE_TO_SET :  java.lang.Object) : void {
      auditInformation.InitDate = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on DateInput (id=DueDate_Input) at EditAuditInformationPopup.pcf: line 33, column 47
    function defaultSetter_6 (__VALUE_TO_SET :  java.lang.Object) : void {
      auditInformation.DueDate = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'filter' attribute on TypeKeyInput (id=FinalAuditOption_Input) at EditAuditInformationPopup.pcf: line 47, column 122
    function filter_17 (VALUE :  typekey.FinalAuditOption, VALUES :  typekey.FinalAuditOption[]) : java.util.List<typekey.FinalAuditOption> {
      return VALUES.where(\ f -> f != TC_NO).toList()
    }
    
    // EditButtons at EditAuditInformationPopup.pcf: line 20, column 23
    function label_0 () : java.lang.Object {
      return gw.api.util.LocationUtil.hasOwnBundle(CurrentLocation) ? DisplayKey.get("Button.Update") : DisplayKey.get("Button.OK")
    }
    
    // 'value' attribute on TypeKeyInput (id=FinalAuditOption_Input) at EditAuditInformationPopup.pcf: line 47, column 122
    function valueRoot_16 () : java.lang.Object {
      return policyPeriod
    }
    
    // 'value' attribute on DateInput (id=InitDate_Input) at EditAuditInformationPopup.pcf: line 28, column 48
    function valueRoot_3 () : java.lang.Object {
      return auditInformation
    }
    
    // 'value' attribute on DateInput (id=InitDate_Input) at EditAuditInformationPopup.pcf: line 28, column 48
    function value_1 () : java.util.Date {
      return auditInformation.InitDate
    }
    
    // 'value' attribute on TypeKeyInput (id=FinalAuditOption_Input) at EditAuditInformationPopup.pcf: line 47, column 122
    function value_14 () : typekey.FinalAuditOption {
      return policyPeriod.FinalAuditOption
    }
    
    // 'value' attribute on DateInput (id=DueDate_Input) at EditAuditInformationPopup.pcf: line 33, column 47
    function value_5 () : java.util.Date {
      return auditInformation.DueDate
    }
    
    // 'value' attribute on TypeKeyInput (id=Method_Input) at EditAuditInformationPopup.pcf: line 39, column 46
    function value_9 () : typekey.AuditMethod {
      return auditInformation.AuditMethod
    }
    
    // 'visible' attribute on TypeKeyInput (id=FinalAuditOption_Input) at EditAuditInformationPopup.pcf: line 47, column 122
    function visible_13 () : java.lang.Boolean {
      return !policyPeriod.Archived and (auditInformation.IsFinalAudit and not policyPeriod.IsReportingPolicy)
    }
    
    override property get CurrentLocation () : pcf.EditAuditInformationPopup {
      return super.CurrentLocation as pcf.EditAuditInformationPopup
    }
    
    property get auditInformation () : AuditInformation {
      return getVariableValue("auditInformation", 0) as AuditInformation
    }
    
    property set auditInformation ($arg :  AuditInformation) {
      setVariableValue("auditInformation", 0, $arg)
    }
    
    property get policyPeriod () : PolicyPeriod {
      return getVariableValue("policyPeriod", 0) as PolicyPeriod
    }
    
    property set policyPeriod ($arg :  PolicyPeriod) {
      setVariableValue("policyPeriod", 0, $arg)
    }
    
    
  }
  
  
}