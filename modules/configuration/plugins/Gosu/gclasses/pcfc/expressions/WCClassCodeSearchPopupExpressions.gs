package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
uses java.lang.String
uses gw.api.util.JurisdictionMappingUtil
uses gw.lob.wc.WCClassCodeSearchCriteria
@javax.annotation.Generated("config/web/pcf/line/wc/policy/WCClassCodeSearchPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class WCClassCodeSearchPopupExpressions {
  @javax.annotation.Generated("config/web/pcf/line/wc/policy/WCClassCodeSearchPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends SearchPanelExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'pickValue' attribute on RowIterator at WCClassCodeSearchPopup.pcf: line 81, column 86
    function pickValue_28 () : WCClassCode {
      return wcClassCode
    }
    
    // 'value' attribute on TextCell (id=Code_Cell) at WCClassCodeSearchPopup.pcf: line 87, column 33
    function valueRoot_17 () : java.lang.Object {
      return wcClassCode
    }
    
    // 'value' attribute on TextCell (id=Code_Cell) at WCClassCodeSearchPopup.pcf: line 87, column 33
    function value_16 () : java.lang.String {
      return wcClassCode.Code
    }
    
    // 'value' attribute on TextCell (id=Classification_Cell) at WCClassCodeSearchPopup.pcf: line 93, column 55
    function value_19 () : java.lang.String {
      return wcClassCode.Classification
    }
    
    // 'value' attribute on TextCell (id=ClassIndicator_Cell) at WCClassCodeSearchPopup.pcf: line 98, column 33
    function value_22 () : java.lang.String {
      return wcClassCode.ClassIndicator
    }
    
    // 'value' attribute on TextCell (id=Domain_Cell) at WCClassCodeSearchPopup.pcf: line 103, column 33
    function value_25 () : java.lang.String {
      return wcClassCode.WCDomain
    }
    
    property get wcClassCode () : entity.WCClassCode {
      return getIteratedValue(2) as entity.WCClassCode
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/wc/policy/WCClassCodeSearchPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class SearchPanelExpressionsImpl extends WCClassCodeSearchPopupExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on InputSetRef at WCClassCodeSearchPopup.pcf: line 64, column 49
    function def_onEnter_10 (def :  pcf.SearchAndResetInputSet) : void {
      def.onEnter()
    }
    
    // 'def' attribute on InputSetRef at WCClassCodeSearchPopup.pcf: line 64, column 49
    function def_refreshVariables_11 (def :  pcf.SearchAndResetInputSet) : void {
      def.refreshVariables()
    }
    
    // 'value' attribute on TextInput (id=Code_Input) at WCClassCodeSearchPopup.pcf: line 54, column 46
    function defaultSetter_3 (__VALUE_TO_SET :  java.lang.Object) : void {
      searchCriteria.Code = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=Classification_Input) at WCClassCodeSearchPopup.pcf: line 60, column 56
    function defaultSetter_7 (__VALUE_TO_SET :  java.lang.Object) : void {
      searchCriteria.Classification = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'searchCriteria' attribute on SearchPanel at WCClassCodeSearchPopup.pcf: line 44, column 81
    function searchCriteria_31 () : gw.lob.wc.WCClassCodeSearchCriteria {
      return createCriteria()
    }
    
    // 'search' attribute on SearchPanel at WCClassCodeSearchPopup.pcf: line 44, column 81
    function search_30 () : java.lang.Object {
      return searchCriteria.performSearch()
    }
    
    // 'value' attribute on TextCell (id=Code_Cell) at WCClassCodeSearchPopup.pcf: line 87, column 33
    function sortValue_12 (wcClassCode :  entity.WCClassCode) : java.lang.Object {
      return wcClassCode.Code
    }
    
    // 'value' attribute on TextCell (id=Classification_Cell) at WCClassCodeSearchPopup.pcf: line 93, column 55
    function sortValue_13 (wcClassCode :  entity.WCClassCode) : java.lang.Object {
      return wcClassCode.Classification
    }
    
    // 'value' attribute on TextCell (id=ClassIndicator_Cell) at WCClassCodeSearchPopup.pcf: line 98, column 33
    function sortValue_14 (wcClassCode :  entity.WCClassCode) : java.lang.Object {
      return wcClassCode.ClassIndicator
    }
    
    // 'value' attribute on TextCell (id=Domain_Cell) at WCClassCodeSearchPopup.pcf: line 103, column 33
    function sortValue_15 (wcClassCode :  entity.WCClassCode) : java.lang.Object {
      return wcClassCode.WCDomain
    }
    
    // 'value' attribute on TextInput (id=Code_Input) at WCClassCodeSearchPopup.pcf: line 54, column 46
    function valueRoot_4 () : java.lang.Object {
      return searchCriteria
    }
    
    // 'value' attribute on TextInput (id=Code_Input) at WCClassCodeSearchPopup.pcf: line 54, column 46
    function value_2 () : java.lang.String {
      return searchCriteria.Code
    }
    
    // 'value' attribute on RowIterator at WCClassCodeSearchPopup.pcf: line 81, column 86
    function value_29 () : gw.api.database.IQueryBeanResult<entity.WCClassCode> {
      return wcClassCodes
    }
    
    // 'value' attribute on TextInput (id=Classification_Input) at WCClassCodeSearchPopup.pcf: line 60, column 56
    function value_6 () : java.lang.String {
      return searchCriteria.Classification
    }
    
    property get searchCriteria () : gw.lob.wc.WCClassCodeSearchCriteria {
      return getCriteriaValue(1) as gw.lob.wc.WCClassCodeSearchCriteria
    }
    
    property set searchCriteria ($arg :  gw.lob.wc.WCClassCodeSearchCriteria) {
      setCriteriaValue(1, $arg)
    }
    
    property get wcClassCodes () : gw.api.database.IQueryBeanResult<WCClassCode> {
      return getResultsValue(1) as gw.api.database.IQueryBeanResult<WCClassCode>
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/wc/policy/WCClassCodeSearchPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class WCClassCodeSearchPopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (locationWM :  PolicyLocation, wcLine :  WorkersCompLine, previousWCClassCode :  WCClassCode) : int {
      return 0
    }
    
    static function __constructorIndex (domain :  WCClassCodeFederalDomains, locationWM :  PolicyLocation, wcLine :  WorkersCompLine, previousWCClassCode :  WCClassCode) : int {
      return 1
    }
    
    // 'value' attribute on TextInput (id=LocationLabel_Input) at WCClassCodeSearchPopup.pcf: line 33, column 109
    function value_0 () : java.lang.String {
      return DisplayKey.get("Web.Policy.WC.ClassCode.Location",  locationWM.DisplayName )
    }
    
    override property get CurrentLocation () : pcf.WCClassCodeSearchPopup {
      return super.CurrentLocation as pcf.WCClassCodeSearchPopup
    }
    
    property get domain () : WCClassCodeFederalDomains {
      return getVariableValue("domain", 0) as WCClassCodeFederalDomains
    }
    
    property set domain ($arg :  WCClassCodeFederalDomains) {
      setVariableValue("domain", 0, $arg)
    }
    
    property get locationWM () : PolicyLocation {
      return getVariableValue("locationWM", 0) as PolicyLocation
    }
    
    property set locationWM ($arg :  PolicyLocation) {
      setVariableValue("locationWM", 0, $arg)
    }
    
    property get previousWCClassCode () : WCClassCode {
      return getVariableValue("previousWCClassCode", 0) as WCClassCode
    }
    
    property set previousWCClassCode ($arg :  WCClassCode) {
      setVariableValue("previousWCClassCode", 0, $arg)
    }
    
    property get wcLine () : WorkersCompLine {
      return getVariableValue("wcLine", 0) as WorkersCompLine
    }
    
    property set wcLine ($arg :  WorkersCompLine) {
      setVariableValue("wcLine", 0, $arg)
    }
    
    
    function createCriteria() : WCClassCodeSearchCriteria {
      var criteria = new WCClassCodeSearchCriteria()
      criteria.EffectiveAsOfDate = wcLine.getReferenceDateForCurrentJob(JurisdictionMappingUtil.getJurisdiction(locationWM))
      if (previousWCClassCode != null) {
        criteria.PreviousSelectedClassCode = previousWCClassCode.Code
      }
      if (domain != null) {
        criteria.Domain = domain as String
      } else {
        criteria.Domain = JurisdictionMappingUtil.getJurisdiction(locationWM) as String
      }
      return criteria
    }
    
    
  }
  
  
}