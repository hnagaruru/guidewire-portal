package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/rating/WrapperOrCovCode.coverage.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class WrapperOrCovCode_coverageExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/rating/WrapperOrCovCode.coverage.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class WrapperOrCovCodeExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'pickLocation' attribute on PickerCell (id=ParameterCoveragePattern_Cell) at WrapperOrCovCode.coverage.pcf: line 32, column 20
    function action_1 () : void {
      CoveragePatternSearchByLinePatternPopup.push(linePattern, CoveragePatternSearchType.TC_COVERAGE)
    }
    
    // 'pickLocation' attribute on PickerCell (id=ParameterCoveragePattern_Cell) at WrapperOrCovCode.coverage.pcf: line 32, column 20
    function action_dest_2 () : pcf.api.Destination {
      return pcf.CoveragePatternSearchByLinePatternPopup.createDestination(linePattern, CoveragePatternSearchType.TC_COVERAGE)
    }
    
    // 'value' attribute on PickerCell (id=ParameterCoveragePattern_Cell) at WrapperOrCovCode.coverage.pcf: line 32, column 20
    function defaultSetter_6 (__VALUE_TO_SET :  java.lang.Object) : void {
      parameter.CoveragePattern = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'initialValue' attribute on Variable at WrapperOrCovCode.coverage.pcf: line 21, column 53
    function initialValue_0 () : gw.api.productmodel.PolicyLinePattern {
      return gw.api.productmodel.PolicyLinePatternLookup.getByPublicID(parameterSet.PolicyLinePatternCode)
    }
    
    // 'outputConversion' attribute on PickerCell (id=ParameterCoveragePattern_Cell) at WrapperOrCovCode.coverage.pcf: line 32, column 20
    function outputConversion_4 (VALUE :  java.lang.String) : java.lang.String {
      return linePattern.getCoveragePatternByPublicId(VALUE).Name
    }
    
    // 'validationExpression' attribute on PickerCell (id=ParameterCoveragePattern_Cell) at WrapperOrCovCode.coverage.pcf: line 32, column 20
    function validationExpression_3 () : java.lang.Object {
      return helper.validateCoverageParameter( linePattern, parameter )
    }
    
    // 'value' attribute on PickerCell (id=ParameterCoveragePattern_Cell) at WrapperOrCovCode.coverage.pcf: line 32, column 20
    function valueRoot_7 () : java.lang.Object {
      return parameter
    }
    
    // 'value' attribute on PickerCell (id=ParameterCoveragePattern_Cell) at WrapperOrCovCode.coverage.pcf: line 32, column 20
    function value_5 () : java.lang.String {
      return parameter.CoveragePattern
    }
    
    property get helper () : gw.pcf.rating.flow.RatingParameterSetScreenHelper {
      return getRequireValue("helper", 0) as gw.pcf.rating.flow.RatingParameterSetScreenHelper
    }
    
    property set helper ($arg :  gw.pcf.rating.flow.RatingParameterSetScreenHelper) {
      setRequireValue("helper", 0, $arg)
    }
    
    property get linePattern () : gw.api.productmodel.PolicyLinePattern {
      return getVariableValue("linePattern", 0) as gw.api.productmodel.PolicyLinePattern
    }
    
    property set linePattern ($arg :  gw.api.productmodel.PolicyLinePattern) {
      setVariableValue("linePattern", 0, $arg)
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