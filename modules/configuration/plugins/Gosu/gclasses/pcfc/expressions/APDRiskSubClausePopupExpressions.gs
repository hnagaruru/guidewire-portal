package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/apd/policy/APDRiskSubClausePopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class APDRiskSubClausePopupExpressions {
  @javax.annotation.Generated("config/web/pcf/line/apd/policy/APDRiskSubClausePopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class APDRiskSubClausePopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (riskCoverable :  APDRiskCoverable, clause :  APDClause, coverDefinitionHelper :  gw.apd.model.CoverDefinitionHelper, edition :  APDProductLineEdition, openForEdit :  boolean) : int {
      return 0
    }
    
    // 'action' attribute on MenuItem (id=AddNewClause) at APDRiskSubClausePopup.pcf: line 55, column 105
    function action_4 () : void {
      clause.createAndAddSubClause()
    }
    
    // 'canEdit' attribute on Popup (id=APDRiskSubClausePopup) at APDRiskSubClausePopup.pcf: line 9, column 87
    function canEdit_14 () : java.lang.Boolean {
      return openForEdit
    }
    
    // 'def' attribute on InputSetRef at APDRiskSubClausePopup.pcf: line 78, column 116
    function def_onEnter_12 (def :  pcf.APDRiskClauseInputSet) : void {
      def.onEnter(riskCoverable, subClauses, coverDefinitionHelper, edition, openForEdit)
    }
    
    // 'def' attribute on InputSetRef at APDRiskSubClausePopup.pcf: line 78, column 116
    function def_refreshVariables_13 (def :  pcf.APDRiskClauseInputSet) : void {
      def.refreshVariables(riskCoverable, subClauses, coverDefinitionHelper, edition, openForEdit)
    }
    
    // 'initialValue' attribute on Variable at APDRiskSubClausePopup.pcf: line 31, column 27
    function initialValue_0 () : APDClause[] {
      return clause.SubClauses
    }
    
    // 'initialValue' attribute on Variable at APDRiskSubClausePopup.pcf: line 35, column 70
    function initialValue_1 () : gw.api.web.userpreference.UserPreferencesOfCurrentUser {
      return new gw.api.web.userpreference.UserPreferencesOfCurrentUser()
    }
    
    // 'initialValue' attribute on Variable at APDRiskSubClausePopup.pcf: line 40, column 45
    function initialValue_2 () : gw.apd.web.APDClauseWrapper[] {
      return clause.AvailableSubClauses?.map(\cov -> new gw.apd.web.APDClauseWrapper(cov))
    }
    
    // 'label' attribute on MenuItem (id=ExistingClause) at APDRiskSubClausePopup.pcf: line 58, column 107
    function label_10 () : java.lang.Object {
      return DisplayKey.get("Web.APDRiskSubClausePopup.Existing${clause.ClauseType}s")
    }
    
    // EditButtons at APDRiskSubClausePopup.pcf: line 43, column 23
    function label_3 () : java.lang.Object {
      return gw.api.util.LocationUtil.hasOwnBundle(CurrentLocation) ? DisplayKey.get("Button.Update") : DisplayKey.get("Button.OK")
    }
    
    // 'label' attribute on MenuItem (id=AddNewClause) at APDRiskSubClausePopup.pcf: line 55, column 105
    function label_5 () : java.lang.Object {
      return DisplayKey.get("Web.APDRiskSubClausePopup.AddNew${clause.ClauseType}")
    }
    
    // 'sortBy' attribute on IteratorSort at APDRiskSubClausePopup.pcf: line 66, column 34
    function sortBy_6 (availableSubClause :  gw.apd.web.APDClauseWrapper) : java.lang.Object {
      return availableSubClause.Label
    }
    
    // 'title' attribute on Popup (id=APDRiskSubClausePopup) at APDRiskSubClausePopup.pcf: line 9, column 87
    static function title_16 (clause :  APDClause, coverDefinitionHelper :  gw.apd.model.CoverDefinitionHelper, edition :  APDProductLineEdition, openForEdit :  boolean, riskCoverable :  APDRiskCoverable) : java.lang.Object {
      return DisplayKey.get("Web.APDRiskSubClausesPopup.Title", clause.Name)
    }
    
    // 'value' attribute on MenuItemIterator (id=AvailableSubClausesIterator) at APDRiskSubClausePopup.pcf: line 63, column 59
    function value_9 () : gw.apd.web.APDClauseWrapper[] {
      return availableSubClauses
    }
    
    // 'visible' attribute on Toolbar at APDRiskSubClausePopup.pcf: line 47, column 49
    function visible_11 () : java.lang.Boolean {
      return userPreferences.canDesign()
    }
    
    override property get CurrentLocation () : pcf.APDRiskSubClausePopup {
      return super.CurrentLocation as pcf.APDRiskSubClausePopup
    }
    
    property get availableSubClauses () : gw.apd.web.APDClauseWrapper[] {
      return getVariableValue("availableSubClauses", 0) as gw.apd.web.APDClauseWrapper[]
    }
    
    property set availableSubClauses ($arg :  gw.apd.web.APDClauseWrapper[]) {
      setVariableValue("availableSubClauses", 0, $arg)
    }
    
    property get clause () : APDClause {
      return getVariableValue("clause", 0) as APDClause
    }
    
    property set clause ($arg :  APDClause) {
      setVariableValue("clause", 0, $arg)
    }
    
    property get coverDefinitionHelper () : gw.apd.model.CoverDefinitionHelper {
      return getVariableValue("coverDefinitionHelper", 0) as gw.apd.model.CoverDefinitionHelper
    }
    
    property set coverDefinitionHelper ($arg :  gw.apd.model.CoverDefinitionHelper) {
      setVariableValue("coverDefinitionHelper", 0, $arg)
    }
    
    property get edition () : APDProductLineEdition {
      return getVariableValue("edition", 0) as APDProductLineEdition
    }
    
    property set edition ($arg :  APDProductLineEdition) {
      setVariableValue("edition", 0, $arg)
    }
    
    property get openForEdit () : boolean {
      return getVariableValue("openForEdit", 0) as java.lang.Boolean
    }
    
    property set openForEdit ($arg :  boolean) {
      setVariableValue("openForEdit", 0, $arg)
    }
    
    property get riskCoverable () : APDRiskCoverable {
      return getVariableValue("riskCoverable", 0) as APDRiskCoverable
    }
    
    property set riskCoverable ($arg :  APDRiskCoverable) {
      setVariableValue("riskCoverable", 0, $arg)
    }
    
    property get subClauses () : APDClause[] {
      return getVariableValue("subClauses", 0) as APDClause[]
    }
    
    property set subClauses ($arg :  APDClause[]) {
      setVariableValue("subClauses", 0, $arg)
    }
    
    property get userPreferences () : gw.api.web.userpreference.UserPreferencesOfCurrentUser {
      return getVariableValue("userPreferences", 0) as gw.api.web.userpreference.UserPreferencesOfCurrentUser
    }
    
    property set userPreferences ($arg :  gw.api.web.userpreference.UserPreferencesOfCurrentUser) {
      setVariableValue("userPreferences", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/apd/policy/APDRiskSubClausePopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends APDRiskSubClausePopupExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on MenuItem (id=ExistingClauses) at APDRiskSubClausePopup.pcf: line 70, column 53
    function action_7 () : void {
      availableSubClause.Clause.assignParent(clause)
    }
    
    // 'label' attribute on MenuItem (id=ExistingClauses) at APDRiskSubClausePopup.pcf: line 70, column 53
    function label_8 () : java.lang.Object {
      return availableSubClause.Label
    }
    
    property get availableSubClause () : gw.apd.web.APDClauseWrapper {
      return getIteratedValue(1) as gw.apd.web.APDClauseWrapper
    }
    
    
  }
  
  
}