package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/forms/FormPatternCoveragePartTypesLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class FormPatternCoveragePartTypesLVExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/forms/FormPatternCoveragePartTypesLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class FormPatternCoveragePartTypesLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at FormPatternCoveragePartTypesLV.pcf: line 29, column 49
    function sortValue_0 (coveragePartType :  typekey.CoveragePartType) : java.lang.Object {
      return coveragePartType.DisplayName
    }
    
    // 'toRemove' attribute on RowIterator (id=coveragePartTypes) at FormPatternCoveragePartTypesLV.pcf: line 22, column 46
    function toRemove_4 (coveragePartType :  typekey.CoveragePartType) : void {
      formPattern.removeCoveragePartType(coveragePartType)
    }
    
    // 'value' attribute on RowIterator (id=coveragePartTypes) at FormPatternCoveragePartTypesLV.pcf: line 22, column 46
    function value_5 () : typekey.CoveragePartType[] {
      return formPattern.CoveragePartTypes
    }
    
    property get formPattern () : FormPattern {
      return getRequireValue("formPattern", 0) as FormPattern
    }
    
    property set formPattern ($arg :  FormPattern) {
      setRequireValue("formPattern", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/admin/forms/FormPatternCoveragePartTypesLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends FormPatternCoveragePartTypesLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at FormPatternCoveragePartTypesLV.pcf: line 29, column 49
    function valueRoot_2 () : java.lang.Object {
      return coveragePartType
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at FormPatternCoveragePartTypesLV.pcf: line 29, column 49
    function value_1 () : java.lang.String {
      return coveragePartType.DisplayName
    }
    
    property get coveragePartType () : typekey.CoveragePartType {
      return getIteratedValue(1) as typekey.CoveragePartType
    }
    
    
  }
  
  
}