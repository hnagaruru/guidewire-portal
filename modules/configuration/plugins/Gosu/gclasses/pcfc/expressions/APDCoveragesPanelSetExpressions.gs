package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/tools/apd/APDCoveragesPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class APDCoveragesPanelSetExpressions {
  @javax.annotation.Generated("config/web/pcf/tools/apd/APDCoveragesPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class APDCoveragesPanelSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at APDCoveragesPanelSet.pcf: line 25, column 27
    function initialValue_0 () : APDCoverage {
      return parentClause as APDCoverage
    }
    
    // 'initialValue' attribute on Variable at APDCoveragesPanelSet.pcf: line 29, column 23
    function initialValue_1 () : boolean {
      return parentCoverage == null
    }
    
    // 'initialValue' attribute on Variable at APDCoveragesPanelSet.pcf: line 34, column 29
    function initialValue_2 () : APDCoverage[] {
      return isTopLevel ? coverable.TopLevelCoverages : parentCoverage.SubCoverages
    }
    
    // 'initialValue' attribute on Variable at APDCoveragesPanelSet.pcf: line 39, column 45
    function initialValue_3 () : gw.apd.web.APDClauseWrapper[] {
      return parentCoverage.AvailableSubClauses?.map(\cov -> new gw.apd.web.APDClauseWrapper(cov))
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
    
    property get coverages () : APDCoverage[] {
      return getVariableValue("coverages", 0) as APDCoverage[]
    }
    
    property set coverages ($arg :  APDCoverage[]) {
      setVariableValue("coverages", 0, $arg)
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
    
    property get parentCoverage () : APDCoverage {
      return getVariableValue("parentCoverage", 0) as APDCoverage
    }
    
    property set parentCoverage ($arg :  APDCoverage) {
      setVariableValue("parentCoverage", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/tools/apd/APDCoveragesPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry2ExpressionsImpl extends ListDetailPanelExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextCell (id=TermsButton_Cell) at APDCoveragesPanelSet.pcf: line 125, column 147
    function action_24 () : void {
      APDClauseTermsPopup.push(coverage, edition, openForEdit)
    }
    
    // 'action' attribute on TextCell (id=SubClausesButton_Cell) at APDCoveragesPanelSet.pcf: line 131, column 159
    function action_28 () : void {
      APDSubCoveragesPopup.push(coverage, edition, openForEdit, inDevelopMode)
    }
    
    // 'action' attribute on TextCell (id=EditButton_Cell) at APDCoveragesPanelSet.pcf: line 137, column 93
    function action_32 () : void {
      APDCoveragePopup.push(coverage, openForEdit)
    }
    
    // 'action' attribute on MenuItem (id=EditCategory) at APDCoveragesPanelSet.pcf: line 152, column 94
    function action_35 () : void {
      APDClauseCategoryPopup.push(coverage.ClauseCategory, CurrentLocation.InEditMode)
    }
    
    // 'action' attribute on PickerMenuItem (id=AddNewCategory) at APDCoveragesPanelSet.pcf: line 157, column 67
    function action_37 () : void {
      APDNewLibraryCategoryPopup.push(coverable)
    }
    
    // 'action' attribute on RangeCell (id=Usage_Cell) at APDCoveragesPanelSet.pcf: line 166, column 51
    function action_50 () : void {
      APDClauseRulePopup.push(coverage.getEditionRule(edition, APDRuleType.TC_EXISTENCE), coverage, APDRuleType.TC_EXISTENCE, edition, openForEdit)
    }
    
    // 'action' attribute on TextCell (id=Tags_Cell) at APDCoveragesPanelSet.pcf: line 174, column 34
    function action_57 () : void {
      APDTagPopup.push(coverage, openForEdit)
    }
    
    // 'action' attribute on MenuItem (id=MoveUp) at APDCoveragesPanelSet.pcf: line 198, column 97
    function action_76 () : void {
      coverage.moveUp()
    }
    
    // 'action' attribute on MenuItem (id=MoveDown) at APDCoveragesPanelSet.pcf: line 203, column 99
    function action_78 () : void {
      coverage.moveDown()
    }
    
    // 'action' attribute on TextCell (id=TermsButton_Cell) at APDCoveragesPanelSet.pcf: line 125, column 147
    function action_dest_25 () : pcf.api.Destination {
      return pcf.APDClauseTermsPopup.createDestination(coverage, edition, openForEdit)
    }
    
    // 'action' attribute on TextCell (id=SubClausesButton_Cell) at APDCoveragesPanelSet.pcf: line 131, column 159
    function action_dest_29 () : pcf.api.Destination {
      return pcf.APDSubCoveragesPopup.createDestination(coverage, edition, openForEdit, inDevelopMode)
    }
    
    // 'action' attribute on TextCell (id=EditButton_Cell) at APDCoveragesPanelSet.pcf: line 137, column 93
    function action_dest_33 () : pcf.api.Destination {
      return pcf.APDCoveragePopup.createDestination(coverage, openForEdit)
    }
    
    // 'action' attribute on MenuItem (id=EditCategory) at APDCoveragesPanelSet.pcf: line 152, column 94
    function action_dest_36 () : pcf.api.Destination {
      return pcf.APDClauseCategoryPopup.createDestination(coverage.ClauseCategory, CurrentLocation.InEditMode)
    }
    
    // 'action' attribute on PickerMenuItem (id=AddNewCategory) at APDCoveragesPanelSet.pcf: line 157, column 67
    function action_dest_38 () : pcf.api.Destination {
      return pcf.APDNewLibraryCategoryPopup.createDestination(coverable)
    }
    
    // 'action' attribute on RangeCell (id=Usage_Cell) at APDCoveragesPanelSet.pcf: line 166, column 51
    function action_dest_51 () : pcf.api.Destination {
      return pcf.APDClauseRulePopup.createDestination(coverage.getEditionRule(edition, APDRuleType.TC_EXISTENCE), coverage, APDRuleType.TC_EXISTENCE, edition, openForEdit)
    }
    
    // 'action' attribute on TextCell (id=Tags_Cell) at APDCoveragesPanelSet.pcf: line 174, column 34
    function action_dest_58 () : pcf.api.Destination {
      return pcf.APDTagPopup.createDestination(coverage, openForEdit)
    }
    
    // 'available' attribute on MenuItem (id=EditCategory) at APDCoveragesPanelSet.pcf: line 152, column 94
    function available_34 () : java.lang.Boolean {
      return coverage.ClauseCategory != null
    }
    
    // 'available' attribute on MenuItem (id=MoveUp) at APDCoveragesPanelSet.pcf: line 198, column 97
    function available_75 () : java.lang.Boolean {
      return coverage.canMoveUp()
    }
    
    // 'available' attribute on MenuItem (id=MoveDown) at APDCoveragesPanelSet.pcf: line 203, column 99
    function available_77 () : java.lang.Boolean {
      return coverage.canMoveDown()
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at APDCoveragesPanelSet.pcf: line 119, column 40
    function defaultSetter_21 (__VALUE_TO_SET :  java.lang.Object) : void {
      coverage.Name = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on RangeCell (id=ClauseCategory_Cell) at APDCoveragesPanelSet.pcf: line 147, column 47
    function defaultSetter_43 (__VALUE_TO_SET :  java.lang.Object) : void {
      coverage.ClauseCategory = (__VALUE_TO_SET as APDClauseCategory)
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at APDCoveragesPanelSet.pcf: line 180, column 47
    function defaultSetter_64 (__VALUE_TO_SET :  java.lang.Object) : void {
      coverage.Description = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextCell (id=CodeIdentifier_Cell) at APDCoveragesPanelSet.pcf: line 187, column 42
    function defaultSetter_70 (__VALUE_TO_SET :  java.lang.Object) : void {
      coverage.CodeIdentifier = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'editable' attribute on RangeCell (id=ClauseCategory_Cell) at APDCoveragesPanelSet.pcf: line 147, column 47
    function editable_40 () : java.lang.Boolean {
      return isTopLevel
    }
    
    // 'label' attribute on TextCell (id=Description_Cell) at APDCoveragesPanelSet.pcf: line 180, column 47
    function label_62 () : java.lang.Object {
      return DisplayKey.get("Web.APD.RequiredForGeneration", DisplayKey.get("Web.APDCoverableCV.Description"))
    }
    
    // 'label' attribute on TextCell (id=CodeIdentifier_Cell) at APDCoveragesPanelSet.pcf: line 187, column 42
    function label_68 () : java.lang.Object {
      return DisplayKey.get("Web.APD.RequiredForGeneration", DisplayKey.get("Web.APDCoverableCV.CodeIdentifier", coverable.LinePrefix))
    }
    
    // 'onPick' attribute on PickerMenuItem (id=AddNewCategory) at APDCoveragesPanelSet.pcf: line 157, column 67
    function onPick_39 (PickedValue :  APDClauseCategory) : void {
      coverage.ClauseCategory = PickedValue
    }
    
    // 'valueRange' attribute on RangeCell (id=ClauseCategory_Cell) at APDCoveragesPanelSet.pcf: line 147, column 47
    function valueRange_45 () : java.lang.Object {
      return coverage.Coverable.ClauseCategories
    }
    
    // 'valueRange' attribute on RangeCell (id=Usage_Cell) at APDCoveragesPanelSet.pcf: line 166, column 51
    function valueRange_53 () : java.lang.Object {
      return APDDataExistenceType.getTypeKeys(false)
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at APDCoveragesPanelSet.pcf: line 119, column 40
    function valueRoot_22 () : java.lang.Object {
      return coverage
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at APDCoveragesPanelSet.pcf: line 119, column 40
    function value_20 () : java.lang.String {
      return coverage.Name
    }
    
    // 'value' attribute on TextCell (id=TermsButton_Cell) at APDCoveragesPanelSet.pcf: line 125, column 147
    function value_26 () : java.lang.String {
      return DisplayKey.get("Web.APDCoverableCV.EditTerms", gw.apd.util.APDStringUtil.makeLabelCount(coverage.Terms.Count))
    }
    
    // 'value' attribute on TextCell (id=SubClausesButton_Cell) at APDCoveragesPanelSet.pcf: line 131, column 159
    function value_30 () : java.lang.String {
      return DisplayKey.get("Web.APDCoverableCV.EditSubClauses", gw.apd.util.APDStringUtil.makeLabelCount(coverage.SubCoverages.Count))
    }
    
    // 'value' attribute on RangeCell (id=ClauseCategory_Cell) at APDCoveragesPanelSet.pcf: line 147, column 47
    function value_42 () : APDClauseCategory {
      return coverage.ClauseCategory
    }
    
    // 'value' attribute on RangeCell (id=Usage_Cell) at APDCoveragesPanelSet.pcf: line 166, column 51
    function value_52 () : APDDataExistenceType {
      return coverage.getEditionRule(edition, APDRuleType.TC_EXISTENCE).DefaultExistence ?: APDDataExistenceType.TC_OPTIONAL
    }
    
    // 'value' attribute on TextCell (id=Tags_Cell) at APDCoveragesPanelSet.pcf: line 174, column 34
    function value_59 () : java.lang.String {
      return coverage.TagDisplayValue
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at APDCoveragesPanelSet.pcf: line 180, column 47
    function value_63 () : java.lang.String {
      return coverage.Description
    }
    
    // 'value' attribute on TextCell (id=CodeIdentifier_Cell) at APDCoveragesPanelSet.pcf: line 187, column 42
    function value_69 () : java.lang.String {
      return coverage.CodeIdentifier
    }
    
    // 'valueRange' attribute on RangeCell (id=ClauseCategory_Cell) at APDCoveragesPanelSet.pcf: line 147, column 47
    function verifyValueRangeIsAllowedType_46 ($$arg :  APDClauseCategory[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=ClauseCategory_Cell) at APDCoveragesPanelSet.pcf: line 147, column 47
    function verifyValueRangeIsAllowedType_46 ($$arg :  gw.api.database.IQueryBeanResult) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=ClauseCategory_Cell) at APDCoveragesPanelSet.pcf: line 147, column 47
    function verifyValueRangeIsAllowedType_46 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=Usage_Cell) at APDCoveragesPanelSet.pcf: line 166, column 51
    function verifyValueRangeIsAllowedType_54 ($$arg :  APDDataExistenceType[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=Usage_Cell) at APDCoveragesPanelSet.pcf: line 166, column 51
    function verifyValueRangeIsAllowedType_54 ($$arg :  gw.api.database.IQueryBeanResult) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=Usage_Cell) at APDCoveragesPanelSet.pcf: line 166, column 51
    function verifyValueRangeIsAllowedType_54 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=ClauseCategory_Cell) at APDCoveragesPanelSet.pcf: line 147, column 47
    function verifyValueRange_47 () : void {
      var __valueRangeArg = coverage.Coverable.ClauseCategories
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_46(__valueRangeArg)
    }
    
    // 'valueRange' attribute on RangeCell (id=Usage_Cell) at APDCoveragesPanelSet.pcf: line 166, column 51
    function verifyValueRange_55 () : void {
      var __valueRangeArg = APDDataExistenceType.getTypeKeys(false)
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_54(__valueRangeArg)
    }
    
    // 'visible' attribute on TextCell (id=CodeIdentifier_Cell) at APDCoveragesPanelSet.pcf: line 187, column 42
    function visible_72 () : java.lang.Boolean {
      return inDevelopMode
    }
    
    property get coverage () : APDCoverage {
      return getIteratedValue(2) as APDCoverage
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/tools/apd/APDCoveragesPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends ListDetailPanelExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on MenuItem (id=ExistingCoverage) at APDCoveragesPanelSet.pcf: line 68, column 50
    function action_5 () : void {
      availableSubCov.Clause.assignParent(parentCoverage)
    }
    
    // 'label' attribute on MenuItem (id=ExistingCoverage) at APDCoveragesPanelSet.pcf: line 68, column 50
    function label_6 () : java.lang.Object {
      return availableSubCov.Label
    }
    
    property get availableSubCov () : gw.apd.web.APDClauseWrapper {
      return getIteratedValue(2) as gw.apd.web.APDClauseWrapper
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/tools/apd/APDCoveragesPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ListDetailPanelExpressionsImpl extends APDCoveragesPanelSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on ToolbarButton (id=ManageCoverageCategories) at APDCoveragesPanelSet.pcf: line 97, column 35
    function action_13 () : void {
      APDManageClauseCategoriesPopup.push(coverable, openForEdit)
    }
    
    // 'action' attribute on ToolbarButton (id=ManageCoverageCategories) at APDCoveragesPanelSet.pcf: line 97, column 35
    function action_dest_14 () : pcf.api.Destination {
      return pcf.APDManageClauseCategoriesPopup.createDestination(coverable, openForEdit)
    }
    
    // 'allCheckedRowsAction' attribute on CheckedValuesToolbarButton (id=UnassignSubClause) at APDCoveragesPanelSet.pcf: line 90, column 36
    function allCheckedRowsAction_11 (CheckedValues :  APDCoverage[], CheckedValuesErrors :  java.util.Map) : void {
      gw.apd.web.APDClauseHierarchyUIHelper.unassignParent(CheckedValues); gw.api.web.PebblesUtil.invalidateIterators(CurrentLocation, entity.APDCoverage)
    }
    
    // 'def' attribute on PanelRef (id=CoverageLocalizedValues) at APDCoveragesPanelSet.pcf: line 218, column 47
    function def_onEnter_82 (def :  pcf.LocalizedValuesDV) : void {
      def.onEnter(coverageDetails, {"Name", "Description"}, {DisplayKey.get("Web.APDCoverableCV.Name"), DisplayKey.get("Web.APDCoverableCV.Description")})
    }
    
    // 'def' attribute on PanelRef (id=CoverageLocalizedValues) at APDCoveragesPanelSet.pcf: line 218, column 47
    function def_refreshVariables_83 (def :  pcf.LocalizedValuesDV) : void {
      def.refreshVariables(coverageDetails, {"Name", "Description"}, {DisplayKey.get("Web.APDCoverableCV.Name"), DisplayKey.get("Web.APDCoverableCV.Description")})
    }
    
    // 'label' attribute on ToolbarButton (id=ManageCoverageCategories) at APDCoveragesPanelSet.pcf: line 97, column 35
    function label_15 () : java.lang.Object {
      return DisplayKey.get( "Web.APDCoverableCV.ManageClauseCategoriesButton" )
    }
    
    // 'label' attribute on TextCell (id=Description_Cell) at APDCoveragesPanelSet.pcf: line 180, column 47
    function label_17 () : java.lang.Object {
      return DisplayKey.get("Web.APD.RequiredForGeneration", DisplayKey.get("Web.APDCoverableCV.Description"))
    }
    
    // 'label' attribute on TextCell (id=CodeIdentifier_Cell) at APDCoveragesPanelSet.pcf: line 187, column 42
    function label_18 () : java.lang.Object {
      return DisplayKey.get("Web.APD.RequiredForGeneration", DisplayKey.get("Web.APDCoverableCV.CodeIdentifier", coverable.LinePrefix))
    }
    
    // 'sortBy' attribute on IteratorSort at APDCoveragesPanelSet.pcf: line 111, column 30
    function sortBy_16 (coverage :  APDCoverage) : java.lang.Object {
      return coverage.Sequence
    }
    
    // 'sortBy' attribute on IteratorSort at APDCoveragesPanelSet.pcf: line 64, column 34
    function sortBy_4 (availableSubCov :  gw.apd.web.APDClauseWrapper) : java.lang.Object {
      return availableSubCov.Label
    }
    
    // 'toCreateAndAdd' attribute on RowIterator at APDCoveragesPanelSet.pcf: line 108, column 39
    function toCreateAndAdd_79 () : APDCoverage {
      return isTopLevel ? coverable.addCoverage(null) : parentCoverage.createAndAddSubCoverage()
    }
    
    // 'toRemove' attribute on RowIterator at APDCoveragesPanelSet.pcf: line 108, column 39
    function toRemove_80 (coverage :  APDCoverage) : void {
      coverable.removeClause(coverage)
    }
    
    // 'value' attribute on MenuItemIterator (id=AvailableSubCoveragesIterator) at APDCoveragesPanelSet.pcf: line 61, column 59
    function value_7 () : gw.apd.web.APDClauseWrapper[] {
      return availableSubClauses
    }
    
    // 'value' attribute on RowIterator at APDCoveragesPanelSet.pcf: line 108, column 39
    function value_81 () : APDCoverage[] {
      return coverages
    }
    
    // 'visible' attribute on CheckedValuesToolbarButton (id=UnassignSubClause) at APDCoveragesPanelSet.pcf: line 90, column 36
    function visible_10 () : java.lang.Boolean {
      return !isTopLevel
    }
    
    // 'visible' attribute on ToolbarButton (id=ManageCoverageCategories) at APDCoveragesPanelSet.pcf: line 97, column 35
    function visible_12 () : java.lang.Boolean {
      return isTopLevel
    }
    
    // 'visible' attribute on TextCell (id=CodeIdentifier_Cell) at APDCoveragesPanelSet.pcf: line 187, column 42
    function visible_19 () : java.lang.Boolean {
      return inDevelopMode
    }
    
    // 'visible' attribute on ToolbarButton (id=AddChildCoverage) at APDCoveragesPanelSet.pcf: line 49, column 58
    function visible_8 () : java.lang.Boolean {
      return openForEdit && !isTopLevel
    }
    
    // 'visible' attribute on AddButton (id=Add) at APDCoveragesPanelSet.pcf: line 77, column 58
    function visible_9 () : java.lang.Boolean {
      return openForEdit && isTopLevel
    }
    
    property get coverageDetails () : APDCoverage {
      return getCurrentSelection(1) as APDCoverage
    }
    
    property set coverageDetails ($arg :  APDCoverage) {
      setCurrentSelection(1, $arg)
    }
    
    
  }
  
  
}