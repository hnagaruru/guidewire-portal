package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/ba/policy/BALinePanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class BALinePanelSetExpressions {
  @javax.annotation.Generated("config/web/pcf/line/ba/policy/BALinePanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class BALinePanelSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on PanelRef (id=PreferredCoverageCurrencySelectorRef) at BALinePanelSet.pcf: line 15, column 50
    function def_onEnter_0 (def :  pcf.PreferredCoverageCurrencyPanelSet) : void {
      def.onEnter(baLine, openForEdit, null)
    }
    
    // 'def' attribute on PanelRef at BALinePanelSet.pcf: line 21, column 63
    function def_onEnter_2 (def :  pcf.BALineCoveragePanelSet) : void {
      def.onEnter( baLine, openForEdit)
    }
    
    // 'def' attribute on PanelRef at BALinePanelSet.pcf: line 27, column 103
    function def_onEnter_4 (def :  pcf.AdditionalCoveragesPanelSet) : void {
      def.onEnter(baLine, baLine.AdditionalCoverageCategories, true, null)
    }
    
    // 'def' attribute on PanelRef at BALinePanelSet.pcf: line 33, column 117
    function def_onEnter_6 (def :  pcf.AdditionalExclusionsAndConditionsPanelSet) : void {
      def.onEnter(baLine, baLine.AdditionalCoverageCategories, true, null)
    }
    
    // 'def' attribute on PanelRef at BALinePanelSet.pcf: line 39, column 73
    function def_onEnter_8 (def :  pcf.AdditionalInsuredsDV) : void {
      def.onEnter(baLine, openForEdit, true, false)
    }
    
    // 'def' attribute on PanelRef (id=PreferredCoverageCurrencySelectorRef) at BALinePanelSet.pcf: line 15, column 50
    function def_refreshVariables_1 (def :  pcf.PreferredCoverageCurrencyPanelSet) : void {
      def.refreshVariables(baLine, openForEdit, null)
    }
    
    // 'def' attribute on PanelRef at BALinePanelSet.pcf: line 21, column 63
    function def_refreshVariables_3 (def :  pcf.BALineCoveragePanelSet) : void {
      def.refreshVariables( baLine, openForEdit)
    }
    
    // 'def' attribute on PanelRef at BALinePanelSet.pcf: line 27, column 103
    function def_refreshVariables_5 (def :  pcf.AdditionalCoveragesPanelSet) : void {
      def.refreshVariables(baLine, baLine.AdditionalCoverageCategories, true, null)
    }
    
    // 'def' attribute on PanelRef at BALinePanelSet.pcf: line 33, column 117
    function def_refreshVariables_7 (def :  pcf.AdditionalExclusionsAndConditionsPanelSet) : void {
      def.refreshVariables(baLine, baLine.AdditionalCoverageCategories, true, null)
    }
    
    // 'def' attribute on PanelRef at BALinePanelSet.pcf: line 39, column 73
    function def_refreshVariables_9 (def :  pcf.AdditionalInsuredsDV) : void {
      def.refreshVariables(baLine, openForEdit, true, false)
    }
    
    property get baLine () : BusinessAutoLine {
      return getRequireValue("baLine", 0) as BusinessAutoLine
    }
    
    property set baLine ($arg :  BusinessAutoLine) {
      setRequireValue("baLine", 0, $arg)
    }
    
    property get openForEdit () : boolean {
      return getRequireValue("openForEdit", 0) as java.lang.Boolean
    }
    
    property set openForEdit ($arg :  boolean) {
      setRequireValue("openForEdit", 0, $arg)
    }
    
    
  }
  
  
}