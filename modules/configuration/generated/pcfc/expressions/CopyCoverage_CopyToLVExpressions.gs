package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/pa/policy/CopyCoverage_CopyToLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class CopyCoverage_CopyToLVExpressions {
  @javax.annotation.Generated("config/web/pcf/line/pa/policy/CopyCoverage_CopyToLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class CopyCoverage_CopyToLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=description_Cell) at CopyCoverage_CopyToLV.pcf: line 26, column 46
    function sortValue_0 (copyToVehicle :  entity.PersonalVehicle) : java.lang.Object {
      return copyToVehicle.DisplayName
    }
    
    // 'value' attribute on TextCell (id=VehicleNumber_Cell) at CopyCoverage_CopyToLV.pcf: line 32, column 42
    function sortValue_1 (copyToVehicle :  entity.PersonalVehicle) : java.lang.Object {
      return copyToVehicle.VehicleNumber
    }
    
    // 'value' attribute on TextCell (id=vin_Cell) at CopyCoverage_CopyToLV.pcf: line 36, column 38
    function sortValue_2 (copyToVehicle :  entity.PersonalVehicle) : java.lang.Object {
      return copyToVehicle.Vin
    }
    
    // 'value' attribute on TextCell (id=comp_Cell) at CopyCoverage_CopyToLV.pcf: line 40, column 228
    function sortValue_3 (copyToVehicle :  entity.PersonalVehicle) : java.lang.Object {
      return copyToVehicle.PAComprehensiveCov.PACompDeductibleTerm.Value != null ? copyToVehicle.PAComprehensiveCov.PACompDeductibleTerm.DisplayValue : DisplayKey.get("Web.PolicyLine.CopyCoverages.NotSelected")
    }
    
    // 'value' attribute on TextCell (id=collision_Cell) at CopyCoverage_CopyToLV.pcf: line 44, column 220
    function sortValue_4 (copyToVehicle :  entity.PersonalVehicle) : java.lang.Object {
      return copyToVehicle.PACollisionCov.PACollDeductibleTerm.Value != null ? copyToVehicle.PACollisionCov.PACollDeductibleTerm.DisplayValue : DisplayKey.get("Web.PolicyLine.CopyCoverages.NotSelected")
    }
    
    // 'value' attribute on TextCell (id=towing_Cell) at CopyCoverage_CopyToLV.pcf: line 48, column 196
    function sortValue_5 (copyToVehicle :  entity.PersonalVehicle) : java.lang.Object {
      return copyToVehicle.PATowingLaborCovExists ? DisplayKey.get("Web.PolicyLine.CopyCoverages.Selected") : DisplayKey.get("Web.PolicyLine.CopyCoverages.NotSelected")
    }
    
    // 'value' attribute on TextCell (id=rental_Cell) at CopyCoverage_CopyToLV.pcf: line 52, column 229
    function sortValue_6 (copyToVehicle :  entity.PersonalVehicle) : java.lang.Object {
      return copyToVehicle.PARentalCov.PARentalTerm.PackageValue.Description != null ? copyToVehicle.PARentalCov.PARentalTerm.PackageValue.Description : DisplayKey.get("Web.PolicyLine.CopyCoverages.NotSelected")
    }
    
    // 'value' attribute on RowIterator (id=CopyToVehicleIterator) at CopyCoverage_CopyToLV.pcf: line 21, column 44
    function value_24 () : entity.PersonalVehicle[] {
      return copyToVehicles
    }
    
    property get copyToVehicles () : PersonalVehicle[] {
      return getRequireValue("copyToVehicles", 0) as PersonalVehicle[]
    }
    
    property set copyToVehicles ($arg :  PersonalVehicle[]) {
      setRequireValue("copyToVehicles", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/pa/policy/CopyCoverage_CopyToLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends CopyCoverage_CopyToLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=description_Cell) at CopyCoverage_CopyToLV.pcf: line 26, column 46
    function valueRoot_8 () : java.lang.Object {
      return copyToVehicle
    }
    
    // 'value' attribute on TextCell (id=VehicleNumber_Cell) at CopyCoverage_CopyToLV.pcf: line 32, column 42
    function value_10 () : java.lang.Integer {
      return copyToVehicle.VehicleNumber
    }
    
    // 'value' attribute on TextCell (id=vin_Cell) at CopyCoverage_CopyToLV.pcf: line 36, column 38
    function value_13 () : java.lang.String {
      return copyToVehicle.Vin
    }
    
    // 'value' attribute on TextCell (id=comp_Cell) at CopyCoverage_CopyToLV.pcf: line 40, column 228
    function value_16 () : java.lang.String {
      return copyToVehicle.PAComprehensiveCov.PACompDeductibleTerm.Value != null ? copyToVehicle.PAComprehensiveCov.PACompDeductibleTerm.DisplayValue : DisplayKey.get("Web.PolicyLine.CopyCoverages.NotSelected")
    }
    
    // 'value' attribute on TextCell (id=collision_Cell) at CopyCoverage_CopyToLV.pcf: line 44, column 220
    function value_18 () : java.lang.String {
      return copyToVehicle.PACollisionCov.PACollDeductibleTerm.Value != null ? copyToVehicle.PACollisionCov.PACollDeductibleTerm.DisplayValue : DisplayKey.get("Web.PolicyLine.CopyCoverages.NotSelected")
    }
    
    // 'value' attribute on TextCell (id=towing_Cell) at CopyCoverage_CopyToLV.pcf: line 48, column 196
    function value_20 () : java.lang.String {
      return copyToVehicle.PATowingLaborCovExists ? DisplayKey.get("Web.PolicyLine.CopyCoverages.Selected") : DisplayKey.get("Web.PolicyLine.CopyCoverages.NotSelected")
    }
    
    // 'value' attribute on TextCell (id=rental_Cell) at CopyCoverage_CopyToLV.pcf: line 52, column 229
    function value_22 () : java.lang.String {
      return copyToVehicle.PARentalCov.PARentalTerm.PackageValue.Description != null ? copyToVehicle.PARentalCov.PARentalTerm.PackageValue.Description : DisplayKey.get("Web.PolicyLine.CopyCoverages.NotSelected")
    }
    
    // 'value' attribute on TextCell (id=description_Cell) at CopyCoverage_CopyToLV.pcf: line 26, column 46
    function value_7 () : java.lang.String {
      return copyToVehicle.DisplayName
    }
    
    property get copyToVehicle () : entity.PersonalVehicle {
      return getIteratedValue(1) as entity.PersonalVehicle
    }
    
    
  }
  
  
}