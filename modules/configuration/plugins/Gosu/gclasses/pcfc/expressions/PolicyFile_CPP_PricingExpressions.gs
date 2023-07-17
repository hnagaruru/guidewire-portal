package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/cpp/policyfile/PolicyFile_CPP_Pricing.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class PolicyFile_CPP_PricingExpressions {
  @javax.annotation.Generated("config/web/pcf/line/cpp/policyfile/PolicyFile_CPP_Pricing.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PolicyFile_CPP_PricingExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (policyPeriod :  PolicyPeriod, asOfDate :  java.util.Date) : int {
      return 0
    }
    
    // 'afterEnter' attribute on Page (id=PolicyFile_CPP_Pricing) at PolicyFile_CPP_Pricing.pcf: line 10, column 64
    function afterEnter_11 () : void {
      gw.api.web.PebblesUtil.addWebMessages(CurrentLocation, slicePeriod.PolicyFileMessages)
    }
    
    // 'canVisit' attribute on Page (id=PolicyFile_CPP_Pricing) at PolicyFile_CPP_Pricing.pcf: line 10, column 64
    static function canVisit_12 (asOfDate :  java.util.Date, policyPeriod :  PolicyPeriod) : java.lang.Boolean {
      return perm.PolicyPeriod.view(policyPeriod) and perm.System.pfilepricing
    }
    
    // 'def' attribute on PanelRef at PolicyFile_CPP_Pricing.pcf: line 33, column 58
    function def_onEnter_2 (def :  pcf.CostOverridesWarningPanelSet) : void {
      def.onEnter(slicePeriod)
    }
    
    // 'def' attribute on PanelRef at PolicyFile_CPP_Pricing.pcf: line 35, column 56
    function def_onEnter_4 (def :  pcf.PolicyFile_Quote_SummaryDV) : void {
      def.onEnter(slicePeriod)
    }
    
    // 'def' attribute on PanelRef at PolicyFile_CPP_Pricing.pcf: line 42, column 52
    function def_onEnter_6 (def :  pcf.RatingPanelSet_CommercialPackage) : void {
      def.onEnter(slicePeriod, null, isEditable)
    }
    
    // 'def' attribute on PanelRef at PolicyFile_CPP_Pricing.pcf: line 42, column 52
    function def_onEnter_8 (def :  pcf.RatingPanelSet_default) : void {
      def.onEnter(slicePeriod, null, isEditable)
    }
    
    // 'def' attribute on PanelRef at PolicyFile_CPP_Pricing.pcf: line 33, column 58
    function def_refreshVariables_3 (def :  pcf.CostOverridesWarningPanelSet) : void {
      def.refreshVariables(slicePeriod)
    }
    
    // 'def' attribute on PanelRef at PolicyFile_CPP_Pricing.pcf: line 35, column 56
    function def_refreshVariables_5 (def :  pcf.PolicyFile_Quote_SummaryDV) : void {
      def.refreshVariables(slicePeriod)
    }
    
    // 'def' attribute on PanelRef at PolicyFile_CPP_Pricing.pcf: line 42, column 52
    function def_refreshVariables_7 (def :  pcf.RatingPanelSet_CommercialPackage) : void {
      def.refreshVariables(slicePeriod, null, isEditable)
    }
    
    // 'def' attribute on PanelRef at PolicyFile_CPP_Pricing.pcf: line 42, column 52
    function def_refreshVariables_9 (def :  pcf.RatingPanelSet_default) : void {
      def.refreshVariables(slicePeriod, null, isEditable)
    }
    
    // 'initialValue' attribute on Variable at PolicyFile_CPP_Pricing.pcf: line 22, column 35
    function initialValue_0 () : entity.PolicyPeriod {
      return policyPeriod.getSlice(asOfDate)
    }
    
    // 'initialValue' attribute on Variable at PolicyFile_CPP_Pricing.pcf: line 26, column 23
    function initialValue_1 () : boolean {
      return slicePeriod.OpenForEdit
    }
    
    // 'mode' attribute on PanelRef at PolicyFile_CPP_Pricing.pcf: line 42, column 52
    function mode_10 () : java.lang.Object {
      return slicePeriod.Policy.ProductCode
    }
    
    // 'parent' attribute on Page (id=PolicyFile_CPP_Pricing) at PolicyFile_CPP_Pricing.pcf: line 10, column 64
    static function parent_13 (asOfDate :  java.util.Date, policyPeriod :  PolicyPeriod) : pcf.api.Destination {
      return pcf.PolicyFile.createDestination(policyPeriod, asOfDate)
    }
    
    override property get CurrentLocation () : pcf.PolicyFile_CPP_Pricing {
      return super.CurrentLocation as pcf.PolicyFile_CPP_Pricing
    }
    
    property get asOfDate () : java.util.Date {
      return getVariableValue("asOfDate", 0) as java.util.Date
    }
    
    property set asOfDate ($arg :  java.util.Date) {
      setVariableValue("asOfDate", 0, $arg)
    }
    
    property get isEditable () : boolean {
      return getVariableValue("isEditable", 0) as java.lang.Boolean
    }
    
    property set isEditable ($arg :  boolean) {
      setVariableValue("isEditable", 0, $arg)
    }
    
    property get policyPeriod () : PolicyPeriod {
      return getVariableValue("policyPeriod", 0) as PolicyPeriod
    }
    
    property set policyPeriod ($arg :  PolicyPeriod) {
      setVariableValue("policyPeriod", 0, $arg)
    }
    
    property get slicePeriod () : entity.PolicyPeriod {
      return getVariableValue("slicePeriod", 0) as entity.PolicyPeriod
    }
    
    property set slicePeriod ($arg :  entity.PolicyPeriod) {
      setVariableValue("slicePeriod", 0, $arg)
    }
    
    
  }
  
  
}