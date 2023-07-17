package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/hop/policyfile/PolicyFile_HOPDwellingConstruction.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class PolicyFile_HOPDwellingConstructionExpressions {
  @javax.annotation.Generated("config/web/pcf/line/hop/policyfile/PolicyFile_HOPDwellingConstruction.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PolicyFile_HOPDwellingConstructionExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (policyPeriod :  PolicyPeriod, asOfDate :  Date) : int {
      return 0
    }
    
    // 'afterEnter' attribute on Page (id=PolicyFile_HOPDwellingConstruction) at PolicyFile_HOPDwellingConstruction.pcf: line 10, column 85
    function afterEnter_2 () : void {
      gw.api.web.PebblesUtil.addWebMessages(CurrentLocation, policyPeriod.PolicyFileMessages)
    }
    
    // 'canVisit' attribute on Page (id=PolicyFile_HOPDwellingConstruction) at PolicyFile_HOPDwellingConstruction.pcf: line 10, column 85
    static function canVisit_3 (asOfDate :  Date, policyPeriod :  PolicyPeriod) : java.lang.Boolean {
      return perm.PolicyPeriod.view(policyPeriod) and perm.System.pfiledetails
    }
    
    // 'def' attribute on PanelRef at PolicyFile_HOPDwellingConstruction.pcf: line 24, column 75
    function def_onEnter_0 (def :  pcf.HOPDwellingConstructionPanelSet) : void {
      def.onEnter(policyPeriod, false, null)
    }
    
    // 'def' attribute on PanelRef at PolicyFile_HOPDwellingConstruction.pcf: line 24, column 75
    function def_refreshVariables_1 (def :  pcf.HOPDwellingConstructionPanelSet) : void {
      def.refreshVariables(policyPeriod, false, null)
    }
    
    // 'parent' attribute on Page (id=PolicyFile_HOPDwellingConstruction) at PolicyFile_HOPDwellingConstruction.pcf: line 10, column 85
    static function parent_4 (asOfDate :  Date, policyPeriod :  PolicyPeriod) : pcf.api.Destination {
      return pcf.PolicyFile.createDestination(policyPeriod, asOfDate)
    }
    
    override property get CurrentLocation () : pcf.PolicyFile_HOPDwellingConstruction {
      return super.CurrentLocation as pcf.PolicyFile_HOPDwellingConstruction
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