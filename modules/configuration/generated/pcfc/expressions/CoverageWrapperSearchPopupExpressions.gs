package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/rating/CoverageWrapperSearchPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class CoverageWrapperSearchPopupExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/rating/CoverageWrapperSearchPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class CoverageWrapperSearchPopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (PolicyLinePatternCode :  String) : int {
      return 0
    }
    
    override property get CurrentLocation () : pcf.CoverageWrapperSearchPopup {
      return super.CurrentLocation as pcf.CoverageWrapperSearchPopup
    }
    
    property get PolicyLinePatternCode () : String {
      return getVariableValue("PolicyLinePatternCode", 0) as String
    }
    
    property set PolicyLinePatternCode ($arg :  String) {
      setVariableValue("PolicyLinePatternCode", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/admin/rating/CoverageWrapperSearchPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends SearchPanelExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=name_Cell) at CoverageWrapperSearchPopup.pcf: line 42, column 46
    function valueRoot_5 () : java.lang.Object {
      return wrapperClass
    }
    
    // 'value' attribute on TextCell (id=type_Cell) at CoverageWrapperSearchPopup.pcf: line 46, column 58
    function valueRoot_8 () : java.lang.Object {
      return wrapperClass.WrapperType
    }
    
    // 'value' attribute on TextCell (id=name_Cell) at CoverageWrapperSearchPopup.pcf: line 42, column 46
    function value_4 () : java.lang.String {
      return wrapperClass.Name
    }
    
    // 'value' attribute on TextCell (id=type_Cell) at CoverageWrapperSearchPopup.pcf: line 46, column 58
    function value_7 () : java.lang.String {
      return wrapperClass.WrapperType.Name
    }
    
    property get wrapperClass () : gw.pc.rating.flow.AvailableCoverageWrapper {
      return getIteratedValue(2) as gw.pc.rating.flow.AvailableCoverageWrapper
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/admin/rating/CoverageWrapperSearchPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class SearchPanelExpressionsImpl extends CoverageWrapperSearchPopupExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on InputSetRef at CoverageWrapperSearchPopup.pcf: line 25, column 47
    function def_onEnter_0 (def :  pcf.SearchAndResetInputSet) : void {
      def.onEnter()
    }
    
    // 'def' attribute on InputSetRef at CoverageWrapperSearchPopup.pcf: line 25, column 47
    function def_refreshVariables_1 (def :  pcf.SearchAndResetInputSet) : void {
      def.refreshVariables()
    }
    
    // 'searchCriteria' attribute on SearchPanel at CoverageWrapperSearchPopup.pcf: line 21, column 74
    function searchCriteria_13 () : gw.pcf.rating.flow.CoverageWrapperSearchCriteria {
      return new gw.pcf.rating.flow.CoverageWrapperSearchCriteria(PolicyLinePatternCode)
    }
    
    // 'search' attribute on SearchPanel at CoverageWrapperSearchPopup.pcf: line 21, column 74
    function search_12 () : java.lang.Object {
      return searchCriteria.doSearch()
    }
    
    // 'value' attribute on TextCell (id=name_Cell) at CoverageWrapperSearchPopup.pcf: line 42, column 46
    function sortValue_2 (wrapperClass :  gw.pc.rating.flow.AvailableCoverageWrapper) : java.lang.Object {
      return wrapperClass.Name
    }
    
    // 'value' attribute on TextCell (id=type_Cell) at CoverageWrapperSearchPopup.pcf: line 46, column 58
    function sortValue_3 (wrapperClass :  gw.pc.rating.flow.AvailableCoverageWrapper) : java.lang.Object {
      return wrapperClass.WrapperType.Name
    }
    
    // 'value' attribute on RowIterator at CoverageWrapperSearchPopup.pcf: line 37, column 72
    function value_11 () : gw.pc.rating.flow.AvailableCoverageWrapper[] {
      return results
    }
    
    property get results () : gw.pc.rating.flow.AvailableCoverageWrapper[] {
      return getResultsValue(1) as gw.pc.rating.flow.AvailableCoverageWrapper[]
    }
    
    property get searchCriteria () : gw.pcf.rating.flow.CoverageWrapperSearchCriteria {
      return getCriteriaValue(1) as gw.pcf.rating.flow.CoverageWrapperSearchCriteria
    }
    
    property set searchCriteria ($arg :  gw.pcf.rating.flow.CoverageWrapperSearchCriteria) {
      setCriteriaValue(1, $arg)
    }
    
    
  }
  
  
}