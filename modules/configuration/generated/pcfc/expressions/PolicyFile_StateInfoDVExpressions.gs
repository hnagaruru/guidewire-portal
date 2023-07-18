package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/ba/policyfile/PolicyFile_StateInfoDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class PolicyFile_StateInfoDVExpressions {
  @javax.annotation.Generated("config/web/pcf/line/ba/policyfile/PolicyFile_StateInfoDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends PolicyFile_StateInfoDVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TypeKeyCell (id=States_Cell) at PolicyFile_StateInfoDV.pcf: line 29, column 47
    function valueRoot_3 () : java.lang.Object {
      return jurisdiction
    }
    
    // 'value' attribute on TypeKeyCell (id=States_Cell) at PolicyFile_StateInfoDV.pcf: line 29, column 47
    function value_2 () : typekey.Jurisdiction {
      return jurisdiction.State
    }
    
    property get jurisdiction () : entity.BAJurisdiction {
      return getIteratedValue(1) as entity.BAJurisdiction
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/ba/policyfile/PolicyFile_StateInfoDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PolicyFile_StateInfoDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on PanelRef at PolicyFile_StateInfoDV.pcf: line 50, column 124
    function def_onEnter_10 (def :  pcf.AdditionalExclusionsAndConditionsPanelSet) : void {
      def.onEnter(selectedState, baLine.AdditionalCoverageCategories, true, null)
    }
    
    // 'def' attribute on PanelRef at PolicyFile_StateInfoDV.pcf: line 57, column 75
    function def_onEnter_12 (def :  pcf.BusinessAutoStateModifierPanelSet) : void {
      def.onEnter(baLine, selectedState)
    }
    
    // 'def' attribute on PanelRef at PolicyFile_StateInfoDV.pcf: line 38, column 73
    function def_onEnter_6 (def :  pcf.BAStateCoveragesPanelSet) : void {
      def.onEnter(selectedState, baLine, false)
    }
    
    // 'def' attribute on PanelRef at PolicyFile_StateInfoDV.pcf: line 44, column 110
    function def_onEnter_8 (def :  pcf.AdditionalCoveragesPanelSet) : void {
      def.onEnter(selectedState, baLine.AdditionalCoverageCategories, true, null)
    }
    
    // 'def' attribute on PanelRef at PolicyFile_StateInfoDV.pcf: line 50, column 124
    function def_refreshVariables_11 (def :  pcf.AdditionalExclusionsAndConditionsPanelSet) : void {
      def.refreshVariables(selectedState, baLine.AdditionalCoverageCategories, true, null)
    }
    
    // 'def' attribute on PanelRef at PolicyFile_StateInfoDV.pcf: line 57, column 75
    function def_refreshVariables_13 (def :  pcf.BusinessAutoStateModifierPanelSet) : void {
      def.refreshVariables(baLine, selectedState)
    }
    
    // 'def' attribute on PanelRef at PolicyFile_StateInfoDV.pcf: line 38, column 73
    function def_refreshVariables_7 (def :  pcf.BAStateCoveragesPanelSet) : void {
      def.refreshVariables(selectedState, baLine, false)
    }
    
    // 'def' attribute on PanelRef at PolicyFile_StateInfoDV.pcf: line 44, column 110
    function def_refreshVariables_9 (def :  pcf.AdditionalCoveragesPanelSet) : void {
      def.refreshVariables(selectedState, baLine.AdditionalCoverageCategories, true, null)
    }
    
    // 'initialValue' attribute on Variable at PolicyFile_StateInfoDV.pcf: line 15, column 45
    function initialValue_0 () : productmodel.BusinessAutoLine {
      return policyPeriod.BusinessAutoLine
    }
    
    // 'value' attribute on TypeKeyCell (id=States_Cell) at PolicyFile_StateInfoDV.pcf: line 29, column 47
    function sortValue_1 (jurisdiction :  entity.BAJurisdiction) : java.lang.Object {
      return jurisdiction.State
    }
    
    // 'value' attribute on RowIterator at PolicyFile_StateInfoDV.pcf: line 22, column 45
    function value_5 () : entity.BAJurisdiction[] {
      return baLine.GaragingJurisdictions
    }
    
    // 'visible' attribute on Card (id=ModifierCard) at PolicyFile_StateInfoDV.pcf: line 55, column 49
    function visible_14 () : java.lang.Boolean {
      return policyPeriod.CanViewModifiers
    }
    
    property get baLine () : productmodel.BusinessAutoLine {
      return getVariableValue("baLine", 0) as productmodel.BusinessAutoLine
    }
    
    property set baLine ($arg :  productmodel.BusinessAutoLine) {
      setVariableValue("baLine", 0, $arg)
    }
    
    property get policyPeriod () : PolicyPeriod {
      return getRequireValue("policyPeriod", 0) as PolicyPeriod
    }
    
    property set policyPeriod ($arg :  PolicyPeriod) {
      setRequireValue("policyPeriod", 0, $arg)
    }
    
    property get selectedState () : BAJurisdiction {
      return getCurrentSelection(0) as BAJurisdiction
    }
    
    property set selectedState ($arg :  BAJurisdiction) {
      setCurrentSelection(0, $arg)
    }
    
    
  }
  
  
}