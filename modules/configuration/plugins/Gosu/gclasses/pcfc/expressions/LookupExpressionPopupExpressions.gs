package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/bizrules/LookupExpressionPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class LookupExpressionPopupExpressions {
  @javax.annotation.Generated("config/web/pcf/bizrules/LookupExpressionPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry2ExpressionsImpl extends LookupExpressionPopupExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'autoComplete' attribute on TextCell (id=ContextSymbol_Cell) at LookupExpressionPopup.pcf: line 161, column 48
    function autoComplete_49 () : gw.api.contact.AutocompleteHandler {
      return fragHolder.getAutocompleteHandler(lookupInput.ColumnType)
    }
    
    // 'value' attribute on TextCell (id=ContextSymbol_Cell) at LookupExpressionPopup.pcf: line 161, column 48
    function defaultSetter_47 (__VALUE_TO_SET :  java.lang.Object) : void {
      lookupInput.Symbol = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'iconColor' attribute on Link (id=RightOperandErrorIcon) at LookupExpressionPopup.pcf: line 180, column 53
    function iconColor_51 () : gw.api.web.color.GWColor {
      return gw.api.web.color.GWColor.THEME_ALERT_ERROR
    }
    
    // 'onChange' attribute on PostOnChange at LookupExpressionPopup.pcf: line 163, column 73
    function onChange_45 () : void {
      fragHolder.validateLookupExpression()
    }
    
    // 'value' attribute on TextCell (id=InputName_Cell) at LookupExpressionPopup.pcf: line 152, column 53
    function valueRoot_43 () : java.lang.Object {
      return lookupInput
    }
    
    // 'value' attribute on TextCell (id=InputName_Cell) at LookupExpressionPopup.pcf: line 152, column 53
    function value_42 () : java.lang.String {
      return lookupInput.ColumnName
    }
    
    // 'value' attribute on TextCell (id=ContextSymbol_Cell) at LookupExpressionPopup.pcf: line 161, column 48
    function value_46 () : java.lang.String {
      return lookupInput.Symbol
    }
    
    // 'value' attribute on InputIterator (id=RightOperandErrors) at LookupExpressionPopup.pcf: line 191, column 54
    function value_55 () : java.lang.String[] {
      return fragHolder.getLookupInputErrors(lookupInput.ColumnName)
    }
    
    // 'visible' attribute on ContentInput (id=RightOperandValidationErrorsCellHeader) at LookupExpressionPopup.pcf: line 175, column 103
    function visible_52 () : java.lang.Boolean {
      return fragHolder.getLookupInputErrors(lookupInput.ColumnName).length > 0
    }
    
    // 'visible' attribute on Row at LookupExpressionPopup.pcf: line 167, column 140
    function visible_56 () : java.lang.Boolean {
      return fragHolder.getShowValidationErrors() and fragHolder.getLookupInputErrors(lookupInput.ColumnName).length > 0
    }
    
    property get lookupInput () : RuleLookupParameterDef {
      return getIteratedValue(1) as RuleLookupParameterDef
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/bizrules/LookupExpressionPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry3ExpressionsImpl extends IteratorEntry2ExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextInput (id=RightOperandError_Input) at LookupExpressionPopup.pcf: line 194, column 40
    function value_53 () : java.lang.String {
      return error
    }
    
    property get error () : java.lang.String {
      return getIteratedValue(2) as java.lang.String
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/bizrules/LookupExpressionPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends LookupExpressionPopupExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on Link (id=selectButton) at LookupExpressionPopup.pcf: line 76, column 105
    function action_14 () : void {
      fragHolder.setCurrentTable((lookupTable as gw.plugin.lookup.LookupMetadata).TableID)
    }
    
    // 'action' attribute on Link (id=unselectButton) at LookupExpressionPopup.pcf: line 82, column 109
    function action_16 () : void {
      fragHolder.setCurrentTable(org.apache.commons.lang3.StringUtils.EMPTY)
    }
    
    // 'value' attribute on TextCell (id=TableName_Cell) at LookupExpressionPopup.pcf: line 88, column 85
    function valueRoot_18 () : java.lang.Object {
      return (lookupTable as gw.plugin.lookup.LookupMetadata)
    }
    
    // 'value' attribute on TextCell (id=Output_Cell) at LookupExpressionPopup.pcf: line 93, column 87
    function valueRoot_21 () : java.lang.Object {
      return (lookupTable as gw.plugin.lookup.LookupMetadata).Output
    }
    
    // 'value' attribute on TextCell (id=OutputType_Cell) at LookupExpressionPopup.pcf: line 98, column 104
    function valueRoot_24 () : java.lang.Object {
      return (lookupTable as gw.plugin.lookup.LookupMetadata).Output.DataType
    }
    
    // 'value' attribute on TextCell (id=TableName_Cell) at LookupExpressionPopup.pcf: line 88, column 85
    function value_17 () : java.lang.String {
      return (lookupTable as gw.plugin.lookup.LookupMetadata).TableName
    }
    
    // 'value' attribute on TextCell (id=Output_Cell) at LookupExpressionPopup.pcf: line 93, column 87
    function value_20 () : java.lang.String {
      return (lookupTable as gw.plugin.lookup.LookupMetadata).Output.Name
    }
    
    // 'value' attribute on TextCell (id=OutputType_Cell) at LookupExpressionPopup.pcf: line 98, column 104
    function value_23 () : java.lang.String {
      return (lookupTable as gw.plugin.lookup.LookupMetadata).Output.DataType.RelativeName
    }
    
    // 'value' attribute on TextCell (id=Inputs_Cell) at LookupExpressionPopup.pcf: line 103, column 154
    function value_26 () : java.lang.String {
      return (lookupTable as gw.plugin.lookup.LookupMetadata).Inputs.map(\lookupMetaColumn -> lookupMetaColumn.Name).join(", ")
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at LookupExpressionPopup.pcf: line 109, column 87
    function value_28 () : java.lang.String {
      return (lookupTable as gw.plugin.lookup.LookupMetadata).Description
    }
    
    // 'visible' attribute on Link (id=selectButton) at LookupExpressionPopup.pcf: line 76, column 105
    function visible_13 () : java.lang.Boolean {
      return org.apache.commons.lang3.StringUtils.isEmpty(fragHolder.getCurrentTable())
    }
    
    // 'visible' attribute on Link (id=unselectButton) at LookupExpressionPopup.pcf: line 82, column 109
    function visible_15 () : java.lang.Boolean {
      return not org.apache.commons.lang3.StringUtils.isEmpty(fragHolder.getCurrentTable())
    }
    
    property get lookupTable () : gw.plugin.lookup.LookupMetadata {
      return getIteratedValue(1) as gw.plugin.lookup.LookupMetadata
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/bizrules/LookupExpressionPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class LookupExpressionPopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (fragHolder :  gw.bizrules.pcf.LookupExpressionFragmentHolder, rule :  Rule) : int {
      return 0
    }
    
    // 'action' attribute on ButtonInput (id=LookupContextHelp_Input) at LookupExpressionPopup.pcf: line 134, column 51
    function action_37 () : void {
      ContextHelp.push()
    }
    
    // 'action' attribute on ToolbarButton (id=CreateNewLookupButton) at LookupExpressionPopup.pcf: line 57, column 249
    function action_7 () : void {
      gw.plugin.Plugins.get(gw.bizrules.IBizRulesPlugin).getAppBizRulesPageNavigation(rule).gotoCreateLookupPage()
    }
    
    // 'action' attribute on ButtonInput (id=LookupContextHelp_Input) at LookupExpressionPopup.pcf: line 134, column 51
    function action_dest_38 () : pcf.api.Destination {
      return pcf.ContextHelp.createDestination()
    }
    
    // 'afterCancel' attribute on Popup (id=LookupExpressionPopup) at LookupExpressionPopup.pcf: line 15, column 35
    function afterCancel_59 () : void {
      fragHolder.onCancel()
    }
    
    // 'afterCommit' attribute on Popup (id=LookupExpressionPopup) at LookupExpressionPopup.pcf: line 15, column 35
    function afterCommit_60 (TopLocation :  pcf.api.Location) : void {
      fragHolder.inputConversion()
    }
    
    // 'afterEnter' attribute on Popup (id=LookupExpressionPopup) at LookupExpressionPopup.pcf: line 15, column 35
    function afterEnter_61 () : void {
      fragHolder.syncRuleRequestDefinition();fragHolder.validateLookupExpression()
    }
    
    // 'afterReturnFromPopup' attribute on Popup (id=LookupExpressionPopup) at LookupExpressionPopup.pcf: line 15, column 35
    function afterReturnFromPopup_62 (popupCommitted :  boolean) : void {
      fragHolder.inputConversion()
    }
    
    // 'beforeCancel' attribute on Popup (id=LookupExpressionPopup) at LookupExpressionPopup.pcf: line 15, column 35
    function beforeCancel_63 () : void {
      fragHolder.clearCacheOnCancel()
    }
    
    // 'beforeCommit' attribute on Popup (id=LookupExpressionPopup) at LookupExpressionPopup.pcf: line 15, column 35
    function beforeCommit_64 (pickedValue :  java.lang.Object) : void {
      fragHolder.clearCacheOnCommit()
    }
    
    // 'initialValue' attribute on Variable at LookupExpressionPopup.pcf: line 25, column 23
    function initialValue_0 () : Boolean {
      return fragHolder.updateLookupMetadataMap()
    }
    
    // 'initialValue' attribute on Variable at LookupExpressionPopup.pcf: line 33, column 47
    function initialValue_1 () : gw.plugin.lookup.LookupMetadata {
      return fragHolder.getLookupMetadataSelected()
    }
    
    // 'label' attribute on Label (id=LTLabelID) at LookupExpressionPopup.pcf: line 121, column 45
    function label_32 () : java.lang.String {
      return targetLookup.TableName
    }
    
    // 'label' attribute on AlertBar (id=LookupMetaRefreshTag) at LookupExpressionPopup.pcf: line 48, column 175
    function label_5 () : java.lang.Object {
      return fragHolder.getLookupInputErrors("MetadataUpdated")[0]
    }
    
    // 'value' attribute on TextCell (id=OutputType_Cell) at LookupExpressionPopup.pcf: line 98, column 104
    function sortValue_10 (lookupTable :  gw.plugin.lookup.LookupMetadata) : java.lang.Object {
      return (lookupTable as gw.plugin.lookup.LookupMetadata).Output.DataType.RelativeName
    }
    
    // 'value' attribute on TextCell (id=Inputs_Cell) at LookupExpressionPopup.pcf: line 103, column 154
    function sortValue_11 (lookupTable :  gw.plugin.lookup.LookupMetadata) : java.lang.Object {
      return (lookupTable as gw.plugin.lookup.LookupMetadata).Inputs.map(\lookupMetaColumn -> lookupMetaColumn.Name).join(", ")
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at LookupExpressionPopup.pcf: line 109, column 87
    function sortValue_12 (lookupTable :  gw.plugin.lookup.LookupMetadata) : java.lang.Object {
      return (lookupTable as gw.plugin.lookup.LookupMetadata).Description
    }
    
    // 'value' attribute on TextCell (id=InputName_Cell) at LookupExpressionPopup.pcf: line 152, column 53
    function sortValue_40 (lookupInput :  RuleLookupParameterDef) : java.lang.Object {
      return lookupInput.ColumnName
    }
    
    // 'value' attribute on TextCell (id=ContextSymbol_Cell) at LookupExpressionPopup.pcf: line 161, column 48
    function sortValue_41 (lookupInput :  RuleLookupParameterDef) : java.lang.Object {
      return lookupInput.Symbol
    }
    
    // 'value' attribute on TextCell (id=TableName_Cell) at LookupExpressionPopup.pcf: line 88, column 85
    function sortValue_8 (lookupTable :  gw.plugin.lookup.LookupMetadata) : java.lang.Object {
      return (lookupTable as gw.plugin.lookup.LookupMetadata).TableName
    }
    
    // 'value' attribute on TextCell (id=Output_Cell) at LookupExpressionPopup.pcf: line 93, column 87
    function sortValue_9 (lookupTable :  gw.plugin.lookup.LookupMetadata) : java.lang.Object {
      return (lookupTable as gw.plugin.lookup.LookupMetadata).Output.Name
    }
    
    // 'title' attribute on Popup (id=LookupExpressionPopup) at LookupExpressionPopup.pcf: line 15, column 35
    static function title_65 (fragHolder :  gw.bizrules.pcf.LookupExpressionFragmentHolder, rule :  Rule) : java.lang.Object {
      return fragHolder.PopupTitle
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at LookupExpressionPopup.pcf: line 43, column 79
    function toolbarButtonSet_onEnter_2 (def :  pcf.ConditionValidationToolbarButtonSet) : void {
      def.onEnter(fragHolder)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at LookupExpressionPopup.pcf: line 43, column 79
    function toolbarButtonSet_refreshVariables_3 (def :  pcf.ConditionValidationToolbarButtonSet) : void {
      def.refreshVariables(fragHolder)
    }
    
    // 'value' attribute on TextInput (id=LTDescritionID_Input) at LookupExpressionPopup.pcf: line 125, column 46
    function valueRoot_34 () : java.lang.Object {
      return targetLookup
    }
    
    // 'value' attribute on RowIterator (id=LookupPagination) at LookupExpressionPopup.pcf: line 68, column 79
    function value_31 () : java.util.List<gw.plugin.lookup.LookupMetadata> {
      return fragHolder.filterListLookupMetadata()
    }
    
    // 'value' attribute on TextInput (id=LTDescritionID_Input) at LookupExpressionPopup.pcf: line 125, column 46
    function value_33 () : java.lang.String {
      return targetLookup.Description
    }
    
    // 'value' attribute on RowIterator at LookupExpressionPopup.pcf: line 146, column 54
    function value_57 () : RuleLookupParameterDef[] {
      return fragHolder.getOrCreateLookupRequestDefinition()
    }
    
    // 'visible' attribute on ButtonInput (id=LookupContextHelp_Input) at LookupExpressionPopup.pcf: line 134, column 51
    function visible_36 () : java.lang.Boolean {
      return CurrentLocation.InEditMode
    }
    
    // 'visible' attribute on AlertBar (id=LookupMetaRefreshTag) at LookupExpressionPopup.pcf: line 48, column 175
    function visible_4 () : java.lang.Boolean {
      return fragHolder.getLookupInputErrors("MetadataUpdated") != null && fragHolder.getLookupInputErrors("MetadataUpdated").length > 0
    }
    
    // 'visible' attribute on DetailViewPanel (id=LookupRequestDefDV) at LookupExpressionPopup.pcf: line 117, column 40
    function visible_58 () : java.lang.Boolean {
      return targetLookup != null
    }
    
    // 'visible' attribute on ToolbarButton (id=CreateNewLookupButton) at LookupExpressionPopup.pcf: line 57, column 249
    function visible_6 () : java.lang.Boolean {
      return gw.plugin.Plugins.get(gw.bizrules.IBizRulesPlugin).getAppBizRulesPageNavigation(rule) != null && gw.plugin.Plugins.get(gw.bizrules.IBizRulesPlugin).getAppBizRulesPageNavigation(rule).shouldDisplayCreateLookupButton()
    }
    
    override property get CurrentLocation () : pcf.LookupExpressionPopup {
      return super.CurrentLocation as pcf.LookupExpressionPopup
    }
    
    property get fragHolder () : gw.bizrules.pcf.LookupExpressionFragmentHolder {
      return getVariableValue("fragHolder", 0) as gw.bizrules.pcf.LookupExpressionFragmentHolder
    }
    
    property set fragHolder ($arg :  gw.bizrules.pcf.LookupExpressionFragmentHolder) {
      setVariableValue("fragHolder", 0, $arg)
    }
    
    property get rule () : Rule {
      return getVariableValue("rule", 0) as Rule
    }
    
    property set rule ($arg :  Rule) {
      setVariableValue("rule", 0, $arg)
    }
    
    property get targetLookup () : gw.plugin.lookup.LookupMetadata {
      return getVariableValue("targetLookup", 0) as gw.plugin.lookup.LookupMetadata
    }
    
    property set targetLookup ($arg :  gw.plugin.lookup.LookupMetadata) {
      setVariableValue("targetLookup", 0, $arg)
    }
    
    property get updateMetaDataMap () : Boolean {
      return getVariableValue("updateMetaDataMap", 0) as Boolean
    }
    
    property set updateMetaDataMap ($arg :  Boolean) {
      setVariableValue("updateMetaDataMap", 0, $arg)
    }
    
    
  }
  
  
}