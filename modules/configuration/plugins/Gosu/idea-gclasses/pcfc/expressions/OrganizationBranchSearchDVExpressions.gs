package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/search/OrganizationBranchSearchDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class OrganizationBranchSearchDVExpressions {
  @javax.annotation.Generated("config/web/pcf/search/OrganizationBranchSearchDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class OrganizationBranchSearchDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on InputSetRef at OrganizationBranchSearchDV.pcf: line 24, column 41
    function def_onEnter_8 (def :  pcf.SearchAndResetInputSet) : void {
      def.onEnter()
    }
    
    // 'def' attribute on InputSetRef at OrganizationBranchSearchDV.pcf: line 24, column 41
    function def_refreshVariables_9 (def :  pcf.SearchAndResetInputSet) : void {
      def.refreshVariables()
    }
    
    // 'value' attribute on TextInput (id=Name_Input) at OrganizationBranchSearchDV.pcf: line 15, column 44
    function defaultSetter_1 (__VALUE_TO_SET :  java.lang.Object) : void {
      searchCriteria.BranchName = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=BranchCode_Input) at OrganizationBranchSearchDV.pcf: line 20, column 44
    function defaultSetter_5 (__VALUE_TO_SET :  java.lang.Object) : void {
      searchCriteria.BranchCode = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=Name_Input) at OrganizationBranchSearchDV.pcf: line 15, column 44
    function valueRoot_2 () : java.lang.Object {
      return searchCriteria
    }
    
    // 'value' attribute on TextInput (id=Name_Input) at OrganizationBranchSearchDV.pcf: line 15, column 44
    function value_0 () : java.lang.String {
      return searchCriteria.BranchName
    }
    
    // 'value' attribute on TextInput (id=BranchCode_Input) at OrganizationBranchSearchDV.pcf: line 20, column 44
    function value_4 () : java.lang.String {
      return searchCriteria.BranchCode
    }
    
    property get searchCriteria () : GroupSearchCriteria {
      return getRequireValue("searchCriteria", 0) as GroupSearchCriteria
    }
    
    property set searchCriteria ($arg :  GroupSearchCriteria) {
      setRequireValue("searchCriteria", 0, $arg)
    }
    
    
  }
  
  
}