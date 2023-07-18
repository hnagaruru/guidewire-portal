package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/policyfile/PolicyFile_PolicyInfo.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class PolicyFile_PolicyInfoExpressions {
  @javax.annotation.Generated("config/web/pcf/policyfile/PolicyFile_PolicyInfo.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PolicyFile_PolicyInfoExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (period :  PolicyPeriod, asOfDate :  java.util.Date) : int {
      return 0
    }
    
    // 'afterEnter' attribute on Page (id=PolicyFile_PolicyInfo) at PolicyFile_PolicyInfo.pcf: line 10, column 67
    function afterEnter_4 () : void {
      gw.api.web.PebblesUtil.addWebMessages(CurrentLocation, period.PolicyFileMessages)
    }
    
    // 'canVisit' attribute on Page (id=PolicyFile_PolicyInfo) at PolicyFile_PolicyInfo.pcf: line 10, column 67
    static function canVisit_5 (asOfDate :  java.util.Date, period :  PolicyPeriod) : java.lang.Boolean {
      return perm.PolicyPeriod.view(period) and perm.System.pfiledetails
    }
    
    // 'def' attribute on PanelRef at PolicyFile_PolicyInfo.pcf: line 24, column 75
    function def_onEnter_0 (def :  pcf.WarningsPanelSet) : void {
      def.onEnter(period.Policy.ContingencyWarningMessages)
    }
    
    // 'def' attribute on PanelRef at PolicyFile_PolicyInfo.pcf: line 26, column 48
    function def_onEnter_2 (def :  pcf.PolicyFile_PolicyInfoDV) : void {
      def.onEnter(period)
    }
    
    // 'def' attribute on PanelRef at PolicyFile_PolicyInfo.pcf: line 24, column 75
    function def_refreshVariables_1 (def :  pcf.WarningsPanelSet) : void {
      def.refreshVariables(period.Policy.ContingencyWarningMessages)
    }
    
    // 'def' attribute on PanelRef at PolicyFile_PolicyInfo.pcf: line 26, column 48
    function def_refreshVariables_3 (def :  pcf.PolicyFile_PolicyInfoDV) : void {
      def.refreshVariables(period)
    }
    
    // 'parent' attribute on Page (id=PolicyFile_PolicyInfo) at PolicyFile_PolicyInfo.pcf: line 10, column 67
    static function parent_6 (asOfDate :  java.util.Date, period :  PolicyPeriod) : pcf.api.Destination {
      return pcf.PolicyFile.createDestination(period, asOfDate)
    }
    
    override property get CurrentLocation () : pcf.PolicyFile_PolicyInfo {
      return super.CurrentLocation as pcf.PolicyFile_PolicyInfo
    }
    
    property get asOfDate () : java.util.Date {
      return getVariableValue("asOfDate", 0) as java.util.Date
    }
    
    property set asOfDate ($arg :  java.util.Date) {
      setVariableValue("asOfDate", 0, $arg)
    }
    
    property get period () : PolicyPeriod {
      return getVariableValue("period", 0) as PolicyPeriod
    }
    
    property set period ($arg :  PolicyPeriod) {
      setVariableValue("period", 0, $arg)
    }
    
    
  }
  
  
}