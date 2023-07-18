package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/cpp/policyfile/CommercialProperty_Modifiers.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class CommercialProperty_ModifiersExpressions {
  @javax.annotation.Generated("config/web/pcf/line/cpp/policyfile/CommercialProperty_Modifiers.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class CommercialProperty_ModifiersExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (period :  PolicyPeriod, asOfDate :  java.util.Date) : int {
      return 0
    }
    
    // 'canVisit' attribute on Page (id=CommercialProperty_Modifiers) at CommercialProperty_Modifiers.pcf: line 9, column 66
    static function canVisit_2 (asOfDate :  java.util.Date, period :  PolicyPeriod) : java.lang.Boolean {
      return perm.PolicyPeriod.view(period) and perm.System.pfiledetails and perm.System.viewmodifiers
    }
    
    // 'def' attribute on ScreenRef (id=PolicyFile_ModifiersScreen) at CommercialProperty_Modifiers.pcf: line 20, column 40
    function def_onEnter_0 (def :  pcf.PolicyFile_ModifiersScreen) : void {
      def.onEnter(period, false, null as gw.api.web.job.JobWizardHelper, period.CPLine.CPModifiers)
    }
    
    // 'def' attribute on ScreenRef (id=PolicyFile_ModifiersScreen) at CommercialProperty_Modifiers.pcf: line 20, column 40
    function def_refreshVariables_1 (def :  pcf.PolicyFile_ModifiersScreen) : void {
      def.refreshVariables(period, false, null as gw.api.web.job.JobWizardHelper, period.CPLine.CPModifiers)
    }
    
    // 'parent' attribute on Page (id=CommercialProperty_Modifiers) at CommercialProperty_Modifiers.pcf: line 9, column 66
    static function parent_3 (asOfDate :  java.util.Date, period :  PolicyPeriod) : pcf.api.Destination {
      return pcf.CommercialPropertyLinks.createDestination(period, asOfDate)
    }
    
    override property get CurrentLocation () : pcf.CommercialProperty_Modifiers {
      return super.CurrentLocation as pcf.CommercialProperty_Modifiers
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