package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/gl/policy/GLClassCodeSearchPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class GLClassCodeSearchPopupExpressions {
  @javax.annotation.Generated("config/web/pcf/line/gl/policy/GLClassCodeSearchPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class GLClassCodeSearchPopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (glLine :  GLLine) : int {
      return 0
    }
    
    static function __constructorIndex (glLine :  GLLine, glExposure :  GLExposure) : int {
      return 1
    }
    
    // 'initialValue' attribute on Variable at GLClassCodeSearchPopup.pcf: line 23, column 27
    function initialValue_0 () : GLClassCode {
      return (glLine.Branch.Job.NewTerm) ? null : glExposure.BasedOn.ClassCode
    }
    
    override property get CurrentLocation () : pcf.GLClassCodeSearchPopup {
      return super.CurrentLocation as pcf.GLClassCodeSearchPopup
    }
    
    property get glExposure () : GLExposure {
      return getVariableValue("glExposure", 0) as GLExposure
    }
    
    property set glExposure ($arg :  GLExposure) {
      setVariableValue("glExposure", 0, $arg)
    }
    
    property get glLine () : GLLine {
      return getVariableValue("glLine", 0) as GLLine
    }
    
    property set glLine ($arg :  GLLine) {
      setVariableValue("glLine", 0, $arg)
    }
    
    property get previousGLClassCode () : GLClassCode {
      return getVariableValue("previousGLClassCode", 0) as GLClassCode
    }
    
    property set previousGLClassCode ($arg :  GLClassCode) {
      setVariableValue("previousGLClassCode", 0, $arg)
    }
    
    function createCriteria() : gw.lob.gl.GLClassCodeSearchCriteria {
      var criteria = new gw.lob.gl.GLClassCodeSearchCriteria()
      criteria.EffectiveAsOfDate = glLine.getReferenceDateForCurrentJob(gw.api.util.JurisdictionMappingUtil.getJurisdiction(glExposure.LocationWM))
      if (previousGLClassCode != null) {
        criteria.PreviousSelectedClassCode = previousGLClassCode.Code
      }
      return criteria
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/gl/policy/GLClassCodeSearchPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends SearchPanelExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'pickValue' attribute on RowIterator at GLClassCodeSearchPopup.pcf: line 71, column 86
    function pickValue_19 () : GLClassCode {
      return gLClassCode
    }
    
    // 'value' attribute on TextCell (id=Code_Cell) at GLClassCodeSearchPopup.pcf: line 77, column 33
    function valueRoot_14 () : java.lang.Object {
      return gLClassCode
    }
    
    // 'value' attribute on TextCell (id=Code_Cell) at GLClassCodeSearchPopup.pcf: line 77, column 33
    function value_13 () : java.lang.String {
      return gLClassCode.Code
    }
    
    // 'value' attribute on TextCell (id=Classification_Cell) at GLClassCodeSearchPopup.pcf: line 83, column 55
    function value_16 () : java.lang.String {
      return gLClassCode.Classification
    }
    
    property get gLClassCode () : entity.GLClassCode {
      return getIteratedValue(2) as entity.GLClassCode
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/gl/policy/GLClassCodeSearchPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class SearchPanelExpressionsImpl extends GLClassCodeSearchPopupExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on InputSetRef at GLClassCodeSearchPopup.pcf: line 54, column 49
    function def_onEnter_9 (def :  pcf.SearchAndResetInputSet) : void {
      def.onEnter()
    }
    
    // 'def' attribute on InputSetRef at GLClassCodeSearchPopup.pcf: line 54, column 49
    function def_refreshVariables_10 (def :  pcf.SearchAndResetInputSet) : void {
      def.refreshVariables()
    }
    
    // 'value' attribute on TextInput (id=Code_Input) at GLClassCodeSearchPopup.pcf: line 44, column 46
    function defaultSetter_2 (__VALUE_TO_SET :  java.lang.Object) : void {
      searchCriteria.Code = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=Classification_Input) at GLClassCodeSearchPopup.pcf: line 50, column 56
    function defaultSetter_6 (__VALUE_TO_SET :  java.lang.Object) : void {
      searchCriteria.Classification = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'searchCriteria' attribute on SearchPanel at GLClassCodeSearchPopup.pcf: line 34, column 81
    function searchCriteria_22 () : gw.lob.gl.GLClassCodeSearchCriteria {
      return createCriteria();
    }
    
    // 'search' attribute on SearchPanel at GLClassCodeSearchPopup.pcf: line 34, column 81
    function search_21 () : java.lang.Object {
      return searchCriteria.performSearch()
    }
    
    // 'value' attribute on TextCell (id=Code_Cell) at GLClassCodeSearchPopup.pcf: line 77, column 33
    function sortValue_11 (gLClassCode :  entity.GLClassCode) : java.lang.Object {
      return gLClassCode.Code
    }
    
    // 'value' attribute on TextCell (id=Classification_Cell) at GLClassCodeSearchPopup.pcf: line 83, column 55
    function sortValue_12 (gLClassCode :  entity.GLClassCode) : java.lang.Object {
      return gLClassCode.Classification
    }
    
    // 'value' attribute on TextInput (id=Code_Input) at GLClassCodeSearchPopup.pcf: line 44, column 46
    function valueRoot_3 () : java.lang.Object {
      return searchCriteria
    }
    
    // 'value' attribute on TextInput (id=Code_Input) at GLClassCodeSearchPopup.pcf: line 44, column 46
    function value_1 () : java.lang.String {
      return searchCriteria.Code
    }
    
    // 'value' attribute on RowIterator at GLClassCodeSearchPopup.pcf: line 71, column 86
    function value_20 () : gw.api.database.IQueryBeanResult<entity.GLClassCode> {
      return gLClassCodes
    }
    
    // 'value' attribute on TextInput (id=Classification_Input) at GLClassCodeSearchPopup.pcf: line 50, column 56
    function value_5 () : java.lang.String {
      return searchCriteria.Classification
    }
    
    property get gLClassCodes () : gw.api.database.IQueryBeanResult<GLClassCode> {
      return getResultsValue(1) as gw.api.database.IQueryBeanResult<GLClassCode>
    }
    
    property get searchCriteria () : gw.lob.gl.GLClassCodeSearchCriteria {
      return getCriteriaValue(1) as gw.lob.gl.GLClassCodeSearchCriteria
    }
    
    property set searchCriteria ($arg :  gw.lob.gl.GLClassCodeSearchCriteria) {
      setCriteriaValue(1, $arg)
    }
    
    
  }
  
  
}