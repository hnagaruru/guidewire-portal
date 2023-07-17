package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/tools/apd/APDExclusionsPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class APDExclusionsPanelSetExpressions {
  @javax.annotation.Generated("config/web/pcf/tools/apd/APDExclusionsPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class APDExclusionsPanelSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at APDExclusionsPanelSet.pcf: line 25, column 28
    function initialValue_0 () : APDExclusion {
      return parentClause as APDExclusion
    }
    
    // 'initialValue' attribute on Variable at APDExclusionsPanelSet.pcf: line 29, column 23
    function initialValue_1 () : boolean {
      return parentExclusion == null
    }
    
    // 'initialValue' attribute on Variable at APDExclusionsPanelSet.pcf: line 34, column 30
    function initialValue_2 () : APDExclusion[] {
      return isTopLevel ? coverable.TopLevelExclusions : parentExclusion.SubExclusions
    }
    
    // 'initialValue' attribute on Variable at APDExclusionsPanelSet.pcf: line 39, column 45
    function initialValue_3 () : gw.apd.web.APDClauseWrapper[] {
      return parentExclusion.AvailableSubClauses?.map(\excl -> new gw.apd.web.APDClauseWrapper(excl))
    }
    
    property get availableSubClauses () : gw.apd.web.APDClauseWrapper[] {
      return getVariableValue("availableSubClauses", 0) as gw.apd.web.APDClauseWrapper[]
    }
    
    property set availableSubClauses ($arg :  gw.apd.web.APDClauseWrapper[]) {
      setVariableValue("availableSubClauses", 0, $arg)
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
    
    property get exclusions () : APDExclusion[] {
      return getVariableValue("exclusions", 0) as APDExclusion[]
    }
    
    property set exclusions ($arg :  APDExclusion[]) {
      setVariableValue("exclusions", 0, $arg)
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
    
    property get parentExclusion () : APDExclusion {
      return getVariableValue("parentExclusion", 0) as APDExclusion
    }
    
    property set parentExclusion ($arg :  APDExclusion) {
      setVariableValue("parentExclusion", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/tools/apd/APDExclusionsPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry2ExpressionsImpl extends ListDetailPanelExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextCell (id=TermsButton_Cell) at APDExclusionsPanelSet.pcf: line 126, column 148
    function action_23 () : void {
      APDClauseTermsPopup.push(exclusion, edition, openForEdit)
    }
    
    // 'action' attribute on TextCell (id=SubClausesButton_Cell) at APDExclusionsPanelSet.pcf: line 132, column 161
    function action_27 () : void {
      APDSubExclusionsPopup.push(exclusion, edition, openForEdit, inDevelopMode)
    }
    
    // 'action' attribute on MenuItem (id=EditCategory) at APDExclusionsPanelSet.pcf: line 147, column 94
    function action_32 () : void {
      APDClauseCategoryPopup.push(exclusion.ClauseCategory, CurrentLocation.InEditMode)
    }
    
    // 'action' attribute on PickerMenuItem (id=AddNewCategory) at APDExclusionsPanelSet.pcf: line 152, column 68
    function action_34 () : void {
      APDNewLibraryCategoryPopup.push(coverable)
    }
    
    // 'action' attribute on RangeCell (id=Usage_Cell) at APDExclusionsPanelSet.pcf: line 161, column 51
    function action_47 () : void {
      APDClauseRulePopup.push(exclusion.getEditionRule(edition, APDRuleType.TC_EXISTENCE), exclusion, APDRuleType.TC_EXISTENCE, edition, openForEdit)
    }
    
    // 'action' attribute on TextCell (id=Tags_Cell) at APDExclusionsPanelSet.pcf: line 169, column 34
    function action_54 () : void {
      APDTagPopup.push(exclusion, openForEdit)
    }
    
    // 'action' attribute on MenuItem (id=MoveUp) at APDExclusionsPanelSet.pcf: line 193, column 97
    function action_73 () : void {
      exclusion.moveUp()
    }
    
    // 'action' attribute on MenuItem (id=MoveDown) at APDExclusionsPanelSet.pcf: line 198, column 99
    function action_75 () : void {
      exclusion.moveDown()
    }
    
    // 'action' attribute on TextCell (id=TermsButton_Cell) at APDExclusionsPanelSet.pcf: line 126, column 148
    function action_dest_24 () : pcf.api.Destination {
      return pcf.APDClauseTermsPopup.createDestination(exclusion, edition, openForEdit)
    }
    
    // 'action' attribute on TextCell (id=SubClausesButton_Cell) at APDExclusionsPanelSet.pcf: line 132, column 161
    function action_dest_28 () : pcf.api.Destination {
      return pcf.APDSubExclusionsPopup.createDestination(exclusion, edition, openForEdit, inDevelopMode)
    }
    
    // 'action' attribute on MenuItem (id=EditCategory) at APDExclusionsPanelSet.pcf: line 147, column 94
    function action_dest_33 () : pcf.api.Destination {
      return pcf.APDClauseCategoryPopup.createDestination(exclusion.ClauseCategory, CurrentLocation.InEditMode)
    }
    
    // 'action' attribute on PickerMenuItem (id=AddNewCategory) at APDExclusionsPanelSet.pcf: line 152, column 68
    function action_dest_35 () : pcf.api.Destination {
      return pcf.APDNewLibraryCategoryPopup.createDestination(coverable)
    }
    
    // 'action' attribute on RangeCell (id=Usage_Cell) at APDExclusionsPanelSet.pcf: line 161, column 51
    function action_dest_48 () : pcf.api.Destination {
      return pcf.APDClauseRulePopup.createDestination(exclusion.getEditionRule(edition, APDRuleType.TC_EXISTENCE), exclusion, APDRuleType.TC_EXISTENCE, edition, openForEdit)
    }
    
    // 'action' attribute on TextCell (id=Tags_Cell) at APDExclusionsPanelSet.pcf: line 169, column 34
    function action_dest_55 () : pcf.api.Destination {
      return pcf.APDTagPopup.createDestination(exclusion, openForEdit)
    }
    
    // 'available' attribute on MenuItem (id=EditCategory) at APDExclusionsPanelSet.pcf: line 147, column 94
    function available_31 () : java.lang.Boolean {
      return exclusion.ClauseCategory != null
    }
    
    // 'available' attribute on MenuItem (id=MoveUp) at APDExclusionsPanelSet.pcf: line 193, column 97
    function available_72 () : java.lang.Boolean {
      return exclusion.canMoveUp()
    }
    
    // 'available' attribute on MenuItem (id=MoveDown) at APDExclusionsPanelSet.pcf: line 198, column 99
    function available_74 () : java.lang.Boolean {
      return exclusion.canMoveDown()
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at APDExclusionsPanelSet.pcf: line 120, column 41
    function defaultSetter_20 (__VALUE_TO_SET :  java.lang.Object) : void {
      exclusion.Name = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on RangeCell (id=ClauseCategory_Cell) at APDExclusionsPanelSet.pcf: line 142, column 47
    function defaultSetter_40 (__VALUE_TO_SET :  java.lang.Object) : void {
      exclusion.ClauseCategory = (__VALUE_TO_SET as APDClauseCategory)
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at APDExclusionsPanelSet.pcf: line 175, column 48
    function defaultSetter_61 (__VALUE_TO_SET :  java.lang.Object) : void {
      exclusion.Description = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextCell (id=CodeIdentifier_Cell) at APDExclusionsPanelSet.pcf: line 182, column 42
    function defaultSetter_67 (__VALUE_TO_SET :  java.lang.Object) : void {
      exclusion.CodeIdentifier = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'editable' attribute on RangeCell (id=ClauseCategory_Cell) at APDExclusionsPanelSet.pcf: line 142, column 47
    function editable_37 () : java.lang.Boolean {
      return isTopLevel
    }
    
    // 'label' attribute on TextCell (id=Description_Cell) at APDExclusionsPanelSet.pcf: line 175, column 48
    function label_59 () : java.lang.Object {
      return DisplayKey.get("Web.APD.RequiredForGeneration", DisplayKey.get("Web.APDCoverableCV.Description"))
    }
    
    // 'label' attribute on TextCell (id=CodeIdentifier_Cell) at APDExclusionsPanelSet.pcf: line 182, column 42
    function label_65 () : java.lang.Object {
      return DisplayKey.get("Web.APD.RequiredForGeneration", DisplayKey.get("Web.APDCoverableCV.CodeIdentifier", coverable.LinePrefix))
    }
    
    // 'onPick' attribute on PickerMenuItem (id=AddNewCategory) at APDExclusionsPanelSet.pcf: line 152, column 68
    function onPick_36 (PickedValue :  APDClauseCategory) : void {
      exclusion.ClauseCategory = PickedValue
    }
    
    // 'valueRange' attribute on RangeCell (id=ClauseCategory_Cell) at APDExclusionsPanelSet.pcf: line 142, column 47
    function valueRange_42 () : java.lang.Object {
      return exclusion.Coverable.ClauseCategories
    }
    
    // 'valueRange' attribute on RangeCell (id=Usage_Cell) at APDExclusionsPanelSet.pcf: line 161, column 51
    function valueRange_50 () : java.lang.Object {
      return APDDataExistenceType.getTypeKeys(false)
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at APDExclusionsPanelSet.pcf: line 120, column 41
    function valueRoot_21 () : java.lang.Object {
      return exclusion
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at APDExclusionsPanelSet.pcf: line 120, column 41
    function value_19 () : java.lang.String {
      return exclusion.Name
    }
    
    // 'value' attribute on TextCell (id=TermsButton_Cell) at APDExclusionsPanelSet.pcf: line 126, column 148
    function value_25 () : java.lang.String {
      return DisplayKey.get("Web.APDCoverableCV.EditTerms", gw.apd.util.APDStringUtil.makeLabelCount(exclusion.Terms.Count))
    }
    
    // 'value' attribute on TextCell (id=SubClausesButton_Cell) at APDExclusionsPanelSet.pcf: line 132, column 161
    function value_29 () : java.lang.String {
      return DisplayKey.get("Web.APDCoverableCV.EditSubClauses", gw.apd.util.APDStringUtil.makeLabelCount(exclusion.SubExclusions.Count))
    }
    
    // 'value' attribute on RangeCell (id=ClauseCategory_Cell) at APDExclusionsPanelSet.pcf: line 142, column 47
    function value_39 () : APDClauseCategory {
      return exclusion.ClauseCategory
    }
    
    // 'value' attribute on RangeCell (id=Usage_Cell) at APDExclusionsPanelSet.pcf: line 161, column 51
    function value_49 () : APDDataExistenceType {
      return exclusion.getEditionRule(edition, APDRuleType.TC_EXISTENCE).DefaultExistence ?: APDDataExistenceType.TC_OPTIONAL
    }
    
    // 'value' attribute on TextCell (id=Tags_Cell) at APDExclusionsPanelSet.pcf: line 169, column 34
    function value_56 () : java.lang.String {
      return exclusion.TagDisplayValue
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at APDExclusionsPanelSet.pcf: line 175, column 48
    function value_60 () : java.lang.String {
      return exclusion.Description
    }
    
    // 'value' attribute on TextCell (id=CodeIdentifier_Cell) at APDExclusionsPanelSet.pcf: line 182, column 42
    function value_66 () : java.lang.String {
      return exclusion.CodeIdentifier
    }
    
    // 'valueRange' attribute on RangeCell (id=ClauseCategory_Cell) at APDExclusionsPanelSet.pcf: line 142, column 47
    function verifyValueRangeIsAllowedType_43 ($$arg :  APDClauseCategory[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=ClauseCategory_Cell) at APDExclusionsPanelSet.pcf: line 142, column 47
    function verifyValueRangeIsAllowedType_43 ($$arg :  gw.api.database.IQueryBeanResult) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=ClauseCategory_Cell) at APDExclusionsPanelSet.pcf: line 142, column 47
    function verifyValueRangeIsAllowedType_43 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=Usage_Cell) at APDExclusionsPanelSet.pcf: line 161, column 51
    function verifyValueRangeIsAllowedType_51 ($$arg :  APDDataExistenceType[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=Usage_Cell) at APDExclusionsPanelSet.pcf: line 161, column 51
    function verifyValueRangeIsAllowedType_51 ($$arg :  gw.api.database.IQueryBeanResult) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=Usage_Cell) at APDExclusionsPanelSet.pcf: line 161, column 51
    function verifyValueRangeIsAllowedType_51 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=ClauseCategory_Cell) at APDExclusionsPanelSet.pcf: line 142, column 47
    function verifyValueRange_44 () : void {
      var __valueRangeArg = exclusion.Coverable.ClauseCategories
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_43(__valueRangeArg)
    }
    
    // 'valueRange' attribute on RangeCell (id=Usage_Cell) at APDExclusionsPanelSet.pcf: line 161, column 51
    function verifyValueRange_52 () : void {
      var __valueRangeArg = APDDataExistenceType.getTypeKeys(false)
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_51(__valueRangeArg)
    }
    
    // 'visible' attribute on TextCell (id=CodeIdentifier_Cell) at APDExclusionsPanelSet.pcf: line 182, column 42
    function visible_69 () : java.lang.Boolean {
      return inDevelopMode
    }
    
    property get exclusion () : APDExclusion {
      return getIteratedValue(2) as APDExclusion
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/tools/apd/APDExclusionsPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends ListDetailPanelExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on MenuItem (id=ExistingExclusion) at APDExclusionsPanelSet.pcf: line 68, column 51
    function action_5 () : void {
      availableSubExcl.Clause.assignParent(parentExclusion)
    }
    
    // 'label' attribute on MenuItem (id=ExistingExclusion) at APDExclusionsPanelSet.pcf: line 68, column 51
    function label_6 () : java.lang.Object {
      return availableSubExcl.Label
    }
    
    property get availableSubExcl () : gw.apd.web.APDClauseWrapper {
      return getIteratedValue(2) as gw.apd.web.APDClauseWrapper
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/tools/apd/APDExclusionsPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ListDetailPanelExpressionsImpl extends APDExclusionsPanelSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on ToolbarButton (id=ManageExclusionCategories) at APDExclusionsPanelSet.pcf: line 97, column 35
    function action_13 () : void {
      APDManageClauseCategoriesPopup.push(coverable, openForEdit)
    }
    
    // 'action' attribute on ToolbarButton (id=ManageExclusionCategories) at APDExclusionsPanelSet.pcf: line 97, column 35
    function action_dest_14 () : pcf.api.Destination {
      return pcf.APDManageClauseCategoriesPopup.createDestination(coverable, openForEdit)
    }
    
    // 'allCheckedRowsAction' attribute on CheckedValuesToolbarButton (id=UnassignSubClause) at APDExclusionsPanelSet.pcf: line 90, column 36
    function allCheckedRowsAction_11 (CheckedValues :  APDExclusion[], CheckedValuesErrors :  java.util.Map) : void {
      CheckedValues*.unassignParent(); gw.api.web.PebblesUtil.invalidateIterators(CurrentLocation, entity.APDExclusion)
    }
    
    // 'def' attribute on PanelRef (id=ExclusionLocalizedValues) at APDExclusionsPanelSet.pcf: line 213, column 48
    function def_onEnter_79 (def :  pcf.LocalizedValuesDV) : void {
      def.onEnter(exclusionDetails, {"Name", "Description"}, {DisplayKey.get("Web.APDCoverableCV.Name"), DisplayKey.get("Web.APDCoverableCV.Description")})
    }
    
    // 'def' attribute on PanelRef (id=ExclusionLocalizedValues) at APDExclusionsPanelSet.pcf: line 213, column 48
    function def_refreshVariables_80 (def :  pcf.LocalizedValuesDV) : void {
      def.refreshVariables(exclusionDetails, {"Name", "Description"}, {DisplayKey.get("Web.APDCoverableCV.Name"), DisplayKey.get("Web.APDCoverableCV.Description")})
    }
    
    // 'label' attribute on TextCell (id=Description_Cell) at APDExclusionsPanelSet.pcf: line 175, column 48
    function label_16 () : java.lang.Object {
      return DisplayKey.get("Web.APD.RequiredForGeneration", DisplayKey.get("Web.APDCoverableCV.Description"))
    }
    
    // 'label' attribute on TextCell (id=CodeIdentifier_Cell) at APDExclusionsPanelSet.pcf: line 182, column 42
    function label_17 () : java.lang.Object {
      return DisplayKey.get("Web.APD.RequiredForGeneration", DisplayKey.get("Web.APDCoverableCV.CodeIdentifier", coverable.LinePrefix))
    }
    
    // 'sortBy' attribute on IteratorSort at APDExclusionsPanelSet.pcf: line 112, column 30
    function sortBy_15 (exclusion :  APDExclusion) : java.lang.Object {
      return exclusion.Sequence
    }
    
    // 'sortBy' attribute on IteratorSort at APDExclusionsPanelSet.pcf: line 64, column 34
    function sortBy_4 (availableSubExcl :  gw.apd.web.APDClauseWrapper) : java.lang.Object {
      return availableSubExcl.Label
    }
    
    // 'toCreateAndAdd' attribute on RowIterator at APDExclusionsPanelSet.pcf: line 109, column 40
    function toCreateAndAdd_76 () : APDExclusion {
      return isTopLevel ? coverable.addExclusion(null) : parentExclusion.createAndAddSubExclusion()
    }
    
    // 'toRemove' attribute on RowIterator at APDExclusionsPanelSet.pcf: line 109, column 40
    function toRemove_77 (exclusion :  APDExclusion) : void {
      coverable.removeClause(exclusion)
    }
    
    // 'value' attribute on MenuItemIterator (id=AvailableSubExclusionsIterator) at APDExclusionsPanelSet.pcf: line 61, column 59
    function value_7 () : gw.apd.web.APDClauseWrapper[] {
      return availableSubClauses
    }
    
    // 'value' attribute on RowIterator at APDExclusionsPanelSet.pcf: line 109, column 40
    function value_78 () : APDExclusion[] {
      return exclusions
    }
    
    // 'visible' attribute on CheckedValuesToolbarButton (id=UnassignSubClause) at APDExclusionsPanelSet.pcf: line 90, column 36
    function visible_10 () : java.lang.Boolean {
      return !isTopLevel
    }
    
    // 'visible' attribute on ToolbarButton (id=ManageExclusionCategories) at APDExclusionsPanelSet.pcf: line 97, column 35
    function visible_12 () : java.lang.Boolean {
      return isTopLevel
    }
    
    // 'visible' attribute on TextCell (id=CodeIdentifier_Cell) at APDExclusionsPanelSet.pcf: line 182, column 42
    function visible_18 () : java.lang.Boolean {
      return inDevelopMode
    }
    
    // 'visible' attribute on ToolbarButton (id=AddChildExclusion) at APDExclusionsPanelSet.pcf: line 49, column 58
    function visible_8 () : java.lang.Boolean {
      return openForEdit && !isTopLevel
    }
    
    // 'visible' attribute on AddButton (id=Add) at APDExclusionsPanelSet.pcf: line 77, column 58
    function visible_9 () : java.lang.Boolean {
      return openForEdit && isTopLevel
    }
    
    property get exclusionDetails () : APDExclusion {
      return getCurrentSelection(1) as APDExclusion
    }
    
    property set exclusionDetails ($arg :  APDExclusion) {
      setCurrentSelection(1, $arg)
    }
    
    
  }
  
  
}