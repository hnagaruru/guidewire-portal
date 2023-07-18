package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
uses pcf.api.Wizard
@javax.annotation.Generated("config/web/pcf/line/apd/policy/APDRiskPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class APDRiskPanelSetExpressions {
  @javax.annotation.Generated("config/web/pcf/line/apd/policy/APDRiskPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class APDRiskPanelSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on ToolbarButton (id=addExposureButton) at APDRiskPanelSet.pcf: line 335, column 54
    function action_256 () : void {
      APDNewExposurePopup.push(riskCoverable)
    }
    
    // 'action' attribute on PickerToolbarButton (id=AddCoverages) at APDRiskPanelSet.pcf: line 443, column 89
    function action_286 () : void {
      APDClauseSearchPopup.push(riskCoverable, CoveragePatternSearchType.TC_COVERAGE, riskCoverable.Coverable.CoverageLibraryCategories, userPreferences)
    }
    
    // 'action' attribute on PickerToolbarButton (id=AddClauses) at APDRiskPanelSet.pcf: line 465, column 64
    function action_292 () : void {
      APDClauseSearchPopup.push(riskCoverable, CoveragePatternSearchType.TC_EXCLCOND, riskCoverable.Coverable.ConditionAndExclusionLibraryCategories, userPreferences)
    }
    
    // 'action' attribute on MenuItem (id=ItemisedCover) at APDRiskPanelSet.pcf: line 63, column 111
    function action_9 () : void {
      APDNewCoverageCategoryPopup.push(riskCoverable)
    }
    
    // 'action' attribute on MenuItem (id=ItemisedCover) at APDRiskPanelSet.pcf: line 63, column 111
    function action_dest_10 () : pcf.api.Destination {
      return pcf.APDNewCoverageCategoryPopup.createDestination(riskCoverable)
    }
    
    // 'action' attribute on ToolbarButton (id=addExposureButton) at APDRiskPanelSet.pcf: line 335, column 54
    function action_dest_257 () : pcf.api.Destination {
      return pcf.APDNewExposurePopup.createDestination(riskCoverable)
    }
    
    // 'action' attribute on PickerToolbarButton (id=AddCoverages) at APDRiskPanelSet.pcf: line 443, column 89
    function action_dest_287 () : pcf.api.Destination {
      return pcf.APDClauseSearchPopup.createDestination(riskCoverable, CoveragePatternSearchType.TC_COVERAGE, riskCoverable.Coverable.CoverageLibraryCategories, userPreferences)
    }
    
    // 'action' attribute on PickerToolbarButton (id=AddClauses) at APDRiskPanelSet.pcf: line 465, column 64
    function action_dest_293 () : pcf.api.Destination {
      return pcf.APDClauseSearchPopup.createDestination(riskCoverable, CoveragePatternSearchType.TC_EXCLCOND, riskCoverable.Coverable.ConditionAndExclusionLibraryCategories, userPreferences)
    }
    
    // 'def' attribute on InputSetRef (id=OtherCover) at APDRiskPanelSet.pcf: line 449, column 34
    function def_onEnter_289 (def :  pcf.APDRiskClauseInputSet) : void {
      def.onEnter(riskCoverable, riskCoverable.SelectedCoverageLibraryClauses.where(\coverage -> coverage.IsTopLevelClause), coverDefinitionHelper, edition, openForEdit)
    }
    
    // 'def' attribute on InputSetRef (id=ConditionsAndExclusions) at APDRiskPanelSet.pcf: line 471, column 47
    function def_onEnter_295 (def :  pcf.APDRiskClauseInputSet) : void {
      def.onEnter(riskCoverable, riskCoverable.SelectedExclusionConditionLibraryClauses.where(\clause -> clause.IsTopLevelClause), coverDefinitionHelper, edition, openForEdit)
    }
    
    // 'def' attribute on InputSetRef (id=OtherCover) at APDRiskPanelSet.pcf: line 449, column 34
    function def_refreshVariables_290 (def :  pcf.APDRiskClauseInputSet) : void {
      def.refreshVariables(riskCoverable, riskCoverable.SelectedCoverageLibraryClauses.where(\coverage -> coverage.IsTopLevelClause), coverDefinitionHelper, edition, openForEdit)
    }
    
    // 'def' attribute on InputSetRef (id=ConditionsAndExclusions) at APDRiskPanelSet.pcf: line 471, column 47
    function def_refreshVariables_296 (def :  pcf.APDRiskClauseInputSet) : void {
      def.refreshVariables(riskCoverable, riskCoverable.SelectedExclusionConditionLibraryClauses.where(\clause -> clause.IsTopLevelClause), coverDefinitionHelper, edition, openForEdit)
    }
    
    // 'value' attribute on TypeKeyInput (id=PreferredCoverageCurrency_Input) at APDRiskPanelSet.pcf: line 41, column 202
    function defaultSetter_4 (__VALUE_TO_SET :  java.lang.Object) : void {
      riskCoverable.PreferredCoverageCurrency = (__VALUE_TO_SET as Currency)
    }
    
    // 'initialValue' attribute on Variable at APDRiskPanelSet.pcf: line 22, column 70
    function initialValue_0 () : gw.api.web.userpreference.UserPreferencesOfCurrentUser {
      return new gw.api.web.userpreference.UserPreferencesOfCurrentUser()
    }
    
    // 'initialValue' attribute on Variable at APDRiskPanelSet.pcf: line 26, column 23
    function initialValue_1 () : Boolean {
      return userPreferences.inDevelopMode()
    }
    
    // 'onPick' attribute on PickerToolbarButton (id=AddCoverages) at APDRiskPanelSet.pcf: line 443, column 89
    function onPick_288 (PickedValue :  APDClause[]) : void {
      createClauseList(PickedValue.whereTypeIs(APDCoverage).toList())
    }
    
    // 'onPick' attribute on PickerToolbarButton (id=AddClauses) at APDRiskPanelSet.pcf: line 465, column 64
    function onPick_294 (PickedValue :  APDClause[]) : void {
      createClauseList(PickedValue.toList())
    }
    
    // 'sortBy' attribute on IteratorSort at APDRiskPanelSet.pcf: line 81, column 32
    function sortBy_12 (riskField :  APDRiskField) : java.lang.Object {
      return riskField.Attribute.Sequence
    }
    
    // 'title' attribute on Card (id=Exposure) at APDRiskPanelSet.pcf: line 327, column 55
    function title_279 () : java.lang.String {
      return riskCoverable.Coverable.ExposureLabel
    }
    
    // 'toCreateAndAdd' attribute on RowIterator (id=riskFields) at APDRiskPanelSet.pcf: line 78, column 42
    function toCreateAndAdd_175 () : APDRiskField {
      return riskCoverable.createAndAddField()
    }
    
    // 'toRemove' attribute on RowIterator (id=riskFields) at APDRiskPanelSet.pcf: line 78, column 42
    function toRemove_176 (riskField :  APDRiskField) : void {
      riskCoverable.removeField(riskField)
    }
    
    // 'value' attribute on TypeKeyInput (id=PreferredCoverageCurrency_Input) at APDRiskPanelSet.pcf: line 41, column 202
    function valueRoot_5 () : java.lang.Object {
      return riskCoverable
    }
    
    // 'value' attribute on RowIterator (id=riskFields) at APDRiskPanelSet.pcf: line 78, column 42
    function value_177 () : APDRiskField[] {
      return riskCoverable.RiskFields
    }
    
    // 'value' attribute on InputIterator (id=Exposures) at APDRiskPanelSet.pcf: line 343, column 43
    function value_277 () : APDExposure[] {
      return riskCoverable.Coverable.Exposures
    }
    
    // 'value' attribute on CardIterator at APDRiskPanelSet.pcf: line 410, column 41
    function value_285 () : APDClauseCategory[] {
      return riskCoverable.Coverable.ItemisedCoverageCategories
    }
    
    // 'value' attribute on TypeKeyInput (id=PreferredCoverageCurrency_Input) at APDRiskPanelSet.pcf: line 41, column 202
    function value_3 () : Currency {
      return riskCoverable.PreferredCoverageCurrency
    }
    
    // 'valueType' attribute on TypeKeyInput (id=PreferredCoverageCurrency_Input) at APDRiskPanelSet.pcf: line 41, column 202
    function verifyValueType_8 () : void {
      var __valueTypeArg : Currency
      // If this assignment statement fails to compile, that means that the declared valueType
      // is not a valid type for use with this Input or Cell type
      var __requiredTypeArg : gw.entity.TypeKey = __valueTypeArg
    }
    
    // 'visible' attribute on Toolbar (id=designRiskFieldsToolbar) at APDRiskPanelSet.pcf: line 48, column 51
    function visible_11 () : java.lang.Boolean {
      return userPreferences.canDesign()
    }
    
    // 'visible' attribute on CheckBoxCell (id=Jurisdiction_Cell) at APDRiskPanelSet.pcf: line 134, column 106
    function visible_15 () : java.lang.Boolean {
      return userPreferences.canDesign() and not (riskCoverable typeis APDRiskPolicyLine)
    }
    
    // 'visible' attribute on TypeKeyInput (id=PreferredCoverageCurrency_Input) at APDRiskPanelSet.pcf: line 41, column 202
    function visible_2 () : java.lang.Boolean {
      return riskCoverable.Branch.Policy.APDProduct.Currencies == APDCurrencyHandling.TC_BASICMULTI or riskCoverable.Branch.Policy.APDProduct.Currencies == APDCurrencyHandling.TC_FULLMULTI
    }
    
    // 'visible' attribute on TextCell (id=FieldName_Cell) at APDRiskPanelSet.pcf: line 211, column 44
    function visible_22 () : java.lang.Boolean {
      return inDevelopMode
    }
    
    // 'visible' attribute on PanelRef at APDRiskPanelSet.pcf: line 217, column 53
    function visible_253 () : java.lang.Boolean {
      return not userPreferences.canDesign()
    }
    
    // 'visible' attribute on Card (id=RiskDetails) at APDRiskPanelSet.pcf: line 31, column 111
    function visible_254 () : java.lang.Boolean {
      return userPreferences.canDesign() or riskCoverable.RiskFields.hasMatch(\f -> f.ShowInUseMode) 
    }
    
    // 'visible' attribute on Card (id=Exposure) at APDRiskPanelSet.pcf: line 327, column 55
    function visible_278 () : java.lang.Boolean {
      return riskCoverable.Coverable.HasExposure
    }
    
    // 'visible' attribute on Card (id=OtherCoverCard) at APDRiskPanelSet.pcf: line 435, column 93
    function visible_291 () : java.lang.Boolean {
      return riskCoverable.Coverable.HasCoverageLibrary or userPreferences.canDesign()
    }
    
    // 'visible' attribute on Card (id=ConditionsAndExclusionsCard) at APDRiskPanelSet.pcf: line 457, column 106
    function visible_297 () : java.lang.Boolean {
      return riskCoverable.Coverable.HasConditionAndExclusionLibrary or userPreferences.canDesign()
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
    
    property get openForEdit () : Boolean {
      return getRequireValue("openForEdit", 0) as Boolean
    }
    
    property set openForEdit ($arg :  Boolean) {
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
    
    
          function endExposure(exposures: APDRiskExposure[]) {
            if ((CurrentLocation as Wizard).saveDraft()) { // to keep the data up-to-date before changing LV PL-5377
              for (exp in exposures) {
                exp.endDateWM(riskCoverable.Branch.EditEffectiveDate)
              }
            }
          }
    
        function splitExposure(exposures : APDRiskExposure[]){
          if((CurrentLocation as Wizard).saveDraft()){ // to keep the data up-to-date before changing LV PL-5377
            for(exp in exposures){
              exp.splitWM(riskCoverable.Branch.EditEffectiveDate)
            }
          }
        }
    
          function createClauseList(patterns: java.util.List<APDClause>) {
            for (pattern in patterns) {
              pattern.buidlRiskClause(riskCoverable)
            }
          }
    
          function getMiddleFieldSequence(fieldList : APDRiskField[]) : Integer {
            var size = fieldList.Count
            var seq = size == 0 ? 0 : fieldList.orderBy(\f -> f.Attribute.Sequence).toTypedArray()[((size+1)/2)-1].Attribute.Sequence
            return seq
          }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/apd/policy/APDRiskPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class CardIteratorEntryExpressionsImpl extends APDRiskPanelSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on ToolbarButton (id=AddCoverage) at APDRiskPanelSet.pcf: line 421, column 65
    function action_280 () : void {
      riskCoverable.Coverable.addCoverage(clauseCategory)
    }
    
    // 'def' attribute on InputSetRef at APDRiskPanelSet.pcf: line 426, column 292
    function def_onEnter_282 (def :  pcf.APDRiskClauseInputSet) : void {
      def.onEnter(riskCoverable, (openForEdit ? riskCoverable.Coverable.getItemisedCoverages(clauseCategory) : riskCoverable.getRiskItemisedCoverages(clauseCategory)).where(\coverage -> coverage.IsTopLevelClause), coverDefinitionHelper, edition, openForEdit)
    }
    
    // 'def' attribute on InputSetRef at APDRiskPanelSet.pcf: line 426, column 292
    function def_refreshVariables_283 (def :  pcf.APDRiskClauseInputSet) : void {
      def.refreshVariables(riskCoverable, (openForEdit ? riskCoverable.Coverable.getItemisedCoverages(clauseCategory) : riskCoverable.getRiskItemisedCoverages(clauseCategory)).where(\coverage -> coverage.IsTopLevelClause), coverDefinitionHelper, edition, openForEdit)
    }
    
    // 'title' attribute on Card (id=Coverages) at APDRiskPanelSet.pcf: line 413, column 39
    function title_284 () : java.lang.String {
      return clauseCategory.Name
    }
    
    // 'visible' attribute on Toolbar at APDRiskPanelSet.pcf: line 416, column 53
    function visible_281 () : java.lang.Boolean {
      return userPreferences.canDesign()
    }
    
    property get clauseCategory () : APDClauseCategory {
      return getIteratedValue(1) as APDClauseCategory
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/apd/policy/APDRiskPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class InputSetExpressionsImpl extends IteratorEntry4ExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on ToolbarButton (id=addColumn) at APDRiskPanelSet.pcf: line 392, column 64
    function action_269 () : void {
      APDNewExposureFieldPopup.push(riskExposures, exposure, edition); gw.api.web.PebblesUtil.invalidateIterators(CurrentLocation, APDExposureField)
    }
    
    // 'action' attribute on ToolbarButton (id=removeExposureButton) at APDRiskPanelSet.pcf: line 398, column 64
    function action_271 () : void {
      exposure.removeExposure(riskCoverable); gw.api.web.PebblesUtil.invalidateIterators(CurrentLocation, APDExposure)
    }
    
    // 'allCheckedRowsAction' attribute on CheckedValuesToolbarButton (id=SplitRiskExposures) at APDRiskPanelSet.pcf: line 369, column 65
    function allCheckedRowsAction_263 (CheckedValues :  APDRiskExposure[], CheckedValuesErrors :  java.util.Map) : void {
      APDSplitRiskPopup.push(CheckedValues.toList())
    }
    
    // 'allCheckedRowsAction' attribute on CheckedValuesToolbarButton (id=End) at APDRiskPanelSet.pcf: line 377, column 138
    function allCheckedRowsAction_265 (CheckedValues :  APDRiskExposure[], CheckedValuesErrors :  java.util.Map) : void {
      endExposure(CheckedValues)
    }
    
    // 'allCheckedRowsAction' attribute on CheckedValuesToolbarButton (id=Split) at APDRiskPanelSet.pcf: line 385, column 138
    function allCheckedRowsAction_267 (CheckedValues :  APDRiskExposure[], CheckedValuesErrors :  java.util.Map) : void {
      splitExposure(CheckedValues)
    }
    
    // 'def' attribute on ListViewInput at APDRiskPanelSet.pcf: line 357, column 48
    function def_onEnter_272 (def :  pcf.APDRiskExposureLV_basis) : void {
      def.onEnter(riskCoverable, exposure, edition)
    }
    
    // 'def' attribute on ListViewInput at APDRiskPanelSet.pcf: line 357, column 48
    function def_onEnter_274 (def :  pcf.APDRiskExposureLV_default) : void {
      def.onEnter(riskCoverable, exposure, edition)
    }
    
    // 'def' attribute on ListViewInput at APDRiskPanelSet.pcf: line 357, column 48
    function def_refreshVariables_273 (def :  pcf.APDRiskExposureLV_basis) : void {
      def.refreshVariables(riskCoverable, exposure, edition)
    }
    
    // 'def' attribute on ListViewInput at APDRiskPanelSet.pcf: line 357, column 48
    function def_refreshVariables_275 (def :  pcf.APDRiskExposureLV_default) : void {
      def.refreshVariables(riskCoverable, exposure, edition)
    }
    
    // 'initialValue' attribute on Variable at APDRiskPanelSet.pcf: line 348, column 47
    function initialValue_258 () : APDRiskExposure[] {
      return riskCoverable.RiskExposuresInPeriod.where(\riskExposure -> riskExposure.Exposure == exposure)
    }
    
    // 'initialValue' attribute on Variable at APDRiskPanelSet.pcf: line 352, column 37
    function initialValue_259 () : Boolean {
      return exposure.RatingType != APDExposureRatingType.TC_TERM
    }
    
    // 'addLabel' attribute on IteratorButtons at APDRiskPanelSet.pcf: line 362, column 134
    function label_260 () : java.lang.Object {
      return DisplayKey.get("Web.Policy.ManualLine.RiskCoverable.AddExposure", exposure.Name)
    }
    
    // 'removeLabel' attribute on IteratorButtons at APDRiskPanelSet.pcf: line 362, column 134
    function label_261 () : java.lang.Object {
      return DisplayKey.get("Web.Policy.ManualLine.RiskCoverable.RemoveExposure", exposure.Name)
    }
    
    // 'mode' attribute on ListViewInput at APDRiskPanelSet.pcf: line 357, column 48
    function mode_276 () : java.lang.Object {
      return exposure.RatingType
    }
    
    // 'visible' attribute on CheckedValuesToolbarButton (id=SplitRiskExposures) at APDRiskPanelSet.pcf: line 369, column 65
    function visible_262 () : java.lang.Boolean {
      return exposure.HasSplittableFields
    }
    
    // 'visible' attribute on CheckedValuesToolbarButton (id=End) at APDRiskPanelSet.pcf: line 377, column 138
    function visible_264 () : java.lang.Boolean {
      return riskCoverable.Branch.Job typeis PolicyChange and exposure.RatingType != APDExposureRatingType.TC_TERM
    }
    
    // 'visible' attribute on ToolbarButton (id=addColumn) at APDRiskPanelSet.pcf: line 392, column 64
    function visible_268 () : java.lang.Boolean {
      return userPreferences.canDesign()
    }
    
    property get riskExposures () : APDRiskExposure[] {
      return getVariableValue("riskExposures", 2) as APDRiskExposure[]
    }
    
    property set riskExposures ($arg :  APDRiskExposure[]) {
      setVariableValue("riskExposures", 2, $arg)
    }
    
    property get windowMode () : Boolean {
      return getVariableValue("windowMode", 2) as Boolean
    }
    
    property set windowMode ($arg :  Boolean) {
      setVariableValue("windowMode", 2, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/apd/policy/APDRiskPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry2ExpressionsImpl extends useModeRiskFieldDVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'condition' attribute on ToolbarFlag at APDRiskPanelSet.pcf: line 257, column 41
    function condition_182 () : java.lang.Boolean {
      return riskField.Attribute.Jurisdiction != true
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskPanelSet.pcf: line 269, column 58
    function def_onEnter_187 (def :  pcf.APDDataFieldValue_bigdecimal) : void {
      def.onEnter(riskField, edition)
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskPanelSet.pcf: line 269, column 58
    function def_onEnter_189 (def :  pcf.APDDataFieldValue_boolean) : void {
      def.onEnter(riskField, edition)
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskPanelSet.pcf: line 269, column 58
    function def_onEnter_191 (def :  pcf.APDDataFieldValue_date) : void {
      def.onEnter(riskField, edition)
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskPanelSet.pcf: line 269, column 58
    function def_onEnter_193 (def :  pcf.APDDataFieldValue_default) : void {
      def.onEnter(riskField, edition)
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskPanelSet.pcf: line 269, column 58
    function def_onEnter_195 (def :  pcf.APDDataFieldValue_integer) : void {
      def.onEnter(riskField, edition)
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskPanelSet.pcf: line 269, column 58
    function def_onEnter_197 (def :  pcf.APDDataFieldValue_location) : void {
      def.onEnter(riskField, edition)
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskPanelSet.pcf: line 269, column 58
    function def_onEnter_199 (def :  pcf.APDDataFieldValue_money) : void {
      def.onEnter(riskField, edition)
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskPanelSet.pcf: line 269, column 58
    function def_onEnter_201 (def :  pcf.APDDataFieldValue_party) : void {
      def.onEnter(riskField, edition)
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskPanelSet.pcf: line 269, column 58
    function def_onEnter_203 (def :  pcf.APDDataFieldValue_scalablebigdecimal) : void {
      def.onEnter(riskField, edition)
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskPanelSet.pcf: line 269, column 58
    function def_onEnter_205 (def :  pcf.APDDataFieldValue_scalableinteger) : void {
      def.onEnter(riskField, edition)
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskPanelSet.pcf: line 269, column 58
    function def_onEnter_207 (def :  pcf.APDDataFieldValue_scalablemoney) : void {
      def.onEnter(riskField, edition)
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskPanelSet.pcf: line 269, column 58
    function def_onEnter_209 (def :  pcf.APDDataFieldValue_typekey) : void {
      def.onEnter(riskField, edition)
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskPanelSet.pcf: line 269, column 58
    function def_refreshVariables_188 (def :  pcf.APDDataFieldValue_bigdecimal) : void {
      def.refreshVariables(riskField, edition)
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskPanelSet.pcf: line 269, column 58
    function def_refreshVariables_190 (def :  pcf.APDDataFieldValue_boolean) : void {
      def.refreshVariables(riskField, edition)
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskPanelSet.pcf: line 269, column 58
    function def_refreshVariables_192 (def :  pcf.APDDataFieldValue_date) : void {
      def.refreshVariables(riskField, edition)
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskPanelSet.pcf: line 269, column 58
    function def_refreshVariables_194 (def :  pcf.APDDataFieldValue_default) : void {
      def.refreshVariables(riskField, edition)
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskPanelSet.pcf: line 269, column 58
    function def_refreshVariables_196 (def :  pcf.APDDataFieldValue_integer) : void {
      def.refreshVariables(riskField, edition)
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskPanelSet.pcf: line 269, column 58
    function def_refreshVariables_198 (def :  pcf.APDDataFieldValue_location) : void {
      def.refreshVariables(riskField, edition)
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskPanelSet.pcf: line 269, column 58
    function def_refreshVariables_200 (def :  pcf.APDDataFieldValue_money) : void {
      def.refreshVariables(riskField, edition)
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskPanelSet.pcf: line 269, column 58
    function def_refreshVariables_202 (def :  pcf.APDDataFieldValue_party) : void {
      def.refreshVariables(riskField, edition)
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskPanelSet.pcf: line 269, column 58
    function def_refreshVariables_204 (def :  pcf.APDDataFieldValue_scalablebigdecimal) : void {
      def.refreshVariables(riskField, edition)
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskPanelSet.pcf: line 269, column 58
    function def_refreshVariables_206 (def :  pcf.APDDataFieldValue_scalableinteger) : void {
      def.refreshVariables(riskField, edition)
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskPanelSet.pcf: line 269, column 58
    function def_refreshVariables_208 (def :  pcf.APDDataFieldValue_scalablemoney) : void {
      def.refreshVariables(riskField, edition)
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskPanelSet.pcf: line 269, column 58
    function def_refreshVariables_210 (def :  pcf.APDDataFieldValue_typekey) : void {
      def.refreshVariables(riskField, edition)
    }
    
    // 'editable' attribute on ModalCellRef (id=value) at APDRiskPanelSet.pcf: line 269, column 58
    function editable_186 () : java.lang.Boolean {
      return riskField.Availability == APDDataExistenceType.TC_CAPTURED or riskField.Availability == APDDataExistenceType.TC_CAPTUREDQUOTE or riskField.Availability == APDDataExistenceType.TC_CAPTUREDBIND or riskField.Availability == APDDataExistenceType.TC_CAPTUREDISSUE
    }
    
    // 'mode' attribute on ModalCellRef (id=value) at APDRiskPanelSet.pcf: line 269, column 58
    function mode_211 () : java.lang.Object {
      return riskField.Attribute.Type
    }
    
    // 'value' attribute on TextCell (id=FieldLabel_Cell) at APDRiskPanelSet.pcf: line 263, column 60
    function valueRoot_184 () : java.lang.Object {
      return riskField.Attribute
    }
    
    // 'value' attribute on TextCell (id=FieldLabel_Cell) at APDRiskPanelSet.pcf: line 263, column 60
    function value_183 () : java.lang.String {
      return riskField.Attribute.Label
    }
    
    property get riskField () : APDRiskField {
      return getIteratedValue(2) as APDRiskField
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/apd/policy/APDRiskPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry3ExpressionsImpl extends useModeRiskFieldDVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'condition' attribute on ToolbarFlag at APDRiskPanelSet.pcf: line 303, column 41
    function condition_218 () : java.lang.Boolean {
      return riskField.Attribute.Jurisdiction != true
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskPanelSet.pcf: line 315, column 58
    function def_onEnter_223 (def :  pcf.APDDataFieldValue_bigdecimal) : void {
      def.onEnter(riskField, edition)
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskPanelSet.pcf: line 315, column 58
    function def_onEnter_225 (def :  pcf.APDDataFieldValue_boolean) : void {
      def.onEnter(riskField, edition)
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskPanelSet.pcf: line 315, column 58
    function def_onEnter_227 (def :  pcf.APDDataFieldValue_date) : void {
      def.onEnter(riskField, edition)
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskPanelSet.pcf: line 315, column 58
    function def_onEnter_229 (def :  pcf.APDDataFieldValue_default) : void {
      def.onEnter(riskField, edition)
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskPanelSet.pcf: line 315, column 58
    function def_onEnter_231 (def :  pcf.APDDataFieldValue_integer) : void {
      def.onEnter(riskField, edition)
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskPanelSet.pcf: line 315, column 58
    function def_onEnter_233 (def :  pcf.APDDataFieldValue_location) : void {
      def.onEnter(riskField, edition)
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskPanelSet.pcf: line 315, column 58
    function def_onEnter_235 (def :  pcf.APDDataFieldValue_money) : void {
      def.onEnter(riskField, edition)
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskPanelSet.pcf: line 315, column 58
    function def_onEnter_237 (def :  pcf.APDDataFieldValue_party) : void {
      def.onEnter(riskField, edition)
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskPanelSet.pcf: line 315, column 58
    function def_onEnter_239 (def :  pcf.APDDataFieldValue_scalablebigdecimal) : void {
      def.onEnter(riskField, edition)
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskPanelSet.pcf: line 315, column 58
    function def_onEnter_241 (def :  pcf.APDDataFieldValue_scalableinteger) : void {
      def.onEnter(riskField, edition)
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskPanelSet.pcf: line 315, column 58
    function def_onEnter_243 (def :  pcf.APDDataFieldValue_scalablemoney) : void {
      def.onEnter(riskField, edition)
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskPanelSet.pcf: line 315, column 58
    function def_onEnter_245 (def :  pcf.APDDataFieldValue_typekey) : void {
      def.onEnter(riskField, edition)
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskPanelSet.pcf: line 315, column 58
    function def_refreshVariables_224 (def :  pcf.APDDataFieldValue_bigdecimal) : void {
      def.refreshVariables(riskField, edition)
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskPanelSet.pcf: line 315, column 58
    function def_refreshVariables_226 (def :  pcf.APDDataFieldValue_boolean) : void {
      def.refreshVariables(riskField, edition)
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskPanelSet.pcf: line 315, column 58
    function def_refreshVariables_228 (def :  pcf.APDDataFieldValue_date) : void {
      def.refreshVariables(riskField, edition)
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskPanelSet.pcf: line 315, column 58
    function def_refreshVariables_230 (def :  pcf.APDDataFieldValue_default) : void {
      def.refreshVariables(riskField, edition)
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskPanelSet.pcf: line 315, column 58
    function def_refreshVariables_232 (def :  pcf.APDDataFieldValue_integer) : void {
      def.refreshVariables(riskField, edition)
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskPanelSet.pcf: line 315, column 58
    function def_refreshVariables_234 (def :  pcf.APDDataFieldValue_location) : void {
      def.refreshVariables(riskField, edition)
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskPanelSet.pcf: line 315, column 58
    function def_refreshVariables_236 (def :  pcf.APDDataFieldValue_money) : void {
      def.refreshVariables(riskField, edition)
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskPanelSet.pcf: line 315, column 58
    function def_refreshVariables_238 (def :  pcf.APDDataFieldValue_party) : void {
      def.refreshVariables(riskField, edition)
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskPanelSet.pcf: line 315, column 58
    function def_refreshVariables_240 (def :  pcf.APDDataFieldValue_scalablebigdecimal) : void {
      def.refreshVariables(riskField, edition)
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskPanelSet.pcf: line 315, column 58
    function def_refreshVariables_242 (def :  pcf.APDDataFieldValue_scalableinteger) : void {
      def.refreshVariables(riskField, edition)
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskPanelSet.pcf: line 315, column 58
    function def_refreshVariables_244 (def :  pcf.APDDataFieldValue_scalablemoney) : void {
      def.refreshVariables(riskField, edition)
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskPanelSet.pcf: line 315, column 58
    function def_refreshVariables_246 (def :  pcf.APDDataFieldValue_typekey) : void {
      def.refreshVariables(riskField, edition)
    }
    
    // 'editable' attribute on ModalCellRef (id=value) at APDRiskPanelSet.pcf: line 315, column 58
    function editable_222 () : java.lang.Boolean {
      return riskField.Availability == APDDataExistenceType.TC_CAPTURED or riskField.Availability == APDDataExistenceType.TC_CAPTUREDQUOTE or riskField.Availability == APDDataExistenceType.TC_CAPTUREDBIND or riskField.Availability == APDDataExistenceType.TC_CAPTUREDISSUE
    }
    
    // 'mode' attribute on ModalCellRef (id=value) at APDRiskPanelSet.pcf: line 315, column 58
    function mode_247 () : java.lang.Object {
      return riskField.Attribute.Type
    }
    
    // 'value' attribute on TextCell (id=FieldLabel_Cell) at APDRiskPanelSet.pcf: line 309, column 60
    function valueRoot_220 () : java.lang.Object {
      return riskField.Attribute
    }
    
    // 'value' attribute on TextCell (id=FieldLabel_Cell) at APDRiskPanelSet.pcf: line 309, column 60
    function value_219 () : java.lang.String {
      return riskField.Attribute.Label
    }
    
    property get riskField () : APDRiskField {
      return getIteratedValue(2) as APDRiskField
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/apd/policy/APDRiskPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry4ExpressionsImpl extends APDRiskPanelSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    property get exposure () : APDExposure {
      return getIteratedValue(1) as APDExposure
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/apd/policy/APDRiskPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends APDRiskPanelSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextCell (id=Tags_Cell) at APDRiskPanelSet.pcf: line 193, column 36
    function action_159 () : void {
      APDTagPopup.push(riskField.Attribute, openForEdit)
    }
    
    // 'action' attribute on MenuItem (id=MoveUp) at APDRiskPanelSet.pcf: line 112, column 112
    function action_59 () : void {
      riskField.moveUp(); gw.api.web.PebblesUtil.invalidateIterators(CurrentLocation, APDRiskField)
    }
    
    // 'action' attribute on MenuItem (id=MoveDown) at APDRiskPanelSet.pcf: line 117, column 114
    function action_61 () : void {
      riskField.moveDown(); gw.api.web.PebblesUtil.invalidateIterators(CurrentLocation, APDRiskField)
    }
    
    // 'action' attribute on RangeCell (id=Usage_Cell) at APDRiskPanelSet.pcf: line 158, column 58
    function action_86 () : void {
      APDAttributeRulePopup.push(riskField.Attribute.getEditionRule(edition, APDRuleType.TC_EXISTENCE), riskField.Attribute, APDRuleType.TC_EXISTENCE, edition, openForEdit)
    }
    
    // 'action' attribute on TextCell (id=Tags_Cell) at APDRiskPanelSet.pcf: line 193, column 36
    function action_dest_160 () : pcf.api.Destination {
      return pcf.APDTagPopup.createDestination(riskField.Attribute, openForEdit)
    }
    
    // 'action' attribute on RangeCell (id=Usage_Cell) at APDRiskPanelSet.pcf: line 158, column 58
    function action_dest_87 () : pcf.api.Destination {
      return pcf.APDAttributeRulePopup.createDestination(riskField.Attribute.getEditionRule(edition, APDRuleType.TC_EXISTENCE), riskField.Attribute, APDRuleType.TC_EXISTENCE, edition, openForEdit)
    }
    
    // 'available' attribute on MenuItem (id=MoveUp) at APDRiskPanelSet.pcf: line 112, column 112
    function available_58 () : java.lang.Boolean {
      return riskField.Attribute.Sequence != 1
    }
    
    // 'available' attribute on MenuItem (id=MoveDown) at APDRiskPanelSet.pcf: line 117, column 114
    function available_60 () : java.lang.Boolean {
      return riskField.Attribute.Sequence != riskCoverable.RiskFields.Count
    }
    
    // 'available' attribute on CheckBoxCell (id=Identifier_Cell) at APDRiskPanelSet.pcf: line 126, column 58
    function available_63 () : java.lang.Boolean {
      return APDFieldType.TF_IDENTIFIERTYPES.TypeKeys.hasMatch(\tk -> tk == riskField.Attribute.Type)
    }
    
    // 'condition' attribute on ToolbarFlag at APDRiskPanelSet.pcf: line 84, column 35
    function condition_23 () : java.lang.Boolean {
      return riskField.Attribute.Jurisdiction != true
    }
    
    // 'def' attribute on ModalCellRef (id=DefaultValue) at APDRiskPanelSet.pcf: line 167, column 58
    function def_onEnter_100 (def :  pcf.APDAttributeDefaultValue_calculated) : void {
      def.onEnter(riskField.Attribute, APDRuleType.TC_DEFAULT, riskField, edition, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=DefaultValue) at APDRiskPanelSet.pcf: line 167, column 58
    function def_onEnter_102 (def :  pcf.APDAttributeDefaultValue_date) : void {
      def.onEnter(riskField.Attribute, APDRuleType.TC_DEFAULT, riskField, edition, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=DefaultValue) at APDRiskPanelSet.pcf: line 167, column 58
    function def_onEnter_104 (def :  pcf.APDAttributeDefaultValue_default) : void {
      def.onEnter(riskField.Attribute, APDRuleType.TC_DEFAULT, riskField, edition, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=DefaultValue) at APDRiskPanelSet.pcf: line 167, column 58
    function def_onEnter_106 (def :  pcf.APDAttributeDefaultValue_integer) : void {
      def.onEnter(riskField.Attribute, APDRuleType.TC_DEFAULT, riskField, edition, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=DefaultValue) at APDRiskPanelSet.pcf: line 167, column 58
    function def_onEnter_108 (def :  pcf.APDAttributeDefaultValue_money) : void {
      def.onEnter(riskField.Attribute, APDRuleType.TC_DEFAULT, riskField, edition, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=DefaultValue) at APDRiskPanelSet.pcf: line 167, column 58
    function def_onEnter_110 (def :  pcf.APDAttributeDefaultValue_none) : void {
      def.onEnter(riskField.Attribute, APDRuleType.TC_DEFAULT, riskField, edition, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=DefaultValue) at APDRiskPanelSet.pcf: line 167, column 58
    function def_onEnter_112 (def :  pcf.APDAttributeDefaultValue_typekey) : void {
      def.onEnter(riskField.Attribute, APDRuleType.TC_DEFAULT, riskField, edition, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=MinimumValue) at APDRiskPanelSet.pcf: line 176, column 58
    function def_onEnter_117 (def :  pcf.APDAttributeDefaultValue_bigdecimal) : void {
      def.onEnter(riskField.Attribute, APDRuleType.TC_MIN, riskField, edition, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=MinimumValue) at APDRiskPanelSet.pcf: line 176, column 58
    function def_onEnter_119 (def :  pcf.APDAttributeDefaultValue_boolean) : void {
      def.onEnter(riskField.Attribute, APDRuleType.TC_MIN, riskField, edition, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=MinimumValue) at APDRiskPanelSet.pcf: line 176, column 58
    function def_onEnter_121 (def :  pcf.APDAttributeDefaultValue_calculated) : void {
      def.onEnter(riskField.Attribute, APDRuleType.TC_MIN, riskField, edition, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=MinimumValue) at APDRiskPanelSet.pcf: line 176, column 58
    function def_onEnter_123 (def :  pcf.APDAttributeDefaultValue_date) : void {
      def.onEnter(riskField.Attribute, APDRuleType.TC_MIN, riskField, edition, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=MinimumValue) at APDRiskPanelSet.pcf: line 176, column 58
    function def_onEnter_125 (def :  pcf.APDAttributeDefaultValue_default) : void {
      def.onEnter(riskField.Attribute, APDRuleType.TC_MIN, riskField, edition, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=MinimumValue) at APDRiskPanelSet.pcf: line 176, column 58
    function def_onEnter_127 (def :  pcf.APDAttributeDefaultValue_integer) : void {
      def.onEnter(riskField.Attribute, APDRuleType.TC_MIN, riskField, edition, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=MinimumValue) at APDRiskPanelSet.pcf: line 176, column 58
    function def_onEnter_129 (def :  pcf.APDAttributeDefaultValue_money) : void {
      def.onEnter(riskField.Attribute, APDRuleType.TC_MIN, riskField, edition, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=MinimumValue) at APDRiskPanelSet.pcf: line 176, column 58
    function def_onEnter_131 (def :  pcf.APDAttributeDefaultValue_none) : void {
      def.onEnter(riskField.Attribute, APDRuleType.TC_MIN, riskField, edition, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=MinimumValue) at APDRiskPanelSet.pcf: line 176, column 58
    function def_onEnter_133 (def :  pcf.APDAttributeDefaultValue_typekey) : void {
      def.onEnter(riskField.Attribute, APDRuleType.TC_MIN, riskField, edition, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=MaximumValue) at APDRiskPanelSet.pcf: line 184, column 58
    function def_onEnter_138 (def :  pcf.APDAttributeDefaultValue_bigdecimal) : void {
      def.onEnter(riskField.Attribute, APDRuleType.TC_MAX, riskField, edition, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=MaximumValue) at APDRiskPanelSet.pcf: line 184, column 58
    function def_onEnter_140 (def :  pcf.APDAttributeDefaultValue_boolean) : void {
      def.onEnter(riskField.Attribute, APDRuleType.TC_MAX, riskField, edition, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=MaximumValue) at APDRiskPanelSet.pcf: line 184, column 58
    function def_onEnter_142 (def :  pcf.APDAttributeDefaultValue_calculated) : void {
      def.onEnter(riskField.Attribute, APDRuleType.TC_MAX, riskField, edition, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=MaximumValue) at APDRiskPanelSet.pcf: line 184, column 58
    function def_onEnter_144 (def :  pcf.APDAttributeDefaultValue_date) : void {
      def.onEnter(riskField.Attribute, APDRuleType.TC_MAX, riskField, edition, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=MaximumValue) at APDRiskPanelSet.pcf: line 184, column 58
    function def_onEnter_146 (def :  pcf.APDAttributeDefaultValue_default) : void {
      def.onEnter(riskField.Attribute, APDRuleType.TC_MAX, riskField, edition, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=MaximumValue) at APDRiskPanelSet.pcf: line 184, column 58
    function def_onEnter_148 (def :  pcf.APDAttributeDefaultValue_integer) : void {
      def.onEnter(riskField.Attribute, APDRuleType.TC_MAX, riskField, edition, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=MaximumValue) at APDRiskPanelSet.pcf: line 184, column 58
    function def_onEnter_150 (def :  pcf.APDAttributeDefaultValue_money) : void {
      def.onEnter(riskField.Attribute, APDRuleType.TC_MAX, riskField, edition, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=MaximumValue) at APDRiskPanelSet.pcf: line 184, column 58
    function def_onEnter_152 (def :  pcf.APDAttributeDefaultValue_none) : void {
      def.onEnter(riskField.Attribute, APDRuleType.TC_MAX, riskField, edition, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=MaximumValue) at APDRiskPanelSet.pcf: line 184, column 58
    function def_onEnter_154 (def :  pcf.APDAttributeDefaultValue_typekey) : void {
      def.onEnter(riskField.Attribute, APDRuleType.TC_MAX, riskField, edition, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskPanelSet.pcf: line 100, column 56
    function def_onEnter_31 (def :  pcf.APDDataFieldValue_bigdecimal) : void {
      def.onEnter(riskField, edition)
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskPanelSet.pcf: line 100, column 56
    function def_onEnter_33 (def :  pcf.APDDataFieldValue_boolean) : void {
      def.onEnter(riskField, edition)
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskPanelSet.pcf: line 100, column 56
    function def_onEnter_35 (def :  pcf.APDDataFieldValue_date) : void {
      def.onEnter(riskField, edition)
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskPanelSet.pcf: line 100, column 56
    function def_onEnter_37 (def :  pcf.APDDataFieldValue_default) : void {
      def.onEnter(riskField, edition)
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskPanelSet.pcf: line 100, column 56
    function def_onEnter_39 (def :  pcf.APDDataFieldValue_integer) : void {
      def.onEnter(riskField, edition)
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskPanelSet.pcf: line 100, column 56
    function def_onEnter_41 (def :  pcf.APDDataFieldValue_location) : void {
      def.onEnter(riskField, edition)
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskPanelSet.pcf: line 100, column 56
    function def_onEnter_43 (def :  pcf.APDDataFieldValue_money) : void {
      def.onEnter(riskField, edition)
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskPanelSet.pcf: line 100, column 56
    function def_onEnter_45 (def :  pcf.APDDataFieldValue_party) : void {
      def.onEnter(riskField, edition)
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskPanelSet.pcf: line 100, column 56
    function def_onEnter_47 (def :  pcf.APDDataFieldValue_scalablebigdecimal) : void {
      def.onEnter(riskField, edition)
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskPanelSet.pcf: line 100, column 56
    function def_onEnter_49 (def :  pcf.APDDataFieldValue_scalableinteger) : void {
      def.onEnter(riskField, edition)
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskPanelSet.pcf: line 100, column 56
    function def_onEnter_51 (def :  pcf.APDDataFieldValue_scalablemoney) : void {
      def.onEnter(riskField, edition)
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskPanelSet.pcf: line 100, column 56
    function def_onEnter_53 (def :  pcf.APDDataFieldValue_typekey) : void {
      def.onEnter(riskField, edition)
    }
    
    // 'def' attribute on ModalCellRef (id=DefaultValue) at APDRiskPanelSet.pcf: line 167, column 58
    function def_onEnter_96 (def :  pcf.APDAttributeDefaultValue_bigdecimal) : void {
      def.onEnter(riskField.Attribute, APDRuleType.TC_DEFAULT, riskField, edition, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=DefaultValue) at APDRiskPanelSet.pcf: line 167, column 58
    function def_onEnter_98 (def :  pcf.APDAttributeDefaultValue_boolean) : void {
      def.onEnter(riskField.Attribute, APDRuleType.TC_DEFAULT, riskField, edition, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=DefaultValue) at APDRiskPanelSet.pcf: line 167, column 58
    function def_refreshVariables_101 (def :  pcf.APDAttributeDefaultValue_calculated) : void {
      def.refreshVariables(riskField.Attribute, APDRuleType.TC_DEFAULT, riskField, edition, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=DefaultValue) at APDRiskPanelSet.pcf: line 167, column 58
    function def_refreshVariables_103 (def :  pcf.APDAttributeDefaultValue_date) : void {
      def.refreshVariables(riskField.Attribute, APDRuleType.TC_DEFAULT, riskField, edition, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=DefaultValue) at APDRiskPanelSet.pcf: line 167, column 58
    function def_refreshVariables_105 (def :  pcf.APDAttributeDefaultValue_default) : void {
      def.refreshVariables(riskField.Attribute, APDRuleType.TC_DEFAULT, riskField, edition, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=DefaultValue) at APDRiskPanelSet.pcf: line 167, column 58
    function def_refreshVariables_107 (def :  pcf.APDAttributeDefaultValue_integer) : void {
      def.refreshVariables(riskField.Attribute, APDRuleType.TC_DEFAULT, riskField, edition, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=DefaultValue) at APDRiskPanelSet.pcf: line 167, column 58
    function def_refreshVariables_109 (def :  pcf.APDAttributeDefaultValue_money) : void {
      def.refreshVariables(riskField.Attribute, APDRuleType.TC_DEFAULT, riskField, edition, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=DefaultValue) at APDRiskPanelSet.pcf: line 167, column 58
    function def_refreshVariables_111 (def :  pcf.APDAttributeDefaultValue_none) : void {
      def.refreshVariables(riskField.Attribute, APDRuleType.TC_DEFAULT, riskField, edition, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=DefaultValue) at APDRiskPanelSet.pcf: line 167, column 58
    function def_refreshVariables_113 (def :  pcf.APDAttributeDefaultValue_typekey) : void {
      def.refreshVariables(riskField.Attribute, APDRuleType.TC_DEFAULT, riskField, edition, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=MinimumValue) at APDRiskPanelSet.pcf: line 176, column 58
    function def_refreshVariables_118 (def :  pcf.APDAttributeDefaultValue_bigdecimal) : void {
      def.refreshVariables(riskField.Attribute, APDRuleType.TC_MIN, riskField, edition, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=MinimumValue) at APDRiskPanelSet.pcf: line 176, column 58
    function def_refreshVariables_120 (def :  pcf.APDAttributeDefaultValue_boolean) : void {
      def.refreshVariables(riskField.Attribute, APDRuleType.TC_MIN, riskField, edition, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=MinimumValue) at APDRiskPanelSet.pcf: line 176, column 58
    function def_refreshVariables_122 (def :  pcf.APDAttributeDefaultValue_calculated) : void {
      def.refreshVariables(riskField.Attribute, APDRuleType.TC_MIN, riskField, edition, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=MinimumValue) at APDRiskPanelSet.pcf: line 176, column 58
    function def_refreshVariables_124 (def :  pcf.APDAttributeDefaultValue_date) : void {
      def.refreshVariables(riskField.Attribute, APDRuleType.TC_MIN, riskField, edition, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=MinimumValue) at APDRiskPanelSet.pcf: line 176, column 58
    function def_refreshVariables_126 (def :  pcf.APDAttributeDefaultValue_default) : void {
      def.refreshVariables(riskField.Attribute, APDRuleType.TC_MIN, riskField, edition, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=MinimumValue) at APDRiskPanelSet.pcf: line 176, column 58
    function def_refreshVariables_128 (def :  pcf.APDAttributeDefaultValue_integer) : void {
      def.refreshVariables(riskField.Attribute, APDRuleType.TC_MIN, riskField, edition, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=MinimumValue) at APDRiskPanelSet.pcf: line 176, column 58
    function def_refreshVariables_130 (def :  pcf.APDAttributeDefaultValue_money) : void {
      def.refreshVariables(riskField.Attribute, APDRuleType.TC_MIN, riskField, edition, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=MinimumValue) at APDRiskPanelSet.pcf: line 176, column 58
    function def_refreshVariables_132 (def :  pcf.APDAttributeDefaultValue_none) : void {
      def.refreshVariables(riskField.Attribute, APDRuleType.TC_MIN, riskField, edition, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=MinimumValue) at APDRiskPanelSet.pcf: line 176, column 58
    function def_refreshVariables_134 (def :  pcf.APDAttributeDefaultValue_typekey) : void {
      def.refreshVariables(riskField.Attribute, APDRuleType.TC_MIN, riskField, edition, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=MaximumValue) at APDRiskPanelSet.pcf: line 184, column 58
    function def_refreshVariables_139 (def :  pcf.APDAttributeDefaultValue_bigdecimal) : void {
      def.refreshVariables(riskField.Attribute, APDRuleType.TC_MAX, riskField, edition, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=MaximumValue) at APDRiskPanelSet.pcf: line 184, column 58
    function def_refreshVariables_141 (def :  pcf.APDAttributeDefaultValue_boolean) : void {
      def.refreshVariables(riskField.Attribute, APDRuleType.TC_MAX, riskField, edition, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=MaximumValue) at APDRiskPanelSet.pcf: line 184, column 58
    function def_refreshVariables_143 (def :  pcf.APDAttributeDefaultValue_calculated) : void {
      def.refreshVariables(riskField.Attribute, APDRuleType.TC_MAX, riskField, edition, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=MaximumValue) at APDRiskPanelSet.pcf: line 184, column 58
    function def_refreshVariables_145 (def :  pcf.APDAttributeDefaultValue_date) : void {
      def.refreshVariables(riskField.Attribute, APDRuleType.TC_MAX, riskField, edition, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=MaximumValue) at APDRiskPanelSet.pcf: line 184, column 58
    function def_refreshVariables_147 (def :  pcf.APDAttributeDefaultValue_default) : void {
      def.refreshVariables(riskField.Attribute, APDRuleType.TC_MAX, riskField, edition, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=MaximumValue) at APDRiskPanelSet.pcf: line 184, column 58
    function def_refreshVariables_149 (def :  pcf.APDAttributeDefaultValue_integer) : void {
      def.refreshVariables(riskField.Attribute, APDRuleType.TC_MAX, riskField, edition, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=MaximumValue) at APDRiskPanelSet.pcf: line 184, column 58
    function def_refreshVariables_151 (def :  pcf.APDAttributeDefaultValue_money) : void {
      def.refreshVariables(riskField.Attribute, APDRuleType.TC_MAX, riskField, edition, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=MaximumValue) at APDRiskPanelSet.pcf: line 184, column 58
    function def_refreshVariables_153 (def :  pcf.APDAttributeDefaultValue_none) : void {
      def.refreshVariables(riskField.Attribute, APDRuleType.TC_MAX, riskField, edition, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=MaximumValue) at APDRiskPanelSet.pcf: line 184, column 58
    function def_refreshVariables_155 (def :  pcf.APDAttributeDefaultValue_typekey) : void {
      def.refreshVariables(riskField.Attribute, APDRuleType.TC_MAX, riskField, edition, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskPanelSet.pcf: line 100, column 56
    function def_refreshVariables_32 (def :  pcf.APDDataFieldValue_bigdecimal) : void {
      def.refreshVariables(riskField, edition)
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskPanelSet.pcf: line 100, column 56
    function def_refreshVariables_34 (def :  pcf.APDDataFieldValue_boolean) : void {
      def.refreshVariables(riskField, edition)
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskPanelSet.pcf: line 100, column 56
    function def_refreshVariables_36 (def :  pcf.APDDataFieldValue_date) : void {
      def.refreshVariables(riskField, edition)
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskPanelSet.pcf: line 100, column 56
    function def_refreshVariables_38 (def :  pcf.APDDataFieldValue_default) : void {
      def.refreshVariables(riskField, edition)
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskPanelSet.pcf: line 100, column 56
    function def_refreshVariables_40 (def :  pcf.APDDataFieldValue_integer) : void {
      def.refreshVariables(riskField, edition)
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskPanelSet.pcf: line 100, column 56
    function def_refreshVariables_42 (def :  pcf.APDDataFieldValue_location) : void {
      def.refreshVariables(riskField, edition)
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskPanelSet.pcf: line 100, column 56
    function def_refreshVariables_44 (def :  pcf.APDDataFieldValue_money) : void {
      def.refreshVariables(riskField, edition)
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskPanelSet.pcf: line 100, column 56
    function def_refreshVariables_46 (def :  pcf.APDDataFieldValue_party) : void {
      def.refreshVariables(riskField, edition)
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskPanelSet.pcf: line 100, column 56
    function def_refreshVariables_48 (def :  pcf.APDDataFieldValue_scalablebigdecimal) : void {
      def.refreshVariables(riskField, edition)
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskPanelSet.pcf: line 100, column 56
    function def_refreshVariables_50 (def :  pcf.APDDataFieldValue_scalableinteger) : void {
      def.refreshVariables(riskField, edition)
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskPanelSet.pcf: line 100, column 56
    function def_refreshVariables_52 (def :  pcf.APDDataFieldValue_scalablemoney) : void {
      def.refreshVariables(riskField, edition)
    }
    
    // 'def' attribute on ModalCellRef (id=value) at APDRiskPanelSet.pcf: line 100, column 56
    function def_refreshVariables_54 (def :  pcf.APDDataFieldValue_typekey) : void {
      def.refreshVariables(riskField, edition)
    }
    
    // 'def' attribute on ModalCellRef (id=DefaultValue) at APDRiskPanelSet.pcf: line 167, column 58
    function def_refreshVariables_97 (def :  pcf.APDAttributeDefaultValue_bigdecimal) : void {
      def.refreshVariables(riskField.Attribute, APDRuleType.TC_DEFAULT, riskField, edition, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=DefaultValue) at APDRiskPanelSet.pcf: line 167, column 58
    function def_refreshVariables_99 (def :  pcf.APDAttributeDefaultValue_boolean) : void {
      def.refreshVariables(riskField.Attribute, APDRuleType.TC_DEFAULT, riskField, edition, openForEdit)
    }
    
    // 'value' attribute on TextCell (id=FieldDescription_Cell) at APDRiskPanelSet.pcf: line 202, column 58
    function defaultSetter_165 (__VALUE_TO_SET :  java.lang.Object) : void {
      riskField.Attribute.Description = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextCell (id=FieldName_Cell) at APDRiskPanelSet.pcf: line 211, column 44
    function defaultSetter_170 (__VALUE_TO_SET :  java.lang.Object) : void {
      riskField.Attribute.Name = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextCell (id=FieldLabel_Cell) at APDRiskPanelSet.pcf: line 93, column 54
    function defaultSetter_26 (__VALUE_TO_SET :  java.lang.Object) : void {
      riskField.Attribute.Label = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on CheckBoxCell (id=Identifier_Cell) at APDRiskPanelSet.pcf: line 126, column 58
    function defaultSetter_65 (__VALUE_TO_SET :  java.lang.Object) : void {
      (riskField.Attribute as APDField).Identifier = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on CheckBoxCell (id=Jurisdiction_Cell) at APDRiskPanelSet.pcf: line 134, column 106
    function defaultSetter_73 (__VALUE_TO_SET :  java.lang.Object) : void {
      (riskField.Attribute as APDField).Jurisdiction = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on TypeKeyCell (id=type_Cell) at APDRiskPanelSet.pcf: line 146, column 57
    function defaultSetter_80 (__VALUE_TO_SET :  java.lang.Object) : void {
      riskField.Attribute.Type = (__VALUE_TO_SET as APDFieldType)
    }
    
    // 'editable' attribute on TextCell (id=FieldLabel_Cell) at APDRiskPanelSet.pcf: line 93, column 54
    function editable_24 () : java.lang.Boolean {
      return userPreferences.canDesign()
    }
    
    // 'editable' attribute on ModalCellRef (id=value) at APDRiskPanelSet.pcf: line 100, column 56
    function editable_30 () : java.lang.Boolean {
      return riskField.EditableInUI
    }
    
    // 'editable' attribute on TypeKeyCell (id=type_Cell) at APDRiskPanelSet.pcf: line 146, column 57
    function editable_78 () : java.lang.Boolean {
      return not riskField.Attribute.Jurisdiction
    }
    
    // 'mode' attribute on ModalCellRef (id=DefaultValue) at APDRiskPanelSet.pcf: line 167, column 58
    function mode_114 () : java.lang.Object {
      return riskField.Attribute.getUIRuleMode(edition, APDRuleType.TC_DEFAULT)
    }
    
    // 'mode' attribute on ModalCellRef (id=MinimumValue) at APDRiskPanelSet.pcf: line 176, column 58
    function mode_135 () : java.lang.Object {
      return riskField.Attribute.getUIRuleMode(edition, APDRuleType.TC_MIN)
    }
    
    // 'mode' attribute on ModalCellRef (id=MaximumValue) at APDRiskPanelSet.pcf: line 184, column 58
    function mode_156 () : java.lang.Object {
      return riskField.Attribute.getUIRuleMode(edition, APDRuleType.TC_MAX)
    }
    
    // 'mode' attribute on ModalCellRef (id=value) at APDRiskPanelSet.pcf: line 100, column 56
    function mode_55 () : java.lang.Object {
      return riskField.Attribute.CellMode
    }
    
    // 'onChange' attribute on PostOnChange at APDRiskPanelSet.pcf: line 136, column 75
    function onChange_70 () : void {
      riskField.Attribute.autoSetRiskLocation()
    }
    
    // 'onChange' attribute on PostOnChange at APDRiskPanelSet.pcf: line 148, column 254
    function onChange_77 () : void {
      if (riskField.Attribute.Type != APDFieldType.TC_VARCHAR and riskField.Attribute.Type != APDFieldType.TC_LOCATION and riskField.Attribute.Type != APDFieldType.TC_PARTY) (riskField.Attribute as APDField).Identifier = false
    }
    
    // 'valueRange' attribute on RangeCell (id=Usage_Cell) at APDRiskPanelSet.pcf: line 158, column 58
    function valueRange_90 () : java.lang.Object {
      return APDDataExistenceType.getTypeKeys(false)
    }
    
    // 'value' attribute on TextCell (id=FieldLabel_Cell) at APDRiskPanelSet.pcf: line 93, column 54
    function valueRoot_27 () : java.lang.Object {
      return riskField.Attribute
    }
    
    // 'value' attribute on CheckBoxCell (id=Identifier_Cell) at APDRiskPanelSet.pcf: line 126, column 58
    function valueRoot_66 () : java.lang.Object {
      return (riskField.Attribute as APDField)
    }
    
    // 'value' attribute on RangeCell (id=Usage_Cell) at APDRiskPanelSet.pcf: line 158, column 58
    function valueRoot_89 () : java.lang.Object {
      return riskField
    }
    
    // 'value' attribute on TextCell (id=Tags_Cell) at APDRiskPanelSet.pcf: line 193, column 36
    function value_161 () : java.lang.String {
      return riskField.Attribute.TagDisplayValue
    }
    
    // 'value' attribute on TextCell (id=FieldDescription_Cell) at APDRiskPanelSet.pcf: line 202, column 58
    function value_164 () : java.lang.String {
      return riskField.Attribute.Description
    }
    
    // 'value' attribute on TextCell (id=FieldName_Cell) at APDRiskPanelSet.pcf: line 211, column 44
    function value_169 () : java.lang.String {
      return riskField.Attribute.Name
    }
    
    // 'value' attribute on TextCell (id=FieldLabel_Cell) at APDRiskPanelSet.pcf: line 93, column 54
    function value_25 () : java.lang.String {
      return riskField.Attribute.Label
    }
    
    // 'value' attribute on CheckBoxCell (id=Identifier_Cell) at APDRiskPanelSet.pcf: line 126, column 58
    function value_64 () : java.lang.Boolean {
      return (riskField.Attribute as APDField).Identifier
    }
    
    // 'value' attribute on CheckBoxCell (id=Jurisdiction_Cell) at APDRiskPanelSet.pcf: line 134, column 106
    function value_72 () : java.lang.Boolean {
      return (riskField.Attribute as APDField).Jurisdiction
    }
    
    // 'value' attribute on TypeKeyCell (id=type_Cell) at APDRiskPanelSet.pcf: line 146, column 57
    function value_79 () : APDFieldType {
      return riskField.Attribute.Type
    }
    
    // 'value' attribute on RangeCell (id=Usage_Cell) at APDRiskPanelSet.pcf: line 158, column 58
    function value_88 () : APDDataExistenceType {
      return riskField.Availability
    }
    
    // 'valueRange' attribute on RangeCell (id=Usage_Cell) at APDRiskPanelSet.pcf: line 158, column 58
    function verifyValueRangeIsAllowedType_91 ($$arg :  APDDataExistenceType[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=Usage_Cell) at APDRiskPanelSet.pcf: line 158, column 58
    function verifyValueRangeIsAllowedType_91 ($$arg :  gw.api.database.IQueryBeanResult) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=Usage_Cell) at APDRiskPanelSet.pcf: line 158, column 58
    function verifyValueRangeIsAllowedType_91 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=Usage_Cell) at APDRiskPanelSet.pcf: line 158, column 58
    function verifyValueRange_92 () : void {
      var __valueRangeArg = APDDataExistenceType.getTypeKeys(false)
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_91(__valueRangeArg)
    }
    
    // 'valueType' attribute on TypeKeyCell (id=type_Cell) at APDRiskPanelSet.pcf: line 146, column 57
    function verifyValueType_85 () : void {
      var __valueTypeArg : APDFieldType
      // If this assignment statement fails to compile, that means that the declared valueType
      // is not a valid type for use with this Input or Cell type
      var __requiredTypeArg : gw.entity.TypeKey = __valueTypeArg
    }
    
    // 'valueVisible' attribute on TextCell (id=Tags_Cell) at APDRiskPanelSet.pcf: line 193, column 36
    function visible_158 () : java.lang.Boolean {
      return riskField.Attribute.ShowDisplayValue
    }
    
    // 'visible' attribute on TextCell (id=FieldName_Cell) at APDRiskPanelSet.pcf: line 211, column 44
    function visible_172 () : java.lang.Boolean {
      return inDevelopMode
    }
    
    // 'valueVisible' attribute on CheckBoxCell (id=Jurisdiction_Cell) at APDRiskPanelSet.pcf: line 134, column 106
    function visible_71 () : java.lang.Boolean {
      return riskField.Attribute.Type == APDFieldType.TC_LOCATION
    }
    
    // 'visible' attribute on CheckBoxCell (id=Jurisdiction_Cell) at APDRiskPanelSet.pcf: line 134, column 106
    function visible_75 () : java.lang.Boolean {
      return userPreferences.canDesign() and not (riskCoverable typeis APDRiskPolicyLine)
    }
    
    property get riskField () : APDRiskField {
      return getIteratedValue(1) as APDRiskField
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/apd/policy/APDRiskPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class useModeRiskFieldDVExpressionsImpl extends APDRiskPanelSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at APDRiskPanelSet.pcf: line 224, column 38
    function initialValue_179 () : APDRiskField[] {
      return riskCoverable.RiskFields.where(\f -> f.ShowInUseMode)
    }
    
    // 'initialValue' attribute on Variable at APDRiskPanelSet.pcf: line 229, column 31
    function initialValue_180 () : Integer {
      return getMiddleFieldSequence(availableFields)
    }
    
    // 'sortBy' attribute on IteratorSort at APDRiskPanelSet.pcf: line 254, column 38
    function sortBy_181 (riskField :  APDRiskField) : java.lang.Object {
      return riskField.Attribute.Sequence
    }
    
    // 'toCreateAndAdd' attribute on RowIterator (id=riskFieldsLeft) at APDRiskPanelSet.pcf: line 251, column 48
    function toCreateAndAdd_214 () : APDRiskField {
      return riskCoverable.createAndAddField()
    }
    
    // 'toRemove' attribute on RowIterator (id=riskFieldsLeft) at APDRiskPanelSet.pcf: line 251, column 48
    function toRemove_215 (riskField :  APDRiskField) : void {
      riskCoverable.removeField(riskField)
    }
    
    // 'value' attribute on RowIterator (id=riskFieldsLeft) at APDRiskPanelSet.pcf: line 251, column 48
    function value_216 () : APDRiskField[] {
      return availableFields.where(\f -> f.Attribute.Sequence <= middleSequence)
    }
    
    // 'value' attribute on RowIterator (id=riskFieldsRight) at APDRiskPanelSet.pcf: line 297, column 48
    function value_252 () : APDRiskField[] {
      return availableFields.where(\f -> f.Attribute.Sequence > middleSequence)
    }
    
    property get availableFields () : APDRiskField[] {
      return getVariableValue("availableFields", 1) as APDRiskField[]
    }
    
    property set availableFields ($arg :  APDRiskField[]) {
      setVariableValue("availableFields", 1, $arg)
    }
    
    property get middleSequence () : Integer {
      return getVariableValue("middleSequence", 1) as Integer
    }
    
    property set middleSequence ($arg :  Integer) {
      setVariableValue("middleSequence", 1, $arg)
    }
    
    
  }
  
  
}