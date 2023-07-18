package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/importexport/ImportWizard_ConflictScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ImportWizard_ConflictScreenExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/importexport/ImportWizard_ConflictScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ImportWizard_ConflictScreenExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on BooleanRadioInput (id=Overwrite_Input) at ImportWizard_ConflictScreen.pcf: line 44, column 49
    function defaultSetter_15 (__VALUE_TO_SET :  java.lang.Object) : void {
      importDataConflict.Overwrite = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on TextCell (id=FieldName_Cell) at ImportWizard_ConflictScreen.pcf: line 63, column 52
    function sortValue_18 (fieldConflict :  gw.api.admin.ImportDataFieldConflict) : java.lang.Object {
      return fieldConflict.FieldName
    }
    
    // 'value' attribute on TextCell (id=ExistingValue_Cell) at ImportWizard_ConflictScreen.pcf: line 69, column 56
    function sortValue_19 (fieldConflict :  gw.api.admin.ImportDataFieldConflict) : java.lang.Object {
      return fieldConflict.ExistingValue
    }
    
    // 'value' attribute on TextCell (id=ImportValue_Cell) at ImportWizard_ConflictScreen.pcf: line 75, column 54
    function sortValue_20 (fieldConflict :  gw.api.admin.ImportDataFieldConflict) : java.lang.Object {
      return fieldConflict.ImportValue
    }
    
    // 'value' attribute on TextInput (id=Resolution_Input) at ImportWizard_ConflictScreen.pcf: line 23, column 71
    function valueRoot_1 () : java.lang.Object {
      return pcImportDataInfo
    }
    
    // 'value' attribute on TextInput (id=Type_Input) at ImportWizard_ConflictScreen.pcf: line 31, column 50
    function valueRoot_6 () : java.lang.Object {
      return importDataConflict
    }
    
    // 'value' attribute on TextInput (id=Resolution_Input) at ImportWizard_ConflictScreen.pcf: line 23, column 71
    function value_0 () : gw.api.admin.PCImportDataInfo.ResolutionOption {
      return pcImportDataInfo.ResolutionStrategy
    }
    
    // 'value' attribute on TextInput (id=DisplayName_Input) at ImportWizard_ConflictScreen.pcf: line 39, column 51
    function value_11 () : java.lang.String {
      return importDataConflict.DisplayName
    }
    
    // 'value' attribute on BooleanRadioInput (id=Overwrite_Input) at ImportWizard_ConflictScreen.pcf: line 44, column 49
    function value_14 () : java.lang.Boolean {
      return importDataConflict.Overwrite
    }
    
    // 'value' attribute on TextInput (id=Message_Input) at ImportWizard_ConflictScreen.pcf: line 27, column 155
    function value_3 () : java.lang.String {
      return DisplayKey.get("Web.Admin.ImportWizard.ConflictDV.ConflictNumber", importDataConflict.Number, pcImportDataInfo.NumConflicts)
    }
    
    // 'value' attribute on RowIterator at ImportWizard_ConflictScreen.pcf: line 57, column 66
    function value_38 () : gw.api.admin.ImportDataFieldConflict[] {
      return importDataConflict.FieldConflicts
    }
    
    // 'value' attribute on TextInput (id=Type_Input) at ImportWizard_ConflictScreen.pcf: line 31, column 50
    function value_5 () : java.lang.String {
      return importDataConflict.EntityType
    }
    
    // 'value' attribute on TextInput (id=PublicID_Input) at ImportWizard_ConflictScreen.pcf: line 35, column 48
    function value_8 () : java.lang.String {
      return importDataConflict.PublicID
    }
    
    property get importDataConflict () : gw.api.admin.ImportDataConflict {
      return getRequireValue("importDataConflict", 0) as gw.api.admin.ImportDataConflict
    }
    
    property set importDataConflict ($arg :  gw.api.admin.ImportDataConflict) {
      setRequireValue("importDataConflict", 0, $arg)
    }
    
    property get pcImportDataInfo () : gw.api.admin.PCImportDataInfo {
      return getRequireValue("pcImportDataInfo", 0) as gw.api.admin.PCImportDataInfo
    }
    
    property set pcImportDataInfo ($arg :  gw.api.admin.PCImportDataInfo) {
      setRequireValue("pcImportDataInfo", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/admin/importexport/ImportWizard_ConflictScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends ImportWizard_ConflictScreenExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextCell (id=ExistingValue_Cell) at ImportWizard_ConflictScreen.pcf: line 69, column 56
    function action_25 () : void {
      ImportWizard_ArrayDiffPopup.push(fieldConflict.ArrayDifferences)
    }
    
    // 'action' attribute on TextCell (id=ImportValue_Cell) at ImportWizard_ConflictScreen.pcf: line 75, column 54
    function action_32 () : void {
      ImportWizard_ArrayDiffPopup.push(fieldConflict.ArrayDifferences)
    }
    
    // 'action' attribute on TextCell (id=ExistingValue_Cell) at ImportWizard_ConflictScreen.pcf: line 69, column 56
    function action_dest_26 () : pcf.api.Destination {
      return pcf.ImportWizard_ArrayDiffPopup.createDestination(fieldConflict.ArrayDifferences)
    }
    
    // 'action' attribute on TextCell (id=ImportValue_Cell) at ImportWizard_ConflictScreen.pcf: line 75, column 54
    function action_dest_33 () : pcf.api.Destination {
      return pcf.ImportWizard_ArrayDiffPopup.createDestination(fieldConflict.ArrayDifferences)
    }
    
    // 'available' attribute on TextCell (id=ExistingValue_Cell) at ImportWizard_ConflictScreen.pcf: line 69, column 56
    function available_24 () : java.lang.Boolean {
      return fieldConflict.isArrayConflict()
    }
    
    // 'value' attribute on TextCell (id=FieldName_Cell) at ImportWizard_ConflictScreen.pcf: line 63, column 52
    function valueRoot_22 () : java.lang.Object {
      return fieldConflict
    }
    
    // 'value' attribute on TextCell (id=FieldName_Cell) at ImportWizard_ConflictScreen.pcf: line 63, column 52
    function value_21 () : java.lang.String {
      return fieldConflict.FieldName
    }
    
    // 'value' attribute on TextCell (id=ExistingValue_Cell) at ImportWizard_ConflictScreen.pcf: line 69, column 56
    function value_27 () : java.lang.String {
      return fieldConflict.ExistingValue
    }
    
    // 'value' attribute on TextCell (id=ImportValue_Cell) at ImportWizard_ConflictScreen.pcf: line 75, column 54
    function value_34 () : java.lang.String {
      return fieldConflict.ImportValue
    }
    
    property get fieldConflict () : gw.api.admin.ImportDataFieldConflict {
      return getIteratedValue(1) as gw.api.admin.ImportDataFieldConflict
    }
    
    
  }
  
  
}