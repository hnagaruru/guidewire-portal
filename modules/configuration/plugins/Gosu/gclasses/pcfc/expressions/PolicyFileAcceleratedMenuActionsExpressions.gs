package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/policyfile/PolicyFileAcceleratedMenuActions.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class PolicyFileAcceleratedMenuActionsExpressions {
  @javax.annotation.Generated("config/web/pcf/policyfile/PolicyFileAcceleratedMenuActions.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PolicyFileAcceleratedMenuActionsExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on MenuItemSetRef at PolicyFileAcceleratedMenuActions.pcf: line 18, column 52
    function def_onEnter_0 (def :  pcf.PolicyMenuItemSet_BusinessAuto) : void {
      def.onEnter(policyPeriod, asOfDate)
    }
    
    // 'def' attribute on MenuItemSetRef at PolicyFileAcceleratedMenuActions.pcf: line 18, column 52
    function def_onEnter_10 (def :  pcf.PolicyMenuItemSet_HOPHomeowners) : void {
      def.onEnter(policyPeriod, asOfDate)
    }
    
    // 'def' attribute on MenuItemSetRef at PolicyFileAcceleratedMenuActions.pcf: line 18, column 52
    function def_onEnter_12 (def :  pcf.PolicyMenuItemSet_InlandMarine) : void {
      def.onEnter(policyPeriod, asOfDate)
    }
    
    // 'def' attribute on MenuItemSetRef at PolicyFileAcceleratedMenuActions.pcf: line 18, column 52
    function def_onEnter_14 (def :  pcf.PolicyMenuItemSet_Manual) : void {
      def.onEnter(policyPeriod, asOfDate)
    }
    
    // 'def' attribute on MenuItemSetRef at PolicyFileAcceleratedMenuActions.pcf: line 18, column 52
    function def_onEnter_16 (def :  pcf.PolicyMenuItemSet_PersonalAuto) : void {
      def.onEnter(policyPeriod, asOfDate)
    }
    
    // 'def' attribute on MenuItemSetRef at PolicyFileAcceleratedMenuActions.pcf: line 18, column 52
    function def_onEnter_18 (def :  pcf.PolicyMenuItemSet_WorkersComp) : void {
      def.onEnter(policyPeriod, asOfDate)
    }
    
    // 'def' attribute on MenuItemSetRef at PolicyFileAcceleratedMenuActions.pcf: line 18, column 52
    function def_onEnter_2 (def :  pcf.PolicyMenuItemSet_BusinessOwners) : void {
      def.onEnter(policyPeriod, asOfDate)
    }
    
    // 'def' attribute on MenuItemSetRef at PolicyFileAcceleratedMenuActions.pcf: line 18, column 52
    function def_onEnter_4 (def :  pcf.PolicyMenuItemSet_CommercialPackage) : void {
      def.onEnter(policyPeriod, asOfDate)
    }
    
    // 'def' attribute on MenuItemSetRef at PolicyFileAcceleratedMenuActions.pcf: line 18, column 52
    function def_onEnter_6 (def :  pcf.PolicyMenuItemSet_CommercialProperty) : void {
      def.onEnter(policyPeriod, asOfDate)
    }
    
    // 'def' attribute on MenuItemSetRef at PolicyFileAcceleratedMenuActions.pcf: line 18, column 52
    function def_onEnter_8 (def :  pcf.PolicyMenuItemSet_GeneralLiability) : void {
      def.onEnter(policyPeriod, asOfDate)
    }
    
    // 'def' attribute on MenuItemSetRef at PolicyFileAcceleratedMenuActions.pcf: line 18, column 52
    function def_refreshVariables_1 (def :  pcf.PolicyMenuItemSet_BusinessAuto) : void {
      def.refreshVariables(policyPeriod, asOfDate)
    }
    
    // 'def' attribute on MenuItemSetRef at PolicyFileAcceleratedMenuActions.pcf: line 18, column 52
    function def_refreshVariables_11 (def :  pcf.PolicyMenuItemSet_HOPHomeowners) : void {
      def.refreshVariables(policyPeriod, asOfDate)
    }
    
    // 'def' attribute on MenuItemSetRef at PolicyFileAcceleratedMenuActions.pcf: line 18, column 52
    function def_refreshVariables_13 (def :  pcf.PolicyMenuItemSet_InlandMarine) : void {
      def.refreshVariables(policyPeriod, asOfDate)
    }
    
    // 'def' attribute on MenuItemSetRef at PolicyFileAcceleratedMenuActions.pcf: line 18, column 52
    function def_refreshVariables_15 (def :  pcf.PolicyMenuItemSet_Manual) : void {
      def.refreshVariables(policyPeriod, asOfDate)
    }
    
    // 'def' attribute on MenuItemSetRef at PolicyFileAcceleratedMenuActions.pcf: line 18, column 52
    function def_refreshVariables_17 (def :  pcf.PolicyMenuItemSet_PersonalAuto) : void {
      def.refreshVariables(policyPeriod, asOfDate)
    }
    
    // 'def' attribute on MenuItemSetRef at PolicyFileAcceleratedMenuActions.pcf: line 18, column 52
    function def_refreshVariables_19 (def :  pcf.PolicyMenuItemSet_WorkersComp) : void {
      def.refreshVariables(policyPeriod, asOfDate)
    }
    
    // 'def' attribute on MenuItemSetRef at PolicyFileAcceleratedMenuActions.pcf: line 18, column 52
    function def_refreshVariables_3 (def :  pcf.PolicyMenuItemSet_BusinessOwners) : void {
      def.refreshVariables(policyPeriod, asOfDate)
    }
    
    // 'def' attribute on MenuItemSetRef at PolicyFileAcceleratedMenuActions.pcf: line 18, column 52
    function def_refreshVariables_5 (def :  pcf.PolicyMenuItemSet_CommercialPackage) : void {
      def.refreshVariables(policyPeriod, asOfDate)
    }
    
    // 'def' attribute on MenuItemSetRef at PolicyFileAcceleratedMenuActions.pcf: line 18, column 52
    function def_refreshVariables_7 (def :  pcf.PolicyMenuItemSet_CommercialProperty) : void {
      def.refreshVariables(policyPeriod, asOfDate)
    }
    
    // 'def' attribute on MenuItemSetRef at PolicyFileAcceleratedMenuActions.pcf: line 18, column 52
    function def_refreshVariables_9 (def :  pcf.PolicyMenuItemSet_GeneralLiability) : void {
      def.refreshVariables(policyPeriod, asOfDate)
    }
    
    // 'mode' attribute on MenuItemSetRef at PolicyFileAcceleratedMenuActions.pcf: line 18, column 52
    function mode_20 () : java.lang.Object {
      return policyPeriod.Policy.Product.PublicID
    }
    
    property get asOfDate () : java.util.Date {
      return getRequireValue("asOfDate", 0) as java.util.Date
    }
    
    property set asOfDate ($arg :  java.util.Date) {
      setRequireValue("asOfDate", 0, $arg)
    }
    
    property get policyPeriod () : PolicyPeriod {
      return getRequireValue("policyPeriod", 0) as PolicyPeriod
    }
    
    property set policyPeriod ($arg :  PolicyPeriod) {
      setRequireValue("policyPeriod", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/policyfile/PolicyFileAcceleratedMenuActions.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PolicyPeriodEffDateIDExpressionsImpl extends PolicyFileAcceleratedMenuActionsExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on Link (id=PolicyPeriodEffDateID) at PolicyFileAcceleratedMenuActions.pcf: line 28, column 31
    function action_24 () : void {
      gw.web.policy.PolicyPeriodDatePickerHelper.findPolicyPeriodAsOfDate(ArgValue, policyPeriod, \ p, d -> PolicyFileForward.go(p, d))
    }
    
    // 'value' attribute on Link (id=PolicyPeriodEffDateID) at PolicyFileAcceleratedMenuActions.pcf: line 28, column 31
    function defaultSetter_23 (__VALUE_TO_SET :  java.lang.Object) : void {
      ArgValue = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'argInitialValue' attribute on Link (id=PolicyPeriodEffDateID) at PolicyFileAcceleratedMenuActions.pcf: line 28, column 31
    function initArg_25 () : void {
      ArgValue = asOfDate;
    }
    
    // 'action' attribute on Link (id=PolicyPeriodEffDateID) at PolicyFileAcceleratedMenuActions.pcf: line 28, column 31
    function onChange_21 () : void {
      gw.web.policy.PolicyPeriodDatePickerHelper.findPolicyPeriodAsOfDate(ArgValue, policyPeriod, \ p, d -> PolicyFileForward.go(p, d))
    }
    
    // Link (id=PolicyPeriodEffDateID) at PolicyFileAcceleratedMenuActions.pcf: line 28, column 31
    function value_22 () : java.util.Date {
      return ArgValue
    }
    
    property get ArgValue () : java.util.Date {
      return getArgValue(1) as java.util.Date
    }
    
    property set ArgValue ($arg :  java.util.Date) {
      setArgValue(1, $arg)
    }
    
    
  }
  
  
}