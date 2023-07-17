package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/forms/RateRoutineEntityLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class RateRoutineEntityLVExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/forms/RateRoutineEntityLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends RateRoutineEntityLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on RadioButtonCell (id=SelectRadio_Cell) at RateRoutineEntityLV.pcf: line 32, column 143
    function action_1 () : void {
      {valueDelegate.InScopeValue = inScopeUsage.Path; valueDelegate.InScopeValueType = inScopeUsage.FeatureType as String; valueDelegate.InScopeValueIsModifier = inScopeUsage.IsModifier; valueDelegate.CovTermCode = inScopeUsage.CovTermPattern.PublicID}
    }
    
    // 'label' attribute on Link (id=FieldType) at RateRoutineEntityLV.pcf: line 44, column 54
    function label_8 () : java.lang.Object {
      return inScopeUsage.UserFriendlyDataType
    }
    
    // 'outputConversion' attribute on TextCell (id=FieldName_Cell) at RateRoutineEntityLV.pcf: line 37, column 50
    function outputConversion_4 (VALUE :  java.lang.String) : java.lang.String {
      return VALUE==null ? DisplayKey.get("Web.Rating.Flow.CalcRoutine.EntityPopup.ThisEntity") : VALUE
    }
    
    // 'tooltip' attribute on Link (id=FieldType) at RateRoutineEntityLV.pcf: line 44, column 54
    function tooltip_9 () : java.lang.String {
      return inScopeUsage.FeatureType.Name
    }
    
    // 'value' attribute on TextCell (id=FieldName_Cell) at RateRoutineEntityLV.pcf: line 37, column 50
    function valueRoot_6 () : java.lang.Object {
      return inScopeUsage
    }
    
    // 'value' attribute on RadioButtonCell (id=SelectRadio_Cell) at RateRoutineEntityLV.pcf: line 32, column 143
    function value_2 () : java.lang.Boolean {
      return inScopeUsage.Path == valueDelegate.InScopeValue and (inScopeUsage.FeatureType as String) == valueDelegate.InScopeValueType
    }
    
    // 'value' attribute on TextCell (id=FieldName_Cell) at RateRoutineEntityLV.pcf: line 37, column 50
    function value_5 () : java.lang.String {
      return inScopeUsage.UserFriendlyPath
    }
    
    property get inScopeUsage () : gw.rating.flow.util.InScopeUsage {
      return getIteratedValue(1) as gw.rating.flow.util.InScopeUsage
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/admin/forms/RateRoutineEntityLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class RateRoutineEntityLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=FieldName_Cell) at RateRoutineEntityLV.pcf: line 37, column 50
    function sortValue_0 (inScopeUsage :  gw.rating.flow.util.InScopeUsage) : java.lang.Object {
      return inScopeUsage.UserFriendlyPath
    }
    
    // 'validationExpression' attribute on ListViewPanel (id=RateRoutineEntityLV) at RateRoutineEntityLV.pcf: line 7, column 145
    function validationExpression_11 () : java.lang.Object {
      return helper.noneSelected() ? DisplayKey.get("Validation.Rating.RateRoutineDefinition.SelectInScopeItem") : null
    }
    
    // 'value' attribute on RowIterator (id=InScopeUsagesIterator) at RateRoutineEntityLV.pcf: line 23, column 74
    function value_10 () : java.util.List<gw.rating.flow.util.InScopeUsage> {
      return inScopeUsages
    }
    
    property get helper () : gw.pcf.rating.flow.RateRoutineEntityPopupHelper {
      return getRequireValue("helper", 0) as gw.pcf.rating.flow.RateRoutineEntityPopupHelper
    }
    
    property set helper ($arg :  gw.pcf.rating.flow.RateRoutineEntityPopupHelper) {
      setRequireValue("helper", 0, $arg)
    }
    
    property get inScopeUsages () : List<gw.rating.flow.util.InScopeUsage> {
      return getRequireValue("inScopeUsages", 0) as List<gw.rating.flow.util.InScopeUsage>
    }
    
    property set inScopeUsages ($arg :  List<gw.rating.flow.util.InScopeUsage>) {
      setRequireValue("inScopeUsages", 0, $arg)
    }
    
    property get valueDelegate () : CalcStepValueDelegate {
      return getRequireValue("valueDelegate", 0) as CalcStepValueDelegate
    }
    
    property set valueDelegate ($arg :  CalcStepValueDelegate) {
      setRequireValue("valueDelegate", 0, $arg)
    }
    
    
  }
  
  
}