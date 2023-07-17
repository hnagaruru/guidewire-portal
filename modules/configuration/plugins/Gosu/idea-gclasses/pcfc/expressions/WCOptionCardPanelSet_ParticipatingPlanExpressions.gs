package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/wc/policy/WCOptionCardPanelSet.ParticipatingPlan.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class WCOptionCardPanelSet_ParticipatingPlanExpressions {
  @javax.annotation.Generated("config/web/pcf/line/wc/policy/WCOptionCardPanelSet.ParticipatingPlan.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class WCOptionCardPanelSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on RangeInput (id=PlanID_Input) at WCOptionCardPanelSet.ParticipatingPlan.pcf: line 25, column 56
    function defaultSetter_1 (__VALUE_TO_SET :  java.lang.Object) : void {
      wcLine.ParticipatingPlan.PlanID = (__VALUE_TO_SET as typekey.WCParticipatingPlanID)
    }
    
    // 'value' attribute on TextInput (id=LossConversionFactor_Input) at WCOptionCardPanelSet.ParticipatingPlan.pcf: line 39, column 47
    function defaultSetter_12 (__VALUE_TO_SET :  java.lang.Object) : void {
      wcLine.ParticipatingPlan.LossConversionFactor = (__VALUE_TO_SET as java.math.BigDecimal)
    }
    
    // 'value' attribute on TextInput (id=Retention_Input) at WCOptionCardPanelSet.ParticipatingPlan.pcf: line 32, column 47
    function defaultSetter_8 (__VALUE_TO_SET :  java.lang.Object) : void {
      wcLine.ParticipatingPlan.Retention = (__VALUE_TO_SET as java.math.BigDecimal)
    }
    
    // 'valueRange' attribute on RangeInput (id=PlanID_Input) at WCOptionCardPanelSet.ParticipatingPlan.pcf: line 25, column 56
    function valueRange_3 () : java.lang.Object {
      return wcLine.getAvailableParticipatingPlanIDs()
    }
    
    // 'value' attribute on RangeInput (id=PlanID_Input) at WCOptionCardPanelSet.ParticipatingPlan.pcf: line 25, column 56
    function valueRoot_2 () : java.lang.Object {
      return wcLine.ParticipatingPlan
    }
    
    // 'value' attribute on RangeInput (id=PlanID_Input) at WCOptionCardPanelSet.ParticipatingPlan.pcf: line 25, column 56
    function value_0 () : typekey.WCParticipatingPlanID {
      return wcLine.ParticipatingPlan.PlanID
    }
    
    // 'value' attribute on TextInput (id=LossConversionFactor_Input) at WCOptionCardPanelSet.ParticipatingPlan.pcf: line 39, column 47
    function value_11 () : java.math.BigDecimal {
      return wcLine.ParticipatingPlan.LossConversionFactor
    }
    
    // 'value' attribute on TextInput (id=Retention_Input) at WCOptionCardPanelSet.ParticipatingPlan.pcf: line 32, column 47
    function value_7 () : java.math.BigDecimal {
      return wcLine.ParticipatingPlan.Retention
    }
    
    // 'valueRange' attribute on RangeInput (id=PlanID_Input) at WCOptionCardPanelSet.ParticipatingPlan.pcf: line 25, column 56
    function verifyValueRangeIsAllowedType_4 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=PlanID_Input) at WCOptionCardPanelSet.ParticipatingPlan.pcf: line 25, column 56
    function verifyValueRangeIsAllowedType_4 ($$arg :  typekey.WCParticipatingPlanID[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=PlanID_Input) at WCOptionCardPanelSet.ParticipatingPlan.pcf: line 25, column 56
    function verifyValueRange_5 () : void {
      var __valueRangeArg = wcLine.getAvailableParticipatingPlanIDs()
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_4(__valueRangeArg)
    }
    
    property get openForEdit () : boolean {
      return getRequireValue("openForEdit", 0) as java.lang.Boolean
    }
    
    property set openForEdit ($arg :  boolean) {
      setRequireValue("openForEdit", 0, $arg)
    }
    
    property get wcLine () : WorkersCompLine {
      return getRequireValue("wcLine", 0) as WorkersCompLine
    }
    
    property set wcLine ($arg :  WorkersCompLine) {
      setRequireValue("wcLine", 0, $arg)
    }
    
    
  }
  
  
}