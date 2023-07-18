package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/rating/RateTableDefinitionDetailsScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class RateTableDefinitionDetailsScreenExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/rating/RateTableDefinitionDetailsScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ArgSrcSetDetailPanelExpressionsImpl extends CardViewPanelExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'allCheckedRowsAction' attribute on CheckedValuesToolbarButton (id=SourceSetDeleteButton) at RateTableDefinitionDetailsScreen.pcf: line 521, column 118
    function allCheckedRowsAction_185 (CheckedValues :  entity.RateTableArgumentSourceSet[], CheckedValuesErrors :  java.util.Map) : void {
      helper.deleteSelectedArgSrcSets(CheckedValues); gw.api.web.PebblesUtil.invalidateIterators(CurrentLocation, entity.RateTableArgumentSourceSet)
    }
    
    // 'value' attribute on TextInput (id=ArgSrcName_Input) at RateTableDefinitionDetailsScreen.pcf: line 572, column 55
    function defaultSetter_200 (__VALUE_TO_SET :  java.lang.Object) : void {
      selectedArgSrcSet.Name = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=ArgSrcSetCode_Input) at RateTableDefinitionDetailsScreen.pcf: line 579, column 55
    function defaultSetter_207 (__VALUE_TO_SET :  java.lang.Object) : void {
      selectedArgSrcSet.Code = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'editable' attribute on TextInput (id=ArgSrcName_Input) at RateTableDefinitionDetailsScreen.pcf: line 572, column 55
    function editable_198 () : java.lang.Boolean {
      return not argumentSourceSetsUsedInPromotedBooks.contains(selectedArgSrcSet)
    }
    
    // 'editable' attribute on TextInput (id=ArgSrcSetCode_Input) at RateTableDefinitionDetailsScreen.pcf: line 579, column 55
    function editable_204 () : java.lang.Boolean {
      return selectedArgSrcSet.Code == null or selectedArgSrcSet.NotUsedByRateRoutines
    }
    
    // 'sortBy' attribute on IteratorSort at RateTableDefinitionDetailsScreen.pcf: line 542, column 36
    function sortBy_186 (argumentSrcSet :  entity.RateTableArgumentSourceSet) : java.lang.Object {
      return argumentSrcSet.Name
    }
    
    // 'sortBy' attribute on IteratorSort at RateTableDefinitionDetailsScreen.pcf: line 605, column 40
    function sortBy_212 (matchOp :  entity.RateTableMatchOp) : java.lang.Object {
      return matchOp.sortedParams().first().SortOrder
    }
    
    // 'toCreateAndAdd' attribute on RowIterator (id=ArgSrcSetIterator) at RateTableDefinitionDetailsScreen.pcf: line 534, column 67
    function toCreateAndAdd_196 () : entity.RateTableArgumentSourceSet {
      return helper.addNewArgumentSourceSet(parameterSet)
    }
    
    // 'validationExpression' attribute on TextInput (id=ArgSrcSetCode_Input) at RateTableDefinitionDetailsScreen.pcf: line 579, column 55
    function validationExpression_205 () : java.lang.Object {
      var setCodes = tableDefinition.ArgumentSourceSets.map(\aSet -> aSet.Code); return (setCodes.Count == setCodes.toSet().Count ? null : DisplayKey.get("Web.Rating.Errors.DuplicateArgSrcSetCode") )
    }
    
    // 'value' attribute on TextInput (id=ArgSrcName_Input) at RateTableDefinitionDetailsScreen.pcf: line 572, column 55
    function valueRoot_201 () : java.lang.Object {
      return selectedArgSrcSet
    }
    
    // 'value' attribute on RowIterator (id=ArgSrcSetIterator) at RateTableDefinitionDetailsScreen.pcf: line 534, column 67
    function value_197 () : entity.RateTableArgumentSourceSet[] {
      return tableDefinition.ArgumentSourceSets
    }
    
    // 'value' attribute on TextInput (id=ArgSrcName_Input) at RateTableDefinitionDetailsScreen.pcf: line 572, column 55
    function value_199 () : java.lang.String {
      return selectedArgSrcSet.Name
    }
    
    // 'value' attribute on TextInput (id=ArgSrcSetCode_Input) at RateTableDefinitionDetailsScreen.pcf: line 579, column 55
    function value_206 () : java.lang.String {
      return selectedArgSrcSet.Code
    }
    
    // 'value' attribute on RowIterator (id=ArgumentSourcesIterator) at RateTableDefinitionDetailsScreen.pcf: line 592, column 38
    function value_236 () : entity.RateTableMatchOp[] {
      return tableDefinition.MatchOps
    }
    
    property get selectedArgSrcSet () : RateTableArgumentSourceSet {
      return getCurrentSelection(2) as RateTableArgumentSourceSet
    }
    
    property set selectedArgSrcSet ($arg :  RateTableArgumentSourceSet) {
      setCurrentSelection(2, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/admin/rating/RateTableDefinitionDetailsScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class CardViewPanelExpressionsImpl extends RateTableDefinitionDetailsScreenExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on ToolbarButton (id=SingleSourceSetAddButton) at RateTableDefinitionDetailsScreen.pcf: line 440, column 111
    function action_157 () : void {
      helper.addNewArgumentSourceSet(parameterSet)
    }
    
    // 'def' attribute on PanelRef at RateTableDefinitionDetailsScreen.pcf: line 81, column 99
    function def_onEnter_17 (def :  pcf.RateTableDefinitionDV) : void {
      def.onEnter(tableDefinition, screenHelper.TableDefinitionEditable)
    }
    
    // 'def' attribute on PanelRef at RateTableDefinitionDetailsScreen.pcf: line 85, column 228
    function def_onEnter_19 (def :  pcf.LocalizedValuesDV) : void {
      def.onEnter(tableDefinition, { "TableName", "TableDesc" }, { DisplayKey.get("Web.Rating.RateBooks.Name"), DisplayKey.get("Web.Rating.RateBooks.Description") })
    }
    
    // 'def' attribute on PanelRef at RateTableDefinitionDetailsScreen.pcf: line 645, column 76
    function def_onEnter_239 (def :  pcf.RateTableDefinitionUsagePanelSet) : void {
      def.onEnter(screenHelper.RateTables)
    }
    
    // 'def' attribute on PanelRef at RateTableDefinitionDetailsScreen.pcf: line 81, column 99
    function def_refreshVariables_18 (def :  pcf.RateTableDefinitionDV) : void {
      def.refreshVariables(tableDefinition, screenHelper.TableDefinitionEditable)
    }
    
    // 'def' attribute on PanelRef at RateTableDefinitionDetailsScreen.pcf: line 85, column 228
    function def_refreshVariables_20 (def :  pcf.LocalizedValuesDV) : void {
      def.refreshVariables(tableDefinition, { "TableName", "TableDesc" }, { DisplayKey.get("Web.Rating.RateBooks.Name"), DisplayKey.get("Web.Rating.RateBooks.Description") })
    }
    
    // 'def' attribute on PanelRef at RateTableDefinitionDetailsScreen.pcf: line 645, column 76
    function def_refreshVariables_240 (def :  pcf.RateTableDefinitionUsagePanelSet) : void {
      def.refreshVariables(screenHelper.RateTables)
    }
    
    // 'value' attribute on RangeInput (id=RoutineParamSet_Input) at RateTableDefinitionDetailsScreen.pcf: line 414, column 58
    function defaultSetter_147 (__VALUE_TO_SET :  java.lang.Object) : void {
      parameterSet = (__VALUE_TO_SET as entity.CalcRoutineParameterSet)
    }
    
    // 'editable' attribute on RangeInput (id=RoutineParamSet_Input) at RateTableDefinitionDetailsScreen.pcf: line 414, column 58
    function editable_145 () : java.lang.Boolean {
      return argumentSourceSetsUsedInPromotedBooks.Empty
    }
    
    // 'initialValue' attribute on Variable at RateTableDefinitionDetailsScreen.pcf: line 74, column 32
    function initialValue_16 () : LanguageType[] {
      return gw.api.util.LocaleUtil.getAllLanguages()?.toTypedArray()
    }
    
    // 'label' attribute on Link (id=ParamInfo) at RateTableDefinitionDetailsScreen.pcf: line 425, column 76
    function label_154 () : java.lang.Object {
      return helper.getStringForParamTypes(parameterSet)
    }
    
    // 'onChange' attribute on PostOnChange at RateTableDefinitionDetailsScreen.pcf: line 416, column 75
    function onChange_144 () : void {
      tableDefinition.setParameterSet(parameterSet)
    }
    
    // 'onSelect' attribute on Card (id=ArgumentSourceCard) at RateTableDefinitionDetailsScreen.pcf: line 403, column 92
    function onSelect_238 () : void {
      gw.api.web.PebblesUtil.invalidateIterators(CurrentLocation, entity.RateTableMatchOp)
    }
    
    // 'optionLabel' attribute on RangeInput (id=RoutineParamSet_Input) at RateTableDefinitionDetailsScreen.pcf: line 414, column 58
    function optionLabel_148 (VALUE :  entity.CalcRoutineParameterSet) : java.lang.String {
      return VALUE.Name
    }
    
    // 'sortBy' attribute on IteratorSort at RateTableDefinitionDetailsScreen.pcf: line 469, column 32
    function sortBy_158 (matchOp :  entity.RateTableMatchOp) : java.lang.Object {
      return matchOp.sortedParams().first().SortOrder
    }
    
    // 'tooltip' attribute on Link (id=ParamInfo) at RateTableDefinitionDetailsScreen.pcf: line 425, column 76
    function tooltip_155 () : java.lang.String {
      return helper.getHelpStringForParamTypes(parameterSet)
    }
    
    // 'valueRange' attribute on RangeInput (id=RoutineParamSet_Input) at RateTableDefinitionDetailsScreen.pcf: line 414, column 58
    function valueRange_149 () : java.lang.Object {
      return paramSets
    }
    
    // 'value' attribute on RangeInput (id=RoutineParamSet_Input) at RateTableDefinitionDetailsScreen.pcf: line 414, column 58
    function value_146 () : entity.CalcRoutineParameterSet {
      return parameterSet
    }
    
    // 'value' attribute on RowIterator (id=SingleArgumentSourcesIterator) at RateTableDefinitionDetailsScreen.pcf: line 451, column 30
    function value_183 () : entity.RateTableMatchOp[] {
      return tableDefinition.MatchOps
    }
    
    // 'valueRange' attribute on RangeInput (id=RoutineParamSet_Input) at RateTableDefinitionDetailsScreen.pcf: line 414, column 58
    function verifyValueRangeIsAllowedType_150 ($$arg :  entity.CalcRoutineParameterSet[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=RoutineParamSet_Input) at RateTableDefinitionDetailsScreen.pcf: line 414, column 58
    function verifyValueRangeIsAllowedType_150 ($$arg :  gw.api.database.IQueryBeanResult<entity.CalcRoutineParameterSet>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=RoutineParamSet_Input) at RateTableDefinitionDetailsScreen.pcf: line 414, column 58
    function verifyValueRangeIsAllowedType_150 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=RoutineParamSet_Input) at RateTableDefinitionDetailsScreen.pcf: line 414, column 58
    function verifyValueRange_151 () : void {
      var __valueRangeArg = paramSets
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_150(__valueRangeArg)
    }
    
    // 'visible' attribute on ContentInput at RateTableDefinitionDetailsScreen.pcf: line 420, column 46
    function visible_156 () : java.lang.Boolean {
      return parameterSet != null
    }
    
    // 'visible' attribute on PanelRef (id=SingleArgSourcePanel) at RateTableDefinitionDetailsScreen.pcf: line 431, column 95
    function visible_184 () : java.lang.Boolean {
      return tableDefinition.ArgumentSourceSets.Count <= 1 and parameterSet != null
    }
    
    // 'visible' attribute on PanelRef (id=MultiArgSourceSetPanel) at RateTableDefinitionDetailsScreen.pcf: line 501, column 105
    function visible_237 () : java.lang.Boolean {
      return tableDefinition.ArgumentSourceSets.Count > 1 // nested panel refs for visibility
    }
    
    property get languages () : LanguageType[] {
      return getVariableValue("languages", 1) as LanguageType[]
    }
    
    property set languages ($arg :  LanguageType[]) {
      setVariableValue("languages", 1, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/admin/rating/RateTableDefinitionDetailsScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class FactorCVExpressionsImpl extends ListDetailPanel2ExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 3)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on InputSetRef (id=FactorColumnDetails) at RateTableDefinitionDetailsScreen.pcf: line 389, column 51
    function def_onEnter_140 (def :  pcf.ColumnDefinitionInputSet) : void {
      def.onEnter(selectedFactor, tableDefinition, isSelectedFactorEditable, false, helper)
    }
    
    // 'def' attribute on PanelRef at RateTableDefinitionDetailsScreen.pcf: line 393, column 166
    function def_onEnter_142 (def :  pcf.LocalizedValuesDV) : void {
      def.onEnter(selectedFactor, { "ColumnLabel"}, { DisplayKey.get("Web.Rating.RateTableDefinition.ColumnLabel") })
    }
    
    // 'def' attribute on InputSetRef (id=FactorColumnDetails) at RateTableDefinitionDetailsScreen.pcf: line 389, column 51
    function def_refreshVariables_141 (def :  pcf.ColumnDefinitionInputSet) : void {
      def.refreshVariables(selectedFactor, tableDefinition, isSelectedFactorEditable, false, helper)
    }
    
    // 'def' attribute on PanelRef at RateTableDefinitionDetailsScreen.pcf: line 393, column 166
    function def_refreshVariables_143 (def :  pcf.LocalizedValuesDV) : void {
      def.refreshVariables(selectedFactor, { "ColumnLabel"}, { DisplayKey.get("Web.Rating.RateTableDefinition.ColumnLabel") })
    }
    
    // 'value' attribute on TypeKeyInput (id=DataType_Input) at RateTableDefinitionDetailsScreen.pcf: line 375, column 63
    function defaultSetter_127 (__VALUE_TO_SET :  java.lang.Object) : void {
      selectedFactor.ColumnType = (__VALUE_TO_SET as typekey.RateTableDataType)
    }
    
    // 'value' attribute on TextInput (id=ColumnScale_Input) at RateTableDefinitionDetailsScreen.pcf: line 386, column 94
    function defaultSetter_135 (__VALUE_TO_SET :  java.lang.Object) : void {
      selectedFactor.ColumnScale = (__VALUE_TO_SET as java.lang.Integer)
    }
    
    // 'editable' attribute on TypeKeyInput (id=DataType_Input) at RateTableDefinitionDetailsScreen.pcf: line 375, column 63
    function editable_125 () : java.lang.Boolean {
      return isSelectedFactorEditable
    }
    
    // 'filter' attribute on TypeKeyInput (id=DataType_Input) at RateTableDefinitionDetailsScreen.pcf: line 375, column 63
    function filter_129 (VALUE :  typekey.RateTableDataType, VALUES :  typekey.RateTableDataType[]) : java.lang.Boolean {
      return gw.web.rating.RateTableDefinitionDetailsScreenUIHelper.tableFactorFilter(tableDefinition, VALUE)
    }
    
    // 'initialValue' attribute on Variable at RateTableDefinitionDetailsScreen.pcf: line 360, column 31
    function initialValue_123 () : boolean {
      return selectedFactor == null or selectedFactor.New or helper.canEditFactor(selectedFactor)
    }
    
    // 'onChange' attribute on PostOnChange at RateTableDefinitionDetailsScreen.pcf: line 377, column 80
    function onChange_124 () : void {
      selectedFactor.PhysicalColumnName = null
    }
    
    // 'value' attribute on TypeKeyInput (id=DataType_Input) at RateTableDefinitionDetailsScreen.pcf: line 375, column 63
    function valueRoot_128 () : java.lang.Object {
      return selectedFactor
    }
    
    // 'value' attribute on TypeKeyInput (id=DataType_Input) at RateTableDefinitionDetailsScreen.pcf: line 375, column 63
    function value_126 () : typekey.RateTableDataType {
      return selectedFactor.ColumnType
    }
    
    // 'value' attribute on TextInput (id=ColumnScale_Input) at RateTableDefinitionDetailsScreen.pcf: line 386, column 94
    function value_134 () : java.lang.Integer {
      return selectedFactor.ColumnScale
    }
    
    // 'visible' attribute on TextInput (id=ColumnScale_Input) at RateTableDefinitionDetailsScreen.pcf: line 386, column 94
    function visible_133 () : java.lang.Boolean {
      return selectedFactor.ColumnType == RateTableDataType.TC_DECIMAL
    }
    
    property get isSelectedFactorEditable () : boolean {
      return getVariableValue("isSelectedFactorEditable", 3) as java.lang.Boolean
    }
    
    property set isSelectedFactorEditable ($arg :  boolean) {
      setVariableValue("isSelectedFactorEditable", 3, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/admin/rating/RateTableDefinitionDetailsScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry2ExpressionsImpl extends ListDetailPanelExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 3)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'checkBoxVisible' attribute on RowIterator (id=MatchOpsIterator) at RateTableDefinitionDetailsScreen.pcf: line 131, column 55
    function checkBoxVisible_40 () : java.lang.Boolean {
      return isMatchOpRemovable
    }
    
    // 'initialValue' attribute on Variable at RateTableDefinitionDetailsScreen.pcf: line 135, column 52
    function initialValue_25 () : entity.RateTableColumn[] {
      return matchOp.Params.sortBy(\ p -> p.SortOrder)
    }
    
    // 'initialValue' attribute on Variable at RateTableDefinitionDetailsScreen.pcf: line 140, column 50
    function initialValue_26 () : entity.RateTableColumn {
      return orderedParams == null ? null : orderedParams.first()
    }
    
    // 'initialValue' attribute on Variable at RateTableDefinitionDetailsScreen.pcf: line 145, column 35
    function initialValue_27 () : boolean {
      return helper.canRemoveParameter(matchOp.Params.first())
    }
    
    // RowIterator (id=MatchOpsIterator) at RateTableDefinitionDetailsScreen.pcf: line 131, column 55
    function initializeVariables_41 () : void {
        orderedParams = matchOp.Params.sortBy(\ p -> p.SortOrder);
  currentFirstParam = orderedParams == null ? null : orderedParams.first();
  isMatchOpRemovable = helper.canRemoveParameter(matchOp.Params.first());

    }
    
    // 'value' attribute on TextCell (id=name_Cell) at RateTableDefinitionDetailsScreen.pcf: line 155, column 50
    function valueRoot_29 () : java.lang.Object {
      return matchOp
    }
    
    // 'value' attribute on TypeKeyCell (id=dataType_Cell) at RateTableDefinitionDetailsScreen.pcf: line 173, column 60
    function valueRoot_36 () : java.lang.Object {
      return currentFirstParam
    }
    
    // 'value' attribute on TextCell (id=name_Cell) at RateTableDefinitionDetailsScreen.pcf: line 155, column 50
    function value_28 () : java.lang.String {
      return matchOp.DisplayText
    }
    
    // 'value' attribute on TextCell (id=sortOrder_Cell) at RateTableDefinitionDetailsScreen.pcf: line 161, column 76
    function value_31 () : java.lang.String {
      return orderedParams*.SortOrder.join(", ")
    }
    
    // 'value' attribute on TextCell (id=matchingRule_Cell) at RateTableDefinitionDetailsScreen.pcf: line 166, column 109
    function value_33 () : java.lang.String {
      return gw.web.rating.RateTableDefinitionDetailsScreenUIHelper.getOpCodeLabel(matchOp)
    }
    
    // 'value' attribute on TypeKeyCell (id=dataType_Cell) at RateTableDefinitionDetailsScreen.pcf: line 173, column 60
    function value_35 () : typekey.RateTableDataType {
      return currentFirstParam.ColumnType
    }
    
    // 'value' attribute on TextCell (id=labels_Cell) at RateTableDefinitionDetailsScreen.pcf: line 178, column 123
    function value_38 () : java.lang.String {
      return orderedParams*.ColumnLabel.map(\ s -> s == null ? "" : s) .join(", ")
    }
    
    property get currentFirstParam () : entity.RateTableColumn {
      return getVariableValue("currentFirstParam", 3) as entity.RateTableColumn
    }
    
    property set currentFirstParam ($arg :  entity.RateTableColumn) {
      setVariableValue("currentFirstParam", 3, $arg)
    }
    
    property get isMatchOpRemovable () : boolean {
      return getVariableValue("isMatchOpRemovable", 3) as java.lang.Boolean
    }
    
    property set isMatchOpRemovable ($arg :  boolean) {
      setVariableValue("isMatchOpRemovable", 3, $arg)
    }
    
    property get matchOp () : entity.RateTableMatchOp {
      return getIteratedValue(3) as entity.RateTableMatchOp
    }
    
    property get orderedParams () : entity.RateTableColumn[] {
      return getVariableValue("orderedParams", 3) as entity.RateTableColumn[]
    }
    
    property set orderedParams ($arg :  entity.RateTableColumn[]) {
      setVariableValue("orderedParams", 3, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/admin/rating/RateTableDefinitionDetailsScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry3ExpressionsImpl extends ListDetailPanel2ExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 3)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'checkBoxVisible' attribute on RowIterator (id=FactorsIterator) at RateTableDefinitionDetailsScreen.pcf: line 320, column 54
    function checkBoxVisible_118 () : java.lang.Boolean {
      return isFactorRemovable
    }
    
    // 'initialValue' attribute on Variable at RateTableDefinitionDetailsScreen.pcf: line 325, column 35
    function initialValue_105 () : boolean {
      return helper.canRemoveFactor(factor)
    }
    
    // RowIterator (id=FactorsIterator) at RateTableDefinitionDetailsScreen.pcf: line 320, column 54
    function initializeVariables_119 () : void {
        isFactorRemovable = helper.canRemoveFactor(factor);

    }
    
    // 'value' attribute on TextCell (id=name_Cell) at RateTableDefinitionDetailsScreen.pcf: line 334, column 48
    function valueRoot_107 () : java.lang.Object {
      return factor
    }
    
    // 'value' attribute on TextCell (id=name_Cell) at RateTableDefinitionDetailsScreen.pcf: line 334, column 48
    function value_106 () : java.lang.String {
      return factor.ColumnName
    }
    
    // 'value' attribute on TextCell (id=priority_Cell) at RateTableDefinitionDetailsScreen.pcf: line 340, column 52
    function value_109 () : java.lang.Integer {
      return factor.SortOrder
    }
    
    // 'value' attribute on TypeKeyCell (id=dataType_Cell) at RateTableDefinitionDetailsScreen.pcf: line 345, column 60
    function value_112 () : typekey.RateTableDataType {
      return factor.ColumnType
    }
    
    // 'value' attribute on TextCell (id=labels_Cell) at RateTableDefinitionDetailsScreen.pcf: line 349, column 49
    function value_115 () : java.lang.String {
      return factor.ColumnLabel
    }
    
    property get factor () : entity.RateTableColumn {
      return getIteratedValue(3) as entity.RateTableColumn
    }
    
    property get isFactorRemovable () : boolean {
      return getVariableValue("isFactorRemovable", 3) as java.lang.Boolean
    }
    
    property set isFactorRemovable ($arg :  boolean) {
      setVariableValue("isFactorRemovable", 3, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/admin/rating/RateTableDefinitionDetailsScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry4ExpressionsImpl extends CardViewPanelExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on ModalCellRef at RateTableDefinitionDetailsScreen.pcf: line 494, column 65
    function def_onEnter_172 (def :  pcf.RateTableArgumentValue_Coverage) : void {
      def.onEnter(new gw.pcf.rating.rtm.RateTableArgumentSourceHelper(matchOp, firstSourceSet))
    }
    
    // 'def' attribute on ModalCellRef at RateTableDefinitionDetailsScreen.pcf: line 494, column 65
    function def_onEnter_174 (def :  pcf.RateTableArgumentValue_FreeForm) : void {
      def.onEnter(new gw.pcf.rating.rtm.RateTableArgumentSourceHelper(matchOp, firstSourceSet))
    }
    
    // 'def' attribute on ModalCellRef at RateTableDefinitionDetailsScreen.pcf: line 494, column 65
    function def_onEnter_176 (def :  pcf.RateTableArgumentValue_Typelist) : void {
      def.onEnter(new gw.pcf.rating.rtm.RateTableArgumentSourceHelper(matchOp, firstSourceSet))
    }
    
    // 'def' attribute on ModalCellRef at RateTableDefinitionDetailsScreen.pcf: line 494, column 65
    function def_refreshVariables_173 (def :  pcf.RateTableArgumentValue_Coverage) : void {
      def.refreshVariables(new gw.pcf.rating.rtm.RateTableArgumentSourceHelper(matchOp, firstSourceSet))
    }
    
    // 'def' attribute on ModalCellRef at RateTableDefinitionDetailsScreen.pcf: line 494, column 65
    function def_refreshVariables_175 (def :  pcf.RateTableArgumentValue_FreeForm) : void {
      def.refreshVariables(new gw.pcf.rating.rtm.RateTableArgumentSourceHelper(matchOp, firstSourceSet))
    }
    
    // 'def' attribute on ModalCellRef at RateTableDefinitionDetailsScreen.pcf: line 494, column 65
    function def_refreshVariables_177 (def :  pcf.RateTableArgumentValue_Typelist) : void {
      def.refreshVariables(new gw.pcf.rating.rtm.RateTableArgumentSourceHelper(matchOp, firstSourceSet))
    }
    
    // 'editable' attribute on ModalCellRef at RateTableDefinitionDetailsScreen.pcf: line 494, column 65
    function editable_171 () : java.lang.Boolean {
      return not argumentSourceSetsUsedInPromotedBooks.contains(firstSourceSet)
    }
    
    // 'initialValue' attribute on Variable at RateTableDefinitionDetailsScreen.pcf: line 456, column 43
    function initialValue_159 () : RateTableColumn[] {
      return matchOp.Params.sortBy(\ p -> p.SortOrder)
    }
    
    // 'initialValue' attribute on Variable at RateTableDefinitionDetailsScreen.pcf: line 461, column 41
    function initialValue_160 () : RateTableColumn {
      return orderedParams.first()
    }
    
    // 'initialValue' attribute on Variable at RateTableDefinitionDetailsScreen.pcf: line 466, column 59
    function initialValue_161 () : entity.RateTableArgumentSourceSet {
      return tableDefinition.ArgumentSourceSets.first()
    }
    
    // RowIterator (id=SingleArgumentSourcesIterator) at RateTableDefinitionDetailsScreen.pcf: line 451, column 30
    function initializeVariables_182 () : void {
        orderedParams = matchOp.Params.sortBy(\ p -> p.SortOrder);
  currentFirstParam = orderedParams.first();
  firstSourceSet = tableDefinition.ArgumentSourceSets.first();

    }
    
    // 'mode' attribute on ModalCellRef at RateTableDefinitionDetailsScreen.pcf: line 494, column 65
    function mode_178 () : java.lang.Object {
      return matchOp.ModeForRateTableArgumentValue
    }
    
    // 'value' attribute on TextCell (id=name_Cell) at RateTableDefinitionDetailsScreen.pcf: line 477, column 41
    function valueRoot_163 () : java.lang.Object {
      return matchOp
    }
    
    // 'value' attribute on TextCell (id=matchingRule_Cell) at RateTableDefinitionDetailsScreen.pcf: line 482, column 61
    function valueRoot_166 () : java.lang.Object {
      return matchOp.MatchOpDefinition
    }
    
    // 'value' attribute on TypeKeyCell (id=dataType_Cell) at RateTableDefinitionDetailsScreen.pcf: line 489, column 58
    function valueRoot_169 () : java.lang.Object {
      return matchOp.Params.sortBy(\ p -> p.SortOrder).first()
    }
    
    // 'value' attribute on TextCell (id=name_Cell) at RateTableDefinitionDetailsScreen.pcf: line 477, column 41
    function value_162 () : java.lang.String {
      return matchOp.Name
    }
    
    // 'value' attribute on TextCell (id=matchingRule_Cell) at RateTableDefinitionDetailsScreen.pcf: line 482, column 61
    function value_165 () : java.lang.String {
      return matchOp.MatchOpDefinition.OpCode
    }
    
    // 'value' attribute on TypeKeyCell (id=dataType_Cell) at RateTableDefinitionDetailsScreen.pcf: line 489, column 58
    function value_168 () : typekey.RateTableDataType {
      return matchOp.Params.sortBy(\ p -> p.SortOrder).first().ColumnType
    }
    
    // 'visible' attribute on Row at RateTableDefinitionDetailsScreen.pcf: line 471, column 96
    function visible_181 () : java.lang.Boolean {
      return firstSourceSet.RateTableArgumentSources*.Parameter.contains(matchOp)
    }
    
    property get currentFirstParam () : RateTableColumn {
      return getVariableValue("currentFirstParam", 2) as RateTableColumn
    }
    
    property set currentFirstParam ($arg :  RateTableColumn) {
      setVariableValue("currentFirstParam", 2, $arg)
    }
    
    property get firstSourceSet () : entity.RateTableArgumentSourceSet {
      return getVariableValue("firstSourceSet", 2) as entity.RateTableArgumentSourceSet
    }
    
    property set firstSourceSet ($arg :  entity.RateTableArgumentSourceSet) {
      setVariableValue("firstSourceSet", 2, $arg)
    }
    
    property get matchOp () : entity.RateTableMatchOp {
      return getIteratedValue(2) as entity.RateTableMatchOp
    }
    
    property get orderedParams () : RateTableColumn[] {
      return getVariableValue("orderedParams", 2) as RateTableColumn[]
    }
    
    property set orderedParams ($arg :  RateTableColumn[]) {
      setVariableValue("orderedParams", 2, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/admin/rating/RateTableDefinitionDetailsScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry5ExpressionsImpl extends ArgSrcSetDetailPanelExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 3)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'checkBoxVisible' attribute on RowIterator (id=ArgSrcSetIterator) at RateTableDefinitionDetailsScreen.pcf: line 534, column 67
    function checkBoxVisible_194 () : java.lang.Boolean {
      return isArgSrcSetRemovable
    }
    
    // 'initialValue' attribute on Variable at RateTableDefinitionDetailsScreen.pcf: line 539, column 37
    function initialValue_187 () : boolean {
      return argumentSrcSet.NotUsedByRateRoutines
    }
    
    // RowIterator (id=ArgSrcSetIterator) at RateTableDefinitionDetailsScreen.pcf: line 534, column 67
    function initializeVariables_195 () : void {
        isArgSrcSetRemovable = argumentSrcSet.NotUsedByRateRoutines;

    }
    
    // 'value' attribute on TextCell (id=ArgSrcSetName_Cell) at RateTableDefinitionDetailsScreen.pcf: line 549, column 52
    function valueRoot_189 () : java.lang.Object {
      return argumentSrcSet
    }
    
    // 'value' attribute on TextCell (id=ArgSrcSetName_Cell) at RateTableDefinitionDetailsScreen.pcf: line 549, column 52
    function value_188 () : java.lang.String {
      return argumentSrcSet.Name
    }
    
    // 'value' attribute on TextCell (id=ArgSrcSetCode_Cell) at RateTableDefinitionDetailsScreen.pcf: line 555, column 52
    function value_191 () : java.lang.String {
      return argumentSrcSet.Code
    }
    
    property get argumentSrcSet () : entity.RateTableArgumentSourceSet {
      return getIteratedValue(3) as entity.RateTableArgumentSourceSet
    }
    
    property get isArgSrcSetRemovable () : boolean {
      return getVariableValue("isArgSrcSetRemovable", 3) as java.lang.Boolean
    }
    
    property set isArgSrcSetRemovable ($arg :  boolean) {
      setVariableValue("isArgSrcSetRemovable", 3, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/admin/rating/RateTableDefinitionDetailsScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry6ExpressionsImpl extends ArgSrcSetDetailPanelExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 3)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on ModalCellRef (id=RateTableArgumentValues) at RateTableDefinitionDetailsScreen.pcf: line 631, column 73
    function def_onEnter_225 (def :  pcf.RateTableArgumentValue_Coverage) : void {
      def.onEnter(new gw.pcf.rating.rtm.RateTableArgumentSourceHelper(matchOp, selectedArgSrcSet))
    }
    
    // 'def' attribute on ModalCellRef (id=RateTableArgumentValues) at RateTableDefinitionDetailsScreen.pcf: line 631, column 73
    function def_onEnter_227 (def :  pcf.RateTableArgumentValue_FreeForm) : void {
      def.onEnter(new gw.pcf.rating.rtm.RateTableArgumentSourceHelper(matchOp, selectedArgSrcSet))
    }
    
    // 'def' attribute on ModalCellRef (id=RateTableArgumentValues) at RateTableDefinitionDetailsScreen.pcf: line 631, column 73
    function def_onEnter_229 (def :  pcf.RateTableArgumentValue_Typelist) : void {
      def.onEnter(new gw.pcf.rating.rtm.RateTableArgumentSourceHelper(matchOp, selectedArgSrcSet))
    }
    
    // 'def' attribute on ModalCellRef (id=RateTableArgumentValues) at RateTableDefinitionDetailsScreen.pcf: line 631, column 73
    function def_refreshVariables_226 (def :  pcf.RateTableArgumentValue_Coverage) : void {
      def.refreshVariables(new gw.pcf.rating.rtm.RateTableArgumentSourceHelper(matchOp, selectedArgSrcSet))
    }
    
    // 'def' attribute on ModalCellRef (id=RateTableArgumentValues) at RateTableDefinitionDetailsScreen.pcf: line 631, column 73
    function def_refreshVariables_228 (def :  pcf.RateTableArgumentValue_FreeForm) : void {
      def.refreshVariables(new gw.pcf.rating.rtm.RateTableArgumentSourceHelper(matchOp, selectedArgSrcSet))
    }
    
    // 'def' attribute on ModalCellRef (id=RateTableArgumentValues) at RateTableDefinitionDetailsScreen.pcf: line 631, column 73
    function def_refreshVariables_230 (def :  pcf.RateTableArgumentValue_Typelist) : void {
      def.refreshVariables(new gw.pcf.rating.rtm.RateTableArgumentSourceHelper(matchOp, selectedArgSrcSet))
    }
    
    // 'editable' attribute on ModalCellRef (id=RateTableArgumentValues) at RateTableDefinitionDetailsScreen.pcf: line 631, column 73
    function editable_224 () : java.lang.Boolean {
      return not argumentSourceSetsUsedInPromotedBooks.contains(selectedArgSrcSet)
    }
    
    // 'initialValue' attribute on Variable at RateTableDefinitionDetailsScreen.pcf: line 597, column 51
    function initialValue_213 () : RateTableColumn[] {
      return matchOp.Params.sortBy(\ p -> p.SortOrder)
    }
    
    // 'initialValue' attribute on Variable at RateTableDefinitionDetailsScreen.pcf: line 602, column 49
    function initialValue_214 () : RateTableColumn {
      return orderedParams.first()
    }
    
    // RowIterator (id=ArgumentSourcesIterator) at RateTableDefinitionDetailsScreen.pcf: line 592, column 38
    function initializeVariables_235 () : void {
        orderedParams = matchOp.Params.sortBy(\ p -> p.SortOrder);
  currentFirstParam = orderedParams.first();

    }
    
    // 'mode' attribute on ModalCellRef (id=RateTableArgumentValues) at RateTableDefinitionDetailsScreen.pcf: line 631, column 73
    function mode_231 () : java.lang.Object {
      return matchOp.ModeForRateTableArgumentValue
    }
    
    // 'value' attribute on TextCell (id=name_Cell) at RateTableDefinitionDetailsScreen.pcf: line 613, column 49
    function valueRoot_216 () : java.lang.Object {
      return matchOp
    }
    
    // 'value' attribute on TextCell (id=matchingRule_Cell) at RateTableDefinitionDetailsScreen.pcf: line 618, column 69
    function valueRoot_219 () : java.lang.Object {
      return matchOp.MatchOpDefinition
    }
    
    // 'value' attribute on TypeKeyCell (id=dataType_Cell) at RateTableDefinitionDetailsScreen.pcf: line 625, column 66
    function valueRoot_222 () : java.lang.Object {
      return matchOp.Params.sortBy(\ p -> p.SortOrder).first()
    }
    
    // 'value' attribute on TextCell (id=name_Cell) at RateTableDefinitionDetailsScreen.pcf: line 613, column 49
    function value_215 () : java.lang.String {
      return matchOp.Name
    }
    
    // 'value' attribute on TextCell (id=matchingRule_Cell) at RateTableDefinitionDetailsScreen.pcf: line 618, column 69
    function value_218 () : java.lang.String {
      return matchOp.MatchOpDefinition.OpCode
    }
    
    // 'value' attribute on TypeKeyCell (id=dataType_Cell) at RateTableDefinitionDetailsScreen.pcf: line 625, column 66
    function value_221 () : typekey.RateTableDataType {
      return matchOp.Params.sortBy(\ p -> p.SortOrder).first().ColumnType
    }
    
    // 'visible' attribute on Row at RateTableDefinitionDetailsScreen.pcf: line 607, column 107
    function visible_234 () : java.lang.Boolean {
      return selectedArgSrcSet.RateTableArgumentSources*.Parameter.contains(matchOp)
    }
    
    property get currentFirstParam () : RateTableColumn {
      return getVariableValue("currentFirstParam", 3) as RateTableColumn
    }
    
    property set currentFirstParam ($arg :  RateTableColumn) {
      setVariableValue("currentFirstParam", 3, $arg)
    }
    
    property get matchOp () : entity.RateTableMatchOp {
      return getIteratedValue(3) as entity.RateTableMatchOp
    }
    
    property get orderedParams () : RateTableColumn[] {
      return getVariableValue("orderedParams", 3) as RateTableColumn[]
    }
    
    property set orderedParams ($arg :  RateTableColumn[]) {
      setVariableValue("orderedParams", 3, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/admin/rating/RateTableDefinitionDetailsScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends ListDetailPanelExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 3)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'label' attribute on AddMenuItem (id=MatchOp) at RateTableDefinitionDetailsScreen.pcf: line 112, column 138
    function label_21 () : java.lang.Object {
      return matchOp.OpName
    }
    
    // 'toCreateAndAdd' attribute on AddMenuItem (id=MatchOp) at RateTableDefinitionDetailsScreen.pcf: line 112, column 138
    function toCreateAndAdd_22 (CheckedValues :  Object[]) : java.lang.Object {
      return gw.web.rating.RateTableDefinitionDetailsScreenUIHelper.addMatchOperation(tableDefinition, matchOp)
    }
    
    property get matchOp () : entity.RateTableMatchOpDefinition {
      return getIteratedValue(3) as entity.RateTableMatchOpDefinition
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/admin/rating/RateTableDefinitionDetailsScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ListDetailPanel2ExpressionsImpl extends CardViewPanelExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at RateTableDefinitionDetailsScreen.pcf: line 301, column 29
    function initialValue_98 () : boolean {
      return helper.canAddFactor()
    }
    
    // 'sortBy' attribute on IteratorSort at RateTableDefinitionDetailsScreen.pcf: line 328, column 34
    function sortBy_100 (factor :  entity.RateTableColumn) : java.lang.Object {
      return factor.SortOrder
    }
    
    // 'value' attribute on TextCell (id=name_Cell) at RateTableDefinitionDetailsScreen.pcf: line 334, column 48
    function sortValue_101 (factor :  entity.RateTableColumn) : java.lang.Object {
      return factor.ColumnName
    }
    
    // 'value' attribute on TextCell (id=priority_Cell) at RateTableDefinitionDetailsScreen.pcf: line 340, column 52
    function sortValue_102 (factor :  entity.RateTableColumn) : java.lang.Object {
      return factor.SortOrder
    }
    
    // 'value' attribute on TypeKeyCell (id=dataType_Cell) at RateTableDefinitionDetailsScreen.pcf: line 345, column 60
    function sortValue_103 (factor :  entity.RateTableColumn) : java.lang.Object {
      return factor.ColumnType
    }
    
    // 'value' attribute on TextCell (id=labels_Cell) at RateTableDefinitionDetailsScreen.pcf: line 349, column 49
    function sortValue_104 (factor :  entity.RateTableColumn) : java.lang.Object {
      return factor.ColumnLabel
    }
    
    // 'toCreateAndAdd' attribute on RowIterator (id=FactorsIterator) at RateTableDefinitionDetailsScreen.pcf: line 320, column 54
    function toCreateAndAdd_120 () : entity.RateTableColumn {
      return gw.web.rating.RateTableDefinitionDetailsScreenUIHelper.addFactorDefinition(tableDefinition)
    }
    
    // 'toRemove' attribute on RowIterator (id=FactorsIterator) at RateTableDefinitionDetailsScreen.pcf: line 320, column 54
    function toRemove_121 (factor :  entity.RateTableColumn) : void {
      tableDefinition.removeFromFactors(factor)
    }
    
    // 'value' attribute on RowIterator (id=FactorsIterator) at RateTableDefinitionDetailsScreen.pcf: line 320, column 54
    function value_122 () : entity.RateTableColumn[] {
      return tableDefinition.Factors
    }
    
    // 'addVisible' attribute on IteratorButtons at RateTableDefinitionDetailsScreen.pcf: line 306, column 45
    function visible_99 () : java.lang.Boolean {
      return canAddFactor
    }
    
    property get canAddFactor () : boolean {
      return getVariableValue("canAddFactor", 2) as java.lang.Boolean
    }
    
    property set canAddFactor ($arg :  boolean) {
      setVariableValue("canAddFactor", 2, $arg)
    }
    
    property get selectedFactor () : RateTableColumn {
      return getCurrentSelection(2) as RateTableColumn
    }
    
    property set selectedFactor ($arg :  RateTableColumn) {
      setCurrentSelection(2, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/admin/rating/RateTableDefinitionDetailsScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ListDetailPanelExpressionsImpl extends CardViewPanelExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'sortBy' attribute on IteratorSort at RateTableDefinitionDetailsScreen.pcf: line 148, column 34
    function sortBy_24 (matchOp :  entity.RateTableMatchOp) : java.lang.Object {
      return matchOp.sortedParams().first().SortOrder
    }
    
    // 'toRemove' attribute on RowIterator (id=MatchOpsIterator) at RateTableDefinitionDetailsScreen.pcf: line 131, column 55
    function toRemove_42 (matchOp :  entity.RateTableMatchOp) : void {
      tableDefinition.removeFromMatchOps(matchOp)
    }
    
    // 'validationExpression' attribute on ListViewPanel (id=MatchOpLV) at RateTableDefinitionDetailsScreen.pcf: line 121, column 62
    function validationExpression_44 () : java.lang.Object {
      return helper.validateChange()
    }
    
    // 'value' attribute on AddMenuItemIterator (id=MatchOps) at RateTableDefinitionDetailsScreen.pcf: line 107, column 87
    function value_23 () : java.util.List<entity.RateTableMatchOpDefinition> {
      return gw.web.rating.RateTableDefinitionDetailsScreenUIHelper.MatchOpDefinitions.orderBy(gw.api.database.QuerySelectColumns.path(gw.api.path.Paths.make(RateTableMatchOpDefinition#SortOrder))).toList()
    }
    
    // 'value' attribute on RowIterator (id=MatchOpsIterator) at RateTableDefinitionDetailsScreen.pcf: line 131, column 55
    function value_43 () : entity.RateTableMatchOp[] {
      return tableDefinition.MatchOps
    }
    
    property get selectedMatchOp () : RateTableMatchOp {
      return getCurrentSelection(2) as RateTableMatchOp
    }
    
    property set selectedMatchOp ($arg :  RateTableMatchOp) {
      setCurrentSelection(2, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/admin/rating/RateTableDefinitionDetailsScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ParameterCVExpressionsImpl extends ListDetailPanelExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 3)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on PanelRef (id=LocalizedLabelValues) at RateTableDefinitionDetailsScreen.pcf: line 251, column 44
    function def_onEnter_83 (def :  pcf.LocalizedValuesDV) : void {
      def.onEnter(selectedMatchOp, { "DisplayText"}, { DisplayKey.get("Web.Rating.RateTableDefinition.DisplayText") })
    }
    
    // 'def' attribute on InputSetRef (id=ParameterColumn1Details) at RateTableDefinitionDetailsScreen.pcf: line 263, column 55
    function def_onEnter_87 (def :  pcf.ColumnDefinitionInputSet) : void {
      def.onEnter(firstParam, tableDefinition, isSelectedMatchOpEditable, true, helper)
    }
    
    // 'def' attribute on PanelRef (id=LocalizedColumnLabelValues) at RateTableDefinitionDetailsScreen.pcf: line 269, column 69
    function def_onEnter_90 (def :  pcf.LocalizedValuesDV) : void {
      def.onEnter(firstParam, { "ColumnLabel"}, { DisplayKey.get("Web.Rating.RateTableDefinition.ColumnLabel") })
    }
    
    // 'def' attribute on InputSetRef (id=ParameterColumn2Details) at RateTableDefinitionDetailsScreen.pcf: line 279, column 55
    function def_onEnter_93 (def :  pcf.ColumnDefinitionInputSet) : void {
      def.onEnter(secondParam, tableDefinition, isSelectedMatchOpEditable, true, helper)
    }
    
    // 'def' attribute on PanelRef (id=LocalizedValuesDV2) at RateTableDefinitionDetailsScreen.pcf: line 284, column 46
    function def_onEnter_95 (def :  pcf.LocalizedValuesDV) : void {
      def.onEnter(secondParam, { "ColumnLabel"}, { DisplayKey.get("Web.Rating.RateTableDefinition.ColumnLabel") })
    }
    
    // 'def' attribute on PanelRef (id=LocalizedLabelValues) at RateTableDefinitionDetailsScreen.pcf: line 251, column 44
    function def_refreshVariables_84 (def :  pcf.LocalizedValuesDV) : void {
      def.refreshVariables(selectedMatchOp, { "DisplayText"}, { DisplayKey.get("Web.Rating.RateTableDefinition.DisplayText") })
    }
    
    // 'def' attribute on InputSetRef (id=ParameterColumn1Details) at RateTableDefinitionDetailsScreen.pcf: line 263, column 55
    function def_refreshVariables_88 (def :  pcf.ColumnDefinitionInputSet) : void {
      def.refreshVariables(firstParam, tableDefinition, isSelectedMatchOpEditable, true, helper)
    }
    
    // 'def' attribute on PanelRef (id=LocalizedColumnLabelValues) at RateTableDefinitionDetailsScreen.pcf: line 269, column 69
    function def_refreshVariables_91 (def :  pcf.LocalizedValuesDV) : void {
      def.refreshVariables(firstParam, { "ColumnLabel"}, { DisplayKey.get("Web.Rating.RateTableDefinition.ColumnLabel") })
    }
    
    // 'def' attribute on InputSetRef (id=ParameterColumn2Details) at RateTableDefinitionDetailsScreen.pcf: line 279, column 55
    function def_refreshVariables_94 (def :  pcf.ColumnDefinitionInputSet) : void {
      def.refreshVariables(secondParam, tableDefinition, isSelectedMatchOpEditable, true, helper)
    }
    
    // 'def' attribute on PanelRef (id=LocalizedValuesDV2) at RateTableDefinitionDetailsScreen.pcf: line 284, column 46
    function def_refreshVariables_96 (def :  pcf.LocalizedValuesDV) : void {
      def.refreshVariables(secondParam, { "ColumnLabel"}, { DisplayKey.get("Web.Rating.RateTableDefinition.ColumnLabel") })
    }
    
    // 'value' attribute on TextInput (id=Name_Input) at RateTableDefinitionDetailsScreen.pcf: line 215, column 50
    function defaultSetter_54 (__VALUE_TO_SET :  java.lang.Object) : void {
      selectedMatchOp.Name = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=DisplayText_Input) at RateTableDefinitionDetailsScreen.pcf: line 224, column 57
    function defaultSetter_61 (__VALUE_TO_SET :  java.lang.Object) : void {
      selectedMatchOp.DisplayText = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on RangeInput (id=DataType_Input) at RateTableDefinitionDetailsScreen.pcf: line 235, column 59
    function defaultSetter_68 (__VALUE_TO_SET :  java.lang.Object) : void {
      firstParam.ColumnType = (__VALUE_TO_SET as typekey.RateTableDataType)
    }
    
    // 'value' attribute on TextInput (id=ParamsColumnScale_Input) at RateTableDefinitionDetailsScreen.pcf: line 246, column 86
    function defaultSetter_78 (__VALUE_TO_SET :  java.lang.Object) : void {
      selectedMatchOp.AllParamColumnScales = (__VALUE_TO_SET as java.lang.Integer)
    }
    
    // 'editable' attribute on TextInput (id=Name_Input) at RateTableDefinitionDetailsScreen.pcf: line 215, column 50
    function editable_52 () : java.lang.Boolean {
      return isSelectedMatchOpEditable
    }
    
    // 'initialValue' attribute on Variable at RateTableDefinitionDetailsScreen.pcf: line 189, column 46
    function initialValue_45 () : entity.RateTableColumn {
      return selectedMatchOp.Params == null ? null : selectedMatchOp.Params.sortBy(\ p -> p.SortOrder).first()
    }
    
    // 'initialValue' attribute on Variable at RateTableDefinitionDetailsScreen.pcf: line 194, column 46
    function initialValue_46 () : entity.RateTableColumn {
      return selectedMatchOp.Params == null or selectedMatchOp.Params.Count < 2 ? null : selectedMatchOp.Params.sortBy(\ p -> p.SortOrder)[1]
    }
    
    // 'initialValue' attribute on Variable at RateTableDefinitionDetailsScreen.pcf: line 199, column 31
    function initialValue_47 () : boolean {
      return helper.canEditMatchOp(selectedMatchOp)
    }
    
    // 'label' attribute on Label at RateTableDefinitionDetailsScreen.pcf: line 260, column 72
    function label_86 () : java.lang.String {
      return DisplayKey.get("Web.Rating.RateTableDefinition.MatchOpColumnHeader", 1)
    }
    
    // 'label' attribute on Label at RateTableDefinitionDetailsScreen.pcf: line 276, column 116
    function label_92 () : java.lang.String {
      return DisplayKey.get("Web.Rating.RateTableDefinition.MatchOpColumnHeader", 2)
    }
    
    // 'onChange' attribute on PostOnChange at RateTableDefinitionDetailsScreen.pcf: line 217, column 61
    function onChange_51 () : void {
      copyDetailsToParameters()
    }
    
    // 'onChange' attribute on PostOnChange at RateTableDefinitionDetailsScreen.pcf: line 226, column 61
    function onChange_58 () : void {
      copyDetailsToParameters()
    }
    
    // 'onChange' attribute on PostOnChange at RateTableDefinitionDetailsScreen.pcf: line 237, column 252
    function onChange_65 () : void {
      firstParam.PhysicalColumnName = null; selectedMatchOp.Params.first().MultiSelect = false; if(selectedMatchOp.Params.Count > 1){secondParam.ColumnType = firstParam.ColumnType; secondParam.PhysicalColumnName = null}
    }
    
    // 'valueRange' attribute on RangeInput (id=DataType_Input) at RateTableDefinitionDetailsScreen.pcf: line 235, column 59
    function valueRange_70 () : java.lang.Object {
      return selectedMatchOp.MatchOpDefinition.AllowedParameterTypeSet.toTypedArray().sortBy(\ r -> r.Priority)
    }
    
    // 'value' attribute on TextInput (id=MatchingRule_Input) at RateTableDefinitionDetailsScreen.pcf: line 209, column 71
    function valueRoot_49 () : java.lang.Object {
      return selectedMatchOp.MatchOpDefinition
    }
    
    // 'value' attribute on TextInput (id=Name_Input) at RateTableDefinitionDetailsScreen.pcf: line 215, column 50
    function valueRoot_55 () : java.lang.Object {
      return selectedMatchOp
    }
    
    // 'value' attribute on RangeInput (id=DataType_Input) at RateTableDefinitionDetailsScreen.pcf: line 235, column 59
    function valueRoot_69 () : java.lang.Object {
      return firstParam
    }
    
    // 'value' attribute on TextInput (id=MatchingRule_Input) at RateTableDefinitionDetailsScreen.pcf: line 209, column 71
    function value_48 () : java.lang.String {
      return selectedMatchOp.MatchOpDefinition.OpName
    }
    
    // 'value' attribute on TextInput (id=Name_Input) at RateTableDefinitionDetailsScreen.pcf: line 215, column 50
    function value_53 () : java.lang.String {
      return selectedMatchOp.Name
    }
    
    // 'value' attribute on TextInput (id=DisplayText_Input) at RateTableDefinitionDetailsScreen.pcf: line 224, column 57
    function value_60 () : java.lang.String {
      return selectedMatchOp.DisplayText
    }
    
    // 'value' attribute on RangeInput (id=DataType_Input) at RateTableDefinitionDetailsScreen.pcf: line 235, column 59
    function value_67 () : typekey.RateTableDataType {
      return firstParam.ColumnType
    }
    
    // 'value' attribute on TextInput (id=ParamsColumnScale_Input) at RateTableDefinitionDetailsScreen.pcf: line 246, column 86
    function value_77 () : java.lang.Integer {
      return selectedMatchOp.AllParamColumnScales
    }
    
    // 'valueRange' attribute on RangeInput (id=DataType_Input) at RateTableDefinitionDetailsScreen.pcf: line 235, column 59
    function verifyValueRangeIsAllowedType_71 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=DataType_Input) at RateTableDefinitionDetailsScreen.pcf: line 235, column 59
    function verifyValueRangeIsAllowedType_71 ($$arg :  typekey.RateTableDataType[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=DataType_Input) at RateTableDefinitionDetailsScreen.pcf: line 235, column 59
    function verifyValueRange_72 () : void {
      var __valueRangeArg = selectedMatchOp.MatchOpDefinition.AllowedParameterTypeSet.toTypedArray().sortBy(\ r -> r.Priority)
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_71(__valueRangeArg)
    }
    
    // 'visible' attribute on TextInput (id=ParamsColumnScale_Input) at RateTableDefinitionDetailsScreen.pcf: line 246, column 86
    function visible_76 () : java.lang.Boolean {
      return firstParam.ColumnType == RateTableDataType.TC_DECIMAL
    }
    
    // 'visible' attribute on Label at RateTableDefinitionDetailsScreen.pcf: line 260, column 72
    function visible_85 () : java.lang.Boolean {
      return selectedMatchOp.Params.Count > 1
    }
    
    // 'visible' attribute on PanelRef (id=LocalizedColumnLabelValues) at RateTableDefinitionDetailsScreen.pcf: line 269, column 69
    function visible_89 () : java.lang.Boolean {
      return selectedMatchOp.Params.length > 1
    }
    
    property get firstParam () : entity.RateTableColumn {
      return getVariableValue("firstParam", 3) as entity.RateTableColumn
    }
    
    property set firstParam ($arg :  entity.RateTableColumn) {
      setVariableValue("firstParam", 3, $arg)
    }
    
    property get isSelectedMatchOpEditable () : boolean {
      return getVariableValue("isSelectedMatchOpEditable", 3) as java.lang.Boolean
    }
    
    property set isSelectedMatchOpEditable ($arg :  boolean) {
      setVariableValue("isSelectedMatchOpEditable", 3, $arg)
    }
    
    property get secondParam () : entity.RateTableColumn {
      return getVariableValue("secondParam", 3) as entity.RateTableColumn
    }
    
    property set secondParam ($arg :  entity.RateTableColumn) {
      setVariableValue("secondParam", 3, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/admin/rating/RateTableDefinitionDetailsScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class RateTableDefinitionDetailsScreenExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on ToolbarButton (id=Copy) at RateTableDefinitionDetailsScreen.pcf: line 56, column 80
    function action_11 () : void {
      NewRateTableDefinition.go(tableDefinition)
    }
    
    // 'action' attribute on ToolbarButton (id=Delete) at RateTableDefinitionDetailsScreen.pcf: line 62, column 114
    function action_14 () : void {
      tableDefinition.delete(); RateTableDefinitions.go()
    }
    
    // 'action' attribute on ToolbarButton (id=myUpdate) at RateTableDefinitionDetailsScreen.pcf: line 48, column 99
    function action_7 () : void {
      copyDetailsToParameters(); CurrentLocation.commit()
    }
    
    // 'action' attribute on ToolbarButton (id=Copy) at RateTableDefinitionDetailsScreen.pcf: line 56, column 80
    function action_dest_12 () : pcf.api.Destination {
      return pcf.NewRateTableDefinition.createDestination(tableDefinition)
    }
    
    // 'initialValue' attribute on Variable at RateTableDefinitionDetailsScreen.pcf: line 17, column 61
    function initialValue_0 () : gw.pcf.rating.rtm.RateTableParameterSetHelper {
      return new gw.pcf.rating.rtm.RateTableParameterSetHelper(tableDefinition)
    }
    
    // 'initialValue' attribute on Variable at RateTableDefinitionDetailsScreen.pcf: line 22, column 70
    function initialValue_1 () : gw.web.rating.RateTableDefinitionDetailsScreenUIHelper {
      return new gw.web.rating.RateTableDefinitionDetailsScreenUIHelper(tableDefinition)
    }
    
    // 'initialValue' attribute on Variable at RateTableDefinitionDetailsScreen.pcf: line 26, column 39
    function initialValue_2 () : CalcRoutineParameterSet {
      return gw.web.rating.RateTableDefinitionDetailsScreenUIHelper.calcParameterSet(tableDefinition)
    }
    
    // 'initialValue' attribute on Variable at RateTableDefinitionDetailsScreen.pcf: line 31, column 51
    function initialValue_3 () : List<CalcRoutineParameterSet> {
      return gw.web.rating.RateTableDefinitionDetailsScreenUIHelper.calcParameterSets(tableDefinition)
    }
    
    // 'initialValue' attribute on Variable at RateTableDefinitionDetailsScreen.pcf: line 36, column 63
    function initialValue_4 () : java.util.Set<RateTableArgumentSourceSet> {
      return tableDefinition.ArgumentSourceSetsUsedInPromotedRateBooks
    }
    
    // 'initialValue' attribute on Variable at RateTableDefinitionDetailsScreen.pcf: line 41, column 70
    function initialValue_5 () : java.util.Set<entity.RateTableArgumentSourceSet> {
      return tableDefinition.ArgumentSourceSetsUsedInRateBooks
    }
    
    // EditButtons at RateTableDefinitionDetailsScreen.pcf: line 51, column 32
    function label_9 () : java.lang.Object {
      return gw.api.util.LocationUtil.hasOwnBundle(CurrentLocation) ? DisplayKey.get("Button.Update") : DisplayKey.get("Button.OK")
    }
    
    // 'visible' attribute on ToolbarButton (id=Copy) at RateTableDefinitionDetailsScreen.pcf: line 56, column 80
    function visible_10 () : java.lang.Boolean {
      return not CurrentLocation.InEditMode and perm.System.ratebookedit
    }
    
    // 'visible' attribute on ToolbarButton (id=Delete) at RateTableDefinitionDetailsScreen.pcf: line 62, column 114
    function visible_13 () : java.lang.Boolean {
      return screenHelper.RateTables.Empty and not CurrentLocation.InEditMode and perm.System.ratebookedit
    }
    
    // 'visible' attribute on AlertBar (id=RateTableDefinitionReferencedMessage) at RateTableDefinitionDetailsScreen.pcf: line 69, column 60
    function visible_15 () : java.lang.Boolean {
      return not screenHelper.TableDefinitionEditable 
    }
    
    // 'visible' attribute on ToolbarButton (id=myUpdate) at RateTableDefinitionDetailsScreen.pcf: line 48, column 99
    function visible_6 () : java.lang.Boolean {
      return perm.System.ratebookedit and not disallowUpdate and CurrentLocation.InEditMode
    }
    
    // 'editVisible' attribute on EditButtons at RateTableDefinitionDetailsScreen.pcf: line 51, column 32
    function visible_8 () : java.lang.Boolean {
      return perm.System.ratebookedit
    }
    
    property get argumentSourceSetsUsedInAnyRateBooks () : java.util.Set<entity.RateTableArgumentSourceSet> {
      return getVariableValue("argumentSourceSetsUsedInAnyRateBooks", 0) as java.util.Set<entity.RateTableArgumentSourceSet>
    }
    
    property set argumentSourceSetsUsedInAnyRateBooks ($arg :  java.util.Set<entity.RateTableArgumentSourceSet>) {
      setVariableValue("argumentSourceSetsUsedInAnyRateBooks", 0, $arg)
    }
    
    property get argumentSourceSetsUsedInPromotedBooks () : java.util.Set<RateTableArgumentSourceSet> {
      return getVariableValue("argumentSourceSetsUsedInPromotedBooks", 0) as java.util.Set<RateTableArgumentSourceSet>
    }
    
    property set argumentSourceSetsUsedInPromotedBooks ($arg :  java.util.Set<RateTableArgumentSourceSet>) {
      setVariableValue("argumentSourceSetsUsedInPromotedBooks", 0, $arg)
    }
    
    property get disallowUpdate () : boolean {
      return getRequireValue("disallowUpdate", 0) as java.lang.Boolean
    }
    
    property set disallowUpdate ($arg :  boolean) {
      setRequireValue("disallowUpdate", 0, $arg)
    }
    
    property get helper () : gw.pcf.rating.rtm.RateTableParameterSetHelper {
      return getVariableValue("helper", 0) as gw.pcf.rating.rtm.RateTableParameterSetHelper
    }
    
    property set helper ($arg :  gw.pcf.rating.rtm.RateTableParameterSetHelper) {
      setVariableValue("helper", 0, $arg)
    }
    
    property get paramSets () : List<CalcRoutineParameterSet> {
      return getVariableValue("paramSets", 0) as List<CalcRoutineParameterSet>
    }
    
    property set paramSets ($arg :  List<CalcRoutineParameterSet>) {
      setVariableValue("paramSets", 0, $arg)
    }
    
    property get parameterSet () : CalcRoutineParameterSet {
      return getVariableValue("parameterSet", 0) as CalcRoutineParameterSet
    }
    
    property set parameterSet ($arg :  CalcRoutineParameterSet) {
      setVariableValue("parameterSet", 0, $arg)
    }
    
    property get screenHelper () : gw.web.rating.RateTableDefinitionDetailsScreenUIHelper {
      return getVariableValue("screenHelper", 0) as gw.web.rating.RateTableDefinitionDetailsScreenUIHelper
    }
    
    property set screenHelper ($arg :  gw.web.rating.RateTableDefinitionDetailsScreenUIHelper) {
      setVariableValue("screenHelper", 0, $arg)
    }
    
    property get tableDefinition () : RateTableDefinition {
      return getRequireValue("tableDefinition", 0) as RateTableDefinition
    }
    
    property set tableDefinition ($arg :  RateTableDefinition) {
      setRequireValue("tableDefinition", 0, $arg)
    }
    
    public function copyDetailsToParameters() {
      helper.copyNameLabelAndLocalizationDataOnSingleParameterOps()
    }
    
    
  }
  
  
}