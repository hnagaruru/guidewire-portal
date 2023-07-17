package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/tools/apd/APDCoverableFieldsPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class APDCoverableFieldsPanelSetExpressions {
  @javax.annotation.Generated("config/web/pcf/tools/apd/APDCoverableFieldsPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class APDCoverableFieldsPanelSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
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
    
    property get inDevelopMode () : boolean {
      return getRequireValue("inDevelopMode", 0) as java.lang.Boolean
    }
    
    property set inDevelopMode ($arg :  boolean) {
      setRequireValue("inDevelopMode", 0, $arg)
    }
    
    property get openForEdit () : boolean {
      return getRequireValue("openForEdit", 0) as java.lang.Boolean
    }
    
    property set openForEdit ($arg :  boolean) {
      setRequireValue("openForEdit", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/tools/apd/APDCoverableFieldsPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends ListDetailPanelExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextCell (id=Tags_Cell) at APDCoverableFieldsPanelSet.pcf: line 131, column 34
    function action_101 () : void {
      APDTagPopup.push(field, openForEdit)
    }
    
    // 'action' attribute on MenuItem (id=DropDownDefinition) at APDCoverableFieldsPanelSet.pcf: line 65, column 42
    function action_13 () : void {
      APDDropDownDefinitionPopup.push(field, false, edition, CurrentLocation.InEditMode)
    }
    
    // 'action' attribute on MenuItem (id=MoveUp) at APDCoverableFieldsPanelSet.pcf: line 177, column 94
    function action_134 () : void {
      field.moveUp()
    }
    
    // 'action' attribute on MenuItem (id=MoveDown) at APDCoverableFieldsPanelSet.pcf: line 182, column 96
    function action_136 () : void {
      field.moveDown()
    }
    
    // 'action' attribute on RangeCell (id=Usage_Cell) at APDCoverableFieldsPanelSet.pcf: line 99, column 51
    function action_36 () : void {
      APDAttributeRulePopup.push(field.getEditionRule(edition, APDRuleType.TC_EXISTENCE), field, APDRuleType.TC_EXISTENCE, edition, openForEdit)
    }
    
    // 'action' attribute on TextCell (id=Tags_Cell) at APDCoverableFieldsPanelSet.pcf: line 131, column 34
    function action_dest_102 () : pcf.api.Destination {
      return pcf.APDTagPopup.createDestination(field, openForEdit)
    }
    
    // 'action' attribute on MenuItem (id=DropDownDefinition) at APDCoverableFieldsPanelSet.pcf: line 65, column 42
    function action_dest_14 () : pcf.api.Destination {
      return pcf.APDDropDownDefinitionPopup.createDestination(field, false, edition, CurrentLocation.InEditMode)
    }
    
    // 'action' attribute on RangeCell (id=Usage_Cell) at APDCoverableFieldsPanelSet.pcf: line 99, column 51
    function action_dest_37 () : pcf.api.Destination {
      return pcf.APDAttributeRulePopup.createDestination(field.getEditionRule(edition, APDRuleType.TC_EXISTENCE), field, APDRuleType.TC_EXISTENCE, edition, openForEdit)
    }
    
    // 'available' attribute on MenuItem (id=MoveUp) at APDCoverableFieldsPanelSet.pcf: line 177, column 94
    function available_133 () : java.lang.Boolean {
      return field.Sequence != 1
    }
    
    // 'available' attribute on MenuItem (id=MoveDown) at APDCoverableFieldsPanelSet.pcf: line 182, column 96
    function available_135 () : java.lang.Boolean {
      return field.Sequence != coverable.Fields.Count
    }
    
    // 'available' attribute on CheckBoxCell (id=Identifier_Cell) at APDCoverableFieldsPanelSet.pcf: line 80, column 43
    function available_23 () : java.lang.Boolean {
      return APDFieldType.TF_IDENTIFIERTYPES.TypeKeys.hasMatch(\tk -> tk == field.Type)
    }
    
    // 'condition' attribute on ToolbarFlag at APDCoverableFieldsPanelSet.pcf: line 47, column 33
    function condition_6 () : java.lang.Boolean {
      return not field.Jurisdiction
    }
    
    // 'def' attribute on ModalCellRef (id=DefaultValue) at APDCoverableFieldsPanelSet.pcf: line 107, column 35
    function def_onEnter_43 (def :  pcf.APDAttributeDefaultValue_bigdecimal) : void {
      def.onEnter(field, APDRuleType.TC_DEFAULT, null, edition, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=DefaultValue) at APDCoverableFieldsPanelSet.pcf: line 107, column 35
    function def_onEnter_45 (def :  pcf.APDAttributeDefaultValue_boolean) : void {
      def.onEnter(field, APDRuleType.TC_DEFAULT, null, edition, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=DefaultValue) at APDCoverableFieldsPanelSet.pcf: line 107, column 35
    function def_onEnter_47 (def :  pcf.APDAttributeDefaultValue_calculated) : void {
      def.onEnter(field, APDRuleType.TC_DEFAULT, null, edition, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=DefaultValue) at APDCoverableFieldsPanelSet.pcf: line 107, column 35
    function def_onEnter_49 (def :  pcf.APDAttributeDefaultValue_date) : void {
      def.onEnter(field, APDRuleType.TC_DEFAULT, null, edition, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=DefaultValue) at APDCoverableFieldsPanelSet.pcf: line 107, column 35
    function def_onEnter_51 (def :  pcf.APDAttributeDefaultValue_default) : void {
      def.onEnter(field, APDRuleType.TC_DEFAULT, null, edition, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=DefaultValue) at APDCoverableFieldsPanelSet.pcf: line 107, column 35
    function def_onEnter_53 (def :  pcf.APDAttributeDefaultValue_integer) : void {
      def.onEnter(field, APDRuleType.TC_DEFAULT, null, edition, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=DefaultValue) at APDCoverableFieldsPanelSet.pcf: line 107, column 35
    function def_onEnter_55 (def :  pcf.APDAttributeDefaultValue_money) : void {
      def.onEnter(field, APDRuleType.TC_DEFAULT, null, edition, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=DefaultValue) at APDCoverableFieldsPanelSet.pcf: line 107, column 35
    function def_onEnter_57 (def :  pcf.APDAttributeDefaultValue_none) : void {
      def.onEnter(field, APDRuleType.TC_DEFAULT, null, edition, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=DefaultValue) at APDCoverableFieldsPanelSet.pcf: line 107, column 35
    function def_onEnter_59 (def :  pcf.APDAttributeDefaultValue_typekey) : void {
      def.onEnter(field, APDRuleType.TC_DEFAULT, null, edition, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=MinimumValue) at APDCoverableFieldsPanelSet.pcf: line 115, column 35
    function def_onEnter_62 (def :  pcf.APDAttributeDefaultValue_bigdecimal) : void {
      def.onEnter(field, APDRuleType.TC_MIN, null, edition, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=MinimumValue) at APDCoverableFieldsPanelSet.pcf: line 115, column 35
    function def_onEnter_64 (def :  pcf.APDAttributeDefaultValue_boolean) : void {
      def.onEnter(field, APDRuleType.TC_MIN, null, edition, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=MinimumValue) at APDCoverableFieldsPanelSet.pcf: line 115, column 35
    function def_onEnter_66 (def :  pcf.APDAttributeDefaultValue_calculated) : void {
      def.onEnter(field, APDRuleType.TC_MIN, null, edition, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=MinimumValue) at APDCoverableFieldsPanelSet.pcf: line 115, column 35
    function def_onEnter_68 (def :  pcf.APDAttributeDefaultValue_date) : void {
      def.onEnter(field, APDRuleType.TC_MIN, null, edition, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=MinimumValue) at APDCoverableFieldsPanelSet.pcf: line 115, column 35
    function def_onEnter_70 (def :  pcf.APDAttributeDefaultValue_default) : void {
      def.onEnter(field, APDRuleType.TC_MIN, null, edition, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=MinimumValue) at APDCoverableFieldsPanelSet.pcf: line 115, column 35
    function def_onEnter_72 (def :  pcf.APDAttributeDefaultValue_integer) : void {
      def.onEnter(field, APDRuleType.TC_MIN, null, edition, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=MinimumValue) at APDCoverableFieldsPanelSet.pcf: line 115, column 35
    function def_onEnter_74 (def :  pcf.APDAttributeDefaultValue_money) : void {
      def.onEnter(field, APDRuleType.TC_MIN, null, edition, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=MinimumValue) at APDCoverableFieldsPanelSet.pcf: line 115, column 35
    function def_onEnter_76 (def :  pcf.APDAttributeDefaultValue_none) : void {
      def.onEnter(field, APDRuleType.TC_MIN, null, edition, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=MinimumValue) at APDCoverableFieldsPanelSet.pcf: line 115, column 35
    function def_onEnter_78 (def :  pcf.APDAttributeDefaultValue_typekey) : void {
      def.onEnter(field, APDRuleType.TC_MIN, null, edition, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=MaximumValue) at APDCoverableFieldsPanelSet.pcf: line 123, column 35
    function def_onEnter_81 (def :  pcf.APDAttributeDefaultValue_bigdecimal) : void {
      def.onEnter(field, APDRuleType.TC_MAX, null, edition, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=MaximumValue) at APDCoverableFieldsPanelSet.pcf: line 123, column 35
    function def_onEnter_83 (def :  pcf.APDAttributeDefaultValue_boolean) : void {
      def.onEnter(field, APDRuleType.TC_MAX, null, edition, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=MaximumValue) at APDCoverableFieldsPanelSet.pcf: line 123, column 35
    function def_onEnter_85 (def :  pcf.APDAttributeDefaultValue_calculated) : void {
      def.onEnter(field, APDRuleType.TC_MAX, null, edition, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=MaximumValue) at APDCoverableFieldsPanelSet.pcf: line 123, column 35
    function def_onEnter_87 (def :  pcf.APDAttributeDefaultValue_date) : void {
      def.onEnter(field, APDRuleType.TC_MAX, null, edition, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=MaximumValue) at APDCoverableFieldsPanelSet.pcf: line 123, column 35
    function def_onEnter_89 (def :  pcf.APDAttributeDefaultValue_default) : void {
      def.onEnter(field, APDRuleType.TC_MAX, null, edition, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=MaximumValue) at APDCoverableFieldsPanelSet.pcf: line 123, column 35
    function def_onEnter_91 (def :  pcf.APDAttributeDefaultValue_integer) : void {
      def.onEnter(field, APDRuleType.TC_MAX, null, edition, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=MaximumValue) at APDCoverableFieldsPanelSet.pcf: line 123, column 35
    function def_onEnter_93 (def :  pcf.APDAttributeDefaultValue_money) : void {
      def.onEnter(field, APDRuleType.TC_MAX, null, edition, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=MaximumValue) at APDCoverableFieldsPanelSet.pcf: line 123, column 35
    function def_onEnter_95 (def :  pcf.APDAttributeDefaultValue_none) : void {
      def.onEnter(field, APDRuleType.TC_MAX, null, edition, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=MaximumValue) at APDCoverableFieldsPanelSet.pcf: line 123, column 35
    function def_onEnter_97 (def :  pcf.APDAttributeDefaultValue_typekey) : void {
      def.onEnter(field, APDRuleType.TC_MAX, null, edition, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=DefaultValue) at APDCoverableFieldsPanelSet.pcf: line 107, column 35
    function def_refreshVariables_44 (def :  pcf.APDAttributeDefaultValue_bigdecimal) : void {
      def.refreshVariables(field, APDRuleType.TC_DEFAULT, null, edition, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=DefaultValue) at APDCoverableFieldsPanelSet.pcf: line 107, column 35
    function def_refreshVariables_46 (def :  pcf.APDAttributeDefaultValue_boolean) : void {
      def.refreshVariables(field, APDRuleType.TC_DEFAULT, null, edition, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=DefaultValue) at APDCoverableFieldsPanelSet.pcf: line 107, column 35
    function def_refreshVariables_48 (def :  pcf.APDAttributeDefaultValue_calculated) : void {
      def.refreshVariables(field, APDRuleType.TC_DEFAULT, null, edition, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=DefaultValue) at APDCoverableFieldsPanelSet.pcf: line 107, column 35
    function def_refreshVariables_50 (def :  pcf.APDAttributeDefaultValue_date) : void {
      def.refreshVariables(field, APDRuleType.TC_DEFAULT, null, edition, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=DefaultValue) at APDCoverableFieldsPanelSet.pcf: line 107, column 35
    function def_refreshVariables_52 (def :  pcf.APDAttributeDefaultValue_default) : void {
      def.refreshVariables(field, APDRuleType.TC_DEFAULT, null, edition, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=DefaultValue) at APDCoverableFieldsPanelSet.pcf: line 107, column 35
    function def_refreshVariables_54 (def :  pcf.APDAttributeDefaultValue_integer) : void {
      def.refreshVariables(field, APDRuleType.TC_DEFAULT, null, edition, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=DefaultValue) at APDCoverableFieldsPanelSet.pcf: line 107, column 35
    function def_refreshVariables_56 (def :  pcf.APDAttributeDefaultValue_money) : void {
      def.refreshVariables(field, APDRuleType.TC_DEFAULT, null, edition, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=DefaultValue) at APDCoverableFieldsPanelSet.pcf: line 107, column 35
    function def_refreshVariables_58 (def :  pcf.APDAttributeDefaultValue_none) : void {
      def.refreshVariables(field, APDRuleType.TC_DEFAULT, null, edition, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=DefaultValue) at APDCoverableFieldsPanelSet.pcf: line 107, column 35
    function def_refreshVariables_60 (def :  pcf.APDAttributeDefaultValue_typekey) : void {
      def.refreshVariables(field, APDRuleType.TC_DEFAULT, null, edition, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=MinimumValue) at APDCoverableFieldsPanelSet.pcf: line 115, column 35
    function def_refreshVariables_63 (def :  pcf.APDAttributeDefaultValue_bigdecimal) : void {
      def.refreshVariables(field, APDRuleType.TC_MIN, null, edition, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=MinimumValue) at APDCoverableFieldsPanelSet.pcf: line 115, column 35
    function def_refreshVariables_65 (def :  pcf.APDAttributeDefaultValue_boolean) : void {
      def.refreshVariables(field, APDRuleType.TC_MIN, null, edition, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=MinimumValue) at APDCoverableFieldsPanelSet.pcf: line 115, column 35
    function def_refreshVariables_67 (def :  pcf.APDAttributeDefaultValue_calculated) : void {
      def.refreshVariables(field, APDRuleType.TC_MIN, null, edition, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=MinimumValue) at APDCoverableFieldsPanelSet.pcf: line 115, column 35
    function def_refreshVariables_69 (def :  pcf.APDAttributeDefaultValue_date) : void {
      def.refreshVariables(field, APDRuleType.TC_MIN, null, edition, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=MinimumValue) at APDCoverableFieldsPanelSet.pcf: line 115, column 35
    function def_refreshVariables_71 (def :  pcf.APDAttributeDefaultValue_default) : void {
      def.refreshVariables(field, APDRuleType.TC_MIN, null, edition, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=MinimumValue) at APDCoverableFieldsPanelSet.pcf: line 115, column 35
    function def_refreshVariables_73 (def :  pcf.APDAttributeDefaultValue_integer) : void {
      def.refreshVariables(field, APDRuleType.TC_MIN, null, edition, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=MinimumValue) at APDCoverableFieldsPanelSet.pcf: line 115, column 35
    function def_refreshVariables_75 (def :  pcf.APDAttributeDefaultValue_money) : void {
      def.refreshVariables(field, APDRuleType.TC_MIN, null, edition, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=MinimumValue) at APDCoverableFieldsPanelSet.pcf: line 115, column 35
    function def_refreshVariables_77 (def :  pcf.APDAttributeDefaultValue_none) : void {
      def.refreshVariables(field, APDRuleType.TC_MIN, null, edition, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=MinimumValue) at APDCoverableFieldsPanelSet.pcf: line 115, column 35
    function def_refreshVariables_79 (def :  pcf.APDAttributeDefaultValue_typekey) : void {
      def.refreshVariables(field, APDRuleType.TC_MIN, null, edition, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=MaximumValue) at APDCoverableFieldsPanelSet.pcf: line 123, column 35
    function def_refreshVariables_82 (def :  pcf.APDAttributeDefaultValue_bigdecimal) : void {
      def.refreshVariables(field, APDRuleType.TC_MAX, null, edition, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=MaximumValue) at APDCoverableFieldsPanelSet.pcf: line 123, column 35
    function def_refreshVariables_84 (def :  pcf.APDAttributeDefaultValue_boolean) : void {
      def.refreshVariables(field, APDRuleType.TC_MAX, null, edition, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=MaximumValue) at APDCoverableFieldsPanelSet.pcf: line 123, column 35
    function def_refreshVariables_86 (def :  pcf.APDAttributeDefaultValue_calculated) : void {
      def.refreshVariables(field, APDRuleType.TC_MAX, null, edition, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=MaximumValue) at APDCoverableFieldsPanelSet.pcf: line 123, column 35
    function def_refreshVariables_88 (def :  pcf.APDAttributeDefaultValue_date) : void {
      def.refreshVariables(field, APDRuleType.TC_MAX, null, edition, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=MaximumValue) at APDCoverableFieldsPanelSet.pcf: line 123, column 35
    function def_refreshVariables_90 (def :  pcf.APDAttributeDefaultValue_default) : void {
      def.refreshVariables(field, APDRuleType.TC_MAX, null, edition, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=MaximumValue) at APDCoverableFieldsPanelSet.pcf: line 123, column 35
    function def_refreshVariables_92 (def :  pcf.APDAttributeDefaultValue_integer) : void {
      def.refreshVariables(field, APDRuleType.TC_MAX, null, edition, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=MaximumValue) at APDCoverableFieldsPanelSet.pcf: line 123, column 35
    function def_refreshVariables_94 (def :  pcf.APDAttributeDefaultValue_money) : void {
      def.refreshVariables(field, APDRuleType.TC_MAX, null, edition, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=MaximumValue) at APDCoverableFieldsPanelSet.pcf: line 123, column 35
    function def_refreshVariables_96 (def :  pcf.APDAttributeDefaultValue_none) : void {
      def.refreshVariables(field, APDRuleType.TC_MAX, null, edition, openForEdit)
    }
    
    // 'def' attribute on ModalCellRef (id=MaximumValue) at APDCoverableFieldsPanelSet.pcf: line 123, column 35
    function def_refreshVariables_98 (def :  pcf.APDAttributeDefaultValue_typekey) : void {
      def.refreshVariables(field, APDRuleType.TC_MAX, null, edition, openForEdit)
    }
    
    // 'value' attribute on CheckBoxCell (id=SplitByRatingPeriods_Cell) at APDCoverableFieldsPanelSet.pcf: line 137, column 52
    function defaultSetter_108 (__VALUE_TO_SET :  java.lang.Object) : void {
      field.SplitByRatingPeriods = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on CheckBoxCell (id=Scalable_Cell) at APDCoverableFieldsPanelSet.pcf: line 147, column 48
    function defaultSetter_113 (__VALUE_TO_SET :  java.lang.Object) : void {
      field.Scalable = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on TextCell (id=Category_Cell) at APDCoverableFieldsPanelSet.pcf: line 153, column 41
    function defaultSetter_117 (__VALUE_TO_SET :  java.lang.Object) : void {
      field.Category = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at APDCoverableFieldsPanelSet.pcf: line 159, column 44
    function defaultSetter_122 (__VALUE_TO_SET :  java.lang.Object) : void {
      field.Description = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at APDCoverableFieldsPanelSet.pcf: line 166, column 42
    function defaultSetter_128 (__VALUE_TO_SET :  java.lang.Object) : void {
      field.Name = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TypeKeyCell (id=Type_Cell) at APDCoverableFieldsPanelSet.pcf: line 65, column 42
    function defaultSetter_18 (__VALUE_TO_SET :  java.lang.Object) : void {
      field.Type = (__VALUE_TO_SET as APDFieldType)
    }
    
    // 'value' attribute on CheckBoxCell (id=Identifier_Cell) at APDCoverableFieldsPanelSet.pcf: line 80, column 43
    function defaultSetter_25 (__VALUE_TO_SET :  java.lang.Object) : void {
      field.Identifier = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on CheckBoxCell (id=Jurisdiction_Cell) at APDCoverableFieldsPanelSet.pcf: line 88, column 65
    function defaultSetter_32 (__VALUE_TO_SET :  java.lang.Object) : void {
      field.Jurisdiction = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on TextCell (id=Label_Cell) at APDCoverableFieldsPanelSet.pcf: line 55, column 38
    function defaultSetter_8 (__VALUE_TO_SET :  java.lang.Object) : void {
      field.Label = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'editable' attribute on TypeKeyCell (id=Type_Cell) at APDCoverableFieldsPanelSet.pcf: line 65, column 42
    function editable_15 () : java.lang.Boolean {
      return field.CanChangeType
    }
    
    // 'initialValue' attribute on Variable at APDCoverableFieldsPanelSet.pcf: line 41, column 36
    function initialValue_5 () : APDFieldType {
      return field.Type
    }
    
    // RowIterator at APDCoverableFieldsPanelSet.pcf: line 37, column 36
    function initializeVariables_137 () : void {
        prevFieldType = field.Type;

    }
    
    // 'label' attribute on TextCell (id=Description_Cell) at APDCoverableFieldsPanelSet.pcf: line 159, column 44
    function label_120 () : java.lang.Object {
      return DisplayKey.get("Web.APD.RequiredForGeneration", DisplayKey.get("Web.APDProductScreen.APDField.Description"))
    }
    
    // 'label' attribute on TextCell (id=Name_Cell) at APDCoverableFieldsPanelSet.pcf: line 166, column 42
    function label_126 () : java.lang.Object {
      return DisplayKey.get("Web.APD.RequiredForGeneration", DisplayKey.get("Web.APDProductScreen.APDField.Name"))
    }
    
    // 'mode' attribute on ModalCellRef (id=DefaultValue) at APDCoverableFieldsPanelSet.pcf: line 107, column 35
    function mode_61 () : java.lang.Object {
      return field.getUIRuleMode(edition, APDRuleType.TC_DEFAULT)
    }
    
    // 'mode' attribute on ModalCellRef (id=MinimumValue) at APDCoverableFieldsPanelSet.pcf: line 115, column 35
    function mode_80 () : java.lang.Object {
      return field.getUIRuleMode(edition, APDRuleType.TC_MIN)
    }
    
    // 'mode' attribute on ModalCellRef (id=MaximumValue) at APDCoverableFieldsPanelSet.pcf: line 123, column 35
    function mode_99 () : java.lang.Object {
      return field.getUIRuleMode(edition, APDRuleType.TC_MAX)
    }
    
    // 'onChange' attribute on PostOnChange at APDCoverableFieldsPanelSet.pcf: line 139, column 97
    function onChange_106 () : void {
      if (field.SplitByRatingPeriods == false) {field.Scalable = false}
    }
    
    // 'onChange' attribute on PostOnChange at APDCoverableFieldsPanelSet.pcf: line 67, column 122
    function onChange_11 () : void {
      field.updateDropdownPropertiesOnFieldTypeChange(prevFieldType); prevFieldType = field.Type
    }
    
    // 'onChange' attribute on PostOnChange at APDCoverableFieldsPanelSet.pcf: line 90, column 59
    function onChange_29 () : void {
      field.autoSetRiskLocation()
    }
    
    // 'valueRange' attribute on RangeCell (id=Usage_Cell) at APDCoverableFieldsPanelSet.pcf: line 99, column 51
    function valueRange_39 () : java.lang.Object {
      return APDDataExistenceType.getTypeKeys(false)
    }
    
    // 'value' attribute on TextCell (id=Label_Cell) at APDCoverableFieldsPanelSet.pcf: line 55, column 38
    function valueRoot_9 () : java.lang.Object {
      return field
    }
    
    // 'value' attribute on TextCell (id=Tags_Cell) at APDCoverableFieldsPanelSet.pcf: line 131, column 34
    function value_103 () : java.lang.String {
      return field.TagDisplayValue
    }
    
    // 'value' attribute on CheckBoxCell (id=SplitByRatingPeriods_Cell) at APDCoverableFieldsPanelSet.pcf: line 137, column 52
    function value_107 () : java.lang.Boolean {
      return field.SplitByRatingPeriods
    }
    
    // 'value' attribute on CheckBoxCell (id=Scalable_Cell) at APDCoverableFieldsPanelSet.pcf: line 147, column 48
    function value_112 () : java.lang.Boolean {
      return field.Scalable
    }
    
    // 'value' attribute on TextCell (id=Category_Cell) at APDCoverableFieldsPanelSet.pcf: line 153, column 41
    function value_116 () : java.lang.String {
      return field.Category
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at APDCoverableFieldsPanelSet.pcf: line 159, column 44
    function value_121 () : java.lang.String {
      return field.Description
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at APDCoverableFieldsPanelSet.pcf: line 166, column 42
    function value_127 () : java.lang.String {
      return field.Name
    }
    
    // 'value' attribute on CheckBoxCell (id=Identifier_Cell) at APDCoverableFieldsPanelSet.pcf: line 80, column 43
    function value_24 () : java.lang.Boolean {
      return field.Identifier
    }
    
    // 'value' attribute on CheckBoxCell (id=Jurisdiction_Cell) at APDCoverableFieldsPanelSet.pcf: line 88, column 65
    function value_31 () : java.lang.Boolean {
      return field.Jurisdiction
    }
    
    // 'value' attribute on RangeCell (id=Usage_Cell) at APDCoverableFieldsPanelSet.pcf: line 99, column 51
    function value_38 () : APDDataExistenceType {
      return field.getEditionRule(edition, APDRuleType.TC_EXISTENCE).DefaultExistence ?: APDDataExistenceType.TC_CAPTURED
    }
    
    // 'value' attribute on TextCell (id=Label_Cell) at APDCoverableFieldsPanelSet.pcf: line 55, column 38
    function value_7 () : java.lang.String {
      return field.Label
    }
    
    // 'valueRange' attribute on RangeCell (id=Usage_Cell) at APDCoverableFieldsPanelSet.pcf: line 99, column 51
    function verifyValueRangeIsAllowedType_40 ($$arg :  APDDataExistenceType[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=Usage_Cell) at APDCoverableFieldsPanelSet.pcf: line 99, column 51
    function verifyValueRangeIsAllowedType_40 ($$arg :  gw.api.database.IQueryBeanResult) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=Usage_Cell) at APDCoverableFieldsPanelSet.pcf: line 99, column 51
    function verifyValueRangeIsAllowedType_40 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=Usage_Cell) at APDCoverableFieldsPanelSet.pcf: line 99, column 51
    function verifyValueRange_41 () : void {
      var __valueRangeArg = APDDataExistenceType.getTypeKeys(false)
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_40(__valueRangeArg)
    }
    
    // 'valueType' attribute on TypeKeyCell (id=Type_Cell) at APDCoverableFieldsPanelSet.pcf: line 65, column 42
    function verifyValueType_22 () : void {
      var __valueTypeArg : APDFieldType
      // If this assignment statement fails to compile, that means that the declared valueType
      // is not a valid type for use with this Input or Cell type
      var __requiredTypeArg : gw.entity.TypeKey = __valueTypeArg
    }
    
    // 'valueVisible' attribute on TextCell (id=Tags_Cell) at APDCoverableFieldsPanelSet.pcf: line 131, column 34
    function visible_100 () : java.lang.Boolean {
      return field.ShowDisplayValue
    }
    
    // 'valueVisible' attribute on CheckBoxCell (id=Scalable_Cell) at APDCoverableFieldsPanelSet.pcf: line 147, column 48
    function visible_111 () : java.lang.Boolean {
      return field.CanScale
    }
    
    // 'visible' attribute on MenuItem (id=DropDownDefinition) at APDCoverableFieldsPanelSet.pcf: line 65, column 42
    function visible_12 () : java.lang.Boolean {
      return field.Type == APDFieldType.TC_TYPEKEY
    }
    
    // 'visible' attribute on TextCell (id=Name_Cell) at APDCoverableFieldsPanelSet.pcf: line 166, column 42
    function visible_130 () : java.lang.Boolean {
      return inDevelopMode
    }
    
    // 'valueVisible' attribute on CheckBoxCell (id=Jurisdiction_Cell) at APDCoverableFieldsPanelSet.pcf: line 88, column 65
    function visible_30 () : java.lang.Boolean {
      return field.Type == APDFieldType.TC_LOCATION
    }
    
    // 'visible' attribute on CheckBoxCell (id=Jurisdiction_Cell) at APDCoverableFieldsPanelSet.pcf: line 88, column 65
    function visible_34 () : java.lang.Boolean {
      return not (coverable typeis APDProductLine)
    }
    
    property get field () : APDField {
      return getIteratedValue(2) as APDField
    }
    
    property get prevFieldType () : APDFieldType {
      return getVariableValue("prevFieldType", 2) as APDFieldType
    }
    
    property set prevFieldType ($arg :  APDFieldType) {
      setVariableValue("prevFieldType", 2, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/tools/apd/APDCoverableFieldsPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ListDetailPanelExpressionsImpl extends APDCoverableFieldsPanelSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on PanelRef (id=FieldLocalizedValues) at APDCoverableFieldsPanelSet.pcf: line 197, column 44
    function def_onEnter_141 (def :  pcf.LocalizedValuesDV) : void {
      def.onEnter(fieldDetails, {"Label", "Description"}, {DisplayKey.get("Web.APDProductScreen.APDField.Label"), DisplayKey.get("Web.APDProductScreen.APDField.Description")})
    }
    
    // 'def' attribute on PanelRef (id=FieldLocalizedValues) at APDCoverableFieldsPanelSet.pcf: line 197, column 44
    function def_refreshVariables_142 (def :  pcf.LocalizedValuesDV) : void {
      def.refreshVariables(fieldDetails, {"Label", "Description"}, {DisplayKey.get("Web.APDProductScreen.APDField.Label"), DisplayKey.get("Web.APDProductScreen.APDField.Description")})
    }
    
    // 'label' attribute on TextCell (id=Description_Cell) at APDCoverableFieldsPanelSet.pcf: line 159, column 44
    function label_2 () : java.lang.Object {
      return DisplayKey.get("Web.APD.RequiredForGeneration", DisplayKey.get("Web.APDProductScreen.APDField.Description"))
    }
    
    // 'label' attribute on TextCell (id=Name_Cell) at APDCoverableFieldsPanelSet.pcf: line 166, column 42
    function label_3 () : java.lang.Object {
      return DisplayKey.get("Web.APD.RequiredForGeneration", DisplayKey.get("Web.APDProductScreen.APDField.Name"))
    }
    
    // 'sortBy' attribute on IteratorSort at APDCoverableFieldsPanelSet.pcf: line 44, column 30
    function sortBy_0 (field :  APDField) : java.lang.Object {
      return field.Sequence
    }
    
    // 'toCreateAndAdd' attribute on RowIterator at APDCoverableFieldsPanelSet.pcf: line 37, column 36
    function toCreateAndAdd_138 () : APDField {
      return coverable.createAndAddField()
    }
    
    // 'toRemove' attribute on RowIterator at APDCoverableFieldsPanelSet.pcf: line 37, column 36
    function toRemove_139 (field :  APDField) : void {
      coverable.removeField(field)
    }
    
    // 'value' attribute on RowIterator at APDCoverableFieldsPanelSet.pcf: line 37, column 36
    function value_140 () : APDField[] {
      return coverable.Fields
    }
    
    // 'visible' attribute on CheckBoxCell (id=Jurisdiction_Cell) at APDCoverableFieldsPanelSet.pcf: line 88, column 65
    function visible_1 () : java.lang.Boolean {
      return not (coverable typeis APDProductLine)
    }
    
    // 'visible' attribute on TextCell (id=Name_Cell) at APDCoverableFieldsPanelSet.pcf: line 166, column 42
    function visible_4 () : java.lang.Boolean {
      return inDevelopMode
    }
    
    property get fieldDetails () : APDField {
      return getCurrentSelection(1) as APDField
    }
    
    property set fieldDetails ($arg :  APDField) {
      setCurrentSelection(1, $arg)
    }
    
    
  }
  
  
}