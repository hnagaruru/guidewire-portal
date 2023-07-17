package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/rating/RateBookEditScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class RateBookEditScreenExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/rating/RateBookEditScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class CardViewPanelExpressionsImpl extends RateBookEditScreenExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on PickerToolbarButton (id=ImportFromSpreadsheetButton) at RateBookEditScreen.pcf: line 75, column 106
    function action_13 () : void {
      if (importHelper.ReimportDisabled) { throw new gw.api.util.DisplayableException(DisplayKey.get("Web.Rating.Import.ChangedRateBook")) }  else { ExcelImportPopup.push()}
    }
    
    // 'action' attribute on ToolbarButton (id=ExportErrorsButton) at RateBookEditScreen.pcf: line 89, column 81
    function action_18 () : void {
      importHelper.exportErrorFile()
    }
    
    // 'allCheckedRowsAction' attribute on CheckedValuesToolbarButton (id=RemoveFromRateBookButton) at RateBookEditScreen.pcf: line 83, column 105
    function allCheckedRowsAction_16 (CheckedValues :  entity.RateTable[], CheckedValuesErrors :  java.util.Map) : void {
      removeTables(CheckedValues)
    }
    
    // 'allCheckedRowsAction' attribute on CheckedValuesToolbarButton (id=AddToRateBookButton) at RateBookEditScreen.pcf: line 139, column 48
    function allCheckedRowsAction_36 (CheckedValues :  entity.RateTableDefinition[], CheckedValuesErrors :  java.util.Map) : void {
      rateBook.addRateTables(CheckedValues)
    }
    
    // 'allCheckedRowsAction' attribute on CheckedValuesToolbarButton (id=RemoveRoutineFromRateBookButton) at RateBookEditScreen.pcf: line 181, column 48
    function allCheckedRowsAction_47 (CheckedValues :  entity.CalcRoutineDefinition[], CheckedValuesErrors :  java.util.Map) : void {
      rateBook.removeCalcRoutines(CheckedValues)
    }
    
    // 'allCheckedRowsAction' attribute on CheckedValuesToolbarButton (id=AddRoutineToRateBookButton) at RateBookEditScreen.pcf: line 237, column 48
    function allCheckedRowsAction_68 (CheckedValues :  gw.web.rating.CalcRoutineCodeAndVersion[], CheckedValuesErrors :  java.util.Map) : void {
      rateBookEditScreenUI.addToRateBookAction(CheckedValues)
    }
    
    // 'available' attribute on CheckedValuesToolbarButton (id=RemoveFromRateBookButton) at RateBookEditScreen.pcf: line 83, column 105
    function available_15 () : java.lang.Boolean {
      return perm.System.ratebookedit
    }
    
    // 'available' attribute on ToolbarButton (id=ExportErrorsButton) at RateBookEditScreen.pcf: line 89, column 81
    function available_17 () : java.lang.Boolean {
      return importHelper.HasErrors
    }
    
    // 'onPick' attribute on PickerToolbarButton (id=ImportFromSpreadsheetButton) at RateBookEditScreen.pcf: line 75, column 106
    function onPick_14 (PickedValue :  java.lang.Object) : void {
      importHelper.scan(PickedValue as org.apache.poi.xssf.usermodel.XSSFWorkbook)
    }
    
    // 'selectOnEnter' attribute on Card (id=RateTablesCard) at RateBookEditScreen.pcf: line 62, column 77
    function selectOnEnter_45 () : java.lang.Boolean {
      return currentCard == gw.rating.rtm.util.RatingUIUtil.RateBookCardTabType.TableCard
    }
    
    // 'selectOnEnter' attribute on Card (id=CalcRoutinesCard) at RateBookEditScreen.pcf: line 165, column 79
    function selectOnEnter_89 () : java.lang.Boolean {
      return currentCard == gw.rating.rtm.util.RatingUIUtil.RateBookCardTabType.RoutineCard
    }
    
    // 'sortBy' attribute on IteratorSort at RateBookEditScreen.pcf: line 194, column 36
    function sortBy_49 (selectedCalcRoutine :  entity.CalcRoutineDefinition) : java.lang.Object {
      return selectedCalcRoutine.Code
    }
    
    // 'sortBy' attribute on IteratorSort at RateBookEditScreen.pcf: line 197, column 36
    function sortBy_50 (selectedCalcRoutine :  entity.CalcRoutineDefinition) : java.lang.Object {
      return selectedCalcRoutine.BranchingFieldValues[0]
    }
    
    // 'sortBy' attribute on IteratorSort at RateBookEditScreen.pcf: line 201, column 36
    function sortBy_51 (selectedCalcRoutine :  entity.CalcRoutineDefinition) : java.lang.Object {
      return selectedCalcRoutine.Version
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at RateBookEditScreen.pcf: line 113, column 71
    function sortValue_20 (selectedRateTable :  entity.RateTable) : java.lang.Object {
      return selectedRateTable.Definition.TableName
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at RateBookEditScreen.pcf: line 154, column 61
    function sortValue_38 (availableRateTable :  entity.RateTableDefinition) : java.lang.Object {
      return availableRateTable.TableName
    }
    
    // 'value' attribute on TextCell (id=Code_Cell) at RateBookEditScreen.pcf: line 206, column 57
    function sortValue_52 (selectedCalcRoutine :  entity.CalcRoutineDefinition) : java.lang.Object {
      return selectedCalcRoutine.Code
    }
    
    // 'value' attribute on TypeKeyCell (id=Jurisdiction_Cell) at RateBookEditScreen.pcf: line 211, column 57
    function sortValue_53 (selectedCalcRoutine :  entity.CalcRoutineDefinition) : java.lang.Object {
      return selectedCalcRoutine.Jurisdiction
    }
    
    // 'value' attribute on TextCell (id=Version_Cell) at RateBookEditScreen.pcf: line 217, column 54
    function sortValue_54 (selectedCalcRoutine :  entity.CalcRoutineDefinition) : java.lang.Object {
      return selectedCalcRoutine.Version
    }
    
    // 'value' attribute on RowIterator (id=SelectedRateTablesList) at RateBookEditScreen.pcf: line 99, column 50
    function value_33 () : entity.RateTable[] {
      return rateBook != null ? rateBook.RateTables.orderBy(\ rt -> rt.Definition.TableName).toTypedArray() : gw.api.upgrade.Coercions.makeArray<entity.RateTable>(java.util.Collections.EMPTY_LIST)
    }
    
    // 'value' attribute on RowIterator (id=AvailableRateTablesList) at RateBookEditScreen.pcf: line 149, column 60
    function value_43 () : entity.RateTableDefinition[] {
      return rateBook != null ? rateBook.availableRateTables(rateBook.PolicyLine).orderBy(\ t -> t.TableName).toTypedArray() : gw.api.upgrade.Coercions.makeArray<entity.RateTableDefinition>(java.util.Collections.EMPTY_LIST)
    }
    
    // 'value' attribute on RowIterator (id=SelectedCalcRoutinesList) at RateBookEditScreen.pcf: line 191, column 62
    function value_65 () : entity.CalcRoutineDefinition[] {
      return rateBook != null ? rateBook.updatedCalcRoutines.orderBy(\ r -> r.Code).toTypedArray() : gw.api.upgrade.Coercions.makeArray<entity.CalcRoutineDefinition>(java.util.Collections.EMPTY_LIST)
    }
    
    // 'visible' attribute on Toolbar at RateBookEditScreen.pcf: line 70, column 70
    function visible_19 () : java.lang.Boolean {
      return rateBook.Status == RateBookStatus.TC_DRAFT
    }
    
    // 'visible' attribute on PanelRef (id=AvailableRateTablesPanel) at RateBookEditScreen.pcf: line 128, column 44
    function visible_44 () : java.lang.Boolean {
      return rateBook.isDraft()
    }
    
    property get importedExcelFile () : org.apache.poi.xssf.usermodel.XSSFWorkbook {
      return getVariableValue("importedExcelFile", 1) as org.apache.poi.xssf.usermodel.XSSFWorkbook
    }
    
    property set importedExcelFile ($arg :  org.apache.poi.xssf.usermodel.XSSFWorkbook) {
      setVariableValue("importedExcelFile", 1, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/admin/rating/RateBookEditScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry2ExpressionsImpl extends CardViewPanelExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'checkBoxVisible' attribute on RowIterator (id=AvailableRateTablesList) at RateBookEditScreen.pcf: line 149, column 60
    function checkBoxVisible_42 () : java.lang.Boolean {
      return rateBook.Status == RateBookStatus.TC_DRAFT
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at RateBookEditScreen.pcf: line 154, column 61
    function valueRoot_40 () : java.lang.Object {
      return availableRateTable
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at RateBookEditScreen.pcf: line 154, column 61
    function value_39 () : java.lang.String {
      return availableRateTable.TableName
    }
    
    property get availableRateTable () : entity.RateTableDefinition {
      return getIteratedValue(2) as entity.RateTableDefinition
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/admin/rating/RateBookEditScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry3ExpressionsImpl extends CardViewPanelExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'checkBoxVisible' attribute on RowIterator (id=SelectedCalcRoutinesList) at RateBookEditScreen.pcf: line 191, column 62
    function checkBoxVisible_64 () : java.lang.Boolean {
      return rateBook.Status == RateBookStatus.TC_DRAFT
    }
    
    // 'value' attribute on TextCell (id=Code_Cell) at RateBookEditScreen.pcf: line 206, column 57
    function valueRoot_56 () : java.lang.Object {
      return selectedCalcRoutine
    }
    
    // 'value' attribute on TextCell (id=Code_Cell) at RateBookEditScreen.pcf: line 206, column 57
    function value_55 () : java.lang.String {
      return selectedCalcRoutine.Code
    }
    
    // 'value' attribute on TypeKeyCell (id=Jurisdiction_Cell) at RateBookEditScreen.pcf: line 211, column 57
    function value_58 () : typekey.Jurisdiction {
      return selectedCalcRoutine.Jurisdiction
    }
    
    // 'value' attribute on TextCell (id=Version_Cell) at RateBookEditScreen.pcf: line 217, column 54
    function value_61 () : java.lang.Integer {
      return selectedCalcRoutine.Version
    }
    
    property get selectedCalcRoutine () : entity.CalcRoutineDefinition {
      return getIteratedValue(2) as entity.CalcRoutineDefinition
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/admin/rating/RateBookEditScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry4ExpressionsImpl extends ListViewPanelExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 3)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'checkBoxVisible' attribute on RowIterator (id=AvailableCalcRoutinesList) at RateBookEditScreen.pcf: line 252, column 73
    function checkBoxVisible_86 () : java.lang.Boolean {
      return rateBook.Status == RateBookStatus.TC_DRAFT
    }
    
    // 'value' attribute on RangeCell (id=Version_Cell) at RateBookEditScreen.pcf: line 271, column 53
    function defaultSetter_80 (__VALUE_TO_SET :  java.lang.Object) : void {
      availableCalcRoutineCodeAndVersion.Version = (__VALUE_TO_SET as java.lang.Integer)
    }
    
    // 'valueRange' attribute on RangeCell (id=Version_Cell) at RateBookEditScreen.pcf: line 271, column 53
    function valueRange_82 () : java.lang.Object {
      return rateBook.availableCalcRoutines(false).where(\ calcRoutine -> availableCalcRoutineCodeAndVersion.isMatchIgnoreVersion(calcRoutine))*.Version
    }
    
    // 'value' attribute on TextCell (id=Code_Cell) at RateBookEditScreen.pcf: line 257, column 72
    function valueRoot_75 () : java.lang.Object {
      return availableCalcRoutineCodeAndVersion
    }
    
    // 'value' attribute on TextCell (id=Code_Cell) at RateBookEditScreen.pcf: line 257, column 72
    function value_74 () : java.lang.String {
      return availableCalcRoutineCodeAndVersion.Code
    }
    
    // 'value' attribute on TextCell (id=Jurisdiction_Cell) at RateBookEditScreen.pcf: line 262, column 53
    function value_77 () : java.lang.Object {
      return availableCalcRoutineCodeAndVersion.BranchValues.first()
    }
    
    // 'value' attribute on RangeCell (id=Version_Cell) at RateBookEditScreen.pcf: line 271, column 53
    function value_79 () : java.lang.Integer {
      return availableCalcRoutineCodeAndVersion.Version
    }
    
    // 'valueRange' attribute on RangeCell (id=Version_Cell) at RateBookEditScreen.pcf: line 271, column 53
    function verifyValueRangeIsAllowedType_83 ($$arg :  java.lang.Integer[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=Version_Cell) at RateBookEditScreen.pcf: line 271, column 53
    function verifyValueRangeIsAllowedType_83 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=Version_Cell) at RateBookEditScreen.pcf: line 271, column 53
    function verifyValueRange_84 () : void {
      var __valueRangeArg = rateBook.availableCalcRoutines(false).where(\ calcRoutine -> availableCalcRoutineCodeAndVersion.isMatchIgnoreVersion(calcRoutine))*.Version
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_83(__valueRangeArg)
    }
    
    property get availableCalcRoutineCodeAndVersion () : gw.web.rating.CalcRoutineCodeAndVersion {
      return getIteratedValue(3) as gw.web.rating.CalcRoutineCodeAndVersion
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/admin/rating/RateBookEditScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends CardViewPanelExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'available' attribute on LinkCell at RateBookEditScreen.pcf: line 103, column 94
    function available_23 () : java.lang.Boolean {
      return isEdit
    }
    
    // 'checkBoxVisible' attribute on RowIterator (id=SelectedRateTablesList) at RateBookEditScreen.pcf: line 99, column 50
    function checkBoxVisible_32 () : java.lang.Boolean {
      return rateBook.Status == RateBookStatus.TC_DRAFT
    }
    
    // 'def' attribute on ModalCellRef at RateBookEditScreen.pcf: line 119, column 97
    function def_onEnter_27 (def :  pcf.RateTableStrategyCell_default) : void {
      def.onEnter(selectedRateTable)
    }
    
    // 'def' attribute on ModalCellRef at RateBookEditScreen.pcf: line 119, column 97
    function def_onEnter_29 (def :  pcf.RateTableStrategyCell_owning) : void {
      def.onEnter(selectedRateTable)
    }
    
    // 'def' attribute on ModalCellRef at RateBookEditScreen.pcf: line 119, column 97
    function def_refreshVariables_28 (def :  pcf.RateTableStrategyCell_default) : void {
      def.refreshVariables(selectedRateTable)
    }
    
    // 'def' attribute on ModalCellRef at RateBookEditScreen.pcf: line 119, column 97
    function def_refreshVariables_30 (def :  pcf.RateTableStrategyCell_owning) : void {
      def.refreshVariables(selectedRateTable)
    }
    
    // 'icon' attribute on Link (id=RateTableIcon) at RateBookEditScreen.pcf: line 108, column 81
    function icon_22 () : java.lang.String {
      return importHelper.getIcon(selectedRateTable)
    }
    
    // 'mode' attribute on ModalCellRef at RateBookEditScreen.pcf: line 119, column 97
    function mode_31 () : java.lang.Object {
      return selectedRateTable.Owned ? "owning" : "default"
    }
    
    // 'tooltip' attribute on Link (id=RateTableIcon) at RateBookEditScreen.pcf: line 108, column 81
    function tooltip_21 () : java.lang.String {
      return importHelper.getIconLabel(selectedRateTable)
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at RateBookEditScreen.pcf: line 113, column 71
    function valueRoot_25 () : java.lang.Object {
      return selectedRateTable.Definition
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at RateBookEditScreen.pcf: line 113, column 71
    function value_24 () : java.lang.String {
      return selectedRateTable.Definition.TableName
    }
    
    property get selectedRateTable () : entity.RateTable {
      return getIteratedValue(2) as entity.RateTable
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/admin/rating/RateBookEditScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ListViewPanelExpressionsImpl extends CardViewPanelExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at RateBookEditScreen.pcf: line 244, column 69
    function initialValue_70 () : gw.web.rating.CalcRoutineCodeAndVersion[] {
      return rateBook != null ? rateBook.availableCalcRoutines(true).map(\ c -> new gw.web.rating.CalcRoutineCodeAndVersion(c)).orderBy(\ r -> r.Code).toTypedArray() : {}
    }
    
    // 'value' attribute on TextCell (id=Code_Cell) at RateBookEditScreen.pcf: line 257, column 72
    function sortValue_71 (availableCalcRoutineCodeAndVersion :  gw.web.rating.CalcRoutineCodeAndVersion) : java.lang.Object {
      return availableCalcRoutineCodeAndVersion.Code
    }
    
    // 'value' attribute on TextCell (id=Jurisdiction_Cell) at RateBookEditScreen.pcf: line 262, column 53
    function sortValue_72 (availableCalcRoutineCodeAndVersion :  gw.web.rating.CalcRoutineCodeAndVersion) : java.lang.Object {
      return availableCalcRoutineCodeAndVersion.BranchValues.first()
    }
    
    // 'value' attribute on RangeCell (id=Version_Cell) at RateBookEditScreen.pcf: line 271, column 53
    function sortValue_73 (availableCalcRoutineCodeAndVersion :  gw.web.rating.CalcRoutineCodeAndVersion) : java.lang.Object {
      return availableCalcRoutineCodeAndVersion.Version
    }
    
    // 'value' attribute on RowIterator (id=AvailableCalcRoutinesList) at RateBookEditScreen.pcf: line 252, column 73
    function value_87 () : gw.web.rating.CalcRoutineCodeAndVersion[] {
      return availableCalcRoutineCodeAndVersions
    }
    
    property get availableCalcRoutineCodeAndVersions () : gw.web.rating.CalcRoutineCodeAndVersion[] {
      return getVariableValue("availableCalcRoutineCodeAndVersions", 2) as gw.web.rating.CalcRoutineCodeAndVersion[]
    }
    
    property set availableCalcRoutineCodeAndVersions ($arg :  gw.web.rating.CalcRoutineCodeAndVersion[]) {
      setVariableValue("availableCalcRoutineCodeAndVersions", 2, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/admin/rating/RateBookEditScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class RateBookEditScreenExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on ToolbarButton (id=UpdateButton) at RateBookEditScreen.pcf: line 33, column 60
    function action_3 () : void {
      importHelper.doImportRateTables(); rateBookEditScreenUI.checkCurrentDataChange()
    }
    
    // 'def' attribute on PanelRef at RateBookEditScreen.pcf: line 52, column 214
    function def_onEnter_11 (def :  pcf.LocalizedValuesDV) : void {
      def.onEnter(rateBook, { "BookName", "BookDesc"}, { DisplayKey.get("Web.Rating.RateBooks.Name"), DisplayKey.get("Web.Rating.RateBooks.Description") })
    }
    
    // 'def' attribute on PanelRef at RateBookEditScreen.pcf: line 48, column 39
    function def_onEnter_9 (def :  pcf.RateBookDV) : void {
      def.onEnter(rateBook)
    }
    
    // 'def' attribute on PanelRef at RateBookEditScreen.pcf: line 48, column 39
    function def_refreshVariables_10 (def :  pcf.RateBookDV) : void {
      def.refreshVariables(rateBook)
    }
    
    // 'def' attribute on PanelRef at RateBookEditScreen.pcf: line 52, column 214
    function def_refreshVariables_12 (def :  pcf.LocalizedValuesDV) : void {
      def.refreshVariables(rateBook, { "BookName", "BookDesc"}, { DisplayKey.get("Web.Rating.RateBooks.Name"), DisplayKey.get("Web.Rating.RateBooks.Description") })
    }
    
    // 'initialValue' attribute on Variable at RateBookEditScreen.pcf: line 20, column 65
    function initialValue_0 () : gw.pcf.rating.ratebook.RateBookEditScreenUIHelper {
      return new gw.pcf.rating.ratebook.RateBookEditScreenUIHelper (rateBook, CurrentLocation)
    }
    
    // 'initialValue' attribute on Variable at RateBookEditScreen.pcf: line 24, column 55
    function initialValue_1 () : gw.pcf.exportimport.ExcelImportUIHelper {
      return new gw.pcf.exportimport.ExcelImportUIHelper(rateBook)
    }
    
    // 'cancelLabel' attribute on EditButtons at RateBookEditScreen.pcf: line 39, column 32
    function label_4 () : java.lang.Object {
      return ((rateBook.isDraft()) ? DisplayKey.get("Button.Cancel") : DisplayKey.get("Web.Rating.RateBooks.ExitButton"))
    }
    
    // EditButtons at RateBookEditScreen.pcf: line 39, column 32
    function label_6 () : java.lang.Object {
      return gw.api.util.LocationUtil.hasOwnBundle(CurrentLocation) ? DisplayKey.get("Button.Update") : DisplayKey.get("Button.OK")
    }
    
    // 'label' attribute on AlertBar (id=RateTableImportedMessageBar) at RateBookEditScreen.pcf: line 44, column 57
    function label_8 () : java.lang.Object {
      return DisplayKey.get("Web.Rating.Import.Scan.Summary", importHelper.TableCodesOfAddedTables.Count, importHelper.TableCodesOfChangedTables.Count, importHelper.TableCodesOfLargeTables.Count)
    }
    
    // 'visible' attribute on ToolbarButton (id=UpdateButton) at RateBookEditScreen.pcf: line 33, column 60
    function visible_2 () : java.lang.Boolean {
      return rateBookEditScreenUI.RateBook.isDraft()
    }
    
    // 'editVisible' attribute on EditButtons at RateBookEditScreen.pcf: line 39, column 32
    function visible_5 () : java.lang.Boolean {
      return rateBook.isDraft()
    }
    
    // 'visible' attribute on AlertBar (id=RateTableImportedMessageBar) at RateBookEditScreen.pcf: line 44, column 57
    function visible_7 () : java.lang.Boolean {
      return importHelper.ScanCompletedSuccessfully
    }
    
    property get currentCard () : gw.rating.rtm.util.RatingUIUtil.RateBookCardTabType {
      return getRequireValue("currentCard", 0) as gw.rating.rtm.util.RatingUIUtil.RateBookCardTabType
    }
    
    property set currentCard ($arg :  gw.rating.rtm.util.RatingUIUtil.RateBookCardTabType) {
      setRequireValue("currentCard", 0, $arg)
    }
    
    property get importHelper () : gw.pcf.exportimport.ExcelImportUIHelper {
      return getVariableValue("importHelper", 0) as gw.pcf.exportimport.ExcelImportUIHelper
    }
    
    property set importHelper ($arg :  gw.pcf.exportimport.ExcelImportUIHelper) {
      setVariableValue("importHelper", 0, $arg)
    }
    
    property get isEdit () : Boolean {
      return getRequireValue("isEdit", 0) as Boolean
    }
    
    property set isEdit ($arg :  Boolean) {
      setRequireValue("isEdit", 0, $arg)
    }
    
    property get rateBook () : RateBook {
      return getRequireValue("rateBook", 0) as RateBook
    }
    
    property set rateBook ($arg :  RateBook) {
      setRequireValue("rateBook", 0, $arg)
    }
    
    property get rateBookEditScreenUI () : gw.pcf.rating.ratebook.RateBookEditScreenUIHelper {
      return getVariableValue("rateBookEditScreenUI", 0) as gw.pcf.rating.ratebook.RateBookEditScreenUIHelper
    }
    
    property set rateBookEditScreenUI ($arg :  gw.pcf.rating.ratebook.RateBookEditScreenUIHelper) {
      setVariableValue("rateBookEditScreenUI", 0, $arg)
    }
    
    function removeTables(tablesToRemove : RateTable[]) {
      rateBookEditScreenUI.clearChanges(tablesToRemove)
      importHelper.removeTables(tablesToRemove.toList())
      rateBook.removeRateTables(tablesToRemove)
    }
    
    
  }
  
  
}