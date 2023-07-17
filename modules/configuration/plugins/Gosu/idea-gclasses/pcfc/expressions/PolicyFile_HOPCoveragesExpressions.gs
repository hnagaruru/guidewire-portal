package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/hop/policyfile/PolicyFile_HOPCoverages.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class PolicyFile_HOPCoveragesExpressions {
  @javax.annotation.Generated("config/web/pcf/line/hop/policyfile/PolicyFile_HOPCoverages.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PolicyFile_HOPCoveragesExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (policyPeriod :  PolicyPeriod, asOfDate :  Date) : int {
      return 0
    }
    
    // 'afterEnter' attribute on Page (id=PolicyFile_HOPCoverages) at PolicyFile_HOPCoverages.pcf: line 10, column 84
    function afterEnter_14 () : void {
      gw.api.web.PebblesUtil.addWebMessages(CurrentLocation, policyPeriod.PolicyFileMessages)
    }
    
    // 'canVisit' attribute on Page (id=PolicyFile_HOPCoverages) at PolicyFile_HOPCoverages.pcf: line 10, column 84
    static function canVisit_15 (asOfDate :  Date, policyPeriod :  PolicyPeriod) : java.lang.Boolean {
      return perm.PolicyPeriod.view(policyPeriod) and perm.System.pfiledetails
    }
    
    // 'parent' attribute on Page (id=PolicyFile_HOPCoverages) at PolicyFile_HOPCoverages.pcf: line 10, column 84
    static function parent_16 (asOfDate :  Date, policyPeriod :  PolicyPeriod) : pcf.api.Destination {
      return pcf.PolicyFile.createDestination(policyPeriod, asOfDate)
    }
    
    override property get CurrentLocation () : pcf.PolicyFile_HOPCoverages {
      return super.CurrentLocation as pcf.PolicyFile_HOPCoverages
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
  
  @javax.annotation.Generated("config/web/pcf/line/hop/policyfile/PolicyFile_HOPCoverages.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PolicyFile_HOPCoveragesScreenExpressionsImpl extends PolicyFile_HOPCoveragesExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on PanelRef at PolicyFile_HOPCoverages.pcf: line 29, column 60
    function def_onEnter_1 (def :  pcf.CoveragePartSelectionDV_HOPHomeowners) : void {
      def.onEnter(policyPeriod)
    }
    
    // 'def' attribute on PanelRef at PolicyFile_HOPCoverages.pcf: line 47, column 88
    function def_onEnter_10 (def :  pcf.HOPOptionalCoveragesPanelSet) : void {
      def.onEnter(policyPeriod.HOPLine, dwelling, false)
    }
    
    // 'def' attribute on PanelRef at PolicyFile_HOPCoverages.pcf: line 53, column 94
    function def_onEnter_12 (def :  pcf.HOPConditionsAndExclusionsPanelSet) : void {
      def.onEnter(policyPeriod.HOPLine, dwelling, false)
    }
    
    // 'def' attribute on PanelRef at PolicyFile_HOPCoverages.pcf: line 29, column 60
    function def_onEnter_3 (def :  pcf.CoveragePartSelectionDV_default) : void {
      def.onEnter(policyPeriod)
    }
    
    // 'def' attribute on PanelRef at PolicyFile_HOPCoverages.pcf: line 35, column 84
    function def_onEnter_6 (def :  pcf.HOPMainCoveragesPanelSet) : void {
      def.onEnter(policyPeriod.HOPLine, dwelling, false)
    }
    
    // 'def' attribute on PanelRef at PolicyFile_HOPCoverages.pcf: line 41, column 90
    function def_onEnter_8 (def :  pcf.HOPAdditionalCoveragesPanelSet) : void {
      def.onEnter(policyPeriod.HOPLine, dwelling, false)
    }
    
    // 'def' attribute on PanelRef at PolicyFile_HOPCoverages.pcf: line 47, column 88
    function def_refreshVariables_11 (def :  pcf.HOPOptionalCoveragesPanelSet) : void {
      def.refreshVariables(policyPeriod.HOPLine, dwelling, false)
    }
    
    // 'def' attribute on PanelRef at PolicyFile_HOPCoverages.pcf: line 53, column 94
    function def_refreshVariables_13 (def :  pcf.HOPConditionsAndExclusionsPanelSet) : void {
      def.refreshVariables(policyPeriod.HOPLine, dwelling, false)
    }
    
    // 'def' attribute on PanelRef at PolicyFile_HOPCoverages.pcf: line 29, column 60
    function def_refreshVariables_2 (def :  pcf.CoveragePartSelectionDV_HOPHomeowners) : void {
      def.refreshVariables(policyPeriod)
    }
    
    // 'def' attribute on PanelRef at PolicyFile_HOPCoverages.pcf: line 29, column 60
    function def_refreshVariables_4 (def :  pcf.CoveragePartSelectionDV_default) : void {
      def.refreshVariables(policyPeriod)
    }
    
    // 'def' attribute on PanelRef at PolicyFile_HOPCoverages.pcf: line 35, column 84
    function def_refreshVariables_7 (def :  pcf.HOPMainCoveragesPanelSet) : void {
      def.refreshVariables(policyPeriod.HOPLine, dwelling, false)
    }
    
    // 'def' attribute on PanelRef at PolicyFile_HOPCoverages.pcf: line 41, column 90
    function def_refreshVariables_9 (def :  pcf.HOPAdditionalCoveragesPanelSet) : void {
      def.refreshVariables(policyPeriod.HOPLine, dwelling, false)
    }
    
    // 'initialValue' attribute on Variable at PolicyFile_HOPCoverages.pcf: line 24, column 29
    function initialValue_0 () : HOPDwelling {
      return policyPeriod.HOPLine.HOPDwellings?.first()
    }
    
    // 'mode' attribute on PanelRef at PolicyFile_HOPCoverages.pcf: line 29, column 60
    function mode_5 () : java.lang.Object {
      return policyPeriod.Policy.Product.CodeIdentifier
    }
    
    property get dwelling () : HOPDwelling {
      return getVariableValue("dwelling", 1) as HOPDwelling
    }
    
    property set dwelling ($arg :  HOPDwelling) {
      setVariableValue("dwelling", 1, $arg)
    }
    
    
  }
  
  
}