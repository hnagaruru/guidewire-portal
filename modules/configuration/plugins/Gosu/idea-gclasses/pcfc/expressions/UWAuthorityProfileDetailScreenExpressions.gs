package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/UWAuthorityProfileDetailScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class UWAuthorityProfileDetailScreenExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/UWAuthorityProfileDetailScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends UWAuthorityProfileDetailScreenExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'pickLocation' attribute on PickerCell (id=Type_Cell) at UWAuthorityProfileDetailScreen.pcf: line 73, column 50
    function action_18 () : void {
      UWIssueTypeSearchPopup.push(profile, uiHelper.SearchStringCache)
    }
    
    // 'pickLocation' attribute on PickerCell (id=Type_Cell) at UWAuthorityProfileDetailScreen.pcf: line 73, column 50
    function action_dest_19 () : pcf.api.Destination {
      return pcf.UWIssueTypeSearchPopup.createDestination(profile, uiHelper.SearchStringCache)
    }
    
    // 'value' attribute on PickerCell (id=Type_Cell) at UWAuthorityProfileDetailScreen.pcf: line 73, column 50
    function defaultSetter_24 (__VALUE_TO_SET :  java.lang.Object) : void {
      grant.IssueType = (__VALUE_TO_SET as entity.UWIssueType)
    }
    
    // 'value' attribute on RangeCell (id=ComparisonType_Cell) at UWAuthorityProfileDetailScreen.pcf: line 83, column 55
    function defaultSetter_31 (__VALUE_TO_SET :  java.lang.Object) : void {
      grant.ComparisonType = (__VALUE_TO_SET as typekey.ValueComparator)
    }
    
    // 'value' attribute on TextCell (id=Value_Cell) at UWAuthorityProfileDetailScreen.pcf: line 93, column 39
    function defaultSetter_41 (__VALUE_TO_SET :  java.lang.Object) : void {
      grant.Value = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on RangeCell (id=Currency_Cell) at UWAuthorityProfileDetailScreen.pcf: line 103, column 68
    function defaultSetter_47 (__VALUE_TO_SET :  java.lang.Object) : void {
      grant.Currency = (__VALUE_TO_SET as typekey.Currency)
    }
    
    // 'editable' attribute on PickerCell (id=Type_Cell) at UWAuthorityProfileDetailScreen.pcf: line 73, column 50
    function editable_20 () : java.lang.Boolean {
      return grant.IssueType == null
    }
    
    // 'editable' attribute on RangeCell (id=ComparisonType_Cell) at UWAuthorityProfileDetailScreen.pcf: line 83, column 55
    function editable_29 () : java.lang.Boolean {
      return uiHelper.requiresValue(grant.IssueType)
    }
    
    // 'editable' attribute on TextCell (id=Value_Cell) at UWAuthorityProfileDetailScreen.pcf: line 93, column 39
    function editable_38 () : java.lang.Boolean {
      return grant.IssueType != null and grant.IssueType.Comparator != TC_NONE and grant.ComparisonType != TC_ANY
    }
    
    // 'editable' attribute on RangeCell (id=Currency_Cell) at UWAuthorityProfileDetailScreen.pcf: line 103, column 68
    function editable_45 () : java.lang.Boolean {
      return uiHelper.requiresCurrency(grant.ComparisonType)
    }
    
    // 'initialValue' attribute on Variable at UWAuthorityProfileDetailScreen.pcf: line 60, column 68
    function initialValue_16 () : gw.web.community.UWAuthorityGrantUIWrapper {
      return new gw.web.community.UWAuthorityGrantUIWrapper(originalGrant)
    }
    
    // RowIterator at UWAuthorityProfileDetailScreen.pcf: line 53, column 53
    function initializeVariables_58 () : void {
        grant = new gw.web.community.UWAuthorityGrantUIWrapper(originalGrant);

    }
    
    // 'inputConversion' attribute on PickerCell (id=Type_Cell) at UWAuthorityProfileDetailScreen.pcf: line 73, column 50
    function inputConversion_21 (VALUE :  java.lang.String) : java.lang.Object {
      return uiHelper.issueTypeIn(VALUE)
    }
    
    // 'onChange' attribute on PostOnChange at UWAuthorityProfileDetailScreen.pcf: line 75, column 72
    function onChange_17 () : void {
      uiHelper.updateValueAndCurrency(grant)
    }
    
    // 'onChange' attribute on PostOnChange at UWAuthorityProfileDetailScreen.pcf: line 85, column 72
    function onChange_28 () : void {
      uiHelper.updateValueAndCurrency(grant)
    }
    
    // 'outputConversion' attribute on PickerCell (id=Type_Cell) at UWAuthorityProfileDetailScreen.pcf: line 73, column 50
    function outputConversion_22 (VALUE :  entity.UWIssueType) : java.lang.String {
      return uiHelper.issueTypeOut(VALUE)
    }
    
    // 'requestValidationExpression' attribute on TextCell (id=Value_Cell) at UWAuthorityProfileDetailScreen.pcf: line 93, column 39
    function requestValidationExpression_39 (VALUE :  java.lang.String) : java.lang.Object {
      return grant.validate(VALUE)
    }
    
    // 'valueRange' attribute on RangeCell (id=ComparisonType_Cell) at UWAuthorityProfileDetailScreen.pcf: line 83, column 55
    function valueRange_33 () : java.lang.Object {
      return uiHelper.validComparisonTypes(grant.IssueType)
    }
    
    // 'valueRange' attribute on RangeCell (id=Currency_Cell) at UWAuthorityProfileDetailScreen.pcf: line 103, column 68
    function valueRange_49 () : java.lang.Object {
      return Currency.getTypeKeys(false)
    }
    
    // 'value' attribute on PickerCell (id=Type_Cell) at UWAuthorityProfileDetailScreen.pcf: line 73, column 50
    function valueRoot_25 () : java.lang.Object {
      return grant
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at UWAuthorityProfileDetailScreen.pcf: line 109, column 56
    function valueRoot_56 () : java.lang.Object {
      return grant.IssueType
    }
    
    // 'value' attribute on PickerCell (id=Type_Cell) at UWAuthorityProfileDetailScreen.pcf: line 73, column 50
    function value_23 () : entity.UWIssueType {
      return grant.IssueType
    }
    
    // 'value' attribute on RangeCell (id=ComparisonType_Cell) at UWAuthorityProfileDetailScreen.pcf: line 83, column 55
    function value_30 () : typekey.ValueComparator {
      return grant.ComparisonType
    }
    
    // 'value' attribute on TextCell (id=Value_Cell) at UWAuthorityProfileDetailScreen.pcf: line 93, column 39
    function value_40 () : java.lang.String {
      return grant.Value
    }
    
    // 'value' attribute on RangeCell (id=Currency_Cell) at UWAuthorityProfileDetailScreen.pcf: line 103, column 68
    function value_46 () : typekey.Currency {
      return grant.Currency
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at UWAuthorityProfileDetailScreen.pcf: line 109, column 56
    function value_55 () : java.lang.String {
      return grant.IssueType.Description
    }
    
    // 'valueRange' attribute on RangeCell (id=ComparisonType_Cell) at UWAuthorityProfileDetailScreen.pcf: line 83, column 55
    function verifyValueRangeIsAllowedType_34 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=ComparisonType_Cell) at UWAuthorityProfileDetailScreen.pcf: line 83, column 55
    function verifyValueRangeIsAllowedType_34 ($$arg :  typekey.ValueComparator[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=Currency_Cell) at UWAuthorityProfileDetailScreen.pcf: line 103, column 68
    function verifyValueRangeIsAllowedType_50 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=Currency_Cell) at UWAuthorityProfileDetailScreen.pcf: line 103, column 68
    function verifyValueRangeIsAllowedType_50 ($$arg :  typekey.Currency[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=ComparisonType_Cell) at UWAuthorityProfileDetailScreen.pcf: line 83, column 55
    function verifyValueRange_35 () : void {
      var __valueRangeArg = uiHelper.validComparisonTypes(grant.IssueType)
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_34(__valueRangeArg)
    }
    
    // 'valueRange' attribute on RangeCell (id=Currency_Cell) at UWAuthorityProfileDetailScreen.pcf: line 103, column 68
    function verifyValueRange_51 () : void {
      var __valueRangeArg = Currency.getTypeKeys(false)
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_50(__valueRangeArg)
    }
    
    // 'visible' attribute on RangeCell (id=Currency_Cell) at UWAuthorityProfileDetailScreen.pcf: line 103, column 68
    function visible_53 () : java.lang.Boolean {
      return uiHelper.shouldDisplayCurrencyColumn()
    }
    
    property get grant () : gw.web.community.UWAuthorityGrantUIWrapper {
      return getVariableValue("grant", 1) as gw.web.community.UWAuthorityGrantUIWrapper
    }
    
    property set grant ($arg :  gw.web.community.UWAuthorityGrantUIWrapper) {
      setVariableValue("grant", 1, $arg)
    }
    
    property get grantTypeModelValue () : String {
      return getVariableValue("grantTypeModelValue", 1) as String
    }
    
    property set grantTypeModelValue ($arg :  String) {
      setVariableValue("grantTypeModelValue", 1, $arg)
    }
    
    property get originalGrant () : entity.UWAuthorityGrant {
      return getIteratedValue(1) as entity.UWAuthorityGrant
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/admin/UWAuthorityProfileDetailScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class UWAuthorityProfileDetailScreenExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on PanelRef at UWAuthorityProfileDetailScreen.pcf: line 117, column 255
    function def_onEnter_62 (def :  pcf.LocalizedValuesDV) : void {
      def.onEnter(profile, { "Name", "Description"}, { DisplayKey.get("Web.Admin.UWAuthorityProfileDetailScreen.Name"), DisplayKey.get("Web.Admin.UWAuthorityProfileDetailScreen.ProfileDescription") })
    }
    
    // 'def' attribute on PanelRef at UWAuthorityProfileDetailScreen.pcf: line 117, column 255
    function def_refreshVariables_63 (def :  pcf.LocalizedValuesDV) : void {
      def.refreshVariables(profile, { "Name", "Description"}, { DisplayKey.get("Web.Admin.UWAuthorityProfileDetailScreen.Name"), DisplayKey.get("Web.Admin.UWAuthorityProfileDetailScreen.ProfileDescription") })
    }
    
    // 'value' attribute on TextInput (id=Name_Input) at UWAuthorityProfileDetailScreen.pcf: line 28, column 33
    function defaultSetter_3 (__VALUE_TO_SET :  java.lang.Object) : void {
      profile.Name = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextAreaInput (id=Description_Input) at UWAuthorityProfileDetailScreen.pcf: line 34, column 40
    function defaultSetter_7 (__VALUE_TO_SET :  java.lang.Object) : void {
      profile.Description = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'initialValue' attribute on Variable at UWAuthorityProfileDetailScreen.pcf: line 13, column 61
    function initialValue_0 () : gw.web.admin.UWAuthorityProfileDetailUIHelper {
      return new gw.web.admin.UWAuthorityProfileDetailUIHelper(profile)
    }
    
    // EditButtons at UWAuthorityProfileDetailScreen.pcf: line 16, column 29
    function label_1 () : java.lang.Object {
      return gw.api.util.LocationUtil.hasOwnBundle(CurrentLocation) ? DisplayKey.get("Button.Update") : DisplayKey.get("Button.OK")
    }
    
    // 'value' attribute on PickerCell (id=Type_Cell) at UWAuthorityProfileDetailScreen.pcf: line 73, column 50
    function sortValue_10 (originalGrant :  entity.UWAuthorityGrant) : java.lang.Object {
      var grant : gw.web.community.UWAuthorityGrantUIWrapper = (new gw.web.community.UWAuthorityGrantUIWrapper(originalGrant))
return grant.IssueType
    }
    
    // 'value' attribute on RangeCell (id=ComparisonType_Cell) at UWAuthorityProfileDetailScreen.pcf: line 83, column 55
    function sortValue_11 (originalGrant :  entity.UWAuthorityGrant) : java.lang.Object {
      var grant : gw.web.community.UWAuthorityGrantUIWrapper = (new gw.web.community.UWAuthorityGrantUIWrapper(originalGrant))
return grant.ComparisonType
    }
    
    // 'value' attribute on TextCell (id=Value_Cell) at UWAuthorityProfileDetailScreen.pcf: line 93, column 39
    function sortValue_12 (originalGrant :  entity.UWAuthorityGrant) : java.lang.Object {
      var grant : gw.web.community.UWAuthorityGrantUIWrapper = (new gw.web.community.UWAuthorityGrantUIWrapper(originalGrant))
return grant.Value
    }
    
    // 'value' attribute on RangeCell (id=Currency_Cell) at UWAuthorityProfileDetailScreen.pcf: line 103, column 68
    function sortValue_13 (originalGrant :  entity.UWAuthorityGrant) : java.lang.Object {
      var grant : gw.web.community.UWAuthorityGrantUIWrapper = (new gw.web.community.UWAuthorityGrantUIWrapper(originalGrant))
return grant.Currency
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at UWAuthorityProfileDetailScreen.pcf: line 109, column 56
    function sortValue_15 (originalGrant :  entity.UWAuthorityGrant) : java.lang.Object {
      var grant : gw.web.community.UWAuthorityGrantUIWrapper = (new gw.web.community.UWAuthorityGrantUIWrapper(originalGrant))
return grant.IssueType.Description
    }
    
    // 'toAdd' attribute on RowIterator at UWAuthorityProfileDetailScreen.pcf: line 53, column 53
    function toAdd_59 (originalGrant :  entity.UWAuthorityGrant) : void {
      profile.addToGrants(originalGrant)
    }
    
    // 'toRemove' attribute on RowIterator at UWAuthorityProfileDetailScreen.pcf: line 53, column 53
    function toRemove_60 (originalGrant :  entity.UWAuthorityGrant) : void {
      profile.removeFromGrants(originalGrant)
    }
    
    // 'value' attribute on TextInput (id=Name_Input) at UWAuthorityProfileDetailScreen.pcf: line 28, column 33
    function valueRoot_4 () : java.lang.Object {
      return profile
    }
    
    // 'value' attribute on TextInput (id=Name_Input) at UWAuthorityProfileDetailScreen.pcf: line 28, column 33
    function value_2 () : java.lang.String {
      return profile.Name
    }
    
    // 'value' attribute on TextAreaInput (id=Description_Input) at UWAuthorityProfileDetailScreen.pcf: line 34, column 40
    function value_6 () : java.lang.String {
      return profile.Description
    }
    
    // 'value' attribute on RowIterator at UWAuthorityProfileDetailScreen.pcf: line 53, column 53
    function value_61 () : entity.UWAuthorityGrant[] {
      return profile.Grants
    }
    
    // 'visible' attribute on RangeCell (id=Currency_Cell) at UWAuthorityProfileDetailScreen.pcf: line 103, column 68
    function visible_14 () : java.lang.Boolean {
      return uiHelper.shouldDisplayCurrencyColumn()
    }
    
    property get profile () : UWAuthorityProfile {
      return getRequireValue("profile", 0) as UWAuthorityProfile
    }
    
    property set profile ($arg :  UWAuthorityProfile) {
      setRequireValue("profile", 0, $arg)
    }
    
    property get uiHelper () : gw.web.admin.UWAuthorityProfileDetailUIHelper {
      return getVariableValue("uiHelper", 0) as gw.web.admin.UWAuthorityProfileDetailUIHelper
    }
    
    property set uiHelper ($arg :  gw.web.admin.UWAuthorityProfileDetailUIHelper) {
      setVariableValue("uiHelper", 0, $arg)
    }
    
    
  }
  
  
}