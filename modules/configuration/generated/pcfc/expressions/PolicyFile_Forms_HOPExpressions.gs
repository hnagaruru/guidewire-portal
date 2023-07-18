package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/hop/policyfile/PolicyFile_Forms_HOP.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class PolicyFile_Forms_HOPExpressions {
  @javax.annotation.Generated("config/web/pcf/line/hop/policyfile/PolicyFile_Forms_HOP.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PolicyFile_Forms_HOPExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (policyPeriod :  PolicyPeriod, asOfDate :  Date) : int {
      return 0
    }
    
    // 'afterEnter' attribute on Page (id=PolicyFile_Forms_HOP) at PolicyFile_Forms_HOP.pcf: line 10, column 62
    function afterEnter_2 () : void {
      gw.api.web.PebblesUtil.addWebMessages(CurrentLocation, policyPeriod.PolicyFileMessages)
    }
    
    // 'canVisit' attribute on Page (id=PolicyFile_Forms_HOP) at PolicyFile_Forms_HOP.pcf: line 10, column 62
    static function canVisit_3 (asOfDate :  Date, policyPeriod :  PolicyPeriod) : java.lang.Boolean {
      return perm.PolicyPeriod.view(policyPeriod) and perm.System.pfiledetails
    }
    
    // 'def' attribute on ScreenRef at PolicyFile_Forms_HOP.pcf: line 20, column 84
    function def_onEnter_0 (def :  pcf.PolicyFile_PolicyLine_FormsScreen) : void {
      def.onEnter(policyPeriod, policyPeriod.HOPLine)
    }
    
    // 'def' attribute on ScreenRef at PolicyFile_Forms_HOP.pcf: line 20, column 84
    function def_refreshVariables_1 (def :  pcf.PolicyFile_PolicyLine_FormsScreen) : void {
      def.refreshVariables(policyPeriod, policyPeriod.HOPLine)
    }
    
    // 'parent' attribute on Page (id=PolicyFile_Forms_HOP) at PolicyFile_Forms_HOP.pcf: line 10, column 62
    static function parent_4 (asOfDate :  Date, policyPeriod :  PolicyPeriod) : pcf.api.Destination {
      return pcf.PolicyFile.createDestination(policyPeriod, asOfDate)
    }
    
    override property get CurrentLocation () : pcf.PolicyFile_Forms_HOP {
      return super.CurrentLocation as pcf.PolicyFile_Forms_HOP
    }
    
    property get asOfDate () : Date {
      return getVariableValue("asOfDate", 0) as Date
    }
    
    property set asOfDate ($arg :  Date) {
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