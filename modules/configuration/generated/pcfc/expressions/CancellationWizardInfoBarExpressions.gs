package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/job/cancellation/CancellationWizardInfoBar.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class CancellationWizardInfoBarExpressions {
  @javax.annotation.Generated("config/web/pcf/job/cancellation/CancellationWizardInfoBar.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class CancellationWizardInfoBarExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on InfoBarElement (id=PolicyNumber) at CancellationWizardInfoBar.pcf: line 39, column 68
    function action_10 () : void {
      PolicyFileForward.go(cancellation.LatestPeriod.PolicyNumber)
    }
    
    // 'action' attribute on InfoBarElement (id=AccountNumber) at CancellationWizardInfoBar.pcf: line 34, column 58
    function action_7 () : void {
      AccountFileForward.go(cancellation.Policy.Account)
    }
    
    // 'action' attribute on InfoBarElement (id=PolicyNumber) at CancellationWizardInfoBar.pcf: line 39, column 68
    function action_dest_11 () : pcf.api.Destination {
      return pcf.PolicyFileForward.createDestination(cancellation.LatestPeriod.PolicyNumber)
    }
    
    // 'action' attribute on InfoBarElement (id=AccountNumber) at CancellationWizardInfoBar.pcf: line 34, column 58
    function action_dest_8 () : pcf.api.Destination {
      return pcf.AccountFileForward.createDestination(cancellation.Policy.Account)
    }
    
    // 'iconColor' attribute on InfoBarElement (id=CancellationLabel) at CancellationWizardInfoBar.pcf: line 18, column 119
    function iconColor_2 () : gw.api.web.color.GWColor {
      return gw.api.web.color.GWColor.THEME_ALERT_ERROR
    }
    
    // 'icon' attribute on InfoBarElement (id=CancellationLabel) at CancellationWizardInfoBar.pcf: line 18, column 119
    function icon_1 () : java.lang.String {
      return cancellation.Icon
    }
    
    // 'icon' attribute on InfoBarElement (id=LOBLabel) at CancellationWizardInfoBar.pcf: line 23, column 44
    function icon_4 () : java.lang.String {
      return policyPeriod.Policy.Product.Icon
    }
    
    // 'label' attribute on InfoBarElement (id=CancellationLabel) at CancellationWizardInfoBar.pcf: line 18, column 119
    function label_0 () : java.lang.Object {
      return DisplayKey.get("Web.Wizard.InfoBar.JobStatus", cancellation.DisplayType,policyPeriod.Status)
    }
    
    // 'label' attribute on InfoBarElement (id=LOBLabel) at CancellationWizardInfoBar.pcf: line 23, column 44
    function label_3 () : java.lang.Object {
      return policyPeriod.Policy.Product
    }
    
    // 'label' attribute on InfoBarElement (id=EffectiveDate) at CancellationWizardInfoBar.pcf: line 26, column 162
    function label_5 () : java.lang.Object {
      return DisplayKey.get("Web.Wizard.InfoBar.EffectiveDate", gw.api.util.StringUtil.formatDate(policyPeriod.EditEffectiveDate,"short"))
    }
    
    // 'value' attribute on InfoBarElement (id=PolicyNumber) at CancellationWizardInfoBar.pcf: line 39, column 68
    function value_12 () : java.lang.Object {
      return cancellation.LatestPeriod.PolicyNumberDisplayString
    }
    
    // 'value' attribute on InfoBarElement (id=Underwriter) at CancellationWizardInfoBar.pcf: line 44, column 51
    function value_14 () : java.lang.Object {
      return cancellation.Underwriter
    }
    
    // 'value' attribute on InfoBarElement (id=AccountName) at CancellationWizardInfoBar.pcf: line 29, column 61
    function value_6 () : java.lang.Object {
      return policyPeriod.PrimaryNamedInsured.DisplayName
    }
    
    // 'value' attribute on InfoBarElement (id=AccountNumber) at CancellationWizardInfoBar.pcf: line 34, column 58
    function value_9 () : java.lang.Object {
      return cancellation.Policy.Account.AccountNumber
    }
    
    // 'visible' attribute on InfoBarElement (id=Underwriter) at CancellationWizardInfoBar.pcf: line 44, column 51
    function visible_13 () : java.lang.Boolean {
      return cancellation.Underwriter != null
    }
    
    property get cancellation () : Cancellation {
      return getRequireValue("cancellation", 0) as Cancellation
    }
    
    property set cancellation ($arg :  Cancellation) {
      setRequireValue("cancellation", 0, $arg)
    }
    
    property get policyPeriod () : PolicyPeriod {
      return getRequireValue("policyPeriod", 0) as PolicyPeriod
    }
    
    property set policyPeriod ($arg :  PolicyPeriod) {
      setRequireValue("policyPeriod", 0, $arg)
    }
    
    
  }
  
  
}