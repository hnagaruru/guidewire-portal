package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
uses gw.api.util.DisplayableException
uses org.apache.poi.xssf.usermodel.XSSFWorkbook
uses gw.rating.rtm.domain.RateTableFactorListController
uses gw.rating.rtm.domain.table.RateTableCell
uses gw.rating.rtm.domain.table.RateTableRow
uses gw.rating.rtm.domain.RateTableFactorListController
@javax.annotation.Generated("config/web/pcf/admin/rating/RateTableFactorList.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class RateTableFactorListExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/rating/RateTableFactorList.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class FactorsDVExpressionsImpl extends RateTableFactorListScreenExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on CheckBoxInput (id=ReduceMemoryUsageCheckbox_Input) at RateTableFactorList.pcf: line 139, column 94
    function defaultSetter_35 (__VALUE_TO_SET :  java.lang.Object) : void {
      rateTable.ReduceMemoryUsage = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'initialValue' attribute on Variable at RateTableFactorList.pcf: line 116, column 39
    function initialValue_28 () : RateTableColumn[] {
      return controller.RateTableModel.RateTableDefinition.SortedParameters
    }
    
    // 'initialValue' attribute on Variable at RateTableFactorList.pcf: line 121, column 39
    function initialValue_29 () : RateTableColumn[] {
      return controller.RateTableModel.RateTableDefinition.SortedFactors
    }
    
    // 'label' attribute on Label (id=NormalizationMessageId) at RateTableFactorList.pcf: line 131, column 94
    function label_32 () : java.lang.String {
      return DisplayKey.get("Web.Rating.RateTables.TooManyNormalizationRows", rtmRowCountNormalizationThreshold)
    }
    
    // 'sortBy' attribute on IteratorSort at RateTableFactorList.pcf: line 186, column 36
    function sortBy_47 (row :  gw.rating.rtm.domain.table.RateTableRow) : java.lang.Object {
      return row
    }
    
    // 'toCreateAndAdd' attribute on RowIterator (id=RowIterator) at RateTableFactorList.pcf: line 183, column 93
    function toCreateAndAdd_86 () : gw.rating.rtm.domain.table.RateTableRow {
      return controller.RateTableModel.addEmptyRow()
    }
    
    // 'toRemove' attribute on RowIterator (id=RowIterator) at RateTableFactorList.pcf: line 183, column 93
    function toRemove_87 (row :  gw.rating.rtm.domain.table.RateTableRow) : void {
      controller.RateTableModel.removeFactorRow(row)
    }
    
    // 'value' attribute on CheckBoxInput (id=ReduceMemoryUsageCheckbox_Input) at RateTableFactorList.pcf: line 139, column 94
    function valueRoot_36 () : java.lang.Object {
      return rateTable
    }
    
    // 'value' attribute on CheckBoxInput (id=ReduceMemoryUsageCheckbox_Input) at RateTableFactorList.pcf: line 139, column 94
    function value_34 () : java.lang.Boolean {
      return rateTable.ReduceMemoryUsage
    }
    
    // 'value' attribute on CellIterator (id=RateParameterHeadingIterator) at RateTableFactorList.pcf: line 155, column 58
    function value_43 () : entity.RateTableColumn[] {
      return parameters
    }
    
    // 'value' attribute on CellIterator (id=RateFactorHeadingIterator) at RateTableFactorList.pcf: line 164, column 58
    function value_46 () : entity.RateTableColumn[] {
      return factors
    }
    
    // 'value' attribute on RowIterator (id=RowIterator) at RateTableFactorList.pcf: line 183, column 93
    function value_88 () : java.util.List<gw.rating.rtm.domain.table.RateTableRow> {
      return controller.RateTableModel.FactorRows
    }
    
    // 'visible' attribute on Label (id=NoFactorsLabel) at RateTableFactorList.pcf: line 127, column 69
    function visible_30 () : java.lang.Boolean {
      return controller.RateTableModel.FactorRows.Empty
    }
    
    // 'visible' attribute on Label (id=NormalizationMessageId) at RateTableFactorList.pcf: line 131, column 94
    function visible_31 () : java.lang.Boolean {
      return rateTable.NormalizedRowCount > rtmRowCountNormalizationThreshold
    }
    
    // 'visible' attribute on EmptyCell (id=IconSpacer_Cell) at RateTableFactorList.pcf: line 150, column 59
    function visible_39 () : java.lang.Boolean {
      return CurrentLocation.InEditMode
    }
    
    // 'visible' attribute on ListViewInput (id=FactorsLV) at RateTableFactorList.pcf: line 143, column 72
    function visible_89 () : java.lang.Boolean {
      return not controller.RateTableModel.FactorRows.Empty
    }
    
    property get factors () : RateTableColumn[] {
      return getVariableValue("factors", 2) as RateTableColumn[]
    }
    
    property set factors ($arg :  RateTableColumn[]) {
      setVariableValue("factors", 2, $arg)
    }
    
    property get parameters () : RateTableColumn[] {
      return getVariableValue("parameters", 2) as RateTableColumn[]
    }
    
    property set parameters ($arg :  RateTableColumn[]) {
      setVariableValue("parameters", 2, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/admin/rating/RateTableFactorList.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry2ExpressionsImpl extends FactorsDVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 3)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=RateFactorHeader_Cell) at RateTableFactorList.pcf: line 169, column 101
    function value_44 () : java.lang.String {
      return (onlyOneFactor ? "* " : "") + factor.ColumnLabel
    }
    
    property get factor () : entity.RateTableColumn {
      return getIteratedValue(3) as entity.RateTableColumn
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/admin/rating/RateTableFactorList.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry3ExpressionsImpl extends FactorsDVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 3)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'iconColor' attribute on BooleanRadioCell (id=IconCell_Cell) at RateTableFactorList.pcf: line 197, column 61
    function iconColor_50 () : gw.api.web.color.GWColor {
      return gw.api.web.color.GWColor.THEME_ALERT_ERROR
    }
    
    // 'iconLabel' attribute on BooleanRadioCell (id=IconCell_Cell) at RateTableFactorList.pcf: line 197, column 61
    function iconLabel_48 () : java.lang.String {
      return getErrorsTooltip(row)
    }
    
    // 'value' attribute on BooleanRadioCell (id=IconCell_Cell) at RateTableFactorList.pcf: line 197, column 61
    function value_49 () : java.lang.Boolean {
      return controller.getRowErrors(row).Count > 0
    }
    
    // 'value' attribute on CellIterator (id=ParameterIterator) at RateTableFactorList.pcf: line 202, column 150
    function value_70 () : java.util.List<gw.rating.rtm.domain.table.RateTableCell<java.lang.Comparable<java.lang.Object>>> {
      return row.Parameters
    }
    
    // 'value' attribute on CellIterator (id=FactorIterator) at RateTableFactorList.pcf: line 213, column 150
    function value_84 () : java.util.List<gw.rating.rtm.domain.table.RateTableCell<java.lang.Comparable<java.lang.Object>>> {
      return row.Factors
    }
    
    // 'visible' attribute on BooleanRadioCell (id=IconCell_Cell) at RateTableFactorList.pcf: line 197, column 61
    function visible_51 () : java.lang.Boolean {
      return CurrentLocation.InEditMode
    }
    
    property get row () : gw.rating.rtm.domain.table.RateTableRow {
      return getIteratedValue(3) as gw.rating.rtm.domain.table.RateTableRow
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/admin/rating/RateTableFactorList.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry4ExpressionsImpl extends IteratorEntry3ExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 4)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on ModalCellRef (id=ValueCell) at RateTableFactorList.pcf: line 207, column 97
    function def_onEnter_53 (def :  pcf.RateTableModalCell_date) : void {
      def.onEnter(param, valueProviderFactory.getValueProviderFor(param), false)
    }
    
    // 'def' attribute on ModalCellRef (id=ValueCell) at RateTableFactorList.pcf: line 207, column 97
    function def_onEnter_55 (def :  pcf.RateTableModalCell_default) : void {
      def.onEnter(param, valueProviderFactory.getValueProviderFor(param), false)
    }
    
    // 'def' attribute on ModalCellRef (id=ValueCell) at RateTableFactorList.pcf: line 207, column 97
    function def_onEnter_57 (def :  pcf.RateTableModalCell_large) : void {
      def.onEnter(param, valueProviderFactory.getValueProviderFor(param), false)
    }
    
    // 'def' attribute on ModalCellRef (id=ValueCell) at RateTableFactorList.pcf: line 207, column 97
    function def_onEnter_59 (def :  pcf.RateTableModalCell_multiselect) : void {
      def.onEnter(param, valueProviderFactory.getValueProviderFor(param), false)
    }
    
    // 'def' attribute on ModalCellRef (id=ValueCell) at RateTableFactorList.pcf: line 207, column 97
    function def_onEnter_61 (def :  pcf.RateTableModalCell_multiselect_readonly) : void {
      def.onEnter(param, valueProviderFactory.getValueProviderFor(param), false)
    }
    
    // 'def' attribute on ModalCellRef (id=ValueCell) at RateTableFactorList.pcf: line 207, column 97
    function def_onEnter_63 (def :  pcf.RateTableModalCell_select) : void {
      def.onEnter(param, valueProviderFactory.getValueProviderFor(param), false)
    }
    
    // 'def' attribute on ModalCellRef (id=ValueCell) at RateTableFactorList.pcf: line 207, column 97
    function def_onEnter_65 (def :  pcf.RateTableModalCell_selectwithrefresh) : void {
      def.onEnter(param, valueProviderFactory.getValueProviderFor(param), false)
    }
    
    // 'def' attribute on ModalCellRef (id=ValueCell) at RateTableFactorList.pcf: line 207, column 97
    function def_onEnter_67 (def :  pcf.RateTableModalCell_small) : void {
      def.onEnter(param, valueProviderFactory.getValueProviderFor(param), false)
    }
    
    // 'def' attribute on ModalCellRef (id=ValueCell) at RateTableFactorList.pcf: line 207, column 97
    function def_refreshVariables_54 (def :  pcf.RateTableModalCell_date) : void {
      def.refreshVariables(param, valueProviderFactory.getValueProviderFor(param), false)
    }
    
    // 'def' attribute on ModalCellRef (id=ValueCell) at RateTableFactorList.pcf: line 207, column 97
    function def_refreshVariables_56 (def :  pcf.RateTableModalCell_default) : void {
      def.refreshVariables(param, valueProviderFactory.getValueProviderFor(param), false)
    }
    
    // 'def' attribute on ModalCellRef (id=ValueCell) at RateTableFactorList.pcf: line 207, column 97
    function def_refreshVariables_58 (def :  pcf.RateTableModalCell_large) : void {
      def.refreshVariables(param, valueProviderFactory.getValueProviderFor(param), false)
    }
    
    // 'def' attribute on ModalCellRef (id=ValueCell) at RateTableFactorList.pcf: line 207, column 97
    function def_refreshVariables_60 (def :  pcf.RateTableModalCell_multiselect) : void {
      def.refreshVariables(param, valueProviderFactory.getValueProviderFor(param), false)
    }
    
    // 'def' attribute on ModalCellRef (id=ValueCell) at RateTableFactorList.pcf: line 207, column 97
    function def_refreshVariables_62 (def :  pcf.RateTableModalCell_multiselect_readonly) : void {
      def.refreshVariables(param, valueProviderFactory.getValueProviderFor(param), false)
    }
    
    // 'def' attribute on ModalCellRef (id=ValueCell) at RateTableFactorList.pcf: line 207, column 97
    function def_refreshVariables_64 (def :  pcf.RateTableModalCell_select) : void {
      def.refreshVariables(param, valueProviderFactory.getValueProviderFor(param), false)
    }
    
    // 'def' attribute on ModalCellRef (id=ValueCell) at RateTableFactorList.pcf: line 207, column 97
    function def_refreshVariables_66 (def :  pcf.RateTableModalCell_selectwithrefresh) : void {
      def.refreshVariables(param, valueProviderFactory.getValueProviderFor(param), false)
    }
    
    // 'def' attribute on ModalCellRef (id=ValueCell) at RateTableFactorList.pcf: line 207, column 97
    function def_refreshVariables_68 (def :  pcf.RateTableModalCell_small) : void {
      def.refreshVariables(param, valueProviderFactory.getValueProviderFor(param), false)
    }
    
    // 'mode' attribute on ModalCellRef (id=ValueCell) at RateTableFactorList.pcf: line 207, column 97
    function mode_69 () : java.lang.Object {
      return param.getEditModeByLocationEditMode(CurrentLocation.InEditMode)
    }
    
    property get param () : gw.rating.rtm.domain.table.RateTableCell<java.lang.Comparable<java.lang.Object>> {
      return getIteratedValue(4) as gw.rating.rtm.domain.table.RateTableCell<java.lang.Comparable<java.lang.Object>>
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/admin/rating/RateTableFactorList.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry5ExpressionsImpl extends IteratorEntry3ExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 4)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on ModalCellRef (id=ValueCell) at RateTableFactorList.pcf: line 218, column 49
    function def_onEnter_71 (def :  pcf.RateTableFactorModalCell_date) : void {
      def.onEnter(factor, valueProviderFactory.getValueProviderFor(factor), onlyOneFactor)
    }
    
    // 'def' attribute on ModalCellRef (id=ValueCell) at RateTableFactorList.pcf: line 218, column 49
    function def_onEnter_73 (def :  pcf.RateTableFactorModalCell_default) : void {
      def.onEnter(factor, valueProviderFactory.getValueProviderFor(factor), onlyOneFactor)
    }
    
    // 'def' attribute on ModalCellRef (id=ValueCell) at RateTableFactorList.pcf: line 218, column 49
    function def_onEnter_75 (def :  pcf.RateTableFactorModalCell_large) : void {
      def.onEnter(factor, valueProviderFactory.getValueProviderFor(factor), onlyOneFactor)
    }
    
    // 'def' attribute on ModalCellRef (id=ValueCell) at RateTableFactorList.pcf: line 218, column 49
    function def_onEnter_77 (def :  pcf.RateTableFactorModalCell_select) : void {
      def.onEnter(factor, valueProviderFactory.getValueProviderFor(factor), onlyOneFactor)
    }
    
    // 'def' attribute on ModalCellRef (id=ValueCell) at RateTableFactorList.pcf: line 218, column 49
    function def_onEnter_79 (def :  pcf.RateTableFactorModalCell_selectwithrefresh) : void {
      def.onEnter(factor, valueProviderFactory.getValueProviderFor(factor), onlyOneFactor)
    }
    
    // 'def' attribute on ModalCellRef (id=ValueCell) at RateTableFactorList.pcf: line 218, column 49
    function def_onEnter_81 (def :  pcf.RateTableFactorModalCell_small) : void {
      def.onEnter(factor, valueProviderFactory.getValueProviderFor(factor), onlyOneFactor)
    }
    
    // 'def' attribute on ModalCellRef (id=ValueCell) at RateTableFactorList.pcf: line 218, column 49
    function def_refreshVariables_72 (def :  pcf.RateTableFactorModalCell_date) : void {
      def.refreshVariables(factor, valueProviderFactory.getValueProviderFor(factor), onlyOneFactor)
    }
    
    // 'def' attribute on ModalCellRef (id=ValueCell) at RateTableFactorList.pcf: line 218, column 49
    function def_refreshVariables_74 (def :  pcf.RateTableFactorModalCell_default) : void {
      def.refreshVariables(factor, valueProviderFactory.getValueProviderFor(factor), onlyOneFactor)
    }
    
    // 'def' attribute on ModalCellRef (id=ValueCell) at RateTableFactorList.pcf: line 218, column 49
    function def_refreshVariables_76 (def :  pcf.RateTableFactorModalCell_large) : void {
      def.refreshVariables(factor, valueProviderFactory.getValueProviderFor(factor), onlyOneFactor)
    }
    
    // 'def' attribute on ModalCellRef (id=ValueCell) at RateTableFactorList.pcf: line 218, column 49
    function def_refreshVariables_78 (def :  pcf.RateTableFactorModalCell_select) : void {
      def.refreshVariables(factor, valueProviderFactory.getValueProviderFor(factor), onlyOneFactor)
    }
    
    // 'def' attribute on ModalCellRef (id=ValueCell) at RateTableFactorList.pcf: line 218, column 49
    function def_refreshVariables_80 (def :  pcf.RateTableFactorModalCell_selectwithrefresh) : void {
      def.refreshVariables(factor, valueProviderFactory.getValueProviderFor(factor), onlyOneFactor)
    }
    
    // 'def' attribute on ModalCellRef (id=ValueCell) at RateTableFactorList.pcf: line 218, column 49
    function def_refreshVariables_82 (def :  pcf.RateTableFactorModalCell_small) : void {
      def.refreshVariables(factor, valueProviderFactory.getValueProviderFor(factor), onlyOneFactor)
    }
    
    // 'mode' attribute on ModalCellRef (id=ValueCell) at RateTableFactorList.pcf: line 218, column 49
    function mode_83 () : java.lang.Object {
      return factor.EditMode
    }
    
    property get factor () : gw.rating.rtm.domain.table.RateTableCell<java.lang.Comparable<java.lang.Object>> {
      return getIteratedValue(4) as gw.rating.rtm.domain.table.RateTableCell<java.lang.Comparable<java.lang.Object>>
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/admin/rating/RateTableFactorList.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends FactorsDVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 3)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=RateParameterHeader_Cell) at RateTableFactorList.pcf: line 158, column 50
    function valueRoot_41 () : java.lang.Object {
      return param
    }
    
    // 'value' attribute on TextCell (id=RateParameterHeader_Cell) at RateTableFactorList.pcf: line 158, column 50
    function value_40 () : java.lang.String {
      return param.ColumnLabel
    }
    
    property get param () : entity.RateTableColumn {
      return getIteratedValue(3) as entity.RateTableColumn
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/admin/rating/RateTableFactorList.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class RateTableFactorListExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (controller :  gw.rating.rtm.domain.RateTableFactorListController, rateTable :  RateTable, rateBook :  RateBook) : int {
      return 0
    }
    
    // 'afterCancel' attribute on Page (id=RateTableFactorList) at RateTableFactorList.pcf: line 17, column 69
    function afterCancel_90 () : void {
      resetValueProviderCache();createController(); initializeController()
    }
    
    // 'afterCommit' attribute on Page (id=RateTableFactorList) at RateTableFactorList.pcf: line 17, column 69
    function afterCommit_91 (TopLocation :  pcf.api.Location) : void {
      createController(); initializeController()
    }
    
    // 'afterEnter' attribute on Page (id=RateTableFactorList) at RateTableFactorList.pcf: line 17, column 69
    function afterEnter_92 () : void {
      initializeController()
    }
    
    // 'beforeCommit' attribute on Page (id=RateTableFactorList) at RateTableFactorList.pcf: line 17, column 69
    function beforeCommit_93 (pickedValue :  java.lang.Object) : void {
      controller.validateAndPersistRateTableModel()
    }
    
    // 'canEdit' attribute on Page (id=RateTableFactorList) at RateTableFactorList.pcf: line 17, column 69
    function canEdit_94 () : java.lang.Boolean {
      return perm.System.ratebookedit
    }
    
    // 'canVisit' attribute on Page (id=RateTableFactorList) at RateTableFactorList.pcf: line 17, column 69
    static function canVisit_95 (controller :  gw.rating.rtm.domain.RateTableFactorListController, rateBook :  RateBook, rateTable :  RateTable) : java.lang.Boolean {
      return perm.System.ratebookview
    }
    
    // 'initialValue' attribute on Variable at RateTableFactorList.pcf: line 29, column 77
    function initialValue_0 () : gw.rating.rtm.valueprovider.RateTableCellValueProviderFactory {
      return new gw.rating.rtm.valueprovider.RateTableCellValueProviderFactory()
    }
    
    // 'initialValue' attribute on Variable at RateTableFactorList.pcf: line 36, column 22
    function initialValue_1 () : String {
      return null
    }
    
    // 'parent' attribute on Page (id=RateTableFactorList) at RateTableFactorList.pcf: line 17, column 69
    static function parent_96 (controller :  gw.rating.rtm.domain.RateTableFactorListController, rateBook :  RateBook, rateTable :  RateTable) : pcf.api.Destination {
      return pcf.RateBookDetail.createDestination(rateBook)//RateBookDetail(_rateTable.RateBook)
    }
    
    // 'startEditing' attribute on Page (id=RateTableFactorList) at RateTableFactorList.pcf: line 17, column 69
    function startEditing_97 () : void {
      onEdit()
    }
    
    // 'startInEditMode' attribute on Page (id=RateTableFactorList) at RateTableFactorList.pcf: line 17, column 69
    function startInEditMode_98 () : java.lang.Boolean {
      return controller.startInEditMode()
    }
    
    // 'title' attribute on Page (id=RateTableFactorList) at RateTableFactorList.pcf: line 17, column 69
    static function title_99 (controller :  gw.rating.rtm.domain.RateTableFactorListController, rateBook :  RateBook, rateTable :  RateTable) : java.lang.Object {
      return controller.RateTableModel.RateTableDefinition.TableName
    }
    
    override property get CurrentLocation () : pcf.RateTableFactorList {
      return super.CurrentLocation as pcf.RateTableFactorList
    }
    
    property get controller () : gw.rating.rtm.domain.RateTableFactorListController {
      return getVariableValue("controller", 0) as gw.rating.rtm.domain.RateTableFactorListController
    }
    
    property set controller ($arg :  gw.rating.rtm.domain.RateTableFactorListController) {
      setVariableValue("controller", 0, $arg)
    }
    
    property get displayMessage () : String {
      return getVariableValue("displayMessage", 0) as String
    }
    
    property set displayMessage ($arg :  String) {
      setVariableValue("displayMessage", 0, $arg)
    }
    
    property get rateBook () : entity.RateBook {
      return getVariableValue("rateBook", 0) as entity.RateBook
    }
    
    property set rateBook ($arg :  entity.RateBook) {
      setVariableValue("rateBook", 0, $arg)
    }
    
    property get rateTable () : RateTable {
      return getVariableValue("rateTable", 0) as RateTable
    }
    
    property set rateTable ($arg :  RateTable) {
      setVariableValue("rateTable", 0, $arg)
    }
    
    property get valueProviderFactory () : gw.rating.rtm.valueprovider.RateTableCellValueProviderFactory {
      return getVariableValue("valueProviderFactory", 0) as gw.rating.rtm.valueprovider.RateTableCellValueProviderFactory
    }
    
    property set valueProviderFactory ($arg :  gw.rating.rtm.valueprovider.RateTableCellValueProviderFactory) {
      setVariableValue("valueProviderFactory", 0, $arg)
    }
    
    
    
          function onEdit() {
            controller.createModel(rateTable, valueProviderFactory)
            displayMessage = controller.populateRateTableModel()
          }
    
          function createController() {
            controller = RateTableFactorListController.createDatabaseBasedController()
          }
    
          function initializeController() {
            controller.createModel(rateTable, valueProviderFactory)
            controller.refresh()
          }
    
          function resetValueProviderCache() {
            controller.resetValueProviderFactory(valueProviderFactory)
          }
    
          function getErrorsTooltip(row: RateTableRow): String {
            var errors = controller.getRowErrors(row)
            return (errors != null) ? errors.join("\n") : ""
          }
    
          function importSingleRateTable(workbook: XSSFWorkbook) {
            var newController = RateTableFactorListController.validateStructureAndGetController(rateTable, workbook.getSheetAt(0))
            RateTableFactorList.go(newController, rateTable, rateBook)
            onEdit()
          }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/admin/rating/RateTableFactorList.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class RateTableFactorListScreenExpressionsImpl extends RateTableFactorListExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on PickerToolbarButton (id=ImportToolbarButton) at RateTableFactorList.pcf: line 94, column 112
    function action_21 () : void {
      ExcelImportPopup.push()
    }
    
    // 'action' attribute on ToolbarButton (id=ExportToolbarButton) at RateTableFactorList.pcf: line 101, column 55
    function action_25 () : void {
      new gw.rating.rtm.excel.ExcelExport().exportRateTable(controller.RateTableModel)
    }
    
    // 'action' attribute on PickerToolbarButton (id=ImportToolbarButton) at RateTableFactorList.pcf: line 94, column 112
    function action_dest_22 () : pcf.api.Destination {
      return pcf.ExcelImportPopup.createDestination()
    }
    
    // 'initialValue' attribute on Variable at RateTableFactorList.pcf: line 42, column 25
    function initialValue_2 () : boolean {
      return rateTable.Definition.Factors.Count == 1
    }
    
    // 'initialValue' attribute on Variable at RateTableFactorList.pcf: line 46, column 21
    function initialValue_3 () : int {
      return new gw.rating.rtm.util.RatingConfig().RTMRowCountNormalizationThreshold
    }
    
    // EditButtons at RateTableFactorList.pcf: line 87, column 35
    function label_19 () : java.lang.Object {
      return gw.api.util.LocationUtil.hasOwnBundle(CurrentLocation) ? DisplayKey.get("Button.Update") : DisplayKey.get("Button.OK")
    }
    
    // 'label' attribute on Verbatim (id=WarningMessage) at RateTableFactorList.pcf: line 109, column 27
    function label_27 () : java.lang.String {
      return displayMessage
    }
    
    // 'onPick' attribute on PickerToolbarButton (id=ImportToolbarButton) at RateTableFactorList.pcf: line 94, column 112
    function onPick_23 (PickedValue :  org.apache.poi.xssf.usermodel.XSSFWorkbook) : void {
      importSingleRateTable(PickedValue)
    }
    
    // 'value' attribute on TextInput (id=RateTablePolicyLine_Input) at RateTableFactorList.pcf: line 60, column 150
    function valueRoot_11 () : java.lang.Object {
      return gw.api.productmodel.PolicyLinePatternLookup.getByPublicID(controller.RateTableModel.RateTableDefinition.PolicyLine)
    }
    
    // 'value' attribute on TextInput (id=RateTableCode_Input) at RateTableFactorList.pcf: line 52, column 78
    function valueRoot_5 () : java.lang.Object {
      return controller.RateTableModel.RateTableDefinition
    }
    
    // 'value' attribute on TextInput (id=RateTablePolicyLine_Input) at RateTableFactorList.pcf: line 60, column 150
    function value_10 () : java.lang.String {
      return gw.api.productmodel.PolicyLinePatternLookup.getByPublicID(controller.RateTableModel.RateTableDefinition.PolicyLine).DisplayName
    }
    
    // 'value' attribute on TextInput (id=RateBook_Input) at RateTableFactorList.pcf: line 67, column 162
    function value_13 () : java.lang.String {
      return DisplayKey.get("Web.Rating.RateTableDefinition.Usage.RateBookLabel", rateTable.RateBook.BookName, rateTable.RateBook.BookEdition)
    }
    
    // 'value' attribute on TextInput (id=Usage_Input) at RateTableFactorList.pcf: line 71, column 109
    function value_15 () : java.lang.String {
      return gw.rating.rtm.util.RatingUIUtil.getOwnershipLabel(controller.RateTableModel.RateTable)
    }
    
    // 'value' attribute on TextInput (id=RateTableCode_Input) at RateTableFactorList.pcf: line 52, column 78
    function value_4 () : java.lang.String {
      return controller.RateTableModel.RateTableDefinition.TableCode
    }
    
    // 'value' attribute on TextInput (id=RateTableDescription_Input) at RateTableFactorList.pcf: line 56, column 78
    function value_7 () : java.lang.String {
      return controller.RateTableModel.RateTableDefinition.TableDesc
    }
    
    // 'removeVisible' attribute on IteratorButtons at RateTableFactorList.pcf: line 82, column 57
    function visible_17 () : java.lang.Boolean {
      return controller.removeVisible()
    }
    
    // 'editVisible' attribute on EditButtons at RateTableFactorList.pcf: line 87, column 35
    function visible_18 () : java.lang.Boolean {
      return controller.editable() and perm.System.ratebookedit
    }
    
    // 'visible' attribute on PickerToolbarButton (id=ImportToolbarButton) at RateTableFactorList.pcf: line 94, column 112
    function visible_20 () : java.lang.Boolean {
      return controller.editable() and (not CurrentLocation.InEditMode) and perm.System.ratebookedit
    }
    
    // 'visible' attribute on ToolbarButton (id=ExportToolbarButton) at RateTableFactorList.pcf: line 101, column 55
    function visible_24 () : java.lang.Boolean {
      return not CurrentLocation.InEditMode
    }
    
    // 'visible' attribute on Verbatim (id=WarningMessage) at RateTableFactorList.pcf: line 109, column 27
    function visible_26 () : java.lang.Boolean {
      return displayMessage!=null
    }
    
    property get onlyOneFactor () : boolean {
      return getVariableValue("onlyOneFactor", 1) as java.lang.Boolean
    }
    
    property set onlyOneFactor ($arg :  boolean) {
      setVariableValue("onlyOneFactor", 1, $arg)
    }
    
    property get rtmRowCountNormalizationThreshold () : int {
      return getVariableValue("rtmRowCountNormalizationThreshold", 1) as java.lang.Integer
    }
    
    property set rtmRowCountNormalizationThreshold ($arg :  int) {
      setVariableValue("rtmRowCountNormalizationThreshold", 1, $arg)
    }
    
    
  }
  
  
}