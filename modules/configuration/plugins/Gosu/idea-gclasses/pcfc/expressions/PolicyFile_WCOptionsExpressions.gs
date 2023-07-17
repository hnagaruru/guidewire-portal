package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/wc/policyfile/PolicyFile_WCOptions.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class PolicyFile_WCOptionsExpressions {
  @javax.annotation.Generated("config/web/pcf/line/wc/policyfile/PolicyFile_WCOptions.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PolicyFile_WCOptionsExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (policyPeriod :  PolicyPeriod, asOfDate :  java.util.Date) : int {
      return 0
    }
    
    // 'afterEnter' attribute on Page (id=PolicyFile_WCOptions) at PolicyFile_WCOptions.pcf: line 11, column 66
    function afterEnter_2 () : void {
      gw.api.web.PebblesUtil.addWebMessages(CurrentLocation, policyPeriod.PolicyFileMessages)
    }
    
    // 'canVisit' attribute on Page (id=PolicyFile_WCOptions) at PolicyFile_WCOptions.pcf: line 11, column 66
    static function canVisit_3 (asOfDate :  java.util.Date, policyPeriod :  PolicyPeriod) : java.lang.Boolean {
      return perm.PolicyPeriod.view(policyPeriod) and perm.System.pfiledetails
    }
    
    // 'def' attribute on PanelRef at PolicyFile_WCOptions.pcf: line 25, column 55
    function def_onEnter_0 (def :  pcf.WCOptionsPanelSet) : void {
      def.onEnter(policyPeriod, false)
    }
    
    // 'def' attribute on PanelRef at PolicyFile_WCOptions.pcf: line 25, column 55
    function def_refreshVariables_1 (def :  pcf.WCOptionsPanelSet) : void {
      def.refreshVariables(policyPeriod, false)
    }
    
    // 'parent' attribute on Page (id=PolicyFile_WCOptions) at PolicyFile_WCOptions.pcf: line 11, column 66
    static function parent_4 (asOfDate :  java.util.Date, policyPeriod :  PolicyPeriod) : pcf.api.Destination {
      return pcf.PolicyFile.createDestination(policyPeriod, asOfDate)
    }
    
    override property get CurrentLocation () : pcf.PolicyFile_WCOptions {
      return super.CurrentLocation as pcf.PolicyFile_WCOptions
    }
    
    property get asOfDate () : java.util.Date {
      return getVariableValue("asOfDate", 0) as java.util.Date
    }
    
    property set asOfDate ($arg :  java.util.Date) {
      setVariableValue("asOfDate", 0, $arg)
    }
    
    property get policyPeriod () : PolicyPeriod {
      return getVariableValue("policyPeriod", 0) as PolicyPeriod
    }
    
    property set policyPeriod ($arg :  PolicyPeriod) {
      setVariableValue("policyPeriod", 0, $arg)
    }
    
    
  }
  
  
}