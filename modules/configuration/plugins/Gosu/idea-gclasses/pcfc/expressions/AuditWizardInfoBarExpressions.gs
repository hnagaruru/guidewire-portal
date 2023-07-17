package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/job/audit/AuditWizardInfoBar.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class AuditWizardInfoBarExpressions {
  @javax.annotation.Generated("config/web/pcf/job/audit/AuditWizardInfoBar.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class AuditWizardInfoBarExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on InfoBarElement (id=AccountNumber) at AuditWizardInfoBar.pcf: line 31, column 58
    function action_6 () : void {
      AccountFileForward.go(audit.Policy.Account)
    }
    
    // 'action' attribute on InfoBarElement (id=PolicyNumber) at AuditWizardInfoBar.pcf: line 36, column 55
    function action_9 () : void {
      PolicyFileForward.go(audit.LatestPeriod.PolicyNumber)
    }
    
    // 'action' attribute on InfoBarElement (id=PolicyNumber) at AuditWizardInfoBar.pcf: line 36, column 55
    function action_dest_10 () : pcf.api.Destination {
      return pcf.PolicyFileForward.createDestination(audit.LatestPeriod.PolicyNumber)
    }
    
    // 'action' attribute on InfoBarElement (id=AccountNumber) at AuditWizardInfoBar.pcf: line 31, column 58
    function action_dest_7 () : pcf.api.Destination {
      return pcf.AccountFileForward.createDestination(audit.Policy.Account)
    }
    
    // 'icon' attribute on InfoBarElement (id=AuditLabel) at AuditWizardInfoBar.pcf: line 17, column 136
    function icon_1 () : java.lang.String {
      return audit.Icon
    }
    
    // 'icon' attribute on InfoBarElement (id=LOBLabel) at AuditWizardInfoBar.pcf: line 22, column 44
    function icon_3 () : java.lang.String {
      return policyPeriod.Policy.Product.Icon
    }
    
    // 'label' attribute on InfoBarElement (id=AuditLabel) at AuditWizardInfoBar.pcf: line 17, column 136
    function label_0 () : java.lang.Object {
      return DisplayKey.get("Web.Wizard.InfoBar.JobStatus", audit.AuditInformation.AuditScheduleType, policyPeriod.Status)
    }
    
    // 'label' attribute on InfoBarElement (id=AuditStart) at AuditWizardInfoBar.pcf: line 39, column 177
    function label_12 () : java.lang.Object {
      return DisplayKey.get("Web.AuditWizard.InfoBar.AuditStart", gw.api.util.StringUtil.formatDate(audit.AuditInformation.AuditPeriodStartDate,"short"))
    }
    
    // 'label' attribute on InfoBarElement (id=AuditEnd) at AuditWizardInfoBar.pcf: line 42, column 173
    function label_13 () : java.lang.Object {
      return DisplayKey.get("Web.AuditWizard.InfoBar.AuditEnd", gw.api.util.StringUtil.formatDate(audit.AuditInformation.AuditPeriodEndDate,"short"))
    }
    
    // 'label' attribute on InfoBarElement (id=LOBLabel) at AuditWizardInfoBar.pcf: line 22, column 44
    function label_2 () : java.lang.Object {
      return policyPeriod.Policy.Product
    }
    
    // 'value' attribute on InfoBarElement (id=PolicyNumber) at AuditWizardInfoBar.pcf: line 36, column 55
    function value_11 () : java.lang.Object {
      return policyPeriod.PolicyNumberDisplayString
    }
    
    // 'value' attribute on InfoBarElement (id=AccountName) at AuditWizardInfoBar.pcf: line 26, column 59
    function value_5 () : java.lang.Object {
      return policyPeriod.PrimaryNamedInsured.DisplayName
    }
    
    // 'value' attribute on InfoBarElement (id=AccountNumber) at AuditWizardInfoBar.pcf: line 31, column 58
    function value_8 () : java.lang.Object {
      return policyPeriod.Policy.Account.AccountNumber
    }
    
    // 'visible' attribute on InfoBarElement (id=AccountName) at AuditWizardInfoBar.pcf: line 26, column 59
    function visible_4 () : java.lang.Boolean {
      return policyPeriod.PrimaryNamedInsured != null
    }
    
    property get audit () : Audit {
      return getRequireValue("audit", 0) as Audit
    }
    
    property set audit ($arg :  Audit) {
      setRequireValue("audit", 0, $arg)
    }
    
    property get policyPeriod () : PolicyPeriod {
      return getRequireValue("policyPeriod", 0) as PolicyPeriod
    }
    
    property set policyPeriod ($arg :  PolicyPeriod) {
      setRequireValue("policyPeriod", 0, $arg)
    }
    
    
  }
  
  
}