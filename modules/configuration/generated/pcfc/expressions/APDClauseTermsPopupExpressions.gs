package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/tools/apd/APDClauseTermsPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class APDClauseTermsPopupExpressions {
  @javax.annotation.Generated("config/web/pcf/tools/apd/APDClauseTermsPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class APDClauseTermsPopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (clause :  APDClause, edition :  APDProductLineEdition) : int {
      return 0
    }
    
    static function __constructorIndex (clause :  APDClause, edition :  APDProductLineEdition, startInEditMode :  boolean) : int {
      return 1
    }
    
    // 'beforeCommit' attribute on Popup (id=APDClauseTermsPopup) at APDClauseTermsPopup.pcf: line 11, column 66
    function beforeCommit_174 (pickedValue :  java.lang.Object) : void {
      clause.Coverable.ProductLine.productLineUpdated()
    }
    
    // 'canEdit' attribute on Popup (id=APDClauseTermsPopup) at APDClauseTermsPopup.pcf: line 11, column 66
    function canEdit_175 () : java.lang.Boolean {
      return startInEditMode
    }
    
    // 'initialValue' attribute on Variable at APDClauseTermsPopup.pcf: line 29, column 23
    function initialValue_0 () : Boolean {
      return new gw.api.web.userpreference.UserPreferencesOfCurrentUser().inDevelopMode()
    }
    
    // EditButtons at APDClauseTermsPopup.pcf: line 32, column 23
    function label_1 () : java.lang.Object {
      return gw.api.util.LocationUtil.hasOwnBundle(CurrentLocation) ? DisplayKey.get("Button.Update") : DisplayKey.get("Button.OK")
    }
    
    override property get CurrentLocation () : pcf.APDClauseTermsPopup {
      return super.CurrentLocation as pcf.APDClauseTermsPopup
    }
    
    property get clause () : APDClause {
      return getVariableValue("clause", 0) as APDClause
    }
    
    property set clause ($arg :  APDClause) {
      setVariableValue("clause", 0, $arg)
    }
    
    property get edition () : APDProductLineEdition {
      return getVariableValue("edition", 0) as APDProductLineEdition
    }
    
    property set edition ($arg :  APDProductLineEdition) {
      setVariableValue("edition", 0, $arg)
    }
    
    property get inDevelopMode () : Boolean {
      return getVariableValue("inDevelopMode", 0) as Boolean
    }
    
    property set inDevelopMode ($arg :  Boolean) {
      setVariableValue("inDevelopMode", 0, $arg)
    }
    
    property get startInEditMode () : boolean {
      return getVariableValue("startInEditMode", 0) as java.lang.Boolean
    }
    
    property set startInEditMode ($arg :  boolean) {
      setVariableValue("startInEditMode", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/tools/apd/APDClauseTermsPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry2ExpressionsImpl extends ListDetailPanel2ExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on MenuItem (id=DropDownDefinition) at APDClauseTermsPopup.pcf: line 227, column 44
    function action_138 () : void {
      APDDropDownDefinitionPopup.push(term, true, edition, CurrentLocation.InEditMode)
    }
    
    // 'action' attribute on MenuItem (id=MoveUp) at APDClauseTermsPopup.pcf: line 246, column 96
    function action_146 () : void {
      term.moveUp()
    }
    
    // 'action' attribute on MenuItem (id=MoveDown) at APDClauseTermsPopup.pcf: line 251, column 98
    function action_148 () : void {
      term.moveDown()
    }
    
    // 'action' attribute on MenuItem (id=DropDownDefinition) at APDClauseTermsPopup.pcf: line 227, column 44
    function action_dest_139 () : pcf.api.Destination {
      return pcf.APDDropDownDefinitionPopup.createDestination(term, true, edition, CurrentLocation.InEditMode)
    }
    
    // 'available' attribute on MenuItem (id=MoveUp) at APDClauseTermsPopup.pcf: line 246, column 96
    function available_145 () : java.lang.Boolean {
      return term.Sequence != 1
    }
    
    // 'available' attribute on MenuItem (id=MoveDown) at APDClauseTermsPopup.pcf: line 251, column 98
    function available_147 () : java.lang.Boolean {
      return term.Sequence != term.Clause.ScheduleTerms.Count
    }
    
    // 'value' attribute on TextCell (id=Label_Cell) at APDClauseTermsPopup.pcf: line 219, column 39
    function defaultSetter_133 (__VALUE_TO_SET :  java.lang.Object) : void {
      term.Label = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TypeKeyCell (id=Type_Cell) at APDClauseTermsPopup.pcf: line 227, column 44
    function defaultSetter_141 (__VALUE_TO_SET :  java.lang.Object) : void {
      term.Type = (__VALUE_TO_SET as APDFieldType)
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at APDClauseTermsPopup.pcf: line 258, column 45
    function defaultSetter_151 (__VALUE_TO_SET :  java.lang.Object) : void {
      term.Description = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at APDClauseTermsPopup.pcf: line 265, column 44
    function defaultSetter_157 (__VALUE_TO_SET :  java.lang.Object) : void {
      term.Name = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on CheckBoxCell (id=GenerateNewCoverage_Cell) at APDClauseTermsPopup.pcf: line 273, column 43
    function defaultSetter_164 (__VALUE_TO_SET :  java.lang.Object) : void {
      term.GenerateAsClauseTerm = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'editable' attribute on CheckBoxCell (id=GenerateNewCoverage_Cell) at APDClauseTermsPopup.pcf: line 273, column 43
    function editable_162 () : java.lang.Boolean {
      return not (term.CanOnlyBeAClauseTermBasedOnType or term.CanNotBeAClauseTermBasedOnType)
    }
    
    // 'label' attribute on TextCell (id=Description_Cell) at APDClauseTermsPopup.pcf: line 258, column 45
    function label_149 () : java.lang.Object {
      return DisplayKey.get("Web.APD.RequiredForGeneration", DisplayKey.get("Web.APDProductScreen.APDField.Description"))
    }
    
    // 'label' attribute on TextCell (id=Name_Cell) at APDClauseTermsPopup.pcf: line 265, column 44
    function label_155 () : java.lang.Object {
      return DisplayKey.get("Web.APD.RequiredForGeneration", DisplayKey.get("Web.APDProductScreen.APDField.Name"))
    }
    
    // 'onChange' attribute on PostOnChange at APDClauseTermsPopup.pcf: line 229, column 78
    function onChange_136 () : void {
      term.updateGenerateAsClauseTermBasedOnType()
    }
    
    // 'value' attribute on TextCell (id=Label_Cell) at APDClauseTermsPopup.pcf: line 219, column 39
    function valueRoot_134 () : java.lang.Object {
      return term
    }
    
    // 'value' attribute on TextCell (id=Label_Cell) at APDClauseTermsPopup.pcf: line 219, column 39
    function value_132 () : java.lang.String {
      return term.Label
    }
    
    // 'value' attribute on TypeKeyCell (id=Type_Cell) at APDClauseTermsPopup.pcf: line 227, column 44
    function value_140 () : APDFieldType {
      return term.Type
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at APDClauseTermsPopup.pcf: line 258, column 45
    function value_150 () : java.lang.String {
      return term.Description
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at APDClauseTermsPopup.pcf: line 265, column 44
    function value_156 () : java.lang.String {
      return term.Name
    }
    
    // 'value' attribute on CheckBoxCell (id=GenerateNewCoverage_Cell) at APDClauseTermsPopup.pcf: line 273, column 43
    function value_163 () : java.lang.Boolean {
      return term.GenerateAsClauseTerm
    }
    
    // 'valueType' attribute on TypeKeyCell (id=Type_Cell) at APDClauseTermsPopup.pcf: line 227, column 44
    function verifyValueType_144 () : void {
      var __valueTypeArg : APDFieldType
      // If this assignment statement fails to compile, that means that the declared valueType
      // is not a valid type for use with this Input or Cell type
      var __requiredTypeArg : gw.entity.TypeKey = __valueTypeArg
    }
    
    // 'visible' attribute on MenuItem (id=DropDownDefinition) at APDClauseTermsPopup.pcf: line 227, column 44
    function visible_137 () : java.lang.Boolean {
      return term.Type == APDFieldType.TC_TYPEKEY
    }
    
    // 'visible' attribute on TextCell (id=Name_Cell) at APDClauseTermsPopup.pcf: line 265, column 44
    function visible_159 () : java.lang.Boolean {
      return inDevelopMode
    }
    
    property get term () : APDTerm {
      return getIteratedValue(2) as APDTerm
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/tools/apd/APDClauseTermsPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends ListDetailPanelExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on MenuItem (id=MoveUp) at APDClauseTermsPopup.pcf: line 167, column 96
    function action_118 () : void {
      term.moveUp()
    }
    
    // 'action' attribute on MenuItem (id=MoveDown) at APDClauseTermsPopup.pcf: line 172, column 98
    function action_120 () : void {
      term.moveDown()
    }
    
    // 'action' attribute on MenuItem (id=DropDownDefinition) at APDClauseTermsPopup.pcf: line 78, column 44
    function action_13 () : void {
      APDDropDownDefinitionPopup.push(term, true, edition, CurrentLocation.InEditMode)
    }
    
    // 'action' attribute on RangeCell (id=Usage_Cell) at APDClauseTermsPopup.pcf: line 94, column 53
    function action_24 () : void {
      APDAttributeRulePopup.push(term.getEditionRule(edition, APDRuleType.TC_EXISTENCE), term, APDRuleType.TC_EXISTENCE, edition, startInEditMode)
    }
    
    // 'action' attribute on TextCell (id=Tags_Cell) at APDClauseTermsPopup.pcf: line 127, column 36
    function action_89 () : void {
      APDTagPopup.push(term, startInEditMode)
    }
    
    // 'action' attribute on MenuItem (id=DropDownDefinition) at APDClauseTermsPopup.pcf: line 78, column 44
    function action_dest_14 () : pcf.api.Destination {
      return pcf.APDDropDownDefinitionPopup.createDestination(term, true, edition, CurrentLocation.InEditMode)
    }
    
    // 'action' attribute on RangeCell (id=Usage_Cell) at APDClauseTermsPopup.pcf: line 94, column 53
    function action_dest_25 () : pcf.api.Destination {
      return pcf.APDAttributeRulePopup.createDestination(term.getEditionRule(edition, APDRuleType.TC_EXISTENCE), term, APDRuleType.TC_EXISTENCE, edition, startInEditMode)
    }
    
    // 'action' attribute on TextCell (id=Tags_Cell) at APDClauseTermsPopup.pcf: line 127, column 36
    function action_dest_90 () : pcf.api.Destination {
      return pcf.APDTagPopup.createDestination(term, startInEditMode)
    }
    
    // 'available' attribute on MenuItem (id=MoveUp) at APDClauseTermsPopup.pcf: line 167, column 96
    function available_117 () : java.lang.Boolean {
      return term.Sequence != 1
    }
    
    // 'available' attribute on MenuItem (id=MoveDown) at APDClauseTermsPopup.pcf: line 172, column 98
    function available_119 () : java.lang.Boolean {
      return term.Sequence != term.Clause.StandardTerms.Count
    }
    
    // 'def' attribute on ModalCellRef (id=DefaultValue) at APDClauseTermsPopup.pcf: line 102, column 37
    function def_onEnter_31 (def :  pcf.APDAttributeDefaultValue_bigdecimal) : void {
      def.onEnter(term, APDRuleType.TC_DEFAULT, null, edition, startInEditMode)
    }
    
    // 'def' attribute on ModalCellRef (id=DefaultValue) at APDClauseTermsPopup.pcf: line 102, column 37
    function def_onEnter_33 (def :  pcf.APDAttributeDefaultValue_boolean) : void {
      def.onEnter(term, APDRuleType.TC_DEFAULT, null, edition, startInEditMode)
    }
    
    // 'def' attribute on ModalCellRef (id=DefaultValue) at APDClauseTermsPopup.pcf: line 102, column 37
    function def_onEnter_35 (def :  pcf.APDAttributeDefaultValue_calculated) : void {
      def.onEnter(term, APDRuleType.TC_DEFAULT, null, edition, startInEditMode)
    }
    
    // 'def' attribute on ModalCellRef (id=DefaultValue) at APDClauseTermsPopup.pcf: line 102, column 37
    function def_onEnter_37 (def :  pcf.APDAttributeDefaultValue_date) : void {
      def.onEnter(term, APDRuleType.TC_DEFAULT, null, edition, startInEditMode)
    }
    
    // 'def' attribute on ModalCellRef (id=DefaultValue) at APDClauseTermsPopup.pcf: line 102, column 37
    function def_onEnter_39 (def :  pcf.APDAttributeDefaultValue_default) : void {
      def.onEnter(term, APDRuleType.TC_DEFAULT, null, edition, startInEditMode)
    }
    
    // 'def' attribute on ModalCellRef (id=DefaultValue) at APDClauseTermsPopup.pcf: line 102, column 37
    function def_onEnter_41 (def :  pcf.APDAttributeDefaultValue_integer) : void {
      def.onEnter(term, APDRuleType.TC_DEFAULT, null, edition, startInEditMode)
    }
    
    // 'def' attribute on ModalCellRef (id=DefaultValue) at APDClauseTermsPopup.pcf: line 102, column 37
    function def_onEnter_43 (def :  pcf.APDAttributeDefaultValue_money) : void {
      def.onEnter(term, APDRuleType.TC_DEFAULT, null, edition, startInEditMode)
    }
    
    // 'def' attribute on ModalCellRef (id=DefaultValue) at APDClauseTermsPopup.pcf: line 102, column 37
    function def_onEnter_45 (def :  pcf.APDAttributeDefaultValue_none) : void {
      def.onEnter(term, APDRuleType.TC_DEFAULT, null, edition, startInEditMode)
    }
    
    // 'def' attribute on ModalCellRef (id=DefaultValue) at APDClauseTermsPopup.pcf: line 102, column 37
    function def_onEnter_47 (def :  pcf.APDAttributeDefaultValue_typekey) : void {
      def.onEnter(term, APDRuleType.TC_DEFAULT, null, edition, startInEditMode)
    }
    
    // 'def' attribute on ModalCellRef (id=MinimumValue) at APDClauseTermsPopup.pcf: line 110, column 37
    function def_onEnter_50 (def :  pcf.APDAttributeDefaultValue_bigdecimal) : void {
      def.onEnter(term, APDRuleType.TC_MIN, null, edition, startInEditMode)
    }
    
    // 'def' attribute on ModalCellRef (id=MinimumValue) at APDClauseTermsPopup.pcf: line 110, column 37
    function def_onEnter_52 (def :  pcf.APDAttributeDefaultValue_boolean) : void {
      def.onEnter(term, APDRuleType.TC_MIN, null, edition, startInEditMode)
    }
    
    // 'def' attribute on ModalCellRef (id=MinimumValue) at APDClauseTermsPopup.pcf: line 110, column 37
    function def_onEnter_54 (def :  pcf.APDAttributeDefaultValue_calculated) : void {
      def.onEnter(term, APDRuleType.TC_MIN, null, edition, startInEditMode)
    }
    
    // 'def' attribute on ModalCellRef (id=MinimumValue) at APDClauseTermsPopup.pcf: line 110, column 37
    function def_onEnter_56 (def :  pcf.APDAttributeDefaultValue_date) : void {
      def.onEnter(term, APDRuleType.TC_MIN, null, edition, startInEditMode)
    }
    
    // 'def' attribute on ModalCellRef (id=MinimumValue) at APDClauseTermsPopup.pcf: line 110, column 37
    function def_onEnter_58 (def :  pcf.APDAttributeDefaultValue_default) : void {
      def.onEnter(term, APDRuleType.TC_MIN, null, edition, startInEditMode)
    }
    
    // 'def' attribute on ModalCellRef (id=MinimumValue) at APDClauseTermsPopup.pcf: line 110, column 37
    function def_onEnter_60 (def :  pcf.APDAttributeDefaultValue_integer) : void {
      def.onEnter(term, APDRuleType.TC_MIN, null, edition, startInEditMode)
    }
    
    // 'def' attribute on ModalCellRef (id=MinimumValue) at APDClauseTermsPopup.pcf: line 110, column 37
    function def_onEnter_62 (def :  pcf.APDAttributeDefaultValue_money) : void {
      def.onEnter(term, APDRuleType.TC_MIN, null, edition, startInEditMode)
    }
    
    // 'def' attribute on ModalCellRef (id=MinimumValue) at APDClauseTermsPopup.pcf: line 110, column 37
    function def_onEnter_64 (def :  pcf.APDAttributeDefaultValue_none) : void {
      def.onEnter(term, APDRuleType.TC_MIN, null, edition, startInEditMode)
    }
    
    // 'def' attribute on ModalCellRef (id=MinimumValue) at APDClauseTermsPopup.pcf: line 110, column 37
    function def_onEnter_66 (def :  pcf.APDAttributeDefaultValue_typekey) : void {
      def.onEnter(term, APDRuleType.TC_MIN, null, edition, startInEditMode)
    }
    
    // 'def' attribute on ModalCellRef (id=MaximumValue) at APDClauseTermsPopup.pcf: line 118, column 37
    function def_onEnter_69 (def :  pcf.APDAttributeDefaultValue_bigdecimal) : void {
      def.onEnter(term, APDRuleType.TC_MAX, null, edition, startInEditMode)
    }
    
    // 'def' attribute on ModalCellRef (id=MaximumValue) at APDClauseTermsPopup.pcf: line 118, column 37
    function def_onEnter_71 (def :  pcf.APDAttributeDefaultValue_boolean) : void {
      def.onEnter(term, APDRuleType.TC_MAX, null, edition, startInEditMode)
    }
    
    // 'def' attribute on ModalCellRef (id=MaximumValue) at APDClauseTermsPopup.pcf: line 118, column 37
    function def_onEnter_73 (def :  pcf.APDAttributeDefaultValue_calculated) : void {
      def.onEnter(term, APDRuleType.TC_MAX, null, edition, startInEditMode)
    }
    
    // 'def' attribute on ModalCellRef (id=MaximumValue) at APDClauseTermsPopup.pcf: line 118, column 37
    function def_onEnter_75 (def :  pcf.APDAttributeDefaultValue_date) : void {
      def.onEnter(term, APDRuleType.TC_MAX, null, edition, startInEditMode)
    }
    
    // 'def' attribute on ModalCellRef (id=MaximumValue) at APDClauseTermsPopup.pcf: line 118, column 37
    function def_onEnter_77 (def :  pcf.APDAttributeDefaultValue_default) : void {
      def.onEnter(term, APDRuleType.TC_MAX, null, edition, startInEditMode)
    }
    
    // 'def' attribute on ModalCellRef (id=MaximumValue) at APDClauseTermsPopup.pcf: line 118, column 37
    function def_onEnter_79 (def :  pcf.APDAttributeDefaultValue_integer) : void {
      def.onEnter(term, APDRuleType.TC_MAX, null, edition, startInEditMode)
    }
    
    // 'def' attribute on ModalCellRef (id=MaximumValue) at APDClauseTermsPopup.pcf: line 118, column 37
    function def_onEnter_81 (def :  pcf.APDAttributeDefaultValue_money) : void {
      def.onEnter(term, APDRuleType.TC_MAX, null, edition, startInEditMode)
    }
    
    // 'def' attribute on ModalCellRef (id=MaximumValue) at APDClauseTermsPopup.pcf: line 118, column 37
    function def_onEnter_83 (def :  pcf.APDAttributeDefaultValue_none) : void {
      def.onEnter(term, APDRuleType.TC_MAX, null, edition, startInEditMode)
    }
    
    // 'def' attribute on ModalCellRef (id=MaximumValue) at APDClauseTermsPopup.pcf: line 118, column 37
    function def_onEnter_85 (def :  pcf.APDAttributeDefaultValue_typekey) : void {
      def.onEnter(term, APDRuleType.TC_MAX, null, edition, startInEditMode)
    }
    
    // 'def' attribute on ModalCellRef (id=DefaultValue) at APDClauseTermsPopup.pcf: line 102, column 37
    function def_refreshVariables_32 (def :  pcf.APDAttributeDefaultValue_bigdecimal) : void {
      def.refreshVariables(term, APDRuleType.TC_DEFAULT, null, edition, startInEditMode)
    }
    
    // 'def' attribute on ModalCellRef (id=DefaultValue) at APDClauseTermsPopup.pcf: line 102, column 37
    function def_refreshVariables_34 (def :  pcf.APDAttributeDefaultValue_boolean) : void {
      def.refreshVariables(term, APDRuleType.TC_DEFAULT, null, edition, startInEditMode)
    }
    
    // 'def' attribute on ModalCellRef (id=DefaultValue) at APDClauseTermsPopup.pcf: line 102, column 37
    function def_refreshVariables_36 (def :  pcf.APDAttributeDefaultValue_calculated) : void {
      def.refreshVariables(term, APDRuleType.TC_DEFAULT, null, edition, startInEditMode)
    }
    
    // 'def' attribute on ModalCellRef (id=DefaultValue) at APDClauseTermsPopup.pcf: line 102, column 37
    function def_refreshVariables_38 (def :  pcf.APDAttributeDefaultValue_date) : void {
      def.refreshVariables(term, APDRuleType.TC_DEFAULT, null, edition, startInEditMode)
    }
    
    // 'def' attribute on ModalCellRef (id=DefaultValue) at APDClauseTermsPopup.pcf: line 102, column 37
    function def_refreshVariables_40 (def :  pcf.APDAttributeDefaultValue_default) : void {
      def.refreshVariables(term, APDRuleType.TC_DEFAULT, null, edition, startInEditMode)
    }
    
    // 'def' attribute on ModalCellRef (id=DefaultValue) at APDClauseTermsPopup.pcf: line 102, column 37
    function def_refreshVariables_42 (def :  pcf.APDAttributeDefaultValue_integer) : void {
      def.refreshVariables(term, APDRuleType.TC_DEFAULT, null, edition, startInEditMode)
    }
    
    // 'def' attribute on ModalCellRef (id=DefaultValue) at APDClauseTermsPopup.pcf: line 102, column 37
    function def_refreshVariables_44 (def :  pcf.APDAttributeDefaultValue_money) : void {
      def.refreshVariables(term, APDRuleType.TC_DEFAULT, null, edition, startInEditMode)
    }
    
    // 'def' attribute on ModalCellRef (id=DefaultValue) at APDClauseTermsPopup.pcf: line 102, column 37
    function def_refreshVariables_46 (def :  pcf.APDAttributeDefaultValue_none) : void {
      def.refreshVariables(term, APDRuleType.TC_DEFAULT, null, edition, startInEditMode)
    }
    
    // 'def' attribute on ModalCellRef (id=DefaultValue) at APDClauseTermsPopup.pcf: line 102, column 37
    function def_refreshVariables_48 (def :  pcf.APDAttributeDefaultValue_typekey) : void {
      def.refreshVariables(term, APDRuleType.TC_DEFAULT, null, edition, startInEditMode)
    }
    
    // 'def' attribute on ModalCellRef (id=MinimumValue) at APDClauseTermsPopup.pcf: line 110, column 37
    function def_refreshVariables_51 (def :  pcf.APDAttributeDefaultValue_bigdecimal) : void {
      def.refreshVariables(term, APDRuleType.TC_MIN, null, edition, startInEditMode)
    }
    
    // 'def' attribute on ModalCellRef (id=MinimumValue) at APDClauseTermsPopup.pcf: line 110, column 37
    function def_refreshVariables_53 (def :  pcf.APDAttributeDefaultValue_boolean) : void {
      def.refreshVariables(term, APDRuleType.TC_MIN, null, edition, startInEditMode)
    }
    
    // 'def' attribute on ModalCellRef (id=MinimumValue) at APDClauseTermsPopup.pcf: line 110, column 37
    function def_refreshVariables_55 (def :  pcf.APDAttributeDefaultValue_calculated) : void {
      def.refreshVariables(term, APDRuleType.TC_MIN, null, edition, startInEditMode)
    }
    
    // 'def' attribute on ModalCellRef (id=MinimumValue) at APDClauseTermsPopup.pcf: line 110, column 37
    function def_refreshVariables_57 (def :  pcf.APDAttributeDefaultValue_date) : void {
      def.refreshVariables(term, APDRuleType.TC_MIN, null, edition, startInEditMode)
    }
    
    // 'def' attribute on ModalCellRef (id=MinimumValue) at APDClauseTermsPopup.pcf: line 110, column 37
    function def_refreshVariables_59 (def :  pcf.APDAttributeDefaultValue_default) : void {
      def.refreshVariables(term, APDRuleType.TC_MIN, null, edition, startInEditMode)
    }
    
    // 'def' attribute on ModalCellRef (id=MinimumValue) at APDClauseTermsPopup.pcf: line 110, column 37
    function def_refreshVariables_61 (def :  pcf.APDAttributeDefaultValue_integer) : void {
      def.refreshVariables(term, APDRuleType.TC_MIN, null, edition, startInEditMode)
    }
    
    // 'def' attribute on ModalCellRef (id=MinimumValue) at APDClauseTermsPopup.pcf: line 110, column 37
    function def_refreshVariables_63 (def :  pcf.APDAttributeDefaultValue_money) : void {
      def.refreshVariables(term, APDRuleType.TC_MIN, null, edition, startInEditMode)
    }
    
    // 'def' attribute on ModalCellRef (id=MinimumValue) at APDClauseTermsPopup.pcf: line 110, column 37
    function def_refreshVariables_65 (def :  pcf.APDAttributeDefaultValue_none) : void {
      def.refreshVariables(term, APDRuleType.TC_MIN, null, edition, startInEditMode)
    }
    
    // 'def' attribute on ModalCellRef (id=MinimumValue) at APDClauseTermsPopup.pcf: line 110, column 37
    function def_refreshVariables_67 (def :  pcf.APDAttributeDefaultValue_typekey) : void {
      def.refreshVariables(term, APDRuleType.TC_MIN, null, edition, startInEditMode)
    }
    
    // 'def' attribute on ModalCellRef (id=MaximumValue) at APDClauseTermsPopup.pcf: line 118, column 37
    function def_refreshVariables_70 (def :  pcf.APDAttributeDefaultValue_bigdecimal) : void {
      def.refreshVariables(term, APDRuleType.TC_MAX, null, edition, startInEditMode)
    }
    
    // 'def' attribute on ModalCellRef (id=MaximumValue) at APDClauseTermsPopup.pcf: line 118, column 37
    function def_refreshVariables_72 (def :  pcf.APDAttributeDefaultValue_boolean) : void {
      def.refreshVariables(term, APDRuleType.TC_MAX, null, edition, startInEditMode)
    }
    
    // 'def' attribute on ModalCellRef (id=MaximumValue) at APDClauseTermsPopup.pcf: line 118, column 37
    function def_refreshVariables_74 (def :  pcf.APDAttributeDefaultValue_calculated) : void {
      def.refreshVariables(term, APDRuleType.TC_MAX, null, edition, startInEditMode)
    }
    
    // 'def' attribute on ModalCellRef (id=MaximumValue) at APDClauseTermsPopup.pcf: line 118, column 37
    function def_refreshVariables_76 (def :  pcf.APDAttributeDefaultValue_date) : void {
      def.refreshVariables(term, APDRuleType.TC_MAX, null, edition, startInEditMode)
    }
    
    // 'def' attribute on ModalCellRef (id=MaximumValue) at APDClauseTermsPopup.pcf: line 118, column 37
    function def_refreshVariables_78 (def :  pcf.APDAttributeDefaultValue_default) : void {
      def.refreshVariables(term, APDRuleType.TC_MAX, null, edition, startInEditMode)
    }
    
    // 'def' attribute on ModalCellRef (id=MaximumValue) at APDClauseTermsPopup.pcf: line 118, column 37
    function def_refreshVariables_80 (def :  pcf.APDAttributeDefaultValue_integer) : void {
      def.refreshVariables(term, APDRuleType.TC_MAX, null, edition, startInEditMode)
    }
    
    // 'def' attribute on ModalCellRef (id=MaximumValue) at APDClauseTermsPopup.pcf: line 118, column 37
    function def_refreshVariables_82 (def :  pcf.APDAttributeDefaultValue_money) : void {
      def.refreshVariables(term, APDRuleType.TC_MAX, null, edition, startInEditMode)
    }
    
    // 'def' attribute on ModalCellRef (id=MaximumValue) at APDClauseTermsPopup.pcf: line 118, column 37
    function def_refreshVariables_84 (def :  pcf.APDAttributeDefaultValue_none) : void {
      def.refreshVariables(term, APDRuleType.TC_MAX, null, edition, startInEditMode)
    }
    
    // 'def' attribute on ModalCellRef (id=MaximumValue) at APDClauseTermsPopup.pcf: line 118, column 37
    function def_refreshVariables_86 (def :  pcf.APDAttributeDefaultValue_typekey) : void {
      def.refreshVariables(term, APDRuleType.TC_MAX, null, edition, startInEditMode)
    }
    
    // 'value' attribute on CheckBoxCell (id=Scalable_Cell) at APDClauseTermsPopup.pcf: line 143, column 49
    function defaultSetter_101 (__VALUE_TO_SET :  java.lang.Object) : void {
      term.Scalable = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at APDClauseTermsPopup.pcf: line 149, column 45
    function defaultSetter_106 (__VALUE_TO_SET :  java.lang.Object) : void {
      term.Description = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at APDClauseTermsPopup.pcf: line 156, column 44
    function defaultSetter_112 (__VALUE_TO_SET :  java.lang.Object) : void {
      term.Name = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TypeKeyCell (id=Type_Cell) at APDClauseTermsPopup.pcf: line 78, column 44
    function defaultSetter_18 (__VALUE_TO_SET :  java.lang.Object) : void {
      term.Type = (__VALUE_TO_SET as APDFieldType)
    }
    
    // 'value' attribute on TextCell (id=Label_Cell) at APDClauseTermsPopup.pcf: line 66, column 39
    function defaultSetter_8 (__VALUE_TO_SET :  java.lang.Object) : void {
      term.Label = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on CheckBoxCell (id=SplitByRatingPeriods_Cell) at APDClauseTermsPopup.pcf: line 133, column 53
    function defaultSetter_96 (__VALUE_TO_SET :  java.lang.Object) : void {
      term.SplitByRatingPeriods = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'editable' attribute on TypeKeyCell (id=Type_Cell) at APDClauseTermsPopup.pcf: line 78, column 44
    function editable_15 () : java.lang.Boolean {
      return term.CanChangeType
    }
    
    // 'filter' attribute on TypeKeyCell (id=Type_Cell) at APDClauseTermsPopup.pcf: line 78, column 44
    function filter_20 (VALUE :  APDFieldType, VALUES :  APDFieldType[]) : java.lang.Boolean {
      return APDFieldType.TF_TERMTYPES.TypeKeys.contains(VALUE)
    }
    
    // 'initialValue' attribute on Variable at APDClauseTermsPopup.pcf: line 55, column 38
    function initialValue_6 () : APDFieldType {
      return term.Type
    }
    
    // RowIterator (id=Terms) at APDClauseTermsPopup.pcf: line 51, column 37
    function initializeVariables_121 () : void {
        prevFieldType = term.Type;

    }
    
    // 'label' attribute on TextCell (id=Description_Cell) at APDClauseTermsPopup.pcf: line 149, column 45
    function label_104 () : java.lang.Object {
      return DisplayKey.get("Web.APD.RequiredForGeneration", DisplayKey.get("Web.APDProductScreen.APDField.Description"))
    }
    
    // 'label' attribute on TextCell (id=Name_Cell) at APDClauseTermsPopup.pcf: line 156, column 44
    function label_110 () : java.lang.Object {
      return DisplayKey.get("Web.APD.RequiredForGeneration", DisplayKey.get("Web.APDProductScreen.APDField.Name"))
    }
    
    // 'mode' attribute on ModalCellRef (id=DefaultValue) at APDClauseTermsPopup.pcf: line 102, column 37
    function mode_49 () : java.lang.Object {
      return term.getUIRuleMode(edition, APDRuleType.TC_DEFAULT)
    }
    
    // 'mode' attribute on ModalCellRef (id=MinimumValue) at APDClauseTermsPopup.pcf: line 110, column 37
    function mode_68 () : java.lang.Object {
      return term.getUIRuleMode(edition, APDRuleType.TC_MIN)
    }
    
    // 'mode' attribute on ModalCellRef (id=MaximumValue) at APDClauseTermsPopup.pcf: line 118, column 37
    function mode_87 () : java.lang.Object {
      return term.getUIRuleMode(edition, APDRuleType.TC_MAX)
    }
    
    // 'onChange' attribute on PostOnChange at APDClauseTermsPopup.pcf: line 80, column 122
    function onChange_11 () : void {
      term.updateDropdownPropertiesOnFieldTypeChange(prevFieldType); prevFieldType = term.Type
    }
    
    // 'onChange' attribute on PostOnChange at APDClauseTermsPopup.pcf: line 135, column 97
    function onChange_94 () : void {
      if (term.SplitByRatingPeriods == false) {term.Scalable = false}
    }
    
    // 'valueRange' attribute on RangeCell (id=Usage_Cell) at APDClauseTermsPopup.pcf: line 94, column 53
    function valueRange_27 () : java.lang.Object {
      return APDDataExistenceType.getTypeKeys(false)
    }
    
    // 'value' attribute on TextCell (id=Label_Cell) at APDClauseTermsPopup.pcf: line 66, column 39
    function valueRoot_9 () : java.lang.Object {
      return term
    }
    
    // 'value' attribute on CheckBoxCell (id=Scalable_Cell) at APDClauseTermsPopup.pcf: line 143, column 49
    function value_100 () : java.lang.Boolean {
      return term.Scalable
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at APDClauseTermsPopup.pcf: line 149, column 45
    function value_105 () : java.lang.String {
      return term.Description
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at APDClauseTermsPopup.pcf: line 156, column 44
    function value_111 () : java.lang.String {
      return term.Name
    }
    
    // 'value' attribute on RangeCell (id=Usage_Cell) at APDClauseTermsPopup.pcf: line 94, column 53
    function value_26 () : APDDataExistenceType {
      return term.getEditionRule(edition, APDRuleType.TC_EXISTENCE).DefaultExistence ?: APDDataExistenceType.TC_CAPTURED
    }
    
    // 'value' attribute on TextCell (id=Label_Cell) at APDClauseTermsPopup.pcf: line 66, column 39
    function value_7 () : java.lang.String {
      return term.Label
    }
    
    // 'value' attribute on TextCell (id=Tags_Cell) at APDClauseTermsPopup.pcf: line 127, column 36
    function value_91 () : java.lang.String {
      return term.TagDisplayValue
    }
    
    // 'value' attribute on CheckBoxCell (id=SplitByRatingPeriods_Cell) at APDClauseTermsPopup.pcf: line 133, column 53
    function value_95 () : java.lang.Boolean {
      return term.SplitByRatingPeriods
    }
    
    // 'valueRange' attribute on RangeCell (id=Usage_Cell) at APDClauseTermsPopup.pcf: line 94, column 53
    function verifyValueRangeIsAllowedType_28 ($$arg :  APDDataExistenceType[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=Usage_Cell) at APDClauseTermsPopup.pcf: line 94, column 53
    function verifyValueRangeIsAllowedType_28 ($$arg :  gw.api.database.IQueryBeanResult) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=Usage_Cell) at APDClauseTermsPopup.pcf: line 94, column 53
    function verifyValueRangeIsAllowedType_28 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=Usage_Cell) at APDClauseTermsPopup.pcf: line 94, column 53
    function verifyValueRange_29 () : void {
      var __valueRangeArg = APDDataExistenceType.getTypeKeys(false)
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_28(__valueRangeArg)
    }
    
    // 'valueType' attribute on TypeKeyCell (id=Type_Cell) at APDClauseTermsPopup.pcf: line 78, column 44
    function verifyValueType_23 () : void {
      var __valueTypeArg : APDFieldType
      // If this assignment statement fails to compile, that means that the declared valueType
      // is not a valid type for use with this Input or Cell type
      var __requiredTypeArg : gw.entity.TypeKey = __valueTypeArg
    }
    
    // 'visible' attribute on TextCell (id=Name_Cell) at APDClauseTermsPopup.pcf: line 156, column 44
    function visible_114 () : java.lang.Boolean {
      return inDevelopMode
    }
    
    // 'visible' attribute on MenuItem (id=DropDownDefinition) at APDClauseTermsPopup.pcf: line 78, column 44
    function visible_12 () : java.lang.Boolean {
      return term.Type == APDFieldType.TC_TYPEKEY
    }
    
    // 'valueVisible' attribute on TextCell (id=Tags_Cell) at APDClauseTermsPopup.pcf: line 127, column 36
    function visible_88 () : java.lang.Boolean {
      return term.ShowDisplayValue
    }
    
    // 'valueVisible' attribute on CheckBoxCell (id=Scalable_Cell) at APDClauseTermsPopup.pcf: line 143, column 49
    function visible_99 () : java.lang.Boolean {
      return term.CanScale
    }
    
    property get prevFieldType () : APDFieldType {
      return getVariableValue("prevFieldType", 2) as APDFieldType
    }
    
    property set prevFieldType ($arg :  APDFieldType) {
      setVariableValue("prevFieldType", 2, $arg)
    }
    
    property get term () : APDTerm {
      return getIteratedValue(2) as APDTerm
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/tools/apd/APDClauseTermsPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ListDetailPanel2ExpressionsImpl extends APDClauseTermsPopupExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on PanelRef (id=ScheduleTermLocalizedValues) at APDClauseTermsPopup.pcf: line 287, column 49
    function def_onEnter_172 (def :  pcf.LocalizedValuesDV) : void {
      def.onEnter(scheduleTermDetails, {"Label", "Description"}, {DisplayKey.get("Web.APDProductScreen.APDField.Label"), DisplayKey.get("Web.APDProductScreen.APDField.Description")})
    }
    
    // 'def' attribute on PanelRef (id=ScheduleTermLocalizedValues) at APDClauseTermsPopup.pcf: line 287, column 49
    function def_refreshVariables_173 (def :  pcf.LocalizedValuesDV) : void {
      def.refreshVariables(scheduleTermDetails, {"Label", "Description"}, {DisplayKey.get("Web.APDProductScreen.APDField.Label"), DisplayKey.get("Web.APDProductScreen.APDField.Description")})
    }
    
    // 'label' attribute on TextCell (id=Description_Cell) at APDClauseTermsPopup.pcf: line 258, column 45
    function label_128 () : java.lang.Object {
      return DisplayKey.get("Web.APD.RequiredForGeneration", DisplayKey.get("Web.APDProductScreen.APDField.Description"))
    }
    
    // 'label' attribute on TextCell (id=Name_Cell) at APDClauseTermsPopup.pcf: line 265, column 44
    function label_129 () : java.lang.Object {
      return DisplayKey.get("Web.APD.RequiredForGeneration", DisplayKey.get("Web.APDProductScreen.APDField.Name"))
    }
    
    // 'sortBy' attribute on IteratorSort at APDClauseTermsPopup.pcf: line 211, column 32
    function sortBy_127 (term :  APDTerm) : java.lang.Object {
      return term.Sequence
    }
    
    // 'toCreateAndAdd' attribute on RowIterator (id=ScheduleTerms) at APDClauseTermsPopup.pcf: line 208, column 37
    function toCreateAndAdd_169 () : APDTerm {
      return clause.createAndAddScheduleTerm()
    }
    
    // 'toRemove' attribute on RowIterator (id=ScheduleTerms) at APDClauseTermsPopup.pcf: line 208, column 37
    function toRemove_170 (term :  APDTerm) : void {
      clause.removeScheduleTerm(term)
    }
    
    // 'value' attribute on RowIterator (id=ScheduleTerms) at APDClauseTermsPopup.pcf: line 208, column 37
    function value_171 () : APDTerm[] {
      return clause.ScheduleTerms
    }
    
    // 'visible' attribute on TextCell (id=Name_Cell) at APDClauseTermsPopup.pcf: line 265, column 44
    function visible_130 () : java.lang.Boolean {
      return inDevelopMode
    }
    
    property get scheduleTermDetails () : APDTerm {
      return getCurrentSelection(1) as APDTerm
    }
    
    property set scheduleTermDetails ($arg :  APDTerm) {
      setCurrentSelection(1, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/tools/apd/APDClauseTermsPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ListDetailPanelExpressionsImpl extends APDClauseTermsPopupExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on PanelRef (id=TermLocalizedValues) at APDClauseTermsPopup.pcf: line 185, column 41
    function def_onEnter_125 (def :  pcf.LocalizedValuesDV) : void {
      def.onEnter(termDetail, {"Label", "Description"}, {DisplayKey.get("Web.APDProductScreen.APDField.Label"), DisplayKey.get("Web.APDProductScreen.APDField.Description")})
    }
    
    // 'def' attribute on PanelRef (id=TermLocalizedValues) at APDClauseTermsPopup.pcf: line 185, column 41
    function def_refreshVariables_126 (def :  pcf.LocalizedValuesDV) : void {
      def.refreshVariables(termDetail, {"Label", "Description"}, {DisplayKey.get("Web.APDProductScreen.APDField.Label"), DisplayKey.get("Web.APDProductScreen.APDField.Description")})
    }
    
    // 'label' attribute on TextCell (id=Description_Cell) at APDClauseTermsPopup.pcf: line 149, column 45
    function label_3 () : java.lang.Object {
      return DisplayKey.get("Web.APD.RequiredForGeneration", DisplayKey.get("Web.APDProductScreen.APDField.Description"))
    }
    
    // 'label' attribute on TextCell (id=Name_Cell) at APDClauseTermsPopup.pcf: line 156, column 44
    function label_4 () : java.lang.Object {
      return DisplayKey.get("Web.APD.RequiredForGeneration", DisplayKey.get("Web.APDProductScreen.APDField.Name"))
    }
    
    // 'sortBy' attribute on IteratorSort at APDClauseTermsPopup.pcf: line 58, column 32
    function sortBy_2 (term :  APDTerm) : java.lang.Object {
      return term.Sequence
    }
    
    // 'toCreateAndAdd' attribute on RowIterator (id=Terms) at APDClauseTermsPopup.pcf: line 51, column 37
    function toCreateAndAdd_122 () : APDTerm {
      return clause.createAndAddTerm()
    }
    
    // 'toRemove' attribute on RowIterator (id=Terms) at APDClauseTermsPopup.pcf: line 51, column 37
    function toRemove_123 (term :  APDTerm) : void {
      clause.removeTerm(term)
    }
    
    // 'value' attribute on RowIterator (id=Terms) at APDClauseTermsPopup.pcf: line 51, column 37
    function value_124 () : APDTerm[] {
      return clause.StandardTerms
    }
    
    // 'visible' attribute on TextCell (id=Name_Cell) at APDClauseTermsPopup.pcf: line 156, column 44
    function visible_5 () : java.lang.Boolean {
      return inDevelopMode
    }
    
    property get termDetail () : APDTerm {
      return getCurrentSelection(1) as APDTerm
    }
    
    property set termDetail ($arg :  APDTerm) {
      setCurrentSelection(1, $arg)
    }
    
    
  }
  
  
}