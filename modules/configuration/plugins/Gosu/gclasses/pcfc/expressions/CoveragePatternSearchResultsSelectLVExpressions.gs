package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/common/CoveragePatternSearchResultsSelectLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class CoveragePatternSearchResultsSelectLVExpressions {
  @javax.annotation.Generated("config/web/pcf/line/common/CoveragePatternSearchResultsSelectLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class CoveragePatternSearchResultsSelectLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=Coverage_Cell) at CoveragePatternSearchResultsSelectLV.pcf: line 23, column 40
    function sortValue_0 (pattern :  gw.api.productmodel.ClausePattern) : java.lang.Object {
      return pattern.DisplayName
    }
    
    // 'value' attribute on TextCell (id=Category_Cell) at CoveragePatternSearchResultsSelectLV.pcf: line 27, column 57
    function sortValue_1 (pattern :  gw.api.productmodel.ClausePattern) : java.lang.Object {
      return pattern.CoverageCategory.DisplayName
    }
    
    // 'value' attribute on TextCell (id=ClauseType_Cell) at CoveragePatternSearchResultsSelectLV.pcf: line 31, column 39
    function sortValue_2 (pattern :  gw.api.productmodel.ClausePattern) : java.lang.Object {
      return pattern.ClauseName
    }
    
    // 'value' attribute on RowIterator at CoveragePatternSearchResultsSelectLV.pcf: line 18, column 55
    function value_13 () : gw.api.productmodel.ClausePattern[] {
      return coveragePatterns
    }
    
    property get coveragePatterns () : gw.api.productmodel.ClausePattern[] {
      return getRequireValue("coveragePatterns", 0) as gw.api.productmodel.ClausePattern[]
    }
    
    property set coveragePatterns ($arg :  gw.api.productmodel.ClausePattern[]) {
      setRequireValue("coveragePatterns", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/common/CoveragePatternSearchResultsSelectLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends CoveragePatternSearchResultsSelectLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'pickValue' attribute on RowIterator at CoveragePatternSearchResultsSelectLV.pcf: line 18, column 55
    function pickValue_12 () : String {
      return pattern.PublicID
    }
    
    // 'value' attribute on TextCell (id=Coverage_Cell) at CoveragePatternSearchResultsSelectLV.pcf: line 23, column 40
    function valueRoot_4 () : java.lang.Object {
      return pattern
    }
    
    // 'value' attribute on TextCell (id=Category_Cell) at CoveragePatternSearchResultsSelectLV.pcf: line 27, column 57
    function valueRoot_7 () : java.lang.Object {
      return pattern.CoverageCategory
    }
    
    // 'value' attribute on TextCell (id=Coverage_Cell) at CoveragePatternSearchResultsSelectLV.pcf: line 23, column 40
    function value_3 () : java.lang.String {
      return pattern.DisplayName
    }
    
    // 'value' attribute on TextCell (id=Category_Cell) at CoveragePatternSearchResultsSelectLV.pcf: line 27, column 57
    function value_6 () : java.lang.String {
      return pattern.CoverageCategory.DisplayName
    }
    
    // 'value' attribute on TextCell (id=ClauseType_Cell) at CoveragePatternSearchResultsSelectLV.pcf: line 31, column 39
    function value_9 () : java.lang.String {
      return pattern.ClauseName
    }
    
    property get pattern () : gw.api.productmodel.ClausePattern {
      return getIteratedValue(1) as gw.api.productmodel.ClausePattern
    }
    
    
  }
  
  
}