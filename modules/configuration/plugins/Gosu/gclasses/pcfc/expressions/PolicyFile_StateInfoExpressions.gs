package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/ba/policyfile/PolicyFile_StateInfo.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class PolicyFile_StateInfoExpressions {
  @javax.annotation.Generated("config/web/pcf/line/ba/policyfile/PolicyFile_StateInfo.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PolicyFile_StateInfoExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (policyPeriod :  PolicyPeriod, asOfDate :  java.util.Date) : int {
      return 0
    }
    
    // 'afterEnter' attribute on Page (id=PolicyFile_StateInfo) at PolicyFile_StateInfo.pcf: line 10, column 66
    function afterEnter_3 () : void {
      gw.api.web.PebblesUtil.addWebMessages(CurrentLocation, policyPeriod.PolicyFileMessages)
    }
    
    // 'canVisit' attribute on Page (id=PolicyFile_StateInfo) at PolicyFile_StateInfo.pcf: line 10, column 66
    static function canVisit_4 (asOfDate :  java.util.Date, policyPeriod :  PolicyPeriod) : java.lang.Boolean {
      return perm.PolicyPeriod.view(policyPeriod) and perm.System.pfiledetails
    }
    
    // 'def' attribute on PanelRef at PolicyFile_StateInfo.pcf: line 28, column 53
    function def_onEnter_1 (def :  pcf.PolicyFile_StateInfoDV) : void {
      def.onEnter(policyPeriod)
    }
    
    // 'def' attribute on PanelRef at PolicyFile_StateInfo.pcf: line 28, column 53
    function def_refreshVariables_2 (def :  pcf.PolicyFile_StateInfoDV) : void {
      def.refreshVariables(policyPeriod)
    }
    
    // 'initialValue' attribute on Variable at PolicyFile_StateInfo.pcf: line 22, column 45
    function initialValue_0 () : productmodel.BusinessAutoLine {
      return policyPeriod.BusinessAutoLine
    }
    
    // 'parent' attribute on Page (id=PolicyFile_StateInfo) at PolicyFile_StateInfo.pcf: line 10, column 66
    static function parent_5 (asOfDate :  java.util.Date, policyPeriod :  PolicyPeriod) : pcf.api.Destination {
      return pcf.PolicyFile.createDestination(policyPeriod, asOfDate)
    }
    
    override property get CurrentLocation () : pcf.PolicyFile_StateInfo {
      return super.CurrentLocation as pcf.PolicyFile_StateInfo
    }
    
    property get asOfDate () : java.util.Date {
      return getVariableValue("asOfDate", 0) as java.util.Date
    }
    
    property set asOfDate ($arg :  java.util.Date) {
      setVariableValue("asOfDate", 0, $arg)
    }
    
    property get baLine () : productmodel.BusinessAutoLine {
      return getVariableValue("baLine", 0) as productmodel.BusinessAutoLine
    }
    
    property set baLine ($arg :  productmodel.BusinessAutoLine) {
      setVariableValue("baLine", 0, $arg)
    }
    
    property get policyPeriod () : PolicyPeriod {
      return getVariableValue("policyPeriod", 0) as PolicyPeriod
    }
    
    property set policyPeriod ($arg :  PolicyPeriod) {
      setVariableValue("policyPeriod", 0, $arg)
    }
    
    
  }
  
  
}