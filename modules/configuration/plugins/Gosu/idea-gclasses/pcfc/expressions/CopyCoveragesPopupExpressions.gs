package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/pa/policy/CopyCoveragesPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class CopyCoveragesPopupExpressions {
  @javax.annotation.Generated("config/web/pcf/line/pa/policy/CopyCoveragesPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class CopyCoveragesPopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (period :  PolicyPeriod) : int {
      return 0
    }
    
    // 'action' attribute on ToolbarButton (id=copyAllCoverages) at CopyCoveragesPopup.pcf: line 39, column 85
    function action_5 () : void {
      copyFromVehicle.copyCoverages(copyToVehicles); CurrentLocation.commit()
    }
    
    // 'action' attribute on ToolbarButton (id=cancelCopyCoverages) at CopyCoveragesPopup.pcf: line 43, column 84
    function action_6 () : void {
      CurrentLocation.cancel()
    }
    
    // 'allCheckedRowsAction' attribute on CheckedValuesToolbarButton (id=copyCoverage) at CopyCoveragesPopup.pcf: line 34, column 82
    function allCheckedRowsAction_3 (CheckedValues :  PersonalVehicle[], CheckedValuesErrors :  java.util.Map) : void {
      copyFromVehicle.copyCoverages(CheckedValues); CurrentLocation.commit()
    }
    
    // 'available' attribute on ToolbarButton (id=copyAllCoverages) at CopyCoveragesPopup.pcf: line 39, column 85
    function available_4 () : java.lang.Boolean {
      return copyFromVehicle != null
    }
    
    // 'def' attribute on PanelRef (id=CoveragesPanel) at CopyCoveragesPopup.pcf: line 70, column 30
    function def_onEnter_13 (def :  pcf.PersonalAuto_VehicleCoverageDetailDV) : void {
      def.onEnter(copyFromVehicle, false)
    }
    
    // 'def' attribute on PanelRef at CopyCoveragesPopup.pcf: line 73, column 43
    function def_onEnter_16 (def :  pcf.CopyCoverage_CopyToLV) : void {
      def.onEnter(pAVehicles.where(\ p -> p.ID != copyFromVehicle.ID))
    }
    
    // 'def' attribute on PanelRef (id=CoveragesPanel) at CopyCoveragesPopup.pcf: line 70, column 30
    function def_refreshVariables_14 (def :  pcf.PersonalAuto_VehicleCoverageDetailDV) : void {
      def.refreshVariables(copyFromVehicle, false)
    }
    
    // 'def' attribute on PanelRef at CopyCoveragesPopup.pcf: line 73, column 43
    function def_refreshVariables_17 (def :  pcf.CopyCoverage_CopyToLV) : void {
      def.refreshVariables(pAVehicles.where(\ p -> p.ID != copyFromVehicle.ID))
    }
    
    // 'value' attribute on RangeInput (id=copyFrom_Input) at CopyCoveragesPopup.pcf: line 61, column 30
    function defaultSetter_8 (__VALUE_TO_SET :  java.lang.Object) : void {
      copyFromVehicle = (__VALUE_TO_SET as entity.PersonalVehicle)
    }
    
    // 'initialValue' attribute on Variable at CopyCoveragesPopup.pcf: line 18, column 33
    function initialValue_0 () : PersonalVehicle[] {
      return period.PersonalAutoLine.Vehicles
    }
    
    // 'initialValue' attribute on Variable at CopyCoveragesPopup.pcf: line 22, column 31
    function initialValue_1 () : PersonalVehicle {
      return null
    }
    
    // 'initialValue' attribute on Variable at CopyCoveragesPopup.pcf: line 27, column 40
    function initialValue_2 () : entity.PersonalVehicle[] {
      return pAVehicles.where(\ p -> p.ID != copyFromVehicle.ID)
    }
    
    // 'valueRange' attribute on RangeInput (id=copyFrom_Input) at CopyCoveragesPopup.pcf: line 61, column 30
    function valueRange_9 () : java.lang.Object {
      return pAVehicles
    }
    
    // 'value' attribute on RangeInput (id=copyFrom_Input) at CopyCoveragesPopup.pcf: line 61, column 30
    function value_7 () : entity.PersonalVehicle {
      return copyFromVehicle
    }
    
    // 'valueRange' attribute on RangeInput (id=copyFrom_Input) at CopyCoveragesPopup.pcf: line 61, column 30
    function verifyValueRangeIsAllowedType_10 ($$arg :  entity.PersonalVehicle[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=copyFrom_Input) at CopyCoveragesPopup.pcf: line 61, column 30
    function verifyValueRangeIsAllowedType_10 ($$arg :  gw.api.database.IQueryBeanResult<entity.PersonalVehicle>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=copyFrom_Input) at CopyCoveragesPopup.pcf: line 61, column 30
    function verifyValueRangeIsAllowedType_10 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=copyFrom_Input) at CopyCoveragesPopup.pcf: line 61, column 30
    function verifyValueRange_11 () : void {
      var __valueRangeArg = pAVehicles
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_10(__valueRangeArg)
    }
    
    override property get CurrentLocation () : pcf.CopyCoveragesPopup {
      return super.CurrentLocation as pcf.CopyCoveragesPopup
    }
    
    property get copyFromVehicle () : PersonalVehicle {
      return getVariableValue("copyFromVehicle", 0) as PersonalVehicle
    }
    
    property set copyFromVehicle ($arg :  PersonalVehicle) {
      setVariableValue("copyFromVehicle", 0, $arg)
    }
    
    property get copyToVehicles () : entity.PersonalVehicle[] {
      return getVariableValue("copyToVehicles", 0) as entity.PersonalVehicle[]
    }
    
    property set copyToVehicles ($arg :  entity.PersonalVehicle[]) {
      setVariableValue("copyToVehicles", 0, $arg)
    }
    
    property get pAVehicles () : PersonalVehicle[] {
      return getVariableValue("pAVehicles", 0) as PersonalVehicle[]
    }
    
    property set pAVehicles ($arg :  PersonalVehicle[]) {
      setVariableValue("pAVehicles", 0, $arg)
    }
    
    property get period () : PolicyPeriod {
      return getVariableValue("period", 0) as PolicyPeriod
    }
    
    property set period ($arg :  PolicyPeriod) {
      setVariableValue("period", 0, $arg)
    }
    
    
  }
  
  
}