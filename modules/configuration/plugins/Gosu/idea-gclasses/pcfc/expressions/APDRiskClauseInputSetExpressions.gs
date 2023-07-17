package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/apd/policy/APDRiskClauseInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class APDRiskClauseInputSetExpressions {
  @javax.annotation.Generated("config/web/pcf/line/apd/policy/APDRiskClauseInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class APDRiskClauseInputSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at APDRiskClauseInputSet.pcf: line 25, column 23
    function initialValue_0 () : Boolean {
      return new gw.api.web.userpreference.UserPreferencesOfCurrentUser().inDevelopMode()
    }
    
    // 'initialValue' attribute on Variable at APDRiskClauseInputSet.pcf: line 29, column 70
    function initialValue_1 () : gw.api.web.userpreference.UserPreferencesOfCurrentUser {
      return new gw.api.web.userpreference.UserPreferencesOfCurrentUser()
    }
    
    // 'sortBy' attribute on IteratorSort at APDRiskClauseInputSet.pcf: line 38, column 24
    function sortBy_2 (clause :  APDClause) : java.lang.Object {
      return clause.Subtype.Code
    }
    
    // 'sortBy' attribute on IteratorSort at APDRiskClauseInputSet.pcf: line 41, column 24
    function sortBy_3 (clause :  APDClause) : java.lang.Object {
      return clause.ClauseCategory.Sequence
    }
    
    // 'sortBy' attribute on IteratorSort at APDRiskClauseInputSet.pcf: line 44, column 24
    function sortBy_4 (clause :  APDClause) : java.lang.Object {
      return clause.Sequence
    }
    
    // 'sortBy' attribute on IteratorSort at APDRiskClauseInputSet.pcf: line 47, column 24
    function sortBy_5 (clause :  APDClause) : java.lang.Object {
      return clause.Name
    }
    
    // 'value' attribute on InputIterator (id=ClauseIterator) at APDRiskClauseInputSet.pcf: line 35, column 31
    function value_276 () : APDClause[] {
      return  userPreferences.canDesign() ? clauses : clauses.where(\clause -> riskCoverable.availability(clause) != APDDataExistenceType.TC_UNAVAILABLE)
    }
    
    property get clauses () : APDClause[] {
      return getRequireValue("clauses", 0) as APDClause[]
    }
    
    property set clauses ($arg :  APDClause[]) {
      setRequireValue("clauses", 0, $arg)
    }
    
    property get coverDefinitionHelper () : gw.apd.model.CoverDefinitionHelper {
      return getRequireValue("coverDefinitionHelper", 0) as gw.apd.model.CoverDefinitionHelper
    }
    
    property set coverDefinitionHelper ($arg :  gw.apd.model.CoverDefinitionHelper) {
      setRequireValue("coverDefinitionHelper", 0, $arg)
    }
    
    property get edition () : APDProductLineEdition {
      return getRequireValue("edition", 0) as APDProductLineEdition
    }
    
    property set edition ($arg :  APDProductLineEdition) {
      setRequireValue("edition", 0, $arg)
    }
    
    property get inDevelopMode () : Boolean {
      return getVariableValue("inDevelopMode", 0) as Boolean
    }
    
    property set inDevelopMode ($arg :  Boolean) {
      setVariableValue("inDevelopMode", 0, $arg)
    }
    
    property get openForEdit () : boolean {
      return getRequireValue("openForEdit", 0) as java.lang.Boolean
    }
    
    property set openForEdit ($arg :  boolean) {
      setRequireValue("openForEdit", 0, $arg)
    }
    
    property get riskCoverable () : APDRiskCoverable {
      return getRequireValue("riskCoverable", 0) as APDRiskCoverable
    }
    
    property set riskCoverable ($arg :  APDRiskCoverable) {
      setRequireValue("riskCoverable", 0, $arg)
    }
    
    property get userPreferences () : gw.api.web.userpreference.UserPreferencesOfCurrentUser {
      return getVariableValue("userPreferences", 0) as gw.api.web.userpreference.UserPreferencesOfCurrentUser
    }
    
    property set userPreferences ($arg :  gw.api.web.userpreference.UserPreferencesOfCurrentUser) {
      setVariableValue("userPreferences", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/apd/policy/APDRiskClauseInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class InputSetExpressionsImpl extends IteratorEntryExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on MenuItem (id=Details) at APDRiskClauseInputSet.pcf: line 79, column 55
    function action_12 () : void {
      APDCoveragePopup.push(clause as APDCoverage, CurrentLocation.InEditMode)
    }
    
    // 'action' attribute on MenuItem (id=MoveUp) at APDRiskClauseInputSet.pcf: line 84, column 104
    function action_15 () : void {
      gw.apd.web.APDRiskClauseInputSetHelper.moveClauseUp(clauses, clause)
    }
    
    // 'action' attribute on MenuItem (id=MoveDown) at APDRiskClauseInputSet.pcf: line 89, column 106
    function action_17 () : void {
      gw.apd.web.APDRiskClauseInputSetHelper.moveClauseDown(clauses, clause)
    }
    
    // 'action' attribute on MenuItem (id=Unassign) at APDRiskClauseInputSet.pcf: line 96, column 52
    function action_20 () : void {
      clause.unassignParent()
    }
    
    // 'action' attribute on ButtonInput (id=SubClausesButton_Input) at APDRiskClauseInputSet.pcf: line 288, column 91
    function action_208 () : void {
      APDRiskSubClausePopup.push(riskCoverable, riskClause.Clause, coverDefinitionHelper, edition, openForEdit)
    }
    
    // 'action' attribute on MenuItem (id=Remove) at APDRiskClauseInputSet.pcf: line 103, column 105
    function action_22 () : void {
      riskCoverable.setClauseExists(clause, false); riskCoverable.Coverable.removeClause(clause)
    }
    
    // 'action' attribute on ToolbarButton (id=addTerm) at APDRiskClauseInputSet.pcf: line 312, column 56
    function action_220 () : void {
      APDNewScheduleTermPopup.push(riskClause.RiskItems, clause, edition); gw.api.web.PebblesUtil.invalidateIterators(CurrentLocation, APDTerm)
    }
    
    // 'action' attribute on RangeInput (id=Usage_Input) at APDRiskClauseInputSet.pcf: line 113, column 50
    function action_31 () : void {
      APDClauseRulePopup.push(clause.getEditionRule(edition, APDRuleType.TC_EXISTENCE), clause, APDRuleType.TC_EXISTENCE, riskCoverable, edition, openForEdit)
    }
    
    // 'action' attribute on TextInput (id=Tags_Input) at APDRiskClauseInputSet.pcf: line 120, column 28
    function action_39 () : void {
      APDTagPopup.push(clause, openForEdit)
    }
    
    // 'action' attribute on MenuItem (id=Details) at APDRiskClauseInputSet.pcf: line 79, column 55
    function action_dest_13 () : pcf.api.Destination {
      return pcf.APDCoveragePopup.createDestination(clause as APDCoverage, CurrentLocation.InEditMode)
    }
    
    // 'action' attribute on ButtonInput (id=SubClausesButton_Input) at APDRiskClauseInputSet.pcf: line 288, column 91
    function action_dest_209 () : pcf.api.Destination {
      return pcf.APDRiskSubClausePopup.createDestination(riskCoverable, riskClause.Clause, coverDefinitionHelper, edition, openForEdit)
    }
    
    // 'action' attribute on RangeInput (id=Usage_Input) at APDRiskClauseInputSet.pcf: line 113, column 50
    function action_dest_32 () : pcf.api.Destination {
      return pcf.APDClauseRulePopup.createDestination(clause.getEditionRule(edition, APDRuleType.TC_EXISTENCE), clause, APDRuleType.TC_EXISTENCE, riskCoverable, edition, openForEdit)
    }
    
    // 'action' attribute on TextInput (id=Tags_Input) at APDRiskClauseInputSet.pcf: line 120, column 28
    function action_dest_40 () : pcf.api.Destination {
      return pcf.APDTagPopup.createDestination(clause, openForEdit)
    }
    
    // 'available' attribute on MenuItem (id=MoveUp) at APDRiskClauseInputSet.pcf: line 84, column 104
    function available_14 () : java.lang.Boolean {
      return clause.Sequence > gw.apd.web.APDRiskClauseInputSetHelper.minSequenceForClauseCategoryAndType(clauses, clause)
    }
    
    // 'available' attribute on MenuItem (id=MoveDown) at APDRiskClauseInputSet.pcf: line 89, column 106
    function available_16 () : java.lang.Boolean {
      return clause.Sequence < gw.apd.web.APDRiskClauseInputSetHelper.maxSequenceForClauseCategoryAndType(clauses, clause)
    }
    
    // 'available' attribute on MenuItem (id=Unassign) at APDRiskClauseInputSet.pcf: line 96, column 52
    function available_18 () : java.lang.Boolean {
      return not clause.HasAnyTermsReferencedByExtraneousRules
    }
    
    // 'allowToggle' attribute on InputGroup (id=ClauseInputGroup) at APDRiskClauseInputSet.pcf: line 127, column 67
    function available_270 () : java.lang.Boolean {
      return riskCoverable.availability(clause) != APDDataExistenceType.TC_REQUIRED and riskCoverable.availability(clause) != APDDataExistenceType.TC_UNAVAILABLE
    }
    
    // 'confirmMessage' attribute on MenuItem (id=Remove) at APDRiskClauseInputSet.pcf: line 103, column 105
    function confirmMessage_23 () : java.lang.String {
      return clause.HasSubClauses ? DisplayKey.get("Web.APDRiskClauseInputSet.Clause.Menu.RemoveWithSubClauses.ConfirmMessage", clause.SubClauses.Count) : DisplayKey.get("Web.APDRiskClauseInputSet.Clause.Menu.Remove.ConfirmMessage")
    }
    
    // 'value' attribute on CheckBoxInput (id=hasClauseSchedule_Input) at APDRiskClauseInputSet.pcf: line 295, column 89
    function defaultSetter_215 (__VALUE_TO_SET :  java.lang.Object) : void {
      hasClauseSchedule = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on TextInput (id=ClauseName_Input) at APDRiskClauseInputSet.pcf: line 74, column 49
    function defaultSetter_26 (__VALUE_TO_SET :  java.lang.Object) : void {
      clause.Name = (__VALUE_TO_SET as String)
    }
    
    // 'value' attribute on TypeKeyInput (id=Currency_Input) at APDRiskClauseInputSet.pcf: line 135, column 200
    function defaultSetter_47 (__VALUE_TO_SET :  java.lang.Object) : void {
      riskClause.Currency = (__VALUE_TO_SET as Currency)
    }
    
    // 'initialValue' attribute on Variable at APDRiskClauseInputSet.pcf: line 53, column 33
    function initialValue_6 () : APDRiskClause {
      return riskCoverable.getRiskClause(clause)
    }
    
    // 'initialValue' attribute on Variable at APDRiskClauseInputSet.pcf: line 58, column 35
    function initialValue_7 () : APDRiskCoverage {
      return riskClause typeis APDRiskCoverage ? riskClause as APDRiskCoverage : null
    }
    
    // 'initialValue' attribute on Variable at APDRiskClauseInputSet.pcf: line 62, column 27
    function initialValue_8 () : Boolean {
      return clause.HasSchedule
    }
    
    // 'label' attribute on Label (id=CoverageDetails) at APDRiskClauseInputSet.pcf: line 66, column 50
    function label_10 () : java.lang.String {
      return clause.UIDetailsLabel
    }
    
    // 'label' attribute on InputGroup (id=ClauseInputGroup) at APDRiskClauseInputSet.pcf: line 127, column 67
    function label_271 () : java.lang.Object {
      return clause.Name
    }
    
    // 'onChange' attribute on PostOnChange at APDRiskClauseInputSet.pcf: line 297, column 69
    function onChange_211 () : void {
      riskClause.setSchedule(hasClauseSchedule)
    }
    
    // 'onChange' attribute on PostOnChange at APDRiskClauseInputSet.pcf: line 281, column 66
    function onChange_44 () : void {
      riskCoverable.syncClauseAvailabilities()
    }
    
    // 'onToggle' attribute on InputGroup (id=ClauseInputGroup) at APDRiskClauseInputSet.pcf: line 127, column 67
    function setter_272 (VALUE :  java.lang.Boolean) : void {
      riskCoverable.setClauseExists(clause, VALUE)
    }
    
    // 'sortBy' attribute on IteratorSort at APDRiskClauseInputSet.pcf: line 324, column 36
    function sortBy_221 (term :  entity.APDTerm) : java.lang.Object {
      return term.Sequence
    }
    
    // 'sortBy' attribute on IteratorSort at APDRiskClauseInputSet.pcf: line 161, column 34
    function sortBy_54 (riskTerm :  APDRiskTerm) : java.lang.Object {
      return riskTerm.Attribute.Sequence
    }
    
    // 'toCreateAndAdd' attribute on RowIterator (id=RiskTerms) at APDRiskClauseInputSet.pcf: line 158, column 43
    function toCreateAndAdd_203 () : APDRiskTerm {
      return riskClause.createAndAddStandardTerm()
    }
    
    // 'toCreateAndAdd' attribute on RowIterator (id=ScheduleItems) at APDRiskClauseInputSet.pcf: line 361, column 51
    function toCreateAndAdd_265 () : APDRiskScheduleItem {
      return riskClause.createAndAddScheduleItem()
    }
    
    // 'toRemove' attribute on RowIterator (id=RiskTerms) at APDRiskClauseInputSet.pcf: line 158, column 43
    function toRemove_204 (riskTerm :  APDRiskTerm) : void {
      riskClause.removeStandardTerm(riskTerm)
    }
    
    // 'toRemove' attribute on RowIterator (id=ScheduleItems) at APDRiskClauseInputSet.pcf: line 361, column 51
    function toRemove_266 (item :  APDRiskScheduleItem) : void {
      riskClause.removeScheduleItem(item)
    }
    
    // 'valueRange' attribute on RangeInput (id=Usage_Input) at APDRiskClauseInputSet.pcf: line 113, column 50
    function valueRange_34 () : java.lang.Object {
      return typekey.APDDataExistenceType.AllTypeKeys
    }
    
    // 'value' attribute on TextInput (id=ClauseName_Input) at APDRiskClauseInputSet.pcf: line 74, column 49
    function valueRoot_27 () : java.lang.Object {
      return clause
    }
    
    // 'value' attribute on TypeKeyInput (id=Currency_Input) at APDRiskClauseInputSet.pcf: line 135, column 200
    function valueRoot_48 () : java.lang.Object {
      return riskClause
    }
    
    // 'value' attribute on RowIterator (id=RiskTerms) at APDRiskClauseInputSet.pcf: line 158, column 43
    function value_205 () : APDRiskTerm[] {
      return userPreferences.canDesign() ? riskClause.StandardRiskTerms : riskClause.StandardRiskTerms.where(\f -> f.Availability == APDDataExistenceType.TC_CAPTURED or f.Availability == APDDataExistenceType.TC_CAPTUREDISSUE or f.Availability == APDDataExistenceType.TC_CAPTUREDBIND or f.Availability == APDDataExistenceType.TC_CAPTUREDQUOTE or f.Availability == APDDataExistenceType.TC_DERIVED)
    }
    
    // 'value' attribute on CheckBoxInput (id=hasClauseSchedule_Input) at APDRiskClauseInputSet.pcf: line 295, column 89
    function value_214 () : java.lang.Boolean {
      return hasClauseSchedule
    }
    
    // 'value' attribute on CellIterator (id=TermNames) at APDRiskClauseInputSet.pcf: line 321, column 48
    function value_235 () : entity.APDTerm[] {
      return riskClause.Clause.ScheduleTermsSortedBySequence
    }
    
    // 'value' attribute on TextInput (id=ClauseName_Input) at APDRiskClauseInputSet.pcf: line 74, column 49
    function value_25 () : String {
      return clause.Name
    }
    
    // 'value' attribute on RowIterator (id=ScheduleItems) at APDRiskClauseInputSet.pcf: line 361, column 51
    function value_267 () : APDRiskScheduleItem[] {
      return riskClause.RiskItems
    }
    
    // 'value' attribute on RangeInput (id=Usage_Input) at APDRiskClauseInputSet.pcf: line 113, column 50
    function value_33 () : typekey.APDDataExistenceType {
      return riskCoverable.availability(clause)
    }
    
    // 'value' attribute on TextInput (id=Tags_Input) at APDRiskClauseInputSet.pcf: line 120, column 28
    function value_41 () : java.lang.String {
      return clause.TagDisplayValue
    }
    
    // 'value' attribute on TypeKeyInput (id=Currency_Input) at APDRiskClauseInputSet.pcf: line 135, column 200
    function value_46 () : Currency {
      return riskClause.Currency
    }
    
    // 'valueRange' attribute on RangeInput (id=Usage_Input) at APDRiskClauseInputSet.pcf: line 113, column 50
    function verifyValueRangeIsAllowedType_35 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Usage_Input) at APDRiskClauseInputSet.pcf: line 113, column 50
    function verifyValueRangeIsAllowedType_35 ($$arg :  typekey.APDDataExistenceType[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Usage_Input) at APDRiskClauseInputSet.pcf: line 113, column 50
    function verifyValueRange_36 () : void {
      var __valueRangeArg = typekey.APDDataExistenceType.AllTypeKeys
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_35(__valueRangeArg)
    }
    
    // 'valueType' attribute on TypeKeyInput (id=Currency_Input) at APDRiskClauseInputSet.pcf: line 135, column 200
    function verifyValueType_51 () : void {
      var __valueTypeArg : Currency
      // If this assignment statement fails to compile, that means that the declared valueType
      // is not a valid type for use with this Input or Cell type
      var __requiredTypeArg : gw.entity.TypeKey = __valueTypeArg
    }
    
    // 'visible' attribute on MenuItem (id=Details) at APDRiskClauseInputSet.pcf: line 79, column 55
    function visible_11 () : java.lang.Boolean {
      return (typeof clause) == APDCoverage
    }
    
    // 'visible' attribute on MenuItem (id=Unassign) at APDRiskClauseInputSet.pcf: line 96, column 52
    function visible_19 () : java.lang.Boolean {
      return not clause.IsTopLevelClause
    }
    
    // 'visible' attribute on ListViewInput at APDRiskClauseInputSet.pcf: line 139, column 88
    function visible_206 () : java.lang.Boolean {
      return userPreferences.canDesign() or riskClause.RiskTerms.Count > 0
    }
    
    // 'visible' attribute on ButtonInput (id=SubClausesButton_Input) at APDRiskClauseInputSet.pcf: line 288, column 91
    function visible_207 () : java.lang.Boolean {
      return not userPreferences.inUseMode() or riskClause.Clause.HasSubClauses
    }
    
    // 'visible' attribute on CheckBoxInput (id=hasClauseSchedule_Input) at APDRiskClauseInputSet.pcf: line 295, column 89
    function visible_213 () : java.lang.Boolean {
      return userPreferences.canDesign() and (InEditMode or hasClauseSchedule)
    }
    
    // 'childrenVisible' attribute on InputGroup (id=ClauseInputGroup) at APDRiskClauseInputSet.pcf: line 127, column 67
    function visible_269 () : java.lang.Boolean {
      return riskClause != null
    }
    
    // 'visible' attribute on TypeKeyInput (id=Currency_Input) at APDRiskClauseInputSet.pcf: line 135, column 200
    function visible_45 () : java.lang.Boolean {
      return riskCoverable.Branch.Policy.APDProduct.Currencies == APDCurrencyHandling.TC_BASICMULTI or riskCoverable.Branch.Policy.APDProduct.Currencies == APDCurrencyHandling.TC_FULLMULTI
    }
    
    // 'visible' attribute on TextCell (id=FieldName_Cell) at APDRiskClauseInputSet.pcf: line 275, column 46
    function visible_62 () : java.lang.Boolean {
      return inDevelopMode
    }
    
    // 'visible' attribute on Label (id=CoverageDetails) at APDRiskClauseInputSet.pcf: line 66, column 50
    function visible_9 () : java.lang.Boolean {
      return userPreferences.canDesign()
    }
    
    property get hasClauseSchedule () : Boolean {
      return getVariableValue("hasClauseSchedule", 2) as Boolean
    }
    
    property set hasClauseSchedule ($arg :  Boolean) {
      setVariableValue("hasClauseSchedule", 2, $arg)
    }
    
    property get riskClause () : APDRiskClause {
      return getVariableValue("riskClause", 2) as APDRiskClause
    }
    
    property set riskClause ($arg :  APDRiskClause) {
      setVariableValue("riskClause", 2, $arg)
    }
    
    property get riskCoverage () : APDRiskCoverage {
      return getVariableValue("riskCoverage", 2) as APDRiskCoverage
    }
    
    property set riskCoverage ($arg :  APDRiskCoverage) {
      setVariableValue("riskCoverage", 2, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/apd/policy/APDRiskClauseInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry2ExpressionsImpl extends InputSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 3)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on MenuItem (id=MoveDown) at APDRiskClauseInputSet.pcf: line 195, column 116
    function action_100 () : void {
      riskTerm.moveDown()
    }
    
    // 'action' attribute on MenuItem (id=DropDownDefinition) at APDRiskClauseInputSet.pcf: line 207, column 59
    function action_103 () : void {
      APDDropDownDefinitionPopup.push(riskTerm.Attribute, true, edition, CurrentLocation.InEditMode)
    }
    
    // 'action' attribute on RangeCell (id=Usage_Cell) at APDRiskClauseInputSet.pcf: line 223, column 60
    function action_114 () : void {
      APDAttributeRulePopup.push(riskTerm.Attribute.getEditionRule(edition, APDRuleType.TC_EXISTENCE), riskTerm.Attribute, APDRuleType.TC_EXISTENCE, edition, openForEdit)
    }
    
    // 'action' attribute on TextCell (id=Tags_Cell) at APDRiskClauseInputSet.pcf: line 257, column 38
    function action_187 () : void {
      APDTagPopup.push(riskTerm.Attribute, openForEdit)
    }
    
    // 'action' attribute on MenuItem (id=MoveUp) at APDRiskClauseInputSet.pcf: line 190, column 114
    function action_98 () : void {
      riskTerm.moveUp()
    }
    
    // 'action' attribute on MenuItem (id=DropDownDefinition) at APDRiskClauseInputSet.pcf: line 207, column 59
    function action_dest_104 () : pcf.api.Destination {
      return pcf.APDDropDownDefinitionPopup.createDestination(riskTerm.Attribute, true, edition, CurrentLocation.InEditMode)
    }
    
    // 'action' attribute on RangeCell (id=Usage_Cell) at APDRiskClauseInputSet.pcf: line 223, column 60
    function action_dest_115 () : pcf.api.Destination {
      return pcf.APDAttributeRulePopup.createDestination(riskTerm.Attribute.getEditionRule(edition, APDRuleType.TC_EXISTENCE), riskTerm.Attribute, APDRuleType.TC_EXISTENCE, edition, openForEdit)
    }
    
    // 'action' attribute on TextCell (id=Tags_Cell) at APDRiskClauseInputSet.pcf: line 257, column 38
    function action_dest_188 () : pcf.api.Destination {
      return pcf.APDTagPopup.createDestination(riskTerm.Attribute, openForEdit)
    }
    
    // 'available' attribute on MenuItem (id=MoveUp) at APDRiskClauseInputSet.pcf: line 190, column 114
    function available_97 () : java.lang.Boolean {
      return riskTerm.Attribute.Sequence != 1
    }
    
    // 'available' attribute on MenuItem (id=MoveDown) at APDRiskClauseInputSet.pcf: line 195, column 116
    function available_99 () : java.lang.Boolean {
      return riskTerm.Attribute.Sequence != riskClause.Clause.StandardTerms.Count
    }
    
    // 'def' attribute on ModalCellRef (id=DefaultValue) at APDRiskClauseInputSet.pcf: line 231, column 60
    function def_onEnter_124 (def :  pcf.APDAttributeDefaultValue_bigdecimal) : void {
      def.onEnter(riskTerm.Attribute, APDRuleType.TC_DEFAULT, riskTerm, edition, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=DefaultValue) at APDRiskClauseInputSet.pcf: line 231, column 60
    function def_onEnter_126 (def :  pcf.APDAttributeDefaultValue_boolean) : void {
      def.onEnter(riskTerm.Attribute, APDRuleType.TC_DEFAULT, riskTerm, edition, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=DefaultValue) at APDRiskClauseInputSet.pcf: line 231, column 60
    function def_onEnter_128 (def :  pcf.APDAttributeDefaultValue_calculated) : void {
      def.onEnter(riskTerm.Attribute, APDRuleType.TC_DEFAULT, riskTerm, edition, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=DefaultValue) at APDRiskClauseInputSet.pcf: line 231, column 60
    function def_onEnter_130 (def :  pcf.APDAttributeDefaultValue_date) : void {
      def.onEnter(riskTerm.Attribute, APDRuleType.TC_DEFAULT, riskTerm, edition, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=DefaultValue) at APDRiskClauseInputSet.pcf: line 231, column 60
    function def_onEnter_132 (def :  pcf.APDAttributeDefaultValue_default) : void {
      def.onEnter(riskTerm.Attribute, APDRuleType.TC_DEFAULT, riskTerm, edition, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=DefaultValue) at APDRiskClauseInputSet.pcf: line 231, column 60
    function def_onEnter_134 (def :  pcf.APDAttributeDefaultValue_integer) : void {
      def.onEnter(riskTerm.Attribute, APDRuleType.TC_DEFAULT, riskTerm, edition, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=DefaultValue) at APDRiskClauseInputSet.pcf: line 231, column 60
    function def_onEnter_136 (def :  pcf.APDAttributeDefaultValue_money) : void {
      def.onEnter(riskTerm.Attribute, APDRuleType.TC_DEFAULT, riskTerm, edition, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=DefaultValue) at APDRiskClauseInputSet.pcf: line 231, column 60
    function def_onEnter_138 (def :  pcf.APDAttributeDefaultValue_none) : void {
      def.onEnter(riskTerm.Attribute, APDRuleType.TC_DEFAULT, riskTerm, edition, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=DefaultValue) at APDRiskClauseInputSet.pcf: line 231, column 60
    function def_onEnter_140 (def :  pcf.APDAttributeDefaultValue_typekey) : void {
      def.onEnter(riskTerm.Attribute, APDRuleType.TC_DEFAULT, riskTerm, edition, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=MinimumValue) at APDRiskClauseInputSet.pcf: line 240, column 60
    function def_onEnter_145 (def :  pcf.APDAttributeDefaultValue_bigdecimal) : void {
      def.onEnter(riskTerm.Attribute, APDRuleType.TC_MIN, riskTerm, edition, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=MinimumValue) at APDRiskClauseInputSet.pcf: line 240, column 60
    function def_onEnter_147 (def :  pcf.APDAttributeDefaultValue_boolean) : void {
      def.onEnter(riskTerm.Attribute, APDRuleType.TC_MIN, riskTerm, edition, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=MinimumValue) at APDRiskClauseInputSet.pcf: line 240, column 60
    function def_onEnter_149 (def :  pcf.APDAttributeDefaultValue_calculated) : void {
      def.onEnter(riskTerm.Attribute, APDRuleType.TC_MIN, riskTerm, edition, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=MinimumValue) at APDRiskClauseInputSet.pcf: line 240, column 60
    function def_onEnter_151 (def :  pcf.APDAttributeDefaultValue_date) : void {
      def.onEnter(riskTerm.Attribute, APDRuleType.TC_MIN, riskTerm, edition, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=MinimumValue) at APDRiskClauseInputSet.pcf: line 240, column 60
    function def_onEnter_153 (def :  pcf.APDAttributeDefaultValue_default) : void {
      def.onEnter(riskTerm.Attribute, APDRuleType.TC_MIN, riskTerm, edition, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=MinimumValue) at APDRiskClauseInputSet.pcf: line 240, column 60
    function def_onEnter_155 (def :  pcf.APDAttributeDefaultValue_integer) : void {
      def.onEnter(riskTerm.Attribute, APDRuleType.TC_MIN, riskTerm, edition, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=MinimumValue) at APDRiskClauseInputSet.pcf: line 240, column 60
    function def_onEnter_157 (def :  pcf.APDAttributeDefaultValue_money) : void {
      def.onEnter(riskTerm.Attribute, APDRuleType.TC_MIN, riskTerm, edition, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=MinimumValue) at APDRiskClauseInputSet.pcf: line 240, column 60
    function def_onEnter_159 (def :  pcf.APDAttributeDefaultValue_none) : void {
      def.onEnter(riskTerm.Attribute, APDRuleType.TC_MIN, riskTerm, edition, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=MinimumValue) at APDRiskClauseInputSet.pcf: line 240, column 60
    function def_onEnter_161 (def :  pcf.APDAttributeDefaultValue_typekey) : void {
      def.onEnter(riskTerm.Attribute, APDRuleType.TC_MIN, riskTerm, edition, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=MaximumValue) at APDRiskClauseInputSet.pcf: line 248, column 60
    function def_onEnter_166 (def :  pcf.APDAttributeDefaultValue_bigdecimal) : void {
      def.onEnter(riskTerm.Attribute, APDRuleType.TC_MAX, riskTerm, edition, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=MaximumValue) at APDRiskClauseInputSet.pcf: line 248, column 60
    function def_onEnter_168 (def :  pcf.APDAttributeDefaultValue_boolean) : void {
      def.onEnter(riskTerm.Attribute, APDRuleType.TC_MAX, riskTerm, edition, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=MaximumValue) at APDRiskClauseInputSet.pcf: line 248, column 60
    function def_onEnter_170 (def :  pcf.APDAttributeDefaultValue_calculated) : void {
      def.onEnter(riskTerm.Attribute, APDRuleType.TC_MAX, riskTerm, edition, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=MaximumValue) at APDRiskClauseInputSet.pcf: line 248, column 60
    function def_onEnter_172 (def :  pcf.APDAttributeDefaultValue_date) : void {
      def.onEnter(riskTerm.Attribute, APDRuleType.TC_MAX, riskTerm, edition, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=MaximumValue) at APDRiskClauseInputSet.pcf: line 248, column 60
    function def_onEnter_174 (def :  pcf.APDAttributeDefaultValue_default) : void {
      def.onEnter(riskTerm.Attribute, APDRuleType.TC_MAX, riskTerm, edition, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=MaximumValue) at APDRiskClauseInputSet.pcf: line 248, column 60
    function def_onEnter_176 (def :  pcf.APDAttributeDefaultValue_integer) : void {
      def.onEnter(riskTerm.Attribute, APDRuleType.TC_MAX, riskTerm, edition, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=MaximumValue) at APDRiskClauseInputSet.pcf: line 248, column 60
    function def_onEnter_178 (def :  pcf.APDAttributeDefaultValue_money) : void {
      def.onEnter(riskTerm.Attribute, APDRuleType.TC_MAX, riskTerm, edition, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=MaximumValue) at APDRiskClauseInputSet.pcf: line 248, column 60
    function def_onEnter_180 (def :  pcf.APDAttributeDefaultValue_none) : void {
      def.onEnter(riskTerm.Attribute, APDRuleType.TC_MAX, riskTerm, edition, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=MaximumValue) at APDRiskClauseInputSet.pcf: line 248, column 60
    function def_onEnter_182 (def :  pcf.APDAttributeDefaultValue_typekey) : void {
      def.onEnter(riskTerm.Attribute, APDRuleType.TC_MAX, riskTerm, edition, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskClauseInputSet.pcf: line 178, column 53
    function def_onEnter_70 (def :  pcf.APDDataFieldValue_bigdecimal) : void {
      def.onEnter(riskTerm, edition)
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskClauseInputSet.pcf: line 178, column 53
    function def_onEnter_72 (def :  pcf.APDDataFieldValue_boolean) : void {
      def.onEnter(riskTerm, edition)
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskClauseInputSet.pcf: line 178, column 53
    function def_onEnter_74 (def :  pcf.APDDataFieldValue_date) : void {
      def.onEnter(riskTerm, edition)
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskClauseInputSet.pcf: line 178, column 53
    function def_onEnter_76 (def :  pcf.APDDataFieldValue_default) : void {
      def.onEnter(riskTerm, edition)
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskClauseInputSet.pcf: line 178, column 53
    function def_onEnter_78 (def :  pcf.APDDataFieldValue_integer) : void {
      def.onEnter(riskTerm, edition)
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskClauseInputSet.pcf: line 178, column 53
    function def_onEnter_80 (def :  pcf.APDDataFieldValue_location) : void {
      def.onEnter(riskTerm, edition)
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskClauseInputSet.pcf: line 178, column 53
    function def_onEnter_82 (def :  pcf.APDDataFieldValue_money) : void {
      def.onEnter(riskTerm, edition)
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskClauseInputSet.pcf: line 178, column 53
    function def_onEnter_84 (def :  pcf.APDDataFieldValue_party) : void {
      def.onEnter(riskTerm, edition)
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskClauseInputSet.pcf: line 178, column 53
    function def_onEnter_86 (def :  pcf.APDDataFieldValue_scalablebigdecimal) : void {
      def.onEnter(riskTerm, edition)
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskClauseInputSet.pcf: line 178, column 53
    function def_onEnter_88 (def :  pcf.APDDataFieldValue_scalableinteger) : void {
      def.onEnter(riskTerm, edition)
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskClauseInputSet.pcf: line 178, column 53
    function def_onEnter_90 (def :  pcf.APDDataFieldValue_scalablemoney) : void {
      def.onEnter(riskTerm, edition)
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskClauseInputSet.pcf: line 178, column 53
    function def_onEnter_92 (def :  pcf.APDDataFieldValue_typekey) : void {
      def.onEnter(riskTerm, edition)
    }
    
    // 'def' attribute on ModalCellRef (id=DefaultValue) at APDRiskClauseInputSet.pcf: line 231, column 60
    function def_refreshVariables_125 (def :  pcf.APDAttributeDefaultValue_bigdecimal) : void {
      def.refreshVariables(riskTerm.Attribute, APDRuleType.TC_DEFAULT, riskTerm, edition, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=DefaultValue) at APDRiskClauseInputSet.pcf: line 231, column 60
    function def_refreshVariables_127 (def :  pcf.APDAttributeDefaultValue_boolean) : void {
      def.refreshVariables(riskTerm.Attribute, APDRuleType.TC_DEFAULT, riskTerm, edition, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=DefaultValue) at APDRiskClauseInputSet.pcf: line 231, column 60
    function def_refreshVariables_129 (def :  pcf.APDAttributeDefaultValue_calculated) : void {
      def.refreshVariables(riskTerm.Attribute, APDRuleType.TC_DEFAULT, riskTerm, edition, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=DefaultValue) at APDRiskClauseInputSet.pcf: line 231, column 60
    function def_refreshVariables_131 (def :  pcf.APDAttributeDefaultValue_date) : void {
      def.refreshVariables(riskTerm.Attribute, APDRuleType.TC_DEFAULT, riskTerm, edition, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=DefaultValue) at APDRiskClauseInputSet.pcf: line 231, column 60
    function def_refreshVariables_133 (def :  pcf.APDAttributeDefaultValue_default) : void {
      def.refreshVariables(riskTerm.Attribute, APDRuleType.TC_DEFAULT, riskTerm, edition, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=DefaultValue) at APDRiskClauseInputSet.pcf: line 231, column 60
    function def_refreshVariables_135 (def :  pcf.APDAttributeDefaultValue_integer) : void {
      def.refreshVariables(riskTerm.Attribute, APDRuleType.TC_DEFAULT, riskTerm, edition, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=DefaultValue) at APDRiskClauseInputSet.pcf: line 231, column 60
    function def_refreshVariables_137 (def :  pcf.APDAttributeDefaultValue_money) : void {
      def.refreshVariables(riskTerm.Attribute, APDRuleType.TC_DEFAULT, riskTerm, edition, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=DefaultValue) at APDRiskClauseInputSet.pcf: line 231, column 60
    function def_refreshVariables_139 (def :  pcf.APDAttributeDefaultValue_none) : void {
      def.refreshVariables(riskTerm.Attribute, APDRuleType.TC_DEFAULT, riskTerm, edition, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=DefaultValue) at APDRiskClauseInputSet.pcf: line 231, column 60
    function def_refreshVariables_141 (def :  pcf.APDAttributeDefaultValue_typekey) : void {
      def.refreshVariables(riskTerm.Attribute, APDRuleType.TC_DEFAULT, riskTerm, edition, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=MinimumValue) at APDRiskClauseInputSet.pcf: line 240, column 60
    function def_refreshVariables_146 (def :  pcf.APDAttributeDefaultValue_bigdecimal) : void {
      def.refreshVariables(riskTerm.Attribute, APDRuleType.TC_MIN, riskTerm, edition, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=MinimumValue) at APDRiskClauseInputSet.pcf: line 240, column 60
    function def_refreshVariables_148 (def :  pcf.APDAttributeDefaultValue_boolean) : void {
      def.refreshVariables(riskTerm.Attribute, APDRuleType.TC_MIN, riskTerm, edition, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=MinimumValue) at APDRiskClauseInputSet.pcf: line 240, column 60
    function def_refreshVariables_150 (def :  pcf.APDAttributeDefaultValue_calculated) : void {
      def.refreshVariables(riskTerm.Attribute, APDRuleType.TC_MIN, riskTerm, edition, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=MinimumValue) at APDRiskClauseInputSet.pcf: line 240, column 60
    function def_refreshVariables_152 (def :  pcf.APDAttributeDefaultValue_date) : void {
      def.refreshVariables(riskTerm.Attribute, APDRuleType.TC_MIN, riskTerm, edition, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=MinimumValue) at APDRiskClauseInputSet.pcf: line 240, column 60
    function def_refreshVariables_154 (def :  pcf.APDAttributeDefaultValue_default) : void {
      def.refreshVariables(riskTerm.Attribute, APDRuleType.TC_MIN, riskTerm, edition, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=MinimumValue) at APDRiskClauseInputSet.pcf: line 240, column 60
    function def_refreshVariables_156 (def :  pcf.APDAttributeDefaultValue_integer) : void {
      def.refreshVariables(riskTerm.Attribute, APDRuleType.TC_MIN, riskTerm, edition, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=MinimumValue) at APDRiskClauseInputSet.pcf: line 240, column 60
    function def_refreshVariables_158 (def :  pcf.APDAttributeDefaultValue_money) : void {
      def.refreshVariables(riskTerm.Attribute, APDRuleType.TC_MIN, riskTerm, edition, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=MinimumValue) at APDRiskClauseInputSet.pcf: line 240, column 60
    function def_refreshVariables_160 (def :  pcf.APDAttributeDefaultValue_none) : void {
      def.refreshVariables(riskTerm.Attribute, APDRuleType.TC_MIN, riskTerm, edition, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=MinimumValue) at APDRiskClauseInputSet.pcf: line 240, column 60
    function def_refreshVariables_162 (def :  pcf.APDAttributeDefaultValue_typekey) : void {
      def.refreshVariables(riskTerm.Attribute, APDRuleType.TC_MIN, riskTerm, edition, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=MaximumValue) at APDRiskClauseInputSet.pcf: line 248, column 60
    function def_refreshVariables_167 (def :  pcf.APDAttributeDefaultValue_bigdecimal) : void {
      def.refreshVariables(riskTerm.Attribute, APDRuleType.TC_MAX, riskTerm, edition, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=MaximumValue) at APDRiskClauseInputSet.pcf: line 248, column 60
    function def_refreshVariables_169 (def :  pcf.APDAttributeDefaultValue_boolean) : void {
      def.refreshVariables(riskTerm.Attribute, APDRuleType.TC_MAX, riskTerm, edition, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=MaximumValue) at APDRiskClauseInputSet.pcf: line 248, column 60
    function def_refreshVariables_171 (def :  pcf.APDAttributeDefaultValue_calculated) : void {
      def.refreshVariables(riskTerm.Attribute, APDRuleType.TC_MAX, riskTerm, edition, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=MaximumValue) at APDRiskClauseInputSet.pcf: line 248, column 60
    function def_refreshVariables_173 (def :  pcf.APDAttributeDefaultValue_date) : void {
      def.refreshVariables(riskTerm.Attribute, APDRuleType.TC_MAX, riskTerm, edition, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=MaximumValue) at APDRiskClauseInputSet.pcf: line 248, column 60
    function def_refreshVariables_175 (def :  pcf.APDAttributeDefaultValue_default) : void {
      def.refreshVariables(riskTerm.Attribute, APDRuleType.TC_MAX, riskTerm, edition, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=MaximumValue) at APDRiskClauseInputSet.pcf: line 248, column 60
    function def_refreshVariables_177 (def :  pcf.APDAttributeDefaultValue_integer) : void {
      def.refreshVariables(riskTerm.Attribute, APDRuleType.TC_MAX, riskTerm, edition, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=MaximumValue) at APDRiskClauseInputSet.pcf: line 248, column 60
    function def_refreshVariables_179 (def :  pcf.APDAttributeDefaultValue_money) : void {
      def.refreshVariables(riskTerm.Attribute, APDRuleType.TC_MAX, riskTerm, edition, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=MaximumValue) at APDRiskClauseInputSet.pcf: line 248, column 60
    function def_refreshVariables_181 (def :  pcf.APDAttributeDefaultValue_none) : void {
      def.refreshVariables(riskTerm.Attribute, APDRuleType.TC_MAX, riskTerm, edition, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=MaximumValue) at APDRiskClauseInputSet.pcf: line 248, column 60
    function def_refreshVariables_183 (def :  pcf.APDAttributeDefaultValue_typekey) : void {
      def.refreshVariables(riskTerm.Attribute, APDRuleType.TC_MAX, riskTerm, edition, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskClauseInputSet.pcf: line 178, column 53
    function def_refreshVariables_71 (def :  pcf.APDDataFieldValue_bigdecimal) : void {
      def.refreshVariables(riskTerm, edition)
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskClauseInputSet.pcf: line 178, column 53
    function def_refreshVariables_73 (def :  pcf.APDDataFieldValue_boolean) : void {
      def.refreshVariables(riskTerm, edition)
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskClauseInputSet.pcf: line 178, column 53
    function def_refreshVariables_75 (def :  pcf.APDDataFieldValue_date) : void {
      def.refreshVariables(riskTerm, edition)
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskClauseInputSet.pcf: line 178, column 53
    function def_refreshVariables_77 (def :  pcf.APDDataFieldValue_default) : void {
      def.refreshVariables(riskTerm, edition)
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskClauseInputSet.pcf: line 178, column 53
    function def_refreshVariables_79 (def :  pcf.APDDataFieldValue_integer) : void {
      def.refreshVariables(riskTerm, edition)
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskClauseInputSet.pcf: line 178, column 53
    function def_refreshVariables_81 (def :  pcf.APDDataFieldValue_location) : void {
      def.refreshVariables(riskTerm, edition)
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskClauseInputSet.pcf: line 178, column 53
    function def_refreshVariables_83 (def :  pcf.APDDataFieldValue_money) : void {
      def.refreshVariables(riskTerm, edition)
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskClauseInputSet.pcf: line 178, column 53
    function def_refreshVariables_85 (def :  pcf.APDDataFieldValue_party) : void {
      def.refreshVariables(riskTerm, edition)
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskClauseInputSet.pcf: line 178, column 53
    function def_refreshVariables_87 (def :  pcf.APDDataFieldValue_scalablebigdecimal) : void {
      def.refreshVariables(riskTerm, edition)
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskClauseInputSet.pcf: line 178, column 53
    function def_refreshVariables_89 (def :  pcf.APDDataFieldValue_scalableinteger) : void {
      def.refreshVariables(riskTerm, edition)
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskClauseInputSet.pcf: line 178, column 53
    function def_refreshVariables_91 (def :  pcf.APDDataFieldValue_scalablemoney) : void {
      def.refreshVariables(riskTerm, edition)
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskClauseInputSet.pcf: line 178, column 53
    function def_refreshVariables_93 (def :  pcf.APDDataFieldValue_typekey) : void {
      def.refreshVariables(riskTerm, edition)
    }
    
    // 'value' attribute on TypeKeyCell (id=type_Cell) at APDRiskClauseInputSet.pcf: line 207, column 59
    function defaultSetter_107 (__VALUE_TO_SET :  java.lang.Object) : void {
      riskTerm.Attribute.Type = (__VALUE_TO_SET as APDFieldType)
    }
    
    // 'value' attribute on TextCell (id=FieldDescription_Cell) at APDRiskClauseInputSet.pcf: line 266, column 60
    function defaultSetter_193 (__VALUE_TO_SET :  java.lang.Object) : void {
      riskTerm.Attribute.Description = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextCell (id=FieldName_Cell) at APDRiskClauseInputSet.pcf: line 275, column 46
    function defaultSetter_198 (__VALUE_TO_SET :  java.lang.Object) : void {
      riskTerm.Attribute.Name = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextCell (id=FieldLabel_Cell) at APDRiskClauseInputSet.pcf: line 171, column 55
    function defaultSetter_65 (__VALUE_TO_SET :  java.lang.Object) : void {
      riskTerm.Attribute.Label = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'editable' attribute on TypeKeyCell (id=type_Cell) at APDRiskClauseInputSet.pcf: line 207, column 59
    function editable_105 () : java.lang.Boolean {
      return riskTerm.Attribute.CanChangeType
    }
    
    // 'editable' attribute on TextCell (id=FieldLabel_Cell) at APDRiskClauseInputSet.pcf: line 171, column 55
    function editable_63 () : java.lang.Boolean {
      return userPreferences.canDesign()
    }
    
    // 'editable' attribute on ModalCellRef (id=value) at APDRiskClauseInputSet.pcf: line 178, column 53
    function editable_69 () : java.lang.Boolean {
      return riskTerm.EditableInUI
    }
    
    // 'filter' attribute on TypeKeyCell (id=type_Cell) at APDRiskClauseInputSet.pcf: line 207, column 59
    function filter_109 (VALUE :  APDFieldType, VALUES :  APDFieldType[]) : java.lang.Boolean {
      return APDFieldType.TF_TERMTYPES.TypeKeys.contains(VALUE)
    }
    
    // 'mode' attribute on ModalCellRef (id=DefaultValue) at APDRiskClauseInputSet.pcf: line 231, column 60
    function mode_142 () : java.lang.Object {
      return riskTerm.Attribute.getUIRuleMode(edition, APDRuleType.TC_DEFAULT)
    }
    
    // 'mode' attribute on ModalCellRef (id=MinimumValue) at APDRiskClauseInputSet.pcf: line 240, column 60
    function mode_163 () : java.lang.Object {
      return riskTerm.Attribute.getUIRuleMode(edition, APDRuleType.TC_MIN)
    }
    
    // 'mode' attribute on ModalCellRef (id=MaximumValue) at APDRiskClauseInputSet.pcf: line 248, column 60
    function mode_184 () : java.lang.Object {
      return riskTerm.Attribute.getUIRuleMode(edition, APDRuleType.TC_MAX)
    }
    
    // 'mode' attribute on ModalCellRef (id=value) at APDRiskClauseInputSet.pcf: line 178, column 53
    function mode_94 () : java.lang.Object {
      return riskTerm.Attribute.Type
    }
    
    // 'valueRange' attribute on RangeCell (id=Usage_Cell) at APDRiskClauseInputSet.pcf: line 223, column 60
    function valueRange_118 () : java.lang.Object {
      return APDDataExistenceType.getTypeKeys(false)
    }
    
    // 'value' attribute on RangeCell (id=Usage_Cell) at APDRiskClauseInputSet.pcf: line 223, column 60
    function valueRoot_117 () : java.lang.Object {
      return riskTerm
    }
    
    // 'value' attribute on TextCell (id=FieldLabel_Cell) at APDRiskClauseInputSet.pcf: line 171, column 55
    function valueRoot_66 () : java.lang.Object {
      return riskTerm.Attribute
    }
    
    // 'value' attribute on TypeKeyCell (id=type_Cell) at APDRiskClauseInputSet.pcf: line 207, column 59
    function value_106 () : APDFieldType {
      return riskTerm.Attribute.Type
    }
    
    // 'value' attribute on RangeCell (id=Usage_Cell) at APDRiskClauseInputSet.pcf: line 223, column 60
    function value_116 () : APDDataExistenceType {
      return riskTerm.Availability
    }
    
    // 'value' attribute on TextCell (id=Tags_Cell) at APDRiskClauseInputSet.pcf: line 257, column 38
    function value_189 () : java.lang.String {
      return riskTerm.Attribute.TagDisplayValue
    }
    
    // 'value' attribute on TextCell (id=FieldDescription_Cell) at APDRiskClauseInputSet.pcf: line 266, column 60
    function value_192 () : java.lang.String {
      return riskTerm.Attribute.Description
    }
    
    // 'value' attribute on TextCell (id=FieldName_Cell) at APDRiskClauseInputSet.pcf: line 275, column 46
    function value_197 () : java.lang.String {
      return riskTerm.Attribute.Name
    }
    
    // 'value' attribute on TextCell (id=FieldLabel_Cell) at APDRiskClauseInputSet.pcf: line 171, column 55
    function value_64 () : java.lang.String {
      return riskTerm.Attribute.Label
    }
    
    // 'valueRange' attribute on RangeCell (id=Usage_Cell) at APDRiskClauseInputSet.pcf: line 223, column 60
    function verifyValueRangeIsAllowedType_119 ($$arg :  APDDataExistenceType[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=Usage_Cell) at APDRiskClauseInputSet.pcf: line 223, column 60
    function verifyValueRangeIsAllowedType_119 ($$arg :  gw.api.database.IQueryBeanResult) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=Usage_Cell) at APDRiskClauseInputSet.pcf: line 223, column 60
    function verifyValueRangeIsAllowedType_119 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=Usage_Cell) at APDRiskClauseInputSet.pcf: line 223, column 60
    function verifyValueRange_120 () : void {
      var __valueRangeArg = APDDataExistenceType.getTypeKeys(false)
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_119(__valueRangeArg)
    }
    
    // 'valueType' attribute on TypeKeyCell (id=type_Cell) at APDRiskClauseInputSet.pcf: line 207, column 59
    function verifyValueType_113 () : void {
      var __valueTypeArg : APDFieldType
      // If this assignment statement fails to compile, that means that the declared valueType
      // is not a valid type for use with this Input or Cell type
      var __requiredTypeArg : gw.entity.TypeKey = __valueTypeArg
    }
    
    // 'visible' attribute on MenuItem (id=DropDownDefinition) at APDRiskClauseInputSet.pcf: line 207, column 59
    function visible_102 () : java.lang.Boolean {
      return riskTerm.Attribute.Type == APDFieldType.TC_TYPEKEY
    }
    
    // 'valueVisible' attribute on TextCell (id=Tags_Cell) at APDRiskClauseInputSet.pcf: line 257, column 38
    function visible_186 () : java.lang.Boolean {
      return riskTerm.Attribute.ShowDisplayValue
    }
    
    // 'visible' attribute on TextCell (id=FieldName_Cell) at APDRiskClauseInputSet.pcf: line 275, column 46
    function visible_200 () : java.lang.Boolean {
      return inDevelopMode
    }
    
    property get riskTerm () : APDRiskTerm {
      return getIteratedValue(3) as APDRiskTerm
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/apd/policy/APDRiskClauseInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry3ExpressionsImpl extends InputSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 3)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on MenuItem (id=MoveUp) at APDRiskClauseInputSet.pcf: line 335, column 111
    function action_223 () : void {
      term.moveUp(); gw.api.web.PebblesUtil.invalidateIterators(CurrentLocation, APDTerm)
    }
    
    // 'action' attribute on MenuItem (id=MoveDown) at APDRiskClauseInputSet.pcf: line 340, column 113
    function action_225 () : void {
      term.moveDown(); gw.api.web.PebblesUtil.invalidateIterators(CurrentLocation, APDTerm)
    }
    
    // 'action' attribute on MenuItem (id=EditTerm) at APDRiskClauseInputSet.pcf: line 344, column 108
    function action_226 () : void {
      APDScheduleTermPopup.push(term, edition, CurrentLocation.InEditMode)
    }
    
    // 'action' attribute on MenuItem (id=RemoveTerm) at APDRiskClauseInputSet.pcf: line 348, column 110
    function action_228 () : void {
      clause.removeScheduleTerm(term as APDTerm, riskClause); gw.api.web.PebblesUtil.invalidateIterators(CurrentLocation, APDTerm)
    }
    
    // 'action' attribute on MenuItem (id=EditTerm) at APDRiskClauseInputSet.pcf: line 344, column 108
    function action_dest_227 () : pcf.api.Destination {
      return pcf.APDScheduleTermPopup.createDestination(term, edition, CurrentLocation.InEditMode)
    }
    
    // 'available' attribute on MenuItem (id=MoveUp) at APDRiskClauseInputSet.pcf: line 335, column 111
    function available_222 () : java.lang.Boolean {
      return term.Sequence != 1
    }
    
    // 'available' attribute on MenuItem (id=MoveDown) at APDRiskClauseInputSet.pcf: line 340, column 113
    function available_224 () : java.lang.Boolean {
      return term.Sequence != term.SiblingAttributes.Count
    }
    
    // 'value' attribute on TextCell (id=TermName_Cell) at APDRiskClauseInputSet.pcf: line 330, column 40
    function defaultSetter_231 (__VALUE_TO_SET :  java.lang.Object) : void {
      term.Label = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'editable' attribute on TextCell (id=TermName_Cell) at APDRiskClauseInputSet.pcf: line 330, column 40
    function editable_229 () : java.lang.Boolean {
      return userPreferences.canDesign()
    }
    
    // 'value' attribute on TextCell (id=TermName_Cell) at APDRiskClauseInputSet.pcf: line 330, column 40
    function valueRoot_232 () : java.lang.Object {
      return term
    }
    
    // 'value' attribute on TextCell (id=TermName_Cell) at APDRiskClauseInputSet.pcf: line 330, column 40
    function value_230 () : java.lang.String {
      return term.Label
    }
    
    property get term () : entity.APDTerm {
      return getIteratedValue(3) as entity.APDTerm
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/apd/policy/APDRiskClauseInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry4ExpressionsImpl extends InputSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 3)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on CellIterator (id=TermValues) at APDRiskClauseInputSet.pcf: line 367, column 50
    function value_264 () : entity.APDTerm[] {
      return riskClause.Clause.ScheduleTermsSortedBySequence
    }
    
    property get item () : APDRiskScheduleItem {
      return getIteratedValue(3) as APDRiskScheduleItem
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/apd/policy/APDRiskClauseInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry5ExpressionsImpl extends IteratorEntry4ExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 4)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskClauseInputSet.pcf: line 373, column 41
    function def_onEnter_237 (def :  pcf.APDDataFieldValue_bigdecimal) : void {
      def.onEnter(item.ItemTerms.firstWhere(\t -> t.Attribute == term), edition)
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskClauseInputSet.pcf: line 373, column 41
    function def_onEnter_239 (def :  pcf.APDDataFieldValue_boolean) : void {
      def.onEnter(item.ItemTerms.firstWhere(\t -> t.Attribute == term), edition)
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskClauseInputSet.pcf: line 373, column 41
    function def_onEnter_241 (def :  pcf.APDDataFieldValue_date) : void {
      def.onEnter(item.ItemTerms.firstWhere(\t -> t.Attribute == term), edition)
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskClauseInputSet.pcf: line 373, column 41
    function def_onEnter_243 (def :  pcf.APDDataFieldValue_default) : void {
      def.onEnter(item.ItemTerms.firstWhere(\t -> t.Attribute == term), edition)
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskClauseInputSet.pcf: line 373, column 41
    function def_onEnter_245 (def :  pcf.APDDataFieldValue_integer) : void {
      def.onEnter(item.ItemTerms.firstWhere(\t -> t.Attribute == term), edition)
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskClauseInputSet.pcf: line 373, column 41
    function def_onEnter_247 (def :  pcf.APDDataFieldValue_location) : void {
      def.onEnter(item.ItemTerms.firstWhere(\t -> t.Attribute == term), edition)
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskClauseInputSet.pcf: line 373, column 41
    function def_onEnter_249 (def :  pcf.APDDataFieldValue_money) : void {
      def.onEnter(item.ItemTerms.firstWhere(\t -> t.Attribute == term), edition)
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskClauseInputSet.pcf: line 373, column 41
    function def_onEnter_251 (def :  pcf.APDDataFieldValue_party) : void {
      def.onEnter(item.ItemTerms.firstWhere(\t -> t.Attribute == term), edition)
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskClauseInputSet.pcf: line 373, column 41
    function def_onEnter_253 (def :  pcf.APDDataFieldValue_scalablebigdecimal) : void {
      def.onEnter(item.ItemTerms.firstWhere(\t -> t.Attribute == term), edition)
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskClauseInputSet.pcf: line 373, column 41
    function def_onEnter_255 (def :  pcf.APDDataFieldValue_scalableinteger) : void {
      def.onEnter(item.ItemTerms.firstWhere(\t -> t.Attribute == term), edition)
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskClauseInputSet.pcf: line 373, column 41
    function def_onEnter_257 (def :  pcf.APDDataFieldValue_scalablemoney) : void {
      def.onEnter(item.ItemTerms.firstWhere(\t -> t.Attribute == term), edition)
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskClauseInputSet.pcf: line 373, column 41
    function def_onEnter_259 (def :  pcf.APDDataFieldValue_typekey) : void {
      def.onEnter(item.ItemTerms.firstWhere(\t -> t.Attribute == term), edition)
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskClauseInputSet.pcf: line 373, column 41
    function def_refreshVariables_238 (def :  pcf.APDDataFieldValue_bigdecimal) : void {
      def.refreshVariables(item.ItemTerms.firstWhere(\t -> t.Attribute == term), edition)
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskClauseInputSet.pcf: line 373, column 41
    function def_refreshVariables_240 (def :  pcf.APDDataFieldValue_boolean) : void {
      def.refreshVariables(item.ItemTerms.firstWhere(\t -> t.Attribute == term), edition)
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskClauseInputSet.pcf: line 373, column 41
    function def_refreshVariables_242 (def :  pcf.APDDataFieldValue_date) : void {
      def.refreshVariables(item.ItemTerms.firstWhere(\t -> t.Attribute == term), edition)
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskClauseInputSet.pcf: line 373, column 41
    function def_refreshVariables_244 (def :  pcf.APDDataFieldValue_default) : void {
      def.refreshVariables(item.ItemTerms.firstWhere(\t -> t.Attribute == term), edition)
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskClauseInputSet.pcf: line 373, column 41
    function def_refreshVariables_246 (def :  pcf.APDDataFieldValue_integer) : void {
      def.refreshVariables(item.ItemTerms.firstWhere(\t -> t.Attribute == term), edition)
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskClauseInputSet.pcf: line 373, column 41
    function def_refreshVariables_248 (def :  pcf.APDDataFieldValue_location) : void {
      def.refreshVariables(item.ItemTerms.firstWhere(\t -> t.Attribute == term), edition)
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskClauseInputSet.pcf: line 373, column 41
    function def_refreshVariables_250 (def :  pcf.APDDataFieldValue_money) : void {
      def.refreshVariables(item.ItemTerms.firstWhere(\t -> t.Attribute == term), edition)
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskClauseInputSet.pcf: line 373, column 41
    function def_refreshVariables_252 (def :  pcf.APDDataFieldValue_party) : void {
      def.refreshVariables(item.ItemTerms.firstWhere(\t -> t.Attribute == term), edition)
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskClauseInputSet.pcf: line 373, column 41
    function def_refreshVariables_254 (def :  pcf.APDDataFieldValue_scalablebigdecimal) : void {
      def.refreshVariables(item.ItemTerms.firstWhere(\t -> t.Attribute == term), edition)
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskClauseInputSet.pcf: line 373, column 41
    function def_refreshVariables_256 (def :  pcf.APDDataFieldValue_scalableinteger) : void {
      def.refreshVariables(item.ItemTerms.firstWhere(\t -> t.Attribute == term), edition)
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskClauseInputSet.pcf: line 373, column 41
    function def_refreshVariables_258 (def :  pcf.APDDataFieldValue_scalablemoney) : void {
      def.refreshVariables(item.ItemTerms.firstWhere(\t -> t.Attribute == term), edition)
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskClauseInputSet.pcf: line 373, column 41
    function def_refreshVariables_260 (def :  pcf.APDDataFieldValue_typekey) : void {
      def.refreshVariables(item.ItemTerms.firstWhere(\t -> t.Attribute == term), edition)
    }
    
    // 'editable' attribute on ModalCellRef (id=value) at APDRiskClauseInputSet.pcf: line 373, column 41
    function editable_236 () : java.lang.Boolean {
      return item.ItemTerms.firstWhere(\t -> t.Attribute == term).Availability == APDDataExistenceType.TC_CAPTURED
    }
    
    // 'mode' attribute on ModalCellRef (id=value) at APDRiskClauseInputSet.pcf: line 373, column 41
    function mode_261 () : java.lang.Object {
      return term.Type
    }
    
    property get term () : entity.APDTerm {
      return getIteratedValue(4) as entity.APDTerm
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/apd/policy/APDRiskClauseInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends APDRiskClauseInputSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'visible' attribute on InputDivider at APDRiskClauseInputSet.pcf: line 382, column 48
    function visible_275 () : java.lang.Boolean {
      return userPreferences.canDesign()
    }
    
    property get clause () : APDClause {
      return getIteratedValue(1) as APDClause
    }
    
    
  }
  
  
}