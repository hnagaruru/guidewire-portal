package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/forms/FormPatternCoverablePropertyLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class FormPatternCoverablePropertyLVExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/forms/FormPatternCoverablePropertyLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class FormPatternCoverablePropertyLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at FormPatternCoverablePropertyLV.pcf: line 31, column 54
    function sortValue_0 (FormPatternCoverableProperty :  entity.FormPatternCoverableProperty) : java.lang.Object {
      return FormPatternCoverableProperty.Name
    }
    
    // 'value' attribute on TextCell (id=DataType_Cell) at FormPatternCoverablePropertyLV.pcf: line 35, column 58
    function sortValue_1 (FormPatternCoverableProperty :  entity.FormPatternCoverableProperty) : java.lang.Object {
      return FormPatternCoverableProperty.DataType
    }
    
    // 'toRemove' attribute on RowIterator at FormPatternCoverablePropertyLV.pcf: line 24, column 57
    function toRemove_8 (FormPatternCoverableProperty :  entity.FormPatternCoverableProperty) : void {
      formPattern.removeFormPatternCoverableProperty(FormPatternCoverableProperty)
    }
    
    // 'value' attribute on RowIterator at FormPatternCoverablePropertyLV.pcf: line 24, column 57
    function value_9 () : entity.FormPatternCoverableProperty[] {
      return formPattern.FormPatternCoverableProperties
    }
    
    property get formPattern () : FormPattern {
      return getRequireValue("formPattern", 0) as FormPattern
    }
    
    property set formPattern ($arg :  FormPattern) {
      setRequireValue("formPattern", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/admin/forms/FormPatternCoverablePropertyLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends FormPatternCoverablePropertyLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at FormPatternCoverablePropertyLV.pcf: line 31, column 54
    function valueRoot_3 () : java.lang.Object {
      return FormPatternCoverableProperty
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at FormPatternCoverablePropertyLV.pcf: line 31, column 54
    function value_2 () : java.lang.String {
      return FormPatternCoverableProperty.Name
    }
    
    // 'value' attribute on TextCell (id=DataType_Cell) at FormPatternCoverablePropertyLV.pcf: line 35, column 58
    function value_5 () : java.lang.String {
      return FormPatternCoverableProperty.DataType
    }
    
    property get FormPatternCoverableProperty () : entity.FormPatternCoverableProperty {
      return getIteratedValue(1) as entity.FormPatternCoverableProperty
    }
    
    
  }
  
  
}