package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/ba/policyfile/PolicyFile_CoveredAutoSymbols.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class PolicyFile_CoveredAutoSymbolsExpressions {
  @javax.annotation.Generated("config/web/pcf/line/ba/policyfile/PolicyFile_CoveredAutoSymbols.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PolicyFile_CoveredAutoSymbolsExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (policyPeriod :  PolicyPeriod, asOfDate :  java.util.Date) : int {
      return 0
    }
    
    // 'afterEnter' attribute on Page (id=PolicyFile_CoveredAutoSymbols) at PolicyFile_CoveredAutoSymbols.pcf: line 10, column 75
    function afterEnter_2 () : void {
      gw.api.web.PebblesUtil.addWebMessages(CurrentLocation, policyPeriod.PolicyFileMessages)
    }
    
    // 'canVisit' attribute on Page (id=PolicyFile_CoveredAutoSymbols) at PolicyFile_CoveredAutoSymbols.pcf: line 10, column 75
    static function canVisit_3 (asOfDate :  java.util.Date, policyPeriod :  PolicyPeriod) : java.lang.Boolean {
      return perm.PolicyPeriod.view(policyPeriod) and perm.System.pfiledetails
    }
    
    // 'def' attribute on PanelRef at PolicyFile_CoveredAutoSymbols.pcf: line 24, column 64
    function def_onEnter_0 (def :  pcf.CoveredAutoSymbolsPanelSet) : void {
      def.onEnter(policyPeriod, false)
    }
    
    // 'def' attribute on PanelRef at PolicyFile_CoveredAutoSymbols.pcf: line 24, column 64
    function def_refreshVariables_1 (def :  pcf.CoveredAutoSymbolsPanelSet) : void {
      def.refreshVariables(policyPeriod, false)
    }
    
    // 'parent' attribute on Page (id=PolicyFile_CoveredAutoSymbols) at PolicyFile_CoveredAutoSymbols.pcf: line 10, column 75
    static function parent_4 (asOfDate :  java.util.Date, policyPeriod :  PolicyPeriod) : pcf.api.Destination {
      return pcf.PolicyFile.createDestination(policyPeriod, asOfDate)
    }
    
    override property get CurrentLocation () : pcf.PolicyFile_CoveredAutoSymbols {
      return super.CurrentLocation as pcf.PolicyFile_CoveredAutoSymbols
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