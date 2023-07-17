package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/bop/policy/AdditionalCoveragesCardPanelSet.BusinessOwners.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class AdditionalCoveragesCardPanelSet_BusinessOwnersExpressions {
  @javax.annotation.Generated("config/web/pcf/line/bop/policy/AdditionalCoveragesCardPanelSet.BusinessOwners.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class AdditionalCoveragesCardPanelSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on PanelRef at AdditionalCoveragesCardPanelSet.BusinessOwners.pcf: line 21, column 38
    function def_onEnter_2 (def :  pcf.AdditionalCoveragesPanelSet) : void {
      def.onEnter(bopLocation, new String[]{"BOPLocationCat", "BOPCrimeCat", "BOPIncomeExpenseCat"}, true, null)
    }
    
    // 'def' attribute on PanelRef at AdditionalCoveragesCardPanelSet.BusinessOwners.pcf: line 21, column 38
    function def_refreshVariables_3 (def :  pcf.AdditionalCoveragesPanelSet) : void {
      def.refreshVariables(bopLocation, new String[]{"BOPLocationCat", "BOPCrimeCat", "BOPIncomeExpenseCat"}, true, null)
    }
    
    // 'initialValue' attribute on Variable at AdditionalCoveragesCardPanelSet.BusinessOwners.pcf: line 18, column 27
    function initialValue_0 () : BOPLocation {
      return polLocation.Branch.BOPLine.getBOPLocationForPolicyLocation(polLocation)
    }
    
    // 'visible' attribute on PanelRef at AdditionalCoveragesCardPanelSet.BusinessOwners.pcf: line 21, column 38
    function visible_1 () : java.lang.Boolean {
      return bopLocation != null
    }
    
    property get bopLocation () : BOPLocation {
      return getVariableValue("bopLocation", 0) as BOPLocation
    }
    
    property set bopLocation ($arg :  BOPLocation) {
      setVariableValue("bopLocation", 0, $arg)
    }
    
    property get openForEdit () : boolean {
      return getRequireValue("openForEdit", 0) as java.lang.Boolean
    }
    
    property set openForEdit ($arg :  boolean) {
      setRequireValue("openForEdit", 0, $arg)
    }
    
    property get polLocation () : PolicyLocation {
      return getRequireValue("polLocation", 0) as PolicyLocation
    }
    
    property set polLocation ($arg :  PolicyLocation) {
      setRequireValue("polLocation", 0, $arg)
    }
    
    
  }
  
  
}