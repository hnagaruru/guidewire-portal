package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/ba/policy/CoveredAutoSymbolsPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class CoveredAutoSymbolsPanelSetExpressions {
  @javax.annotation.Generated("config/web/pcf/line/ba/policy/CoveredAutoSymbolsPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class CoveredAutoSymbolsPanelSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on ToolbarButton (id=EditAutoSymbols) at CoveredAutoSymbolsPanelSet.pcf: line 32, column 96
    function action_3 () : void {
      businessAutoLine.AutoSymbolsManualEditDate = java.util.Date.CurrentDate
    }
    
    // 'value' attribute on TextAreaCell (id=CustomAutoSymbol_Cell) at CoveredAutoSymbolsPanelSet.pcf: line 149, column 34
    function defaultSetter_116 (__VALUE_TO_SET :  java.lang.Object) : void {
      businessAutoLine.CustomAutoSymbolDesc = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'editable' attribute on TextAreaCell (id=CustomAutoSymbol_Cell) at CoveredAutoSymbolsPanelSet.pcf: line 149, column 34
    function editable_114 () : java.lang.Boolean {
      return perm.System.editautosymbol                                   and openForEdit                                    and businessAutoLine.isCUSSelected()
    }
    
    // 'editable' attribute on RowIterator at CoveredAutoSymbolsPanelSet.pcf: line 44, column 56
    function editable_25 () : java.lang.Boolean {
      return perm.System.editautosymbol and manualEditDate != null
    }
    
    // 'initialValue' attribute on Variable at CoveredAutoSymbolsPanelSet.pcf: line 16, column 45
    function initialValue_0 () : productmodel.BusinessAutoLine {
      return policyPeriod.BusinessAutoLine
    }
    
    // 'initialValue' attribute on Variable at CoveredAutoSymbolsPanelSet.pcf: line 21, column 30
    function initialValue_1 () : java.util.Date {
      return businessAutoLine.AutoSymbolsManualEditDate
    }
    
    // 'label' attribute on CheckBoxCell (id=Symbol3_Cell) at CoveredAutoSymbolsPanelSet.pcf: line 67, column 60
    function label_11 () : java.lang.Object {
      return typekey.CoverageSymbolType.TC_OPV.DisplayName
    }
    
    // 'label' attribute on CheckBoxCell (id=Symbol4_Cell) at CoveredAutoSymbolsPanelSet.pcf: line 72, column 60
    function label_13 () : java.lang.Object {
      return typekey.CoverageSymbolType.TC_OCV.DisplayName
    }
    
    // 'label' attribute on CheckBoxCell (id=Symbol5_Cell) at CoveredAutoSymbolsPanelSet.pcf: line 77, column 60
    function label_15 () : java.lang.Object {
      return typekey.CoverageSymbolType.TC_SRC.DisplayName
    }
    
    // 'label' attribute on CheckBoxCell (id=Symbol7_Cell) at CoveredAutoSymbolsPanelSet.pcf: line 82, column 60
    function label_17 () : java.lang.Object {
      return typekey.CoverageSymbolType.TC_DVO.DisplayName
    }
    
    // 'label' attribute on CheckBoxCell (id=Symbol8_Cell) at CoveredAutoSymbolsPanelSet.pcf: line 87, column 60
    function label_19 () : java.lang.Object {
      return typekey.CoverageSymbolType.TC_HVO.DisplayName
    }
    
    // 'label' attribute on CheckBoxCell (id=Symbol9_Cell) at CoveredAutoSymbolsPanelSet.pcf: line 92, column 60
    function label_21 () : java.lang.Object {
      return typekey.CoverageSymbolType.TC_NOV.DisplayName
    }
    
    // 'label' attribute on CheckBoxCell (id=Symbol10_Cell) at CoveredAutoSymbolsPanelSet.pcf: line 97, column 59
    function label_23 () : java.lang.Object {
      return typekey.CoverageSymbolType.TC_CUS.DisplayName
    }
    
    // 'label' attribute on CheckBoxCell (id=Symbol1_Cell) at CoveredAutoSymbolsPanelSet.pcf: line 57, column 60
    function label_7 () : java.lang.Object {
      return typekey.CoverageSymbolType.TC_ANY.DisplayName
    }
    
    // 'label' attribute on CheckBoxCell (id=Symbol2_Cell) at CoveredAutoSymbolsPanelSet.pcf: line 62, column 60
    function label_9 () : java.lang.Object {
      return typekey.CoverageSymbolType.TC_OVO.DisplayName
    }
    
    // 'sortBy' attribute on IteratorSort at CoveredAutoSymbolsPanelSet.pcf: line 126, column 36
    function sortBy_102 (symbol :  typekey.CoverageSymbolType) : java.lang.Object {
      return symbol.Priority
    }
    
    // 'sortBy' attribute on IteratorSort at CoveredAutoSymbolsPanelSet.pcf: line 47, column 32
    function sortBy_5 (coverageSymbolGroup :  entity.CoverageSymbolGroup) : java.lang.Object {
      return coverageSymbolGroup.Pattern.Priority
    }
    
    // 'value' attribute on CheckBoxCell (id=Symbol2_Cell) at CoveredAutoSymbolsPanelSet.pcf: line 62, column 60
    function sortValue_10 (coverageSymbolGroup :  entity.CoverageSymbolGroup) : java.lang.Object {
      return coverageSymbolGroup.OVOSelected
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at CoveredAutoSymbolsPanelSet.pcf: line 131, column 51
    function sortValue_103 (symbol :  typekey.CoverageSymbolType) : java.lang.Object {
      return symbol.DisplayName
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at CoveredAutoSymbolsPanelSet.pcf: line 136, column 36
    function sortValue_104 (symbol :  typekey.CoverageSymbolType) : java.lang.Object {
      return symbol.Description
    }
    
    // 'value' attribute on CheckBoxCell (id=Symbol3_Cell) at CoveredAutoSymbolsPanelSet.pcf: line 67, column 60
    function sortValue_12 (coverageSymbolGroup :  entity.CoverageSymbolGroup) : java.lang.Object {
      return coverageSymbolGroup.OPVSelected
    }
    
    // 'value' attribute on CheckBoxCell (id=Symbol4_Cell) at CoveredAutoSymbolsPanelSet.pcf: line 72, column 60
    function sortValue_14 (coverageSymbolGroup :  entity.CoverageSymbolGroup) : java.lang.Object {
      return coverageSymbolGroup.OCVSelected
    }
    
    // 'value' attribute on CheckBoxCell (id=Symbol5_Cell) at CoveredAutoSymbolsPanelSet.pcf: line 77, column 60
    function sortValue_16 (coverageSymbolGroup :  entity.CoverageSymbolGroup) : java.lang.Object {
      return coverageSymbolGroup.SRCSelected
    }
    
    // 'value' attribute on CheckBoxCell (id=Symbol7_Cell) at CoveredAutoSymbolsPanelSet.pcf: line 82, column 60
    function sortValue_18 (coverageSymbolGroup :  entity.CoverageSymbolGroup) : java.lang.Object {
      return coverageSymbolGroup.DVOSelected
    }
    
    // 'value' attribute on CheckBoxCell (id=Symbol8_Cell) at CoveredAutoSymbolsPanelSet.pcf: line 87, column 60
    function sortValue_20 (coverageSymbolGroup :  entity.CoverageSymbolGroup) : java.lang.Object {
      return coverageSymbolGroup.HVOSelected
    }
    
    // 'value' attribute on CheckBoxCell (id=Symbol9_Cell) at CoveredAutoSymbolsPanelSet.pcf: line 92, column 60
    function sortValue_22 (coverageSymbolGroup :  entity.CoverageSymbolGroup) : java.lang.Object {
      return coverageSymbolGroup.NOVSelected
    }
    
    // 'value' attribute on CheckBoxCell (id=Symbol10_Cell) at CoveredAutoSymbolsPanelSet.pcf: line 97, column 59
    function sortValue_24 (coverageSymbolGroup :  entity.CoverageSymbolGroup) : java.lang.Object {
      return coverageSymbolGroup.CUSSelected
    }
    
    // 'value' attribute on TextCell (id=CoveredAutoSymbolGrpName_Cell) at CoveredAutoSymbolsPanelSet.pcf: line 52, column 61
    function sortValue_6 (coverageSymbolGroup :  entity.CoverageSymbolGroup) : java.lang.Object {
      return coverageSymbolGroup.Pattern.Name
    }
    
    // 'value' attribute on CheckBoxCell (id=Symbol1_Cell) at CoveredAutoSymbolsPanelSet.pcf: line 57, column 60
    function sortValue_8 (coverageSymbolGroup :  entity.CoverageSymbolGroup) : java.lang.Object {
      return coverageSymbolGroup.ANYSelected
    }
    
    // 'value' attribute on TextAreaCell (id=CustomAutoSymbol_Cell) at CoveredAutoSymbolsPanelSet.pcf: line 149, column 34
    function valueRoot_117 () : java.lang.Object {
      return businessAutoLine
    }
    
    // 'value' attribute on RowIterator at CoveredAutoSymbolsPanelSet.pcf: line 44, column 56
    function value_101 () : entity.CoverageSymbolGroup[] {
      return businessAutoLine.CoverageSymbolGroups
    }
    
    // 'value' attribute on RowIterator at CoveredAutoSymbolsPanelSet.pcf: line 123, column 60
    function value_111 () : typekey.CoverageSymbolType[] {
      return CoverageSymbolType.getTypeKeys(false)?.toTypedArray()
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at CoveredAutoSymbolsPanelSet.pcf: line 143, column 51
    function value_112 () : java.lang.Object {
      return null
    }
    
    // 'value' attribute on TextAreaCell (id=CustomAutoSymbol_Cell) at CoveredAutoSymbolsPanelSet.pcf: line 149, column 34
    function value_115 () : java.lang.String {
      return businessAutoLine.CustomAutoSymbolDesc
    }
    
    // 'visible' attribute on ToolbarButton (id=EditAutoSymbols) at CoveredAutoSymbolsPanelSet.pcf: line 32, column 96
    function visible_2 () : java.lang.Boolean {
      return perm.System.editautosymbol and manualEditDate == null and openForEdit
    }
    
    // 'visible' attribute on Verbatim at CoveredAutoSymbolsPanelSet.pcf: line 37, column 29
    function visible_4 () : java.lang.Boolean {
      return manualEditDate != null
    }
    
    property get businessAutoLine () : productmodel.BusinessAutoLine {
      return getVariableValue("businessAutoLine", 0) as productmodel.BusinessAutoLine
    }
    
    property set businessAutoLine ($arg :  productmodel.BusinessAutoLine) {
      setVariableValue("businessAutoLine", 0, $arg)
    }
    
    property get manualEditDate () : java.util.Date {
      return getVariableValue("manualEditDate", 0) as java.util.Date
    }
    
    property set manualEditDate ($arg :  java.util.Date) {
      setVariableValue("manualEditDate", 0, $arg)
    }
    
    property get openForEdit () : boolean {
      return getRequireValue("openForEdit", 0) as java.lang.Boolean
    }
    
    property set openForEdit ($arg :  boolean) {
      setRequireValue("openForEdit", 0, $arg)
    }
    
    property get policyPeriod () : PolicyPeriod {
      return getRequireValue("policyPeriod", 0) as PolicyPeriod
    }
    
    property set policyPeriod ($arg :  PolicyPeriod) {
      setRequireValue("policyPeriod", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/ba/policy/CoveredAutoSymbolsPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry2ExpressionsImpl extends CoveredAutoSymbolsPanelSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at CoveredAutoSymbolsPanelSet.pcf: line 131, column 51
    function valueRoot_106 () : java.lang.Object {
      return symbol
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at CoveredAutoSymbolsPanelSet.pcf: line 131, column 51
    function value_105 () : java.lang.String {
      return symbol.DisplayName
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at CoveredAutoSymbolsPanelSet.pcf: line 136, column 36
    function value_108 () : java.lang.String {
      return symbol.Description
    }
    
    property get symbol () : typekey.CoverageSymbolType {
      return getIteratedValue(1) as typekey.CoverageSymbolType
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/ba/policy/CoveredAutoSymbolsPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends CoveredAutoSymbolsPanelSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on CheckBoxCell (id=Symbol1_Cell) at CoveredAutoSymbolsPanelSet.pcf: line 57, column 60
    function defaultSetter_32 (__VALUE_TO_SET :  java.lang.Object) : void {
      coverageSymbolGroup.ANYSelected = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on CheckBoxCell (id=Symbol2_Cell) at CoveredAutoSymbolsPanelSet.pcf: line 62, column 60
    function defaultSetter_40 (__VALUE_TO_SET :  java.lang.Object) : void {
      coverageSymbolGroup.OVOSelected = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on CheckBoxCell (id=Symbol3_Cell) at CoveredAutoSymbolsPanelSet.pcf: line 67, column 60
    function defaultSetter_48 (__VALUE_TO_SET :  java.lang.Object) : void {
      coverageSymbolGroup.OPVSelected = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on CheckBoxCell (id=Symbol4_Cell) at CoveredAutoSymbolsPanelSet.pcf: line 72, column 60
    function defaultSetter_56 (__VALUE_TO_SET :  java.lang.Object) : void {
      coverageSymbolGroup.OCVSelected = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on CheckBoxCell (id=Symbol5_Cell) at CoveredAutoSymbolsPanelSet.pcf: line 77, column 60
    function defaultSetter_64 (__VALUE_TO_SET :  java.lang.Object) : void {
      coverageSymbolGroup.SRCSelected = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on CheckBoxCell (id=Symbol7_Cell) at CoveredAutoSymbolsPanelSet.pcf: line 82, column 60
    function defaultSetter_72 (__VALUE_TO_SET :  java.lang.Object) : void {
      coverageSymbolGroup.DVOSelected = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on CheckBoxCell (id=Symbol8_Cell) at CoveredAutoSymbolsPanelSet.pcf: line 87, column 60
    function defaultSetter_80 (__VALUE_TO_SET :  java.lang.Object) : void {
      coverageSymbolGroup.HVOSelected = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on CheckBoxCell (id=Symbol9_Cell) at CoveredAutoSymbolsPanelSet.pcf: line 92, column 60
    function defaultSetter_88 (__VALUE_TO_SET :  java.lang.Object) : void {
      coverageSymbolGroup.NOVSelected = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on CheckBoxCell (id=Symbol10_Cell) at CoveredAutoSymbolsPanelSet.pcf: line 97, column 59
    function defaultSetter_96 (__VALUE_TO_SET :  java.lang.Object) : void {
      coverageSymbolGroup.CUSSelected = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'editable' attribute on CheckBoxCell (id=Symbol1_Cell) at CoveredAutoSymbolsPanelSet.pcf: line 57, column 60
    function editable_29 () : java.lang.Boolean {
      return coverageSymbolGroup.ANYAvailable
    }
    
    // 'editable' attribute on CheckBoxCell (id=Symbol2_Cell) at CoveredAutoSymbolsPanelSet.pcf: line 62, column 60
    function editable_37 () : java.lang.Boolean {
      return coverageSymbolGroup.OVOAvailable
    }
    
    // 'editable' attribute on CheckBoxCell (id=Symbol3_Cell) at CoveredAutoSymbolsPanelSet.pcf: line 67, column 60
    function editable_45 () : java.lang.Boolean {
      return coverageSymbolGroup.OPVAvailable
    }
    
    // 'editable' attribute on CheckBoxCell (id=Symbol4_Cell) at CoveredAutoSymbolsPanelSet.pcf: line 72, column 60
    function editable_53 () : java.lang.Boolean {
      return coverageSymbolGroup.OCVAvailable
    }
    
    // 'editable' attribute on CheckBoxCell (id=Symbol5_Cell) at CoveredAutoSymbolsPanelSet.pcf: line 77, column 60
    function editable_61 () : java.lang.Boolean {
      return coverageSymbolGroup.SRCAvailable
    }
    
    // 'editable' attribute on CheckBoxCell (id=Symbol7_Cell) at CoveredAutoSymbolsPanelSet.pcf: line 82, column 60
    function editable_69 () : java.lang.Boolean {
      return coverageSymbolGroup.DVOAvailable
    }
    
    // 'editable' attribute on CheckBoxCell (id=Symbol8_Cell) at CoveredAutoSymbolsPanelSet.pcf: line 87, column 60
    function editable_77 () : java.lang.Boolean {
      return coverageSymbolGroup.HVOAvailable
    }
    
    // 'editable' attribute on CheckBoxCell (id=Symbol9_Cell) at CoveredAutoSymbolsPanelSet.pcf: line 92, column 60
    function editable_85 () : java.lang.Boolean {
      return coverageSymbolGroup.NOVAvailable
    }
    
    // 'editable' attribute on CheckBoxCell (id=Symbol10_Cell) at CoveredAutoSymbolsPanelSet.pcf: line 97, column 59
    function editable_93 () : java.lang.Boolean {
      return coverageSymbolGroup.CUSAvailable
    }
    
    // 'label' attribute on CheckBoxCell (id=Symbol1_Cell) at CoveredAutoSymbolsPanelSet.pcf: line 57, column 60
    function label_30 () : java.lang.Object {
      return typekey.CoverageSymbolType.TC_ANY.DisplayName
    }
    
    // 'label' attribute on CheckBoxCell (id=Symbol2_Cell) at CoveredAutoSymbolsPanelSet.pcf: line 62, column 60
    function label_38 () : java.lang.Object {
      return typekey.CoverageSymbolType.TC_OVO.DisplayName
    }
    
    // 'label' attribute on CheckBoxCell (id=Symbol3_Cell) at CoveredAutoSymbolsPanelSet.pcf: line 67, column 60
    function label_46 () : java.lang.Object {
      return typekey.CoverageSymbolType.TC_OPV.DisplayName
    }
    
    // 'label' attribute on CheckBoxCell (id=Symbol4_Cell) at CoveredAutoSymbolsPanelSet.pcf: line 72, column 60
    function label_54 () : java.lang.Object {
      return typekey.CoverageSymbolType.TC_OCV.DisplayName
    }
    
    // 'label' attribute on CheckBoxCell (id=Symbol5_Cell) at CoveredAutoSymbolsPanelSet.pcf: line 77, column 60
    function label_62 () : java.lang.Object {
      return typekey.CoverageSymbolType.TC_SRC.DisplayName
    }
    
    // 'label' attribute on CheckBoxCell (id=Symbol7_Cell) at CoveredAutoSymbolsPanelSet.pcf: line 82, column 60
    function label_70 () : java.lang.Object {
      return typekey.CoverageSymbolType.TC_DVO.DisplayName
    }
    
    // 'label' attribute on CheckBoxCell (id=Symbol8_Cell) at CoveredAutoSymbolsPanelSet.pcf: line 87, column 60
    function label_78 () : java.lang.Object {
      return typekey.CoverageSymbolType.TC_HVO.DisplayName
    }
    
    // 'label' attribute on CheckBoxCell (id=Symbol9_Cell) at CoveredAutoSymbolsPanelSet.pcf: line 92, column 60
    function label_86 () : java.lang.Object {
      return typekey.CoverageSymbolType.TC_NOV.DisplayName
    }
    
    // 'label' attribute on CheckBoxCell (id=Symbol10_Cell) at CoveredAutoSymbolsPanelSet.pcf: line 97, column 59
    function label_94 () : java.lang.Object {
      return typekey.CoverageSymbolType.TC_CUS.DisplayName
    }
    
    // 'value' attribute on TextCell (id=CoveredAutoSymbolGrpName_Cell) at CoveredAutoSymbolsPanelSet.pcf: line 52, column 61
    function valueRoot_27 () : java.lang.Object {
      return coverageSymbolGroup.Pattern
    }
    
    // 'value' attribute on CheckBoxCell (id=Symbol1_Cell) at CoveredAutoSymbolsPanelSet.pcf: line 57, column 60
    function valueRoot_33 () : java.lang.Object {
      return coverageSymbolGroup
    }
    
    // 'value' attribute on TextCell (id=CoveredAutoSymbolGrpName_Cell) at CoveredAutoSymbolsPanelSet.pcf: line 52, column 61
    function value_26 () : java.lang.String {
      return coverageSymbolGroup.Pattern.Name
    }
    
    // 'value' attribute on CheckBoxCell (id=Symbol1_Cell) at CoveredAutoSymbolsPanelSet.pcf: line 57, column 60
    function value_31 () : java.lang.Boolean {
      return coverageSymbolGroup.ANYSelected
    }
    
    // 'value' attribute on CheckBoxCell (id=Symbol2_Cell) at CoveredAutoSymbolsPanelSet.pcf: line 62, column 60
    function value_39 () : java.lang.Boolean {
      return coverageSymbolGroup.OVOSelected
    }
    
    // 'value' attribute on CheckBoxCell (id=Symbol3_Cell) at CoveredAutoSymbolsPanelSet.pcf: line 67, column 60
    function value_47 () : java.lang.Boolean {
      return coverageSymbolGroup.OPVSelected
    }
    
    // 'value' attribute on CheckBoxCell (id=Symbol4_Cell) at CoveredAutoSymbolsPanelSet.pcf: line 72, column 60
    function value_55 () : java.lang.Boolean {
      return coverageSymbolGroup.OCVSelected
    }
    
    // 'value' attribute on CheckBoxCell (id=Symbol5_Cell) at CoveredAutoSymbolsPanelSet.pcf: line 77, column 60
    function value_63 () : java.lang.Boolean {
      return coverageSymbolGroup.SRCSelected
    }
    
    // 'value' attribute on CheckBoxCell (id=Symbol7_Cell) at CoveredAutoSymbolsPanelSet.pcf: line 82, column 60
    function value_71 () : java.lang.Boolean {
      return coverageSymbolGroup.DVOSelected
    }
    
    // 'value' attribute on CheckBoxCell (id=Symbol8_Cell) at CoveredAutoSymbolsPanelSet.pcf: line 87, column 60
    function value_79 () : java.lang.Boolean {
      return coverageSymbolGroup.HVOSelected
    }
    
    // 'value' attribute on CheckBoxCell (id=Symbol9_Cell) at CoveredAutoSymbolsPanelSet.pcf: line 92, column 60
    function value_87 () : java.lang.Boolean {
      return coverageSymbolGroup.NOVSelected
    }
    
    // 'value' attribute on CheckBoxCell (id=Symbol10_Cell) at CoveredAutoSymbolsPanelSet.pcf: line 97, column 59
    function value_95 () : java.lang.Boolean {
      return coverageSymbolGroup.CUSSelected
    }
    
    property get coverageSymbolGroup () : entity.CoverageSymbolGroup {
      return getIteratedValue(1) as entity.CoverageSymbolGroup
    }
    
    
  }
  
  
}