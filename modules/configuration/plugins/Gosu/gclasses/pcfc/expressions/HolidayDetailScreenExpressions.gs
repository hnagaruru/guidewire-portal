package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/holidays/HolidayDetailScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class HolidayDetailScreenExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/holidays/HolidayDetailScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class HolidayDetailScreenExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on PanelRef at HolidayDetailScreen.pcf: line 66, column 45
    function def_onEnter_29 (def :  pcf.HolidayDetailDV_CA) : void {
      def.onEnter(Holiday)
    }
    
    // 'def' attribute on PanelRef at HolidayDetailScreen.pcf: line 66, column 45
    function def_onEnter_31 (def :  pcf.HolidayDetailDV_US) : void {
      def.onEnter(Holiday)
    }
    
    // 'def' attribute on PanelRef at HolidayDetailScreen.pcf: line 66, column 45
    function def_onEnter_33 (def :  pcf.HolidayDetailDV_default) : void {
      def.onEnter(Holiday)
    }
    
    // 'def' attribute on PanelRef at HolidayDetailScreen.pcf: line 91, column 126
    function def_onEnter_47 (def :  pcf.LocalizedValuesDV) : void {
      def.onEnter(Holiday, { "Name"}, { DisplayKey.get("Web.Admin.HolidayDetailDV.Name") })
    }
    
    // 'def' attribute on PanelRef at HolidayDetailScreen.pcf: line 66, column 45
    function def_refreshVariables_30 (def :  pcf.HolidayDetailDV_CA) : void {
      def.refreshVariables(Holiday)
    }
    
    // 'def' attribute on PanelRef at HolidayDetailScreen.pcf: line 66, column 45
    function def_refreshVariables_32 (def :  pcf.HolidayDetailDV_US) : void {
      def.refreshVariables(Holiday)
    }
    
    // 'def' attribute on PanelRef at HolidayDetailScreen.pcf: line 66, column 45
    function def_refreshVariables_34 (def :  pcf.HolidayDetailDV_default) : void {
      def.refreshVariables(Holiday)
    }
    
    // 'def' attribute on PanelRef at HolidayDetailScreen.pcf: line 91, column 126
    function def_refreshVariables_48 (def :  pcf.LocalizedValuesDV) : void {
      def.refreshVariables(Holiday, { "Name"}, { DisplayKey.get("Web.Admin.HolidayDetailDV.Name") })
    }
    
    // 'value' attribute on BooleanRadioInput (id=AllZones_Input) at HolidayDetailScreen.pcf: line 39, column 47
    function defaultSetter_12 (__VALUE_TO_SET :  java.lang.Object) : void {
      Holiday.AppliesToAllZones = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on RangeInput (id=Country_Input) at HolidayDetailScreen.pcf: line 57, column 50
    function defaultSetter_22 (__VALUE_TO_SET :  java.lang.Object) : void {
      country = (__VALUE_TO_SET as typekey.Country)
    }
    
    // 'value' attribute on TextAreaInput (id=Tags_Input) at HolidayDetailScreen.pcf: line 76, column 39
    function defaultSetter_37 (__VALUE_TO_SET :  java.lang.Object) : void {
      Holiday.TagsString = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=Name_Input) at HolidayDetailScreen.pcf: line 27, column 35
    function defaultSetter_4 (__VALUE_TO_SET :  java.lang.Object) : void {
      Holiday.Name = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on RangeInput (id=TagInput_Input) at HolidayDetailScreen.pcf: line 87, column 49
    function defaultSetter_41 (__VALUE_TO_SET :  java.lang.Object) : void {
      Holiday.TagsArray = (__VALUE_TO_SET as typekey.HolidayTagCode[])
    }
    
    // 'value' attribute on DateInput (id=Date_Input) at HolidayDetailScreen.pcf: line 33, column 45
    function defaultSetter_8 (__VALUE_TO_SET :  java.lang.Object) : void {
      Holiday.OccurrenceDate = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'initialValue' attribute on Variable at HolidayDetailScreen.pcf: line 13, column 23
    function initialValue_0 () : Country {
      return gw.api.admin.BaseAdminUtil.getDefaultCountry()
    }
    
    // EditButtons at HolidayDetailScreen.pcf: line 16, column 42
    function label_2 () : java.lang.Object {
      return gw.api.util.LocationUtil.hasOwnBundle(CurrentLocation) ? DisplayKey.get("Button.Update") : DisplayKey.get("Button.OK")
    }
    
    // 'mode' attribute on PanelRef at HolidayDetailScreen.pcf: line 66, column 45
    function mode_35 () : java.lang.Object {
      return country
    }
    
    // 'valueRange' attribute on RangeInput (id=Country_Input) at HolidayDetailScreen.pcf: line 57, column 50
    function valueRange_23 () : java.lang.Object {
      return getPossibleCountries()
    }
    
    // 'valueRange' attribute on RangeInput (id=TagInput_Input) at HolidayDetailScreen.pcf: line 87, column 49
    function valueRange_43 () : java.lang.Object {
      return Holiday.getTagRange()
    }
    
    // 'value' attribute on TextInput (id=Name_Input) at HolidayDetailScreen.pcf: line 27, column 35
    function valueRoot_5 () : java.lang.Object {
      return Holiday
    }
    
    // 'value' attribute on BooleanRadioInput (id=AllZones_Input) at HolidayDetailScreen.pcf: line 39, column 47
    function value_11 () : java.lang.Boolean {
      return Holiday.AppliesToAllZones
    }
    
    // 'value' attribute on TextAreaInput (id=Zones_Input) at HolidayDetailScreen.pcf: line 47, column 51
    function value_16 () : java.lang.String {
      return Holiday.Zones
    }
    
    // 'value' attribute on RangeInput (id=Country_Input) at HolidayDetailScreen.pcf: line 57, column 50
    function value_21 () : typekey.Country {
      return country
    }
    
    // 'value' attribute on TextInput (id=Name_Input) at HolidayDetailScreen.pcf: line 27, column 35
    function value_3 () : java.lang.String {
      return Holiday.Name
    }
    
    // 'value' attribute on TextAreaInput (id=Tags_Input) at HolidayDetailScreen.pcf: line 76, column 39
    function value_36 () : java.lang.String {
      return Holiday.TagsString
    }
    
    // 'value' attribute on RangeInput (id=TagInput_Input) at HolidayDetailScreen.pcf: line 87, column 49
    function value_40 () : typekey.HolidayTagCode[] {
      return Holiday.TagsArray
    }
    
    // 'value' attribute on DateInput (id=Date_Input) at HolidayDetailScreen.pcf: line 33, column 45
    function value_7 () : java.util.Date {
      return Holiday.OccurrenceDate
    }
    
    // 'valueRange' attribute on RangeInput (id=Country_Input) at HolidayDetailScreen.pcf: line 57, column 50
    function verifyValueRangeIsAllowedType_24 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Country_Input) at HolidayDetailScreen.pcf: line 57, column 50
    function verifyValueRangeIsAllowedType_24 ($$arg :  typekey.Country[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=TagInput_Input) at HolidayDetailScreen.pcf: line 87, column 49
    function verifyValueRangeIsAllowedType_44 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=TagInput_Input) at HolidayDetailScreen.pcf: line 87, column 49
    function verifyValueRangeIsAllowedType_44 ($$arg :  typekey.HolidayTagCode[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Country_Input) at HolidayDetailScreen.pcf: line 57, column 50
    function verifyValueRange_25 () : void {
      var __valueRangeArg = getPossibleCountries()
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_24(__valueRangeArg)
    }
    
    // 'valueRange' attribute on RangeInput (id=TagInput_Input) at HolidayDetailScreen.pcf: line 87, column 49
    function verifyValueRange_45 () : void {
      var __valueRangeArg = Holiday.getTagRange()
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_44(__valueRangeArg)
    }
    
    // 'editVisible' attribute on EditButtons at HolidayDetailScreen.pcf: line 16, column 42
    function visible_1 () : java.lang.Boolean {
      return perm.Holiday.edit
    }
    
    // 'visible' attribute on TextAreaInput (id=Zones_Input) at HolidayDetailScreen.pcf: line 47, column 51
    function visible_15 () : java.lang.Boolean {
      return !Holiday.AppliesToAllZones
    }
    
    property get Holiday () : Holiday {
      return getRequireValue("Holiday", 0) as Holiday
    }
    
    property set Holiday ($arg :  Holiday) {
      setRequireValue("Holiday", 0, $arg)
    }
    
    property get country () : Country {
      return getVariableValue("country", 0) as Country
    }
    
    property set country ($arg :  Country) {
      setVariableValue("country", 0, $arg)
    }
    
    function getPossibleCountries() : java.util.List<Country> {
      var org = User.util.CurrentUser.Organization
      if (org == null) {
        org = User.util.UnrestrictedUser.Organization
      }
      return org.Countries
    }
    
    
  }
  
  
}