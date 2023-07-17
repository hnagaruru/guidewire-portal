package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/importexport/ImportWizard_ArrayDiffPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ImportWizard_ArrayDiffPopupExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/importexport/ImportWizard_ArrayDiffPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ImportWizard_ArrayDiffPopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (arrayDifferences :  gw.api.admin.ImportDataArrayDifferences) : int {
      return 0
    }
    
    // 'canVisit' attribute on Popup (id=ImportWizard_ArrayDiffPopup) at ImportWizard_ArrayDiffPopup.pcf: line 9, column 85
    static function canVisit_20 (arrayDifferences :  gw.api.admin.ImportDataArrayDifferences) : java.lang.Boolean {
      return perm.User.importadmindata
    }
    
    // 'parent' attribute on Popup (id=ImportWizard_ArrayDiffPopup) at ImportWizard_ArrayDiffPopup.pcf: line 9, column 85
    static function parent_21 (arrayDifferences :  gw.api.admin.ImportDataArrayDifferences) : pcf.api.Destination {
      return pcf.ImportWizard.createDestination()
    }
    
    // 'value' attribute on RowIterator at ImportWizard_ArrayDiffPopup.pcf: line 97, column 59
    function value_18 () : gw.pl.persistence.core.Bean[] {
      return arrayDifferences.AddedElements
    }
    
    // 'value' attribute on CellIterator (id=headerCells) at ImportWizard_ArrayDiffPopup.pcf: line 39, column 50
    function value_4 () : java.lang.String[] {
      return arrayDifferences.OrderedFieldNames
    }
    
    // 'value' attribute on RowIterator at ImportWizard_ArrayDiffPopup.pcf: line 51, column 59
    function value_8 () : gw.pl.persistence.core.Bean[] {
      return arrayDifferences.RemovedElements
    }
    
    // 'visible' attribute on Label at ImportWizard_ArrayDiffPopup.pcf: line 22, column 63
    function visible_0 () : java.lang.Boolean {
      return !arrayDifferences.hasRemovedElements()
    }
    
    // 'visible' attribute on Label at ImportWizard_ArrayDiffPopup.pcf: line 25, column 62
    function visible_1 () : java.lang.Boolean {
      return arrayDifferences.hasRemovedElements()
    }
    
    // 'visible' attribute on Label at ImportWizard_ArrayDiffPopup.pcf: line 68, column 61
    function visible_10 () : java.lang.Boolean {
      return !arrayDifferences.hasAddedElements()
    }
    
    // 'visible' attribute on Label at ImportWizard_ArrayDiffPopup.pcf: line 71, column 60
    function visible_11 () : java.lang.Boolean {
      return arrayDifferences.hasAddedElements()
    }
    
    override property get CurrentLocation () : pcf.ImportWizard_ArrayDiffPopup {
      return super.CurrentLocation as pcf.ImportWizard_ArrayDiffPopup
    }
    
    property get arrayDifferences () : gw.api.admin.ImportDataArrayDifferences {
      return getVariableValue("arrayDifferences", 0) as gw.api.admin.ImportDataArrayDifferences
    }
    
    property set arrayDifferences ($arg :  gw.api.admin.ImportDataArrayDifferences) {
      setVariableValue("arrayDifferences", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/admin/importexport/ImportWizard_ArrayDiffPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry2ExpressionsImpl extends ImportWizard_ArrayDiffPopupExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on CellIterator at ImportWizard_ArrayDiffPopup.pcf: line 56, column 52
    function value_7 () : java.lang.String[] {
      return arrayDifferences.OrderedFieldNames
    }
    
    property get element () : gw.pl.persistence.core.Bean {
      return getIteratedValue(1) as gw.pl.persistence.core.Bean
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/admin/importexport/ImportWizard_ArrayDiffPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry3ExpressionsImpl extends IteratorEntry2ExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=ValueCell_Cell) at ImportWizard_ArrayDiffPopup.pcf: line 60, column 53
    function value_5 () : java.lang.Object {
      return element.getFieldValue(field)
    }
    
    property get field () : java.lang.String {
      return getIteratedValue(2) as java.lang.String
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/admin/importexport/ImportWizard_ArrayDiffPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry4ExpressionsImpl extends ImportWizard_ArrayDiffPopupExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=header_Cell) at ImportWizard_ArrayDiffPopup.pcf: line 88, column 36
    function value_12 () : java.lang.String {
      return field
    }
    
    property get field () : java.lang.String {
      return getIteratedValue(1) as java.lang.String
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/admin/importexport/ImportWizard_ArrayDiffPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry5ExpressionsImpl extends ImportWizard_ArrayDiffPopupExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on CellIterator at ImportWizard_ArrayDiffPopup.pcf: line 102, column 52
    function value_17 () : java.lang.String[] {
      return arrayDifferences.OrderedFieldNames
    }
    
    property get element () : gw.pl.persistence.core.Bean {
      return getIteratedValue(1) as gw.pl.persistence.core.Bean
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/admin/importexport/ImportWizard_ArrayDiffPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry6ExpressionsImpl extends IteratorEntry5ExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=ValueCell_Cell) at ImportWizard_ArrayDiffPopup.pcf: line 106, column 53
    function value_15 () : java.lang.Object {
      return element.getFieldValue(field)
    }
    
    property get field () : java.lang.String {
      return getIteratedValue(2) as java.lang.String
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/admin/importexport/ImportWizard_ArrayDiffPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends ImportWizard_ArrayDiffPopupExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=field_Cell) at ImportWizard_ArrayDiffPopup.pcf: line 42, column 36
    function value_2 () : java.lang.String {
      return field
    }
    
    property get field () : java.lang.String {
      return getIteratedValue(1) as java.lang.String
    }
    
    
  }
  
  
}