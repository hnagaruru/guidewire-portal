package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/forms/FormPatternCovTermsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class FormPatternCovTermsLVExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/forms/FormPatternCovTermsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class FormPatternCovTermsLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at FormPatternCovTermsLV.pcf: line 31, column 44
    function sortValue_0 (FormPatternCovTerm :  entity.FormPatternCovTerm) : java.lang.Object {
      return FormPatternCovTerm.Name
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at FormPatternCovTermsLV.pcf: line 35, column 51
    function sortValue_1 (FormPatternCovTerm :  entity.FormPatternCovTerm) : java.lang.Object {
      return FormPatternCovTerm.Description
    }
    
    // 'value' attribute on TextCell (id=Code_Cell) at FormPatternCovTermsLV.pcf: line 39, column 54
    function sortValue_2 (FormPatternCovTerm :  entity.FormPatternCovTerm) : java.lang.Object {
      return FormPatternCovTerm.CodeIdentifier
    }
    
    // 'toRemove' attribute on RowIterator at FormPatternCovTermsLV.pcf: line 24, column 47
    function toRemove_12 (FormPatternCovTerm :  entity.FormPatternCovTerm) : void {
      formPattern.removeFormPatternCovTerm(FormPatternCovTerm) 
    }
    
    // 'value' attribute on RowIterator at FormPatternCovTermsLV.pcf: line 24, column 47
    function value_13 () : entity.FormPatternCovTerm[] {
      return formPattern.FormPatternCovTerms
    }
    
    property get formPattern () : FormPattern {
      return getRequireValue("formPattern", 0) as FormPattern
    }
    
    property set formPattern ($arg :  FormPattern) {
      setRequireValue("formPattern", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/admin/forms/FormPatternCovTermsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends FormPatternCovTermsLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at FormPatternCovTermsLV.pcf: line 31, column 44
    function valueRoot_4 () : java.lang.Object {
      return FormPatternCovTerm
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at FormPatternCovTermsLV.pcf: line 31, column 44
    function value_3 () : java.lang.String {
      return FormPatternCovTerm.Name
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at FormPatternCovTermsLV.pcf: line 35, column 51
    function value_6 () : java.lang.String {
      return FormPatternCovTerm.Description
    }
    
    // 'value' attribute on TextCell (id=Code_Cell) at FormPatternCovTermsLV.pcf: line 39, column 54
    function value_9 () : java.lang.String {
      return FormPatternCovTerm.CodeIdentifier
    }
    
    property get FormPatternCovTerm () : entity.FormPatternCovTerm {
      return getIteratedValue(1) as entity.FormPatternCovTerm
    }
    
    
  }
  
  
}