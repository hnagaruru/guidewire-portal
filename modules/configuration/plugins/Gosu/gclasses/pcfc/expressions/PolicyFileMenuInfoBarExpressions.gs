package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/policyfile/PolicyFileMenuInfoBar.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class PolicyFileMenuInfoBarExpressions {
  @javax.annotation.Generated("config/web/pcf/policyfile/PolicyFileMenuInfoBar.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PolicyFileMenuInfoBarExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on InfoBarElement (id=AccountNumber) at PolicyFileMenuInfoBar.pcf: line 27, column 58
    function action_3 () : void {
      AccountFileForward.go(policyPeriod.Policy.Account)
    }
    
    // 'action' attribute on InfoBarElement (id=AccountNumber) at PolicyFileMenuInfoBar.pcf: line 27, column 58
    function action_dest_4 () : pcf.api.Destination {
      return pcf.AccountFileForward.createDestination(policyPeriod.Policy.Account)
    }
    
    // 'icon' attribute on InfoBarElement (id=LOBLabel) at PolicyFileMenuInfoBar.pcf: line 19, column 55
    function icon_1 () : java.lang.String {
      return policyPeriod.Policy.Product.Icon
    }
    
    // 'label' attribute on InfoBarElement (id=LOBLabel) at PolicyFileMenuInfoBar.pcf: line 19, column 55
    function label_0 () : java.lang.Object {
      return policyPeriod.Policy.ProductDisplayName
    }
    
    // 'label' attribute on InfoBarElement (id=StatusAndExpDate) at PolicyFileMenuInfoBar.pcf: line 34, column 48
    function label_7 () : java.lang.Object {
      return formatStatusLabel(policyPeriod)
    }
    
    // 'value' attribute on InfoBarElement (id=AccountName) at PolicyFileMenuInfoBar.pcf: line 22, column 48
    function value_2 () : java.lang.Object {
      return policyPeriod.PrimaryInsuredName
    }
    
    // 'value' attribute on InfoBarElement (id=AccountNumber) at PolicyFileMenuInfoBar.pcf: line 27, column 58
    function value_5 () : java.lang.Object {
      return policyPeriod.Policy.Account.AccountNumber
    }
    
    // 'value' attribute on InfoBarElement (id=PolicyNumber) at PolicyFileMenuInfoBar.pcf: line 31, column 55
    function value_6 () : java.lang.Object {
      return policyPeriod.PolicyNumberDisplayString
    }
    
    property get policyPeriod () : PolicyPeriod {
      return getRequireValue("policyPeriod", 0) as PolicyPeriod
    }
    
    property set policyPeriod ($arg :  PolicyPeriod) {
      setRequireValue("policyPeriod", 0, $arg)
    }
    
    
    function formatStatusLabel(pp : PolicyPeriod) : String {
      if (pp.Canceled) {
        var cancDate = pp.CancellationDate
        var cancDateStr = gw.api.util.StringUtil.formatDate(cancDate,"short")
        if (cancDate == pp.PeriodStart) {
         return DisplayKey.get("Web.Wizard.InfoBar.CanceledFlatStatus", cancDateStr) 
        }
        else {
         return DisplayKey.get("Web.Wizard.InfoBar.CanceledStatus", cancDateStr) 
        }
      }
      else {
        var endDateStr = gw.api.util.StringUtil.formatDate(pp.PeriodEnd,"short")
        return DisplayKey.get("Web.Wizard.InfoBar.StatusAndExpDate", pp.PeriodDisplayStatus,endDateStr)
      }
    }
        
    
    
  }
  
  
}