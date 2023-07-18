package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/job/reinstatement/ReinstatementWizardInfoBar.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ReinstatementWizardInfoBarExpressions {
  @javax.annotation.Generated("config/web/pcf/job/reinstatement/ReinstatementWizardInfoBar.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ReinstatementWizardInfoBarExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on InfoBarElement (id=AccountNumber) at ReinstatementWizardInfoBar.pcf: line 33, column 59
    function action_6 () : void {
      AccountFileForward.go(reinstatement.Policy.Account)
    }
    
    // 'action' attribute on InfoBarElement (id=PolicyNumber) at ReinstatementWizardInfoBar.pcf: line 38, column 69
    function action_9 () : void {
      PolicyFileForward.go(reinstatement.LatestPeriod.PolicyNumber)
    }
    
    // 'action' attribute on InfoBarElement (id=PolicyNumber) at ReinstatementWizardInfoBar.pcf: line 38, column 69
    function action_dest_10 () : pcf.api.Destination {
      return pcf.PolicyFileForward.createDestination(reinstatement.LatestPeriod.PolicyNumber)
    }
    
    // 'action' attribute on InfoBarElement (id=AccountNumber) at ReinstatementWizardInfoBar.pcf: line 33, column 59
    function action_dest_7 () : pcf.api.Destination {
      return pcf.AccountFileForward.createDestination(reinstatement.Policy.Account)
    }
    
    // 'icon' attribute on InfoBarElement (id=ReinstatementLabel) at ReinstatementWizardInfoBar.pcf: line 17, column 120
    function icon_1 () : java.lang.String {
      return reinstatement.Icon
    }
    
    // 'icon' attribute on InfoBarElement (id=LOBLabel) at ReinstatementWizardInfoBar.pcf: line 22, column 44
    function icon_3 () : java.lang.String {
      return policyPeriod.Policy.Product.Icon
    }
    
    // 'label' attribute on InfoBarElement (id=ReinstatementLabel) at ReinstatementWizardInfoBar.pcf: line 17, column 120
    function label_0 () : java.lang.Object {
      return DisplayKey.get("Web.Wizard.InfoBar.JobStatus", reinstatement.DisplayType,policyPeriod.Status)
    }
    
    // 'label' attribute on InfoBarElement (id=LOBLabel) at ReinstatementWizardInfoBar.pcf: line 22, column 44
    function label_2 () : java.lang.Object {
      return policyPeriod.Policy.Product
    }
    
    // 'label' attribute on InfoBarElement (id=EffectiveDate) at ReinstatementWizardInfoBar.pcf: line 25, column 162
    function label_4 () : java.lang.Object {
      return DisplayKey.get("Web.Wizard.InfoBar.EffectiveDate", gw.api.util.StringUtil.formatDate(policyPeriod.EditEffectiveDate,"short"))
    }
    
    // 'value' attribute on InfoBarElement (id=PolicyNumber) at ReinstatementWizardInfoBar.pcf: line 38, column 69
    function value_11 () : java.lang.Object {
      return reinstatement.LatestPeriod.PolicyNumberDisplayString
    }
    
    // 'value' attribute on InfoBarElement (id=Underwriter) at ReinstatementWizardInfoBar.pcf: line 43, column 52
    function value_13 () : java.lang.Object {
      return reinstatement.Underwriter
    }
    
    // 'value' attribute on InfoBarElement (id=AccountName) at ReinstatementWizardInfoBar.pcf: line 28, column 61
    function value_5 () : java.lang.Object {
      return policyPeriod.PrimaryNamedInsured.DisplayName
    }
    
    // 'value' attribute on InfoBarElement (id=AccountNumber) at ReinstatementWizardInfoBar.pcf: line 33, column 59
    function value_8 () : java.lang.Object {
      return reinstatement.Policy.Account.AccountNumber
    }
    
    // 'visible' attribute on InfoBarElement (id=Underwriter) at ReinstatementWizardInfoBar.pcf: line 43, column 52
    function visible_12 () : java.lang.Boolean {
      return reinstatement.Underwriter != null
    }
    
    property get policyPeriod () : PolicyPeriod {
      return getRequireValue("policyPeriod", 0) as PolicyPeriod
    }
    
    property set policyPeriod ($arg :  PolicyPeriod) {
      setRequireValue("policyPeriod", 0, $arg)
    }
    
    property get reinstatement () : Reinstatement {
      return getRequireValue("reinstatement", 0) as Reinstatement
    }
    
    property set reinstatement ($arg :  Reinstatement) {
      setRequireValue("reinstatement", 0, $arg)
    }
    
    
  }
  
  
}