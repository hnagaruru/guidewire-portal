package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/usersandsecurity/Attributes.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class AttributesExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/usersandsecurity/Attributes.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class AttributesExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex () : int {
      return 0
    }
    
    // 'action' attribute on ToolbarButton (id=Attributes_NewAttributeButton) at Attributes.pcf: line 21, column 25
    function action_1 () : void {
      NewAttribute.go()
    }
    
    // 'action' attribute on ToolbarButton (id=Attributes_NewAttributeButton) at Attributes.pcf: line 21, column 25
    function action_dest_2 () : pcf.api.Destination {
      return pcf.NewAttribute.createDestination()
    }
    
    // 'allCheckedRowsAction' attribute on CheckedValuesToolbarButton (id=Attributes_DeleteButton) at Attributes.pcf: line 28, column 25
    function allCheckedRowsAction_3 (CheckedValues :  entity.Attribute[], CheckedValuesErrors :  java.util.Map) : void {
      gw.api.admin.BaseAdminUtil.deleteAttributes(CheckedValues)
    }
    
    // 'canVisit' attribute on Page (id=Attributes) at Attributes.pcf: line 9, column 62
    static function canVisit_6 () : java.lang.Boolean {
      return perm.Attribute.view
    }
    
    // 'def' attribute on PanelRef at Attributes.pcf: line 31, column 41
    function def_onEnter_4 (def :  pcf.AttributesLV) : void {
      def.onEnter(attributes)
    }
    
    // 'def' attribute on PanelRef at Attributes.pcf: line 31, column 41
    function def_refreshVariables_5 (def :  pcf.AttributesLV) : void {
      def.refreshVariables(attributes)
    }
    
    // 'initialValue' attribute on Variable at Attributes.pcf: line 13, column 65
    function initialValue_0 () : gw.api.database.IQueryBeanResult<Attribute> {
      return gw.api.database.Query.make(Attribute).select()
    }
    
    // Page (id=Attributes) at Attributes.pcf: line 9, column 62
    static function parent_7 () : pcf.api.Destination {
      return pcf.UsersAndSecurity.createDestination()
    }
    
    override property get CurrentLocation () : pcf.Attributes {
      return super.CurrentLocation as pcf.Attributes
    }
    
    property get attributes () : gw.api.database.IQueryBeanResult<Attribute> {
      return getVariableValue("attributes", 0) as gw.api.database.IQueryBeanResult<Attribute>
    }
    
    property set attributes ($arg :  gw.api.database.IQueryBeanResult<Attribute>) {
      setVariableValue("attributes", 0, $arg)
    }
    
    
  }
  
  
}