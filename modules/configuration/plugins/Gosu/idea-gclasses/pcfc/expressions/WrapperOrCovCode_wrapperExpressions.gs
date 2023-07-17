package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/rating/WrapperOrCovCode.wrapper.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class WrapperOrCovCode_wrapperExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/rating/WrapperOrCovCode.wrapper.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class WrapperOrCovCodeExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'pickLocation' attribute on PickerCell (id=wrapperName_Cell) at WrapperOrCovCode.wrapper.pcf: line 26, column 37
    function action_0 () : void {
      CoverageWrapperSearchPopup.push(parameterSet.PolicyLinePatternCode)
    }
    
    // 'pickLocation' attribute on PickerCell (id=wrapperName_Cell) at WrapperOrCovCode.wrapper.pcf: line 26, column 37
    function action_dest_1 () : pcf.api.Destination {
      return pcf.CoverageWrapperSearchPopup.createDestination(parameterSet.PolicyLinePatternCode)
    }
    
    // 'value' attribute on PickerCell (id=wrapperName_Cell) at WrapperOrCovCode.wrapper.pcf: line 26, column 37
    function defaultSetter_5 (__VALUE_TO_SET :  java.lang.Object) : void {
      parameter.WrapperClass = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'outputConversion' attribute on PickerCell (id=wrapperName_Cell) at WrapperOrCovCode.wrapper.pcf: line 26, column 37
    function outputConversion_3 (VALUE :  java.lang.String) : java.lang.String {
      return helper.getWrapperNameFromWrapperTypeName(parameterSet.PolicyLinePatternCode, VALUE)
    }
    
    // 'validationExpression' attribute on PickerCell (id=wrapperName_Cell) at WrapperOrCovCode.wrapper.pcf: line 26, column 37
    function validationExpression_2 () : java.lang.Object {
      return helper.validateWrapper(parameterSet.PolicyLinePatternCode, parameter.WrapperClass)
    }
    
    // 'value' attribute on PickerCell (id=wrapperName_Cell) at WrapperOrCovCode.wrapper.pcf: line 26, column 37
    function valueRoot_6 () : java.lang.Object {
      return parameter
    }
    
    // 'value' attribute on PickerCell (id=wrapperName_Cell) at WrapperOrCovCode.wrapper.pcf: line 26, column 37
    function value_4 () : java.lang.String {
      return parameter.WrapperClass
    }
    
    property get helper () : gw.pcf.rating.flow.RatingParameterSetScreenHelper {
      return getRequireValue("helper", 0) as gw.pcf.rating.flow.RatingParameterSetScreenHelper
    }
    
    property set helper ($arg :  gw.pcf.rating.flow.RatingParameterSetScreenHelper) {
      setRequireValue("helper", 0, $arg)
    }
    
    property get parameter () : CalcRoutineParameter {
      return getRequireValue("parameter", 0) as CalcRoutineParameter
    }
    
    property set parameter ($arg :  CalcRoutineParameter) {
      setRequireValue("parameter", 0, $arg)
    }
    
    property get parameterSet () : CalcRoutineParameterSet {
      return getRequireValue("parameterSet", 0) as CalcRoutineParameterSet
    }
    
    property set parameterSet ($arg :  CalcRoutineParameterSet) {
      setRequireValue("parameterSet", 0, $arg)
    }
    
    
  }
  
  
}