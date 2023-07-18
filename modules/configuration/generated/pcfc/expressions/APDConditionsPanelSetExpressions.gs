package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/tools/apd/APDConditionsPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class APDConditionsPanelSetExpressions {
  @javax.annotation.Generated("config/web/pcf/tools/apd/APDConditionsPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class APDConditionsPanelSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at APDConditionsPanelSet.pcf: line 25, column 28
    function initialValue_0 () : APDCondition {
      return parentClause as APDCondition
    }
    
    // 'initialValue' attribute on Variable at APDConditionsPanelSet.pcf: line 29, column 23
    function initialValue_1 () : boolean {
      return parentCondition == null
    }
    
    // 'initialValue' attribute on Variable at APDConditionsPanelSet.pcf: line 34, column 30
    function initialValue_2 () : APDCondition[] {
      return isTopLevel ? coverable.TopLevelConditions : parentCondition.SubConditions
    }
    
    // 'initialValue' attribute on Variable at APDConditionsPanelSet.pcf: line 39, column 45
    function initialValue_3 () : gw.apd.web.APDClauseWrapper[] {
      return parentCondition.AvailableSubClauses?.map(\cond -> new gw.apd.web.APDClauseWrapper(cond))
    }
    
    property get availableSubClauses () : gw.apd.web.APDClauseWrapper[] {
      return getVariableValue("availableSubClauses", 0) as gw.apd.web.APDClauseWrapper[]
    }
    
    property set availableSubClauses ($arg :  gw.apd.web.APDClauseWrapper[]) {
      setVariableValue("availableSubClauses", 0, $arg)
    }
    
    property get conditions () : APDCondition[] {
      return getVariableValue("conditions", 0) as APDCondition[]
    }
    
    property set conditions ($arg :  APDCondition[]) {
      setVariableValue("conditions", 0, $arg)
    }
    
    property get coverable () : APDCoverable {
      return getRequireValue("coverable", 0) as APDCoverable
    }
    
    property set coverable ($arg :  APDCoverable) {
      setRequireValue("coverable", 0, $arg)
    }
    
    property get edition () : APDProductLineEdition {
      return getRequireValue("edition", 0) as APDProductLineEdition
    }
    
    property set edition ($arg :  APDProductLineEdition) {
      setRequireValue("edition", 0, $arg)
    }
    
    property get inDevelopMode () : boolean {
      return getRequireValue("inDevelopMode", 0) as java.lang.Boolean
    }
    
    property set inDevelopMode ($arg :  boolean) {
      setRequireValue("inDevelopMode", 0, $arg)
    }
    
    property get isTopLevel () : boolean {
      return getVariableValue("isTopLevel", 0) as java.lang.Boolean
    }
    
    property set isTopLevel ($arg :  boolean) {
      setVariableValue("isTopLevel", 0, $arg)
    }
    
    property get openForEdit () : boolean {
      return getRequireValue("openForEdit", 0) as java.lang.Boolean
    }
    
    property set openForEdit ($arg :  boolean) {
      setRequireValue("openForEdit", 0, $arg)
    }
    
    property get parentClause () : APDClause {
      return getRequireValue("parentClause", 0) as APDClause
    }
    
    property set parentClause ($arg :  APDClause) {
      setRequireValue("parentClause", 0, $arg)
    }
    
    property get parentCondition () : APDCondition {
      return getVariableValue("parentCondition", 0) as APDCondition
    }
    
    property set parentCondition ($arg :  APDCondition) {
      setVariableValue("parentCondition", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/tools/apd/APDConditionsPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry2ExpressionsImpl extends ListDetailPanelExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextCell (id=TermsButton_Cell) at APDConditionsPanelSet.pcf: line 125, column 149
    function action_24 () : void {
      APDClauseTermsPopup.push(condition, edition, openForEdit)
    }
    
    // 'action' attribute on TextCell (id=SubClausesButton_Cell) at APDConditionsPanelSet.pcf: line 131, column 161
    function action_28 () : void {
      APDSubConditionsPopup.push(condition, edition, openForEdit, inDevelopMode)
    }
    
    // 'action' attribute on MenuItem (id=EditCategory) at APDConditionsPanelSet.pcf: line 146, column 94
    function action_33 () : void {
      APDClauseCategoryPopup.push(condition.ClauseCategory, CurrentLocation.InEditMode)
    }
    
    // 'action' attribute on PickerMenuItem (id=AddNewCategory) at APDConditionsPanelSet.pcf: line 151, column 68
    function action_35 () : void {
      APDNewLibraryCategoryPopup.push(coverable)
    }
    
    // 'action' attribute on RangeCell (id=Usage_Cell) at APDConditionsPanelSet.pcf: line 160, column 51
    function action_48 () : void {
      APDClauseRulePopup.push(condition.getEditionRule(edition, APDRuleType.TC_EXISTENCE), condition, APDRuleType.TC_EXISTENCE, edition, openForEdit)
    }
    
    // 'action' attribute on TextCell (id=Tags_Cell) at APDConditionsPanelSet.pcf: line 168, column 34
    function action_55 () : void {
      APDTagPopup.push(condition, openForEdit)
    }
    
    // 'action' attribute on MenuItem (id=MoveUp) at APDConditionsPanelSet.pcf: line 192, column 97
    function action_74 () : void {
      condition.moveUp()
    }
    
    // 'action' attribute on MenuItem (id=MoveDown) at APDConditionsPanelSet.pcf: line 197, column 99
    function action_76 () : void {
      condition.moveDown()
    }
    
    // 'action' attribute on TextCell (id=TermsButton_Cell) at APDConditionsPanelSet.pcf: line 125, column 149
    function action_dest_25 () : pcf.api.Destination {
      return pcf.APDClauseTermsPopup.createDestination(condition, edition, openForEdit)
    }
    
    // 'action' attribute on TextCell (id=SubClausesButton_Cell) at APDConditionsPanelSet.pcf: line 131, column 161
    function action_dest_29 () : pcf.api.Destination {
      return pcf.APDSubConditionsPopup.createDestination(condition, edition, openForEdit, inDevelopMode)
    }
    
    // 'action' attribute on MenuItem (id=EditCategory) at APDConditionsPanelSet.pcf: line 146, column 94
    function action_dest_34 () : pcf.api.Destination {
      return pcf.APDClauseCategoryPopup.createDestination(condition.ClauseCategory, CurrentLocation.InEditMode)
    }
    
    // 'action' attribute on PickerMenuItem (id=AddNewCategory) at APDConditionsPanelSet.pcf: line 151, column 68
    function action_dest_36 () : pcf.api.Destination {
      return pcf.APDNewLibraryCategoryPopup.createDestination(coverable)
    }
    
    // 'action' attribute on RangeCell (id=Usage_Cell) at APDConditionsPanelSet.pcf: line 160, column 51
    function action_dest_49 () : pcf.api.Destination {
      return pcf.APDClauseRulePopup.createDestination(condition.getEditionRule(edition, APDRuleType.TC_EXISTENCE), condition, APDRuleType.TC_EXISTENCE, edition, openForEdit)
    }
    
    // 'action' attribute on TextCell (id=Tags_Cell) at APDConditionsPanelSet.pcf: line 168, column 34
    function action_dest_56 () : pcf.api.Destination {
      return pcf.APDTagPopup.createDestination(condition, openForEdit)
    }
    
    // 'available' attribute on MenuItem (id=EditCategory) at APDConditionsPanelSet.pcf: line 146, column 94
    function available_32 () : java.lang.Boolean {
      return condition.ClauseCategory != null
    }
    
    // 'available' attribute on MenuItem (id=MoveUp) at APDConditionsPanelSet.pcf: line 192, column 97
    function available_73 () : java.lang.Boolean {
      return condition.canMoveUp()
    }
    
    // 'available' attribute on MenuItem (id=MoveDown) at APDConditionsPanelSet.pcf: line 197, column 99
    function available_75 () : java.lang.Boolean {
      return condition.canMoveDown()
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at APDConditionsPanelSet.pcf: line 119, column 41
    function defaultSetter_21 (__VALUE_TO_SET :  java.lang.Object) : void {
      condition.Name = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on RangeCell (id=ClauseCategory_Cell) at APDConditionsPanelSet.pcf: line 141, column 47
    function defaultSetter_41 (__VALUE_TO_SET :  java.lang.Object) : void {
      condition.ClauseCategory = (__VALUE_TO_SET as APDClauseCategory)
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at APDConditionsPanelSet.pcf: line 174, column 48
    function defaultSetter_62 (__VALUE_TO_SET :  java.lang.Object) : void {
      condition.Description = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextCell (id=CodeIdentifier_Cell) at APDConditionsPanelSet.pcf: line 181, column 42
    function defaultSetter_68 (__VALUE_TO_SET :  java.lang.Object) : void {
      condition.CodeIdentifier = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'editable' attribute on RangeCell (id=ClauseCategory_Cell) at APDConditionsPanelSet.pcf: line 141, column 47
    function editable_38 () : java.lang.Boolean {
      return isTopLevel
    }
    
    // 'label' attribute on TextCell (id=Description_Cell) at APDConditionsPanelSet.pcf: line 174, column 48
    function label_60 () : java.lang.Object {
      return DisplayKey.get("Web.APD.RequiredForGeneration", DisplayKey.get("Web.APDCoverableCV.Description"))
    }
    
    // 'label' attribute on TextCell (id=CodeIdentifier_Cell) at APDConditionsPanelSet.pcf: line 181, column 42
    function label_66 () : java.lang.Object {
      return DisplayKey.get("Web.APD.RequiredForGeneration", DisplayKey.get("Web.APDCoverableCV.CodeIdentifier", coverable.LinePrefix))
    }
    
    // 'onPick' attribute on PickerMenuItem (id=AddNewCategory) at APDConditionsPanelSet.pcf: line 151, column 68
    function onPick_37 (PickedValue :  APDClauseCategory) : void {
      condition.ClauseCategory = PickedValue
    }
    
    // 'valueRange' attribute on RangeCell (id=ClauseCategory_Cell) at APDConditionsPanelSet.pcf: line 141, column 47
    function valueRange_43 () : java.lang.Object {
      return condition.Coverable.ClauseCategories
    }
    
    // 'valueRange' attribute on RangeCell (id=Usage_Cell) at APDConditionsPanelSet.pcf: line 160, column 51
    function valueRange_51 () : java.lang.Object {
      return APDDataExistenceType.getTypeKeys(false)
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at APDConditionsPanelSet.pcf: line 119, column 41
    function valueRoot_22 () : java.lang.Object {
      return condition
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at APDConditionsPanelSet.pcf: line 119, column 41
    function value_20 () : java.lang.String {
      return condition.Name
    }
    
    // 'value' attribute on TextCell (id=TermsButton_Cell) at APDConditionsPanelSet.pcf: line 125, column 149
    function value_26 () : java.lang.String {
      return DisplayKey.get( "Web.APDCoverableCV.EditTerms", gw.apd.util.APDStringUtil.makeLabelCount(condition.Terms.Count))
    }
    
    // 'value' attribute on TextCell (id=SubClausesButton_Cell) at APDConditionsPanelSet.pcf: line 131, column 161
    function value_30 () : java.lang.String {
      return DisplayKey.get("Web.APDCoverableCV.EditSubClauses", gw.apd.util.APDStringUtil.makeLabelCount(condition.SubConditions.Count))
    }
    
    // 'value' attribute on RangeCell (id=ClauseCategory_Cell) at APDConditionsPanelSet.pcf: line 141, column 47
    function value_40 () : APDClauseCategory {
      return condition.ClauseCategory
    }
    
    // 'value' attribute on RangeCell (id=Usage_Cell) at APDConditionsPanelSet.pcf: line 160, column 51
    function value_50 () : APDDataExistenceType {
      return condition.getEditionRule(edition, APDRuleType.TC_EXISTENCE).DefaultExistence ?: APDDataExistenceType.TC_OPTIONAL
    }
    
    // 'value' attribute on TextCell (id=Tags_Cell) at APDConditionsPanelSet.pcf: line 168, column 34
    function value_57 () : java.lang.String {
      return condition.TagDisplayValue
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at APDConditionsPanelSet.pcf: line 174, column 48
    function value_61 () : java.lang.String {
      return condition.Description
    }
    
    // 'value' attribute on TextCell (id=CodeIdentifier_Cell) at APDConditionsPanelSet.pcf: line 181, column 42
    function value_67 () : java.lang.String {
      return condition.CodeIdentifier
    }
    
    // 'valueRange' attribute on RangeCell (id=ClauseCategory_Cell) at APDConditionsPanelSet.pcf: line 141, column 47
    function verifyValueRangeIsAllowedType_44 ($$arg :  APDClauseCategory[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=ClauseCategory_Cell) at APDConditionsPanelSet.pcf: line 141, column 47
    function verifyValueRangeIsAllowedType_44 ($$arg :  gw.api.database.IQueryBeanResult) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=ClauseCategory_Cell) at APDConditionsPanelSet.pcf: line 141, column 47
    function verifyValueRangeIsAllowedType_44 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=Usage_Cell) at APDConditionsPanelSet.pcf: line 160, column 51
    function verifyValueRangeIsAllowedType_52 ($$arg :  APDDataExistenceType[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=Usage_Cell) at APDConditionsPanelSet.pcf: line 160, column 51
    function verifyValueRangeIsAllowedType_52 ($$arg :  gw.api.database.IQueryBeanResult) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=Usage_Cell) at APDConditionsPanelSet.pcf: line 160, column 51
    function verifyValueRangeIsAllowedType_52 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=ClauseCategory_Cell) at APDConditionsPanelSet.pcf: line 141, column 47
    function verifyValueRange_45 () : void {
      var __valueRangeArg = condition.Coverable.ClauseCategories
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_44(__valueRangeArg)
    }
    
    // 'valueRange' attribute on RangeCell (id=Usage_Cell) at APDConditionsPanelSet.pcf: line 160, column 51
    function verifyValueRange_53 () : void {
      var __valueRangeArg = APDDataExistenceType.getTypeKeys(false)
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_52(__valueRangeArg)
    }
    
    // 'visible' attribute on TextCell (id=CodeIdentifier_Cell) at APDConditionsPanelSet.pcf: line 181, column 42
    function visible_70 () : java.lang.Boolean {
      return inDevelopMode
    }
    
    property get condition () : APDCondition {
      return getIteratedValue(2) as APDCondition
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/tools/apd/APDConditionsPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends ListDetailPanelExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on MenuItem (id=ExistingCondition) at APDConditionsPanelSet.pcf: line 68, column 51
    function action_5 () : void {
      availableSubCond.Clause.assignParent(parentCondition)
    }
    
    // 'label' attribute on MenuItem (id=ExistingCondition) at APDConditionsPanelSet.pcf: line 68, column 51
    function label_6 () : java.lang.Object {
      return availableSubCond.Label
    }
    
    property get availableSubCond () : gw.apd.web.APDClauseWrapper {
      return getIteratedValue(2) as gw.apd.web.APDClauseWrapper
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/tools/apd/APDConditionsPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ListDetailPanelExpressionsImpl extends APDConditionsPanelSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on ToolbarButton (id=ManageConditionCategories) at APDConditionsPanelSet.pcf: line 97, column 35
    function action_13 () : void {
      APDManageClauseCategoriesPopup.push(coverable, openForEdit)
    }
    
    // 'action' attribute on ToolbarButton (id=ManageConditionCategories) at APDConditionsPanelSet.pcf: line 97, column 35
    function action_dest_14 () : pcf.api.Destination {
      return pcf.APDManageClauseCategoriesPopup.createDestination(coverable, openForEdit)
    }
    
    // 'allCheckedRowsAction' attribute on CheckedValuesToolbarButton (id=UnassignSubClause) at APDConditionsPanelSet.pcf: line 90, column 36
    function allCheckedRowsAction_11 (CheckedValues :  APDCondition[], CheckedValuesErrors :  java.util.Map) : void {
      CheckedValues*.unassignParent(); gw.api.web.PebblesUtil.invalidateIterators(CurrentLocation, entity.APDCondition)
    }
    
    // 'def' attribute on PanelRef (id=ConditionLocalizedValues) at APDConditionsPanelSet.pcf: line 212, column 48
    function def_onEnter_80 (def :  pcf.LocalizedValuesDV) : void {
      def.onEnter(conditionDetails, {"Name", "Description"}, {DisplayKey.get("Web.APDCoverableCV.Name"), DisplayKey.get("Web.APDCoverableCV.Description")})
    }
    
    // 'def' attribute on PanelRef (id=ConditionLocalizedValues) at APDConditionsPanelSet.pcf: line 212, column 48
    function def_refreshVariables_81 (def :  pcf.LocalizedValuesDV) : void {
      def.refreshVariables(conditionDetails, {"Name", "Description"}, {DisplayKey.get("Web.APDCoverableCV.Name"), DisplayKey.get("Web.APDCoverableCV.Description")})
    }
    
    // 'label' attribute on ToolbarButton (id=ManageConditionCategories) at APDConditionsPanelSet.pcf: line 97, column 35
    function label_15 () : java.lang.Object {
      return DisplayKey.get( "Web.APDCoverableCV.ManageClauseCategoriesButton" )
    }
    
    // 'label' attribute on TextCell (id=Description_Cell) at APDConditionsPanelSet.pcf: line 174, column 48
    function label_17 () : java.lang.Object {
      return DisplayKey.get("Web.APD.RequiredForGeneration", DisplayKey.get("Web.APDCoverableCV.Description"))
    }
    
    // 'label' attribute on TextCell (id=CodeIdentifier_Cell) at APDConditionsPanelSet.pcf: line 181, column 42
    function label_18 () : java.lang.Object {
      return DisplayKey.get("Web.APD.RequiredForGeneration", DisplayKey.get("Web.APDCoverableCV.CodeIdentifier", coverable.LinePrefix))
    }
    
    // 'sortBy' attribute on IteratorSort at APDConditionsPanelSet.pcf: line 111, column 30
    function sortBy_16 (condition :  APDCondition) : java.lang.Object {
      return condition.Sequence
    }
    
    // 'sortBy' attribute on IteratorSort at APDConditionsPanelSet.pcf: line 64, column 34
    function sortBy_4 (availableSubCond :  gw.apd.web.APDClauseWrapper) : java.lang.Object {
      return availableSubCond.Label
    }
    
    // 'toCreateAndAdd' attribute on RowIterator at APDConditionsPanelSet.pcf: line 108, column 40
    function toCreateAndAdd_77 () : APDCondition {
      return isTopLevel ? coverable.addCondition(null) : parentCondition.createAndAddSubCondition()
    }
    
    // 'toRemove' attribute on RowIterator at APDConditionsPanelSet.pcf: line 108, column 40
    function toRemove_78 (condition :  APDCondition) : void {
      coverable.removeClause(condition)
    }
    
    // 'value' attribute on MenuItemIterator (id=AvailableSubConditionsIterator) at APDConditionsPanelSet.pcf: line 61, column 59
    function value_7 () : gw.apd.web.APDClauseWrapper[] {
      return availableSubClauses
    }
    
    // 'value' attribute on RowIterator at APDConditionsPanelSet.pcf: line 108, column 40
    function value_79 () : APDCondition[] {
      return conditions
    }
    
    // 'visible' attribute on CheckedValuesToolbarButton (id=UnassignSubClause) at APDConditionsPanelSet.pcf: line 90, column 36
    function visible_10 () : java.lang.Boolean {
      return !isTopLevel
    }
    
    // 'visible' attribute on ToolbarButton (id=ManageConditionCategories) at APDConditionsPanelSet.pcf: line 97, column 35
    function visible_12 () : java.lang.Boolean {
      return isTopLevel
    }
    
    // 'visible' attribute on TextCell (id=CodeIdentifier_Cell) at APDConditionsPanelSet.pcf: line 181, column 42
    function visible_19 () : java.lang.Boolean {
      return inDevelopMode
    }
    
    // 'visible' attribute on ToolbarButton (id=AddChildCondition) at APDConditionsPanelSet.pcf: line 49, column 58
    function visible_8 () : java.lang.Boolean {
      return openForEdit && !isTopLevel
    }
    
    // 'visible' attribute on AddButton (id=Add) at APDConditionsPanelSet.pcf: line 77, column 58
    function visible_9 () : java.lang.Boolean {
      return openForEdit && isTopLevel
    }
    
    property get conditionDetails () : APDCondition {
      return getCurrentSelection(1) as APDCondition
    }
    
    property set conditionDetails ($arg :  APDCondition) {
      setCurrentSelection(1, $arg)
    }
    
    
  }
  
  
}