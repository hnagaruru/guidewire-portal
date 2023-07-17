package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/bizrules/LookupPage.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class LookupPageExpressions {
  @javax.annotation.Generated("config/web/pcf/bizrules/LookupPage.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends ScreenExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on ButtonCell (id=ViewButton_Cell) at LookupPage.pcf: line 57, column 54
    function action_18 () : void {
      LookupPopup.push(lookupDef, false)
    }
    
    // 'action' attribute on ButtonCell (id=EditButton_Cell) at LookupPage.pcf: line 62, column 54
    function action_21 () : void {
      LookupPopup.push(lookupDef, true)
    }
    
    // 'action' attribute on ButtonCell (id=ViewButton_Cell) at LookupPage.pcf: line 57, column 54
    function action_dest_19 () : pcf.api.Destination {
      return pcf.LookupPopup.createDestination(lookupDef, false)
    }
    
    // 'action' attribute on ButtonCell (id=EditButton_Cell) at LookupPage.pcf: line 62, column 54
    function action_dest_22 () : pcf.api.Destination {
      return pcf.LookupPopup.createDestination(lookupDef, true)
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at LookupPage.pcf: line 67, column 44
    function valueRoot_25 () : java.lang.Object {
      return lookupDef
    }
    
    // 'value' attribute on TextCell (id=Output_Cell) at LookupPage.pcf: line 72, column 54
    function valueRoot_28 () : java.lang.Object {
      return lookupDef.Output
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at LookupPage.pcf: line 67, column 44
    function value_24 () : java.lang.String {
      return lookupDef.TableName
    }
    
    // 'value' attribute on TextCell (id=Output_Cell) at LookupPage.pcf: line 72, column 54
    function value_27 () : java.lang.String {
      return lookupDef.Output?.ColumnLabel
    }
    
    // 'value' attribute on TextCell (id=OutputType_Cell) at LookupPage.pcf: line 77, column 56
    function value_30 () : java.lang.String {
      return lookupDef.DisplayFactorDataType
    }
    
    // 'value' attribute on TextCell (id=Inputs_Cell) at LookupPage.pcf: line 82, column 51
    function value_33 () : java.lang.String {
      return lookupDef.InputListDisplay
    }
    
    // 'value' attribute on TextCell (id=SourceTable_Cell) at LookupPage.pcf: line 86, column 50
    function value_36 () : java.lang.String {
      return lookupDef.SourceTableName
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at LookupPage.pcf: line 90, column 44
    function value_39 () : java.lang.String {
      return lookupDef.TableDesc
    }
    
    // 'visible' attribute on ButtonCell (id=ViewButton_Cell) at LookupPage.pcf: line 57, column 54
    function visible_20 () : java.lang.Boolean {
      return perm.System.lookuptableview
    }
    
    // 'visible' attribute on ButtonCell (id=EditButton_Cell) at LookupPage.pcf: line 62, column 54
    function visible_23 () : java.lang.Boolean {
      return perm.System.lookuptableedit
    }
    
    property get lookupDef () : LookupTableDefinition {
      return getIteratedValue(2) as LookupTableDefinition
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/bizrules/LookupPage.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class LookupPageExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex () : int {
      return 0
    }
    
    // 'canVisit' attribute on Page (id=LookupPage) at LookupPage.pcf: line 9, column 91
    static function canVisit_43 () : java.lang.Boolean {
      return perm.System.lookuptableview
    }
    
    // 'initialValue' attribute on Variable at LookupPage.pcf: line 14, column 39
    function initialValue_0 () : LookupTableDefinition[] {
      return gw.web.bizrules.LookupUIHelper.findExistingLookups()
    }
    
    // Page (id=LookupPage) at LookupPage.pcf: line 9, column 91
    static function parent_44 () : pcf.api.Destination {
      return pcf.BizRules.createDestination()
    }
    
    override property get CurrentLocation () : pcf.LookupPage {
      return super.CurrentLocation as pcf.LookupPage
    }
    
    property get allExistingLookups () : LookupTableDefinition[] {
      return getVariableValue("allExistingLookups", 0) as LookupTableDefinition[]
    }
    
    property set allExistingLookups ($arg :  LookupTableDefinition[]) {
      setVariableValue("allExistingLookups", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/bizrules/LookupPage.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ScreenExpressionsImpl extends LookupPageExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on ToolbarButton (id=CreateButton) at LookupPage.pcf: line 25, column 50
    function action_3 () : void {
      CreateLookup.go()
    }
    
    // 'action' attribute on AlertBar (id=DeleteAlert) at LookupPage.pcf: line 39, column 47
    function action_8 () : void {
      
    }
    
    // 'action' attribute on ToolbarButton (id=CreateButton) at LookupPage.pcf: line 25, column 50
    function action_dest_4 () : pcf.api.Destination {
      return pcf.CreateLookup.createDestination()
    }
    
    // 'allCheckedRowsAction' attribute on CheckedValuesToolbarButton (id=RemoveButton) at LookupPage.pcf: line 32, column 50
    function allCheckedRowsAction_6 (CheckedValues :  LookupTableDefinition[], CheckedValuesErrors :  java.util.Map) : void {
      uiHelper.removeLookups(CheckedValues)
    }
    
    // 'initialValue' attribute on Variable at LookupPage.pcf: line 19, column 48
    function initialValue_1 () : gw.web.bizrules.LookupUIHelper {
      return new gw.web.bizrules.LookupUIHelper()
    }
    
    // 'sortBy' attribute on IteratorSort at LookupPage.pcf: line 51, column 28
    function sortBy_9 (lookupDef :  LookupTableDefinition) : java.lang.Object {
      return lookupDef.TableName
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at LookupPage.pcf: line 67, column 44
    function sortValue_12 (lookupDef :  LookupTableDefinition) : java.lang.Object {
      return lookupDef.TableName
    }
    
    // 'value' attribute on TextCell (id=Output_Cell) at LookupPage.pcf: line 72, column 54
    function sortValue_13 (lookupDef :  LookupTableDefinition) : java.lang.Object {
      return lookupDef.Output?.ColumnLabel
    }
    
    // 'value' attribute on TextCell (id=OutputType_Cell) at LookupPage.pcf: line 77, column 56
    function sortValue_14 (lookupDef :  LookupTableDefinition) : java.lang.Object {
      return lookupDef.DisplayFactorDataType
    }
    
    // 'value' attribute on TextCell (id=Inputs_Cell) at LookupPage.pcf: line 82, column 51
    function sortValue_15 (lookupDef :  LookupTableDefinition) : java.lang.Object {
      return lookupDef.InputListDisplay
    }
    
    // 'value' attribute on TextCell (id=SourceTable_Cell) at LookupPage.pcf: line 86, column 50
    function sortValue_16 (lookupDef :  LookupTableDefinition) : java.lang.Object {
      return lookupDef.SourceTableName
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at LookupPage.pcf: line 90, column 44
    function sortValue_17 (lookupDef :  LookupTableDefinition) : java.lang.Object {
      return lookupDef.TableDesc
    }
    
    // 'value' attribute on RowIterator (id=lookupIterator) at LookupPage.pcf: line 48, column 47
    function value_42 () : LookupTableDefinition[] {
      return allExistingLookups
    }
    
    // 'visible' attribute on ButtonCell (id=ViewButton_Cell) at LookupPage.pcf: line 57, column 54
    function visible_10 () : java.lang.Boolean {
      return perm.System.lookuptableview
    }
    
    // 'visible' attribute on ToolbarButton (id=CreateButton) at LookupPage.pcf: line 25, column 50
    function visible_2 () : java.lang.Boolean {
      return perm.System.lookuptableedit
    }
    
    // 'visible' attribute on AlertBar (id=DeleteAlert) at LookupPage.pcf: line 39, column 47
    function visible_7 () : java.lang.Boolean {
      return uiHelper.ShowDeleteMessage
    }
    
    property get uiHelper () : gw.web.bizrules.LookupUIHelper {
      return getVariableValue("uiHelper", 1) as gw.web.bizrules.LookupUIHelper
    }
    
    property set uiHelper ($arg :  gw.web.bizrules.LookupUIHelper) {
      setVariableValue("uiHelper", 1, $arg)
    }
    
    
  }
  
  
}