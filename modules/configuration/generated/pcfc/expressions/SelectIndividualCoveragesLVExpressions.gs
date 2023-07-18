package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/job/common/copydata/SelectIndividualCoveragesLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class SelectIndividualCoveragesLVExpressions {
  @javax.annotation.Generated("config/web/pcf/job/common/copydata/SelectIndividualCoveragesLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends SelectIndividualCoveragesLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on CheckBoxCell (id=CoverageCopierShouldCopy_Cell) at SelectIndividualCoveragesLV.pcf: line 23, column 46
    function defaultSetter_1 (__VALUE_TO_SET :  java.lang.Object) : void {
      coverageCopier.ShouldCopy = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on CheckBoxCell (id=CoverageCopierShouldCopy_Cell) at SelectIndividualCoveragesLV.pcf: line 23, column 46
    function valueRoot_2 () : java.lang.Object {
      return coverageCopier
    }
    
    // 'value' attribute on CheckBoxCell (id=CoverageCopierShouldCopy_Cell) at SelectIndividualCoveragesLV.pcf: line 23, column 46
    function value_0 () : java.lang.Boolean {
      return coverageCopier.ShouldCopy
    }
    
    // 'value' attribute on TextCell (id=CoverageDescription_Cell) at SelectIndividualCoveragesLV.pcf: line 30, column 41
    function value_4 () : java.lang.Object {
      return coverageCopier.Source
    }
    
    property get coverageCopier () : gw.coverage.ClausePatternCopier {
      return getIteratedValue(1) as gw.coverage.ClausePatternCopier
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/job/common/copydata/SelectIndividualCoveragesLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class SelectIndividualCoveragesLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on RowIterator (id=coverageIterator) at SelectIndividualCoveragesLV.pcf: line 18, column 73
    function value_7 () : java.util.List<gw.coverage.ClausePatternCopier> {
      return coverageCopiers
    }
    
    property get coverageCopiers () : List<gw.coverage.ClausePatternCopier> {
      return getRequireValue("coverageCopiers", 0) as List<gw.coverage.ClausePatternCopier>
    }
    
    property set coverageCopiers ($arg :  List<gw.coverage.ClausePatternCopier>) {
      setRequireValue("coverageCopiers", 0, $arg)
    }
    
    
  }
  
  
}