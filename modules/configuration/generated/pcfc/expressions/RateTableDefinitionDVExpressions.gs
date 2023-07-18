package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/rating/RateTableDefinitionDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class RateTableDefinitionDVExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/rating/RateTableDefinitionDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class RateTableDefinitionDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'actionAvailable' attribute on AltUserInput (id=LastUpdatedBy_Input) at RateTableDefinitionDV.pcf: line 59, column 45
    function actionAvailable_38 () : java.lang.Boolean {
      return tableDefinition.UpdateUser != null
    }
    
    // MenuItem (id=UserBrowseMenuItem) at RateTableDefinitionDV.pcf: line 59, column 45
    function action_34 () : void {
      pcf.UserSearchPopup.push()
    }
    
    // 'action' attribute on AltUserInput (id=LastUpdatedBy_Input) at RateTableDefinitionDV.pcf: line 59, column 45
    function action_36 () : void {
      UserDetailPage.go(tableDefinition.UpdateUser)
    }
    
    // MenuItem (id=UserBrowseMenuItem) at RateTableDefinitionDV.pcf: line 59, column 45
    function action_dest_35 () : pcf.api.Destination {
      return pcf.UserSearchPopup.createDestination()
    }
    
    // 'action' attribute on AltUserInput (id=LastUpdatedBy_Input) at RateTableDefinitionDV.pcf: line 59, column 45
    function action_dest_37 () : pcf.api.Destination {
      return pcf.UserDetailPage.createDestination(tableDefinition.UpdateUser)
    }
    
    // 'value' attribute on TextInput (id=Description_Input) at RateTableDefinitionDV.pcf: line 31, column 44
    function defaultSetter_13 (__VALUE_TO_SET :  java.lang.Object) : void {
      tableDefinition.TableDesc = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on RangeInput (id=PolicyLine_Input) at RateTableDefinitionDV.pcf: line 41, column 38
    function defaultSetter_18 (__VALUE_TO_SET :  java.lang.Object) : void {
      tableDefinition.PolicyLine = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=Code_Input) at RateTableDefinitionDV.pcf: line 19, column 44
    function defaultSetter_2 (__VALUE_TO_SET :  java.lang.Object) : void {
      tableDefinition.TableCode = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=EntityName_Input) at RateTableDefinitionDV.pcf: line 50, column 44
    function defaultSetter_30 (__VALUE_TO_SET :  java.lang.Object) : void {
      tableDefinition.EntityName = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=Name_Input) at RateTableDefinitionDV.pcf: line 26, column 47
    function defaultSetter_8 (__VALUE_TO_SET :  java.lang.Object) : void {
      tableDefinition.TableName = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'editable' attribute on TextInput (id=Code_Input) at RateTableDefinitionDV.pcf: line 19, column 44
    function editable_0 () : java.lang.Boolean {
      return definitionNotInUse
    }
    
    // 'onChange' attribute on PostOnChange at RateTableDefinitionDV.pcf: line 52, column 66
    function onChange_26 () : void {
      tableDefinition.resetPhysicalColumnNames()
    }
    
    // 'optionLabel' attribute on RangeInput (id=PolicyLine_Input) at RateTableDefinitionDV.pcf: line 41, column 38
    function optionLabel_20 (VALUE :  java.lang.String) : java.lang.String {
      return gw.api.productmodel.PolicyLinePatternLookup.getByPublicID(VALUE).DisplayName
    }
    
    // 'outputConversion' attribute on TextInput (id=EntityName_Input) at RateTableDefinitionDV.pcf: line 50, column 44
    function outputConversion_28 (VALUE :  java.lang.String) : java.lang.String {
      return VALUE == "DefaultRateFactorRow"? DisplayKey.get("Web.Rating.RateTables.EntityName.DefaultEntityName") : VALUE
    }
    
    // 'valueRange' attribute on RangeInput (id=PolicyLine_Input) at RateTableDefinitionDV.pcf: line 41, column 38
    function valueRange_21 () : java.lang.Object {
      return gw.rating.rtm.util.ProductModelUtils.getAllPolicyLines()
    }
    
    // 'value' attribute on TextInput (id=Code_Input) at RateTableDefinitionDV.pcf: line 19, column 44
    function valueRoot_3 () : java.lang.Object {
      return tableDefinition
    }
    
    // 'value' attribute on TextInput (id=Code_Input) at RateTableDefinitionDV.pcf: line 19, column 44
    function value_1 () : java.lang.String {
      return tableDefinition.TableCode
    }
    
    // 'value' attribute on TextInput (id=Description_Input) at RateTableDefinitionDV.pcf: line 31, column 44
    function value_12 () : java.lang.String {
      return tableDefinition.TableDesc
    }
    
    // 'value' attribute on RangeInput (id=PolicyLine_Input) at RateTableDefinitionDV.pcf: line 41, column 38
    function value_17 () : java.lang.String {
      return tableDefinition.PolicyLine
    }
    
    // 'value' attribute on TextInput (id=EntityName_Input) at RateTableDefinitionDV.pcf: line 50, column 44
    function value_29 () : java.lang.String {
      return tableDefinition.EntityName
    }
    
    // 'value' attribute on AltUserInput (id=LastUpdatedBy_Input) at RateTableDefinitionDV.pcf: line 59, column 45
    function value_39 () : entity.User {
      return tableDefinition.UpdateUser
    }
    
    // 'value' attribute on DateInput (id=LastUpdateTime_Input) at RateTableDefinitionDV.pcf: line 65, column 44
    function value_42 () : java.util.Date {
      return tableDefinition.UpdateTime
    }
    
    // 'value' attribute on TextInput (id=Name_Input) at RateTableDefinitionDV.pcf: line 26, column 47
    function value_7 () : java.lang.String {
      return tableDefinition.TableName
    }
    
    // 'valueRange' attribute on RangeInput (id=PolicyLine_Input) at RateTableDefinitionDV.pcf: line 41, column 38
    function verifyValueRangeIsAllowedType_22 ($$arg :  java.lang.String[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=PolicyLine_Input) at RateTableDefinitionDV.pcf: line 41, column 38
    function verifyValueRangeIsAllowedType_22 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=PolicyLine_Input) at RateTableDefinitionDV.pcf: line 41, column 38
    function verifyValueRange_23 () : void {
      var __valueRangeArg = gw.rating.rtm.util.ProductModelUtils.getAllPolicyLines()
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_22(__valueRangeArg)
    }
    
    // 'visible' attribute on TextInput (id=Name_Input) at RateTableDefinitionDV.pcf: line 26, column 47
    function visible_6 () : java.lang.Boolean {
      return CurrentLocation.InEditMode
    }
    
    property get definitionNotInUse () : boolean {
      return getRequireValue("definitionNotInUse", 0) as java.lang.Boolean
    }
    
    property set definitionNotInUse ($arg :  boolean) {
      setRequireValue("definitionNotInUse", 0, $arg)
    }
    
    property get tableDefinition () : RateTableDefinition {
      return getRequireValue("tableDefinition", 0) as RateTableDefinition
    }
    
    property set tableDefinition ($arg :  RateTableDefinition) {
      setRequireValue("tableDefinition", 0, $arg)
    }
    
    
  }
  
  
}