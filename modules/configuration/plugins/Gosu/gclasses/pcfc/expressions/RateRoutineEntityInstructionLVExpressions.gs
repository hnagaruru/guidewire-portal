package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/forms/RateRoutineEntityInstructionLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class RateRoutineEntityInstructionLVExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/forms/RateRoutineEntityInstructionLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends RateRoutineEntityInstructionLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on RadioButtonCell (id=SelectRadio_Cell) at RateRoutineEntityInstructionLV.pcf: line 33, column 32
    function action_1 () : void {
      calcStep.setInScopeValue(inScopeUsage.Path)
    }
    
    // 'label' attribute on Link (id=FieldType) at RateRoutineEntityInstructionLV.pcf: line 45, column 54
    function label_8 () : java.lang.Object {
      return inScopeUsage.UserFriendlyDataType
    }
    
    // 'outputConversion' attribute on TextCell (id=FieldName_Cell) at RateRoutineEntityInstructionLV.pcf: line 38, column 50
    function outputConversion_4 (VALUE :  java.lang.String) : java.lang.String {
      return VALUE==null ? DisplayKey.get("Web.Rating.Flow.CalcRoutine.EntityPopup.ThisEntity") : VALUE
    }
    
    // 'tooltip' attribute on Link (id=FieldType) at RateRoutineEntityInstructionLV.pcf: line 45, column 54
    function tooltip_9 () : java.lang.String {
      return inScopeUsage.FeatureType.Name
    }
    
    // 'value' attribute on TextCell (id=FieldName_Cell) at RateRoutineEntityInstructionLV.pcf: line 38, column 50
    function valueRoot_6 () : java.lang.Object {
      return inScopeUsage
    }
    
    // 'value' attribute on RadioButtonCell (id=SelectRadio_Cell) at RateRoutineEntityInstructionLV.pcf: line 33, column 32
    function value_2 () : Boolean {
      return inScopeUsage.Path == calcStep.InScopeValue
    }
    
    // 'value' attribute on TextCell (id=FieldName_Cell) at RateRoutineEntityInstructionLV.pcf: line 38, column 50
    function value_5 () : java.lang.String {
      return inScopeUsage.UserFriendlyPath
    }
    
    property get inScopeUsage () : gw.rating.flow.util.InScopeUsage {
      return getIteratedValue(1) as gw.rating.flow.util.InScopeUsage
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/admin/forms/RateRoutineEntityInstructionLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class RateRoutineEntityInstructionLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=FieldName_Cell) at RateRoutineEntityInstructionLV.pcf: line 38, column 50
    function sortValue_0 (inScopeUsage :  gw.rating.flow.util.InScopeUsage) : java.lang.Object {
      return inScopeUsage.UserFriendlyPath
    }
    
    // 'validationExpression' attribute on ListViewPanel (id=RateRoutineEntityInstructionLV) at RateRoutineEntityInstructionLV.pcf: line 7, column 145
    function validationExpression_11 () : java.lang.Object {
      return helper.noneSelected() ? DisplayKey.get("Validation.Rating.RateRoutineDefinition.SelectInScopeItem") : null
    }
    
    // 'value' attribute on RowIterator (id=InScopeUsagesIterator) at RateRoutineEntityInstructionLV.pcf: line 23, column 54
    function value_10 () : gw.rating.flow.util.InScopeUsage[] {
      return inScopeUsages
    }
    
    property get calcStep () : CalcStepDefinition {
      return getRequireValue("calcStep", 0) as CalcStepDefinition
    }
    
    property set calcStep ($arg :  CalcStepDefinition) {
      setRequireValue("calcStep", 0, $arg)
    }
    
    property get helper () : gw.pcf.rating.flow.RateRoutineEntityInstructionPopupHelper {
      return getRequireValue("helper", 0) as gw.pcf.rating.flow.RateRoutineEntityInstructionPopupHelper
    }
    
    property set helper ($arg :  gw.pcf.rating.flow.RateRoutineEntityInstructionPopupHelper) {
      setRequireValue("helper", 0, $arg)
    }
    
    property get inScopeUsages () : gw.rating.flow.util.InScopeUsage[] {
      return getRequireValue("inScopeUsages", 0) as gw.rating.flow.util.InScopeUsage[]
    }
    
    property set inScopeUsages ($arg :  gw.rating.flow.util.InScopeUsage[]) {
      setRequireValue("inScopeUsages", 0, $arg)
    }
    
    
  }
  
  
}