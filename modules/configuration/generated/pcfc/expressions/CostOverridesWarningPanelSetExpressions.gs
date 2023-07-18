package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/common/ratingoverride/CostOverridesWarningPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class CostOverridesWarningPanelSetExpressions {
  @javax.annotation.Generated("config/web/pcf/line/common/ratingoverride/CostOverridesWarningPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class CostOverridesWarningPanelSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'visible' attribute on PanelSet (id=CostOverridesWarningPanelSet) at CostOverridesWarningPanelSet.pcf: line 7, column 129
    function visible_0 () : java.lang.Boolean {
      return (perm.System.viewratingoverrides or perm.System.editratingoverrides) and policyPeriod.hasAtLeastOneCostOverride()
    }
    
    property get policyPeriod () : PolicyPeriod {
      return getRequireValue("policyPeriod", 0) as PolicyPeriod
    }
    
    property set policyPeriod ($arg :  PolicyPeriod) {
      setRequireValue("policyPeriod", 0, $arg)
    }
    
    
  }
  
  
}