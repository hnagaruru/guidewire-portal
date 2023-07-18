package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/rating/WrapperOrCovCode.default.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class WrapperOrCovCode_defaultExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/rating/WrapperOrCovCode.default.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class WrapperOrCovCodeExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
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