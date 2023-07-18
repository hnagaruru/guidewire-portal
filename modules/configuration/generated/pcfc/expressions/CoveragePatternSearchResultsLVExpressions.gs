package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/common/CoveragePatternSearchResultsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class CoveragePatternSearchResultsLVExpressions {
  @javax.annotation.Generated("config/web/pcf/line/common/CoveragePatternSearchResultsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class CoveragePatternSearchResultsLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=Coverage_Cell) at CoveragePatternSearchResultsLV.pcf: line 25, column 24
    function sortValue_0 (pattern :  gw.api.productmodel.ClausePattern) : java.lang.Object {
      return pattern.DisplayName
    }
    
    // 'value' attribute on TextCell (id=Category_Cell) at CoveragePatternSearchResultsLV.pcf: line 30, column 24
    function sortValue_1 (pattern :  gw.api.productmodel.ClausePattern) : java.lang.Object {
      return pattern.CoverageCategory.DisplayName
    }
    
    // 'value' attribute on TextCell (id=ClauseType_Cell) at CoveragePatternSearchResultsLV.pcf: line 34, column 39
    function sortValue_2 (pattern :  gw.api.productmodel.ClausePattern) : java.lang.Object {
      return pattern.ClauseName
    }
    
    // 'value' attribute on RowIterator at CoveragePatternSearchResultsLV.pcf: line 19, column 55
    function value_12 () : gw.api.productmodel.ClausePattern[] {
      return coveragePatterns
    }
    
    property get coveragePatterns () : gw.api.productmodel.ClausePattern[] {
      return getRequireValue("coveragePatterns", 0) as gw.api.productmodel.ClausePattern[]
    }
    
    property set coveragePatterns ($arg :  gw.api.productmodel.ClausePattern[]) {
      setRequireValue("coveragePatterns", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/common/CoveragePatternSearchResultsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends CoveragePatternSearchResultsLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=Coverage_Cell) at CoveragePatternSearchResultsLV.pcf: line 25, column 24
    function valueRoot_4 () : java.lang.Object {
      return pattern
    }
    
    // 'value' attribute on TextCell (id=Category_Cell) at CoveragePatternSearchResultsLV.pcf: line 30, column 24
    function valueRoot_7 () : java.lang.Object {
      return pattern.CoverageCategory
    }
    
    // 'value' attribute on TextCell (id=Coverage_Cell) at CoveragePatternSearchResultsLV.pcf: line 25, column 24
    function value_3 () : java.lang.String {
      return pattern.DisplayName
    }
    
    // 'value' attribute on TextCell (id=Category_Cell) at CoveragePatternSearchResultsLV.pcf: line 30, column 24
    function value_6 () : java.lang.String {
      return pattern.CoverageCategory.DisplayName
    }
    
    // 'value' attribute on TextCell (id=ClauseType_Cell) at CoveragePatternSearchResultsLV.pcf: line 34, column 39
    function value_9 () : java.lang.String {
      return pattern.ClauseName
    }
    
    property get pattern () : gw.api.productmodel.ClausePattern {
      return getIteratedValue(1) as gw.api.productmodel.ClausePattern
    }
    
    
  }
  
  
}