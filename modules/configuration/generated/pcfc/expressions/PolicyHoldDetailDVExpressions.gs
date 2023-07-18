package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/policyholds/PolicyHoldDetailDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class PolicyHoldDetailDVExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/policyholds/PolicyHoldDetailDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PolicyHoldDetailDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'actionAvailable' attribute on AltUserInput (id=CreatedBy_Input) at PolicyHoldDetailDV.pcf: line 50, column 35
    function actionAvailable_32 () : java.lang.Boolean {
      return policyHold.CreateUser != null
    }
    
    // 'actionAvailable' attribute on AltUserInput (id=LastUpdatedBy_Input) at PolicyHoldDetailDV.pcf: line 66, column 35
    function actionAvailable_49 () : java.lang.Boolean {
      return policyHold.UpdateUser != null
    }
    
    // MenuItem (id=UserBrowseMenuItem) at PolicyHoldDetailDV.pcf: line 50, column 35
    function action_27 () : void {
      pcf.UserSearchPopup.push()
    }
    
    // 'action' attribute on AltUserInput (id=CreatedBy_Input) at PolicyHoldDetailDV.pcf: line 50, column 35
    function action_30 () : void {
      UserDetailPage.go(policyHold.CreateUser)
    }
    
    // MenuItem (id=UserBrowseMenuItem) at PolicyHoldDetailDV.pcf: line 66, column 35
    function action_44 () : void {
      pcf.UserSearchPopup.push()
    }
    
    // 'action' attribute on AltUserInput (id=LastUpdatedBy_Input) at PolicyHoldDetailDV.pcf: line 66, column 35
    function action_47 () : void {
      UserDetailPage.go(policyHold.UpdateUser)
    }
    
    // MenuItem (id=UserBrowseMenuItem) at PolicyHoldDetailDV.pcf: line 50, column 35
    function action_dest_28 () : pcf.api.Destination {
      return pcf.UserSearchPopup.createDestination()
    }
    
    // 'action' attribute on AltUserInput (id=CreatedBy_Input) at PolicyHoldDetailDV.pcf: line 50, column 35
    function action_dest_31 () : pcf.api.Destination {
      return pcf.UserDetailPage.createDestination(policyHold.CreateUser)
    }
    
    // MenuItem (id=UserBrowseMenuItem) at PolicyHoldDetailDV.pcf: line 66, column 35
    function action_dest_45 () : pcf.api.Destination {
      return pcf.UserSearchPopup.createDestination()
    }
    
    // 'action' attribute on AltUserInput (id=LastUpdatedBy_Input) at PolicyHoldDetailDV.pcf: line 66, column 35
    function action_dest_48 () : pcf.api.Destination {
      return pcf.UserDetailPage.createDestination(policyHold.UpdateUser)
    }
    
    // 'available' attribute on RangeInput (id=UWIssueType_Input) at PolicyHoldDetailDV.pcf: line 86, column 41
    function available_59 () : java.lang.Boolean {
      return policyHold.HoldType != null
    }
    
    // 'value' attribute on TextInput (id=Description_Input) at PolicyHoldDetailDV.pcf: line 32, column 41
    function defaultSetter_14 (__VALUE_TO_SET :  java.lang.Object) : void {
      policyHold.Description = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on DateInput (id=StartDate_Input) at PolicyHoldDetailDV.pcf: line 37, column 39
    function defaultSetter_18 (__VALUE_TO_SET :  java.lang.Object) : void {
      policyHold.StartDate = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on DateInput (id=EndDate_Input) at PolicyHoldDetailDV.pcf: line 43, column 37
    function defaultSetter_23 (__VALUE_TO_SET :  java.lang.Object) : void {
      policyHold.EndDate = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on TypeKeyInput (id=HoldType_Input) at PolicyHoldDetailDV.pcf: line 19, column 48
    function defaultSetter_3 (__VALUE_TO_SET :  java.lang.Object) : void {
      policyHold.HoldType = (__VALUE_TO_SET as typekey.UWIssueCheckingSet)
    }
    
    // 'value' attribute on RangeInput (id=UWIssueType_Input) at PolicyHoldDetailDV.pcf: line 86, column 41
    function defaultSetter_61 (__VALUE_TO_SET :  java.lang.Object) : void {
      policyHold.IssueType = (__VALUE_TO_SET as entity.UWIssueType)
    }
    
    // 'value' attribute on TextInput (id=LongDesc_Input) at PolicyHoldDetailDV.pcf: line 92, column 45
    function defaultSetter_70 (__VALUE_TO_SET :  java.lang.Object) : void {
      policyHold.UWIssueLongDesc = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=Code_Input) at PolicyHoldDetailDV.pcf: line 27, column 44
    function defaultSetter_9 (__VALUE_TO_SET :  java.lang.Object) : void {
      policyHold.PolicyHoldCode = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'editable' attribute on TypeKeyInput (id=HoldType_Input) at PolicyHoldDetailDV.pcf: line 19, column 48
    function editable_1 () : java.lang.Boolean {
      return policyHold.New
    }
    
    // 'label' attribute on DateInput (id=CreateTime_Input) at PolicyHoldDetailDV.pcf: line 57, column 34
    function label_38 () : java.lang.Object {
      return DisplayKey.get("Web.Admin.PolicyHold.CreateTime") 
    }
    
    // 'onChange' attribute on PostOnChange at PolicyHoldDetailDV.pcf: line 21, column 114
    function onChange_0 () : void {
      if(policyHold.Rules.HasElements){policyHold.Rules.each(\ p -> {p.JobDateType = null})};
    }
    
    // 'validationExpression' attribute on DateInput (id=EndDate_Input) at PolicyHoldDetailDV.pcf: line 43, column 37
    function validationExpression_21 () : java.lang.Object {
      return policyHold.EndDate < policyHold.StartDate ? DisplayKey.get("Validation.PolicyHold.HoldEndDateValidation") : null
    }
    
    // 'valueRange' attribute on RangeInput (id=UWIssueType_Input) at PolicyHoldDetailDV.pcf: line 86, column 41
    function valueRange_63 () : java.lang.Object {
      return UWIssueType.finder.findUWIssueTypeByCheckingSet(policyHold.HoldType)
    }
    
    // 'value' attribute on TypeKeyInput (id=HoldType_Input) at PolicyHoldDetailDV.pcf: line 19, column 48
    function valueRoot_4 () : java.lang.Object {
      return policyHold
    }
    
    // 'value' attribute on TextInput (id=Description_Input) at PolicyHoldDetailDV.pcf: line 32, column 41
    function value_13 () : java.lang.String {
      return policyHold.Description
    }
    
    // 'value' attribute on DateInput (id=StartDate_Input) at PolicyHoldDetailDV.pcf: line 37, column 39
    function value_17 () : java.util.Date {
      return policyHold.StartDate
    }
    
    // 'value' attribute on TypeKeyInput (id=HoldType_Input) at PolicyHoldDetailDV.pcf: line 19, column 48
    function value_2 () : typekey.UWIssueCheckingSet {
      return policyHold.HoldType
    }
    
    // 'value' attribute on DateInput (id=EndDate_Input) at PolicyHoldDetailDV.pcf: line 43, column 37
    function value_22 () : java.util.Date {
      return policyHold.EndDate
    }
    
    // 'value' attribute on AltUserInput (id=CreatedBy_Input) at PolicyHoldDetailDV.pcf: line 50, column 35
    function value_33 () : entity.User {
      return policyHold.CreateUser
    }
    
    // 'value' attribute on DateInput (id=CreateTime_Input) at PolicyHoldDetailDV.pcf: line 57, column 34
    function value_39 () : java.util.Date {
      return policyHold.CreateTime
    }
    
    // 'value' attribute on AltUserInput (id=LastUpdatedBy_Input) at PolicyHoldDetailDV.pcf: line 66, column 35
    function value_50 () : entity.User {
      return policyHold.UpdateUser
    }
    
    // 'value' attribute on DateInput (id=LastUpdateTime_Input) at PolicyHoldDetailDV.pcf: line 73, column 34
    function value_55 () : java.util.Date {
      return policyHold.UpdateTime
    }
    
    // 'value' attribute on RangeInput (id=UWIssueType_Input) at PolicyHoldDetailDV.pcf: line 86, column 41
    function value_60 () : entity.UWIssueType {
      return policyHold.IssueType
    }
    
    // 'value' attribute on TextInput (id=LongDesc_Input) at PolicyHoldDetailDV.pcf: line 92, column 45
    function value_69 () : java.lang.String {
      return policyHold.UWIssueLongDesc
    }
    
    // 'value' attribute on TextInput (id=Code_Input) at PolicyHoldDetailDV.pcf: line 27, column 44
    function value_8 () : java.lang.String {
      return policyHold.PolicyHoldCode
    }
    
    // 'valueRange' attribute on RangeInput (id=UWIssueType_Input) at PolicyHoldDetailDV.pcf: line 86, column 41
    function verifyValueRangeIsAllowedType_64 ($$arg :  entity.UWIssueType[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=UWIssueType_Input) at PolicyHoldDetailDV.pcf: line 86, column 41
    function verifyValueRangeIsAllowedType_64 ($$arg :  gw.api.database.IQueryBeanResult<entity.UWIssueType>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=UWIssueType_Input) at PolicyHoldDetailDV.pcf: line 86, column 41
    function verifyValueRangeIsAllowedType_64 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=UWIssueType_Input) at PolicyHoldDetailDV.pcf: line 86, column 41
    function verifyValueRange_65 () : void {
      var __valueRangeArg = UWIssueType.finder.findUWIssueTypeByCheckingSet(policyHold.HoldType)
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_64(__valueRangeArg)
    }
    
    // 'visible' attribute on AltUserInput (id=CreatedBy_Input) at PolicyHoldDetailDV.pcf: line 50, column 35
    function visible_29 () : java.lang.Boolean {
      return showTimeStamps
    }
    
    property get policyHold () : PolicyHold {
      return getRequireValue("policyHold", 0) as PolicyHold
    }
    
    property set policyHold ($arg :  PolicyHold) {
      setRequireValue("policyHold", 0, $arg)
    }
    
    property get showTimeStamps () : boolean {
      return getRequireValue("showTimeStamps", 0) as java.lang.Boolean
    }
    
    property set showTimeStamps ($arg :  boolean) {
      setRequireValue("showTimeStamps", 0, $arg)
    }
    
    
  }
  
  
}